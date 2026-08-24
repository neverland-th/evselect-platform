## 2026-08-24T21:22:14Z
You are Worker 3 (Index Integration Worker) for the EVSELECT platform EV review articles project.
Your working directory: c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/worker_index_integration_1
Original Request Path: c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/ORIGINAL_REQUEST.md

Project References:
1. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/PROJECT.md
2. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/worker_batch1_1/handoff.md
3. c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/.agents/worker_batch2_1/handoff.md

Assigned Scope (Milestone M4) - Exclusive File Ownership:
You own `src/app/(storefront)/articles/page.tsx`.

Tasks:
1. Update `src/app/(storefront)/articles/page.tsx` to include all 8 newly authored review articles + the existing guide:
   - `byd-seal-review` (BYD Seal Review)
   - `tesla-model-3-highland-review` (Tesla Model 3 Highland Review)
   - `byd-atto-3-review` (BYD Atto 3 Review)
   - `zeekr-x-review` (Zeekr X Review)
   - `deepal-s07-review` (Changan Deepal S07 Review)
   - `mg4-electric-review` (MG4 Electric Review)
   - `deepal-s05-review` (Changan Deepal S05 Review)
   - `geely-ex2-review` (Geely EX2 Review)
   - `ev-battery-care` (Existing EV Battery Care Guide)
2. Include rich metadata for each card:
   - Title, Slug, Excerpt in Thai, Category tag ("รีวิวรถ EV" vs "คู่มือและเทคนิค"), Cover Image path (`/images/reviews/[model]-hero.jpg` or `/images/reviews/[model]-exterior.jpg`), Read time, Date, EVSELECT Rating score, Price tag / Highlights.
3. Design a responsive, modern grid with:
   - Header with badge and balanced headline (`text-wrap: balance`)
   - Category filter pills or interactive/visual tabs
   - Featured top review spotlight card + 3-column responsive card grid
   - Hover zoom effects, Lucide icons (`Star`, `Clock`, `Sparkles`, `ArrowRight`, `Car`, `Sliders`, `ShieldCheck`)
   - Direct `<Link href={/articles/${article.slug}}>` on every card and image.
4. Verify with `npm run build` and `npx eslint src/app/(storefront)/articles/page.tsx`.
