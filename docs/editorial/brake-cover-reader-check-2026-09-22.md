# Carbon Ceramic cover correction — local draft checkpoint

Based on `c34ceac`, branch `codex/brake-complete-kits-2026-09-19`. No push, deployment or Facebook publication in this checkpoint.

The immediately preceding scheduled heartbeat did not advance the editorial goal: it recognized the repeated event and correctly avoided duplicate submissions. This turn resumes editorial work rather than repeating that unchanged social status.

## Concrete changes

- Replaced the unconfirmed-permission Porsche Stories cover with a real PCCB photograph of a Porsche Carrera S (997), published by Dan Lindsay (Edgy01) under CC0. Exact source, original linked thumbnail, hash and rights declaration are recorded in `../editorial-image-sources.md`. The original was inspected locally before inclusion. It shows the brake with the wheel removed; the alt and caption no longer describe a centre-lock wheel.
- Article, catalogue and Open Graph/Twitter use one cover path and true dimensions from `brakeArticle`. The article caption and card separately link to the photographer/file page and CC0. The Porsche technical reference remains, but no longer calls itself the photograph source. Article update date and sitemap last-modified use 22 September 2026; the technical source/price check date remains 19 September rather than falsely claiming a full refresh.
- The catalogue photo uses `contain` so the disc is not cropped to fit a wide card. Existing badges overlay the photograph; the disc/caliper remain identifiable. No image was generated, retouched or replaced with an unrelated generic subject.
- Actual mobile reading exposed the category count breaking into fragments alongside a squeezed clear-filter link. The category heading now wraps naturally, the count stays together, and the clear-filter link has its own row on mobile and a 44 px minimum target height. Desktop retains its single-row layout when there is room.
- Updated the existing brake verifier's expected cover filename and modification date. Its Playwright runner was not executed; browser work used Codex Browser.

## Exact inspected version

- `src/lib/brake-article.ts`: SHA-256 `83453a6565918cb7e67bc77264e0281356e4e47913455b8196b7c35fe58dfe60`.
- Brake page: SHA-256 `e788eb40e64df21972d79ffc4368646f8657c8392d914714eaf856080a606b4d`.
- Catalogue: SHA-256 `9dad1b59b99459817f6298b3fbf5d76b998a34b83d122e5117adb6bbd3424196`.

## Actual browser review scope

Used the selected Codex In-app Browser. URLs were `http://127.0.0.1:3117/articles/ev-carbon-ceramic-brakes-guide` and `/articles?category=suspension`.

- Desktop article, 1280 × 720 CSS px: read the complete title, subtitle, both introduction paragraphs, update/byline, full new photograph and caption/credits using three overlapping viewports from the top. The image retains its full ratio. The introduction frames appearance, feel and replacement costs, while the caption identifies the exact Porsche example and does not claim EV compatibility.
- Mobile article, 390 × 720 CSS px: same opening read in three overlapping screenshots at approximately 0, 490 and 980 scroll offset. All cover edges and the complete caption were visible together in the last screenshot. The three-line H1 and paragraphs fit the viewport; document width was 390 px.
- Mobile catalogue: read the complete affected Carbon Ceramic card through image, credits, title, excerpt, two highlights, date and article link. After the heading layout change, reread the heading/count/clear-filter area and the complete card at approximately 549 and 1038 px offsets. The count `(9 บทความ)` remains on one line and the clear-filter label is no longer fragmented.
- Desktop catalogue: two overlapping screenshots of the heading/count/filter and complete card at 1280 × 720. The image is contained with narrow side margins; author and licence links are outside the article link. Full card title fits two lines. The excerpt follows the existing clamp pattern.
- The complete collapsed article accessibility text was read, including tables and reference labels, but the remaining rendered body, disclosures, all other images and interactive states were **not** visually reread in this checkpoint. This is an opening/card review, **not** a complete article or catalogue publication pass. Previous all-page reviews do not substitute for the current final version.
- Temporary mobile device metrics were cleared and the agent-created mobile tab was closed after inspection.

## Checks and remaining blockers

- Changed cover/page/catalogue/verifier ESLint: exit 0, no output errors or warnings. `git diff --check`: exit 0 (line-ending notices only).
- Repository TypeScript check, `npx tsc --noEmit --incremental false`: exit 0.
- Refreshed HTTP link audit: 31 routes, every page has a main-content internal link, zero visible brand-link findings, missing internal targets, tab-policy flags or nested anchors. Related cards count, so this is not proof that every inline link is useful.
- Refreshed heading audit: 42 views including 11 catalogue filters, all 200, one H1 per view, no empty headings or skipped descending levels. This is markup evidence, not a whole-site reader pass.
- `npm run verify:images`: exit 1, exactly three missing originals: MG4 hero and both ENDLESS owner photos. These pre-existing deletions were not restored, staged or deleted by this work. Their intent remains unresolved. No full build or production release was attempted.
- The new cover resolves the old cover's open-licence gap in the draft only. Other manufacturer image reuse questions are not certified by this change. Complete Carbon Ceramic and catalogue reading, the fourteen other modified page reviews, contextual relevance/source corrections, missing-image resolution and release/live checks remain outstanding.
