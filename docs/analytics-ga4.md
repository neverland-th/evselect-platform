# EVSELECTS GA4 setup

Direct Google tag, basic consent, no GTM or extra tracking dependency. Added 2026-10-01.

## Activation

1. Use an EVSELECTS-owned GA4 property and a web stream for `https://evselects.com`. Set Bangkok time zone and THB currency. Record the verified property/stream identity here after account access is available.
2. Enable Enhanced Measurement **Page views → Page changes based on browser history events**, Scrolls and Outbound clicks. Disable Site search, Form interactions, Video engagement and File downloads for this initial measurement scope. Do not add a manual page-view tag or a second GA4/GTM installation.
3. Enable email redaction and query-parameter redaction for `email,phone,tel,name,first_name,last_name,full_name,message,password,token,code,q,s,search,query`. Public URLs and UTM values must not contain personal information. Redaction is a backup, not permission to send PII.
4. Leave Google signals and advertising personalization off. Keep User-ID and enhanced conversions unconfigured. Review data sharing and retention in the property; use the shortest retention appropriate for the agreed reporting scope.
5. Add **`GA4_MEASUREMENT_ID=G-…` only to the linked Vercel project's Production environment**, then rebuild/deploy. The code additionally requires `NODE_ENV=production`, `VERCEL_ENV=production` and an apex/www EVSELECTS hostname. Missing/invalid IDs fail closed. No public environment flag can enable tracking on preview/local hosts.

## Consent behavior

- Storefront pages share one Thai consent banner and an accessible settings dialog. Reopen from the footer or `/privacy`.
- No Google script, dataLayer commands or GA network requests before consent or after rejection. Necessary local storage only remembers the choice for 180 days.
- On consent, the Google script loads once through `next/script`. Initialization sets analytics granted and all advertising consent denied, configures one stream and relies on Google's automatic initial/history page views and engagement/scroll events.
- Cookies are prefixed `evselect`, expire after 180 days and do not extend on each visit. Storage failure leaves tracking off.
- Withdrawal immediately sets Google's disable flag, deletes only the site's GA cookies and reloads to remove active automatic listeners/timers. No denied-consent ping is emitted. Cross-tab withdrawal also stops an already active tab.
- GA is mounted only in the storefront layout, outside the admin/CMS layouts.
- Capture-phase link/back-navigation guards pause an initialized tag before entering existing internal routes; unmounting the storefront also pauses it. Returning to the storefront after a pause reloads once to restart the automatic page-view owner in a fresh document. Verify this boundary with the real stream before activation.

## Measurement contract

| Event | Owner | Meaning |
| --- | --- | --- |
| `page_view` | Google tag / Enhanced Measurement | Initial page and client route navigation; not manually emitted |
| `user_engagement` | Google tag | Active engagement |
| `scroll` | Enhanced Measurement | Reaches 90% of page; not proof of reading every word |
| `click` | Enhanced Measurement | External link click |
| `messenger_click` | Consent-gated website listener | Click on an HTTPS Messenger destination; contact intent only |
| `shopee_click` | Consent-gated website listener | Click on an HTTPS Shopee destination if present; shopping intent only |

Intent events contain only `destination`, a sanitized `page_path`/`page_location`, optional `article_slug` and stream ID. Never include link text, form data, full destination URLs, names, email, telephone, user IDs or chat contents. Register `article_slug` as an event-scoped custom dimension if it is needed in reports. Mark the two intent events as key events; label them as clicks, not leads or purchases.

## Facebook campaign convention

Use lowercase controlled identifiers. Add UTMs to inbound marketing links, not internal navigation or canonicals. Keep `utm_source=facebook`, `utm_medium=social`, `utm_campaign=<article/campaign identifier>`, and `utm_content=<post/creative identifier>`.

Example tyre post:
`https://evselects.com/articles/ev-tyre-and-coilover-selection-guide?utm_source=facebook&utm_medium=social&utm_campaign=ev_tyres&utm_content=page_post`

For paid social, use `utm_medium=paid_social` consistently. Do not put personal identifiers in any UTM. Preserve campaign parameters through the existing `/blog/` redirect. Existing Facebook posts are not rewritten by this change.

## Verification and reporting

- Run `npm run test:analytics`, targeted lint, production build and existing content/attribution checks.
- Browser: inspect the complete `/privacy` page at desktop/mobile and banner/settings at 320px/390px/desktop. Test accept/reject/settings, reload persistence, keyboard focus/Escape, withdrawal, blocked storage and cross-tab changes.
- After real property activation, use Tag Assistant and DebugView: consent-free/rejected sessions have no Google requests; granted sessions have one script and exactly one page view per direct load, route transition and browser back. Verify location/title/referrer, 90% scroll, intent events, sanitized URLs and test campaign attribution. Keep admin and preview visits out of production reports.
- Connect Supermetrics GAWA to the verified property through its login flow. Query traffic sources (session source/medium/campaign), top article paths (views/engagement) and intent event counts. Do not invent results before data exists; check field compatibility before joining session-level and event-level reports.

## Status

Website integration, Thai consent controls and privacy policy deployed on 2026-10-01 with GA4 collection disabled because no verified measurement ID is configured. The analytics tests and production build pass; consent interactions were reviewed in desktop/mobile browsers. Account/property creation or reuse, stream settings, real Tag Assistant/DebugView checks, campaign attribution and Supermetrics reporting remain pending account sign-in. Do not treat this release as verified data collection. Update this status only after those actions actually pass.

Verified release: application commit `721a4f835b4fa9ecbaf22abe6e414e0b2b4ca8cb` on `codex/ga4-consent-2026-10-01`; production deployment `dpl_ED38gZ26PzmHA3fYRoWoXhHXDSgm` is READY on project `prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`, with `evselects.com` and `www.evselects.com` aliases. Verified through Vercel's deployment API and live pages, not merely a local build. This release record is a documentation-only follow-up to that deployment.

Checks passed: 11 analytics tests, targeted ESLint, TypeScript/production build, image/link/attribution publication gates, complete privacy and consent UI review on desktop/mobile (including 320px), consent persistence, settings/withdrawal, blocked storage and cross-tab changes. Live public navigation/back and the `/blog/` redirect preserve navigation and campaign parameters. The live browser capture recorded zero Google requests across 78 requests while collection was inactive; this is not proof of real GA4 event delivery, consent withdrawal after loading Google, duplicate-page-view prevention or attribution. Supermetrics GAWA was rechecked and still returned `NOT_AUTHENTICATED`.

Primary references: [Next.js scripts](https://nextjs.org/docs/app/guides/scripts), [GA4 SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode), [data redaction](https://support.google.com/analytics/answer/13544947), [Supermetrics connection](https://docs.supermetrics.com/docs/google-analytics-4-connection-guide).
