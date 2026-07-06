import { icon } from "./icons.js";

const REPO = "aashishh15/3DTrainSim";
const REPO_URL = `https://github.com/${REPO}`;

function fmtStarCount(n) {
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

async function loadStarCount(el) {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`);
    if (!res.ok) return;
    const data = await res.json();
    if (typeof data.stargazers_count === "number") {
      el.textContent = fmtStarCount(data.stargazers_count);
    }
  } catch {
    // Offline or rate-limited — leave placeholder.
  }
}

/** Top-corner "Star on GitHub" pill with live star count. */
export function mountGithubStar(root) {
  root.querySelectorAll(".github-star").forEach((node) => node.remove());

  const el = document.createElement("a");
  el.className = "github-star";
  el.href = REPO_URL;
  el.rel = "noopener noreferrer";
  el.title = "Star Overland on GitHub";
  el.innerHTML = `
    ${icon("github")}
    <span class="github-star-label">Star on GitHub</span>
    <span class="github-star-divider" aria-hidden="true"></span>
    <span class="github-star-count">
      ${icon("star", "github-star-icon")}
      <span class="github-star-n">—</span>
    </span>
  `;

  let opening = false;
  el.addEventListener("click", (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (opening) return;
    opening = true;
    window.open(REPO_URL, "_blank", "noopener,noreferrer");
    setTimeout(() => { opening = false; }, 400);
  });

  root.appendChild(el);
  loadStarCount(el.querySelector(".github-star-n"));
}
