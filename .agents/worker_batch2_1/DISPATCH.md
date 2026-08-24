## 2026-08-25T04:17:15+07:00

You are Worker Batch 2 for the EVSELECT platform EV review articles project.
Your working directory: c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/worker_batch2_1
Original Request Path: c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/ORIGINAL_REQUEST.md

Project References to read:
1. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/PROJECT.md
2. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/spec_miner_survey_1/handoff.md
3. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/explorer_ev_research_1/handoff.md
4. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/explorer_codebase_1/handoff.md

Assigned Scope (Milestone M3) - Exclusive File Ownership:
You own and must create the following 4 React Server Component review pages:
1. `src/app/(storefront)/articles/deepal-s07-review/page.tsx`
2. `src/app/(storefront)/articles/mg4-electric-review/page.tsx`
3. `src/app/(storefront)/articles/deepal-s05-review/page.tsx`
4. `src/app/(storefront)/articles/geely-ex2-review/page.tsx`

Implementation Requirements:
1. Full 10-section CarExpert review structure in fluent, expert, engaging Thai:
   - Header with category badges, date, read time, verdict score pill (e.g. 8.8/10)
   - Section 1: Overview & Thai market context
   - Section 2: Thai Baht Pricing & Trims Comparison Table (with specs)
   - Section 3: Exterior Design, Lighting & Dimensions
   - Section 4: Interior Ergonomics, Infotainment & Practicality (Boot/Frunk)
   - Section 5: Powertrain Motors, Battery Chemistry & 0-100 Performance
   - Section 6: Ride Quality, Suspension & NVH on Thai roads (bumps, ruts, highway)
   - Section 7: Battery, Real-World Range & Charging Speeds (AC/DC)
   - Section 8: Active Safety & ADAS Technology
   - Section 9: Contextual EVSELECT Fitment Accessory Recommendation Card (e.g. TPE floor mats, sunroof shade, screen protectors)
   - Section 10: Pros & Cons (จุดเด่น & ข้อสังเกต) side-by-side cards
   - Section 11: Final Verdict & Multi-dimensional EVSELECT Scorecard
   - Section 12: Footer share & back link
2. Modern Web Guidelines:
   - `text-wrap: balance` (or `style={{ textWrap: 'balance' } as React.CSSProperties}`) on all titles, subheadings, and summary cards.
   - `content-visibility: auto` with `contain-intrinsic-size` (`style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}`) on below-the-fold sections.
   - Next.js `<Image>` component with `priority` on hero image and responsive `sizes`, using images in `public/images/reviews/` or `public/images/`.
   - Clean TypeScript & ESLint compliance (escape double quotes with `&quot;`).
