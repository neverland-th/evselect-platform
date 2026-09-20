# Reader review ledger — link release, 2026-09-21

## Latest instruction and verified checkpoint

The user subsequently requested "deploy ก่อน แล้ว update skill + memory". Remaining full editorial/source review is deferred for this release, not passed or silently discarded. The earlier publication-order statements below are historical checkpoints; the latest explicit instruction controls this release's order.

- Local production build passed, including strict audit of 31 HTML pages / 1,642 anchors / 1,333 internal links / zero findings; sitemap still has 24 published canonical URLs.
- Browser result `scratch/content-links-browser-current/results.json`, checked 2026-09-20T23:39:51.036Z: 62 desktop/mobile views, zero structural, overflow or page-error findings.
- Interaction result `scratch/link-interactions-with-worksheet/results.json`, checked 2026-09-20T23:40:52.070Z: 220 states, zero errors. Worksheet navigation and return to the article fragment passed; print preview remains untested.
- Final damper desktop tiles 1–7 were read after the TOC correction. Do not mark final tiles 8–27 or final mobile reread as complete. Existing preceding-version coverage remains recorded below.
- Changed interaction-script ESLint and all 11 link tests were rerun successfully before release.


Status: **In progress, not a publication pass.** The worktree is `evselect-link-audit-sitemap-2026-09-21`, branch `codex/link-audit-sitemap-2026-09-21`, based on commit `97b8fc5` with uncommitted frontend changes. Reviewed local base: `http://127.0.0.1:4327`. No deployment is recorded for these changes.

Screenshots are evidence only when actually opened and read. Do not treat an automated capture, extracted text, successful HTTP status, or this ledger's existence as completion of the full publication gate.

## Actual inspection completed

| Route / component | Actual views read and images inspected | Findings / current state |
| --- | --- | --- |
| `/articles/ev-performance-driving-techniques` | `scratch/link-reader-review-final/articles_ev-performance-driving-techniques/1440/view-01.png` through `view-04.png`; all six `390/view-*.png`, in order. All four CSS concept illustrations and their labels inspected. | Reread the full revised body after mobile list wrapping, number-circle sizing and conclusion wording fixes. Distinguishes road use from closed-course instruction, qualifies Regen by model/state, and does not portray low CG as immunity from loss of control. Body reviewed at source hash below. Shared footer received a later policy-label correction; that final shared footer was separately read on all six pending pages. |
| `/articles/ev-suspension-tuning-guide` | Full revised body read in both desktop/mobile views during the preceding review; all six final mobile tiles read then. This continuation individually opened all `scratch/link-interactions/basics-road-{0,1,2}-{1440,390}.png`, `basics-brand-{0,1,2,3}-{1440,390}.png` and `basics-brief-{1440,390}.png`. | All road/brand explanations and the generated brief read at both widths. Buttons wrap without horizontal clipping. Brief does not diagnose the car, select a brand or prescribe clicks. Mobile element screenshot includes a sticky header across one already-reviewed option; this is capture positioning, not missing content. Final desktop shared-footer/whole-page consolidation remains to be recorded. |
| `/` | `scratch/link-reader-review-final/home/1440/view-01.png` through `view-04.png`; all seven mobile tiles. Individually opened all five image captures at both widths. | Model 3 hero/card, KW product family, Seal article cover and launch concept are relevant. Mobile hero intentionally crops the car more tightly; title remains legible. Launch concept is visibly disclosed as AI/not an available product. An element-only mobile image capture did not isolate the banner's image correctly; the actual car and disclosure were inspected in mobile viewport tile 4. Found policy links promised finished content although the destination is a placeholder; corrected labels after this inspection. Final reread of the corrected homepage remains pending. |
| `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/warranty` | Each route's desktop and mobile `full-page.png` under `scratch/link-reader-review-full` individually opened and read, including the entire shared header/footer, logo images, and revised policy label. | Five pages remain existing preparation placeholders, not finished policies or business disclosures. Do not link to them as if complete. Contact now provides the same Messenger destination already used in the site's global navigation, with a new-tab label and prelaunch notice. No address, phone, availability or response-time claim was invented. All six remain noindex and excluded from sitemap. These observations do not certify legal adequacy or Messenger account access. |

Reviewed body/component SHA-256:

- Performance article: `13421AFC75049A5DBEF03072D600DB26327C2554A4A2E73E3E2131833B4C7791`
- Suspension article: `D66F45444903B216551EDC7BBE5F14A3E34ED2570F6F3C03303C47FEA5EE214C`
- `EvDamperBasics.tsx`: `2BB25BC3F89DDF69D6270ABFD1E14EF283CF44BDAEECD8923EDC3A0DB7C00F8D`
- Final shared layout read on pending pages: `4548FEC378C6D61212BE579AA2327D2D85F6B464F1121ABE0AC8E96DC7CCB62A`
- Final contact page: `EF1BCEF8A5F1B1BC688D1BBC5DE4E189CAF8D4203ACE0B106DF35EF67CD91174`

## Automated checks, kept separate from reader review

- Latest local strict SSR audit: 30 routes; 24 published, six noindex; 1,637 anchors including 1,328 internal; 23 contextual candidates; zero structural/link findings. Every finding blocks, with no legacy exceptions.
- `/sitemap_index.xml` and exact-spelling compatibility `/sitemap_indexl.xml`: XML 200, one child each; `/sitemap.xml`: XML 200, 24 published canonical URLs. This is a local check, not a Google ingestion result.
- 11 link tests passed, including absolute internal hosts, protocol-relative external links, fragments and native mailto/tel behavior.
- Browser interaction run before the last policy/contact correction: 210 evidence states, zero errors. Real internal cross-page hash navigation stayed in one tab; real manufacturer navigation opened a protected new tab. Rerun against the final build/deployment.
- TypeScript passed after the audit/capture typing fixes. Changed-file ESLint passed, including the latest contact/home/layout/menu/prelaunch edits. Full final build not yet run.
- `scratch/link-reader-review-full` now contains viewport tiles and individual images for all 30 routes at both widths. **Most of these captures have NOT yet been manually read.** Some early desktop captures precede the final policy-label edit; use source/version comparisons and recapture affected final views.

## Remaining work before publication

1. Finish final homepage/suspension consolidation and catalog review. Read the complete other 20 articles at both widths, all their images and interactive states; record real findings and fixes, not capture counts.
2. Review each external citation's adjacent claim against its exact source. The old 102-URL evidence inventory still needs refresh after HKS, Brembo and Porsche source changes; bot-blocked responses are not proof of broken links.
3. Resolve unsupported firsthand-test language, blanket safety/specification claims, or misleading photo context discovered in the remaining legacy content. Do not invent test data, Thai trim fitment, prices, or stock.
4. Run final build, strict audits, browser checks, and the complete rendered gate. Only then commit/push/deploy the reviewed frontend to the existing Vercel project and verify actual READY state, production alias, public routes/assets, sitemap and runtime errors.
5. Google Search Console retrieval/indexing remains **Data unavailable** without account evidence.

## Continued inspection — damper article and linked worksheet

Previous goal turn classification: progress (skill rules and explicit per-deployment audit requirement changed). This continuation changes frontend/audit state and completes additional actual inspection; it is not a deployment or publication pass.

- Damper desktop: all 27 viewport tiles under `scratch/link-reader-review-full/articles_ev-damper-tuning-bump-rebound-guide/1440` have now actually been read in order (1–21 in the preceding content review, 22–27 in this continuation). Those desktop captures still have the older shared policy label; the final footer requires consolidation.
- Fresh damper mobile: all 43 viewport tiles under `scratch/link-reader-review-damper-current/articles_ev-damper-tuning-bump-rebound-guide/390` were opened and read in this continuation, including all nine model-comparison cards, three expanded scenarios, FAQs, sources and the corrected pending-policy footer.
- All nine separate image captures at **both** widths in `link-reader-review-damper-current` were individually opened. KW family hero, TEIN FLEX Z, BILSTEIN B16, Tesla-specific Öhlins example, BC ZR, HKS S/R, Bangkok and Spa photos are not clipped in a way that changes their meaning. Captions were read in the viewport tiles. The two documentary photos explicitly disclose context/date and do not claim a comparative road test or installed damper identification. Developer overlay icons in some captures are local-dev artifacts, not a production certification.
- All eight current interactive damper panels (rebound/coupled/two/three at 1440 and 390) under `scratch/link-interactions-current` were individually opened and read. They distinguish shaft speed from vehicle speed, linked from independent controls, and the limits of a conceptual illustration.
- Concrete finding/fix: mobile contents numbers 02/03/04/17/18/20 were able to wrap into separate digits. Reserved non-shrinking width and no-wrap for the number, while allowing the label to wrap. Added a rendered regression check for every contents number and corresponding fragment. The internal worksheet CTA now uses a right arrow rather than an outbound-style arrow. Latest damper source SHA-256: `81BDBECC2A19649337C3BC7032C8FBF3BB83559B03454051E449A5E6EC94A925`.
- Post-fix damper screenshots were captured under `scratch/link-reader-review-damper-final`. **The entire post-fix article has not yet been reread**. Its final TOC was inspected separately at both widths; the tall mobile element capture has a sticky-header overlap, so use viewport tiles for final consolidation. Do not infer a final whole-article pass from the unchanged prose.
- Linked worksheet `/downloads/evselect-damper-setup-log.html`: found that the existing audit fetched this HTML but did not include its own findings in the publication result. Added explicit supporting/noindex route coverage plus auditing of discovered HTML targets. Fixed three visible brand mentions to point home, split the article-back action from the brand, gave the footer article link descriptive text, and preserved noindex. The plain-text checklist's heading now uses the user's preferred term โช้คสตรัทปรับเกลียว; do not put HTML anchors into a text download.
- The **final worksheet** was read in full in `link-reader-review-damper-final/downloads_evselect-damper-setup-log.html`: both desktop tiles and all four mobile tiles. No images are present. All field labels, warnings and footers are readable; this is a local note-taking aid with no form submission/script/backend, not a diagnostic result. Actual article-to-worksheet-to-article navigation and print preview remain to be exercised.

### Current checks (local only)

- Strict SSR audit after worksheet correction: **31 HTML pages**, 24 published, six pending/noindex plus one supporting/noindex, **1,642 anchors / 1,333 internal**, 23 contextual candidates, zero findings. Sitemap remains exactly 24 canonical entries; supporting tools are not added to it.
- All 11 link tests passed after the correction. Changed-file ESLint and TypeScript both exit 0.
- Browser interaction run including the new TOC regression (before adding worksheet to the route list): **212 states, zero errors**; final coverage must be rerun with the worksheet included.
- Refreshed external inventory is `scratch/link-source-evidence-current/inventory.json`: 103 unique URLs, 89 HTTP 200, 14 HTTP 403, no network errors. This is not a semantic support verdict; client-only sources may not occur in SSR inventory.

### Source-support checks completed in this continuation

- BILSTEIN `performance.bilstein.com/en/suspensions-with-damping-force-adjustment/`: official article confirms parallel bump/rebound adjustment and the piston-versus-bypass explanation. `why-so-many-options/` distinguishes fixed B14 from single-control B16. `workshop.bilstein.com/cs/watch-out-avoid-these-installation-mistakes/` actually contains English guidance supporting rubber-bush tension, exact part allocation and geometry inspection. These were readable through the web tool despite the direct-fetch 403; do not classify them as broken on that basis. Do not import the manufacturers' broad comfort/grip marketing claims or click prescriptions into universal EV advice.
- HKS `new_hipermax_s_list.pdf`, page 5: confirms 3L23T / 19/09–23/08 / 80300-AA004 → 80330-AA004P, and the January 2026 currency note. This supports the limited example, not Highland fitment or Thai stock.
- Öhlins Road & Track manual `OM_07451-01_7_R_T.pdf`: read the relevant safety, preload, damping, length and setup sections (printed pages 2, 6–9). Supports specific-vehicle use, pressure-work warning, noise/leak stop condition, free-minus-installed spring length, divorced-rear-spring distinction, and one-variable notes. No universal click or torque setting has been copied into the article.
- HKS `80310-AN002.pdf`: English adjustment page 11 / PDF page 30 distinguishes its first return click as zero and gives a kit-specific initial setting. Article correctly uses this only to show why the exact manual matters; it is a Silvia S14/S15 manual, not an EV fitment example.
- Penske `master-the-process-of-suspension-tuning-penske-racing-shocks` Results and Expectations section supports the different-driver/different-result point. `shocks-and-springs` supports spring-versus-damper roles and linear-preload distinctions. Its oversimplified digressive example is not treated as measured EV data.
- TEIN UK FLEX Z specifications support twin-tube and simultaneous 16-position compression/rebound adjustment; TEIN MONO SPORT section 5 confirms monotube with linked adjustment; TEIN Features explains needle-valve oil flow and separate versus linked controls. The remaining TEIN setup FAQ text and remaining brand/local-presence/photo sources still need final source-ledger consolidation.
- Eibach worksheet: direct source collector returned HTTP 200, but web-PDF retrieval timed out twice. **Content verification remains open**, not a broken-link conclusion. Use the direct-fetch PDF with an available parser/renderer rather than assuming what it says.
