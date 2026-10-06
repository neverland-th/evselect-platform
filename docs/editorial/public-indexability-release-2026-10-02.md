# EVSELECTS public indexability audit and release — 2026-10-02

- Checked at: 2 October 2026, Asia/Bangkok; live strict audit at 08:33:37 (+07:00), final verification completed at 08:36.
- Scope: complete inventory of the four URLs in the user-provided Ubersuggest CSV, with a separate regression audit of all 32 public/supporting routes. Not a whole-site content, rankings or traffic audit.
- Checkout: `evselect-homepage-thai-search`; branch `codex/homepage-thai-search-2026-09-29`; application commit `8657da2908865ca1a50b7a691af1a407ada40dfd`.
- Tools: authenticated Vercel CLI, ordinary HTTP requests, source inspection, built-response tests and rendered in-app-browser review.
- Not checked: a fresh Ubersuggest crawl, Search Console indexed/live-test evidence, search-provider retrieval or private performance metrics. No authenticated evidence for those was supplied or available in this task.

## Verdict

IMPLEMENTED, VERIFIED and DEPLOYED: the four requested public pages no longer send a `noindex` directive on `https://evselects.com`, and their canonical URLs are included in the 29-URL sitemap. The block was in page-level robots metadata, not a transport failure or a robots.txt exclusion. This does not establish that Google has crawled or indexed them.

## Verified strengths

- All four URLs already returned HTTP 200 with substantial public content, one H1 and a correct self-canonical. Their body content, layout and existing destinations were preserved.
- The public worksheet has 33 input/textarea fields and no scripts or submission form. It still warns that entries are not sent or saved automatically.
- Unfinished `/about`, `/terms` and `/warranty` remain `noindex`; private/operational route exclusions remain in robots.txt and outside the sitemap.

## Prioritized finding

| ID | Priority | Evidence class | URL/file | Evidence | Impact | Smallest fix | Acceptance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PUB-01 | P1 | Fact | The four routes below and `src/lib/public-site-routes.ts` | Before this release, all four HTTP 200 responses contained `noindex, follow`, without an X-Robots-Tag. Three Next pages explicitly set `index: false`; the HTML worksheet had a literal noindex tag. The route inventory deliberately omitted them from the sitemap. | Search engines honoring noindex were instructed not to index these requested public pages. | Change only their page directives to `index, follow` and add their canonical routes to the published allowlist. | All four live HTML responses contain index/follow, no blocking header, a self-canonical, public SSR content and exactly one H1; all four appear in the sitemap. |

Affected routes:

- `/contact`
- `/downloads/evselect-damper-setup-log.html`
- `/editorial-policy`
- `/privacy`

## Evidence layers

| Layer | Result | Evidence | Limitation |
| --- | --- | --- | --- |
| Public HTTP/raw response | Passed on apex after promotion | Eight new indexability tests passed: status, HTML metadata, headers, canonicals, H1/content, sitemaps, robots exclusions, pending routes and worksheet behavior. | Ordinary clients; not a verified Googlebot request. |
| Rendered desktop/mobile | Passed | Read the complete affected main content on the candidate at 1440 × 1000 and 390 × 1000; checked all four at 320px without overflow. Reopened all four on live mobile; also checked live desktop contact. Worksheet accepted a non-personal test string. Cookie settings opened with analysis unchecked and closed without enabling it. The worksheet return link reached the same-tab `#toolkit` section, about 112px below the viewport top. | Browser rendering does not prove search-provider indexing. |
| Repository implementation | Passed | Targeted lint, diff check, TypeScript and production build. Three metadata lines, one HTML robots tag, the route allowlist and regression expectations changed. | A successful build alone does not prove production state. |
| Production deployment | Verified | Vercel READY/production for the intended project and application commit; apex and www inspection resolved the intended deployment. | Point-in-time verification, not ongoing monitoring. |
| Search-provider live/indexed state | Data unavailable | No current Search Console URL Inspection or indexed-state result. | Do not report indexed, ranking improvement or traffic growth. |
| Provider retrieval/citation | Not checked | Outside the four-page indexability repair. | No AI visibility claim. |
| Private performance metrics | Not checked | No metrics needed or accessed for this repair. | No private-traffic estimate. |

## Validation and production record

- Targeted ESLint and `git diff --check` passed.
- Build passed, including 96 referenced public images, 11 link-policy tests, four image-metadata tests and TypeScript.
- Eleven existing analytics regression tests passed; no analytics activation, credential, environment, database or DNS changes.
- Eight new tests passed against the built server. Against the unpromoted generated Vercel URL, four strict indexability tests correctly failed on its platform-added X-Robots-Tag: noindex; the page metadata and the other four tests passed. No header override or protection bypass was added. [Vercel response-header documentation](https://vercel.com/docs/headers/response-headers#x-robots-tag) explains that platform boundary.
- After promotion, all 14 live tests passed: eight indexability tests plus six existing Home regression tests. This preserves the dark Home guide, requested photos, current Thai keyword content and tab policy.
- Built and live strict link audits passed: 32 routes, 29 published, three pending noindex, 2,156 links, 1,574 internal links and no findings/blockers.
- `/sitemap.xml` returned HTTP 200/XML with 29 entries; `/sitemap_index.xml` and the legacy typo alias `/sitemap_indexl.xml` each returned HTTP 200 with one sitemap entry. All four requested canonical URLs are included; pending and private routes are excluded.
- Built and live image-attribution verification passed: 28 variants, 125 ImageObjects and 66 credits.
- Browser console error query returned no entries. Vercel's error-level query for this deployment returned zero records in the checked 15-minute window.

Candidate and production deployment: `dpl_2zRLBxHCWAEtfnCfQfdxgjCNdetb`, https://evselect-platform-bvsuf6v5n-evselect-com.vercel.app . Project: `prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`, scope `evselect-com`.

Created with production settings and `--skip-domain`, reviewed before promotion, then promoted only after confirming apex still served the expected previous deployment `dpl_FX9W5gicfr8T9Mn3RYViN4NwukzQ`. Both apex and www subsequently resolved to the new deployment and the live indexability tests passed.

The in-app browser blocked its XML preview with `ERR_BLOCKED_BY_CLIENT`. This is a browser-tool limitation, not evidence of a sitemap HTTP failure: actual HTTP/XML parsing checks and the live strict audit passed. No browser protection was bypassed.

Proof artifacts, intentionally Git-ignored: `scratch/public-indexability/live-content-links.json`, its internal-link CSV, and `scratch/public-indexability/live-contact-mobile.png`. The screenshot documents the unchanged live UI, not Google indexing. The temporary built server was stopped after validation.

## Next action

Run a fresh Ubersuggest audit to replace the old snapshot. Separately use Search Console URL Inspection to check Google access/indexing; removing noindex does not make an indexing request or guarantee indexing. [Google's noindex guide](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

This file is a documentation-only follow-up to the deployed application commit; it does not require another deployment.
