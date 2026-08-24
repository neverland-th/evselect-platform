# Project: EVSELECT Platform EV Review Articles

## Architecture
- **Framework**: Next.js 16.3.2 (App Router, Turbopack) with React 19.2.8 and TypeScript.
- **Styling & Theme**: Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline`), dark theme palette (`#09090b` background, `#84cc16` lime primary accent, `zinc-800/900` surfaces, Google Font `Prompt`).
- **Icons**: Lucide React (`lucide-react`).
- **Routing Structure**:
  - Main Index: `src/app/(storefront)/articles/page.tsx`
  - Review Articles: `src/app/(storefront)/articles/<slug>/page.tsx`
- **Asset Pipeline**: `public/images/reviews/[model]-[view].jpg` with Next.js `<Image>` component optimization.
- **Modern Web Guidelines**:
  - `text-wrap: balance` on all article headlines and section titles.
  - `content-visibility: auto` with `contain-intrinsic-size` on long below-the-fold content blocks.
  - LCP image optimization (`priority`, `sizes`, explicit aspect ratios) on hero covers.
  - Opaque-box editorial design mirroring CarExpert structure with localized Thai market specs & pricing.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | CarExpert 10-Section Article Layout | Reusable editorial review layout with Executive Scorecard, Trims/Pricing, Exterior, Interior, Powertrain, Ride/NVH, Battery/Charging, ADAS, Pros/Cons, and EVSELECT Verdict | M1 | Survey |
| 2 | Modern Web Typography & Performance | Implementation of `text-wrap: balance`, `content-visibility: auto`, Next.js `<Image priority>` and CLS prevention wrappers | M1 | Survey |
| 3 | BYD Seal Review Article | In-depth Thai review for BYD Seal (Dynamic, Premium, AWD Performance) at `/articles/byd-seal-review/page.tsx` | M2 | Survey |
| 4 | Tesla Model 3 Highland Review Article | In-depth Thai review for Tesla Model 3 Highland (RWD, Long Range, Performance) at `/articles/tesla-model-3-highland-review/page.tsx` | M2 | Survey |
| 5 | BYD Atto 3 Review Article | In-depth Thai review for BYD Atto 3 (Dynamic, Extended Range) at `/articles/byd-atto-3-review/page.tsx` | M2 | Survey |
| 6 | Zeekr X Review Article | In-depth Thai review for Zeekr X (Standard RWD, Flagship AWD) at `/articles/zeekr-x-review/page.tsx` | M2 | Survey |
| 7 | Deepal S07 Review Article | In-depth Thai review for Changan Deepal S07 at `/articles/deepal-s07-review/page.tsx` | M3 | Survey |
| 8 | MG4 Electric Review Article | In-depth Thai review for MG4 Electric (Standard, Long Range, XPOWER) at `/articles/mg4-electric-review/page.tsx` | M3 | Survey |
| 9 | Deepal S05 Review Article | In-depth Thai review for Changan Deepal S05 at `/articles/deepal-s05-review/page.tsx` | M3 | Survey |
| 10 | Geely EX2 Review Article | In-depth Thai review for Geely EX2 (CarExpert quick drive reference) at `/articles/geely-ex2-review/page.tsx` | M3 | Survey |
| 11 | Main Articles Index Page Update | Updated `src/app/(storefront)/articles/page.tsx` with all 8 new review cards, category filtering, search/tags, and rich metadata | M4 | Survey |
| 12 | EVSELECT Accessory Bridge Cards | Contextual promo cards in each review linking directly to EVSELECT verified accessories | M1, M2, M3 | Survey |
| 13 | Quality Gate, Build & E2E Verification | TypeScript compilation, `npm run build` static generation, ESLint compliance, Challenger validation, and Forensic Integrity Audit | M5 | Survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Review Article Shared Blueprint & Standards | Shared component blueprint, metadata types, modern web standards helpers, and asset validation | none | DONE |
| M2 | EV Review Articles Batch 1 (4 Models) | Implementation of BYD Seal, Tesla Model 3 Highland, BYD Atto 3, and Zeekr X reviews with images & specs | M1 | DONE |
| M3 | EV Review Articles Batch 2 (4 Models) | Implementation of Deepal S07, MG4 Electric, Deepal S05, and Geely EX2 reviews with images & specs | M1 | DONE |
| M4 | Articles Index Page & Navigation Integration | Update `src/app/(storefront)/articles/page.tsx` with all articles, category pills, responsive grid, and metadata | M2, M3 | DONE |
| M5 | Build Verification, Challenger Testing & Audit | Full Next.js build verification, Reviewer approval, Challenger adversarial tests, and Forensic Audit | M4 | DONE |

## Interface Contracts
### Review Article Page Structure (`src/app/(storefront)/articles/<slug>/page.tsx`)
- Exports `metadata: Metadata` for Next.js SEO.
- Default export React Server Component rendering:
  - Breadcrumbs & back link to `/articles`
  - Header: Category badge (`Car Review`), Date, Read time, `<h1>` with `textWrap: 'balance'`, and Executive Scorecard
  - Hero image: Next.js `<Image priority fill sizes="100vw">`
  - Overview & Thai Market Context
  - Pricing & Trims Table (Thai Baht)
  - Exterior Design & Dimensions
  - Interior Cockpit, Screens & Storage
  - Powertrain, Motors & 0-100 Performance
  - Ride Quality, Suspension & NVH on Thai roads
  - Battery, Real-World Range & Charging (AC/DC)
  - Active Safety & ADAS Features
  - Contextual EVSELECT Fitment Accessory recommendation card
  - Pros & Cons (จุดเด่น & ข้อสังเกต)
  - Final Verdict & EVSELECT Rating Scorecard
  - Footer Share & Back to Articles

### Articles Index Structure (`src/app/(storefront)/articles/page.tsx`)
- Metadata with title & description
- Hero banner: "บทความและรีวิวรถยนต์ไฟฟ้า"
- Category filter pills ("ทั้งหมด", "รีวิวรถ EV", "คู่มือและเทคนิค")
- Articles Grid mapping over all review articles + guides with cover images, tags, read times, ratings, and excerpts.

## Code Layout
- Review Articles: `src/app/(storefront)/articles/<slug>/page.tsx`
  - `src/app/(storefront)/articles/byd-seal-review/page.tsx`
  - `src/app/(storefront)/articles/tesla-model-3-highland-review/page.tsx`
  - `src/app/(storefront)/articles/byd-atto-3-review/page.tsx`
  - `src/app/(storefront)/articles/zeekr-x-review/page.tsx`
  - `src/app/(storefront)/articles/deepal-s07-review/page.tsx`
  - `src/app/(storefront)/articles/mg4-electric-review/page.tsx`
  - `src/app/(storefront)/articles/deepal-s05-review/page.tsx`
  - `src/app/(storefront)/articles/geely-ex2-review/page.tsx`
- Articles Index: `src/app/(storefront)/articles/page.tsx`
- Shared Assets: `public/images/reviews/*.jpg`
