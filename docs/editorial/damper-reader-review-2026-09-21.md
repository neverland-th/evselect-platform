# Damper article and setup log — rendered reader review

Status: reviewed local draft; not pushed or deployed. Authoritative branch: `codex/brake-complete-kits-2026-09-19`, based on `0144d12` with this checkpoint's changes. This does not clear the pending all-site publication gate.

## Exact versions and views

- Article: http://127.0.0.1:3117/articles/ev-damper-tuning-bump-rebound-guide
- Standalone log: http://127.0.0.1:3117/downloads/evselect-damper-setup-log.html
- Actual Chrome profile Evselect.com, tab 306882993; desktop **1440 × 1000 CSS px**, mobile **390 × 844 CSS px**. Viewport dimensions were checked from the rendered page. Read in order at the actual page scale, scrolling with overlap rather than relying on extracted HTML.
- Article `page.tsx` SHA-256: `54cdf8f79447e1da81a78fbc8f4be6c2be95d4f6c9a89c706692de29ff5f130b`.
- `DamperPhoto.tsx` SHA-256: `4cc3aa0205dbe23b0b8c200011c925257f19e3dc140baf3796c98e43818553f3`.
- Standalone HTML SHA-256: `d8a5ef7c540cbb934fccb4a90bd5690ee824378abb5ee9580645426bcd22fdc0`.

## Reader observations and corrections

The opening gives an owner a clear reason to continue: choosing an expensive adjustable kit does not establish that it suits the car or the owner's use. The guide then explains spring/damper relationships, fitment, adjustment and practical records. The article does not claim EVSELECT conducted the photographed road or track tests. The long format needs its contents navigation; on mobile the two-digit section numbers initially split across lines. Fixed their width, shrink behavior and whitespace, then reread the complete final desktop/mobile article. All 21 numbers now remain on one line.

Read every paragraph, table cell, label, caption, source and related-reading/footer item in all 21 sections in both views. The wheel-rate example now has its own H3 above its A/B H4 subsections. Its motion-ratio definition includes the spring/wheel travel geometry and does not invite an extra angle correction. The 100/49 N/mm values remain explicitly illustrative, not a claimed specification for a customer's car.

All visible EVSELECT brand mentions in the article and setup log now link home. Added a contextual tyre/coilover link where the guide explains the wheel/tyre relationship. Article sources and photo-source/licence links use a new tab with noopener/noreferrer and accessible new-tab wording. The internal setup-log link remains in the same tab.

## Every article photograph inspected

Individually inspected the subject, full crop, placement and readable credit in desktop/mobile for all nine photographs:

1. Owner-provided KW cover with five yellow-spring coilover products; the caption does not identify a universal EV kit.
2. TEIN FLEX Z green kit.
3. Bilstein B16 blue kit.
4. Ohlins TES MA10S1 Model 3 **2020** example, with rear spring and damper separate; not presented as a Highland kit.
5. BC Racing ZR reservoir kit.
6. HKS HIPERMAX S white/gold-ring product image.
7. HKS HIPERMAX R white/red-ring product image.
8. Ratchadamri, Bangkok, 2019, kallerna, CC BY-SA 4.0.
9. BMW M4 GT3 Team WRT 46 at Spa, 2023, ACBE25, CC BY-SA 4.0.

All nine loaded in the inspected final layouts. The Bangkok and track photographs support the situations discussed without claiming a test performed by this publication. Product captions do not certify compatibility with every EV. Manufacturer-page provenance is identified, but this review does **not** establish new reuse permission for every manufacturer image.

## Interactive and navigation review

- Read all four interactive diagram states in both layouts: KW V2 rebound adjustment; coupled TEIN/Bilstein adjustment; KW V3/BC ER two-way; BC ZR/KW V4 three-way. Checked radio changes and keyboard ArrowRight behavior.
- Opened and read the complete worked example, all three scenario disclosures and all ten FAQs in both layouts (14 open disclosure elements in the final check).
- Read all 29 reference entries, related cards and complete shared footer in both layouts.
- Activated the tyre/coilover contextual link; verified that the same tab reached `/articles/ev-tyre-and-coilover-selection-guide` and displayed its opening.
- Activated a TEIN photo-source link; verified a separate tab reached `https://www.tein.com/products/flex_z.html` while the draft stayed open, then closed the source tab.
- Opened the standalone setup log and used its descriptive return link to reach the Damper article in the same tab.

## Standalone setup-log review

Read all fields, field labels, notes and footer in desktop and mobile. The form now has one H1, H2 sections 1/2/3, and H3 corner/session labels. The new H2 in the fieldset legend fits the existing print-form presentation. The mobile main layout becomes one column, the corner inputs remain readable, and the text areas have sufficient width. There are no images in this document.

The form's no-autosave disclaimer remains visible and accurate. It remains noindex/follow. No data was submitted, and saving/printing a PDF was not tested; this is a rendered reading/navigation review, not a claim of tested persistence or print output.

## Supporting checks and limitations

- Final desktop/mobile article: one H1; no page-level horizontal overflow; all nine article images loaded; 14 disclosures open for the expanded review. The log also has no page-level horizontal overflow at 390 CSS px.
- Browser warning/error collection after the final desktop read returned no entries.
- Changed-file ESLint passed. Production build passed, including TypeScript and 72 referenced local images. Refreshed heading/link inventories cover 31 local routes: all return successfully, one H1 each, no skipped descending content heading levels, no broken internal targets and no nested anchors found.
- Current article/log have no unlinked-brand or tab-policy flags. Eighteen other routes still have brand-link findings; five previously reviewed pages have tab-policy flags under the newly expanded check. They require corrections and renewed rendered review.
- These observations apply to the exact local draft above. No publication, production validation, full-site SEO certification, exhaustive accessibility certification or universal photo-reuse clearance is claimed.
