# Horsepower and torque guide — rendered reader review

Status: reviewed local article draft; not pushed or deployed. Based on `4f1f4c6` on `codex/brake-complete-kits-2026-09-19`. This checkpoint does not clear the remaining whole-site publication gate.

## Exact scope and version

- Article: http://127.0.0.1:3117/articles/ev-horsepower-vs-torque-explained
- Catalogue card: http://127.0.0.1:3117/articles
- Actual Chrome profile Evselect.com, tab 306882993. Read the complete article in order at **1440 × 1000 CSS px desktop** and **390 × 844 CSS px mobile**, including both photographs, captions/credits, all examples and table cells, four expanded FAQs, six references, article footer and shared footer. Temporary viewport override was reset afterward.
- Article `page.tsx` SHA-256: `d19b9eb9b7f85396954ab42df67e4398f82d81c8b7f0655a2d9405213cc5619f`.
- Shared `src/lib/powertrain-article.ts` SHA-256: `9805e26e35d2f77256da4c49874c76b75478d045bc62c9d6ec9a2fed54ca6422`.
- Catalogue `page.tsx` SHA-256: `06e14d4dc3bad5b5f0bc19476580e3a66ffe4d7ee5ce9484780398765181bb83`. Only the affected powertrain card received a final desktop/mobile reader review here. The complete catalogue remains pending.

## Reader observations and changes

The old introduction and comparison material implied universal EV acceleration superiority, invented test provenance and unsupported universal operating values. Replaced these with a clear reader question: which figures help compare actual acceleration? The opening promises an explanation of power, torque, gearing and conditions, and the body follows that order.

The article separates physical principles, explicitly hypothetical calculations and manufacturer examples. It no longer presents an illustrative curve or made-up comparison table as a measured dyno result. Removed unsupported rpm, efficiency and accessory-performance claims. The A/B example has an H3 parent and two H4 children; all variables are explained. During reader review, clarified the meaning of rotational speed and field weakening and added mass to the explanation of acceleration. Reread the complete final article in both layouts after these edits.

The two hypothetical wheel-force results are approximately 8,382 N and 7,824 N from the stated torque, gear ratio, assumed efficiency and rolling radius. They are not actual car specifications. The 100 kW example gives 6,000/4,000/3,000 N at 60/90/120 km/h before resistance, and does not claim these are acceleration measurements. Zero mechanical power at zero shaft speed is explicitly distinguished from zero electrical consumption.

The Taycan example is identified as the 2019 launch drivetrain. Tesla links name the Thai Model 3 2024+ manual and show why charge, temperature, mode and conditions matter. Internal links lead readers naturally to tyres, suspension, the Thai Model 3 comparison and editorial policy. Visible EVSELECT mentions link home. Metadata and the catalogue card share the same title, description and cover; the old unsupported card score and lab label were removed.

## Images and layout inspected

1. Toyota bZ4X front compartment/inverter, Costa Rica exhibition, 2022, Mariordo, CC BY-SA 4.0. Inspected the whole photograph in both layouts. The caption identifies its actual location and subject; it is not called a Thai road test or a dyno test.
2. Tesla Model 3 Performance 2024, iMoD Official, CC BY 3.0. Inspected the whole vehicle and both visible wheels in desktop/mobile. Caption explicitly separates this actual model photograph from the hypothetical A/B calculation.

Both article images loaded in the final views. Captions and credits fit. On mobile, swiped the calculation table right to read its final column and back left to reread row labels; its overflow remained inside the table container. The final page-level horizontal overflow check was zero in both viewports. All four FAQs were opened and read, including keyboard activation. No browser error was captured in the final article check.

Read the affected catalogue card, its cover/crop, title, summary, highlights, comparison reminder, date and reading link in both layouts. The image subject remains identifiable. Mobile summary truncation is visible and the complete summary is available on the article; the full article title fits. Existing catalogue-wide taxonomy and the other cards are outside this completed card review.

## Source and navigation verification

Current source content was inspected on 2026-09-21:

- https://openstax.org/books/university-physics-volume-1/pages/10-8-work-and-power-for-rotational-motion — rotational power and its relation to torque.
- https://www.mathworks.com/help/mcb/gs/field-weakening-control.html — voltage/current constraints and reduced torque above base speed.
- https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/ — drag equation; power relationship is explained as a derivation with stated assumptions.
- https://newsroom.porsche.com/en/products/taycan/powertrain-18555.html — 2019 Taycan drivetrain example.
- https://www.tesla.com/ownersmanual/model3/th_th/GUID-80B80D48-E3A9-4857-864B-F4CC9B56FD7E.html — Thai 2024+ Model 3 status and limited power.
- https://www.tesla.com/ownersmanual/model3/th_th/GUID-8EAFF5D8-7209-45ED-A7E0-508FFA60C530.html — acceleration modes and conditions.
- https://commons.wikimedia.org/wiki/File:Electric_motor_Toyota_bZ4X_Expo_2022_CRI_4894.jpg — cover subject, place, date, author and licence.

Activated the internal Model 3 link in the same tab and verified its route and destination heading. Browser Back briefly retained the destination's rendered content after the URL returned; deliberately reloaded the draft and completed its final review afterward. Do not treat that history behavior as a clean automated navigation pass. The contents link reached `#wheel-force`. Activated the MathWorks reference: it opened a separate tab with the expected official Field-Weakening Control page while the draft remained open; closed the source tab afterward.

## Supporting checks and release limits

- Changed-file ESLint passed; `git diff --check` passed.
- Fresh heading inventory: all 31 local routes returned 200 with exactly one H1, no empty headings and no skipped descending main/article levels. This is structural evidence, not a whole-site reader or SEO certification.
- Fresh link inventory: no unknown internal target, missing target ID or nested anchor; all routes have main-content internal links. Powertrain has zero brand-home and tab-policy flags. Seventeen other routes still have brand-home flags and five earlier-reviewed pages have 114 tab-policy flags.
- **Latest build did not pass.** The image verifier stopped it because three still-referenced images were unexpectedly deleted from the working tree: MG4 hero and two ENDLESS owner images. Additional image/inspection deletions appeared concurrently. These deletions were not made or staged as part of this article change. User clarification is pending; no restoration or attribution to another task is claimed.
- No production deployment or full-site review completion is claimed.
