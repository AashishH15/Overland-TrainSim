import { TIERS, TRACK_TYPES, ECON, SIM } from "../core/config.js";
import { shortestPath, cachedDijkstra, reachableStations } from "../core/graph.js";
import { emit } from "../core/bus.js";

let tickAcc = 0;

// Time-of-day demand factor: gentle rush-hour waves (one "day" = 4 sim-minutes).
export function demandFactor(simTime) {
  const day = (simTime / 240) * Math.PI * 2;
  return 0.75 + 0.45 * Math.max(0, Math.sin(day)) + 0.25 * Math.max(0, Math.sin(day * 2 + 1.3));
}

export function stepSimulation(state, dt) {
  if (state.gameOver || state.speed === 0) return;
  const simDt = dt * state.speed;
  state.simTime += simDt;

  updateTrains(state, simDt);

  tickAcc += simDt;
  while (tickAcc >= SIM.tickSeconds) {
    tickAcc -= SIM.tickSeconds;
    economyTick(state, SIM.tickSeconds);
  }
}

function economyTick(state, dt) {
  const df = demandFactor(state.simTime);

  for (const mapKey of ["usa", "nyc"]) {
    const ms = state.maps[mapKey];

    // Passenger spawning at stations that can reach at least one other station.
    for (const node of Object.values(ms.nodes)) {
      if (!node.station) continue;
      const reachable = reachableStations(mapKey, ms, node.id);
      if (reachable.length === 0) continue;

      const waitingCount = node.waiting.reduce((s, g) => s + g.count, 0);
      if (waitingCount >= SIM.maxWaitingPerStop) continue;

      node.spawnAcc += node.demand * SIM.demandScale[mapKey] * df * dt;
      if (node.spawnAcc < 1) continue;
      const spawn = Math.floor(node.spawnAcc);
      node.spawnAcc -= spawn;

      // Destination: weighted by demand, mildly discounted by distance.
      let totalW = 0;
      const weights = reachable.map((r) => {
        const d = ms.nodes[r.id].demand;
        const w = Math.pow(d, 1.2) / (0.6 + r.dist / 50);
        totalW += w;
        return w;
      });
      let pick = Math.random() * totalW;
      let destIdx = 0;
      for (let i = 0; i < weights.length; i++) {
        pick -= weights[i];
        if (pick <= 0) { destIdx = i; break; }
      }
      const dest = reachable[destIdx];
      const existing = node.waiting.find((g) => g.dest === dest.id);
      if (existing) existing.count += spawn;
      else node.waiting.push({ count: spawn, dest: dest.id, fareDist: dest.dist });
    }

    // Track maintenance.
    for (const edge of Object.values(ms.edges)) {
      state.cash -= TRACK_TYPES[edge.type].maintPerUnitPerMin * edge.length * (dt / 60);
    }
  }

  // Train operating costs.
  for (const train of Object.values(state.trains)) {
    state.cash -= TIERS[train.tier].opsPerMin * (dt / 60);
  }

  // Debt / bankruptcy check.
  if (state.cash < ECON.debtLimit) {
    state.debtTimer += dt;
    if (state.debtTimer > ECON.debtGraceSec) {
      state.gameOver = true;
      emit("gameOver");
    } else if (Math.floor(state.debtTimer) !== Math.floor(state.debtTimer - dt)) {
      emit("toast", {
        msg: `Deep in debt! Bankruptcy in ${Math.ceil(ECON.debtGraceSec - state.debtTimer)}s`,
        kind: "bad",
      });
    }
  } else {
    state.debtTimer = 0;
  }
}

// ---------------- trains ----------------

export function computeTrainPath(state, train) {
  // Expand route stops into a full cyclic node sequence using tier-legal track.
  const ms = state.maps[train.map];
  if (train.route.length < 2) return null;
  const full = [];
  const loop = [...train.route, train.route[0]];
  for (let i = 0; i < loop.length - 1; i++) {
    const sp = shortestPath(ms, loop[i], loop[i + 1], train.tier);
    if (!sp) return null;
    if (i === 0) full.push(...sp.path);
    else full.push(...sp.path.slice(1));
  }
  return full;
}

export function assignRoute(state, train, route) {
  train.route = route;
  const path = computeTrainPath(state, train);
  if (!path) {
    train.path = null;
    train.state = "idle";
    return false;
  }
  train.path = path;
  train.seg = 0;
  train.prog = 0;
  train.dwell = 0;
  train.state = "run";
  return true;
}

export function revalidateTrains(state) {
  // Called after track changes: re-path every train; strand ones that can't run.
  for (const train of Object.values(state.trains)) {
    if (train.route.length < 2) continue;
    const path = computeTrainPath(state, train);
    if (!path) {
      train.path = null;
      train.state = "idle";
      emit("toast", { msg: `${TIERS[train.tier].short} train #${train.num} lost its route`, kind: "bad" });
    } else if (train.state === "idle" || !train.path) {
      train.path = path;
      train.seg = 0;
      train.prog = 0;
      train.state = "run";
    } else {
      // Keep position if current segment still exists in new path; else reset.
      train.path = path;
      if (train.seg >= path.length - 1) { train.seg = 0; train.prog = 0; }
    }
  }
}

function updateTrains(state, simDt) {
  for (const train of Object.values(state.trains)) {
    if (train.state === "idle" || !train.path) continue;
    const ms = state.maps[train.map];
    const speed = TIERS[train.tier].speed[train.map];

    if (train.state === "dwell") {
      train.dwell -= simDt;
      if (train.dwell <= 0) train.state = "run";
      else continue;
    }

    let remaining = speed * simDt;
    while (remaining > 0 && train.state === "run") {
      const a = ms.nodes[train.path[train.seg]];
      const b = ms.nodes[train.path[train.seg + 1]];
      if (!a || !b) { train.state = "idle"; break; }
      const segLen = Math.hypot(b.x - a.x, b.z - a.z);
      const left = segLen - train.prog;

      if (remaining < left) {
        train.prog += remaining;
        remaining = 0;
      } else {
        remaining -= left;
        train.seg++;
        train.prog = 0;
        if (train.seg >= train.path.length - 1) train.seg = 0;
        const arrived = train.path[train.seg];
        if (train.route.includes(arrived)) {
          handleStop(state, train, arrived);
          train.state = "dwell";
          train.dwell = ECON.dwellTime;
          remaining = 0;
        }
      }
    }
  }
}

function handleStop(state, train, nodeId) {
  const ms = state.maps[train.map];
  const node = ms.nodes[nodeId];
  const tier = TIERS[train.tier];

  // Unload passengers destined here.
  let delivered = 0;
  let revenue = 0;
  train.passengers = train.passengers.filter((g) => {
    if (g.dest !== nodeId) return true;
    delivered += g.count;
    revenue += g.count * g.fareDist * fareFor(train.map) * tier.fareMult;
    return false;
  });
  if (delivered > 0) {
    state.cash += revenue;
    state.totalDelivered += delivered;
    state.totalRevenue += revenue;
    node.servedTotal += delivered;
    train.revenueTotal += revenue;
    state.incomeWindow.push([state.simTime, revenue]);
    emit("delivered", { train, node, delivered, revenue });
  }

  // Board waiting groups whose destination is on this train's route.
  let capacityLeft = tier.capacity - train.passengers.reduce((s, g) => s + g.count, 0);
  if (capacityLeft <= 0) return;
  for (const group of [...node.waiting]) {
    if (capacityLeft <= 0) break;
    if (!train.route.includes(group.dest) || group.dest === nodeId) continue;
    const take = Math.min(group.count, capacityLeft);
    group.count -= take;
    capacityLeft -= take;
    // Fare distance: shortest any-track path from here to destination.
    const { dist } = cachedDijkstra(train.map, ms, nodeId);
    const fareDist = dist[group.dest] ?? group.fareDist;
    const carried = train.passengers.find((g) => g.dest === group.dest);
    if (carried) carried.count += take;
    else train.passengers.push({ count: take, dest: group.dest, fareDist });
    if (group.count <= 0) node.waiting.splice(node.waiting.indexOf(group), 1);
  }
}

function fareFor(mapKey) {
  return ECON.farePerUnit[mapKey];
}

// Rolling income per minute for the HUD.
export function incomePerMin(state) {
  const cutoff = state.simTime - 60;
  state.incomeWindow = state.incomeWindow.filter(([t]) => t >= cutoff);
  return state.incomeWindow.reduce((s, [, v]) => s + v, 0);
}
