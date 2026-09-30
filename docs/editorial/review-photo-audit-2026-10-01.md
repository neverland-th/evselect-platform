# Review photo audit — 2026-10-01, v1

## Scope and baseline

User requested a model/feature photo audit of every vehicle review, corrections, and production deployment. Research used Exa to discover original sources, followed by original file descriptions/licences and the MG press image bank. No social publication is included.

Isolated branch: `codex/review-photos-2026-10-01`, based on `312aa18`. Its 32 audited page fingerprints matched the then-live release. Rollback target: `dpl_GLaxfcyZouHANDe36o9nWdebpMqv`, https://evselect-platform-3vm2nqx4k-evselect-com.vercel.app/ . Existing homepage and unrelated routes are preserved.

## Findings and changes

All 11 vehicle reviews were inspected, covering 28 original article image placements. One definite wrong-model photo was found: a Tesla Model 3 Performance in the ZEEKR 7X tyre section. It is replaced with a photographed Thailand-market 7X Performance AWD showing its wheels and orange brake calipers. Seven additional model-specific cabin/seat photos illustrate nearby text. There are now 35 image placements; no article URL or hero/OG cover was changed.

| Review route | Before → after | Finding / final action |
| --- | --- | --- |
| `/articles/byd-atto-3-review` | 2 → 2 | Correct Atto 3 exterior and explicitly identified foreign LHD cabin; retained. |
| `/articles/byd-seal-review` | 2 → 3 | Correct original Seal BEV exterior photos; added original Seal front seats/console, not Seal 6 or DM-i. |
| `/articles/deepal-s05-review` | 2 → 3 | Correct S05 BEV/REEV exterior photos; added S05 cabin in equipment section. |
| `/articles/deepal-s07-review` | 2 → 2 | Correct NEW S07 Thai exterior and explicitly identified S07 LHD cabin; retained. |
| `/articles/geely-ex2-review` | 1 → 1 | Correct Thai EX2 Max; retained. No foreign Xingyuan equipment or uncleared cabin substituted. |
| `/articles/mg4-electric-review` | 1 → 2 | Correct Thai MY2026 exterior; added updated 2026 European cabin, visually checked against the MG Thai MY2026 page. |
| `/articles/tesla-model-3-highland-review` | 1 → 3 | Correct Highland exterior; added Japanese RHD Highland cockpit and rear seats/screen. Text distinguishes these from the Thai base RWD equipment. |
| `/articles/tesla-model-y-l-premium-6-seater-review` | 2 → 2 | Both photographs show Model Y L, not the shorter five-seat Model Y; retained, with existing foreign-market boundaries. |
| `/articles/zeekr-009-review` | 12 → 12 | Correct 009 exterior, 6/7-seat layouts, captain seats, tray tables, cockpit, roof screen, fridge, sliding door, third row, luggage and suspension images; retained. |
| `/articles/zeekr-7x-2026-review` | 2 → 3 | Removed Tesla photo, added Thai 7X Performance photo and 7X cockpit near cabin discussion. |
| `/articles/zeekr-x-review` | 1 → 2 | Correct Thai X exterior; added X cockpit in cabin section. |

The eight new assets and their sources, market/date boundaries, permissions, dimensions and transformations are recorded in `review-photo-sources-2026-10-01.json`. All new assets retain their aspect ratio and are resized to WebP without cropping, retouching or generated vehicle details. Foreign LHD/RHD context is stated in nearby body text and accessible credits; it does not establish Thai trim equipment.

Eight records were added to `src/data/image-credits.json`. The 7X route was removed from the shared Tesla image's page list, preserving its valid uses elsewhere. Publication dates and dated specification checks remain; update dates reflect the photo changes. The image metadata test now permits the exact MG press-bank item with its explicit editorial-use permission, while continuing to reject product pages masquerading as licences.

## Rendered reader review

Final built version served at `http://localhost:3184`. All six affected articles were read completely in order on desktop (1440×1000) and mobile (390×844), including every image, all table columns, disclosures, related links and sources. The five unchanged reviews had every existing photo individually checked with surrounding context at both widths. All 35 images painted successfully; no article-wide horizontal overflow was observed. Mobile comparison tables stayed within their own scrolling containers. The 7X Performance column was panned into view.

Affected catalogue cards and all eight expanded credit entries were inspected at both widths. Capture artifacts live in ignored `scratch/review-photos/screenshots/`: full overlapping affected-article segments, individual unchanged-review photos, catalogue cards, and credit records. `review-evidence.json` records actual image URLs, dimensions and loaded states. Very long off-screen credit captures showed capture artifacts; ordinary visible viewport screenshots confirmed complete readable text without clipping. These artifacts were not treated as site defects.

## Validation actually performed before release

- Public image references: passed, 96 referenced images.
- Content/link tests: passed, 11 tests across the two existing suites.
- Image metadata tests: passed, 4 tests.
- Local production compilation/TypeScript/static generation: passed with `npx next build --webpack`, 44 pages. Local Turbopack cannot follow the shared dependency junction outside this checkout; no framework or dependency change was made.
- Strict build content audit: passed, 32 routes, 2,056 links, zero findings.
- Attribution build verification: passed, 28 page/filter variants, 125 ImageObjects, 66 accessible credit records.
- Targeted ESLint for all changed source/test files: passed. General lint still reports 56 errors and 32 warnings in pre-existing agent/legacy files outside this change; it is not claimed to pass.
- `git diff --check`: passed.
- Baseline-to-built content fingerprints: only the six intended articles and `/image-credits` changed. Homepage, catalogue and all other audited routes matched.
- Vercel upload dry-run inspected: `.env*`, databases, dependency files and scratch evidence excluded from the upload payload by existing ignore rules.

## Limitations

Existing 009 manufacturer/HeadLight photos retain their previously recorded unresolved reuse-permission status; this model audit does not turn those historical assets into rights-verified photos. All eight newly introduced photos have an explicit CC or manufacturer editorial permission. No prices/specifications were refreshed by this photo task. No database changes, DNS changes, main-branch merge, paid service changes, or social posts were made. No search ranking, indexing or traffic claim is made.

## Production release

Pending in this pre-release record. Append the actual deployment identity, alias and live verification after release; local checks alone do not establish production status.
