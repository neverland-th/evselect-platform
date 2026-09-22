# Carbon Ceramic — complete rendered reader review, 22 September 2026

This records the local draft at commit `38bd811` on `codex/brake-complete-kits-2026-09-19`. It is not a production release or a Facebook publication. It supersedes the incomplete body-review and missing-original observations in `brake-cover-reader-check-2026-09-22.md`; the earlier checkpoint remains historical evidence.

## Version and actual views

- URL: `http://127.0.0.1:3117/articles/ev-carbon-ceramic-brakes-guide` in the Codex In-app Browser.
- Desktop: 1280 × 720 CSS px, browser tab 7. Read the full article in overlapping viewports, from title/introduction through all fourteen numbered sections, expanded disclosures, sources, related links and footer. The final desktop scroll offset was about 23,584 px.
- Mobile: 390 × 720 CSS px, browser tab 9, DPR approximately 2.06. Read the complete article in order, all nineteen native disclosures expanded, including thirteen FAQ answers. The final mobile document width was 390 px and final scroll offset approximately 40,145 px. The first part through section 10 was read before the continuation recorded here; sections 11–14, all source labels, related cards and footer were then read to the end.
- During the continuation, a screenshot immediately after scrolling briefly showed the preceding rendered frame. No unseen range was treated as reviewed: returned to section 11 via its actual table-of-contents link and read from scroll offset 28,125 in overlapping increments of approximately 540 px to the footer. Waiting for two animation frames before CDP capture produced the current rendered frame. The screenshot surface repeated part of its header below the emulated viewport; the actual document width and layout remained 390 px. This browser-capture artifact is not counted as a duplicated production header.
- Read the text at normal browser size and inspected each of the ten article photographs, its full visible crop, caption and source label. The Next.js development button is local-only; overlapping views exposed text temporarily behind it.
- No article wording or image-reference edits were made during this complete pass. Library SHA-256 remains `83453a6565918cb7e67bc77264e0281356e4e47913455b8196b7c35fe58dfe60`; the page and catalogue hashes are recorded in the preceding cover checkpoint.

## First-time reader observations

The opening now explains the appeal of Carbon Ceramic, the cost question and the daily-use context before introducing component specifications. The photograph identifies a Porsche Carrera S (997) PCCB example with the wheel removed, with photographer and CC0 links; it does not suggest that this is a validated Tesla retrofit. The headline, opening and body answer the same purchasing question.

The four symptom cards separate stopping distance, repeat-braking consistency, feel and appearance. The energy calculator explicitly excludes horsepower as an input and labels its assumptions. The rotor drawing and plain/slotted/drilled photo examples make the distinction between surface pattern and internal cooling understandable. On mobile, comparison tables become labelled stacked records; model, currency and kit contents remain with the relevant price rather than being stranded across a horizontally scrolled table.

The owner's two ENDLESS photographs now load and show the installed blue caliper/disc and the unpacked front kit. Their captions preserve the user's Model 3 Performance Highland context and owner-reported 375 mm disc. The text separates the reported cost and the owner's setup from a manufacturer quotation or an instrumented result. The ALVELL6 and Project μ FS6 photographs are individually captioned as their actual reference products; ALVELL6's Alphard/Vellfire application is not presented as an M6 Tesla fitment. The Tesla Carbon Ceramic photograph is identified as Model S Plaid Track Package, with market limits adjacent.

The mountain-road photograph retains its full image and the 2013 date, attribution and CC BY-SA 3.0 link. It is explicitly a Doi Inthanon context image, not a measured brake-test location or current road-condition photograph. The surrounding text distinguishes potential energy, rotor bulk temperature and transient surface peaks. The 59.4°C heat-capacity example is labelled an assumed temperature increase, not a final rotor temperature.

All thirteen expanded FAQ answers were read. Important distinctions remain clear: wheel diameter alone does not certify clearance; a pad called ceramic is not automatically compatible with a Carbon Ceramic disc; DOT numbering is not blanket fluid compatibility; a larger rotor does not guarantee a shorter single stop; 700°C pad data is not a whole-system performance score. The final section acknowledges the absence of a comparable Thailand complete-kit quote and separates the article's synthesis from EVSELECT road-test data.

All thirty-seven source-list entries and the related tyre/damper cards were read in the rendered page. The footer keeps the educational/pre-launch position. The mobile header logo appears small inside its pill; this is a shared-header polish item, not a missing image. No article text or photograph overflow was observed at this viewport.

## Interactive states actually exercised

Read every one of the nine score-panel states on both desktop and mobile, including the full rationale, evidence limits and source labels:

| Choice | Performance | Price/value | Low-dust score |
|---|---:|---:|---:|
| Brembo | 8/10 | 6/10 | 4/10 |
| ENDLESS | 8/10 | 6/10 | 4/10 |
| Carbon Ceramic | 9/10 | 3/10 | 8/10 |

These are disclosed rough editorial opinions, not test measurements or a calculated review average. The panels identify reviews from different cars/years and do not imply a controlled Model 3 comparison. Carbon Ceramic is described as a material category rather than a brand. The price panel does not convert the USD quotation into a Thai fitted price, and the dust panel does not claim zero emissions.

On mobile, changed the selected comparisons from three to two to one, then back to two and three. The last selected Brembo button was disabled, correctly preventing an empty comparison. The all-three button restored all three pressed states. All ring buttons displayed their matching score/rationale. Source labels wrapped within the cards without clipping.

On both desktop and mobile, used keyboard input on all four real range controls to change 2,200 kg / 100 km/h / 0% regen / 1,000 m to 2,300 kg / 110 km/h / 10% / 1,100 m. Visually inspected the resulting controls and graph/output states: 1.07 MJ total stopping energy, 0.97 MJ friction-brake share, 0.11 MJ assumed regen share, 24.82 MJ descent potential energy, 22.34 MJ remaining descent share, 20.7 kW over the stated twenty-minute assumption and 28.0 equivalents of a 100-to-zero stop. The speed comparison updated to 0.57/0.89/1.28/2.27 MJ. Restored all four defaults and verified their UI values. The text keeps the assumed regen fraction distinct from actual battery charging efficiency.

## Asset restoration and technical evidence

Before the complete pass, restored these three missing, still-referenced originals byte-for-byte from the existing commit after verifying that the files were absent:

- `public/images/articles/endless-m6-owner-model3-installed.jpg`
- `public/images/articles/endless-m6-owner-front-kit.jpg`
- `public/images/reviews/mg4-electric-hero.jpg`

The two ENDLESS photos were individually inspected in the final desktop/mobile article. MG4's restored original still needs its own complete page/model/source review; its presence is not that review. `npm run verify:images` then exited 0, verifying 72 referenced public images. Restoring the exact originals introduced no Git diff. The thirty-three unrelated existing deletions were not staged or altered.

At the end of the desktop pass, all ten main-content images reported loaded with nonzero natural width and the page had one H1. These are supplemental technical observations, not substitutes for the reading above. Existing TypeScript/lint/link/heading checks are recorded in the earlier checkpoint. No new full production build was run during the active development-server reading session.

## Focused primary-source refresh

The following primary-source facts were refreshed during this review:

- Tesla's Thai Model 3 owner-manual wheel/brake table: non-Performance front 320 mm / rear 335 mm; Performance front 355 mm / rear 335 mm. `https://www.tesla.com/ownersmanual/model3/th_th/GUID-E414862C-CFA1-4A0B-9548-BE21C32CAA58.html`
- ENDLESS MX72 manufacturer page: 50–700°C rotor-temperature range for the named compound, not a complete-kit rating. `https://www.endless-sport.co.jp/products/brake_pad/MX72.html`
- AP Racing disc-temperature guidance: the cited 400–600°C bulk-temperature context is racing-specific; post-stop measurements drop quickly and do not directly establish the peak. `https://apracing.com/race-car/brake-discs/disc-temperatures`
- Essex's Tesla Model 3 front kit listing: 9561 Road, 380 × 36 mm, part 20.01.10013, USD 5,249 and its listed components/clearance conditions. `https://www.essexparts.com/essex-designed-ap-racing-radi-cal-competition-brake-kit-front-cp9562380mm-tesla-model-3`

Race Technologies, Project μ matching and Tesla maintenance pages were not successfully retrieved in this focused refresh. The ENDLESS Alphard page's price table did not parse into the retrieved text. These attempts are not recorded as fresh confirmations. The article retains its 19 September source/price-check date rather than claiming that every source was revalidated on 22 September.

## Release boundary

The complete Carbon Ceramic draft was now actually read on desktop and mobile with all photographs and the interaction states above. This closes that specific rendered-reading gap. It does not certify every source as newly checked, grant rights to manufacturer media, pass the entire article catalogue or the fourteen other changed pages, or establish a production deployment. The new cover's CC0 evidence is recorded separately; other manufacturer image reuse questions remain unresolved. Complete the remaining page/source/rights review and release checks before publishing. No push, Vercel deployment, Facebook post, group share or membership request was performed by this review.
