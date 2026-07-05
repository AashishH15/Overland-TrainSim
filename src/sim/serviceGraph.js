import { shortestPath, cachedDijkstra } from "../core/graph.js";

// --- service graph cache (train routes, not raw track) ---

const serviceCache = new Map(); // key -> { adj, distCache: Map(origin -> {dist, prev}) }

function serviceCacheKey(state, mapKey) {
  const ms = state.maps[mapKey];
  let sig = `${mapKey}:${ms.pathVersion ?? 0}`;
  for (const train of Object.values(state.trains)) {
    if (train.map !== mapKey || train.route.length < 2 || !train.path) continue;
    sig += `|${train.id}:${train.route.join(">")}`;
  }
  return sig;
}

function getServiceCache(state, mapKey) {
  const key = serviceCacheKey(state, mapKey);
  let c = serviceCache.get(key);
  if (c) return c;
  c = { key, adj: buildServiceAdjacency(state, mapKey), distCache: new Map() };
  serviceCache.set(key, c);
  // Drop stale entries (keep cache small).
  if (serviceCache.size > 8) {
    for (const k of serviceCache.keys()) {
      if (k !== key) serviceCache.delete(k);
    }
  }
  return c;
}

/** Track distance along a train's loop from route[i] forward by `hops` stops. */
function routeLegDistance(ms, route, startIdx, hops) {
  let total = 0;
  const n = route.length;
  for (let h = 0; h < hops; h++) {
    const a = route[(startIdx + h) % n];
    const b = route[(startIdx + h + 1) % n];
    const sp = shortestPath(ms, a, b, null);
    if (!sp) return Infinity;
    total += sp.dist;
  }
  return total;
}

/** Stations reachable in one seated leg on a single train (forward along its loop). */
function buildServiceAdjacency(state, mapKey) {
  const adj = {};
  const ms = state.maps[mapKey];

  const addEdge = (from, to, weight) => {
    if (weight === Infinity) return;
    const list = adj[from] ??= [];
    const existing = list.find((e) => e.to === to);
    if (!existing || weight < existing.weight) {
      if (existing) existing.weight = weight;
      else list.push({ to, weight });
    }
  };

  for (const train of Object.values(state.trains)) {
    if (train.map !== mapKey || train.route.length < 2 || !train.path) continue;
    const route = train.route;
    const n = route.length;
    for (let i = 0; i < n; i++) {
      for (let hops = 1; hops < n; hops++) {
        const from = route[i];
        const to = route[(i + hops) % n];
        addEdge(from, to, routeLegDistance(ms, route, i, hops));
      }
    }
  }
  return adj;
}

function serviceDijkstra(state, mapKey, origin) {
  const c = getServiceCache(state, mapKey);
  if (c.distCache.has(origin)) return c.distCache.get(origin);

  const dist = { [origin]: 0 };
  const prev = {};
  const visited = new Set();

  while (true) {
    let u = null;
    let best = Infinity;
    for (const id in dist) {
      if (!visited.has(id) && dist[id] < best) {
        best = dist[id];
        u = id;
      }
    }
    if (u === null) break;
    visited.add(u);
    for (const { to, weight } of c.adj[u] ?? []) {
      const nd = dist[u] + weight;
      if (nd < (dist[to] ?? Infinity)) {
        dist[to] = nd;
        prev[to] = u;
      }
    }
  }

  const result = { dist, prev };
  c.distCache.set(origin, result);
  return result;
}

export function serviceReachable(state, mapKey, from, to) {
  if (from === to) return false;
  const { dist } = serviceDijkstra(state, mapKey, from);
  return dist[to] !== undefined;
}

export function serviceDistance(state, mapKey, from, to) {
  if (from === to) return 0;
  const { dist } = serviceDijkstra(state, mapKey, from);
  return dist[to] ?? Infinity;
}

/** True if this train runs from `from` to `to` forward along its loop. */
export function trainServesLeg(train, from, to) {
  if (from === to) return false;
  const route = train.route;
  const start = route.indexOf(from);
  if (start < 0) return false;
  for (let hops = 1; hops < route.length; hops++) {
    if (route[(start + hops) % route.length] === to) return true;
  }
  return false;
}

/** First stop after `from` on a service-network shortest path toward `dest`. */
export function serviceFirstHop(state, mapKey, from, dest) {
  const { dist, prev } = serviceDijkstra(state, mapKey, from);
  if (dist[dest] === undefined) return null;
  let cur = dest;
  while (prev[cur] && prev[cur] !== from) cur = prev[cur];
  return cur;
}

/** Can a waiting passenger board this train toward `dest` (direct or via transfer)? */
export function canBoardTrain(state, mapKey, train, stopId, dest) {
  if (dest === stopId) return false;
  if (train.route.includes(dest)) return true;
  const hop = serviceFirstHop(state, mapKey, stopId, dest);
  if (!hop) return false;
  return trainServesLeg(train, stopId, hop);
}

/** Stations reachable from `origin` via train service (or track if no trains yet). */
export function serviceReachableStations(state, mapKey, origin) {
  const ms = state.maps[mapKey];
  const c = getServiceCache(state, mapKey);
  const hasService = Object.keys(c.adj).length > 0;
  const dist = hasService
    ? serviceDijkstra(state, mapKey, origin).dist
    : cachedDijkstra(mapKey, ms, origin).dist;

  const out = [];
  for (const id in dist) {
    if (id !== origin && ms.nodes[id]?.station) {
      out.push({ id, dist: dist[id] });
    }
  }
  return out;
}

/** At `stopId`, should a transfer passenger get off this train to wait for a connection? */
export function shouldTransferAtStop(state, mapKey, train, stopId, dest) {
  if (train.route.includes(dest)) return false;
  const here = serviceDistance(state, mapKey, stopId, dest);
  if (here === Infinity) return false;

  const idx = train.route.indexOf(stopId);
  if (idx < 0) return false;

  let bestOnTrain = here;
  for (let j = 0; j < train.route.length; j++) {
    const s = train.route[(idx + j) % train.route.length];
    bestOnTrain = Math.min(bestOnTrain, serviceDistance(state, mapKey, s, dest));
  }
  return here <= bestOnTrain;
}

/** Merge a waiting group into a node's queue. */
export function mergeWaiting(node, count, dest, fareDist) {
  const existing = node.waiting.find((g) => g.dest === dest);
  if (existing) existing.count += count;
  else node.waiting.push({ count, dest, fareDist });
}
