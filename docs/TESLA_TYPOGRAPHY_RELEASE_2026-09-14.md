# Tesla specifications and site typography release — 14 September 2026

The user explicitly authorized production deployment after the Tesla corrections and desktop/mobile typography audit. This extends the previously reviewed damper-image fix. The designated branch remains `chatgpt-frontend-handoff`; no merge to main is required for the Vercel CLI release.

## Reader-facing changes

- Replaced the mixed-year, mixed-market Tesla comparison with four current Thailand configurator trims: Model 3 RWD (THB 1,149,000), Premium RWD (1,439,000), Premium Long Range RWD (1,599,000), Performance AWD (2,099,000).
- Performance: 460 hp, 3.1 s with rollout subtracted, 571 km WLTP, 250 kW maximum charging. Removed unsupported torque, cell capacity/chemistry, charging-time guarantees and purported independent measurements. Changed the unsupported scored Review schema to Article. Listing, social metadata and canonical agree with the article.
- Distinguished 534 km estimated Premium RWD range from WLTP figures. Standard RWD is 572 km, Long Range RWD 750 km on 18-inch wheels. Speaker counts and dampers match the Thailand comparison UI.
- Date and source links are visible. Older Long Range AWD vehicles are explicitly separated from the currently ordered Long Range RWD.
- Preserved the new local damper cover, hero, listing asset, description, canonical and social metadata from the previous approved preview.
- Shared typography keeps the root at the browser's default 16 px, instead of shrinking to 15/14.5 px on desktop. Labels are at least 13 px; scientific subscripts retain a 12 px minimum. Article body utilities use 16 px, supporting notes 13–14 px, headings scale smoothly from mobile to desktop.
- Shortened crowded navigation labels, exposed a mobile navigation strip, and adapted admin navigation/forms/tables to narrow screens. No backend or schema changes.

## Official sources checked live

- https://www.tesla.com/th_th/model3/design — Thailand cash prices, all four trims, comparative equipment, wheel options, speaker counts, seats and dampers. Browser UI was allowed to finish loading before recording prices.
- https://www.tesla.com/th_th/model3 — selected Standard, Premium RWD, Premium Long Range RWD, and Performance panels. Used per-wheel ranges, maximum charging power and warranty distances.
- https://www.tesla.com/en_th/model3 — Thailand English Performance panel, explicit “With rollout subtracted” footnote.
- https://www.tesla.com/th_TH/support/charging/home-charging — follow the charge limit recommended for the specific vehicle battery.
- https://www.tesla.com/th_th/support/charging/supercharging — charging-rate dependencies.

Tesla's untranslated `model3-choose` search result mixed US dollar prices and US trim data; it was not used as the Thailand configurator source.

## Verification before upload

- Final `npm run build` passed, including TypeScript and all generated routes.
- Targeted ESLint passed on changed article, listing, data and storefront navigation code. Existing internal anchor lint errors encountered during the check were fixed with Next Link.
- All 31 concrete page routes returned HTTP 200 at 390 and 1440 px: 62 rendered views, no ordinary text below 13 px, no uncontained horizontal overflow.
- Tesla table additionally checked at 320, 768, 1280 and 1920 px. Horizontal table scrolling remains intentional and keyboard focusable.
- Verified all four Tesla cards, current figures, rollout footnote, removal of stale claims, Article structured data and canonical. Damper hero/listing images decoded successfully.
- Tested `/`, `/articles`, `/dealer`, both affected articles, and all other article/admin pages. Dynamic product/dealer detail templates had no records linked from the local database; coverage for those templates is limited to shared styling and compilation. Admin data writes and export downloads were not exercised.
- Local evidence: `scratch/damper-audit/font-final.json`, `release-local.json`, and viewport screenshots. The initial font audit identified widespread 10–12 px labels and the desktop root-size reduction.

## Exact release source

The deployment package starts from the recorded production source `01c83175d9cb885b2dc8473612b920f6ba441d39`, not the entire newer handoff branch. It is located at `scratch/damper-audit/production-patch`.

`docs/releases/2026-09-14-articles-typography.patch` contains the exact production-base code and binary image changes. Apply it to the base commit with `git apply`; patch application was checked. Its modified files are the two articles, listing, shared globals, storefront layout and the admin layout's CSS hook. New files are the damper image, two article data modules, shared typography CSS and deployment ignore rules.

The package comparison verified 211 existing source/configuration files. Backend, schema, dependencies, robots and sitemap match the existing production source. Deployment ignores environment files and the empty local test database.

Previous production deployment for rollback: `dpl_5n8H7YPBM5YV4uBKSWMx5H5NL24A` (`evselect-platform-8owqyrn5c-evselect-com.vercel.app`).

## Production verification

- Released source commit: `fe0fbfd22d2f4592a6b94fdf4034efb2e885cd43`.
- Deployment: `dpl_69TH1R8ghPtpvRus72FB7akGo5c8`, https://evselect-platform-5796evv50-evselect-com.vercel.app.
- Built with production settings and initially withheld domain assignment. Vercel reported READY, then the deployed article/data/image checks passed before promotion.
- Promoted successfully to production. Resolving `evselects.com` through the Vercel connector returned this exact deployment in READY state; live HTTP and Chrome confirmed updated content.
- Live audit at approximately 16:32 Bangkok on 14 September 2026: all 31 concrete routes at 390 and 1440 px passed (62 views), no ordinary text below 13 px and no uncontained horizontal overflow.
- Live Tesla comparison passed at 320, 768, 1280 and 1920 px. Current prices, power, range, rollout footnote, all four cards, canonical and Article schema verified. Damper hero/card decoded successfully.
- Both affected article routes, article index, homepage and dealer page returned HTTP 200. The www Tesla route, robots.txt and sitemap.xml also returned 200.
- Final local evidence: `scratch/damper-audit/font-production.json`, `release-production.json`, `release-vercel.json` and related screenshots. No dynamic product or dealer detail links were available in the live listing; that limitation remains.
- Read-only/live UI checks did not exercise submissions, inventory changes, payment flows or CSV downloads.
