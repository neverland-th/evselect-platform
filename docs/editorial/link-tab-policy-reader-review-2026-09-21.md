# Contact, suspension and tyre guide — renewed rendered review

Reviewed on 2026-09-21 at `http://127.0.0.1:3117`, branch `codex/brake-complete-kits-2026-09-19`, following `7d41023`. This is a local draft checkpoint, not a deployment or a complete site audit.

## Changes and exact versions

External source links in the two guides and both Facebook links on the contact page now open a new tab with `noopener noreferrer`. Screen-reader text identifies this behavior. Contact copy also visibly explains that Facebook opens in a new tab and may require sign-in. Internal navigation remains in the same tab. No images or technical claims were changed in this checkpoint.

SHA-256 of the reviewed page sources:

- `/contact`: `7d76515cc10169d57fa206c8d99081c992266ec0ffc069e96393cbcc5d6cfea0`
- `/articles/ev-suspension-tuning-guide`: `84028b3425099b3a5201f44a099b49139165b06817dc1b2ea6abc50c3e36e97b`
- `/articles/ev-tyre-and-coilover-selection-guide`: `e0fa260c10a84bfb5d6d26ca347c17d7cfb3a6efb2ab25eb2841787e496887ce`

## Actual views and review method

Used Chrome profile Evselect.com, tab 306882993. Read the complete final affected pages in order, including shared footer text, at 1440 × 1000 CSS px desktop and 390 × 844 CSS px mobile. Actual viewport dimensions were checked in the rendered page. Inspected each content image, caption and credit separately at both sizes. Overlapping viewport screenshots supported the reading; DOM and HTTP diagnostics were secondary checks.

An initial mobile viewport attempt after opening Facebook remained desktop, and another attempt displayed tiny screenshots after navigation. Those attempts are excluded from the completed review. Closed the source tab, reset and reapplied the viewport, confirmed actual dimensions and restarted the mobile reading from the top. Temporary overrides were reset after the final checks.

## Contact

- Read the introduction, Facebook contact choices, requested vehicle/problem details, no-orders statement, reading panel and complete footer in both views.
- The reader can understand how to contact the team and that sending a question does not reserve or purchase a product. The visible new-tab explanation matches the links.
- No main-content images. Header/footer logos were inspected. The mobile header logo remains unusually small; this is a separate shared-layout issue, not corrected by these link changes.
- Activated the Facebook page link: new tab 306883119 reached `https://www.facebook.com/evselects`, which showed a Facebook login screen. No login or message was attempted. Closed the tab.
- Activated the article-reading link: the same original tab reached `/articles`.

## Suspension guide

- Read all five sections, both symptom cards, tyre and pressure guidance, Bump/Rebound explanation, all four product examples, shop questions, before/after advice, source links, related reading and footer in both views.
- The opening starts with the owner's symptom. Product examples explain model and application limits; the Öhlins example specifies the 2020 Model 3 reference rather than claiming universal Highland compatibility. The H-Drive example distinguishes Euro Spec from the referenced BMW M2 Euro R.
- Inspected the full Tesla Model 3 Performance photograph and the full KW product photograph. Captions identify their sources and do not claim that the pictured vehicles/products were tested by EVSELECT or fit every EV. Both images loaded in both views.
- No page-wide horizontal overflow. One H1. All nine external article links have the required new-tab/security attributes.
- Activated the BC Racing BR Series source: new tab 306883124 reached the official `https://shop.bcracing-na.com/pages/br-series` with its BR-SERIES heading. Closed it.
- Activated the contextual tyre/coilover link: the same tab reached the intended tyre guide.

## Tyre and coilover guide

- Read the complete introduction, three-point summary, all seven numbered sections, every list item, four-row table, both image captions/credits, sources, ending and shared footer in both views.
- Inspected the complete Tesla Model 3 Performance 2024 photo and grey ZEEKR 7X photo. Cars and wheels remain visible without a destructive crop. ZEEKR's caption explicitly distinguishes the illustration from verified Thailand trim specifications.
- The ZEEKR example retains the manufacturer-sourced Thai Performance AWD figures: 2,535 kg, 475 kW / 637 hp and 265/40R21 tyres. The text rejects dividing curb weight by four or deriving a tyre load rating from horsepower. Tesla's staggered front/rear example links the Thai owner's manual.
- Read every table cell on desktop. On mobile, scrolled the table right to read all four final-column cells, then left to restore its original position. The 560 px table is contained within its mobile scroll area; measured document overflow was zero at 390 × 844.
- The lowering section avoids one universal height/clearance recommendation. The closing damper section contains two brief paragraphs and a descriptive link to the separate guide. No detailed damper graphs remain here.
- Read all five shop-checklist items and the transparent pre-launch statement. These give a first-time reader a practical next step without suggesting an operating store.
- Final rendered DOM: one H1, sequential H2/H3 sections, both content images loaded, all 13 external links use new-tab/security attributes.
- Activated `คู่มือปรับแดมเปอร์: Bump และ Rebound`: same tab reached `/articles/ev-damper-tuning-bump-rebound-guide`, H1 `ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?`.
- Activated `สเปก ZEEKR 7X`: new tab 306883128 reached `https://www.zeekrlife.com/en-th/models/7x`, showing the Thailand model page and its brochure link. Closed the source tab. This navigation check does not replace the earlier exact-trim specification verification.

## Supporting checks and remaining work

- Changed-file ESLint passed for all three TSX files. `git diff --check` passed apart from informational line-ending warnings.
- Refreshed the complete 31-route local heading inventory: all returned 200, one H1 per route, no empty headings or skipped descending main/article levels. This does not validate all interactive client states.
- Refreshed the link inventory: no broken internal route/fragment target, no nested anchors, and all 31 routes contain main-content internal links. This count includes related-reading cards and does not certify every contextual anchor.
- Tab-policy flags decreased from 114 across five routes to 96 across two: Carbon Ceramic 91 and Model 3 5. Seventeen routes still have brand-home link issues.
- The latest production build remains blocked by three unexpectedly deleted referenced images (MG4 hero and two ENDLESS owner photographs). Those concurrent deletions were not authored, staged or restored in this checkpoint; user clarification remains pending. Repeating the build before resolving the same missing files would not add evidence.
- Complete remaining content/link reviews, resolve the missing assets and outstanding Porsche cover reuse evidence, run release checks, then verify an authorized production deployment. No whole-site SEO pass or publication is claimed here.
