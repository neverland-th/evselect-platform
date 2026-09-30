# Home: Thai keywords and accessory examples — local preview

Date: 2026-09-30 (Asia/Bangkok)

Status: IMPLEMENTED, locally VERIFIED, NOT DEPLOYED. Preview only; the user explicitly requested review before deployment.

Checkout: `evselect-homepage-thai-search`, branch `codex/homepage-thai-search-2026-09-29`, baseline `ca694ef`. The initial worktree was clean. The separate dirty scratch checkout and the original `EVSELECTS-homepage-v1.0.html` prototype were not edited.

## Scope and keyword decisions

Preserve the existing Home layout, typography, lime/dark visual identity, responsive patterns, article routes, and pre-launch business status. No new dependency, checkout, inventory, analytics integration, database migration, deployment, push, or cloud change.

| Keyword | Role and placement | Useful content supporting it |
| --- | --- | --- |
| แต่งรถ EV | Primary Home topic: title, H1, opening description | Practical starting points and existing linked guides |
| ของแต่งรถไฟฟ้า | Closely related broad topic: title, description, H2 | Photographed suspension/tyre examples and contextual guide links |
| ของแต่ง Tesla | Secondary brand topic: description, dedicated H2, FAQ | Real console-tray and floor-liner examples, exact manufacturer links, model-specific cautions |

Do not force every keyword into the title or every heading. No keyword-density target, fixed Google title-character limit, search-volume claim, ranking claim, CTR claim, or indexing claim. One H1 and ordered H2/H3 follow the project's editorial convention.

Thai copy follows `thai-natural-writing`: concrete questions, ordinary Thai verbs, and “โช้คสตรัทปรับเกลียว” for this audience. The two Tesla examples are accessory sets, not two individual pieces. Product examples are not site inventory or proof of fitment across Model 3, Model Y, or Thailand/RHD variants.

Guidance checked:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#build-technical-structure
- https://backlinko.com/on-page-seo

## Images and publication boundary

Added two unretouched manufacturer JPEGs. Existing KW and Audi/Michelin photographs are reused with accurate labels; the Audi image does not establish EV-specific tyre suitability. Existing AI concept banner remains explicitly labelled as a concept.

1. `public/images/accessories/tesla-model-3-center-console-trays.jpg`: 2000 × 2000, 93,541 bytes. Actual black tray set; manufacturer specifies upgraded Model 3.
   - Product: https://shop.tesla.com/th_th/product/upgraded-center-console-trays
   - Original image: https://digitalassets-shop.tesla.com/image/upload/f_auto%2Cq_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1977818-00-A_01_2000.jpg
2. `public/images/accessories/tesla-model-3-all-weather-liners.jpg`: 2004 × 1997, 212,032 bytes. Actual three-piece liner set; manufacturer specifies upgraded Model 3.
   - Product: https://shop.tesla.com/th_th/product/upgraded-model-3--all-weather-liner-
   - Original image: https://digitalassets-shop.tesla.com/image/upload/f_auto%2Cq_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1974088-00-A-03.jpg

Records `image-48` and `image-49` retain source, alt text, exact original filename, provenance, and draft restrictions. No creator or open licence was invented. **No open reuse licence or publication permission was confirmed. Obtain permission or replace these images with authorised photographs before public release.** Attribution alone is not permission.

Credits-page note paragraphs now wrap long source URLs instead of clipping them on mobile. This is the only credits-page component change; existing records are preserved.

## Local verification

- `npm run build`: passed after the final source changes. Includes TypeScript/Next build, 90 referenced images, 11 link-policy/content tests, four image-metadata tests, strict 32-page content audit with no findings, and attribution verification of 28 route/filter variants, 105 ImageObjects, and 49 credit records.
- `node --test scripts/test-homepage-content.mjs` against the built local server: five tests passed. Covers metadata, one H1, all six FAQs, relevant support for all three keyword topics, two real accessory images, preserved anchors, and internal/external link policy.
- Targeted ESLint and `git diff --check`: passed.
- Rendered reader review: full Home from hero through footer at 1440 × 1000 and 390 × 1000, including all six expanded FAQs and all Home images. Latest revised Tesla copy rechecked on desktop. Images loaded; no Home horizontal overflow observed.
- Both new credit records read with disclosures expanded on desktop and mobile. Long URL paragraphs use `overflow-wrap: anywhere`; mobile paragraph scroll width equals client width (309px), with no clipped URL text.
- Keyboard-activated hero CTA reaches `#ev-accessories` in the same tab (section top 112px, sticky header bottom 81px). Internal Tesla reading link reaches `#tesla-accessories` in the same tab (section top 112px, mobile header bottom 65px). Credit link reaches `/image-credits#image-48` in the same tab.
- Manufacturer tray link opens a separate tab showing the exact Tesla Thailand product page and upgraded Model 3 compatibility note. External links retain `noopener noreferrer` and accessible new-tab notices. No cart or order action taken.
- No error/warning entries observed in the Home browser console check. Temporary viewport overrides reset.

Preview: http://127.0.0.1:4359/

Screenshot evidence (ignored local artifacts):

- `scratch/home-accessories-preview-desktop.png`
- `scratch/home-accessories-preview-mobile.png`

## Not verified

Google indexing, rankings, traffic, conversion, Core Web Vitals field data, publication image rights, and universal/RHD fitment were not established. No genuine EVSELECTS PostHog/Amplitude metrics were used; an Amplitude demo dashboard is not site evidence. Local verification does not prove any production change.
