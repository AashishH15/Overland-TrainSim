// Stylized NYC map data. Coordinate frame: x = east, z = south, in world units
// (1 unit ~ 150 m). The map spans roughly [-95..95] on both axes.

export const NYC_EXTENT = 95;

// Land polygons: arrays of [x, z]. Anything not inside a polygon is water.
export const LANDMASSES = [
  {
    id: "manhattan",
    name: "Manhattan",
    color: 0xf2e3c8,
    buildingColor: 0xffb547,
    buildingCount: 190,
    poly: [
      [-2, 55], [-5, 44], [-7, 30], [-6, 14], [-5, 0], [-3, -14], [0, -30],
      [3, -44], [6, -56], [9, -64], [12, -66],
      [14, -62], [11, -52], [8, -40], [9, -26], [9, -14], [10, -2], [11, 10],
      [11, 22], [9, 34], [6, 44], [2, 52],
    ],
  },
  {
    id: "brooklynqueens",
    name: "Brooklyn & Queens",
    color: 0xe8d9c2,
    buildingColor: 0x4cd97b,
    buildingCount: 170,
    poly: [
      [16, 58], [17, 45], [16, 34], [17, 20], [16, 8], [18, -2], [24, -10],
      [34, -16], [48, -19], [70, -20], [95, -20], [95, 94], [40, 94], [26, 90],
      [16, 76],
    ],
  },
  {
    id: "bronx",
    name: "The Bronx",
    color: 0xe6d4be,
    buildingColor: 0xff6b6b,
    buildingCount: 70,
    poly: [
      [-6, -72], [8, -68], [20, -64], [40, -58], [60, -56], [95, -58],
      [95, -95], [-6, -95],
    ],
  },
  {
    id: "newjersey",
    name: "New Jersey",
    color: 0xdccfbb,
    buildingColor: 0xb08fff,
    buildingCount: 80,
    poly: [
      [-95, 95], [-40, 95], [-32, 84], [-26, 72], [-18, 62], [-14, 54],
      [-15, 38], [-14, 20], [-13, 4], [-12, -14], [-10, -34], [-8, -52],
      [-5, -72], [-3, -95], [-95, -95],
    ],
  },
  {
    id: "statenisland",
    name: "Staten Island",
    color: 0xd8ccb8,
    buildingColor: 0x55b6ff,
    buildingCount: 34,
    poly: [
      [-62, 70], [-40, 72], [-32, 82], [-36, 94], [-58, 95], [-68, 84],
    ],
  },
  {
    id: "liberty",
    name: "Liberty Island",
    color: 0xcfe3c0,
    buildingColor: 0x4cd97b,
    buildingCount: 0,
    poly: [[-15, 66], [-11, 66], [-11, 70], [-15, 70]],
  },
  {
    id: "ellis",
    name: "Ellis Island",
    color: 0xcfe3c0,
    buildingColor: 0x4cd97b,
    buildingCount: 0,
    poly: [[-16, 58.8], [-13, 58.8], [-13, 61.2], [-16, 61.2]],
  },
  {
    id: "governors",
    name: "Governors Island",
    color: 0xcfe3c0,
    buildingColor: 0x4cd97b,
    buildingCount: 0,
    poly: [[4.5, 59.5], [9.5, 59.5], [9.5, 64.5], [4.5, 64.5]],
  },
];

// Stop nodes. demand: 1-10. landmark: key into landmark mesh builders (or null).
export const NYC_STOPS = [
  { id: "fidi",         name: "Financial District",       x: 0,     z: 48,  demand: 9,  landmark: "owtc" },
  { id: "village",      name: "Greenwich Village",        x: 0,     z: 32,  demand: 6,  landmark: "village" },
  { id: "highline",     name: "High Line / Chelsea",      x: -3,    z: 24,  demand: 6,  landmark: "highline" },
  { id: "timessq",      name: "Times Square",             x: 0,     z: 6,   demand: 10, landmark: "timessq" },
  { id: "esb",          name: "Empire State Bldg",        x: 2,     z: 14,  demand: 8,  landmark: "esb" },
  { id: "hudsonyards",  name: "Hudson Yards",             x: -3.5,  z: 9,   demand: 7,  landmark: "hudson" },
  { id: "intrepid",     name: "Intrepid Museum",          x: -4.5,  z: 1,   demand: 4,  landmark: "intrepid" },
  { id: "grandcentral", name: "Grand Central",            x: 4,     z: 9,   demand: 10, landmark: "grandcentral" },
  { id: "chrysler",     name: "Chrysler Building",        x: 6.5,   z: 11.5,demand: 6,  landmark: "chrysler" },
  { id: "un",           name: "United Nations HQ",        x: 9,     z: 7,   demand: 5,  landmark: "un" },
  { id: "centralpark",  name: "Central Park",             x: 3,     z: -18, demand: 7,  landmark: "park" },
  { id: "harlem",       name: "Harlem",                   x: 5,     z: -46, demand: 5,  landmark: null },
  { id: "washheights",  name: "Washington Hts / GW Br.",  x: 6,     z: -52, demand: 4,  landmark: null },
  { id: "yankee",       name: "Yankee Stadium",           x: 6,     z: -78, demand: 6,  landmark: "stadium" },
  { id: "dtbrooklyn",   name: "Downtown Brooklyn",        x: 23,    z: 55,  demand: 7,  landmark: null },
  { id: "williamsburg", name: "Williamsburg",             x: 21,    z: 33,  demand: 6,  landmark: null },
  { id: "coney",        name: "Coney Island",             x: 30,    z: 86,  demand: 4,  landmark: "coney" },
  { id: "lic",          name: "Long Island City",         x: 20,    z: 4,   demand: 6,  landmark: null },
  { id: "flushing",     name: "Flushing Meadows",         x: 52,    z: -14, demand: 5,  landmark: "unisphere" },
  { id: "jfk",          name: "JFK Airport",              x: 58,    z: 60,  demand: 7,  landmark: "airport" },
  { id: "jerseycity",   name: "Jersey City",              x: -24,   z: 44,  demand: 6,  landmark: null },
  { id: "hoboken",      name: "Hoboken",                  x: -20,   z: 24,  demand: 5,  landmark: null },
  { id: "stgeorge",     name: "St. George (Staten Is.)",  x: -40,   z: 80,  demand: 4,  landmark: null },
  { id: "liberty",      name: "Statue of Liberty",        x: -13,   z: 68,  demand: 3,  landmark: "liberty" },
  { id: "ellis",        name: "Ellis Island",             x: -14.5, z: 60,  demand: 2,  landmark: "ellis" },
  { id: "governors",    name: "Governors Island",         x: 7,     z: 62,  demand: 2,  landmark: "governors" },
];

// Decorative bridges (not track): { from, to, towers }.
export const DECOR_BRIDGES = [
  { name: "Brooklyn Bridge", from: [4, 50], to: [16, 56] },
  { name: "George Washington Bridge", from: [-8, -50], to: [5, -50] },
];

// Central Park rectangle (for the green patch + trees).
export const CENTRAL_PARK = { x0: 0, z0: -28, x1: 7, z1: -8 };

// ---- geometry helpers ----

export function pointInPoly(x, z, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

export function isLandNYC(x, z) {
  for (const lm of LANDMASSES) {
    if (pointInPoly(x, z, lm.poly)) return true;
  }
  return false;
}

// Fraction of the segment a->b that lies over water (sampled).
export function waterFraction(ax, az, bx, bz, samples = 24) {
  let water = 0;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    if (!isLandNYC(ax + (bx - ax) * t, az + (bz - az) * t)) water++;
  }
  return water / (samples + 1);
}
