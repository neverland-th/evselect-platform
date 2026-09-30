# Home infographic — local preview, 2026-09-30

## Implemented

- Added `EvUpgradeInfographic` within the existing `#ev-accessories` section, ahead of the unchanged suspension and tyre photo cards.
- Three numbered vehicle callouts correspond to interior accessories, wheels/tyres and suspension, with meaningful Thai reading links. Internal links remain in the same tab.
- Retained original Home metadata, one H1, existing section IDs, six FAQs, photos and manufacturer-image rights caveats.
- Original generic EV schematic: `public/images/infographics/ev-upgrade-car.svg`. No manufacturer branding, external images, product specifications or universal fitment claim.
- Thai content is server-rendered HTML. The schematic is decorative; the ordered HTML legend conveys the same information to screen readers and without the graphic. No new client component, dependency, carousel or animation.
- Editable SVG handoff: `docs/design/ev-upgrade-infographic-desktop.svg`. Text remains SVG text using Prompt rather than rasterized Thai copy.

## Figma limitation

- Authenticated and created a draft Design file, key `CMxRAPs8EGrcbMrp5ijkIz`, titled `EVSELECTS — เริ่มแต่งรถ EV Infographic`.
- Read-only canvas/font inspection succeeded.
- Composition was rejected with: `You've reached the Figma MCP tool call limit on the Starter plan.` No completed infographic was written to that canvas. Do not describe the blank file as a completed Figma design.
- Continued with the local implementation and importable SVG. SVG XML is valid; actual import into Figma was not verified because of the quota limit.

## Verified

- `npm run build`: passed, including TypeScript, image checks, 11 link-policy tests, four image-metadata tests, strict 32-page contextual-link/sitemap audit with no findings, and 28 page/filter attribution variants.
- Targeted ESLint on the component, Home and Home tests: passed.
- Built-server Home tests: 6/6 passed, including readable infographic HTML, three destinations, preserved metadata/content and same-tab link policy.
- Diagram: HTTP 200, SVG content type, below 5 KB, no scripts or third-party image dependencies.
- Actual browser review: desktop 1440×1000 and mobile 390×1000. All three paths, diagram, checklist and surrounding existing cards read. No horizontal overflow within the infographic at either viewport.
- Keyboard activation of all three paths: interior examples at `#tesla-accessories`, tyre guide, and damper guide at `#symptoms`. Target sections visible. No browser error/warning logs in the final check.
- Browser Back from the tyre guide changed the URL before the article DOM restored; refreshed Home before the next check. No claim that Back behavior was repaired.
- Proof images: `scratch/home-infographic-desktop.png`, `scratch/home-infographic-mobile.png`.

## Delivery status

- Local preview: `http://127.0.0.1:4359/#ev-upgrade-map`.
- Not deployed, committed, pushed or merged. No database, domain, analytics or cloud-access changes.
- Existing manufacturer-photo publication rights remain pending; the original schematic does not resolve those unrelated rights gates.
