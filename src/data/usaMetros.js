// Top 50 U.S. metropolitan areas: rank, name, lat/lon, population (millions).
// Positions are projected onto the map with d3's Albers USA projection.

export const USA_METROS = [
  { rank: 1,  name: "New York City",          lat: 40.7128, lon: -74.0060, pop: 19.5 },
  { rank: 2,  name: "Los Angeles",            lat: 34.0522, lon: -118.2437, pop: 13.2 },
  { rank: 3,  name: "Chicago",                lat: 41.8781, lon: -87.6298, pop: 9.6 },
  { rank: 4,  name: "Dallas–Ft. Worth",       lat: 32.7767, lon: -96.7970, pop: 7.6 },
  { rank: 5,  name: "Houston",                lat: 29.7604, lon: -95.3698, pop: 7.1 },
  { rank: 6,  name: "Washington DC",          lat: 38.9072, lon: -77.0369, pop: 6.3 },
  { rank: 7,  name: "Philadelphia",           lat: 39.9526, lon: -75.1652, pop: 6.2 },
  { rank: 8,  name: "Miami",                  lat: 25.7617, lon: -80.1918, pop: 6.1 },
  { rank: 9,  name: "Atlanta",                lat: 33.7490, lon: -84.3880, pop: 6.1 },
  { rank: 10, name: "Boston",                 lat: 42.3601, lon: -71.0589, pop: 4.9 },
  { rank: 11, name: "San Francisco–Oakland",  lat: 37.7749, lon: -122.4194, pop: 4.7 },
  { rank: 12, name: "Phoenix",                lat: 33.4484, lon: -112.0740, pop: 4.9 },
  { rank: 13, name: "Riverside–San Bern.",    lat: 33.9806, lon: -117.3755, pop: 4.6 },
  { rank: 14, name: "Detroit",                lat: 42.3314, lon: -83.0458, pop: 4.3 },
  { rank: 15, name: "Seattle–Tacoma",         lat: 47.6062, lon: -122.3321, pop: 4.0 },
  { rank: 16, name: "Minneapolis–St. Paul",   lat: 44.9778, lon: -93.2650, pop: 3.7 },
  { rank: 17, name: "San Diego",              lat: 32.7157, lon: -117.1611, pop: 3.3 },
  { rank: 18, name: "Tampa–St. Petersburg",   lat: 27.9506, lon: -82.4572, pop: 3.2 },
  { rank: 19, name: "Denver",                 lat: 39.7392, lon: -104.9903, pop: 3.0 },
  { rank: 20, name: "St. Louis",              lat: 38.6270, lon: -90.1994, pop: 2.8 },
  { rank: 21, name: "Baltimore",              lat: 39.2904, lon: -76.6122, pop: 2.8 },
  { rank: 22, name: "Charlotte",              lat: 35.2271, lon: -80.8431, pop: 2.7 },
  { rank: 23, name: "Portland",               lat: 45.5152, lon: -122.6784, pop: 2.5 },
  { rank: 24, name: "Orlando",                lat: 28.5383, lon: -81.3792, pop: 2.7 },
  { rank: 25, name: "San Antonio",            lat: 29.4241, lon: -98.4936, pop: 2.6 },
  { rank: 26, name: "Pittsburgh",             lat: 40.4406, lon: -79.9959, pop: 2.4 },
  { rank: 27, name: "Sacramento",             lat: 38.5816, lon: -121.4944, pop: 2.4 },
  { rank: 28, name: "Cincinnati",             lat: 39.1031, lon: -84.5120, pop: 2.3 },
  { rank: 29, name: "Las Vegas",              lat: 36.1699, lon: -115.1398, pop: 2.3 },
  { rank: 30, name: "Kansas City",            lat: 39.0997, lon: -94.5786, pop: 2.2 },
  { rank: 31, name: "Cleveland",              lat: 41.4993, lon: -81.6944, pop: 2.1 },
  { rank: 32, name: "Columbus",               lat: 39.9612, lon: -82.9988, pop: 2.1 },
  { rank: 33, name: "Austin",                 lat: 30.2672, lon: -97.7431, pop: 2.3 },
  { rank: 34, name: "Indianapolis",           lat: 39.7684, lon: -86.1581, pop: 2.1 },
  { rank: 35, name: "San Jose",               lat: 37.3382, lon: -121.8863, pop: 2.0 },
  { rank: 36, name: "Nashville",              lat: 36.1627, lon: -86.7816, pop: 2.0 },
  { rank: 37, name: "Virginia Beach–Norfolk", lat: 36.8529, lon: -75.9780, pop: 1.8 },
  { rank: 38, name: "Providence",             lat: 41.8240, lon: -71.4128, pop: 1.7 },
  { rank: 39, name: "Milwaukee",              lat: 43.0389, lon: -87.9065, pop: 1.6 },
  { rank: 40, name: "Jacksonville",           lat: 30.3322, lon: -81.6557, pop: 1.6 },
  { rank: 41, name: "Oklahoma City",          lat: 35.4676, lon: -97.5164, pop: 1.4 },
  { rank: 42, name: "Memphis",                lat: 35.1495, lon: -90.0490, pop: 1.3 },
  { rank: 43, name: "Louisville",             lat: 38.2527, lon: -85.7585, pop: 1.3 },
  { rank: 44, name: "Raleigh",                lat: 35.7796, lon: -78.6382, pop: 1.4 },
  { rank: 45, name: "Richmond",               lat: 37.5407, lon: -77.4360, pop: 1.3 },
  { rank: 46, name: "New Orleans",            lat: 29.9511, lon: -90.0715, pop: 1.3 },
  { rank: 47, name: "Hartford",               lat: 41.7658, lon: -72.6734, pop: 1.2 },
  { rank: 48, name: "Salt Lake City",         lat: 40.7608, lon: -111.8910, pop: 1.2 },
  { rank: 49, name: "Birmingham",             lat: 33.5186, lon: -86.8104, pop: 1.1 },
  { rank: 50, name: "Buffalo–Niagara Falls",  lat: 42.8864, lon: -78.8784, pop: 1.1 },
];

// Stylized region colors (rough census-region grouping by longitude/latitude).
export function metroColor(m) {
  if (m.lon > -82 && m.lat > 36.5) return 0xff6b6b;   // Northeast — coral
  if (m.lon > -90 && m.lat <= 36.5) return 0xffb547;  // Southeast — amber
  if (m.lon > -104 && m.lon <= -90) return 0x4cd97b;  // Central — green
  if (m.lon > -82) return 0xff6b6b;
  return 0x55b6ff;                                     // West — blue
}
