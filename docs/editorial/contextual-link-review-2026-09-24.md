# Contextual links and Carbon Ceramic review — 24 September 2026

Status: **local draft; desktop reader review completed, renewed mobile reader review incomplete; not deployed.** This supersedes the all-screenshots-unavailable status in `brake-photo-update-2026-09-23.md`, not the requirement to finish mobile review.

## Version and production reconciliation

Reviewed checkout: `evselect-coilover-skyscraper-2026-09-19`, branch `codex/brake-complete-kits-2026-09-19`, based on `89c4b42` plus the scoped changes recorded here. Local production-mode server: `http://127.0.0.1:3117`, session 63680 when recorded. Check the session before assuming it stopped. The obsolete server was intentionally stopped before rebuilding.

Vercel was inspected during this run: the current READY production deployment was `dpl_ANG8BJvUtFVn5rfmm4K7pUNdb9Ve`, source `5ad51265a04a811b19699ff574bee3acb91dc210`, with the apex/www/project aliases. That is a different branch from this draft. The adjacent link-audit checkout's newer HEAD `bdf986e` includes draft work; it was not treated as production or copied wholesale.

Reconciled only the production safeguards and relevant source corrections: sitemap compatibility indexes, robots references, portable strict content-link build gate, exact Thai Öhlins source, the Essex manual warning and the dated Brembo partner evidence. Existing rewritten articles were retained. No main-branch merge was performed. The 33 pre-existing unrelated deletions were not part of this change.

## Changes and evidence

- Applied the explicitly invoked `evselect-contextual-links` skill: contextual Thai anchors, same-tab relative internal links, protected new-tab external HTTP(S) links, visible linkable EVSELECT/EVSELECTS mentions returning home, and valid plain-text metadata/alt contexts.
- Added an inline tyre-guide link and a damper `#basics` link to the brake problem-selection section. Their introduction explains the relationship to braking rather than relying on a related-card block.
- Added a catalogue introduction linking the existing suspension symptom overview. This also makes the overview discoverable from the catalogue without misrepresenting the existing 21-card count.
- Changed the menu title element from H2 to a styled paragraph, retaining the dialog label and appearance. The closed shared dialog must not insert a heading before the page H1.
- Preserved production sitemap behavior: both `/sitemap_index.xml` and the compatibility `/sitemap_indexl.xml` point to `/sitemap.xml`; robots lists the canonical index and sitemap. Added the standalone damper log's missing canonical.
- The strict audit now runs in the build and fails every finding; historical baseline data is not used to waive findings. It checks the 31 public/supporting pages and distinguishes contextual body candidates from navigation/cards.
- The brake article now explicitly distinguishes the Essex product's Road name from its installation manual's off-road-only/public-road warning, and asks for written clarification rather than asserting Thai-road suitability. The official PDF was retrieved and its page 2 text read. Source: `https://www.essexparts.com/storage/wysiwyg/20-99-00012.pdf`.
- Brembo's Race Technologies commercial-partner evidence is labelled **2012**, not represented as a freshly verified current appointment. The kit price remains sourced to the actual product page and the historical price-check date remains 19 September.
- Öhlins now links to `https://www.ohlins.com/en-th/automotive/road-and-track/tesla-model-3-model-y-road-and-track-set?v=tesla-model-3-2020`. The manufacturer page was opened and confirms Model 3 2020, TES MA10S1 and a combined 1-way compression/rebound adjuster. It does not establish Highland fitment.

## Complete desktop brake reading

In Codex Browser tab 11, the final current article was read in order at the normal desktop presentation (approximately 1273 × 716 screenshot; CSS viewport approximately 1272 × 720). This included the complete opening, recommendation, all 14 sections, table rows, diagram labels, image captions/credits, FAQs, source list, related links and shared footer. Six photographs were inspected individually in the rendered page:

1. PCCB cover: removed wheel, yellow Porsche caliper and drilled disc; caption identifies Carrera S (997), photographer, CC0 and the absence of universal EV fitment assurance.
2. Numobeer slotted disc: full frame shows actual grooves; dated/licensed caption does not identify it as Brembo Max.
3. Cheeni AMG assembly: gold caliper and drilled Carbon Ceramic disc; dated Geneva 2011 technology example, not a Tesla retrofit.
4. Owner's installed blue ENDLESS assembly: 375 mm is attributed to owner confirmation, not a measurement inferred from pixels.
5. Owner's paired calipers/discs and boxes: caption distinguishes visible parts from what the historical price included.
6. Doi Inthanon road context: dated 2013 photograph, not a current road condition or brake-test claim.

The opening now acknowledges why enthusiasts want the material and appearance, then promises an assessment of performance, dust and ownership costs. The body follows that promise. The owner case separates personal experience from catalogue fitment and current pricing. The comparison table keeps USD/JPY prices, Japanese reference vehicles and unknown Thai installed totals distinct. Technical examples distinguish braking energy from disc temperature and first-stop traction from repeat-stop thermal capacity. The source and prelaunch disclosures are present in the actual reading flow.

Actual controls operated and their resulting text/visual states read:

- All four symptom disclosures.
- All four energy controls, separately: mass 3000 kg, speed 160 km/h, assumed regen 80%, descent 1500 m. The final visible outputs included 2.96 MJ kinetic energy, 0.59 MJ friction share, 44.15 MJ descent potential and 8.83 MJ descent friction share. These are illustrative model outputs, not vehicle test results.
- All nine score buttons: Brembo 8/6/4, ENDLESS 8/6/4, Carbon Ceramic 9/3/8. Every reason panel and its source links was opened and read. The text identifies these as rough editorial opinions with cross-vehicle/year limitations, not measured or averaged customer scores.
- One-, two- and three-item comparison states. The last remaining item could not be deselected; all three could be restored.
- Score methodology disclosure and its complete source list.
- Heat-capacity disclosure, including assumptions and the distinction between a calculated temperature increment and an actual peak temperature.
- All 13 FAQ answers, opened by real clicks and read in overlapping rendered views.
- Desktop menu opened, every navigation link/prelaunch text/CTA read, then closed.

The page was not edited after this complete desktop reading. A subsequent reload returned the controls to their default state. A current top-of-page screenshot is saved outside the repository at `C:/Users/rolf-/.gemini/antigravity/scratch/brake-review-2026-09-24/brake-desktop.png`.

## Catalogue and representative navigation

The current catalogue desktop was reread from introduction to footer, including the featured 7X and all 20 remaining cards, every image credit, title, visible excerpt, key-point list and check-before-buying note. The three-column presentation and credits were inspected. A capture that skipped part of S07/ATTO 3/S05 and the EX2 photograph was explicitly revisited; it was not counted as a completed read until those views were seen. The new inline suspension link was clicked; the same tab reached the matching symptom-guide H1. Clicking the observed byline EVSELECT link then returned the same tab to the homepage, whose actual hero was seen.

The previous complete catalogue filter review remains recorded in `catalogue-reader-review-2026-09-23.md`. No claim of rerunning all eleven filter interactions on this version is made here.

The exact Öhlins link was clicked and its surrounding explanation read. Rendered attributes were `_blank` and `noopener noreferrer`; however, no new destination tab appeared in the browser inventory. Therefore this run verifies its markup and separately opened manufacturer content, **not successful new-tab UI behavior**. Do not silently count an attempted click as success.

## Earlier mobile limitation (resolved in the resumed review below)

Attempted the 390 × 844 mobile viewport in the same supported Codex browser. At first the DOM metrics showed the requested CSS width but screenshot output contained a heavily reduced page in one corner and large white space. Raw capture alternatives produced magnified crops, a black/white frame, errors or timeouts. The documented browser troubleshooting guidance was consulted; device overrides were cleared and the viewport reset. Reload and documented viewport/CDP alternatives did not produce a reliable normal-size mobile view. Later the requested override did not change the article's measured desktop viewport at all. An existing second tab was an error page whose inspection was blocked; no attempt was made to bypass that policy.

These outputs do not establish a mobile layout defect, and they do not establish a completed mobile reader review. A file named `mobile-capture.png` from these attempts contains desktop output, not approved mobile evidence. No manipulated DOM, generated screenshot or technical inventory was substituted for actual rendering.

Before publishing: finish the complete renewed mobile brake and catalogue reading, all affected interactive states, and the mobile menu's final CTA/scroll behavior; resolve any findings and reread the full affected final content after edits. Confirm representative external new-tab behavior when the browser permits it. Then create the clean release, deploy the exact reviewed commit, and verify the production routes, aliases, images, link behavior, robots and sitemap. The current draft has **not** been pushed or deployed in this run; no Facebook post/share/membership action occurred.

## Validation and version fingerprints

- `npm run build`: passed, including 78 referenced public image checks, 11 existing link-policy tests, TypeScript, 43 generated static pages and the strict post-build audit.
- Strict local audit at `2026-09-24T04:41:12.522Z`: 31 pages (24 published, 6 pending/noindex, 1 supporting/noindex), 1,845 anchors, 1,303 internal anchors, 86 contextual candidates, **zero findings and zero blocker routes**. This is technical coverage, not a count of manually followed links or a production verification.
- Both index variants returned 200 with one sitemap entry; the canonical sitemap returned 200 with 24 URLs in that local audit.
- All changed TypeScript/TSX files passed ESLint after the final source changes. `git diff --check` passed.
- The tyre page fingerprint still matches its completed prior desktop/mobile reading; no tyre content was changed in this run.

| File | SHA-256 |
|---|---|
| `src/app/(storefront)/articles/ev-carbon-ceramic-brakes-guide/page.tsx` | `6ae06596df9030c99a6a184056867b0c660d48533e044dbf115d8c746cdcc675` |
| `src/lib/brake-article.ts` | `fe54c7cc715a9066c96c7a5dacb2a0a9db73365ea0c80c4073987309ec81e4ba` |
| `src/lib/brake-comparison.ts` | `2d4ac20cb9a9a19adb4cb2ba1736eb1c7d4086fd19572f4312c1140acde6331d` |
| `src/app/(storefront)/articles/page.tsx` | `16ea29af4d7e1211c62878bb3f543b5a8ee2c10094aab0512bb1fdafd49662eb` |
| `src/app/(storefront)/articles/ev-tyre-and-coilover-selection-guide/page.tsx` | `e0fa260c10a84bfb5d6d26ca347c17d7cfb3a6efb2ab25eb2841787e496887ce` |

This resumed turn made substantive implementation and desktop-review progress. It is the first resumed turn with the remaining mobile-capture blocker, not a basis to mark the entire goal complete or to reuse the earlier three-turn blocked count.

## Resumed-run blocker audit: third consecutive turn

The first resumed turn completed the source reconciliation, full desktop brake/catalogue review and draft commit `2602402`, but mobile capture remained unusable. The second turn polled the same server session 63680 and confirmed it was running, then tested a fresh browser tab 13. The documented viewport still returned desktop dimensions; tab-specific emulation returned CSS width 390 but reduced/cropped screenshot content with white space and a repeated strip. Device settings were restored and that temporary tab was closed. Its checkpoint is `scratch/brake-review-2026-09-24/mobile-blocker-check-2.json` in the parent workspace. That turn was a verified runtime wait plus an unsuccessful blocker recheck, not completed mobile review.

The third resumed turn reverified HEAD `2602402` and polled session 63680 again: it remains running without new output. In retained tab 11, mobile emulation reported a CSS viewport of 390 × 844, but the actual screenshot still reduced the visible page into the upper-left corner with extensive blank canvas. This repeats the same genuine mobile visual-review blocker across three consecutive resumed turns. It is not evidence of a defective website layout. Device metrics were cleared, the viewport reset and tab 11 retained for handoff.

The remaining required mobile reading, image/interactive review, exact reviewed release and production verification cannot be completed from this capture. Rebuilding unchanged source or rerunning technical inventories would not resolve it. Mark the goal **blocked**, preserving its full scope and existing draft, pending restoration of usable mobile browser rendering/capture. This is neither completion nor a user-requested pause. No push, deployment or social submission has occurred. Resume at the incomplete mobile gate after the browser surface changes; do not repeat the completed desktop review unless affected content changes.

## Resumed mobile review completed — supersedes the blocker above

On 24 September, tab 11's actual page was rendered at CSS 390 × 844. The capture scale mismatch was resolved using a calibrated browser capture: document clip 290.33 × 628.3, scale 1.3433, producing a readable 390 × 844 image. No page text, CSS or image was modified to manufacture this result. Consecutive document views overlap by approximately 190 px; the displayed screenshots were actually read, not merely saved or extracted as text.

The complete final brake article was read in order, including all 14 sections, every mobile table card, all six individual photos and their complete captions/credits, every chart/formula/limitation, all 13 expanded FAQ answers, the full reference list, related links and footer. The PCCB, slotted disc, AMG assembly, installed ENDLESS, owner parts and Doi Inthanon images each visibly loaded and supported their labelled scope. The mobile table cards keep each kit's equipment, source currency and fitment limitations together. Neither brake nor catalogue exceeded the 390 px document width.

Actual mobile interactions: all four symptom disclosures; all nine score reason panels; the full score-methodology disclosure and its source links; one-, two- and three-item comparisons (the final selected item is disabled against removal); the heat-capacity disclosure; all 13 FAQ disclosures; and all four calculator sliders, operated by keyboard to 3000 kg / 160 km/h / 80% / 1500 m. The resulting 2.96 MJ, 0.59 MJ, 44.15 MJ and 8.83 MJ values and the changed visual bars were read in the rendered page. Menu navigation, prelaunch message and both final CTAs fit the 844 px mobile viewport; Escape closed the dialog. The back-to-articles link navigated in the same tab.

The complete current catalogue was then read from introduction to footer on mobile: the featured 7X and all 20 remaining cards, all photos individually, credits/licences, titles, excerpts, key points and check-before-buying notes. The contextual suspension introduction is readable and linked. Suspension and guide filters were clicked and visibly returned 9 and 1 cards respectively; the previous full eleven-filter review remains applicable to unchanged filters. This run does not claim eleven new filter tests.

Representative external link evidence is now stronger: a real click on the catalogue's CC0 licence link emitted browser `Page.windowOpen` with the exact external destination, `windowName: _blank`, `userGesture: true` and `noopener`. The article tab remained unchanged. Codex's tab inventory did not expose the new window; destination-window display is therefore still an app limitation, not a claimed successful visible destination. Protected attributes and the actual browser new-window request were both verified.

Evidence outside the repository: `scratch/brake-review-2026-09-24/brake-mobile-top.png`, `brake-mobile-calculator.png`, `catalogue-mobile-top.png` in the parent workspace. The earlier misleading `mobile-capture.png` is not used. No public content changed during this completed review; file fingerprints above remain applicable.

## New production baseline discovered before release

The final preflight found all three live aliases now point to READY deployment `dpl_CUTyDMG8RuKJV9fxcvEQt1HXRi3g`, source commit `a2075e84f92aac59a54574f8e5911f5f95b1e0cc`, from `codex/neon-free-migration-2026-09-24`. This adds the Neon PostgreSQL integration, protected database-health endpoint, product-route prelaunch protection and Next.js 16.3.6 patch. Its published article source is still based on `5ad5126`. The release must retain these production changes; deploying the older SQLite runtime would be a regression. Database migrations/import must not be rerun as part of this content release. Final integration/build and production verification remain pending at this checkpoint.
