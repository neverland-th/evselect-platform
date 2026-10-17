# Optional agent index

`public/llms.txt` is served at https://evselects.com/llms.txt as UTF-8 plain text
containing Markdown. It is a small, curated Thai index of 21 public resources,
not a copy of every article. The H1 is a plain machine-resource site name; it is
not a new HTML heading or a change to visible brand-link components.

Home and `/articles/:path*` advertise the index through the HTTP header
`Link: </llms.txt>; rel="describedby"`. No JavaScript, UI, page metadata,
structured data, crawler permissions or sitemap entries were changed.
The linked article URLs are the real HTML originals, not invented `.md` routes.
Markdown link/tab behavior belongs to the consuming renderer; HTML link rules
on the site remain unchanged.

## Purpose and limits

- The intended consumers are agents/tools that choose to read the llms.txt
  proposal; consumer support is not guaranteed or measured by this release.
- Google Search explicitly says it ignores llms.txt for visibility/rankings.
  This file is not a prerequisite or a promised improvement for AI Overviews,
  AI Mode, AEO/GEO, indexing, rankings or citations.
- It does not grant content/image reuse rights, change bot access, or replace
  robots.txt, sitemaps, canonical pages or the site's source references.
- There is no llms-full.txt or separate Markdown article endpoint. Avoid adding
  duplicate full articles without a real consumer need and a maintenance plan.

## Maintenance and verification

Keep the summary synchronized when products launch or article routes change.
Only use published canonical destinations; preserve Thailand/RHD/year/trim
limitations and never invent stock, prices, author experience or credentials.
Update the review date only after actually checking the summary against Home
and editorial policy. The pre-launch regression test must be updated with the
actual visible sales status, not simply disabled, when the shop opens.

After a production build, start the existing Next server and run:

```powershell
$env:BASE_URL='http://127.0.0.1:4367'
node --test scripts/test-llms.mjs
```

Repeat with `BASE_URL=https://evselects.com` after deployment. The tests check
the exact reviewed bytes, GET/HEAD status and content type, all listed canonical
destinations, discovery/security headers, pre-launch agreement and crawl rules.
The existing strict content-link audit still covers public HTML pages.

Reviewed the full new text in the built browser at desktop 1280x900 and mobile
390x844 on 2026-10-18 (Bangkok). UTF-8, wrapping and every section were readable;
no images or new page interactions were added. No copy changes were needed
after that rendered review. Actual provider retrieval/citation is NOT VERIFIED.

## Primary guidance checked 2026-10-18

- [llms.txt proposal v2](https://llmstxt.org/): Markdown format and optional
  `describedby` discovery relation, not a universal crawler standard.
- [Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide):
  separates useful SEO/content work from llms.txt and other unsupported Search
  ranking tactics.
- Installed Next.js 16.3.6 documentation: public folder and custom headers.
