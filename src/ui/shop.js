import { TIERS, fmtMoney, fmtInt } from "../core/config.js";

export function openShop(game) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  const mapKey = game.state.currentMap;

  const cards = Object.values(TIERS).map((t) => `
    <div class="tier-card">
      <div class="icon">${t.icon}</div>
      <h4>${t.name}</h4>
      <div class="desc">${t.desc}</div>
      <div class="spec">Speed: <b>${t.speed[mapKey]} u/s</b></div>
      <div class="spec">Capacity: <b>${fmtInt(t.capacity)} pax</b></div>
      <div class="spec">Track: <b>${t.minTrack}</b></div>
      <div class="spec">Fare bonus: <b>×${t.fareMult}</b></div>
      <div class="spec">Running cost: <b>${fmtMoney(t.opsPerMin)}/min</b></div>
      <div class="price">${fmtMoney(t.price)}</div>
      <button class="btn primary" data-tier="${t.id}">Buy</button>
    </div>
  `).join("");

  backdrop.innerHTML = `
    <div class="modal">
      <h2>🚆 Train Shop</h2>
      <div class="sub">Buying for the <b>${mapKey === "usa" ? "USA national" : "NYC"}</b> network. After purchase you'll pick the route.</div>
      <div class="tier-cards">${cards}</div>
      <div class="actions" style="margin-top:14px; display:flex; justify-content:flex-end;">
        <button class="btn" data-close>Close</button>
      </div>
    </div>
  `;
  document.getElementById("hud").appendChild(backdrop);

  const close = () => backdrop.remove();
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  backdrop.querySelector("[data-close]").addEventListener("click", close);
  backdrop.querySelectorAll("[data-tier]").forEach((b) =>
    b.addEventListener("click", () => {
      if (game.buyTrain(+b.dataset.tier)) close();
    })
  );
}

export function openGameOver(game) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal" style="text-align:center; width:min(440px,92vw);">
      <h2>💸 Bankrupt!</h2>
      <div class="sub" style="margin:10px 0 18px;">
        Your rail empire ran out of money. Delivered ${fmtInt(game.state.totalDelivered)} passengers,
        earned ${fmtMoney(game.state.totalRevenue)} in fares.
      </div>
      <button class="btn primary" data-restart>Start New Empire</button>
    </div>
  `;
  document.getElementById("hud").appendChild(backdrop);
  backdrop.querySelector("[data-restart]").addEventListener("click", () => {
    backdrop.remove();
    game.newGame();
  });
}
