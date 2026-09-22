# Battery article — local reader review and open interaction checks

Status: local draft only, based on `c34ceac` on `codex/brake-complete-kits-2026-09-19`. No push or deployment is established by this record. This checkpoint does not clear the whole-site publication gate.

## Inspected version and content

- Article: `http://127.0.0.1:3117/articles/ev-battery-care`.
- Article SHA-256: `a2337ace418baec3512b9420b3bef6b43511de6ca7b40819d7d31d9c339c7e6e`.
- Shared article data SHA-256: `bf090f22d757423015511646e7d8d301cbb6d495428034db40aa80e2e5ff67a9`.
- Catalogue SHA-256: `b794d8ac9ea589bda2d661a6cb280cc49c68f935fa1a55a58ae6fa9225f12d72`.
- Read the finished article in order: title, introduction, scope note, both photographs and both complete captions/credits, the three-item opening checklist, all five advice sections, the pre-launch note, all three FAQ answers, all five reference links and the scope explanation, both related-reading cards, article footer and shared site footer. This version has no tables, charts or accordion states.

## Reader observations and corrections

The previous promise that the five tips would make every EV battery last over ten years was not supported. The new opening answers a recognizable reader problem: why one car recommends 80% and another recommends a full charge. It tells the reader where to look before changing a setting. The headline, introduction and body now make the same promise.

The examples explicitly use the English-language Tesla Model 3 manual for the Thailand region. The 80% daily limit is qualified as applying to cars with that recommendation. The approximately 50% storage example is not presented as a rule for every EV. LFP/NMC labels are not used to invent a universal weekly charging schedule. AC/DC are explained before use; Sentry Mode has a Thai explanation. Cabin temperature, battery temperature, indicated range and battery health are kept distinct.

Contextual links lead from charging/trim discussion to the Model 3 guide and from wheel/tyre effects to the tyre/Load Index guide. Manufacturer links sit beside the claims they support. Visible brand mentions link home. The contact and editorial-policy links describe their destinations. The pre-launch notice states that products, orders and payments are not yet available.

Photo 1 is a real displayed Volkswagen ID.3 chassis by Bill Abbott, linked to its Wikimedia file and CC BY-SA 2.0 licence. It shows the underfloor pack and orange high-voltage wiring; its caption identifies its explanatory purpose and does not claim an EVSELECT test. Photo 2 is a red Model 3 Highland photographed by Alexander Migl in Ulm, Germany, in 2024, with its Wikimedia file and CC BY-SA 4.0 link. It is not described as a Thai-market test vehicle or evidence of a particular battery chemistry. Both photographs were individually inspected at full frame in the article; no car/pack subject was clipped by the article layout.

## Actual desktop/mobile reading

- Desktop article: 1280 × 720 CSS pixels, full sequential visual reading at scroll offsets approximately 0, 540, 1081, 1621, 2161, 2701, 3242, 3782, 4322, 4863 and 5173. Final page height approximately 5893 px. This pass preceded the mobile pass; the article was not edited between them.
- Mobile article: 390 × 720 CSS pixels, page height 8071 px. Read sequential screenshots at offsets 0, 490, 980, 1469, 1959, 2450, 2939, 3429, 3919, 4409, 4899, 5388, 5878, 6368, 6858 and 7348. Overlap exposed text behind the sticky header and development indicator in the preceding image. The last screenshot included the complete site footer. Document width remained 390 px. Long Thai/source links wrapped inside the content column, the opening H1 fit three lines, and both complete image captions were readable.
- Browser capture limitation was investigated, not counted as an editorial pass: an initial 390 × 844 override produced scaled/cropped or repeated compositor output. Valid mobile evidence used a 390 × 720 emulated CSS viewport and the host pixel ratio 2.059999942779541, captured through the tab's CDP surface screenshot. Bad captures were discarded. The temporary emulation and viewport override were cleared. A fresh default-size tab was used for desktop catalogue evidence because the previously emulated tab retained incorrect capture dimensions.
- Catalogue: `http://127.0.0.1:3117/articles?category=guides`. The affected battery card was read completely in 390 × 720 mobile screenshots and in a fresh 1280 × 720 desktop tab. Its chassis image, separate credit links, headline, excerpt, two displayed highlights, check-before-use note, update date and reading link were inspected. Desktop headline truncation follows the existing two-line card pattern; its full label remains on the link. This is a focused card check, not a complete catalogue review.

## Navigation evidence and limitations

- Activated the mobile tyre related-reading card. The same tab navigated to `/articles/ev-tyre-and-coilover-selection-guide`, displaying H1 `เลือกยางและคอยล์โอเวอร์ EV อย่างไร ให้รับทั้งน้ำหนักและแรงม้า`. Back returned to the battery page and its correct H1.
- Activated the article-header EVSELECT link. The same tab navigated to `/`, displaying `เริ่มจากรถของคุณแล้วค่อยตัดสินใจ`. Returned to the article.
- The charging-source link rendered the exact Tesla manual URL with `target="_blank" rel="noopener noreferrer"`. Click and keyboard activation did not expose a new tab in the Codex browser inventory. Therefore new-tab creation was **not confirmed**. Opening that exact URL explicitly in a new Codex tab succeeded: the rendered `Charging Instructions` page offered the 2024+ Model 3 manual, advised checking daily/trip limits in the car/app, and described navigation-based fast-charge preconditioning. Direct navigation establishes destination content, not successful new-tab activation from the article.
- The existing ShareButton started a Web Share request but did not expose a completion/copy message in this browser. A subsequent keyboard activation reported `InvalidStateError: An earlier share has not yet completed`. Escape/navigation and closing the agent-created mobile tab ended the test; no social post or message was sent. Native sharing/copy completion remains unverified. The shared component was not changed during this checkpoint.

## Supporting checks and remaining work

Article metadata, Open Graph/Twitter, JSON-LD, sitemap last-modified and catalogue data now use `src/lib/battery-article.ts`. The old battery headline/excerpt in the related cards of Deepal S05, Deepal S07 and Geely EX2 now use the same data. Those three complete pages still require their final rendered reviews; the card source changes alone do not pass that gate.

ESLint passed the seven battery-related files without warnings before the separate site-wide brand-link draft edits. The later whole changed-file lint had no errors and 17 existing unused-import warnings in the hybrid and Thai-roads pages; running ESLint against those files at HEAD reproduced all 17 warnings. The current 31-route HTTP link inventory finds main-content internal links on every route, no missing internal targets, no incorrect tab-policy markup and no nested anchors. The 42-view heading check (31 routes plus 11 catalogue filters) finds exactly one H1, no empty headings and no skipped descending levels. These are structural checks only.

Remaining: resolve the browser-dependent source-tab/share interaction checks; complete the catalogue and the other affected full-page reader reviews; resolve the three still-referenced missing image originals and the Porsche cover reuse evidence; run release verification and verify an authorized production deployment. No claim of a complete site review, build success or publication is made here.
