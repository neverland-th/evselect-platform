# Hybrid to EV reader review — 23 September 2026

Status: **complete local final desktop/mobile article and affected-card review; not deployed**. Checkout `releases/evselect-coilover-skyscraper-2026-09-19`, branch `codex/brake-complete-kits-2026-09-19`, starting HEAD `1360448`.

## Reader problem and corrections

The original template conflated powertrain type with ride quality, asserted universal 50:50 weight distribution, millisecond response differences, rigidity/unsprung-weight percentages, fixed braking margins and various required accessories without supporting vehicle tests. Its numerical centre-of-gravity diagram was not established as measured data. The catalogue added an unsupported 9.4 rating and an apparent racing-engineering association.

Replaced this with a driver-focused explanation: distinguish accelerator response, regenerative braking and suspension symptoms before buying parts. Six sections explain HEV/PHEV/BEV, weight placement, accelerator modes, Regen and brake blending, ride symptoms, and five questions to take to a test drive. Manufacturer examples are explicitly scoped to their vehicle/document, not extrapolated to all EVs. No numerical tuning recipe, comparison laboratory, measured test score or automatic need to buy accessories remains. The article has no calculator, interactive graph, collapsed FAQ or data table requiring hidden-state review.

The card and Article metadata now share title, description, dates, photo and reading time through `src/lib/hybrid-ev-article.ts`; sitemap uses the same modification date. Removed the generic external catalogue image and fake score. Own-brand visible text links home; contextual links sit beside the questions they develop.

## Primary sources actually read during this review session

- https://afdc.energy.gov/vehicles/electric — HEV, PHEV and all-electric definitions. Only definitions are used; US incentives/range estimates are not imported into Thai buying advice.
- https://www.volkswagen-newsroom.com/en/the-new-id3-6240/drive-running-gear-and-safety-6246 — ID.3 document dated 2020: low battery placement between axles and approximately 50:50 distribution. Clearly scoped to that car/document, not current Thai availability or all BEVs.
- https://www.bosch-mobility.com/en/solutions/driving-safety/regenerative-braking-systems/ — energy recovery and interaction with friction braking; hardware portfolio includes different arrangements.
- https://www.bosch-mobility.com/en/solutions/driving-safety/integrated-power-brake/ — sensor input and pedal simulator in this specific architecture. Not proof that every hybrid/EV has the same decoupled hydraulic arrangement.
- https://www.tesla.com/ownersmanual/model3/en_th/GUID-3DFFB071-C0F6-474D-8A45-17BE1A006365.html — Model 3 Thailand-market manual: Regen may be limited with a cold/full battery; driver must remain ready to use the brake pedal. No universal SOC/temperature/speed threshold is inferred.
- https://www.tesla.com/ownersmanual/model3/en_th/GUID-8EAFF5D8-7209-45ED-A7E0-508FFA60C530.html — Chill limits acceleration for a gentler response; not a universal EV response-time measurement.
- https://www.tesla.com/ownersmanual/model3/en_th/GUID-94F63B13-EA2C-45D9-83AB-5DCA6295D587.html — vehicle tyre label and checking cold pressure. No universal pressure is prescribed.
- https://kyb.com.au/faqs/ — shock absorbers control suspension/vehicle movement and work with springs. Australian sales/warranty statements are not used as Thai fitment evidence.

## Every photograph inspected

1. `public/images/articles/ev-chassis-volkswagen-id3.jpg`, 1920 × 1198. Individually viewed original and final article/card placements. Museum chassis with four wheels, springs, battery between axles and orange cables. Exact creator record: https://commons.wikimedia.org/wiki/File:Volkswagen_ID.3_electric_car_chassis_DSC_0060_(52146930872).jpg — Bill Abbott, photograph 19 October 2021, CC BY-SA 2.0. The article retains full ratio without overlay/crop and identifies it as a display illustration, not a hybrid comparison or Thai specification proof. The catalogue uses contain with its standard badges, and has a visible author/licence/resize credit.
2. `public/images/articles/ev-power-inverter-toyota-bz4x.jpg`, 1920 × 1280. Individually viewed original and final desktop/mobile placement. Actual equipment bay, inverter cover, orange cables and low-voltage battery. Exact creator record: https://commons.wikimedia.org/wiki/File:Electric_motor_Toyota_bZ4X_Expo_2022_CRI_4894.jpg — Mariordo (Mario Roberto Durán Ortiz), ExpoMóvil Costa Rica, 11 March 2022, CC BY-SA 4.0. Caption follows the source's inverter-above-motor description and distinguishes the foreign display photo from a Thai specification or response test. Full ratio, no retouching or generated substitute.
3. Shared logos were inspected with the final header/footer. No image files were added, deleted or edited in this rewrite; existing licensed assets were reused.

## Complete final rendered reading

Article: http://127.0.0.1:3117/articles/hybrid-to-ev-chassis-dynamics-transition .

Desktop 1280 × 720: after the final article edits, read every rendered line top to footer at overlapping y≈0, 540, 1080, 1621, 2160, 2701, 3240, 3781, 4321, 4861 and 4916 (document height 5636). Included the three definitions, every source anchor/caption, both photos, five test-drive questions, pre-launch status and shared footer. Kept “คันเร่ง” together after initially observing an awkward break in the H1; replaced an unnatural definitions introduction before the complete final pass. No article edits followed that pass.

Mobile emulation 390 × 720, DPR 2: revalidated current URL and started from Home. Read all content in order in overlapping 0.7-page steps through the final footer, including both complete images/credits, all six sections and all five list items. Document height 7997; no horizontal page overflow and exactly one H1. The bottom compositor strip in in-app screenshots repeats part of the viewport; overlapping views were used rather than interpreting it as duplicate page content. This is emulated mobile reading, not a physical-device test.

First-time-reader assessment: opening starts with recognisable sensations instead of unexplained chassis metrics; definitions establish vocabulary; examples explain their own limits; practical questions give a reason to continue; source links support the adjacent claims. The ending gives actions for comparing cars and preserves no-stock/no-order/no-payment transparency. It makes no invented ownership/test claim.

## Navigation and changed catalogue card

All five body links were activated in the rendered page and their same-tab destinations confirmed: tyre/coilover selection, horsepower/torque, Carbon Ceramic, Thai-road suspension and Bump/Rebound. Two batched navigation attempts timed out in the tool; their uncertain output was not counted as success. Subsequent individual actions confirmed each destination. The local dev process remained live and returned the routes normally; it was not restarted.

Affected grid card at http://127.0.0.1:3117/articles?category=suspension was read completely on desktop and mobile, including photo, badges, exact photo credit, brand, title, excerpt, two highlights, fitment note, date and CTA. Found and fixed a split “คันเร่ง” and keyboard-focused clipping of the long title; this card now displays its full title without the two-line clamp. Re-inspected the whole final card at both widths after that correction. The excerpt retains the existing intentional three-line ellipsis. Clicking its title opened the exact revised article. Adjacent cards/full catalogue are not approved by this focused inspection.

External links carry accessible new-tab wording, `_blank`, `noopener noreferrer`; actual primary destinations were read separately. No claim is made that all external new-tab UI behavior has been re-certified here. Device metrics were cleared after review; no browser-side DOM content patching was used.

## Validation and remaining release work

Changed-file ESLint and TypeScript: passed. Image verifier: 73 referenced public assets found. Refreshed link inventory: 31 routes, no missing main internal links, broken internal targets, brand-home issues, tab-policy findings or nested anchors. Heading inventory: 42 views including 11 real catalogue filters, one H1 each, no empty/skipped content headings. `git diff --check` passed (line-ending notices only). These checks supplement rather than replace the rendered reading above.

Six of the fourteen newly linked legacy routes now have complete reader reviews. Eight remain: BYD Atto 3, BYD Seal, Deepal S05/S07, Geely EX2, Tesla Model Y L, ZEEKR 009/X. Complete catalogue reading and the remaining source/release/live checks are still open. No push, deployment or social publication occurred here. Unrelated pre-existing image deletions remain unstaged.

Final reviewed SHA-256 before Git line-ending normalization:

- Article: `75ae6375a627a73abe5d6f163bc7e659f2ef2db4bed6a639381974eb5223a1dd`.
- Shared data: `0cbfa0c4daabb0950c8c479ffd5556584abfea2848e2e4ed39ee695c758e3b5d`.
- Catalogue: `d010dc8e743cdbef095af326ef1217fd0551a304da0ffccbda80a0e9478decc1`.
