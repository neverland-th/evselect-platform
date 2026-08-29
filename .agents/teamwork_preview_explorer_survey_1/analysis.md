# Codebase & Asset Survey Report: EVSELECT Platform

**Agent**: `teamwork_preview_explorer_survey_1`  
**Working Directory**: `.agents/teamwork_preview_explorer_survey_1`  
**Project Root**: `C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page`  
**Date**: 2026-08-27  
**Status**: Survey Complete

---

## 1. Executive Summary

This investigation surveys the repository structure, data models, content modules, runtime environment, and static media assets of the **EVSELECT Platform** repository. The objective is to identify all existing data and infrastructure available to build the automated content generation engine for the **"EV Selection Thailand" Facebook page** (as defined in `ORIGINAL_REQUEST.md`).

### Key Findings Summary:
1. **Rich Editorial Vehicle Content**: The repository contains 8 fully verified Thai-spec EV reviews and 1 battery care guide in `src/app/(storefront)/articles/` with accurate Thai pricing (THB), battery sizes (kWh), power (hp/kW), real-world ranges (NEDC/WLTP), charging speeds, and Thai road driving notes.
2. **High-Resolution Media Assets**: 32 authentic vehicle images are present in `public/images/reviews/` (4 per vehicle: hero, exterior, interior, details), plus brand logos (`logo.png`, `logo-desktop.png`) and verified accessory imagery in `public/images/`.
3. **Execution Environment**: Node.js `v24.19.0`, npm `11.17.0`, and TSX `v4.23.12` are available. TypeScript scripts can be executed directly via `npx tsx scripts/<script_name>.ts` without pre-compilation, and ESM scripts (`.mjs` or `.js`) run natively via `node`.
4. **Data Architecture**: The project utilizes Prisma ORM 7.9.1 with SQLite (`prisma/schema.prisma`). In addition, `src/lib/prisma.ts` implements a resilient dynamic Proxy fallback pattern so the application operates seamlessly with zero crashes even if the SQLite binary is not loaded.
5. **E-Commerce & Accessory Catalog**: `scripts/shopee_ev_select/data/` contains Thai product listings (wallbox chargers, portable chargers, adapters) and brand profiles that can be integrated into Facebook post call-to-actions (CTAs).

---

## 2. Codebase Architecture & Directory Layout

```
evselect-platform/
├── .agents/                      # Agent orchestration metadata, briefs, and survey logs
│   ├── rules/                    # Design system and serverless resilience rules
│   └── ORIGINAL_REQUEST.md       # User requirements for Facebook content engine
├── prisma/
│   └── schema.prisma             # Prisma 7 schema (Category, Vehicle, Product, Batch, Fitment)
├── public/
│   ├── images/
│   │   ├── reviews/              # 32 high-resolution vehicle photos (8 models × 4 views)
│   │   └── *.jpg                 # Accessory and QC photos (tpe-floormats, sunroof-shade, etc.)
│   ├── logo.png                  # Mobile brand logo
│   └── logo-desktop.png          # Desktop brand logo
├── scripts/
│   ├── challenger_consistency_test.mjs  # Specs consistency validation script
│   ├── verify_ev_reviews.mjs            # Article structure and section validator
│   ├── test_images_integrity.mjs        # Image asset existence and size validator
│   └── shopee_ev_select/                # Shopee store data, product listings, and configs
│       └── data/
│           ├── productListings.js       # Thai EV charger and accessory catalog
│           ├── shippingPaymentConfig.js # Shipping and payment configuration
│           └── shopProfile.js           # Brand profile and Thai copy
├── src/
│   ├── app/
│   │   ├── (admin)/              # Admin portals (vehicles, products, fitment, export)
│   │   ├── (storefront)/
│   │   │   ├── articles/         # 8 in-depth EV vehicle reviews + catalog index
│   │   │   └── page.tsx          # Storefront landing page with VehicleFilter
│   │   ├── api/export/           # CSV export endpoints (Shopee / WooCommerce)
│   │   ├── globals.css           # Tailwind v4 configuration
│   │   └── layout.tsx            # Global layout with Thai font (Prompt)
│   ├── components/
│   │   └── VehicleFilter.tsx     # Client-side vehicle & product finder component
│   └── lib/
│       └── prisma.ts             # Resilient serverless Prisma client proxy
├── package.json                  # Next.js 16, React 19, Prisma 7, Tailwind 4
├── prisma.config.ts              # Prisma configuration
└── tsconfig.json                 # TypeScript config with @/* alias
```

---

## 3. Runtime & Execution Environment

| Component | Version / Command | Status | Notes |
|---|---|---|---|
| **Node.js** | `v24.19.0` | Active | Verified via `node -v` |
| **npm** | `11.17.0` | Active | Verified via `npm -v` |
| **TSX (TypeScript Execute)** | `v4.23.12` | Active | Executable via `npx tsx scripts/<file>.ts` |
| **TypeScript** | `^5.0.0` | Active | Configured with `@/*` path mapping to `./src/*` |
| **ESM Support** | Native Node.js ESM | Active | Supports `.mjs` scripts and `import/export` |
| **Prisma CLI** | `^7.9.1` | Active | Defined in devDependencies and package.json |
| **Next.js** | `16.3.2` | Active | App Router with Turbopack |

### Execution Recommendation:
The automated content generation script can be written in **TypeScript** (e.g., `scripts/generate_facebook_posts.ts`) and invoked via:
```bash
npx tsx scripts/generate_facebook_posts.ts
```
or configured in `package.json` as:
```json
"scripts": {
  "generate:posts": "tsx scripts/generate_facebook_posts.ts"
}
```

---

## 4. Data Models & Database Architecture

### 4.1 Prisma Schema (`prisma/schema.prisma`)
The project defines 5 relational models:
1. **`Vehicle`**: Represents Thai-market EV variants (`make`, `model`, `year`, `variant`).
2. **`Product`**: High-level accessories and charging products (`sku`, `title`, `description`, `categoryId`).
3. **`Category`**: E-commerce taxonomy (`name`, `shopeeId`, `wooId`).
4. **`Batch`**: Sourcing batch lifecycle (`status`, `supplierName`, `cost`, `moq`).
5. **`Fitment`**: Join table between `Batch` and `Vehicle` (`status`: `UNVERIFIED`, `PASSED`, `FAILED`, etc.).

### 4.2 Dynamic Serverless Proxy Fallback (`src/lib/prisma.ts`)
The codebase implements a resilient fallback architecture. If the SQLite database is not present or cannot be initialized in serverless environments, Prisma client operations fail gracefully and fallback datasets (e.g., in `src/app/(storefront)/page.tsx` and `src/app/(admin)/vehicles/actions.ts`) are used.

---

## 5. Existing Vehicle Dataset & Review Content Assets

The repository contains extensive, verified Thai automotive editorial content across 8 vehicle models and 1 educational guide:

| # | Model Slug | Vehicle Name | Key Thai Market Specs | Pricing (THB) | Article Location |
|---|---|---|---|---|---|
| 1 | `tesla-model-3-highland-review` | **Tesla Model 3 Highland** | RWD (283 hp / 60 kWh LFP), Long Range AWD (498 hp / 78.1 kWh NMC), Performance (460/627 hp). WLTP 513–629 km. Supercharger 250 kW. | 1,149,000 – 1,799,000 ฿ | `src/app/(storefront)/articles/tesla-model-3-highland-review/page.tsx` |
| 2 | `byd-seal-review` | **BYD Seal** | Dynamic (204 hp / 61.44 kWh), Premium (313 hp / 82.56 kWh), AWD Performance (530 hp / 82.56 kWh Blade). FSD dampers, CTB chassis. | 849,900 – 1,099,900 ฿ | `src/app/(storefront)/articles/byd-seal-review/page.tsx` |
| 3 | `zeekr-x-review` | **Zeekr X** | Standard RWD (272 hp / 66 kWh NMC), Flagship AWD (428 hp / 66 kWh NMC). SEA platform, Yamaha 13-speaker audio. | 899,000 – 1,049,000 ฿ | `src/app/(storefront)/articles/zeekr-x-review/page.tsx` |
| 4 | `mg4-electric-review` | **MG4 Electric** | Standard D/X (170 hp / 49 kWh LFP), Long Range V (180-245 hp / 64 kWh NMC), XPOWER AWD (435 hp / 64 kWh). 50:50 weight distribution, 5-link rear suspension. | 569,900 – 1,119,900 ฿ | `src/app/(storefront)/articles/mg4-electric-review/page.tsx` |
| 5 | `deepal-s07-review` | **Changan Deepal S07** | Standard BEV (258 hp / 66.8 kWh NMC), S07 L (218 hp / 79.97 kWh NMC). 125L frunk, DC 167 kW fast charge, electric sunblind. | 1,099,000 – 1,399,000 ฿ | `src/app/(storefront)/articles/deepal-s07-review/page.tsx` |
| 6 | `byd-atto-3-review` | **BYD Atto 3** | Dynamic/Premium (201 hp / 50.25 kWh Blade), Extended Range (201 hp / 60.48 kWh Blade). 410–480 km NEDC. | 669,900 – 799,900 ฿ | `src/app/(storefront)/articles/byd-atto-3-review/page.tsx` |
| 7 | `deepal-s05-review` | **Changan Deepal S05** | Pure BEV (238 hp / 56.12 kWh LFP). 159L frunk, 4K roof gimbal camera, 120" DLP headlights projector, 3C fast charge in 15 min. | 799,000 – 899,000 ฿ | `src/app/(storefront)/articles/deepal-s05-review/page.tsx` |
| 8 | `geely-ex2-review` | **Geely EX2** (Xingyuan) | EX2 Pro & Max (116 hp / 85 kW, 39.4 kWh Aegis LFP). 395 km NEDC, rear multi-link independent suspension, Flyme Auto OS. | 429,990 – 459,990 ฿ | `src/app/(storefront)/articles/geely-ex2-review/page.tsx` |
| 9 | `ev-battery-care` | **EV Battery Care Guide** | LFP vs NMC maintenance rules, 80% daily limit vs 100% calibration, thermal management during Thai hot season (38–42°C). | N/A (Guide) | `src/app/(storefront)/articles/ev-battery-care/page.tsx` |

---

## 6. Visual Media Assets Inventory

The repository includes a complete library of 32 authentic vehicle photographs:

### 6.1 Review Imagery (`public/images/reviews/`):
For each of the 8 models, 4 specific views are available:
1. `*-hero.jpg`: Main vehicle hero shot (16:9 / 21:9 ratio).
2. `*-exterior.jpg`: High-resolution exterior profile and styling.
3. `*-interior.jpg`: Dashboard, cockpit, and cabin layout.
4. `*-details.jpg`: Close-up of steering wheel, frunk, lighting, or center console.

### 6.2 Product & QC Imagery (`public/images/`):
- `tpe-floormats.jpg` — All-weather 3D TPE floor mats for Thai rainy/muddy conditions
- `sunroof-shade.jpg` — Reflective panoramic glass roof sunshades for Thai 40°C heat
- `screen-protector.jpg` — 9H tempered glass anti-glare screen protectors
- `tray-organizer.jpg` — Center console storage organizers
- `wireless-pad.jpg` — Non-slip silicone wireless charging mats
- `qc-inspection.jpg` — EVSELECT Bangkok QC fitment laboratory inspection
- `hero-bg.jpg` — Clean platform banner backdrop

### 6.3 Brand Assets (`public/`):
- `logo.png` (Mobile brand logo)
- `logo-desktop.png` (Desktop brand logo)

---

## 7. E-Commerce & Shopee Catalog Modules

In `scripts/shopee_ev_select/data/`, the project maintains structured data that can be leveraged for Facebook post CTAs and cross-promotion:
1. **`shopProfile.js`**:
   - Official Store Name: `EV select (Official Store)`
   - Tagline: `EV select - ผู้นำเข้าและจัดจำหน่ายอุปกรณ์ชาร์จรถยนต์ไฟฟ้า และนวัตกรรมพลังงานสะอาดครบวงจร`
   - Trust Pillars: 100% Genuine, 2-Year Thai Warranty, MEA/PEA Standard Compliance, Fast nationwide shipping.
2. **`productListings.js`**:
   - `EV-PROD-001`: Portable EV Charger 16A/32A Type 2 (IP66, LCD screen, 5m cable, 8,900 ฿).
   - `EV-PROD-002`: Home Wallbox Charger 7.4kW / 22kW (WiFi/Bluetooth, RFID, Type A+6mA DC RCD, 18,500 ฿).
   - `EV-PROD-003`: Type 2 to GB/T 32A Adapter (2,490 ฿).

---

## 8. Validation Harnesses & Quality Standards

The repository contains automated quality validation scripts in `scripts/`:
- `scripts/challenger_consistency_test.mjs`: Asserts exact numerical and keyword consistency between the catalog index (`ALL_ARTICLES`) and individual review pages.
- `scripts/verify_ev_reviews.mjs`: Tests for required editorial sections (Pricing table, Motor & battery specs, 0-100 acceleration, Thai road ride quality, AC/DC charging, ADAS, Fitment cards, Pros & Cons, Final verdict scorecard) and ensures zero placeholder words (`lorem`, `todo`, `tbd`).
- `scripts/test_images_integrity.mjs`: Validates that every referenced image file exists with valid non-zero byte sizes.

---

## 9. Generation Engine Implementation Recommendations

Based on the surveyed assets, the content generation engine should be designed with the following principles:

1. **Structured Data Source**:
   Create a centralized TypeScript dataset (e.g. `scripts/data/evDataset.ts` or `src/data/evDataset.ts`) that unifies vehicle specifications, real-world Thai range derating factors, TOU charging costs (0.48 ฿/km), and recommended EVSELECT accessories.
2. **Dual-Mode Generation**:
   - **Deterministic Parameterized Mode (Primary)**: Rule-based template generator using authentic Thai phrasing, emojis, bullet points, Pros & Cons, and call-to-actions. Guaranteed 100% offline and crash-free.
   - **AI-Augmented Mode (Optional)**: If `GEMINI_API_KEY` is present, allow prompt-based variation enhancement while strictly maintaining factual spec accuracy.
3. **Multi-Format Facebook Post Generation**:
   - Type 1: **Comprehensive Vehicle Review & Road Test** (0-100, real range in 38°C heat, suspension on Thai concrete roads, price per trim).
   - Type 2: **Head-to-Head Comparison** (e.g., BYD Seal vs Tesla Model 3 Highland; Deepal S07 vs BYD Atto 3).
   - Type 3: **EV Knowledge & Battery Care Tips** (TOU tariff savings, charging habit rules, heat protection).
   - Type 4: **Hot News & Market Trends** (New trim releases, price revisions, subsidy updates).
4. **Dual Output Destination**:
   - `posts.md`: Beautifully formatted markdown file with copy-paste blocks, image file paths, and hashtag sets ready for manual review.
   - `posts.json`: Structured JSON array containing post metadata, vehicle slug, post type, character count, and publication readiness score.
5. **CLI Interface**:
   ```bash
   npx tsx scripts/generate_facebook_posts.ts --model byd-seal --type review --count 3 --output ./posts.md
   ```
6. **Zero External Runtime Friction**: The script should have no mandatory external API keys to function, satisfying all acceptance criteria out of the box.

---
