# Camber/alignment — corrected draft and complete reader review

Status: local draft based on `c595b90`, branch `codex/brake-complete-kits-2026-09-19`. No push, deployment, Facebook post, group submission or membership request is established by this record.

## Version and rendered reading

- Local article: `http://127.0.0.1:3117/articles/ev-camber-adjustment-wheel-alignment-guide`.
- Article SHA-256: `55577ec99a21d04766321f07b554551b78e233d0cb09f715da6293803bd7347a`.
- Shared data SHA-256: `d0cb38854eb58a255e150ab73b6805ba8a08766e865ee732873c7c34c64c5e1d`.
- Catalogue SHA-256: `fb1d85ddb708730417a2cb8de73f4756bbcbf28396ec3061fca517b06bf480d8`.
- Photograph SHA-256: `3c81da050ea31ad973cbdbde7b0794edc29c4cb49af50e5b1206c4364a20e39e`.
- Final reading started on 22 September and was completed before the 23 September heartbeat. Desktop: Codex In-app Browser at 1280 × 720 CSS px, document approximately 5772 px high. Read sequential overlapping screenshots from the opening through the final scroll position at approximately 5052 px. Read every paragraph, list, definition, source label, image caption, pre-launch panel and footer.
- Mobile: separate Codex tab at 390 × 720 CSS px, document 9027 px high. Read sequential views at approximately 0, 540, 1080, 1621, 2160, 2701, 3240, 3781, 4321, 4861, 5401, 5941, 6481, 7021, 7561, 8102 and 8307 through the footer. Every line and each of the three explanatory wheel diagrams was visually read. There are no hidden tables, accordions, calculators or rating controls in this replacement article.
- Article content did not change between these final desktop/mobile passes. The initial SVG title used multiple React children and caused a hydration error. Fixed it to one string, reloaded, and restarted the whole desktop reading before the final mobile pass. The final mobile console warning/error query returned an empty array. One malformed read-only measurement expression produced a tool-side SyntaxError; the corrected measurement succeeded and this is not an application error.
- Mobile DOM showed one H1, 390 px document/viewport width without horizontal overflow, all images complete and all three descriptive SVG titles present. Mobile screenshots used the tab CDP surface after two animation frames. The repeated strip outside the emulated viewport is the known compositor artifact, not a duplicate DOM header.

## Reader findings and corrections

The original opening assumed heavy EVs share one alignment problem, then quickly presented unexplained kinematics terminology. Its purported lab graphic, universal angle matrix, temperature thresholds and sales language could lead a new reader to buy adjustable arms or apply settings without identifying their car's actual fault.

The replacement starts with inner-shoulder tyre wear and the reader's decision before spending money. It separates Camber, Toe and Caster, explains why one wear pattern does not prove one cause, and gives six practical fields to read on a before/after alignment report. The 0.50° = 0°30′ example explains units only. It is not a setting recommendation.

Removed the unsupported 25–40% extra lateral-force claim, zero-camber maximum-braking assertion, instant grip-loss assertion, universal street/fast-road/track angles, 85% edge-pressure / 40% contact-loss / 100% uniform-contact graphic, invented EVSELECT Kinematics Simulation Laboratory, universal pyrometer thresholds, and claim that stock Tesla/BYD camber cannot be adjusted so aftermarket arms are mandatory. Removed unsupported 9.6 card scoring, fake lab/engineering branding and unverified product-stock implications.

The Tesla example is explicitly the English Australian 2024+ Model 3 service manual. It illustrates why trim and measurement conditions matter, and says the actual vehicle needs the appropriate VIN/trim/market manual. No Australian alignment angles or repair torque settings are copied as Thai-car instructions. The article distinguishes alignment from balancing and damper adjustment, leading readers to relevant Model 3, damper and tyre guides in context.

The closing three questions let a first-time reader ask a shop for evidence rather than choose a generic EV recipe. The pre-launch statement remains explicit: no goods available, orders or payment. The source scope says no team laboratory or individual-car test data is available.

## Each image inspected

The existing photograph is a black LADA Vesta Sport on an alignment lift with measuring targets attached to the wheels, photographed by Dmitry Racer on 23 August 2019. Its exact Commons file page declares own work and CC BY-SA 4.0. It is not an EV, a Thai-fitment demonstration or an EVSELECT workshop. The final article and catalogue captions now say this explicitly. The original 1624 × 875 ratio remains fully visible; no generated substitute or retouch was introduced.

The three new simple SVGs depict negative, zero and positive camber from the front. Each was inspected separately in the desktop row and stacked mobile layout. The dashed vertical reference and exaggerated tilt are visible. Their caption says they explain terminology and are neither to scale, recommended settings nor grip-simulation results.

The affected card was read completely on desktop and mobile at `/articles?category=suspension`, including the full image, source/licence, title, excerpt, two key points, fitment question, date and link. Credit anchors are outside the image link. Existing excerpt truncation is retained; no unsupported rating remains. This focused card review does not approve the other eight cards or the complete catalogue.

## Primary sources actually checked

Checked on 22 September 2026:

- [Pirelli wheel alignment guide](https://www.pirelli.ch/tyres/en-gb/car/driving-and-tyre-tips/maintenance/wheel-alignment): definitions, manufacturer specifications and checks after suspension replacement/major impact.
- [Michelin Thailand FAQ](https://en.michelin.co.th/auto/faq-cars): multiple causes of one-sided wear, tyre damage and vehicle-specified pressure.
- [Michelin Thailand alignment versus balancing](https://www.michelin.co.th/auto/advice/tyre-care/wheel-alignment-wheel-balancing): the two tasks are distinct.
- [Tesla 2024+ Model 3 alignment specifications](https://service.tesla.com/docs/Model3/ServiceManual/2024/en-au/air/GUID-0E6A27EF-310C-4287-809B-CAD939F95581.html): Performance versus Non-Performance, ballast conditions, individual toe and units.
- [Tesla alignment procedure](https://service.tesla.com/docs/Model3/ServiceManual/2024/en-au/air/GUID-E3666B22-8266-4699-8892-3BA9F885D764.html): correct machine profile/specifications, ride height, suspension condition, before/after record, no dedicated camber/caster adjusters but possible adjustment through connection clearance.
- [Exact photograph page](https://commons.wikimedia.org/wiki/File:LADA_Vesta_Sport,_Wheel_alignment.jpg): subject, creator, date, own work and [licence](https://creativecommons.org/licenses/by-sa/4.0/).

## Interaction and supporting validation

Activated all three contextual links using keyboard Enter on mobile and observed the intended same-tab Model 3, damper and tyre article URLs/titles. Returned after each. The final article-list link opened the suspension category. The source and licence links have their exact external destinations and new-tab announcements; external content was checked separately. Native external-tab completion is not claimed.

Four-file ESLint, TypeScript and 73 referenced public images passed on 23 September. The first HTTP audit attempt failed because the prior development process had stopped; the old process handle was confirmed missing before restarting it. After the server reported Ready, the 31-route link audit and 42-view heading audit (11 catalogue filters) passed without route/fragment, brand-home, tab-policy, nested-anchor, H1-count, empty-heading or skipped-level findings. See the dated JSON reports. These checks supplement rather than replace the reader review.

Fresh production opening on 23 September still shows the original article, universal alignment matrix and claimed laboratory graphic. It is not this corrected draft. The scheduled camber Facebook round therefore remains unsubmitted. Twelve other newly brand-linked routes, complete catalogue reading, outstanding image reuse evidence elsewhere, production build/release and live verification remain open. The whole-site goal is not complete.
