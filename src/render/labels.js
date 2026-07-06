import * as THREE from "three";

const FONT = `"Outfit Variable", "Segoe UI", sans-serif`;

// Canvas-based text sprite. `lock: true` draws a small vector padlock before the text.
export function makeLabel(text, { size = 6, color = "#eef2f7", bg = "rgba(20,26,36,0.72)", lock = false, surgeTag = "" } = {}) {
  const pad = 14;
  const fontPx = 42;
  const lockW = lock ? fontPx * 0.85 : 0;
  const fullText = surgeTag ? `${text} · ${surgeTag}` : text;
  const isLost = surgeTag.includes("LOST");
  const isSurge = Boolean(surgeTag);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `600 ${fontPx}px ${FONT}`;
  const textW = Math.ceil(ctx.measureText(fullText).width);
  const w = textW + lockW + pad * 2;
  const h = fontPx + pad * 1.4;
  canvas.width = w;
  canvas.height = h;

  const c2 = canvas.getContext("2d");
  c2.font = `600 ${fontPx}px ${FONT}`;
  c2.fillStyle = isSurge ? (isLost ? "rgba(220,38,38,0.92)" : "rgba(234,88,12,0.92)") : bg;
  const r = h / 2;
  c2.beginPath();
  c2.roundRect(0, 0, w, h, r);
  c2.fill();

  if (isSurge) {
    c2.strokeStyle = isLost ? "#fca5a5" : "#fdba74";
    c2.lineWidth = fontPx * 0.08;
    c2.stroke();
  }

  if (lock) {
    const cx = pad + lockW * 0.38;
    const cy = h / 2;
    const bw = fontPx * 0.52;
    const bh = fontPx * 0.42;
    c2.strokeStyle = isSurge ? "#ffffff" : color;
    c2.lineWidth = fontPx * 0.11;
    // shackle
    c2.beginPath();
    c2.arc(cx, cy - bh * 0.32, bw * 0.32, Math.PI, 0);
    c2.stroke();
    // body
    c2.fillStyle = isSurge ? "#ffffff" : color;
    c2.beginPath();
    c2.roundRect(cx - bw / 2, cy - bh * 0.32, bw, bh, bw * 0.16);
    c2.fill();
  }

  c2.fillStyle = isSurge ? "#ffffff" : color;
  c2.textAlign = "left";
  c2.textBaseline = "middle";
  c2.fillText(fullText, pad + lockW, h / 2 + 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  const aspect = w / h;
  sprite.scale.set(size * aspect * 0.28, size * 0.28, 1);
  sprite.renderOrder = 10;
  return sprite;
}
