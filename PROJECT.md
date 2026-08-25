# Project: EVSELECT Thai EV Review Articles Audit & Correction

## Architecture
- **Framework**: Next.js (App Router), TypeScript, Tailwind CSS, Lucide React.
- **Storefront Review Articles**: `src/app/(storefront)/articles/`
  - `page.tsx`: Catalog index listing all EV reviews with badges, specs summary, and Thai pricing.
  - `tesla-model-3-highland-review/page.tsx`: In-depth review of Tesla Model 3 Highland (Standard RWD, Long Range AWD, Performance AWD).
  - `byd-seal-review/page.tsx`: In-depth review of BYD Seal (Dynamic, Premium, AWD Performance).
  - `zeekr-x-review/page.tsx`: In-depth review of Zeekr X (Standard RWD, Flagship AWD).
  - `mg4-electric-review/page.tsx`: In-depth review of MG4 Electric (Standard D/X, Long Range V, XPOWER AWD).
  - `deepal-s07-review/page.tsx`: In-depth review of Changan Deepal S07 (Standard BEV, S07 L Long Range).
  - `byd-atto-3-review/page.tsx`: In-depth review of BYD Atto 3 (Dynamic/Premium Standard Range, Extended Range).
  - `deepal-s05-review/page.tsx`: In-depth review of Changan Deepal S05 (Standard BEV, Smart Tech Edition).
  - `geely-ex2-review/page.tsx`: In-depth review of Geely EX2 / Xingyuan (EX2 Pro, EX2 Max).
  - `ev-battery-care/page.tsx`: Educational guide for EV battery charging and maintenance in Thailand.
- **Static Assets**: `public/images/reviews/` and `public/images/`.

## Feature Inventory
| # | Feature / Model | Description | Milestone | Status | Source |
|---|-----------------|-------------|-----------|--------|--------|
| 1 | Tesla Model 3 Highland Specs | Updated & aligned RWD (283 hp / 60 kWh), Long Range (498 hp / 78.1 kWh), Performance (460/627 hp / 78.1 kWh) with Thai WLTP ratings & CarExpert Thai adaptation | M1 | DONE | Survey & Follow-up |
| 2 | BYD Seal Specs | Verified & aligned Dynamic (204 hp / 61.44 kWh), Premium (313 hp / 82.56 kWh), AWD (530 hp / 82.56 kWh) with Thai NEDC ratings | M1 | DONE | Survey |
| 3 | Zeekr X Specs | Verified & aligned Standard RWD (272 hp / 66 kWh), Flagship AWD (428 hp / 66 kWh), 11 kW AC, Akebono brakes | M1 | DONE | Survey |
| 4 | MG4 Electric Specs | Verified & aligned CKD Standard (170 hp / 49 kWh), Long Range (180-245 hp / 64 kWh), XPOWER (435 hp / 64 kWh) Thai specs | M1 | DONE | Survey |
| 5 | Changan Deepal S07 Specs | Verified & aligned Standard (258 hp / 66.8 kWh), S07 L (218 hp / 79.97 kWh), NEDC 485/560 km, 125L frunk | M1 | DONE | Survey |
| 6 | BYD Atto 3 Specs | Verified & aligned Standard (201 hp / 50.25 kWh), Extended (201 hp / 60.48 kWh), NEDC 410/480 km | M1 | DONE | Survey |
| 7 | Changan Deepal S05 Specs | Verified & aligned Pure BEV 238 hp, 56.12 kWh LFP, 159L Frunk, 3C charging in 15 min | M1 | DONE | Survey |
| 8 | Geely EX2 Specs | Corrected Chinese 58kW base trim to Thai EX2 Pro & Max (116 hp / 85 kW, 39.4 kWh, 395 km NEDC, 429,990 - 459,990 ฿) | M1 | DONE | Survey |
| 9 | Catalog Index Alignment | Ensured `src/app/(storefront)/articles/page.tsx` price ranges, motor specs, and badges match individual review updates | M1 | DONE | Survey |
| 10 | Tesla Model 3 Images | Replaced exterior, interior, details with authentic Highland assets | M2 | DONE | Survey |
| 11 | BYD Seal Images | Replaced exterior, interior, details with authentic Seal assets | M2 | DONE | Survey |
| 12 | Zeekr X Images | Replaced exterior, interior, details with authentic Zeekr X assets | M2 | DONE | Survey |
| 13 | MG4 Electric Images | Replaced exterior, interior, details with authentic MG4 assets | M2 | DONE | Survey |
| 14 | Changan Deepal S07 Images | Replaced exterior, interior, details with authentic Deepal S07 assets | M2 | DONE | Survey |
| 15 | BYD Atto 3 Images | Replaced exterior, interior, details with authentic Atto 3 assets | M2 | DONE | Survey |
| 16 | Changan Deepal S05 Images | Replaced hero, exterior, interior, details with authentic Deepal S05 assets | M2 | DONE | Survey |
| 17 | Geely EX2 Images | Replaced hero, exterior, interior, details with authentic Geely EX2 assets | M2 | DONE | Survey |
| 18 | Top-Level Asset Deepal S05 | Replaced `public/images/deepal-s05.jpg` with authentic Deepal S05 asset | M2 | DONE | Survey |
| 19 | Independent Specs Verification | Reviewer 1 confirmed 100% Thai specs accuracy (Headlightmag, Autolifethailand, Official OEM) | M3 | DONE | Acceptance Criteria |
| 20 | Independent Image Verification | Reviewer 2 confirmed 100% image accuracy, 0 placeholders, 32 unique hashes | M3 | DONE | Acceptance Criteria |
| 21 | Clean Next.js Build & Typecheck | Challenger 1 & 2 verified clean `npm run build` and `npx tsc --noEmit` across all 20 routes | M3 | DONE | Acceptance Criteria |
| 22 | Forensic Integrity Audit | Forensic Auditor confirmed CLEAN verdict, genuine logic, zero violations | M3 | DONE | Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Thai Specs & Article Content Update | Audit & correct all 8 EV review articles & catalog index to strictly reflect Thai market specifications | Survey complete | **DONE** |
| M2 | Image Assets Generation & Replacement | Generate and replace all 27 placeholder/mismatched image assets with authentic vehicle photos | Survey complete | **DONE** |
| M3 | Multi-Agent Verification, Build & Audit | Independent Reviewers, Challengers, and Forensic Auditor verification | M1, M2 | **DONE** |

## Code Layout
- `src/app/(storefront)/articles/`:
  - `page.tsx` — Articles catalog index
  - `tesla-model-3-highland-review/page.tsx` — Model 3 Highland review
  - `byd-seal-review/page.tsx` — BYD Seal review
  - `zeekr-x-review/page.tsx` — Zeekr X review
  - `mg4-electric-review/page.tsx` — MG4 Electric review
  - `deepal-s07-review/page.tsx` — Deepal S07 review
  - `byd-atto-3-review/page.tsx` — BYD Atto 3 review
  - `deepal-s05-review/page.tsx` — Deepal S05 review
  - `geely-ex2-review/page.tsx` — Geely EX2 review
  - `ev-battery-care/page.tsx` — Battery care guide
- `public/images/reviews/`:
  - 32 image files (`<model>-hero.jpg`, `<model>-exterior.jpg`, `<model>-interior.jpg`, `<model>-details.jpg`)
- `public/images/`:
  - `deepal-s05.jpg`
  - accessory & banner images
