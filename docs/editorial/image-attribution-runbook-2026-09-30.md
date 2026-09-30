# Runbook: image attribution without visible captions

Owner: EVSELECTS website maintainers. Frequency: each editorial/image release.
Last updated: 2026-09-30. Status: implemented locally; production verification pending.

## Purpose

The current user instruction replaces visible photo captions/credits with accurate server-rendered ImageObject JSON-LD and an accessible `/image-credits` page linked from the global footer. This does not remove attribution obligations, establish image rights, or promise a ranking/rich-result improvement. Technical diagram explanations belong in the article body, not in hidden credits.

## Prerequisites

- Verify the current checkout, clean/known Git changes, branch, Vercel project/team and live production deployment.
- Read the original source/rights record. A manufacturer product link is not a copyright licence. User-supplied photos do not prove the user took or owns them.
- Source data is `src/data/image-credits.json`; metadata generation is `src/lib/image-credits.ts` / `src/components/ImageMetadata.tsx`.
- Preserve internal same-tab links and external protected new-tab links. No unrelated backend, database, DNS, or UI redesign.

## Procedure

1. Add/update the exact local asset, factual alt text, credited person/organisation, source URL, original title (when available), genuine licence and changes/context notes in the registry. Preserve supplied names rather than infer copyright ownership. Use `reference`, not `source`, for a product link unrelated to the photo's actual provenance.
2. Record only routes where that asset really appears. The article index must pass its actually displayed cover assets; filtering must not describe absent images.
3. Render `ImageMetadata` on each affected page. Static-import photos must map to the actual emitted Next image URL. Keep the plain-text alt, one H1 and existing layouts. Do not put HTML anchors in metadata or use fabricated/custom owner meta tags as a Google-supported feature.
4. Run `npm run build`. Expected: image/link/unit gates, Next build, strict public crawl and image-attribution verification pass. Never regenerate audit baselines to conceal failures.
5. Start the built site on a free local port, set `BASE_URL` in that test process, then run `node --test scripts/test-homepage-content.mjs` and `npm run verify:attribution`.
6. Read each affected rendered page in full on desktop/mobile, including image placements, tables, references, FAQs and the central credits page. Open the credits disclosures and relevant filters. Source/DOM checks alone are not full reader review.
7. Commit only the scoped change. Recheck production for concurrent updates; inspect the Vercel dry upload manifest for secret/database/scratch files. Deploy to the verified existing project under the user's standing authorization.
8. Wait for actual READY and verify the production alias. Run the strict content audit, attribution verification, Home tests, sitemap/index/robots requests and runtime-error checks against `https://evselects.com`. Compare local/live content fingerprints. Perform live desktop/mobile rendering checks. Record the release ID/commit and results separately from implementation.

## Verification

- No active public `figcaption` or article-card credit block; accessible photo credit/source/licence records remain.
- Every emitted ImageObject describes an image actually used on the page and points to an HTTP 200 image asset.
- CC records retain the credited name, original source/title, actual licence and modification notice. Unverified creator/copyright/licence values are omitted.
- Central credit anchors resolve; internal links keep the current tab and external links use `_blank` plus `noopener noreferrer`.
- Sitemap includes the canonical credits route, not preview origins. Build success is not evidence Google indexed it.

## Troubleshooting

- Missing metadata: check the registry route/asset and actual selected card cover, including `<picture>` variants.
- Static image 404: use the current imported image `.src` mapping, not a filename/hash copied from an old deployment.
- Wrong source/permission: correct or omit unsupported fields. Escalate an unresolved permission question to the website owner; do not invent a CC licence.
- Audit failure: inspect the exact issue and fix the affected source. Keep the strict gate enabled.

## Rollback

Before release, preserve the current production deployment ID. If the new release breaks routes/assets or attribution, restore that verified deployment through Vercel's normal rollback workflow under explicit user authority; do not reset the checkout, delete images, rewrite shared history or mutate production data. Correct the registry/source in a separate reversible commit and rerun the gates.

## Escalation

Missing copyright/permission evidence or ambiguous image identity: website owner, with the exact asset/source and what remains unknown. No third-party messages are authorized by this runbook.

## Sources

- Google Search Central: https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata
- Creative Commons attribution practices: https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- Existing project provenance: `docs/editorial-image-sources.md` and `docs/editorial/ev-tyre-image-sources-2026-09-29.json`.

## History

- 2026-09-30: migrated the current photo credits into 47 records. No new image licence or copyright ownership is asserted. Initial syntax, brand-link and visible-text-test issues were detected and corrected before publication. The final local build and complete rendered reader review passed; production verification remains separate.

## Rendered reader review — complete before release

Version: current scoped changes on `codex/homepage-thai-search-2026-09-29`, parent `85ea0cf`; final local build passed on 2026-09-30. Preview origin: `http://127.0.0.1:4349`. No release for this change has been deployed yet. Review is performed in the actual Chrome-rendered pages, not inferred from HTTP checks.

- `/articles/ev-damper-tuning-bump-rebound-guide`: full desktop 1440 px and mobile 390 px review completed, including all 9 photo placements, 14 expanded disclosures, four adjustment modes, brand comparison, diagrams, FAQs and 28 source links. Desktop ordered scroll 0–28900, mobile 0–48300, overlapping captures through the footer. Product photos remain complete; comparison cards fit mobile without sideways scrolling. No additional content change required.
- `/image-credits`: all 47 disclosures opened and complete desktop/mobile text and card layout reviewed. Desktop ordered captures 0–20400; mobile 0–25200, through the footer. Source, title, licence and modification notes remain accessible. One redundant nested `main` found earlier was changed to `div` and the rebuilt final page was reread. No horizontal overflow at 390 px.
- `/`: full desktop/mobile rendered review completed including all six image placements, five expanded FAQs, tyre-price checklist and opening-status disclosures. Desktop ordered captures 0–6800; mobile 0–10500 through the footer. No missing photo or caption gap; the AI concept disclosure remains visible because it distinguishes a concept from a real product.
- `/articles`: all 21 cards and the concept hero reviewed in full on desktop/mobile. Desktop ordered captures 0–5100; mobile 0–12600 through the footer. Guide and suspension filters were clicked; they render 1 / 9 cards and 1 / 10 ImageObjects respectively (the tyre card has two picture variants). Review filtering renders the featured 7X plus 10 cards and 11 ImageObjects. Sedan filtering renders two cards/two ImageObjects; the mobile city-car filter renders one card/one ImageObject. Selected controls, updated URLs and actual images were verified after navigation. No outer horizontal overflow.
- `/articles/byd-atto-3-review`: full desktop/mobile reader review completed through the footer, including two photos, the model-year/specification table, comparisons, cautions and sources. Desktop captures 0–5100; mobile 0–6300. No outer horizontal overflow.
- `/articles/byd-seal-review`: full desktop/mobile reader review completed including two photos, checklist and references. Desktop captures 0–5100; mobile 0–6300. The mobile specification table was panned to read all three trims; its overflow remains contained, with the existing scroll instruction.
- `/articles/deepal-s05-review`: full desktop/mobile reader review completed including both Thailand photos and the BEV/REEV distinction. Desktop captures 0–5100; mobile 0–6300. The mobile table was panned through all four columns. No outer horizontal overflow.
- `/articles/deepal-s07-review`: full desktop/mobile reader review completed including both photos, specifications, charging, road/fitment cautions and sources. Desktop captures 0–3400; mobile 0–6300. The above-image label still identifies the foreign LHD interior. No outer horizontal overflow.
- `/articles/ev-battery-care`: complete desktop 0–5100 and mobile 0–6300 rendered review, both photographs, charging/storage cautions, FAQs and sources. No overflow or lost explanatory text.
- `/articles/geely-ex2-review`: complete desktop 0–3400 and mobile 0–3800 overlapping review. Single Thai photo, Pro/Max comparison, fitment and source cautions read; mobile table panned through both trims.
- `/articles/mg4-electric-review`: complete desktop 0–5100 and mobile 0–6300 review. Thai photo, both specification cards, dated price caveat, charging, testing limits and references read.
- `/articles/zeekr-x-review`: complete desktop 0–3400 and mobile 0–4200 review. Thai photo and all sections read; mobile table panned through Standard and Flagship.
- `/articles/zeekr-009-review`: complete desktop 0–3400 and mobile 0–4200 review. Single Thai photo and all sections read; mobile table panned through Standard, Premium and Flagship.
- `/articles/zeekr-7x-2026-review`: complete desktop 0–6800 and mobile 0–8400 review, both photographs, all three trims, references and limitations. Mobile table panned through all columns. No outer overflow.
- `/articles/tesla-model-3-highland-review`: complete desktop 0–5100 and mobile 0–6300 review. Photograph, all four trims, complete table notes and sources read; mobile table panned through every column.
- `/articles/tesla-model-y-l-premium-6-seater-review`: complete desktop 0–5100 and mobile 0–6300 review. Both photographs and every section read. Visible foreign LHD context remains above the interior image; table fits mobile.

- `/articles/ev-camber-adjustment-wheel-alignment-guide`: complete desktop 0–5100 and mobile 0–8400 review through the footer. Alignment photograph and all three native SVG panels read; the diagram explanation remains visible in the article body before the figure. No outer overflow.
- `/articles/optimizing-ev-suspension-thai-roads`: complete desktop 0–5100 and mobile 0–6300 review through the footer (page heights 5650 / 8332). Both Tesla/MacPherson images read; the translated component legend remains visible after the diagram, including its non-model-specific caveat. No outer overflow.
- `/articles/shock-absorber-types-monotube-twintube-air-ev`: complete desktop 0–5100 and mobile 0–8400 review through the footer. Gas damper/ZEEKR photographs and both native SVG diagrams read. Centered gas-damper layout has no empty credit column. Technical explanations remain article content. No outer overflow.
- `/articles/ev-performance-driving-techniques`: complete desktop 0–3400 and mobile 0–4200 review through the footer. Tesla photograph, all four body sections and references read. No outer overflow.
- `/articles/hybrid-to-ev-chassis-dynamics-transition`: complete desktop 0–5100 and mobile 0–6300 review through the footer. Both Volkswagen/Toyota images and HEV/PHEV/BEV/Regen distinctions read. No outer overflow.
- `/articles/ev-suspension-tuning-guide`: complete desktop 0–5100 and mobile 0–6300 review through the footer. Tesla/KW photographs, all four brand cards, five sections and fitment cautions read. No outer overflow.
- `/articles/ev-horsepower-vs-torque-explained`: complete desktop 0–8500 and mobile 0–10500 review through the footer. Both photographs, calculations, four expanded FAQs and references read; the mobile table was panned through all columns. A transient responsive-image load was followed to successful natural image dimensions and visually reread. No outer overflow.
- `/articles/ev-carbon-ceramic-brakes-guide`: complete desktop 0–23800 and mobile 0–37800 review through the footer (page heights 23911 / 39569). All six photo placements, diagrams, three comparison tables, 19 expanded disclosures, methodology, FAQs, owner-report boundaries and every reference read. Mobile comparisons display their complete cards without outer overflow. Calculator speed control changed 100 to 110 km/h, observed energy 0.85 to 1.03 MJ, then restored 100; no production data was written.
- `/articles/ev-tyre-and-coilover-selection-guide`: complete desktop 0–13600 and mobile 0–18900 review through the footer (page heights 14603 / 19742). All seven images, six tyre-model explanations, FAQs, claim/test boundaries and references read. Both mobile tables were panned; the five-column table was reviewed at left, middle and right positions to include all cells. Desktop/mobile picture variants rendered successfully after responsive loading. No outer overflow.

All 25 affected pages (Home, article index, 22 article bodies and credits page) have complete actual rendered desktop/mobile reader review. Final build: 88 local assets, 11 link-policy tests, four image-metadata tests, TypeScript/Next static generation, strict 32-route crawl and 28-variant image-attribution verification passed. Production deployment and verification are still pending at this pre-release record.
