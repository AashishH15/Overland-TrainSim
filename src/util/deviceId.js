const DEVICE_KEY = "overland.deviceId";

/**
 * Generates or retrieves a unique persistent device ID stored in localStorage.
 */
export function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = "dev_" + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}
