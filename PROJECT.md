# Project: EV Selection Thailand Facebook Automated Content Generation System

## Architecture
The system provides a modular, production-ready, automated content generation engine specifically tailored for the "EV Selection Thailand" Facebook page. It combines rich Thai EV market specifications with authentic automotive editorial conventions, addressing local climate concerns (35°C–40°C heat, AC load, real-world range derating), charging network operations, TOU electricity savings, and accessory fitments.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                               CLI & Script Runner                               │
│            scripts/generate-posts.ts  /  npm run generate-posts                 │
│        (--vehicle, --topic, --mode, --count, --output-dir, --list)              │
└──────────────────────────────────────┬──────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         Content Generation Engine                               │
│                     src/content-generator/engine/                              │
│  ┌─────────────────────────────────┐   ┌─────────────────────────────────────┐  │
│  │   Mode A: Rule-Based Engine     │   │   Mode B: AI-Augmented Engine       │  │
│  │ (Deterministic, Zero-API-Key,   │   │  (Gemini API with Structured Thai   │  │
│  │  100% Offline, Modular Templates│   │   Grounding + Auto-fallback to A)   │  │
│  └─────────────────────────────────┘   └─────────────────────────────────────┘  │
└──────────────────────────────────────┬──────────────────────────────────────────┘
                                       │
            ┌──────────────────────────┴──────────────────────────┐
            ▼                                                     ▼
┌──────────────────────────────────────┐  ┌───────────────────────────────────────┐
│     Thai EV Knowledge Base           │  │          Post Templates               │
│   src/content-generator/data/        │  │     src/content-generator/templates/   │
│ - 13+ Thai EV Models & Trims (THB)   │  │ 1. In-Depth Vehicle Review & Verdict  │
│ - Tropical Heat & AC Range Derating  │  │ 2. EV Comparison / Buyer's Battle     │
│ - 8 Thai Charging CPOs & Speeds      │  │ 3. EV Weekly News & Market Trends     │
│ - TOU vs Petrol Economics (0.48฿/km) │  │ 4. Tropical Heat & Charging Guide     │
│ - EVSELECT Genuine Fitment Matrix    │  │ 5. Home TOU Tariff & Wallbox Guide    │
└──────────────────────────────────────┘  └───────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                             Dual Output Pipeline                                │
│  - posts.md: Clean Markdown with Thai emojis, copy-paste ready for Facebook     │
│  - posts.json: Structured JSON format with metadata, tags, image paths & specs  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Thai EV Specifications Database | Detailed data for 13+ top Thai EV models (BYD Seal/Atto 3/Dolphin, Deepal S07/L07/S05, Tesla Model 3/Y, MG4, Zeekr X, Geely EX2, ORA Good Cat, Aion Y Plus) with official THB pricing, trims, battery kWh, power, 0-100, DC/AC charging, and verified photo references. | M1 | Survey 1 & 2 |
| 2 | Tropical Climate & Range Derating Model | Realistic range calculation for 35°C–40°C Thai weather with heavy A/C load and highway speeds vs NEDC/WLTP laboratory ratings. | M1 | Survey 2 |
| 3 | Thai Charging & TOU Economics Engine | CPO network metadata (PTT, PEA, MEA, EGAT, EA Anywhere, Evolt, Altervim, Tesla Supercharger) and Home TOU cost calculations (~0.48 THB/km vs 2.71 THB/km Petrol). | M1 | Survey 2 |
| 4 | EVSELECT Fitment Matrix Data | Model-specific recommendations for TPE 3D floor mats, glass roof sunshades, screen protectors, key cases, and 7.4kW/22kW wallbox chargers. | M1 | Survey 1 & 2 |
| 5 | Modular Thai Facebook Post Templates | 5 authentic Thai post formats: Deep-Dive Review, Head-to-Head Comparison, EV News Roundup, Tropical Heat & Battery Care, and Home Charging TOU Guide. | M2 | Survey 2 & 3 |
| 6 | Rule-Based Generation Engine (Mode A) | Deterministic, zero-dependency, 100% offline generation engine with randomized hooks, body variations, and authentic Thai automotive phrasing. | M2 | Survey 3 |
| 7 | AI-Augmented Generation Engine (Mode B) | Gemini API integration with structured prompt grounding, supporting custom creativity with automatic fallback to Mode A if API key is missing or offline. | M2 | Survey 3 |
| 8 | CLI & Automation Script Runner | Executable script via `npx tsx scripts/generate-posts.ts` and `npm run generate-posts` supporting arguments `--vehicle`, `--topic`, `--mode`, `--count`, `--output-dir`, and `--list`. | M3 | Survey 3 |
| 9 | Dual Output Formatter (`posts.md` & `posts.json`) | Exporters generating formatted Markdown with copy-paste readiness for Facebook admins, plus structured JSON. | M3 | R2 & Survey 3 |
| 10 | Comprehensive Opaque-Box E2E Testing Suite | Tier 1 to 4 test suite validating script execution, Thai language structure, pricing formatting, zero placeholder leak, and schema validity. | M4 | E2E Testing |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Thai EV Data Catalog & Domain Models | Build vehicle database, tropical derating model, charging network data, TOU economics, and fitment mappings. | none | DONE |
| M2 | Content Generation Engine & Post Templates | Build template generators, dynamic Thai text synthesizer, dual-mode engine (Mode A rule-based & Mode B Gemini AI with auto-fallback). | M1 | DONE |
| M3 | CLI Runner, Output Exporters & Package Scripts | Build `scripts/generate-posts.ts`, formatters for `posts.md` and `posts.json`, add npm script commands. | M2 | DONE |
| M4 | Comprehensive E2E Testing & Verification | Implement test suite verifying CLI arguments, all vehicle generation, all post formats, Thai text quality, and verify complete output posts. | M3 | DONE |

## Interface Contracts
### `VehicleSpec` & Data Models (`src/content-generator/types.ts`)
```typescript
export interface VehicleTrim {
  name: string;
  priceTHB: number;
  batteryKWh: number;
  batteryType: string;
  rangeNedcKm?: number;
  rangeWltpKm?: number;
  realWorldRangeThaiKm: number;
  powerHp: number;
  torqueNm: number;
  acceleration0to100: number;
  maxDCSpeedKw: number;
  maxACSpeedKw: number;
  drivetrain: 'RWD' | 'FWD' | 'AWD';
}

export interface VehicleSpec {
  id: string;
  brand: string;
  model: string;
  taglineThai: string;
  category: 'Sedan' | 'SUV' | 'Crossover' | 'Hatchback' | 'MPV' | 'City Car';
  trims: VehicleTrim[];
  prosThai: string[];
  consThai: string[];
  heatPerformanceNotesThai: string;
  suspensionThaiRoadsNotesThai: string;
  chargingExperienceThai: string;
  recommendedAccessories: string[];
  imageUrls: {
    hero: string;
    exterior?: string;
    interior?: string;
    details?: string;
  };
}

export interface GeneratedPost {
  id: string;
  title: string;
  topic: 'review' | 'comparison' | 'news' | 'heat-guide' | 'charging-guide';
  vehicleModel?: string;
  generatedAt: string;
  mode: 'rule_based' | 'ai_augmented';
  contentMarkdown: string;
  plainText: string;
  metadata: {
    charCount: number;
    hashtags: string[];
    suggestedImages: string[];
    callToActionUrl?: string;
  };
}

export interface GenerationOptions {
  vehicleId?: string;
  topic?: 'review' | 'comparison' | 'news' | 'heat-guide' | 'charging-guide';
  mode?: 'rule_based' | 'ai_augmented';
  count?: number;
  outputDir?: string;
}
```

## Code Layout
- `src/content-generator/types.ts` — Shared TypeScript type definitions
- `src/content-generator/data/vehicles.ts` — Comprehensive Thai EV model specifications
- `src/content-generator/data/charging.ts` — Thai charging networks & TOU rate calculations
- `src/content-generator/data/accessories.ts` — EVSELECT accessory fitment database
- `src/content-generator/templates/review.ts` — In-Depth Review post template
- `src/content-generator/templates/comparison.ts` — Head-to-Head Comparison post template
- `src/content-generator/templates/news.ts` — Weekly EV News & Market Trends template
- `src/content-generator/templates/heat-guide.ts` — Tropical Climate & Battery Care template
- `src/content-generator/templates/charging-guide.ts` — Home TOU & Public Charging Guide template
- `src/content-generator/engine/generator.ts` — Core engine synthesizing posts (Mode A + Mode B)
- `src/content-generator/engine/gemini.ts` — Gemini API client with auto-fallback
- `src/content-generator/exporters/markdown.ts` — `posts.md` exporter
- `src/content-generator/exporters/json.ts` — `posts.json` exporter
- `scripts/generate-posts.ts` — CLI runner executable via `npx tsx scripts/generate-posts.ts`
- `tests/content-generator.test.ts` — E2E test harness
