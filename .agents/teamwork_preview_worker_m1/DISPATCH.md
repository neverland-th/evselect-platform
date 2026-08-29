## 2026-08-27T06:35:16Z

You are teamwork_preview_worker_m1, implementing Milestone 1: Thai EV Data Catalog & Domain Models for EV Selection Thailand.

## Working Directory & Identity
- Working Directory: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page\.agents\teamwork_preview_worker_m1
- Project Root: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page
- Authoritative User Request: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page\.agents\ORIGINAL_REQUEST.md
- Project Architecture Spec: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page\PROJECT.md

## Exclusive Write Ownership
You own and must implement the following files in `src/content-generator/`:
1. `src/content-generator/types.ts`:
   - Full TypeScript types for VehicleSpec, VehicleTrim, ChargingNetworkInfo, TOUComparison, AccessoryItem, GeneratedPost, GenerationOptions, etc.
2. `src/content-generator/data/vehicles.ts`:
   - Rich, realistic dataset for Thai EV models (at least 10 major models: BYD Seal, BYD Atto 3, BYD Dolphin, Changan Deepal S07, Changan Deepal L07, Changan Deepal S05, Tesla Model 3 Highland, Tesla Model Y, MG4 Electric, Zeekr X, Geely EX2, ORA Good Cat, GAC Aion Y Plus).
   - Include realistic THB pricing per trim, power (hp/kW), battery kWh, NEDC/WLTP ranges, real-world tropical range derating in 35°C–40°C heat with AC, 0-100 acceleration, DC/AC charging limits, Thai pros/cons, suspension/NVH notes for Thai roads, heat performance notes, and verified image URLs matching `public/images/reviews/`.
3. `src/content-generator/data/charging.ts`:
   - Thai charging networks (PTT EV Station PluZ, PEA VOLTA, MEA EV, EleX by EGAT, EA Anywhere, Evolt, Altervim, Tesla Supercharger) with tariffs (Peak/Off-Peak), app names, typical DC speeds, and home TOU vs Petrol cost calculation helpers (e.g. 0.48 THB/km vs 2.71 THB/km).
4. `src/content-generator/data/accessories.ts`:
   - EVSELECT genuine accessory fitment matrix (TPE 3D floor mats, glass roof sunshades, screen protectors, key cases, 7.4kW/22kW wallbox chargers) with product links/names.
5. `src/content-generator/data/index.ts`:
   - Clean barrel export of all data catalogs and lookup helper functions (`getVehicleById`, `getAllVehicles`, `getChargingNetwork`, `calculateTOUSavings`, `getAccessoriesForVehicle`).

## Verification Requirements
- Compile and test the data module using `npx tsx -e "import { vehicles, getAllVehicles, calculateTOUSavings } from './src/content-generator/data'; console.log('Loaded ' + vehicles.length + ' vehicles'); console.log(calculateTOUSavings(1000, 15));"`
- Ensure clean TypeScript typing without any compile errors.
- Document verification commands and output in `handoff.md` and `analysis.md` in your working directory.
- Send a completion message via `send_message` when done.
