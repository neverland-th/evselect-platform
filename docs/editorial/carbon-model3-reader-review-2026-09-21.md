# Carbon Ceramic and Model 3 reader review — local checkpoint

Reviewed in the user's actual Chrome, profile Evselect.com, tab 306882993, through the supported browser connector. Local origin: http://127.0.0.1:3117 . Branch: `codex/brake-complete-kits-2026-09-19`, based on `6cd3345` plus the edits in this checkpoint. This is not a production release record.

## Carbon Ceramic

URL: `/articles/ev-carbon-ceramic-brakes-guide`.

- Page SHA-256: `e498a8b39330c43cca40ad61708c45832e7b76d2bee0f2836b57d0701d811ac8`.
- Compare component SHA-256: `1dbe22a87213e8b8e82947115890ad9d96f1ab1c443467e4c0dcce6f7fe01012`.
- Actual inspected views: desktop **1440 × 1000 CSS px**, mobile **390 × 844 CSS px**. Dimensions were read from the page. Normal-size sequential viewport screenshots and rendered text were read; this was not only a code or HTTP review.
- Read the complete article in order, all three tables, four expanded symptom disclosures, every calculator label/note, scoring method and sources, all 13 expanded FAQs, references, related links and footer. The complete final desktop reading was repeated after the text edits, including the previously missed before-buying checklist. Mobile full reading covered the final text; the subsequent TOC number-only layout fix was re-inspected on mobile.
- Inspected all ten photographs and the lever-arm diagram individually in both layouts. Porsche cover, Brembo Prime/Max/Xtra details, both owner ENDLESS photos, ALVELL6, Project μ FS6, Tesla Plaid and the historic Inthanon road image all loaded. Captions identify which are owner reports, foreign-market examples or historic context. The first mobile and desktop cover captures did not show the full image; explicit later captures showed the complete cover and credit. No missing image was accepted based on an asset check alone.
- Reader findings fixed: explained compound, BBK, emissivity and bedding-in; replaced an inaccurate caliper-stiffness phrase; removed the direction-dependent wording “ภาพซ้าย”; added a direct Carbon Ceramic jump link; linked the Model 3 example to the relevant article; linked visible EVSELECT mentions home; displayed the update date from the article metadata. The mobile TOC's `07` had split across lines; a fixed minimum width and no-wrap now keep every number together.
- Actual interactions: all nine score rings opened their individual explanation on desktop and again on mobile. Three brand cards can coexist, filters remove individual cards, the final selected card cannot be removed, and “เทียบครบ 3” restores all three. Scores remain coarse editorial estimates with explicit limitations, not measured brake or dust results. Methodology and every FAQ were opened and read.
- Calculator end values tested: 3000 kg / 160 km/h / 80% regen / 1500 m produced 2.96 MJ total, 0.59 MJ friction and 44.15 MJ potential energy. Mobile home values 1400 kg / 40 km/h / 0% / 100 m produced 0.09 MJ and 1.37 MJ. Read the worked heat-capacity example and its limits. No road-temperature result was inferred from energy alone.
- Clicked the new Carbon Ceramic jump and TOC item 07 and confirmed their fragment destinations. Clicked the Model 3 anchor and confirmed its actual article, then clicked visible EVSELECT text and confirmed the homepage. DOM checks corroborated one H1, no skipped expanded-content heading levels, ten loaded article images and no document-wide overflow.
- Source refresh included Porsche PCCB, Brembo CCM, Tesla Thai braking guidance, AP Racing temperature guidance, the Essex 9561 kit, a firsthand Brembo GT forum discussion and PCCB owner discussion. Some Japanese review and kit-price pages could not be freshly retrieved by the web tool; the article retains the earlier 19 September source/price date. Do not claim all prices or sources were revalidated on 21 September.
- Open image-rights finding: the Porsche Stories source identifies the cover subject and photographer, but EVSELECT reuse permission is **unconfirmed**. This was already recorded in `docs/editorial-image-sources.md`; the reader review does not resolve it or certify all manufacturer image licences.

## Tesla Model 3

URL: `/articles/tesla-model-3-highland-review`.

- Page SHA-256: `f4917ced7a8b29b8d6b71818fee1ae627ed698e7d09180d30d1dbb67b2b1cf8e`.
- Read the complete final page, including all table cells, four trim cards, four footnotes, charging/model-year guidance, sources and shared footer at **1440 × 1000** and **390 × 844 CSS px**.
- On mobile, actually swiped the 1000 px table within its 349 px container through all four trim columns at the top, equipment rows and warranty/notes rows. Text outside the table fits the viewport; the document itself does not overflow. Horizontal scrolling is still required for this table; it is not a stacked mobile redesign.
- Inspected the sole article photograph in full in both layouts. Added missing CC BY-SA author/source/licence credit and retained its true aspect ratio so the car is not cropped. Identified the image as Germany, 2024, rather than asserting current Thai fitment.
- Added a clearly titled H2 section with useful in-sentence paths to tyre/coilover selection, damper adjustment and Carbon Ceramic. Linked the visible EVSELECT mention home without nesting anchors. Clicked the tyre and Carbon Ceramic links and confirmed the destination URLs and H1 text. The Carbon Ceramic → Model 3 link was also tested.
- Kept the **14 September 2026** specification-check date and existing figures. The current Tesla page was requested again, but the text tool exposed only a charging footnote; this checkpoint does not claim a new full specification verification. No prices, power figures or trim specifications were changed here.

## Site-wide diagnostics and release boundary

- Fresh HTTP heading inventory: 30 routes, all 200, exactly one H1 each, no descending heading skips in main/article output. This does not certify every client-side state on all 30 pages.
- Corrected the link inventory to include valid article-footer links. The site footer remains excluded because it is outside `main`. Model 3 already had a footer damper link; the initial report should not have described it as wholly unlinked.
- Current link inventory: no unknown internal destination or missing target ID; one published article (`ev-suspension-tuning-guide`) and six pending information pages have no main-content internal link. Twenty routes still have visible brand-home link issues. Counts do not prove contextual usefulness or external source validity.
- Changed-file ESLint passed with no errors. Production build passed, including all 73 referenced local images. No new content was pushed or deployed from this checkpoint.
- Remaining: other public-page brand/contextual link corrections; rendered reader review of the remaining affected pages; image-rights resolution; final release and live verification. Do not mark the overall goal complete from these diagnostics.
