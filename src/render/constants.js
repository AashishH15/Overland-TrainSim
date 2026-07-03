// Per-map render heights and scales.
// Train scale is sized so a train covers only a small fraction of a typical
// edge (USA edges are ~20-40 world units, NYC edges ~3-8).
export const MAP_RENDER = {
  usa: { landTop: 1.4, trackY: 2.4, trainScale: 0.85, nodeScale: 1.25, labelSize: 8 },
  nyc: { landTop: 0.8, trackY: 1.8, trainScale: 0.45, nodeScale: 0.75, labelSize: 4.2 },
};
