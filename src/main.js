import "@fontsource-variable/outfit";
import * as THREE from "three";
import { Game } from "./game.js";

window.__errors = [];
window.addEventListener("error", (e) => window.__errors.push(String(e.error?.stack ?? e.message)));
window.addEventListener("unhandledrejection", (e) => window.__errors.push(String(e.reason)));

window.game = new Game();
requestAnimationFrame(() => {
  document.getElementById("boot")?.classList.add("done");
});
