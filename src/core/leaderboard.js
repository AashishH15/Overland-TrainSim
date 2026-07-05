import { getDeviceId } from "../util/deviceId.js";

const HANDLE_KEY = "overland.playerHandle";
const PROD_ENDPOINT = "https://overlandgame.netlify.app/.netlify/functions/leaderboard";

export function getSavedHandle() {
  return localStorage.getItem(HANDLE_KEY) || "";
}

export function saveHandle(handle) {
  if (handle) localStorage.setItem(HANDLE_KEY, handle.trim());
}

function getLocalMockBoard(map) {
  try {
    const data = localStorage.getItem(`overland.localLeaderboard_${map}`);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveLocalMockBoard(map, entry) {
  try {
    let board = getLocalMockBoard(map);
    const idx = board.findIndex((e) => e.deviceId === entry.deviceId);
    if (idx >= 0) {
      if (entry.survivedSec >= board[idx].survivedSec) board[idx] = entry;
    } else {
      board.push(entry);
    }
    board.sort((a, b) => b.survivedSec - a.survivedSec);
    localStorage.setItem(`overland.localLeaderboard_${map}`, JSON.stringify(board.slice(0, 50)));
  } catch {}
}

export async function fetchLeaderboard(map = "usa") {
  // 1. Try relative function endpoint (Netlify environment)
  try {
    const res = await fetch(`/.netlify/functions/leaderboard?map=${encodeURIComponent(map)}`);
    const contentType = res.headers.get("content-type") || "";
    if (res.ok && contentType.includes("application/json")) {
      return await res.json();
    }
  } catch {}

  // 2. Fallback to production endpoint if running on local dev
  try {
    const prodRes = await fetch(`${PROD_ENDPOINT}?map=${encodeURIComponent(map)}`);
    const contentType = prodRes.headers.get("content-type") || "";
    if (prodRes.ok && contentType.includes("application/json")) {
      return await prodRes.json();
    }
  } catch {}

  // 3. Local mock fallback (offline / standalone local dev)
  return { map, entries: getLocalMockBoard(map) };
}

export async function submitLeaderboardScore({ handle, mode = "survival", map, survivedSec, trains, passengers }) {
  const deviceId = getDeviceId();
  const cleanHandle = handle.trim();
  saveHandle(cleanHandle);

  const payload = {
    handle: cleanHandle,
    mode,
    map,
    survivedSec: Math.round(survivedSec),
    trains: Math.max(1, trains),
    passengers: Math.max(0, passengers),
    deviceId,
  };

  // 1. Try local Netlify Function endpoint
  try {
    const res = await fetch("/.netlify/functions/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const contentType = res.headers.get("content-type") || "";
    if (res.ok && contentType.includes("application/json")) {
      return await res.json();
    }
    if (!res.ok && contentType.includes("application/json")) {
      const errData = await res.json();
      throw new Error(errData.error || "Submission rejected");
    }
  } catch (e) {
    if (e.message && e.message !== "Failed to fetch" && !e.message.includes("NetworkError")) {
      throw e;
    }
  }

  // 2. Try production Netlify Function endpoint (for local dev testing)
  try {
    const prodRes = await fetch(PROD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const contentType = prodRes.headers.get("content-type") || "";
    if (prodRes.ok && contentType.includes("application/json")) {
      return await prodRes.json();
    }
    if (!prodRes.ok && contentType.includes("application/json")) {
      const errData = await prodRes.json();
      throw new Error(errData.error || "Submission rejected");
    }
  } catch (e) {
    if (e.message && !e.message.includes("Failed to fetch") && !e.message.includes("NetworkError")) {
      throw e;
    }
  }

  // 3. Save to local mock storage during offline local dev
  const mockEntry = {
    handle: cleanHandle,
    survivedSec: Math.round(survivedSec),
    trains: Math.max(1, trains),
    passengers: Math.max(0, passengers),
    deviceId,
    date: new Date().toISOString().split("T")[0],
  };
  saveLocalMockBoard(map, mockEntry);
  return { success: true, localMock: true, entry: mockEntry };
}
