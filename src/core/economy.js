import { TRACK_TYPES, ECON, WATER_COST_MULT, unlockCost } from "./config.js";

export function trackCost(mapKey, type, length, waterFrac = 0) {
  const base = TRACK_TYPES[type].costPerUnit[mapKey] * length;
  const mult = 1 + waterFrac * (WATER_COST_MULT - 1);
  return Math.round(base * mult);
}

export function edgeBuildCost(mapKey, edge) {
  return trackCost(mapKey, edge.type, edge.length, edge.waterFrac);
}

export function upgradeCost(mapKey, edge, newType) {
  const oldCost = edgeBuildCost(mapKey, edge);
  const newCost = trackCost(mapKey, newType, edge.length, edge.waterFrac);
  return Math.max(0, Math.round((newCost - oldCost) * (1 + ECON.upgradeSurcharge)));
}

export function stationCost(mapKey, node) {
  return Math.round(ECON.stationCostBase[mapKey] * (1 + node.demand * ECON.stationDemandFactor));
}

export function nodeUnlockCost(node) {
  return unlockCost(node.pop ?? 1);
}

export function bulldozeRefund(mapKey, edge) {
  return Math.round(edgeBuildCost(mapKey, edge) * 0.25);
}
