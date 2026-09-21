# EVSELECT heading policy and review scope

User instruction, 2026-09-21: apply to every public page, including shared layouts.

- Exactly one H1 describes the page's main subject.
- H2 introduces a major section; H3 introduces a subsection of it. Do not skip a level while descending. Returning from H3 to a sibling H2 is correct.
- Select tags for meaning, and CSS for size. Do not use heading tags for ordinary badges or labels merely to make them bold.
- Check title/description, contextual source/internal anchors, alt text, canonical/indexability and sitemap coverage alongside headings. Do not claim a heading-only audit proves all Google SEO best practices.
- Include desktop/mobile rendered output and expanded interactive states. Source/HTTP inventories are baseline diagnostics, not the mandatory reader-review gate.

Sources inspected 2026-09-21:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide — people-first useful content, descriptive headings and links; explicitly says no ideal heading count and heading order is not a Search requirement.
- https://backlinko.com/h1-tag — requested editorial guidance; recommends a clear H1 and hierarchy. The user wrote backlink.io; that domain did not load, so this related source is identified rather than silently substituted.
- https://www.w3.org/WAI/tutorials/page-structure/headings/ — semantic heading hierarchy and avoiding skipped nested ranks.

One H1 and sequential nesting are the user's site standard, not a promise of Google ranking gains.

Initial live browser observation: tyre/coilover page has one H1 but its 1-Way / 2-Way / 3-Way cards use H4 under an H2. Shared footer headings are H4 regardless of preceding page structure. Actual DOM and visual checks are required after fixes.

No full-site completion or deployment is claimed by this document.

## Initial implementation check, 2026-09-21 (historical checkpoint)

- Inventory: 24 published routes plus six pending information routes from `src/lib/public-site-routes.ts`; local server at http://127.0.0.1:3117 .
- Before: all 30 routes returned 200 and had one H1. Eighteen pages had skipped content heading levels. See `heading-local-before-2026-09-21.json`.
- Corrected summary boxes to H2, comparison siblings to H3, related-article groups to H2 with H3 cards, and the shared footer groups to H2. Damper notes now accept a heading level; its introductory summary uses H2 while nested notes retain H3.
- After: 30/30 routes returned 200, exactly one H1 each, zero skipped levels in server-rendered main/article content. See `heading-local-after-2026-09-21.json`. This is not proof of every interactive client state.
- Preserved existing heading classes. The shared typography rules still set font size by semantic level, so promoted headings require visual review; do not claim their appearance is unchanged.
- ESLint on all changed TSX files passed with no errors (`--quiet`; existing warnings not treated as a clean baseline). Production build passed; its image check found all 73 referenced local images.
- Rendered review is in progress on the tyre/coilover article. The complete all-page desktop/mobile reader review, remaining contextual links, and Carbon Ceramic review are not yet complete. No production deployment of this change set has occurred.

## Latest baseline and rendered checkpoint, 2026-09-21

- Expanded the inventory to include the standalone public Damper setup log. All **31 local routes** return 200 with exactly one H1, no empty headings, and no skipped descending levels in main/article content. The JSON report at `heading-local-after-2026-09-21.json` reflects this latest baseline, superseding the initial 30-route result above.
- Reader review found an additional semantic issue that a linear heading scan cannot prove: the wheel-rate worked example needed its own H3 before the two H4 examples. Added that H3. The standalone setup-log fieldset also now has a real H2 in its legend.
- The complete final Damper article and setup log have been read in actual desktop and mobile layouts. All article photographs, four diagram states, worked example, three cases, ten FAQs, references and footer were inspected. See `damper-reader-review-2026-09-21.md` for exact scope and version hashes.
- Earlier completed page reviews are documented in the tyre worklog, `carbon-model3-reader-review-2026-09-21.md`, and `suspension-information-reader-review-2026-09-21.md`. Remaining full-page reviews and the newly expanded tab-policy checks are still open; these checkpoints do not certify the whole site.
- At the Damper checkpoint `4f1f4c6`, the production build and changed-file ESLint passed; that build verified **72 referenced local images**. This is a historical build result, superseded by the current failure below. No production deployment has occurred.

## Powertrain checkpoint, 2026-09-21

- Refreshed the complete 31-route heading inventory after the horsepower/torque rewrite: all returned 200, exactly one H1 each, no empty headings and no skipped descending main/article levels.
- Completed the rewritten article's actual desktop/mobile reader review, including all images, calculations, table cells, expanded FAQs and references. See `powertrain-reader-review-2026-09-21.md`.
- Changed-file ESLint passed. The latest build stopped at image verification: three referenced images had been unexpectedly deleted from the working tree. User clarification is pending; no deployment is permitted from this incomplete tree. The heading result does not establish that the missing images or the remaining full-site reader checks are resolved.

## Catalogue hierarchy refinement, 2026-09-21

- The full-page heading inventory cannot determine every parent/child relationship. The catalogue had category names and the cards inside those categories both tagged H3. Changed grouped card titles to H4 under their category H3. Filtered views without a category heading retain H3 card titles directly below the grid H2. The separate bottom reading-help section now starts at H2.
- Verified the actual rendered `/articles` and `/articles?category=suspension` DOM: the first has H2 grid / H3 categories / H4 cards, while the second has H2 grid / H3 cards. Both retain exactly one H1. Fresh complete 31-route HTTP heading baseline passes after the change.
- Inspected the affected powertrain card at desktop 1440 × 1000 and mobile 390 × 844 in both grouped and filtered views. Card typography remains 22 px on the inspected desktop and 18 px on mobile. Inspected the bottom reading-help heading and its surrounding text/buttons in both layouts. No clipping was observed in these inspected areas.
- Catalogue `page.tsx` SHA-256 for this refinement: `d8c9ea65a1fc80cc1e526ef8cc1759577559291d9e79e49de0fb2bc53f25a8d2`. This supersedes the catalogue version in the powertrain checkpoint, while that article's reviewed source is unchanged.
- Changed catalogue ESLint passed. This is a focused hierarchy/layout check, **not** completion of the entire catalogue's line-by-line and image review. Its remaining content, image and brand-link issues must be resolved before publication. The concurrent missing-image build failure remains unresolved.

## Refreshed sources and interactive hierarchy checkpoint, 2026-09-21

- Reopened the requested `https://backlink.io`; it was inaccessible through the web tool. Read the identified Backlinko H1 guide and verified its one-H1 convention against Google Search Central's explicit heading-count/order clarification and W3C's nesting guidance. Do not describe Backlinko as the inaccessible domain or its convention as a Google penalty rule.
- Reran the 31-route local check: exactly one H1 on each route, no empty headings and no skipped descending main/article levels. The baseline still passes after the homepage and Carbon Ceramic link changes.
- Read the complete final homepage in actual desktop/mobile layouts. Verified its section H2s and nested H3 cards, as well as the visible target of its same-page journey link.
- In the Carbon Ceramic comparison, opened every score ring at desktop and mobile sizes. Verified H2 section, H3 comparison heading, H4 option and H5 score explanation. The same hierarchy remains valid when the filter shows a single option; restoring three options restores the sibling H4 sections. This focused check is not a new full-article review.
- See `home-brake-link-review-2026-09-21.md` for the inspected version, observations and remaining publication checks. No production deployment is included in this checkpoint.

## Filter coverage and regression checks, 2026-09-21

- Added `--include-catalogue-filters` to `scripts/audit-heading-baseline.py`. It discovers category and vehicle filters from links actually exposed by the catalogue, keeping discovery on the same origin and within `/articles`. It does not create hypothetical URLs or exercise client interactions.
- Fresh local result: **42 HTTP views** (31 public routes plus 11 catalogue filter views), all 200, exactly one H1 each, zero empty headings and zero skipped descending levels in main/article content. See `heading-local-filter-views-2026-09-21.json`, which now records the origin, timestamp and exact filter URLs.
- Six offline regression tests pass: valid grouped cards/return to H2, skipped nesting, a duplicate H1 outside main, linked/empty headings, bounded filter discovery, and distinguishing a forbidden response from a heading finding. Run `python -m unittest scripts/test_heading_audit.py`.
- Fresh browser inspection at 1440 × 1000 CSS pixels: catalogue H1, H2 list, H3 category and H4 cards. Clicking the visible guide filter changes to H2 list/H3 card. At 390 × 844 CSS pixels, inspected the guide card and its heading; observed H1 30 px, H2 22 px and H3 18 px, with no page-width overflow. Clearing the filter restores three H3 categories and twenty H4 cards in the DOM. The grouped mobile screenshot showed the header rather than the focused card, so it is not recorded as a new visual inspection of that card. Temporary viewport override was reset.
- These are focused structural checks. The catalogue still contains editorial claims needing correction (including an unsupported featured score and road-test wording); its complete final reader/image review remains open. Do not publish the catalogue draft merely because the heading checks pass.
- Inspected catalogue source SHA-256: `cd4d8d4b96ac419e3e6d52441951b4d20ed8d6f1ab532e2face7f8825834d175` (working draft above commit `48302c1`).
- A fresh production HTTP attempt returned five readable pages and 26 HTTP 403 responses, recorded in `heading-live-2026-09-21.json`. The five readable pages had one H1 and no skipped content levels. The remaining production headings are **unverified**, not diagnosed as broken pages, missing H1s or Google indexing failures. Do not retry a full production crawl without addressing the access condition.
- The backlink.io domain remained inaccessible. Rechecked the distinct Backlinko guide, Google Search Central's heading-count/order explanation and W3C heading nesting guidance. Their distinctions in this policy remain valid. No deployment occurred in this checkpoint.
