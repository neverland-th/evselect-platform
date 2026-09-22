# MG4 MY2026 — corrected local draft and reader review

Status: local draft, based on `aa79b06` on `codex/brake-complete-kits-2026-09-19`. This record establishes neither a push nor a deployment and does not clear the complete site release gate.

## Version and actual views

- Article: `http://127.0.0.1:3117/articles/mg4-electric-review`.
- Article file SHA-256: `1b192ebea56041f07588ad1e09d1625d74ae3553c665f005737acc57d91d12bf`.
- Shared data SHA-256: `5af588897a6548d332c0c3ae37c3f608902e14f139567bf16fc67b86b0c3a7ce`.
- Catalogue file SHA-256: `cf3798b9f9a8db2d8dc9ec5ff47c71b29dc9102cd8511fdf991a95071504e876`.
- Photograph SHA-256: `afd07de4f01999c9c27d7e765d92b585f99dfe232859ac5a06b88a6500804112`.
- Desktop: Codex In-app Browser, 1280 × 720 CSS px. Read in order at approximately 0, 540, 1080, 1621, 2160, 2701, 3240, 3781, 4321 and the final scroll position. Document height was approximately 5559 px. Complete title, introduction, scope/byline, photograph/caption, both trim cards, all paragraphs, four test-drive items, all source labels, pre-launch panel and site footer were read visually.
- Mobile: separate Codex tab, 390 × 720 CSS px. Read sequentially at approximately 0, 540, 1080, 1621, 2160, 2701, 3240, 3781, 4321, 4861, 5401, 5941, 6481, 7021, 7561 and 8038 through the complete site footer. Overlapping views exposed the text behind the sticky header and local development indicator. The final article was not edited between these two complete passes.
- Mobile capture used the host pixel ratio 2.06 and the tab CDP surface after two animation frames. The repeated strip below the emulated viewport in the compositor output is a browser capture artifact, not a second DOM header. The actual document and scroll widths were both 390 px. No horizontal document overflow was found.

## What the first-time reader now receives

The old page mixed previous MG4 trims and historical prices with unsupported first-person road-test claims, an 8.9 score and Review structured data. The replacement has one clear purpose: decide whether current Thai MY2026 D Standard Range or X Long Range better fits the reader's travel and equipment needs. It explicitly identifies manufacturer-based synthesis and does not invent an EVSELECT test or ranking.

The opening leads with the price-versus-use decision, rather than a list of technical terms. The first recommendation treats D as a starting point for a test-drive shortlist and explains when X's range reserve and equipment justify considering the higher trim. It does not declare a universally best value without a comparable X quotation.

The two specification cards present the same seven fields. Desktop displays them side by side; mobile stacks D then X with full labels and values, without horizontal swiping. They distinguish kW/PS, identify NEDC rather than a measured road range, and do not carry over XPOWER acceleration or horsepower. Both complete cards were read.

The price example has explicit booking-and-delivery dates and an expiry warning. The 140 kW / 26-minute manufacturer charging statement is scoped to the 62.2 kWh pack; it is not automatically assigned to D's 50 kWh pack. The warranty paragraph describes the named high-voltage components and exclusions rather than promising lifetime cover for the whole car. The test-drive items give the reader concrete actions without asserting measured ride, noise or braking results.

The final section states that EVSELECT has no products available for sale and accepts neither orders nor payment. Contextual links connect battery/charging advice and tyre/coilover choice to the relevant guides. Visible EVSELECT brand links go home. The headings follow one H1, major H2 sections and subordinate H3 cards.

## Photograph inspected individually

The previous `mg4-electric-hero.jpg` had no established source or reuse licence in the available evidence. It is retained on disk, but this article, its catalogue entry and social metadata now use a different, verified photograph.

The replacement shows a teal MG4 Electric X on a display stand, with the complete front/side and wheels visible, photographed by Chanokchon at Impact, Muang Thong Thani, on 28 March 2026. The creator's Commons page declares own work and CC BY-SA 4.0. The local unchanged 1280 × 720 thumbnail and the article's full-ratio rendering were inspected. The photograph is not an EVSELECT test car. Its windscreen contains a historical display price; the caption explicitly prevents readers treating that price as the September offer.

The image, full caption, photographer, source, licence and no-retouch statement were individually inspected on desktop and mobile. The affected catalogue card was also read completely at `http://127.0.0.1:3117/articles?category=all&segment=hatchback` in both sizes. The credit and historical-price note are outside the image link. The desktop headline/excerpt use the existing card truncation; the full accessible title and destination remain correct. This is a focused MG4-card review, not a complete catalogue approval.

## Primary-source verification

Checked on 22 September 2026:

- [MG Thailand MY2026 model page](https://www.mgcars.com/th/cars/mg4-my2026): current model scope, rear-wheel drive, manufacturer-described 50:50 distribution and 62.2 kWh charging claims.
- [MG MY2026 brochure](https://mg-upload.sgp1.cdn.digitaloceanspaces.com/fdebbe8eb59428ff636625b1d33fb7be.pdf): downloaded and rendered locally after the in-app PDF viewer stayed blank. Both pages were viewed, with the complete page-two specification/equipment table at higher resolution. D: 50 kWh, 125 kW / 170 PS, 250 Nm, 450 km NEDC, 17-inch 215/50 R17, rear camera, four speakers. X: 62.2 kWh, 180 kW / 245 PS, 350 Nm, 540 km NEDC, 18-inch 235/45 R18, 3D camera, six speakers. The image of the table says **62.2**, matching the current model page; an OCR value of 62.1 was not adopted.
- [MG September MY2026 promotion](https://www.mgcars.com/th/promotions/New-MG4-MY2026): D SR 599,900 baht versus regular 669,900, qualifying booking and delivery 1–30 September 2026, with component-specific lifetime-warranty exclusions. This source did not supply a directly comparable X special price; none was invented.
- [MG 2024 launch record](https://ex-prod.mgcars.com/th/NewsActivities/Detail/Motor-Show-2024) and [2024 brochure](https://revamp.mgcars.com/download-brochures/New_MG4_Electric_2024_Brochure.pdf): substantiate the historical Standard 49 kWh / Long Range V / XPOWER names discussed only to avoid mixing generations. They are not the source of the current MY2026 cards.
- [Photographer's exact file page](https://commons.wikimedia.org/wiki/File:2026_MG_4_Electric_X.jpg): model description, location/date, creator and [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). See `../editorial-image-sources.md` for the local asset record.

## Navigation, structural checks and remaining limitations

Activated the mobile battery contextual link with the keyboard and observed the same-tab `/articles/ev-battery-care` destination. Activated the tyre/coilover contextual link and observed its correct URL and current Thai title, then returned to MG4. The article-list link opened `/articles`; the actual hatchback filter produced the single MG4 card. A pointer attempt at the wrapped inline battery link did not navigate; keyboard activation succeeded. Do not count the initial attempt as a successful tap.

External source/credit anchors render their exact destinations with `target="_blank" rel="noopener noreferrer"` and a screen-reader new-tab announcement. Source content was verified separately. Native external-tab creation and ShareButton completion remain browser-dependent open checks already documented in `battery-reader-review-2026-09-22.md`; they are not claimed successful here. No social message was sent during navigation testing.

Supporting validation after the final content: four-file ESLint passed without warnings; TypeScript passed; `verify:images` passed 73 referenced assets; `git diff --check` passed. Refreshed HTTP audits cover 31 routes and 42 heading views including 11 actual catalogue filters, with no missing internal route/fragment, brand-home, tab-policy, nested-anchor, H1-count, empty-heading or skipped-level findings. These are supplementary evidence and are not production or full-reader-review results.

Still outstanding: the other thirteen newly brand-linked routes, complete catalogue review, unresolved manufacturer-image reuse evidence elsewhere, the existing native-share/new-tab limitation, production build/release and live verification. This article's complete reading does not waive those gates or make the scheduled tyre Facebook round ready.
