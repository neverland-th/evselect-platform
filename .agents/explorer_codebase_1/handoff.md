# Codebase & Architecture Investigation Report: EV Vehicle Review Articles

**Agent**: Explorer 1 (`explorer_codebase_1`)  
**Project**: EVSELECT Platform EV Review Articles Project  
**Date**: 2026-08-25  

---

## 1. Observation

### 1.1 Project Structure & Dependencies
- **Project Root**: `c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform`
- **Framework & Libraries** (`package.json`):
  - Next.js: `16.3.2` (Turbopack, App Router)
  - React: `19.2.8` & React DOM `19.2.8`
  - Tailwind CSS: `@tailwindcss/postcss: ^4`, `tailwindcss: ^4`
  - Iconography: `lucide-react: ^1.33.0`
  - Database: `@prisma/client: ^7.9.1`, `@prisma/adapter-better-sqlite3: ^7.9.1`, `better-sqlite3: ^13.0.3`
  - TypeScript: `^5`

### 1.2 Design System & Styling
- **Global CSS** (`src/app/globals.css`):
  - Tailwind v4 setup with `@import "tailwindcss";` and `@theme inline`.
  - Color Tokens:
    - Background: `#09090b` (zinc-950 dark theme)
    - Foreground: `#f4f4f5` (zinc-100)
    - Primary Brand Lime: `#84cc16` (`--brand-lime` / `--color-lime-primary`)
    - Hover Brand Lime: `#a3e635` (`--brand-lime-hover` / `--color-lime-accent`)
    - Dark Surfaces: `#121215` (`--brand-dark`) and `#18181b` (`--brand-card`)
  - Utility Classes: `.glow-lime`, `.glow-lime-sm`, `.text-gradient-lime`
  - Custom dark scrollbar rules defined.
- **Typography** (`src/app/layout.tsx`):
  - Primary Font: Google Font `Prompt` (subsets: `thai`, `latin`, variable: `--font-thai`)
  - Monospace Font: `Geist_Mono` (variable: `--font-geist-mono`)

### 1.3 Existing Storefront Layout & Articles Architecture
- **Storefront Layout** (`src/app/(storefront)/layout.tsx`):
  - Sticky header (`bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80`)
  - Navigation bar linking to `#vehicle-finder`, `#products`, `#fitment-assurance`, `#ecosystem`, and `/articles` (with `Sparkles` icon and label "บทความ EV").
  - Footer with brand summary, supported Thai EV models list, contact links, and copyright notice.
- **Main Articles Index Page** (`src/app/(storefront)/articles/page.tsx`):
  - Implements an `articles` array containing metadata objects: `{ slug, title, excerpt, date, readTime, category, image }`.
  - Grid layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
  - Card components styled with `bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-500/50`.
  - Currently contains 1 entry: `ev-battery-care`.
- **Sample Article Page** (`src/app/(storefront)/articles/ev-battery-care/page.tsx`):
  - Hardcoded Server Component under route `/articles/ev-battery-care`.
  - Structure: Back navigation (`ArrowLeft`), Category badge, Date & Read Time, `<h1>` title with `textWrap: 'balance'`, Excerpt, Full-width Hero Image (`next/image`), Structured Section Blocks with Lucide icons (`BatteryCharging`, `Zap`, `ShieldAlert`, `Settings`), Callout Card for tested accessories (`/images/sunroof-shade.jpg`), Summary, and Share footer.

### 1.4 Image Assets & Next.js Configuration
- **Next.js Config** (`next.config.ts`): Standard config (`NextConfig = {}`). Local images in `public/images/` are served without remote domain configuration.
- **Existing Vehicle & Product Images** (`public/images/`):
  - `byd-atto3.jpg` (149 KB)
  - `byd-seal.jpg` (113 KB)
  - `deepal-s05.jpg` (144 KB)
  - `tesla-model3.jpg` (185 KB)
  - `zeekr-x.jpg` (129 KB)
  - `hero-bg.jpg` (135 KB)
  - Product accessory photos: `tray-organizer.jpg`, `tpe-floormats.jpg`, `sunroof-shade.jpg`, `wireless-pad.jpg`, `trunk-liner.jpg`, `screen-protector.jpg`, `qc-inspection.jpg`.
- **Image Sourcing Pattern** (`scripts/download_images.mjs`): Uses standard Node.js `https.get` to download high-resolution photos directly to `public/images/`.

### 1.5 Reference Review Format (CarExpert Model)
- Reference: `https://www.carexpert.com.au/car-reviews/2026-geely-ex2-review-quick-drive`
- Key structural sections in CarExpert reviews:
  1. Main Title & Sub-headline (Quick Drive / Full In-depth Review)
  2. Summary Scorecard (Score /10, Tested Trim, Price Range, Key Pros & Cons)
  3. Price & Thai Market Trim Breakdown (ราคาและรุ่นย่อย)
  4. Exterior Design & Dimensions (ดีไซน์ภายนอกและมิติตัวถัง)
  5. Interior Comfort, Ergonomics & Infotainment (ห้องโดยสาร พื้นที่ใช้สอย และระบบหน้าจอ)
  6. Powertrain, Acceleration & Driving Dynamics (ขุมพลัง สมรรถนะ ฟีลลิ่งช่วงล่างบนถนนไทย)
  7. Battery, Real-World Efficiency & Charging Speed (แบตเตอรี่ ระยะทางจริง และการชาร์จ AC/DC)
  8. Safety & ADAS Technology (ระบบความปลอดภัยและตัวช่วยขับขี่)
  9. Recommended Fitment Accessories Callout (อุปกรณ์เสริมตรงรุ่นผ่าน QC โดย EVSELECT)
  10. Final Verdict & Rating Summary (บทสรุปความคุ้มค่าและคะแนนรีวิว)

### 1.6 Build and Lint Verification
- Command: `npm run build` -> Passed with code 0 (12 static/dynamic routes generated cleanly).
- Command: `npm run lint` -> Passed with warnings/minor syntax errors related to unescaped quotes (`&quot;`) and explicit `any` casts in style attributes.

---

## 2. Logic Chain

1. **Routing and Architecture Strategy**:
   - `ORIGINAL_REQUEST.md` specifies hardcoded React page components inside `src/app/(storefront)/articles/<slug>/page.tsx`.
   - Creating distinct route folders under `src/app/(storefront)/articles/` enables static prerendering (`○ Static`), optimal SEO metadata per vehicle (`export const metadata`), dedicated OpenGraph tags, and custom tailored content without database migration overhead.
   - The main listing at `src/app/(storefront)/articles/page.tsx` directly imports or lists the article metadata array, allowing instant discovery and seamless navigation.

2. **Selected Vehicles for Review (7 Articles)**:
   - Matching both the EVSELECT supported vehicles ecosystem and popular Thai EV models:
     1. `byd-seal-review`: **2026 BYD Seal** (Dynamic, Premium, AWD Performance) — The popular sports sedan.
     2. `tesla-model-3-highland-review`: **2026 Tesla Model 3 Highland** (RWD, Long Range AWD) — The benchmark EV.
     3. `byd-atto-3-review`: **2026 BYD Atto 3** (Standard & Extended Range) — The best-selling family crossover.
     4. `zeekr-x-review`: **2026 Zeekr X** (Premium RWD & Flagship AWD) — The luxury compact EV.
     5. `deepal-s05-review`: **2026 Deepal S05** (Standard & Long Range) — The smart SUV with 4K gimbal camera.
     6. `geely-ex2-review`: **2026 Geely EX2** — Direct match with the CarExpert reference review, budget city EV.
     7. `byd-sealion-7-review`: **2026 BYD Sealion 7** — High-performance coupe SUV competing with Model Y.

3. **Design & Component Uniformity**:
   - Every review page should follow a consistent, high-impact CarExpert-style layout.
   - Using Tailwind CSS classes matching `globals.css` (`bg-[#09090b]`, `border-zinc-800`, `text-lime-400`, `bg-zinc-900/50`).
   - Using Lucide icons for visual anchors (`Zap`, `Gauge`, `BatteryCharging`, `ShieldCheck`, `CheckCircle2`, `AlertTriangle`, `Car`, `Star`, `Sliders`, `Clock`, `CalendarDays`, `ArrowRight`, `ArrowLeft`, `Share2`, `Check`, `X`).
   - Embedding EVSELECT verified accessory recommendation cards in each review (e.g. TPE floor mats, sunshades, screen protectors, center console organizers) creates a natural conversion bridge to the storefront catalog.

4. **Modern Web Guidelines Compliance**:
   - Use `text-balance` (or `style={{ textWrap: 'balance' } as React.CSSProperties}`) on headlines.
   - Use `style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' } as React.CSSProperties}` on long content sections to ensure fast DOM rendering.
   - Use Next.js `<Image>` with `priority` on the main hero image and responsive `sizes` on all photos.
   - Escape double quotes properly (`&quot;`) to guarantee zero ESLint errors.

---

## 3. Caveats

- **Network Fetching of Images**: When downloading additional images for `geely-ex2.jpg` and `byd-sealion-7.jpg`, use stable CDNs or Wikimedia Commons with proper User-Agent headers to avoid 403 Forbidden responses.
- **Language**: All reviews must be written in professional, natural, high-depth Thai with accurate automotive terminology (e.g. แรงม้า, แรงบิด, มิติช่วงล่าง, การดูดซับแรงสะเทือน, ระบบระบายความร้อนแบตเตอรี่, การชาร์จ DC/AC, ADAS).

---

## 4. Conclusion & Recommendations

1. **Directory Structure to Create**:
   - `src/app/(storefront)/articles/geely-ex2-review/page.tsx`
   - `src/app/(storefront)/articles/byd-seal-review/page.tsx`
   - `src/app/(storefront)/articles/tesla-model-3-highland-review/page.tsx`
   - `src/app/(storefront)/articles/byd-atto-3-review/page.tsx`
   - `src/app/(storefront)/articles/zeekr-x-review/page.tsx`
   - `src/app/(storefront)/articles/deepal-s05-review/page.tsx`
   - `src/app/(storefront)/articles/byd-sealion-7-review/page.tsx`

2. **Index Page Update**:
   - Update `src/app/(storefront)/articles/page.tsx` with all 7 review articles + the existing guide, with category filters ("ทั้งหมด", "รีวิวรถ EV", "คู่มือและเทคนิค").

3. **Image Assets to Add to `public/images/`**:
   - `geely-ex2.jpg`
   - `byd-sealion7.jpg`
   - Additional exterior/interior detail images as needed.

4. **Review Component Pattern**:
   - Reusable structure per page:
     1. Metadata (`export const metadata`)
     2. Back link & Breadcrumbs
     3. Article Header & Badges
     4. Hero Image (`<Image priority />`)
     5. Executive Scorecard Card (Rating, Price, Specs, Pros/Cons)
     6. Table of Contents Quick Jump
     7. Section 1: ราคาและรุ่นย่อย (พร้อมตารางสเปกเปรียบเทียบ)
     8. Section 2: ดีไซน์ภายนอกและมิติตัวถัง
     9. Section 3: ภายในห้องโดยสารและการใช้งาน
     10. Section 4: ขุมพลังและสมรรถนะการขับขี่บนถนนเมืองไทย
     11. Section 5: แบตเตอรี่ การชาร์จ และระยะทางจริง
     12. Section 6: ระบบความปลอดภัย ADAS
     13. Section 7: อุปกรณ์เสริมตรงรุ่นแนะนำโดย EVSELECT Lab
     14. Section 8: สรุปคะแนนรีวิวและความคุ้มค่า
     15. Share & Related Articles Grid

---

## 5. Verification Method

To independently verify after implementation:

1. **Build Verification**:
   ```bash
   npm run build
   ```
   Verify that all 7+ new routes (e.g. `/articles/byd-seal-review`, `/articles/geely-ex2-review`, etc.) are compiled and prerendered as static pages without errors.

2. **Lint Verification**:
   ```bash
   npm run lint
   ```
   Verify that no JSX unescaped entities or TypeScript `any` errors exist.

3. **File System Inspection**:
   - Inspect `public/images/` for new image files.
   - Inspect `src/app/(storefront)/articles/page.tsx` to verify `<Link href="/articles/...">` elements link to all new review articles.
   - Inspect all 7 `src/app/(storefront)/articles/<slug>/page.tsx` files.
