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
- The latest production build and changed-file ESLint passed. The build verified **72 referenced local images**. No production deployment has occurred.
