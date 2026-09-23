# BYD Atto 3 — complete local reader review, 23 September 2026

Status: final local article and affected catalogue card reviewed; not pushed or deployed. Base commit `ab99c4d`, in `releases/evselect-coilover-skyscraper-2026-09-19`. The previous goal continuation made progress by completing the Hybrid-to-EV review; this continuation makes progress by replacing the unsupported Atto 3 content and reviewing its final rendered version. The full goal remains open.

## Reader problem and corrections

The old article mixed older trims/prices with a 2026 buying promise and claimed road-test authority without a supporting report. Removed the 8.8 score, supposed 7.32-second acceleration/4.85-second overtaking/66.5 dBA/37.8-metre braking measurements, invented route/range/consumption figures, universal Blade Battery durability/fire assurances, flood-safety inference from ground clearance and unverified warranty/market-leading claims. Replaced Review JSON-LD with Article. Old unsupported accessory claims and mismatched related-card copy were removed.

The new opening answers a first-time reader's decision: both Thai MY2026 trims have the same rated motor power, so what does the larger battery buy for their own travel and charging pattern? Six sections move through the trim table, charging plan, cabin checks, ride/tyres, price/warranty documents and three questions before buying. Manufacturer figures, editorial reasoning and unavailable data are visibly distinct. No current per-trim transaction price or warranty package is asserted without matching terms. The article/card retain the pre-launch posture and no ordering/payment offer.

## Primary evidence actually inspected

- Thai MY2026 brochure: https://www.reverautomotive.com/media/models/new-atto3/brochure/bydatto3_MY2026.pdf . Downloaded 5,919,896-byte PDF; all four pages rendered with pypdfium2 and visually read. Page 4 establishes Premium/Extended, 50.25/60.48 kWh, 410/480 km NEDC, 150 kW and 310 Nm, front-wheel drive, 7.9/7.3 s, AC 7 kW, DC 70/88 kW, curb weight 1,680/1,750 kg and 235/50 R18. Its equipment columns support the shared seating, screen, sunroof, suspension and assistance features used. Pages 2–3 also show the relevant equipment and RHD Thai cabin. Brochure range caveat read. PDF SHA256 `c033e183de5c91add20e0ee882e1b7a4439063730d9480feeb571b4d85dfb8c6`.
- Model page: https://www.reverautomotive.com/model/newatto3/overview . Read in the preceding source-investigation step; a follow-up web fetch timed out, so no newly confirmed per-trim current price is claimed. This article uses the explicitly named MY2026 brochure for its table and links the model page for readers to check current offers. Website ground-clearance labels differed from the brochure; no numerical wading-depth inference is retained.
- The 10.23-kWh and 70-km differences are arithmetic from the two brochure columns, explicitly not a promise of added real-world driving distance.

## Every photograph

1. Exterior: https://commons.wikimedia.org/wiki/File:2024_BYD_Atto_3_Extended.jpg . Chanokchon, own work, 29 March 2024, Impact Challenger Hall, Muang Thong Thani, Nonthaburi, Thailand; CC BY-SA 4.0. Original individually opened and inspected: black Atto 3 Extended, front three-quarter view, show floor; branding and wheels visible. Final 1280 × 720 thumbnail downloaded directly from the file page's Wikimedia thumbnail link, without local image editing. Article caption and catalogue credit state 2024, not MY2026 equipment proof. Article retains the full frame; card crop keeps the vehicle identifiable.
2. Interior: https://commons.wikimedia.org/wiki/File:BYD_Atto_3_Premium_interior.jpg . Ethan Llamas, own work, 6 December 2025, CC BY-SA 4.0. Original individually inspected: left-hand-drive dashboard, central display, vents and console; people outside the display car are incidental. Final 1280 × 853 Wikimedia thumbnail downloaded from its file page. Caption explicitly identifies LHD and 2025, while Thai cars are RHD; it illustrates layout, not MY2026 Thai equipment. No country inferred from the photograph. Both final figure placements and complete captions/author/licence links inspected on desktop/mobile.

Licences link to https://creativecommons.org/licenses/by-sa/4.0/ . Both thumbnails retain source attribution and the thumbnail disclosure. No generated substitute or manufacturer photograph of uncertain reuse rights was added.

## Rendered review actually completed

URL: http://127.0.0.1:3117/articles/byd-atto-3-review . Codex In-app Browser, final article after all article edits. Read every line from the pre-launch banner and heading through all paragraphs, every table cell, both photographs/captions, source links, buying questions, aside and complete shared footer. No hidden chart, FAQ, disclosure or other article interaction remains in this version.

- Desktop viewport approximately 1280 × 720 (document client width 1272); overlapping scrolls of about 540 CSS px, from top to footer. Document height 5733; one H1; no horizontal overflow. Both table columns stay together and source/reading links are visually distinct. The opening makes a specific buying promise without pretending to be a road test. Paragraphs explain how a figure changes a decision rather than just repeating specifications.
- Mobile 390 × 720, DPR 2; top to document end, overlapping about 504-CSS-pixel scrolls. Final recorded document height 7950, scrollY approximately 7230, scrollWidth 390 and one H1. Read all rows/columns without horizontal scrolling, both full images and all credit lines, the full charging/warranty advice, three buying questions and footer. No page overflow. A repeated bottom strip in the IAB screenshot compositor was covered by overlapping views; it was not treated as duplicated page content. Temporary emulation cleared afterward.
- Clicked all four contextual links from the actual article, confirmed destination URL and visible main heading in the same tab: power/torque, battery care, Thai-road suspension and tyre/coilover guide. Source/photo links use protected new tabs with accessible notices. Own-brand visible text links home. Public/live behavior still requires release verification.
- Catalogue http://127.0.0.1:3117/articles : full affected Atto 3 card read on desktop and mobile, image/crop, credit, category/date/time, complete heading, excerpt, key points, inspection prompt and CTA. Keyboard focus initially exposed clipping from `line-clamp-2`; removed that clamp for this specific card, reloaded and reread its complete final card in both views. Heading now displays three full lines with focus; excerpt intentionally uses the catalogue's three-line ellipsis on mobile. Clicked the final title and confirmed the new article heading/route. Other catalogue cards seen alongside it are not thereby certified.

## Verification and limits

TypeScript and changed-file ESLint passed; catalogue ESLint rerun after the scoped focus fix passed. Public-image verifier found 75 referenced files. Refreshed 31-route link inventory reports no missing route/fragment, tab-policy issue, nested anchor or unlinked/misdirected visible brand text. Refreshed 42-view heading inventory including 11 catalogue filters returned 200, one H1 per view, no empty heading or skipped content level. `git diff --check` passed before documentation additions; final check to run with commit. These checks complement, and do not replace, the reader review above.

Final content SHA256 before Git line-ending normalization:
- Article: `85cdd2e9b4ad0fc0e4c9a824b58817ae1186cafd462c062f2533e52d30944ef4`
- Shared data: `61f6a14d4475e3602d0416485f6eb6d722b6044720359c1181e011fcbadca2dc`
- Catalogue: `24b9c565d2b29bf150be3ea4fbe1b0126f7eee9f63c9e678e905773ae09392d5`
- Exterior: `b89250f63d56b56b92029d4b4ac31ce3b38063be8469dbdae052b2753e78c36f`
- Interior: `87acebf4d77e1fe6376903a5a67ff55405f3c7986f96b13a891fab90b82bf173`

Seven of fourteen legacy-route reader reviews now complete; seven remain (BYD Seal, Deepal S05/S07, Geely EX2, Tesla Model Y L, ZEEKR 009/X), plus complete catalogue/release/live gates. No push, deployment, Facebook post or group share occurred. The 33 pre-existing unstaged deletions remain untouched and outside this commit.
