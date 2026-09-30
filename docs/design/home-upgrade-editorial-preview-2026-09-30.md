# EV upgrade guide — photographic editorial revision

Status: IMPLEMENTED in the existing local Home draft, NOT DEPLOYED.

## Scope

- Replaced the rendered cartoon car and large navy panel in `EvUpgradeInfographic` with a white, photo-led editorial layout.
- Kept the three reading destinations, the `ev-upgrade-map` anchor, semantic HTML headings, and the before-buying checklist.
- Desktop layout uses three photographic columns; narrow layouts use photo/text rows. This is a server component with no new browser JavaScript or dependencies.
- Kept the rest of the existing Home draft, navigation, metadata, routes and adjacent guide cards unchanged in this revision.
- Reused the existing Tesla console trays, Michelin/Audi tyre and TEIN FLEX Z product photographs. Added Home to the existing TEIN attribution record; no fitment claim or reusable licence was invented. Tesla publication rights remain unverified, as documented in the prior draft.
- Retained previous draft illustration files as recoverable, unused design history. The old diagram is no longer referenced by the component.

## Design comparison

Two contained, non-production mockups: `ภาพจริงแบบบทความ` (implemented direction) and `ลิสต์กระชับ` (alternative).

Conversation fragment: `C:/Users/rolf-/.codex/visualizations/2026/09/19/01a0b91e-0466-74a3-8ba4-c10707254ef9/ev-upgrade-editorial.html`.

The mockups reuse the local server's automatically optimized photographs, embedded into the fragment without retouching. They are design comparisons, not screenshots of the complete Next.js Home. Mockup reading labels are intentionally not live website links. The actual Home component uses the original functioning internal links.

## Verified

- Final `npm run build`: PASS, including TypeScript, 90 referenced public images, 11 content/tab-policy tests, four image metadata tests, strict 32-page content/sitemap audit with zero findings, and 28 page/filter attribution variants.
- Final built local server: `http://127.0.0.1:4359/`.
- `BASE_URL=http://127.0.0.1:4359 node --test scripts/test-homepage-content.mjs`: six of six PASS after the final rebuild. Checks include all three keyword topics, existing Home destinations, server-rendered content, actual photo HTTP responses, photo metadata and tab policy.
- Targeted ESLint for the edited component and Home tests: PASS.
- `git diff --check`: PASS; only existing Windows line-ending conversion warnings.
- Separate mockup wrapper: visually checked at 736px and 320px content widths. Both variants show real images; previous/next switching works. Mobile stages have equal heights and no horizontal overflow. Mockup console warnings/errors: none observed.

## Not verified / release boundary

- Complete Next.js Home desktop/mobile rendered review remains NOT VERIFIED in this revision. Binding its existing error-page browser tab was blocked by the browser policy; this action was not retried through another tab or browser. The separate design-comparison wrapper was reviewed instead, and does not substitute for full Home review.
- Vercel project lookup remains NOT VERIFIED: the connector advertises `projectId`, but runtime requires `idOrName`; supplying the documented field, the runtime field, and both fields did not produce a valid project response. No deployment or project mutation was attempted.
- No commits, pushes, merges, database changes, domain changes, or production deployment were performed.
- Complete the full Home rendered review and resolve image publication rights before releasing this draft.
