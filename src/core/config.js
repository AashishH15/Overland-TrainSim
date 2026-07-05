// Central tuning knobs for economy, trains and track.

export const TRACK_TYPES = {
  1: {
    id: 1,
    name: "Standard Track",
    color: 0x8d99ae,
    // cost per world-unit of length, per map
    costPerUnit: { usa: 2500, nyc: 9000 },
    maintPerUnitPerMin: 1.2,
    allows: (tier) => tier === 1,
  },
  2: {
    id: 2,
    name: "High-Speed Track",
    color: 0xffb547,
    costPerUnit: { usa: 6500, nyc: 22000 },
    maintPerUnitPerMin: 2.6,
    allows: (tier) => tier === 1 || tier === 2,
  },
  3: {
    id: 3,
    name: "Maglev Guideway",
    color: 0x55b6ff,
    costPerUnit: { usa: 15000, nyc: 48000 },
    maintPerUnitPerMin: 5.0,
    allows: (tier) => tier === 3,
  },
};

// Extra multiplier applied to the fraction of an edge that crosses water (NYC only).
export const WATER_COST_MULT = 2.6;

export const TIERS = {
  1: {
    id: 1,
    name: "Tier I Standard Rail",
    short: "Standard",
    desc: "Classic boxy regional train. Cheap, flexible, runs on standard or high-speed track.",
    speed: { usa: 7, nyc: 9 },       // world units / sim-second
    capacity: 200,
    price: 120000,
    opsPerMin: 450,                   // $/sim-minute while owned
    fareMult: 1.0,
    color: 0x4cd97b,
    minTrack: "Standard or High-Speed",
  },
  2: {
    id: 2,
    name: "Tier II High-Speed Rail",
    short: "High-Speed",
    desc: "Sleek aerodynamic trainset up to 220 mph. Requires dedicated High-Speed Track.",
    speed: { usa: 14, nyc: 15 },
    capacity: 320,
    price: 420000,
    opsPerMin: 1150,
    fareMult: 1.5,
    color: 0xffb547,
    minTrack: "High-Speed only",
  },
  3: {
    id: 3,
    name: "Tier III Maglev",
    short: "Maglev",
    desc: "Futuristic maglev pod up to 400 mph. Requires premium Maglev Guideway.",
    speed: { usa: 24, nyc: 24 },
    capacity: 420,
    price: 1150000,
    opsPerMin: 2600,
    fareMult: 2.2,
    color: 0x55b6ff,
    minTrack: "Maglev Guideway only",
  },
};

export const ECON = {
  startCash: 1600000,
  farePerUnit: { usa: 40, nyc: 10 },    // $ per passenger per world-unit travelled
  stationCostBase: { usa: 60000, nyc: 45000 },
  // station cost scales with demand: cost = base * (1 + demand * stationDemandFactor)
  stationDemandFactor: 0.5,
  upgradeSurcharge: 0.25,              // upgrading track costs (newCost - oldCost) * (1 + this)
  debtLimit: -250000,                  // bankruptcy below this
  debtGraceSec: 45,                    // sim-seconds allowed below the limit before game over
  dwellTime: 2.2,                      // seconds a train waits at each stop
};

// Nodes with rank <= this are in your starter network on the USA map; expanding
// into other metros costs a fee that scales with metro size.
export const USA_FREE_RANKS = 12;
export const unlockCost = (pop) => Math.round((30000 + pop * 22000) / 1000) * 1000;

export const SIM = {
  tickSeconds: 0.5,          // passenger/economy tick length in sim-seconds
  demandScale: { usa: 0.15, nyc: 0.30 }, // passengers per demand-point per sim-second
  maxWaitingPerStop: 400,
};

export const fmtMoney = (v) => {
  const sign = v < 0 ? "-" : "";
  v = Math.abs(v);
  if (v >= 1e6) return `${sign}$${(v / 1e6).toFixed(2)}M`;
  if (v >= 1e3) return `${sign}$${(v / 1e3).toFixed(1)}k`;
  return `${sign}$${Math.round(v)}`;
};

export const fmtInt = (v) => Math.round(v).toLocaleString("en-US");
