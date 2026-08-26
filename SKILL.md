---
name: evselect-platform
description: Comprehensive operational guide, architecture reference, and workflows for the EVSELECT Thai EV E-commerce & Automotive Editorial platform. Use when adding/modifying Thai EV vehicle reviews, managing vehicle fitment matrices, updating Prisma schemas, deploying to Vercel, or designing UI components following the EVSELECT Modern White Theme. Triggers on "evselect", "ev vehicle review", "fitment matrix", "shopee export", "thai ev specs", "vehicle finder".
license: MIT
metadata:
  author: evselect-team
  version: "1.0.0"
---

# EVSELECT Platform Guide & Operational Skill

The **EVSELECT Platform** (`evselect-platform`) is an end-to-end e-commerce catalog and automotive editorial platform engineered for the Thailand Electric Vehicle (EV) market. It bridges the gap between verified Thai Right-Hand Drive (RHD) vehicle specifications and aftermarket EV accessories with a guaranteed 100% Fitment QC assurance.

---

## 1. Architecture & Tech Stack

```
evselect-platform/
├── prisma/
│   └── schema.prisma         # Database schema (Vehicle, Product, Category, Batch, Fitment)
├── public/
│   ├── images/               # Showcase & QC lab imagery
│   │   └── reviews/          # High-resolution review assets (hero, exterior, interior, details)
│   ├── logo.png              # Mobile brand logo
│   └── logo-desktop.png      # Desktop brand logo
├── src/
│   ├── app/
│   │   ├── (admin)/          # Admin portals (products, vehicles, fitment, categories, export)
│   │   ├── (storefront)/     # Customer-facing storefront
│   │   │   ├── articles/     # Editorial hub & in-depth CarExpert-style EV review routes
│   │   │   ├── layout.tsx    # Storefront header (glassmorphism), announcement bar, footer
│   │   │   └── page.tsx      # Main landing page, hero, trust pillars, QC 5-stage workflow
│   │   ├── api/export/       # CSV/JSON data export endpoints for Shopee & WooCommerce
│   │   ├── globals.css       # Tailwind CSS v4 root variables (Modern White Theme)
│   │   └── layout.tsx        # Root HTML layout with Prompt & Geist fonts
│   ├── components/
│   │   └── VehicleFilter.tsx # Interactive client-side 4-stage vehicle & product finder
│   └── lib/
│       └── prisma.ts         # Resilient serverless Prisma Proxy client
```

### Key Technologies:
- **Framework**: Next.js 16 (App Router + Turbopack)
- **Styling**: Tailwind CSS v4 + Thai font (`Prompt`) & Mono (`Geist Mono`)
- **Database / ORM**: Prisma ORM 7 with Serverless Proxy Fallback Pattern
- **Deployment**: Vercel Serverless with GitHub CI/CD integration

---

## 2. Serverless Database Resilience Pattern

> [!IMPORTANT]
> Because native SQLite binary drivers (`better-sqlite3`) cannot execute on Vercel Serverless containers, `src/lib/prisma.ts` implements a dynamic Proxy fallback.

### Golden Rules for Database Queries:
1. **Never make unhandled Prisma calls in SSR**: Always wrap database calls in Server Components (`page.tsx`) with a `try/catch` block.
2. **Provide Rich Fallback Datasets**: On database connection failure, fall back to curated mock data so public pages always render HTTP 200 with complete content.
3. **Build Script Integrity**: Ensure `package.json` retains `"postinstall": "prisma generate"` and `"build": "prisma generate && next build"`.

---

## 3. Workflow: Adding a New EV Vehicle Review Article

All editorial reviews follow the structured, 12-dimension evaluation format of CarExpert, customized for Thai climate and roads.

### Step 1: Create Review Page
Create a new directory and `page.tsx` under `src/app/(storefront)/articles/<vehicle-slug>-review/page.tsx`:
```tsx
import Image from 'next/image';
import Link from 'next/link';
import { Car, Award, ShieldCheck, Zap, CalendarDays, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'รีวิว [Vehicle Name] สเปกไทย: [Catchy Subtitle] | EVSELECT Reviews',
  description: '[Summary covering 0-100 acceleration, battery range, 40°C AC test, and suspension feel on Thai roads]',
};

export default function VehicleReviewPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* 1. Breadcrumbs */}
      {/* 2. Header & Scorecard Verdict */}
      {/* 3. Hero Image with LCP priority */}
      {/* 4. Deep-dive Sections (Exterior, Interior, Performance, Thai Road Test, Hot Weather AC, Fitment Accessories) */}
      {/* 5. Pros & Cons Table */}
      {/* 6. EVSELECT Verified Accessories Callout */}
    </article>
  );
}
```

### Step 2: Register in Articles Index
Open `src/app/(storefront)/articles/page.tsx` and append the new article object to `ALL_ARTICLES`:
```ts
{
  slug: 'vehicle-slug-review',
  title: 'รีวิว Vehicle Name: ...',
  categorySlug: 'reviews',
  segmentSlug: 'suv', // 'sedan' | 'suv' | 'hatchback' | 'city'
  segmentName: '🚙 เอสยูวีไฟฟ้าพรีเมียม',
  image: '/images/reviews/vehicle-slug-hero.jpg',
  rating: 8.9,
  ratingText: '8.9 / 10',
  priceRange: '1,199,000 - 1,399,000 ฿',
  excerpt: '...',
  highlights: ['0-100 ใน 6.9 วินาที', 'แบตเตอรี่ 66.8 kWh', 'ช่วงล่างนุ่มนวล'],
  dateDisplay: '26 สิงหาคม 2569',
  readTime: '8 นาที',
}
```

### Step 3: Add Sourced Images
Place high-resolution WebP/JPG images in `public/images/reviews/`:
- `vehicle-slug-hero.jpg`
- `vehicle-slug-exterior.jpg`
- `vehicle-slug-interior.jpg`
- `vehicle-slug-details.jpg`

---

## 4. Workflow: Managing Products & Fitment Matrix

### Vehicle Model Data (`Vehicle`)
Vehicles represent Thai-spec official models with Right-Hand Drive (RHD):
- **Make**: BYD, Tesla, Zeekr, Deepal, Geely, MG, Changan, Neta, etc.
- **Model**: Seal, Model 3 Highland, Atto 3, Zeekr X, Deepal S05, Deepal S07, EX2, MG4
- **Variant**: Trim in Thai market (e.g., `Standard Range`, `Long Range`, `AWD Performance`)
- **Year**: 2024, 2025, 2026

### Product & SKU Structure
- **SKU Convention**: `EVS-<CATEGORY>-<VEHICLE_CODE>-<VARIANT_CODE>` (e.g., `EVS-MAT-SEAL-RHD`, `EVS-SUN-M3H-SILVER`)
- **Fitment Verification Statuses**:
  - `VERIFIED`: Tested on real Thai vehicle, 100% fit guaranteed.
  - `TESTING`: Sample under lab evaluation in Bangkok.
  - `NOT_COMPATIBLE`: Known dimension conflict on Thai RHD spec.

---

## 5. UI/UX Design System (EVSELECT Modern White Theme)

| Element | Specification | Tailwind Classes |
| :--- | :--- | :--- |
| **Canvas Background** | Pure White | `bg-white` |
| **Secondary Background**| Subtle Light Slate | `bg-slate-50` / `bg-slate-100` |
| **Primary Text** | High-contrast Slate | `text-slate-900` (`#0f172a`) |
| **Secondary Text** | Readable Mid Slate | `text-slate-600` / `text-slate-500` |
| **QC & Fitment Accent** | Vivid Lime Green | `bg-lime-500 text-black`, `text-lime-600`, `border-lime-300` |
| **Shopee Action** | Shopee Brand Orange | `bg-orange-500 hover:bg-orange-600 text-white` |
| **Social / LINE Action**| Chat Brand Blue | `bg-blue-600 hover:bg-blue-700 text-white` |
| **Card Borders & Shadow**| Refined Slate Border | `border border-slate-200 shadow-xs hover:shadow-xl` |
| **Header Navbar** | Frosted Glass | `bg-white/90 backdrop-blur-md border-b border-slate-200/90` |

---

## 6. Build, Verification & Deployment Protocol

### Local Build Test
Always test the Next.js build locally before pushing:
```bash
npm run build
```
Verify that all 20+ routes compile with 0 TypeScript or lint errors.

### Deployment via GitHub CI/CD
Deploy changes to production by pushing to `main` on the authenticated GitHub remote:
```bash
git add -A
git commit -m "feat: [describe change]"
git push https://github.com/evselect/evselect-platform.git main
```
Vercel will automatically build and deploy the production site at:
`https://evselect-platform-evselect-com.vercel.app`
