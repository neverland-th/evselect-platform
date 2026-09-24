# EVSELECT contextual-link audit — current draft, 23 September 2026

Update, 24 September: use `contextual-link-review-2026-09-24.md` for the current strict 31-page audit, production reconciliation and desktop reader review. The catalogue now has an inline link to the suspension overview, and the brake symptom section has explicit tyre/damper links. Renewed mobile review remains incomplete; neither this map nor the technical checks authorize a publication bypass.

This is the current completion map, superseding the remaining-route counts in the chronological 21–22 September worklogs. It does not claim a production release. Checked against local production-mode build based on `0273eef`, with the brake-photo changes recorded in `brake-photo-update-2026-09-23.md`.

## Scope and evidence

The actual route allowlist contains 24 published editorial routes (home, catalogue and 22 articles), plus six noindex supporting pages. The public standalone damper setup log makes **31 pages**. Protected product, CMS, export and API surfaces are not public editorial pages and are excluded. Catalogue filters add eleven observed views to the heading inventory, making **42 views**.

`link-inventory-2026-09-23.json` was refreshed against `http://127.0.0.1:3117` after the latest brake edit. All 31 pages have main-content internal links. There are zero unavailable routes, missing internal route/fragment targets, unlinked or misdirected visible brand text occurrences, tab-policy violations or nested anchors. The checker excludes global navigation from the main-content count, but includes related cards; the relevance map below is therefore a separate editorial assessment.

`heading-audit-2026-09-23.json` was refreshed against the same local server with all catalogue filters. Every view returned 200, had exactly one H1, no empty heading and no skipped descending content level. This is markup evidence; interactive/browser reading is recorded in the individual reader-review documents. An earlier invocation accidentally used the checker's public-host default and encountered a filter 403; it is not the local result and does not establish a site outage.

`metadata-audit-2026-09-23.json` adds a separate local HTTP check at 14:03:59 UTC. Parsed sitemap XML has exactly the 24 published route URLs, no duplicates and the current 23 September brake modification date. All 30 published/supporting app routes return their intended canonical URL and correct index/noindex metadata. The six pending supporting pages are excluded from the sitemap. The robots file allows public crawling, lists its intended route exclusions and points to the canonical sitemap. This does not establish production availability, Google indexing or reader quality.

## Contextual reading paths

Each article has links that continue its subject, rather than relying on the shared footer. The route names below are exact article slugs under `/articles/`.

| Page | Relevant next reading | Why it helps the reader |
|---|---|---|
| `byd-atto-3-review` | horsepower/torque, battery care, Thai-road suspension, tyre/coilover guide | Connect specifications to charging and the vehicle's everyday tyre/ride decisions. |
| `byd-seal-review` | horsepower/torque, battery care, shock types, tyre/coilover guide, Model 3 | Explain drivetrain figures, suspension differences and a comparable Thai-market sedan. |
| `deepal-s05-review` | horsepower/torque, battery care, tyre/coilover guide, hybrid-to-EV | Support the BEV/REEV choice and the change in driving/charging habits. |
| `deepal-s07-review` | battery care, Thai-road suspension, tyre/coilover guide, S05 | Turn range/ride questions into practical follow-up and a related model comparison. |
| `ev-battery-care` | Model 3, tyre/coilover guide, editorial policy, contact | Inline links scope Tesla examples and tyre decisions; related cards reinforce those paths. |
| `ev-camber-adjustment-wheel-alignment-guide` | Model 3, damper guide, tyre/coilover guide | Separate model-specific data, damping and tyre choice from alignment measurements. |
| `ev-carbon-ceramic-brakes-guide` | Model 3, tyre/coilover guide, damper guide; shop checklist download | Link the owner's exact car example and the rest of the chassis to brake decisions. Score-source fragments remain on the same article. |
| `ev-damper-tuning-bump-rebound-guide` | tyre/coilover guide, shock types; setup log and shop checklist | Continue from damping behavior to component selection and a usable setup record. |
| `ev-horsepower-vs-torque-explained` | tyre/coilover guide, Model 3, suspension guide | Relate power figures to traction and chassis decisions without claiming horsepower determines a tyre rating. |
| `ev-performance-driving-techniques` | horsepower/torque, hybrid-to-EV, battery, tyres, Carbon Ceramic | Provide the underlying explanations for acceleration, regen, tyres and brake upgrades. |
| `ev-suspension-tuning-guide` | tyres, damper guide, camber/alignment, shock types | Route each symptom to the relevant detailed guide. |
| `ev-tyre-and-coilover-selection-guide` | ZEEKR 7X, Model 3, suspension guide, camber, damper guide, Carbon Ceramic | Keep component selection concise and hand off detailed damping explanation to its own page. |
| `geely-ex2-review` | horsepower/torque, Thai-road suspension, tyre/coilover guide, battery | Explain specifications and operating choices for the Thai Pro/Max guide. |
| `hybrid-to-ev-chassis-dynamics-transition` | tyres, horsepower/torque, Carbon Ceramic, Thai-road suspension, damper guide | Give a separate next step for each change in driving/chassis behavior. |
| `mg4-electric-review` | battery care, tyre/coilover guide | Continue the MY2026 D/X comparison into charging and correct tyre selection. |
| `optimizing-ev-suspension-thai-roads` | camber, tyres, shock types, damper guide | Distinguish alignment, tyres, suspension construction and adjustment. |
| `shock-absorber-types-monotube-twintube-air-ev` | tyre/coilover guide, damper guide, camber | Move from construction and control types to selection, settings and alignment. |
| `tesla-model-3-highland-review` | tyres, damper guide, Carbon Ceramic | Continue the Thai trim comparison into suspension and brake decisions. |
| `tesla-model-y-l-premium-6-seater-review` | ZEEKR 7X, Thai-road suspension, tyres, damper guide, battery | Support family-car comparison, loaded ride and charging questions. |
| `zeekr-009-review` | horsepower/torque, Model Y L, tyres, shock types, Thai-road suspension, battery | Explain the heavy MPV's power, family layout and suspension/charging choices. |
| `zeekr-7x-2026-review` | tyres, shock types, Thai-road suspension, battery | Connect the Thai Performance's mass/power and suspension to practical decisions. |
| `zeekr-x-review` | horsepower/torque, ZEEKR 7X, tyres, Carbon Ceramic, battery | Explain trim figures and adjacent ownership/upgrade choices. |
| `/` | catalogue, Model 3, damper, battery, suspension and tyres | Topic entry points offer clear reasons to continue reading. |
| `/articles` | all 21 catalogue entries and observed topic/vehicle filters | Article cards and filters support discovery; the suspension overview is additionally reachable from relevant articles/home. |
| `/about` | contact, editorial policy, articles | Explain who the site serves and how to explore or contact it. |
| `/contact` | articles and home | Available Facebook contact is distinguished from editorial reading. |
| `/editorial-policy` | contact and articles | Give a correction route and return to the content being governed. |
| `/privacy` | contact, articles and home | Preserve the page's preparation status with useful navigation. |
| `/terms` | launch status, contact, articles and home | Connect the prelaunch scope to actual current site information. |
| `/warranty` | contact, articles and home | Avoid implying an active store warranty; provide current contact/reading paths. |
| `/downloads/evselect-damper-setup-log.html` | damper guide and its toolkit, home | Let readers return from the worksheet to its explanation. |

Individual complete reader records are in the dated `*-reader-review-*.md` files. The tyre article's final desktop/mobile reading is in `tyre-link-heading-worklog-2026-09-21.md` and `link-tab-policy-reader-review-2026-09-21.md`; the six supporting pages and suspension overview are in `suspension-information-reader-review-2026-09-21.md`; home/shared links are in `home-brake-link-review-2026-09-21.md`. The catalogue's complete final reading and eleven actual filter navigations are in `catalogue-reader-review-2026-09-23.md`.

## Original request and reusable skill

- The tyre guide's final damping section contains two short paragraphs linking `คู่มือปรับแดมเปอร์: Bump และ Rebound` to the existing damper article. No damper graph or duplicated detailed adjustment component remains on that page.
- The Thai ZEEKR 7X Performance example uses 2,535 kg, 475 kW / 637 hp and 265/40R21, with the exact manufacturer model-page anchor and Thai brochure alongside the respective claims. It does not equate hp with PS or divide kerb mass by four as a tyre-selection rule.
- The article uses an exact 2024 Tesla Model 3 Performance photograph and a real ZEEKR 7X photograph, with credits and market/trim scope. Photo evidence is in `docs/editorial-image-sources.md` and the tyre reader records.
- The current tyre page SHA-256 is `e0fa260c10a84bfb5d6d26ca347c17d7cfb3a6efb2ab25eb2841787e496887ce`, matching the complete final desktop/mobile reading record in `link-tab-policy-reader-review-2026-09-21.md`; the two-paragraph damping handoff and Thai model figures were rechecked in the current source.
- Installed skill: `C:/Users/rolf-/.codex/skills/evselect-contextual-links/SKILL.md`. It specifies relevant anchors, exact primary sources, both EVSELECT and EVSELECTS linking home, no nested anchors, same-tab relative internal links, protected new-tab external links, heading hierarchy and actual reader review. The bundled skill-creator validator returned `Skill is valid!` again on 23 September using the existing isolated PyYAML dependency directory; no system-wide package installation was made.
- Metadata, JSON-LD, alt/accessible-label strings and image pixels are recorded non-anchor contexts. They remain valid text. The requirement is applied to visible linkable brand text and appropriate logo images.

## Release boundary

The latest build passed, including TypeScript, 43 generated static pages and 78 referenced public images. Changed brake files pass ESLint and `git diff --check`. This does not replace the renewed full rendered brake review after the photo changes. The browser currently reads and operates the page but its screenshots fail or return black. That final desktop/mobile image/layout pass and the changed catalogue date check remain open. Production push/deployment, alias verification and live link/asset/sitemap/robots checks remain unperformed. No Facebook post or share was made as part of this audit.
