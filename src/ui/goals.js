import {
  GOALS,
  evaluateNewGoals,
  goalProgressLabel,
  goalProgressRatio,
  goalsSummary,
  nextIncompleteGoal,
  syncGoalProgress,
} from "../core/goals.js";
import { fmtInt } from "../core/config.js";
import { icon } from "./icons.js";

export function openGoals(game) {
  const s = game.state;
  const { done, total } = goalsSummary(s);
  const doneSet = new Set(s.completedGoals);

  const rows = GOALS.map((g) => {
    const complete = doneSet.has(g.id);
    const ratio = complete ? 1 : goalProgressRatio(g, s);
    const bar = ratio != null
      ? `<div class="goal-bar"><div class="goal-bar-fill" style="width:${Math.round(ratio * 100)}%"></div></div>`
      : "";
    const meta = complete
      ? `<span class="goal-status done">${icon("check")} Complete</span>`
      : `<span class="goal-status">${goalProgressLabel(g, s)}</span>`;
    return `
      <div class="goal-row ${complete ? "complete" : ""} ${g.win ? "win" : ""}">
        <div class="goal-head">
          <span class="goal-title">${g.title}${g.win ? " ★" : ""}</span>
          ${meta}
        </div>
        <div class="goal-desc">${g.desc}</div>
        ${complete ? "" : bar}
      </div>
    `;
  }).join("");

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal goals-modal">
      <h2>${icon("medal")} Milestones</h2>
      <div class="sub">${fmtInt(done)} of ${fmtInt(total)} complete · expand your network to climb the milestone ladder</div>
      <div class="goals-list">${rows}</div>
      <div class="modal-footer">
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `;
  document.getElementById("hud").appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  backdrop.querySelector("[data-close]").addEventListener("click", close);
}

export function openVictory(game, goal) {
  const s = game.state;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal" style="text-align:center; width:min(30rem,92vw);">
      <h2 style="justify-content:center;">${icon("medal")} Victory</h2>
      <div class="sub" style="margin:0.5rem 0 0.2rem; font-size:1rem; color:var(--ink);">
        <b>${goal.title}</b>
      </div>
      <div class="sub" style="margin:0.2rem 0 1.1rem;">
        ${goal.desc}. You delivered ${fmtInt(s.totalDelivered)} passengers — the sandbox stays open if you want to keep building.
      </div>
      <div class="modal-footer" style="justify-content:center;">
        <button class="btn primary" data-close>Keep playing</button>
      </div>
    </div>
  `;
  document.getElementById("hud").appendChild(backdrop);
  backdrop.querySelector("[data-close]").addEventListener("click", () => backdrop.remove());
}

export function formatNextGoal(state) {
  const next = nextIncompleteGoal(state);
  if (!next) return null;
  const label = goalProgressLabel(next, state);
  return next.progress ? `${next.title} (${label})` : next.title;
}

export { syncGoalProgress, goalsSummary, nextIncompleteGoal };
