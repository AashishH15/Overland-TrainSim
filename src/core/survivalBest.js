import { fmtSimDuration } from "./config.js";

const BEST_KEY = "railEmpireSurvivalBest_v1";

export function getSurvivalBestSec() {
  try {
    const v = localStorage.getItem(BEST_KEY);
    if (v == null) return 0;
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

export function formatSurvivalBest() {
  const sec = getSurvivalBestSec();
  return sec > 0 ? fmtSimDuration(sec) : null;
}

/** Record a run time; returns { isNew, bestSec, previousSec }. */
export function recordSurvivalBest(simSec) {
  const time = Math.max(0, Math.floor(simSec));
  const previousSec = getSurvivalBestSec();
  const isNew = time > previousSec;
  if (isNew) {
    try {
      localStorage.setItem(BEST_KEY, String(time));
    } catch (e) {
      console.warn("best save failed", e);
    }
  }
  return { isNew, bestSec: isNew ? time : previousSec, previousSec, runSec: time };
}
