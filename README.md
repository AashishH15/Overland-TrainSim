# Rail Empire — Low-Poly 3D Train Network Builder

A browser-based train tycoon game built with Three.js. Design, build, and operate
a passenger rail network across two scales:

- **USA National Map** — connect the 50 most-populated U.S. metro areas.
- **NYC City Map** — build a commuter network through low-poly NYC landmarks
  (Statue of Liberty, Empire State Building, Times Square, Central Park…).

## Run

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

## How to play

1. **Build stations** — pick the Station tool, click a stop node. On the USA map
   only the top 12 metros start unlocked; locked metros are unlocked (fee) with
   the same click. On the NYC map every landmark is available.
2. **Lay track** — pick a track type and click station-to-station. Water
   crossings in NYC cost ×2.6 (bridges are rendered automatically).
   - Standard Track: cheap, Tier I trains only
   - High-Speed Track: Tier I & II
   - Maglev Guideway: Tier III only
3. **Buy a train** (Buy Train…) and click stations in order to set its loop
   route, then press ✓ Done (or Enter).
4. Passengers spawn at stations based on demand and rush-hour cycles, board
   trains heading to their destination, and pay fares scaled by distance and
   train tier. Track maintenance and train operating costs drain cash — stay
   above −$250k or you go bankrupt.
5. Track can be **upgraded** in place (click it in Select mode) and demolished
   for a 25% refund. Trains can be sold for 50%.

Controls: drag to orbit, scroll to zoom, right-click/Escape to cancel,
Space to pause, 1×/2×/4× sim speed in the top bar. Progress autosaves to
localStorage; “New Game” resets.

## Tech

- Three.js (vanilla), Vite
- d3-geo Albers-USA projection + us-atlas TopoJSON for the national map
- Graph-based track network (Dijkstra pathfinding for trains and fares)
- Tick-based passenger/economy simulation decoupled from the render loop
