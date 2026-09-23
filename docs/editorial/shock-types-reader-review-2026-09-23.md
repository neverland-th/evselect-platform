# Shock types: final local reader review — 23 September 2026

Route: `http://127.0.0.1:3117/articles/shock-absorber-types-monotube-twintube-air-ev`. Checkout: `releases/evselect-coilover-skyscraper-2026-09-19`, draft based on `9190917`. Not pushed or deployed. This record covers this article and its changed catalogue card, not the complete catalogue or whole-site release.

## Reader-facing corrections

- Replaced the architecture-as-ranking opening with a concrete rough-ride/oscillation question. The opening promises three distinctions the body actually explains: construction, damping control and spring type. It ends with five useful questions to take to an installer.
- Removed fabricated laboratory attribution, the 9.5 catalogue score, universal piston/gas-pressure figures, zero-cavitation/100%-rebuild claims, +200% stiffness, unmeasured Thai-road damper temperatures/fade and cooling multipliers. Removed generic manufacturer fitment lists and universal click-count prescriptions.
- Replaced the misleading comparison/ranking graphics with two original labelled schematics. They identify working chamber, piston, base valve or gas separator; the text explicitly states they are conceptual and not production dimensions or measured performance.
- Separated electronic damping from air springs. KW's own V3 example demonstrates why twin-tube is not automatically a budget tier. BILSTEIN's inverted-strut explanation is scoped to its construction discussion, not all Thai SUVs.
- Verified ZEEKR's current Thai page and linked August 2025 brochure. Visually inspected the full specification page (PDF page index 2 / printed page 3): air suspension with CCD is marked only for Performance AWD, not the two RWD columns; 2,535 kg and 475 kW / 637 horsepower belong to that trim. Did not infer supplier, dual-chamber construction or MagneRide from the word CCD.
- Added contextual same-tab links to tyre/coilover selection, Bump/Rebound and alignment at the passages where each helps. Visible site-brand text links home. Exact primary sources and separate photo/licence credits open in new tabs in markup.
- Unified article, catalogue and metadata title/description through `src/lib/shock-types-article.ts`; maintained the existing URL and a specific sitemap modification date. Fixed the observed splitting of the Thai word ถุงลม in the H1 and card title.

## Complete final rendered reading

Used the actual Codex In-app Browser, with the development server confirmed live as session 5339. Read all article text in order at normal scale after the final article edit: opening, date/byline, the three questions, both diagram labels and paragraphs, both photo captions/credits, inverted/reservoir discussion, all three electronic/air cards, Thai example, five buying questions, limits, every reference, prelaunch notice and shared header/footer. No FAQ, data table or interactive graph remains on this page.

- Desktop: 1280 × 720 CSS viewport; document height 6,086 px. Overlapping views at approximately y=0, 540, 1080, 1620, 2160, 2701, 3240, 3781, 4321, 4861, 5366. The two diagrams sit side by side, with legible labels; the gas-damper photo stays a modest portrait, and the ZEEKR photo preserves its full ratio. No horizontal overflow. One H1. Browser error/warning log was empty for the inspected article.
- Mobile: 390 × 720, device scale 2; document height 9,153 px. Overlapping views at y=0, 504, 1008, 1512, 2016, 2520, 3025, 3528, 4033, 4536, 5041, 5545, 6049, 6553, 7057, 7561, 8065, 8433. All text, links and captions were read, including the final footer. Diagrams stack without shrinking their labels to illegibility. `scrollWidth=390`; one H1. All five image elements (including site logos) loaded. The in-app CDP screenshot surface repeats a strip below the main viewport; the document measurements and sequential reading were not interpreted as a duplicate site header. The temporary mobile override was cleared.
- Catalogue: `/articles?category=suspension`; read the complete affected shock-types card in both views after the last card edit, including the image, provenance, label, title, displayed excerpt, two displayed highlights, compatibility note, date and CTA. Image uses `contain`, preserves the vehicle and explicitly does not verify Thai trim. The ordinary card excerpt remains intentionally line-clamped. Other cards in that view were not certified by this focused pass.

First-time-reader assessment: the question now starts with an observable driving concern. Technical terms are introduced by their role and a diagram or specific manufacturer example. The article gives a reason to continue to the adjustment/tyre/alignment articles without reproducing their graphs or promising universal settings. Source limitations and prelaunch status are visible without implying a laboratory or a shop with stock.

## Individual imagery and provenance

- `gas-damper-photo.jpg`: 400 × 525, white Pro Comp ES9000 on blue background, full rod/body/mounts visible. Commons credits TEy~commonswiki as assumed author based on copyright claims; the page grants CC BY-SA 3.0. Public caption qualifies the archive credit and identifies the 2006 image. It is not presented as an EV-fit product or as a cutaway.
- `zeekr-7x-photo.jpg`: 1920 × 1440 local derivative of JustAnotherCarDesigner's own-work photograph, 10 April 2025, CC0 1.0. Grey 7X front three-quarter view. No claim that its market or trim is the Thai Performance AWD. Full ratio in article; contained full image under the existing card overlays.
- Two original inline SVG illustrations are not adapted vendor drawings. Individually inspected labels, directions and placement on both views.

## Evidence and navigation limits

Primary pages checked: [KYB FAQ](https://kyb.com.au/faqs/), [KW damping systems](https://www.kwsuspensions.com/uk/technology/damping-technology), [BILSTEIN workshop explanation](https://workshop.bilstein.com/en-us/shock-absorber-failure-analysis-approaches/), [ZF CDC](https://www.zf.com/products/en/cars/products_64273.html), [official BWI MagneRide site](https://www.magneride.com/), [Monroe Air Springs](https://www.monroe.com/en-eu/products/light-vehicles/springs/air-springs.html), [ZEEKR Thai page](https://www.zeekrlife.com/en-th/models/7x) and its [brochure](https://www.datocms-assets.com/142974/1756887361-7x-brochure-aug2025-correct.pdf). A BWI news URL timed out on follow-up; the final article uses the successfully opened official MagneRide site instead.

All three contextual internal destinations were actually opened by keyboard Enter on the mobile view and their URL/H1 observed. The initial fast navigation loop raced a back transition; the damper and alignment actions were repeated sequentially with navigation completion and confirmed. The catalogue title also opened this article in the same tab. Do not describe keyboard activation as touch testing. Activating the KYB external link did not expose a new tab to the in-app inventory; new-tab completion is not claimed. Correct target/rel attributes were inspected and the primary destination itself was independently opened with the web tool.

Changed-file ESLint and TypeScript pass. The 73-image verifier passes. The refreshed 31-route HTTP link inventory and 42-view heading inventory (11 catalogue filters) have no reported route/fragment, brand-home, tab-policy, nested-anchor or heading errors. These technical checks do not certify the remaining pages' reader quality. No production build/deployment was performed in this review.

Final inspected content SHA-256:

- Article: `36dcc5f203e4517224d782de710fd0f7b35f87e54f512f39742a77cd7cd80419`
- Data: `46fa362399d281c8096e52e9850e80130d9c2480fc895915958de7a6124fa42b`
- Catalogue: `68c9683dbe137461a4a34810b87ae4e06bb2efc3dbb6ce327676af88af85bec0`
- Damper photo: `cc7ae518959e15a5aead1274300ced380a5f825627bb4becd8eac81ef448db1b`
- ZEEKR photo: `fc5cb0c0fc5dcf83ffc1056576f22818cc85a630a05613d9a09d0e4382b20fe7`

Whole goal remains active. Eleven other newly brand-linked routes, complete catalogue review, open source/image questions elsewhere, production release and live verification remain outstanding. The next Thai-road article has an unrelated supercar catalogue photo and unsupported universal 45 mm / 135–140 mm rules; it requires its own correction and reader review.
