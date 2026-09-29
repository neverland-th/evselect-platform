# EV tyre guide — v1.2, 29 September 2026

Current status: IMPLEMENTED and VERIFIED locally. Production deployment pending.

## v1.2 final pre-publication review

- Reviewed the final rendered article in reading order at 1280 × 800 and 390 × 800 on `http://127.0.0.1:3091/articles/ev-tyre-and-coilover-selection-guide`. Read the full body, all six model images and credits, both comparison tables including every horizontally scrolled mobile column, FAQs, references and footer. Evidence: `scratch/ev-tyres/v12-final-desktop-0..21.png`, `v12-final-mobile-0..30.png`, and the two `v12-mobile-*-right.png` table views. Additional duplicate bottom captures are not counted as new coverage.
- Final fixes: captions now distinguish the three real Michelin photographs from manufacturer product renders; removed an unsupported country label from the e.Primacy photo caption; linked the cover-caption brand mentions to the homepage. Reread the complete final article after these corrections. No clipped article text, missing model images or page-level horizontal overflow remained. The horizontal tables scroll using the keyboard.
- Desktop selects the optimized `ev-tyre-cover-desktop.png`; mobile selects optimized `ev-tyre-cover.png`. All seven article images loaded. Checked the updated catalogue card at both viewports (`v12-catalogue-desktop.png`, `v12-catalogue-mobile.png`).
- Preserved production commit `946bf9c557b8f164088e1c82c44f056d210476cc` via merge `a3614aa`. The only homepage difference from that production version is the tyre topic's title and description. Read the complete resulting homepage at both viewports, including all four expanded FAQs (`v12-home-desktop-0..9.png`, `v12-home-mobile-0..15.png`). All images loaded; no page-level overflow. The unchanged 11 incoming articles retain their completed v1.1 rendered review below.
- `npm run build` passed: public image validation, 11 content-link tests, Next.js/TypeScript compilation and strict audit of 31 pages / 1,903 links / zero findings. Log: `scratch/ev-tyres/build-v1.2-final.log`. Targeted ESLint passed with no warnings; `git diff --check` passed.
- Local HTTP/metadata check passed: HTTP 200, exactly one H1 with the requested title, unchanged canonical, desktop cover in OG/Twitter/Article schema, no broken fragment links. Energy conversions remain 18.02 / 16.34 kWh per 100 km and 10.3% relative difference. All three existing homepage content tests passed.
- Vercel dry run confirmed Next.js, 595 entries / 76.07 MiB and zero nonempty secret, database, scratch, Git, Vercel-state or node_modules files in the upload set. Immediately before release, the production alias still resolved to READY deployment `dpl_Dg5idnEJABusfG1ZyP5C1S4BGCtC`, source `946bf9c`, in the intended project.

## v1.2 current changes and user direction

- User supplied `C:/Users/rolf-/Documents/evselect project/ยาง EV.png` and requested this exact image for mobile, plus a desktop version. The mobile source is copied unchanged (941 × 1672; SHA256 `5605793e1d978c21a91818add2a64005ce29007fee34f9514f50942cc9b56ebc`). The built-in image tool produced a 1731 × 909 desktop concept banner; its prompt is in `ev-tyre-desktop-cover-prompt.md`.
- Native responsive picture selection switches at 768 px, with Next.js optimized sources. Article and catalogue share this component. OG, Twitter and Article schema use the desktop banner.
- Replaced all three Michelin brand renders with real, exact-model photographs from Wikimedia Commons, licensed CC BY-SA 4.0. Each is credited with its author, original file page and licence. Captions distinguish photographed vehicle/size from the article's test examples and Thai fitment.
- The user explicitly directed the remaining tyre pictures to be sourced from websites with links to the manufacturers. The Continental and Pirelli manufacturer pictures are retained under that task-specific direction, with original sources and clear credits. This direction resolves the prior task approval gate; it is not a claim that a publisher licence was independently verified. No manufacturer permission request was sent. Hankook's editorial-use basis remains recorded.
- Production changed during work: deployment `dpl_Dg5idnEJABusfG1ZyP5C1S4BGCtC` identifies source commit `946bf9c557b8f164088e1c82c44f056d210476cc`. Preserve that homepage/content update before releasing this article.

The sections below record the v1.1 research and checks. Old cover, permission blockers and release steps below are historical and superseded by the v1.2 directions above; final v1.2 verification will be added after execution.

## v1.1 historical record

v1.1 change: completed the remaining homepage and incoming-article rendered review; added the follow-up rights findings. No article source, image or deployment changes in this review pass.

## Scope and release identity

- Requested title: ยาง EV ต่างจากยางทั่วไปยังไง?
- Preserve `/articles/ev-tyre-and-coilover-selection-guide`; no route migration.
- Branch `codex/ev-tyre-guide-2026-09-29`, based on `3996905` in an isolated checkout. Original checkout's unrelated changes were preserved.
- Confirmed Vercel project `evselect-platform`, project ID `prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`, team ID `team_9eIBjV1sGR5IuVLX2i3NACGC`.
- Production observed before work: `dpl_HkUfMgnVfeWv8JMRv1obfuy37QZu`, READY, alias `evselects.com`. The deployment metadata did not provide a Git SHA. Do not claim the local base is proven identical to that production deployment.
- User authorized deployment after completion. No further general deployment approval is needed; missing inputs and the publication checks still need completion.

## Implemented

- Replaced the coilover-focused article with engineering explanations, six model profiles and purpose/pros/limitations: Michelin e.Primacy, Pilot Sport EV, Hankook iON evo Summer, Continental EcoContact 7, Pirelli P Zero E, Michelin Pilot Sport 4 S.
- Added manufacturer model images with exact model captions, links and market/size qualifications. These are real product representations supplied by manufacturers, including renders; not claimed as original photography or first-hand tests.
- Added independent ADAC test evidence for e.Primacy and retailer-run Tire Rack evidence for PS4S on a Tesla Model 3. Clearly separate iON evo AS in that test from iON evo Summer in the model profiles.
- Centralized article title, description, dates and cover reference. Updated catalogue, metadata, OG, Twitter, Article JSON-LD and sitemap modification date.
- Corrected 13 incoming link labels/destinations across 11 articles to avoid promising coilover content at the rewritten tyre URL. No changes to those articles' factual claims or layouts.
- Updated the homepage topic link to describe EV versus Performance tyres. The catalogue card now uses the shared article image instead of its legacy concept-cover override; the separate catalogue hero remains its accurately captioned concept feature.
- Mobile overflow fix: positioned the two horizontal table wrappers so visually hidden external-link labels remain inside their scroll containers.

## Material evidence

| Claim / boundary | Source | Label |
|---|---|---|
| Michelin design and EV compatibility | [e.Primacy Thailand](https://www.michelin.co.th/auto/tyres/michelin-e-primacy), [Pilot Sport EV Thailand](https://www.michelin.co.th/auto/tyres/michelin-pilot-sport-ev), [PS4S Thailand](https://www.michelin.co.th/auto/tyres/michelin-pilot-sport-4-s) | CLAIM: manufacturer |
| Pilot Sport EV range claim compares Pilot Sport 4 SUV, not 4 S; lab rolling resistance plus simulation, not universal road range | Pilot Sport EV Thailand footnote | VERIFIED attribution; manufacturer test |
| iON evo design, Summer/AS/SUV distinction | [Hankook US](https://www.hankooktire.com/us/en/tire/ion/evo.html) | CLAIM; not Thai-stock confirmation |
| EcoContact 7 / 7 S and external urban noise | [Continental release, 5 February 2025](https://www.continental.com/en/press/press-releases/20250205-ecocontact7/) | CLAIM; global launch |
| P Zero E, Elect, RunForward and launch-range AAA | [Pirelli release, 13 July 2023](https://www.pirelli.com/tires/en-us/car/press-releases/pzero-e-230713) | CLAIM; launch scope only |
| e.Primacy wet-asphalt braking 43.7 m from 80–0 km/h; test-field best 34.4 m | [ADAC 2023, 205/55 R16 91V](https://www.adac.de/rund-ums-fahrzeug/ausstattung-technik-zubehoer/reifen/reifentest/sommerreifen/205-55-r16/michelin-eprimacy-id-4726/) | VERIFIED source; not all sizes or ST |
| PS4S 290 Wh/mi vs iON evo AS 263 Wh/mi, Model 3 2023, 235/40 R19, respective 96Y/96W | [Tire Rack 2024 Test 1](https://www.tirerack.com/tires/tests/are-ev-specific-tires-better-than-popular-non-ev-tires?ttid=327) | VERIFIED retailer-run test; not Summer iON evo |
| Converted energy 18.02 / 16.34 kWh per 100 km; relative difference 10.3% | Values above, divide Wh/mi by 16.09344; (290/263−1)×100 | CALCULATION; not a universal range penalty |
| EU label measures external rolling noise, not cabin noise | [European Commission](https://energy-efficient-products.ec.europa.eu/product-list/tyres_en) | VERIFIED |

## Image provenance and remaining permission checks

The six new assets are under `public/images/editorial/ev-tyres/`, for local draft review only. Public access, a press-download button or attribution alone does not establish a reuse licence. Do not upload the pending assets to a public repository or deployment before this is resolved.

| Asset | Source and exact model | Rights status / Label |
|---|---|---|
| `michelin-eprimacy.webp` | [Michelin Thailand e.Primacy](https://www.michelin.co.th/auto/tyres/michelin-e-primacy), product image 205/55 R16 91V | PENDING permission for republication |
| `michelin-ev.webp` | [Michelin Thailand Pilot Sport EV](https://www.michelin.co.th/auto/tyres/michelin-pilot-sport-ev), 255/40 R20 101W XL T0 Acoustic | PENDING permission for republication |
| `michelin-ps4s.webp` | [Michelin Thailand PS4S](https://www.michelin.co.th/auto/tyres/michelin-pilot-sport-4-s), 255/35 ZR19 (96Y) XL | PENDING permission for republication |
| `hankook-ion-evo.jpg` | [Hankook press asset](https://www.hankooktire-mediacenter.com/fileadmin/user_upload_DL/MediaCenter/pressreleases/2025/03/20250331_iON_evo/img/iON_evo_Key_Visual_01.jpg) | Editorial use supported by [Media Center notice](https://www.hankooktire-mediacenter.com/fr/footer/mentions-legales/?flt=2); credit Hankook Tire; not advertising or a Thai road image |
| `continental-ecocontact-7.jpg` | [Continental press release](https://www.continental.com/en/press/press-releases/20250205-ecocontact7/), pictured 7 S and 7 together | PENDING: [general legal notice](https://www.continental.com/en/general/legal-notice/) does not establish this asset's reuse permission |
| `pirelli-p-zero-e.jpg` | [Pirelli press asset](https://tyre24.pirelli.com/pressRelease/images/PZero_E_20in_3_4.jpg) | PENDING: [legal terms](https://corporate.pirelli.com/corporate/en-ww/legal-information) require permission beyond personal extracts |

The user's requested cover was not attached or otherwise located. The existing licensed Tesla illustration is retained temporarily in the local cover/OG reference; this is NOT fulfillment of the cover request. Replace this one shared image reference, dimensions, alt and the two visible captions when the actual file is supplied. Preserve its aspect ratio unless the user asks for a crop. No generated substitute was created.

## Checks performed

- `npm ci --ignore-scripts`: existing lockfile, no dependency upgrade. Replaced a task-created dependency junction with a real installation because Turbopack rejected the junction outside its root. Installation reported four existing high-severity dependency advisories; no unrelated upgrade attempted.
- `npm run build`: PASS, including 85 image references, 11 content-link tests, TypeScript/Next build and strict built-content audit of 31 pages / 1,893 links. Zero audit findings. Last run includes the mobile overflow correction.
- ESLint on all changed TypeScript/TSX files: PASS.
- `git diff --check`: PASS.
- `.env.production.local` and `.vercel/project.json` confirmed ignored; no secrets printed.
- Local production server: `http://127.0.0.1:3091/articles/ev-tyre-and-coilover-selection-guide`.
- Browser review: entire tyre article text/captions/images read in sequence at desktop 1440×960 and mobile 390×844. Seven images including temporary cover loaded. Single H1. Desktop no overflow or console errors. Mobile overflow found and fixed, then rebuilt/reloaded: document width 382 within viewport 390. Both comparison tables intentionally scroll internally.
- Screenshots stored locally in ignored `scratch/ev-tyres/desktop-*.png`, `mobile-*.png`. Initial mobile screenshots precede the CSS containment correction; `mobile-table-right.png` is after correction. These are local-draft evidence, not live production screenshots.
- Catalogue card checked after correcting the legacy image override at 1440×960 and 390×844: new title, excerpt, date, image and credit agree. External Tire Rack link click opened a new tab while preserving the article; comparison TOC link stayed in the article. Local HTTP check confirmed canonical, OG/Twitter parity, Article schema, every local fragment and energy calculations. Cover metadata still intentionally refers to the temporary old image.

### Completed affected-content reader review (v1.1)

Read the homepage and all eleven incoming articles in rendered order, on desktop 1440×960 and mobile 390×844, including their existing text, pictures, captions, tables, related links and references. Reviewed expanded explanatory sections/FAQs in the brake and damper articles and exercised the existing brake-energy slider, nine score explanations and four damper-diagram modes. The mobile pass included expanded FAQs and the damper 3-Way diagram. This is a presentation/regression review; it does not independently revalidate every historical factual claim or existing image licence in those otherwise unchanged articles.

| Page | Evidence prefix in ignored `scratch/ev-tyres/` | Label |
|---|---|---|
| Homepage | `home-desktop-*`, `home-mobile-*` | VERIFIED rendered review |
| `deepal-s05-review` | `deepal-desktop-*`, `deepal-mobile-*` | VERIFIED rendered review |
| `geely-ex2-review` | `ex2-desktop-*`, `ex2-mobile-*` | VERIFIED rendered review |
| `mg4-electric-review` | `mg4-desktop-*`, `mg4-mobile-*` | VERIFIED rendered review |
| `tesla-model-3-highland-review` | `tesla-desktop-*`, `tesla-mobile-*` | VERIFIED rendered review |
| `zeekr-7x-2026-review` | `zeekr-desktop-*`, `zeekr-mobile-*` | VERIFIED rendered review |
| `hybrid-to-ev-chassis-dynamics-transition` | `hybrid-desktop-*`, `hybrid-mobile-*` | VERIFIED rendered review |
| `optimizing-ev-suspension-thai-roads` | `thai-roads-desktop-*`, `thai-roads-mobile-*` | VERIFIED rendered review |
| `shock-absorber-types-monotube-twintube-air-ev` | `shock-types-desktop-*`, `shock-types-mobile-*` | VERIFIED rendered review |
| `ev-suspension-tuning-guide` | `suspension-desktop-*`, `suspension-mobile-*` | VERIFIED rendered review |
| `ev-carbon-ceramic-brakes-guide` | `brakes-desktop-*`, `brakes-mobile-*` | VERIFIED rendered review |
| `ev-damper-tuning-bump-rebound-guide` | `damper-desktop-*`, `damper-mobile-*` | VERIFIED rendered review |

No additional regression from the link/topic changes was found. Horizontal vehicle tables were scrolled to inspect their remaining columns; the long brake and damper tables render as mobile cards. Explicit mobile DOM checks for the suspension, brake and damper articles returned document width 382 within viewport 390, with zero broken images. The brake-energy example changed from 0.85 MJ at 100 km/h to 1.03 MJ at 110 km/h and was restored to 100 km/h. No application code was edited during these checks, so the already passing build was not repeated.

### Follow-up permission search (v1.1)

- Michelin's media landing page and its terms destination did not provide a verified licence for the three selected product assets.
- Continental's media library did not establish permission for the EcoContact 7 / 7 S image. An editorial-use allowance on a historical anniversary-image page is specific to the images on that page and was not applied to this tyre image.
- Pirelli's press media library points to the general legal terms already recorded above; this did not resolve republication permission.
- Rights status remains one supported editorial asset (Hankook) and five pending assets. No messages, public uploads, commits, pushes or deployments were made.

## Remaining release work

1. Obtain the user-selected cover file or its exact URL/path; update cover, OG, Twitter and card together, with accurate caption/rights.
2. Obtain exact republication permission for the five pending product images, or replace them with licensed real images of the exact same models. No permission-request messages were sent.
3. Reread the final tyre article and catalogue card after the approved final assets/captions are installed. The homepage and all eleven incoming-article full rendered reviews are now complete; repeat their review only if subsequent changes affect them.
4. Recheck current production target/base so a new deployment does not replace newer unrelated changes. Run relevant final checks; deploy to the verified existing Vercel project, then verify READY aliases, exact live route/assets/OG, mobile/desktop, sitemap and link behavior. Do not equate the local build with production success.
