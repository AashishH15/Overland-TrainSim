/** Best-effort anti-tamper for a client-only game — deters casual console edits. */

const SALT = "railEmpire-integrity-v1";
const WATCHED = [
  "cash",
  "totalDelivered",
  "totalRevenue",
  "totalLost",
  "cityMapsUnlocked",
  "simTime",
  "survivalTime",
  "clockStarted",
  "officialRun",
];

let writeDepth = 0;
const guarded = new WeakSet();

export function permitStateWrites(fn) {
  writeDepth++;
  try {
    return fn();
  } finally {
    writeDepth--;
  }
}

function markTampered(state) {
  if (state.officialRun === false) return;
  permitStateWrites(() => {
    state.officialRun = false;
  });
}

export function isOfficialRun(state) {
  return state.officialRun !== false;
}

function djb2(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(36);
}

export function computeSeal(state) {
  const parts = [
    Math.round(state.cash * 100),
    Math.round(state.totalRevenue * 100),
    state.totalDelivered | 0,
    state.totalLost | 0,
    state.cityMapsUnlocked ? 1 : 0,
    Math.round(state.simTime * 10),
    Math.round((state.survivalTime ?? 0) * 10),
    state.clockStarted ? 1 : 0,
    state.officialRun === false ? 0 : 1,
    Object.keys(state.trains ?? {}).length,
    state.nextTrainId | 0,
  ];
  return djb2(`${SALT}|${parts.join("|")}`);
}

export function applySaveSeal(state) {
  permitStateWrites(() => {
    state._seal = computeSeal(state);
  });
}

export function verifySaveSeal(state) {
  if (!state._seal) return;
  if (state._seal === computeSeal(state)) return;
  markTampered(state);
}

/** Trap direct assignments (e.g. game.state.cash = 1e9 in the console). */
export function guardStateIntegrity(state) {
  if (guarded.has(state)) return state;
  if (state.officialRun == null) state.officialRun = true;

  const store = {};
  for (const key of WATCHED) store[key] = state[key];

  for (const key of WATCHED) {
    Object.defineProperty(state, key, {
      enumerable: true,
      configurable: true,
      get() {
        return store[key];
      },
      set(value) {
        if (writeDepth === 0) markTampered(state);
        store[key] = value;
      },
    });
  }

  guarded.add(state);
  return state;
}
