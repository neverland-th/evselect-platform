# EVSELECT — sitemap and contextual-link production release

## Confirmed deployment

- User instruction: deploy first, then update skill and memory. This release-specific instruction deferred the unfinished full editorial review; it did not mark that review complete.
- Runtime source commit: `db2148a234ce1f174ca93177cb3be24500e9b9f1`, pushed to `codex/link-audit-sitemap-2026-09-21`. No merge into main.
- Project: `evselect-platform` / `prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`, team `evselect-com`.
- Deployment: `dpl_632A28ztxpxasXuvevyiPbs1vYEG`, CLI production, **READY**; aliasError null.
- Immutable URL: https://evselect-platform-ni6pvrgs1-evselect-com.vercel.app
- Production aliases confirmed: https://evselects.com and https://www.evselects.com
- Ready timestamp: 2026-09-20T23:47:57.812Z / 21 September 2026, 06:47 Bangkok.
- Vercel reported build completion in 33 seconds. Image references (73), 11 link tests, TypeScript, static generation and strict build audit passed.
- Rollback reference, freshly confirmed before release: `dpl_AEUYkSAgqf8AHeyS3o5CdL8CFfr8` / `evselect-platform-cr0rrvplm-evselect-com.vercel.app`. No rollback performed.

## Live verification — not just local tests

- `scratch/content-link-audit-production-db2148a.json`: 31 HTML pages, 1,642 anchors, 1,333 internal links, 23 contextual candidates, zero structural/link findings. Candidates are not an editorial-quality score.
- `/sitemap_index.xml` and compatibility `/sitemap_indexl.xml`: HTTP 200, application/xml, each points to the canonical child sitemap. `/sitemap.xml`: HTTP 200 with exactly 24 published canonical URLs. Six pending pages and the supporting worksheet remain noindex and excluded.
- Robots advertises the canonical index and child sitemap. A request using a Googlebot User-Agent also returned XML 200 without X-Robots-Tag noindex. This is a simulated client, **not evidence of Googlebot retrieval**.
- `scratch/content-links-browser-production-db2148a/results.json`: 62 views (31 routes at 1440 and 390 px), zero detected page errors, horizontal overflow or structural link findings.
- `scratch/link-interactions-production-db2148a/results.json`: 220 states, zero errors. Includes same-tab internal cross-page/fragment navigation, article/worksheet round trip, menus, interactive source links, and protected external new tabs.
- Live image-load check: 30 routes at both widths; 209 image instances at each width loaded successfully. This does not certify image rights, factual captions or editorial suitability.
- Actually opened and viewed production opening screenshots of home and damper article at both widths. They rendered legibly with existing layout. This is a scoped visual smoke check, not the full reader gate.
- Runtime error/fatal logs for this deployment from 2026-09-20T23:47:57Z through 23:51:07.978Z: no matching logs returned. Limited observation window, not a guarantee of no future errors. No drains or long-term monitoring configured by this change.

## Skill, project knowledge and tools

- Updated local `evselect-contextual-links` skill after production became READY: internal same-tab vs external protected-new-tab policy remains separate; added live-verification boundaries and release-specific exception handling, plus pointer to the Google reference in the project knowledge base.
- Bundled Python skill validator could not run because PyYAML is absent. Frontmatter/name/description/placeholder checks passed using existing Node + js-yaml instead; no dependency installation was made for this.
- User-selected Google guide saved in [project knowledge base](../knowledge-base/google-search-generative-ai.md), with retrieval date, concise source summary and separately labelled EVSELECT application. Its `#build-technical-structure` fragment was verified against the source HTML.
- Needed integration: Vercel (deployment, aliases, logs). Operations supplies the change/rollback skill. Plugin Management addresses the user's integration inventory request; no plugin was installed, removed or re-permissioned. Cowork plugin customizer is not needed for this release, which does not create or customize a Cowork plugin. Webflow is not this production host.
- Native web tools, local Playwright and `skill-creator` / `evselect-contextual-links` cover the remaining work without additional accounts.

## Explicitly unfinished / unavailable

- Full legacy article/source/image editorial review remains as recorded in [reader ledger](link-reader-review-2026-09-21.md). Do not report all citations, vehicle claims, test-language or photo rights as fully revalidated.
- Google Search Console sitemap status, last read, indexing and AI Search inclusion: **Data unavailable**. Suggested submission URL is https://evselects.com/sitemap_index.xml; compatibility alias need not be submitted separately.
- Checkout, backend, inventory and payment were not changed. The site remains transparent pre-launch.
- Knowledge/release documentation committed after deployment is not a second production runtime release.
