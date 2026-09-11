---
name: thai-ev-spec-verifier
description: >-
  Extracts, validates, and maintains authoritative Thai EV manufacturer specifications from official distributor
  brochures (PDF), Eco Stickers, and press releases. Prevents foreign specification drift (e.g. EU/US horsepower or
  gross combined outputs), records official brochure URLs, and propagates verified figures to EVSELECT vehicle catalogs
  and editorial review articles.
---

# Thai EV Specification Ingestion & Verification Skill

The **thai-ev-spec-verifier** skill codifies the protocol for ingesting official Thailand distributor brochures, verifying RHD (Right-Hand Drive) technical specifications, and maintaining the EVSELECT single-source-of-truth knowledge base.

---

## 1. Core Principles

1. **Thailand RHD Specifications Only**:
   - Always prioritize official Thai distributor brochures (e.g. DatoCMS ZEEKR Thailand, Rever Automotive, Tesla Thailand RHD).
   - Never use EU/US foreign ratings (e.g. EPA range) or Chinese domestic market (CLTC) data when official Thai NEDC/WLTP data exists.
   - Never combine front and rear motor outputs manually unless officially endorsed by the Thai distributor (e.g. Tesla Model 3 Performance is officially 460 hp in Thailand, Zeekr X Flagship AWD is officially 489 hp / 365 kW in Thailand July 2026).

2. **Official Source Documentation**:
   - Every vehicle model must have its official brochure URL recorded in `src/content-generator/data/official-sources.json`.
   - Record publication date, distributor, warranty policies, and exact trim breakdown.

3. **Multi-File Propagation**:
   When official specs are updated or added, update in all 3 locations:
   - `src/content-generator/data/official-sources.json` (Knowledge repository)
   - `src/content-generator/data/vehicles.ts` (Core vehicle database)
   - `src/app/(storefront)/articles/<slug>/page.tsx` & `src/app/(storefront)/articles/page.tsx` (Storefront reviews)

---

## 2. Ingestion Workflow

### Step 1: Download & Inspect Official Brochure
1. Download the PDF brochure to `scratch/`:
   ```bash
   curl -o scratch/vehicle_brochure.pdf "<official-url>"
   ```
2. Render pages to images using `pdf-poppler` or `pdf2image` / Node canvas if text is embedded in vector graphics.
3. Inspect specification tables for:
   - Dimensions: Length, Width, Height, Wheelbase, Ground Clearance, Turning Radius
   - Battery: Capacity (kWh), Chemistry (LFP vs NCM), Charging speeds (AC kW, DC kW, V2L)
   - Motors & Performance: Single vs Dual Motor, Max Power (kW and hp), Torque (Nm), 0-100 km/h acceleration
   - Wheels & Tires: Rim sizes (18", 19", 20") and tire specifications
   - Trim Exclusive Features: Headliner materials, HUD, massage seats, automatic doors

### Step 2: Register in Official Sources
Append or update the vehicle entry in `src/content-generator/data/official-sources.json`.

### Step 3: Synchronize Vehicle Database
Update `src/content-generator/data/vehicles.ts` with the new or revised `VehicleSpec` object.

### Step 4: Audit Editorial Articles
Scan the corresponding article in `src/app/(storefront)/articles/<slug>/page.tsx`:
- Update Metadata (`title`, `description`, `openGraph`)
- Update Hero image badge & Quick Facts grid
- Update Trims Comparison table and individual trim cards
- Update Body paragraphs, performance figures, and Pros & Cons

### Step 5: Verification & Build
Run the Next.js compiler:
```bash
npm run build
```

---

## 3. Common Pitfalls

- **Model Year / Facelift Confusion**: For example, Zeekr X received upgraded motors in Thailand in July 2026 (Standard RWD jumped from 272 hp to 335 hp, Flagship AWD jumped from 428 hp to 489 hp). Never assume old specs remain valid across model years.
- **Battery Chemistry Swaps**: Standard RWD uses 61 kWh LFP, while Flagship AWD uses 66 kWh NCM. Do not assume all trims share the same battery chemistry.
- **Dangling Brand Residue**: Ensure no third-party review media labels (e.g. "CarExpert", "สไตล์ CarExpert") are accidentally carried over from legacy drafts.
