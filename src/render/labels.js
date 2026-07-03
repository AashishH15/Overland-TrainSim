import * as THREE from "three";

const FONT = `"Outfit Variable", "Segoe UI", sans-serif`;

// Canvas-based text sprite. `lock: true` draws a small vector padlock before the text.
export function makeLabel(text, { size = 6, color = "#eef2f7", bg = "rgba(20,26,36,0.72)", lock = false } = {}) {
  const pad = 14;
  const fontPx = 42;
  const lockW = lock ? fontPx * 0.85 : 0;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `600 ${fontPx}px ${FONT}`;
  const textW = Math.ceil(ctx.measureText(text).width);
  const w = textW + lockW + pad * 2;
  const h = fontPx + pad * 1.4;
  canvas.width = w;
  canvas.height = h;

  const c2 = canvas.getContext("2d");
  c2.font = `600 ${fontPx}px ${FONT}`;
  c2.fillStyle = bg;
  const r = h / 2;
  c2.beginPath();
  c2.roundRect(0, 0, w, h, r);
  c2.fill();

  if (lock) {
    const cx = pad + lockW * 0.38;
    const cy = h / 2;
    const bw = fontPx * 0.52;
    const bh = fontPx * 0.42;
    c2.strokeStyle = color;
    c2.lineWidth = fontPx * 0.11;
    // shackle
    c2.beginPath();
    c2.arc(cx, cy - bh * 0.32, bw * 0.32, Math.PI, 0);
    c2.stroke();
    // body
    c2.fillStyle = color;
    c2.beginPath();
    c2.roundRect(cx - bw / 2, cy - bh * 0.32, bw, bh, bw * 0.16);
    c2.fill();
  }

  c2.fillStyle = color;
  c2.textAlign = "left";
  c2.textBaseline = "middle";
  c2.fillText(text, pad + lockW, h / 2 + 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  const aspect = w / h;
  sprite.scale.set(size * aspect * 0.28, size * 0.28, 1);
  sprite.renderOrder = 10;
  return sprite;
}
