export function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

export function isMobileLayout() {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function isMobileExperience() {
  return isCoarsePointer() || isMobileLayout();
}

export function tapSlack() {
  return isCoarsePointer() ? 18 : 6;
}
