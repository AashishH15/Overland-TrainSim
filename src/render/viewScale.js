import * as THREE from "three";

// Reference camera distances where trains/nodes look "right" on each map.
const REF_DIST = { usa: 130, nyc: 58 };

// Keeps 3D markers proportional to zoom: smaller when the camera is close,
// slightly larger when pulled back so trains stay visible on screen.
export function zoomScale(camera, target, mapKey) {
  const dist = camera.position.distanceTo(target);
  const ref = REF_DIST[mapKey] ?? 100;
  return THREE.MathUtils.clamp(dist / ref, 0.35, 1.15);
}

// Gentle adjustment for small/large viewports (HUD already scales via rem).
export function viewportScale() {
  const min = Math.min(window.innerWidth, window.innerHeight);
  return THREE.MathUtils.clamp(min / 920, 0.72, 1.08);
}

export function trainWorldScale(mapKey, camera, target) {
  return zoomScale(camera, target, mapKey) * viewportScale();
}
