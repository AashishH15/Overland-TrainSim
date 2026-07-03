import { TIERS, TRACK_TYPES, fmtMoney, fmtInt } from "../core/config.js";
import { incomePerMin } from "../sim/simulation.js";
import { on } from "../core/bus.js";

export class Hud {
  constructor(game) {
    this.game = game;
    this.root = document.getElementById("hud");
    this.buildTopbar();
    this.buildToolbar();
    this.buildHintbar();
    this.buildToasts();
    this.buildFleet();
    on("toast", (t) => this.toast(t.msg, t.kind));
    setInterval(() => this.refresh(), 250);
  }

  buildTopbar() {
    const el = document.createElement("div");
    el.className = "topbar";
    el.innerHTML = `
      <div class="stat"><div class="v cash" id="hud-cash"></div><div class="k">Cash</div></div>
      <div class="stat"><div class="v" id="hud-income"></div><div class="k">Income /min</div></div>
      <div class="stat"><div class="v" id="hud-pax"></div><div class="k">Passengers</div></div>
      <div class="stat"><div class="v" id="hud-trains"></div><div class="k">Trains</div></div>
      <div class="divider"></div>
      <div class="speed-group">
        <button class="btn small" data-speed="0">⏸</button>
        <button class="btn small" data-speed="1">1×</button>
        <button class="btn small" data-speed="2">2×</button>
        <button class="btn small" data-speed="4">4×</button>
      </div>
      <div class="divider"></div>
      <button class="btn" id="hud-map-toggle"></button>
      <button class="btn danger small" id="hud-newgame">New Game</button>
    `;
    this.root.appendChild(el);
    el.querySelectorAll("[data-speed]").forEach((b) =>
      b.addEventListener("click", () => { this.game.state.speed = +b.dataset.speed; })
    );
    el.querySelector("#hud-map-toggle").addEventListener("click", () => this.game.toggleMap());
    el.querySelector("#hud-newgame").addEventListener("click", () => {
      if (confirm("Start a new game? Current progress will be erased.")) this.game.newGame();
    });
  }

  buildToolbar() {
    const el = document.createElement("div");
    el.className = "toolbar";
    this.toolbar = el;
    this.root.appendChild(el);
    this.renderToolbar();
  }

  renderToolbar() {
    const mapKey = this.game.state.currentMap;
    const t = (n) => TRACK_TYPES[n];
    const hex = (c) => `#${c.toString(16).padStart(6, "0")}`;
    const perUnit = (n) => fmtMoney(t(n).costPerUnit[mapKey]);
    this.toolbar.innerHTML = `
      <div class="section">Tools</div>
      <button class="btn tool" data-mode="select">🖱️ Select / Inspect</button>
      <button class="btn tool" data-mode="station">🏛️ Build Station</button>
      <div class="section">Track (per unit)</div>
      <button class="btn tool" data-mode="track1"><span class="swatch" style="background:${hex(t(1).color)}"></span>Standard <span class="price">${perUnit(1)}</span></button>
      <button class="btn tool" data-mode="track2"><span class="swatch" style="background:${hex(t(2).color)}"></span>High-Speed <span class="price">${perUnit(2)}</span></button>
      <button class="btn tool" data-mode="track3"><span class="swatch" style="background:${hex(t(3).color)}"></span>Maglev <span class="price">${perUnit(3)}</span></button>
      <div class="section">Manage</div>
      <button class="btn tool" data-mode="bulldoze">💥 Bulldoze Track</button>
      <button class="btn tool" id="tool-shop">🚆 Buy Train…</button>
    `;
    this.toolbar.querySelectorAll("[data-mode]").forEach((b) =>
      b.addEventListener("click", () => this.game.setMode(b.dataset.mode))
    );
    this.toolbar.querySelector("#tool-shop").addEventListener("click", () => this.game.openShop());
    this.syncToolbar();
  }

  syncToolbar() {
    this.toolbar.querySelectorAll("[data-mode]").forEach((b) =>
      b.classList.toggle("active", b.dataset.mode === this.game.mode)
    );
  }

  buildHintbar() {
    this.hintbar = document.createElement("div");
    this.hintbar.className = "hintbar";
    this.root.appendChild(this.hintbar);
  }

  setHint(html) {
    this.hintbar.innerHTML = html;
    this.hintbar.style.display = html ? "flex" : "none";
  }

  buildToasts() {
    this.toasts = document.createElement("div");
    this.toasts.className = "toasts";
    this.root.appendChild(this.toasts);
  }

  toast(msg, kind = "") {
    const t = document.createElement("div");
    t.className = `toast ${kind}`;
    t.textContent = msg;
    this.toasts.appendChild(t);
    setTimeout(() => t.remove(), 3400);
    while (this.toasts.children.length > 4) this.toasts.firstChild.remove();
  }

  buildFleet() {
    this.fleet = document.createElement("div");
    this.fleet.className = "fleet";
    this.root.appendChild(this.fleet);
  }

  refresh() {
    const s = this.game.state;
    const cashEl = document.getElementById("hud-cash");
    if (!cashEl) return;
    cashEl.textContent = fmtMoney(s.cash);
    cashEl.classList.toggle("neg", s.cash < 0);
    document.getElementById("hud-income").textContent = fmtMoney(incomePerMin(s));
    document.getElementById("hud-pax").textContent = fmtInt(s.totalDelivered);
    document.getElementById("hud-trains").textContent = Object.keys(s.trains).length;
    document.getElementById("hud-map-toggle").textContent =
      s.currentMap === "usa" ? "🗽 Enter NYC" : "🗺️ USA Map";

    this.root.querySelectorAll("[data-speed]").forEach((b) =>
      b.classList.toggle("active", +b.dataset.speed === s.speed)
    );

    // Fleet chips (trains on the current map).
    const chips = [];
    for (const train of Object.values(s.trains)) {
      if (train.map !== s.currentMap) continue;
      const tier = TIERS[train.tier];
      const load = train.passengers.reduce((a, g) => a + g.count, 0);
      const noRoute = train.route.length < 2 || !train.path;
      chips.push(
        `<div class="train-chip ${noRoute ? "noroute" : ""}" data-train="${train.id}">
          <span class="dot" style="background:#${tier.color.toString(16).padStart(6, "0")}"></span>
          ${tier.icon} #${train.num}
          <span class="load">${noRoute ? "needs route" : `${load}/${tier.capacity}`}</span>
        </div>`
      );
    }
    this.fleet.innerHTML = chips.join("");
    this.fleet.querySelectorAll("[data-train]").forEach((c) =>
      c.addEventListener("click", () => this.game.inspectTrain(c.dataset.train))
    );
  }
}
