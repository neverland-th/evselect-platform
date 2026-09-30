# EV upgrade guide — photographic editorial revision

Current status: IMPLEMENTED, VERIFIED on a staged Vercel deployment; NOT promoted to evselects.com. See the follow-up below. Earlier verification notes are retained as history.

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

## Follow-up: staged Vercel verification, 2026-09-30

- Application commit: `32dff658d642b0b272b0ce699a039a8fc7f7ca28`, branch `codex/homepage-thai-search-2026-09-29`.
- Preserved the current production ZEEKR 009 implementation and all 58 existing image-credit records, adding only the two Home Tesla records and Home usage for TEIN. The ZEEKR application files and image assets match `188d4a9` exactly. No main merge or push.
- Vercel team `evselect-com`, project `evselect-platform` (`prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`) verified through CLI and connected read tools.
- First Preview deployment `dpl_9vWoQmqPv8xXV32xGdo1MiKXgf9J` failed because Preview lacks `DATABASE_URL`; no credential copying, database mutation, or configuration workaround was applied.
- Staged deployment `dpl_3YMYeJo8pfkzZM1qYuxXbhDfmHPH` is READY: https://evselect-platform-jznllddiz-evselect-com.vercel.app . Created using the existing production environment with `--skip-domain`; it is a review candidate, not the live custom-domain release.
- After staging, `vercel inspect https://evselects.com` still resolved to the earlier READY deployment `dpl_Fh8djHnuze2DjeFzRWcPMudS4q9x` / `evselect-platform-rbl25uqcb-evselect-com.vercel.app`.
- Fresh merged-source build passed TypeScript, static generation, strict 32-page local content/link/sitemap audit (zero findings), and 28 attribution page/filter variants (117 ImageObjects, 60 credit records).
- Candidate Home tests passed 6/6. Candidate attribution verification passed all 28 variants, 117 ImageObjects and 60 credit records. Targeted ESLint and `git diff --check` passed.
- The production-strict audit against the staged Vercel URL stopped on its `X-Robots-Tag: noindex` header. This is not a passed remote indexability audit; the check was not disabled or modified. The local strict audit passed. No Google indexing or ranking claim is made.
- Actual candidate Home was reviewed top-to-bottom at 1440x1000 and 390x1000, including all six expanded FAQs, every image, photo crops, article cards, banners and footer. No broken loaded images, horizontal overflow or console warnings/errors observed. Additional 320px viewport DOM measurement showed client and scroll widths both 312px.
- Tested mobile menu open/close, hero `#ev-accessories`, infographic Tesla `#tesla-accessories`, the tyre article, the damper `#symptoms` destination, and Tesla credit anchor. All internal destinations stayed in the same tab. Mobile credit cards and long-text wrapping were reviewed. Viewport overrides reset.
- Actual candidate screenshot evidence: `scratch/home-staged-desktop.png`, `scratch/home-staged-mobile.png`. These are not mockup-wrapper screenshots.
- Local built server restarted at http://127.0.0.1:4359/ . Existing blocked browser error tabs were not bypassed or retried; rendered verification used the READY HTTPS candidate.
- Remaining release boundary: publication permission for the two new Tesla photographs is still unverified. Attribution is not permission. Production promotion has not occurred; the question about final publication destination is still unanswered at this checkpoint.

## Rights verification follow-up

Checked 2026-09-30 against primary sources, not an inferred blanket editorial licence:

- Tesla Thailand intellectual-property terms: https://www.tesla.com/th_th/legal/additional-resources (Intellectual Property / Copyright / No Licences). The page restricts commercial copying, distribution, modification and reposting, and does not grant intellectual-property rights merely through access to the website.
- Tesla Gallery: https://www.tesla.com/tesla-gallery . Its permission is limited to specified news-media uses of assets appearing in that gallery, with attribution and exclusions for promotional/commercial uses. This is not blanket permission for the two Tesla Shop product photos in this draft.
- Exact product pages remain accessible: https://shop.tesla.com/th_th/product/upgraded-center-console-trays and https://shop.tesla.com/th_th/product/upgraded-model-3--all-weather-liner- . Product identification is verified separately from republication permission.
- No matching permission for these exact two shop photographs was established. Do not represent gallery terms, an attribution link, or permission to deploy as a photo licence. Release requires authorised replacement photographs or evidence of permission for the existing photographs. No legal conclusion about statutory exceptions is asserted.
- Production rechecked with Vercel CLI: evselects.com still resolves to `dpl_Fh8djHnuze2DjeFzRWcPMudS4q9x`. No promotion, protection-setting change, or database write in this follow-up.
