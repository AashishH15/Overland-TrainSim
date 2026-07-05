import { fetchLeaderboard } from "../core/leaderboard.js";
import { fmtSimDuration, fmtInt } from "../core/config.js";
import { getDeviceId } from "../util/deviceId.js";
import { icon } from "./icons.js";

function mapLabel(mapKey) {
  return mapKey === "nyc" ? "New York City" : "USA National";
}

function rankBadge(rank) {
  if (rank === 1) return `<span class="rank-badge gold">${icon("trophy")} 1</span>`;
  if (rank === 2) return `<span class="rank-badge silver">2</span>`;
  if (rank === 3) return `<span class="rank-badge bronze">3</span>`;
  return `<span class="rank-badge">#${rank}</span>`;
}

export async function openLeaderboardModal(game, initialMap = game?.state?.currentMap || "usa") {
  if (document.getElementById("leaderboard-modal-backdrop")) return;

  let currentMap = initialMap;
  const deviceId = getDeviceId();

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.id = "leaderboard-modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal leaderboard-modal" style="width:min(42rem, 94vw);">
      <div class="modal-header-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <h2 style="margin:0;">${icon("trophy")} Global Leaderboard</h2>
        <div class="modal-tabs" style="display:flex; gap:0.4rem;">
          <button class="btn small ${currentMap === "usa" ? "primary" : "quiet"}" data-tab="usa">USA National</button>
          <button class="btn small ${currentMap === "nyc" ? "primary" : "quiet"}" data-tab="nyc">New York City</button>
        </div>
      </div>
      <div class="sub" style="margin-bottom:1rem;">Top Survival network run times submitted across all players.</div>
      <div class="leaderboard-body" style="min-height:220px; max-height:55vh; overflow-y:auto; border-radius:8px; background:rgba(16,21,29,0.6); border:1px solid rgba(255,255,255,0.08);">
        <div class="leaderboard-loading" style="padding:2rem; text-align:center; color:#8a96a6;">Loading scores…</div>
      </div>
      <div class="modal-footer" style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center;">
        <span class="sub" style="font-size:0.78rem; margin:0;">Official Survival mode runs only</span>
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `;

  document.getElementById("hud").appendChild(backdrop);

  const close = () => backdrop.remove();
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  backdrop.querySelector("[data-close]")?.addEventListener("click", close);

  const bodyEl = backdrop.querySelector(".leaderboard-body");
  const tabBtns = backdrop.querySelectorAll("[data-tab]");

  async function loadBoard(mapKey) {
    currentMap = mapKey;
    tabBtns.forEach((b) => {
      const active = b.dataset.tab === mapKey;
      b.classList.toggle("primary", active);
      b.classList.toggle("quiet", !active);
    });
    bodyEl.innerHTML = `<div class="leaderboard-loading" style="padding:2rem; text-align:center; color:#8a96a6;">Loading ${mapLabel(mapKey)} leaderboard…</div>`;

    const { entries } = await fetchLeaderboard(mapKey);

    if (!entries || entries.length === 0) {
      bodyEl.innerHTML = `
        <div style="padding:3rem 1.5rem; text-align:center; color:#8a96a6;">
          ${icon("trophy")} No scores submitted yet for <b>${mapLabel(mapKey)}</b>.<br/>Be the first to complete an official Survival run!
        </div>
      `;
      return;
    }

    const rows = entries.map((e, idx) => {
      const rank = idx + 1;
      const isSelf = e.deviceId === deviceId;
      return `
        <div class="lb-row ${isSelf ? "self-row" : ""}" style="display:grid; grid-template-columns:3.2rem 1fr 6rem 5rem 4.5rem; align-items:center; padding:0.55rem 0.8rem; border-bottom:1px solid rgba(255,255,255,0.05); ${isSelf ? "background:rgba(42,109,181,0.2); font-weight:bold;" : ""}">
          <div>${rankBadge(rank)}</div>
          <div class="lb-name" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(e.handle)}${isSelf ? ' <span style="font-size:0.72rem; color:var(--accent);">(You)</span>' : ''}</div>
          <div class="lb-time" style="color:var(--good); font-family:monospace; font-weight:bold;">${fmtSimDuration(e.survivedSec)}</div>
          <div class="lb-pax" style="color:#aab4c2; font-size:0.84rem;">${fmtInt(e.passengers)} pax</div>
          <div class="lb-trains" style="color:#8a96a6; font-size:0.8rem;">${e.trains} train${e.trains === 1 ? '' : 's'}</div>
        </div>
      `;
    }).join("");

    bodyEl.innerHTML = `
      <div class="lb-header" style="display:grid; grid-template-columns:3.2rem 1fr 6rem 5rem 4.5rem; padding:0.4rem 0.8rem; font-size:0.75rem; text-transform:uppercase; color:#6b7788; border-bottom:1px solid rgba(255,255,255,0.1); font-weight:bold; background:rgba(0,0,0,0.2);">
        <div>Rank</div>
        <div>Player</div>
        <div>Survived</div>
        <div>Delivered</div>
        <div>Fleet</div>
      </div>
      <div class="lb-rows">${rows}</div>
    `;
  }

  tabBtns.forEach((b) =>
    b.addEventListener("click", () => loadBoard(b.dataset.tab))
  );

  loadBoard(currentMap);
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
