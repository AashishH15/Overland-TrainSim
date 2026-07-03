// Minimal pub/sub used to decouple sim <-> UI <-> renderers.
const listeners = {};

export function on(event, fn) {
  (listeners[event] ??= []).push(fn);
}

export function emit(event, payload) {
  for (const fn of listeners[event] ?? []) fn(payload);
}
