# ZEEKR X final draft reader review — 23 September 2026

Local route: `http://127.0.0.1:3117/articles/zeekr-x-review`. This record does not claim deployment or a live-production pass.

## Corrections and reader purpose

The original rendered page claimed a 9.0 score, Bangkok/Pattaya road testing, 3.72 s acceleration, 2.35 s overtaking, 64.8 dB(A), braking performance and comparative superiority without an established test report. Removed those claims and Review/Rating schema, stale promotion prices, unverified equipment assertions and related cards that repeated old road-test promises. Replaced them with an Article guide to choosing Thai Standard RWD versus Flagship AWD. Five contextual body links explain why readers would continue: power/torque, larger ZEEKR 7X, tyres/suspension, Carbon Ceramic and battery/charging.

Opening now addresses whether to upgrade to Flagship and promises specific showroom checks. The table separates trim equipment; the body connects it to actual occupants, luggage, roads and home charging. Pre-launch status remains explicit. No claimed first-hand driving experience, score or universal fitment endorsement.

## Primary-source checks

- Opened the actual manufacturer page in Codex Browser: https://www.zeekrlife.com/en-th/models/x . Its two-trim table supports Standard 335 hp / 5.6 s / 450 km NEDC / 19-inch, Flagship 489 hp / 3.7 s / 470 km NEDC / 20-inch, and 4432 × 1836 × 1566 mm / 2750 mm wheelbase. Other sections contain 479 km, 540 km and incompatible motor details; these were not silently merged. The article explicitly explains the range discrepancy and uses the trim table plus Thai brochure.
- Followed the brochure URL exposed by that page: https://www.datocms-assets.com/142974/1783065261-the-new-zeekr-x-brochure-july-2026.pdf . Saved research copy `scratch/zeekr-x-th-july-2026.pdf`; six pages are raster-based. Rendered and visually inspected all six individually, with full specification tables on pp.4–5. Confirmed 250/365 kW, 335/489 hp, 373/573 Nm, 61 kWh LFP / 66 kWh NCM, AC 11/22 kW, 235/50 R19 versus 245/45 R20, five seats, dimensions, shared ventilated front seats / 14.6-inch screen / Yamaha 13, and Flagship electric front doors / B-pillar screen / AR HUD 24.3-inch. Did not invent DC 10–80% time. Warranty/promotion copy is not asserted as an unconditional current offer.
- Manufacturer test-drive link comes from its rendered page; no form was submitted.

## Image provenance and individual inspection

- Published local asset: `public/images/reviews/zeekr-x-flagship-thailand-2024.jpg`, 1280 × 720, native Commons thumbnail.
- File record: https://commons.wikimedia.org/wiki/File:2024_Zeekr_X_Flagship_AWD.jpg . Chanokchon, own work, 20 July 2024, Central Festival Eastville, Bangkok, Thailand. CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/ . Original file record, date, author, location and licence read.
- Source thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/2024_Zeekr_X_Flagship_AWD.jpg/1280px-2024_Zeekr_X_Flagship_AWD.jpg . Individually opened the saved photograph; real white display vehicle, full front/side silhouette and both visible wheels, ZEEKR X plate. No image editing or relabeling as a 2026 test car.
- Article caption explicitly identifies the 2024 display car rather than the 2026 brochure version. Catalogue repeats the date/market/credit/licence and uses contain sizing. The final photograph and caption were read in both viewport sizes.

## Complete rendered review and navigation

- Desktop 1280 × 720, content client width 1272: read the complete final page from navigation/opening to footer in overlapping 540 px steps. Height 4462, final y 3742.58. Read all eight table rows, both trim columns, source qualification, all five sections and pre-launch box. One H1.
- Mobile 390 × 720, DPR 2: read complete final page in overlapping 504 px steps, including caption/licence and entire footer. Height 6276; viewport and document width both 390. The eight-row table is horizontally contained at 620 px; explicitly scrolled right to read every Flagship cell, then returned left. All text and links wrapped without document-wide overflow. Browser capture sometimes repeats a compositor strip; overlapping screenshots covered actual content.
- Read complete changed catalogue card on desktop and mobile: image/crop, licence, brand/segment, untruncated title and short excerpt, two highlights, fitment note, date and CTA. Clicked its title and confirmed this exact article/H1.
- Clicked each of the five contextual body links in the rendered page; each navigated in the same tab to the expected article URL and H1. Browser back returned to X. External sources use new-tab accessible notice and `noopener noreferrer`.
- No FAQ, chart or rating interaction remains in this replacement. Shared menu and broader production interaction gates are separate. Temporary mobile metrics reset. No content edits followed this complete reader pass.

## Version evidence and validation

- Article SHA-256: `09d4ae5cebbb9ab1588a669d584bd13dc2bce549661c2f120e439d354cbc91db`.
- Shared metadata SHA-256: `65ac6522acc3e4b9657981d044928676004806dcc3b2d9ccd65ba2b1d5ec0028`.
- Photograph SHA-256: `0cf17358fab9678358e9bac3a6921bf0abda776a4bdaebed5c7b6f346b4d25ca`.
- TypeScript, changed-file ESLint, image verifier (82 references), 31-route link audit and 42-view heading audit including 11 catalogue filters passed. `git diff --check` passed. These supplement the actual reading; they do not replace it or establish production status.
- All fourteen legacy routes now have individual final draft reader records. Full catalogue/source/release/live gates remain outstanding. No push, deployment or social publication in this change.
