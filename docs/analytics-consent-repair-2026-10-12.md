# Analytics and consent repair review — 2026-10-12

## Verified baseline and scope

Vercel's deployment API resolved `evselects.com` to READY production deployment
`dpl_EYJzZ7iabeSjzW5d4bTRaj82s37d`, commit
`937c082d2cea63c2a59915254b67e26db84c1e30`. This repair starts from that exact
commit, preserving its newly deployed Tesla homepage hero. The original dirty
checkout was left untouched. The existing GA branch was inspected, not merged;
its analytics implementation matches this production baseline. No matching open
analytics/consent PR was found.

Review branch: `codex/analytics-consent-repair-2026-10-12`.
The approved outcome is a Preview; no production deploy, merge, account settings,
credentials, backend or security/network settings are part of this repair.
Existing measurement ID `G-ST95SE5T38` and property `557689216` were supplied in
the task. They are retained; no new installation or tag is added. Real GA4
delivery was previously confirmed by the user context, not reverified here.

## Changes

- Exclude `/fitment` and descendants alongside the existing internal routes.
- Check the current path before loading the Google script, initializing its
  queue, or sending a contact/shopping intent event. Private EVSELECTS URLs in
  custom referrer/location data collapse to the site root.
- Pause before private `pushState`/`replaceState`, ordinary same-tab link
  navigation, and browser history navigation. The existing fresh-document
  restart behavior remains in place after a paused tag.
- Recheck consent at the exact 180-day expiry, on focus and visibility changes,
  and on same-tab/cross-tab storage changes. Long timers are rearmed below the
  browser's signed 32-bit delay limit. The external-store snapshot becomes null
  at expiry; analytics stops before React subscribers run, owned cookies are
  removed, the document reloads when needed, and the consent banner returns.
- Add deterministic clock tests and browser tests that intercept all Google
  script/collection traffic. The Google-tag double checks the disable flag; it
  is not a reproduction of Google's Enhanced Measurement implementation.

Production's existing proxy currently returns 404 for the private routes. The
initializer tests cover the guard independently, including if that proxy is
later removed. Neither the proxy nor any security settings were changed.

## URL/UTM inspection and limits

The existing URL filter keeps only HTTP(S), identifier-shaped path segments,
and the five existing UTM keys. It drops unknown query parameters, fragments,
email/free-text shapes, and digit runs of seven or more characters. URL origin
construction drops user credentials. Existing campaign values such as
`next_launch_2026` and `paid_social` remain supported without a new allowlist.
Tests also cover duplicate UTMs, private referrers and encoded free text.

This syntax filter is not a semantic PII detector: a name-like identifier can
still match it. Automatic history/outbound Google measurement can use its own
payloads; custom-payload filtering does not establish their safety. Automatic
outbound measurement remains a conditional risk, not an observed leak. A live
stream/account review is a separate decision. No live account settings were
read or changed, and no test requests were delivered to the real GA property.

## Validation

- Analytics unit suite: 17 passing tests.
- Chromium integration suite: 9 tests covering no consent/rejection, one
  existing tag and sanitized custom data, expiry/reacceptance, suspended-tab
  focus/visibility, private push/replace history, private direct entry,
  preview/local host gating, and cross-tab withdrawal. All 9 pass.
- Targeted ESLint for both implementation files and all new/updated test files
  passes. Repository-wide lint reports 52 errors and 31 warnings; the exact
  same counts were reproduced on a clean worktree of production `937c082`.
- TypeScript `tsc --noEmit` passes after Prisma/Next generated their files.
  The initial pre-generation run was not a valid final type-check result.
- Full `npm run build` passes, including public image verification, 11
  content/link-policy tests, 4 image-metadata tests, Prisma generation, Next
  compilation/type checking, strict content audit (no findings), and rendered
  image attribution checks. The local database URL was a nonconnecting
  localhost placeholder, not a live database credential.
- The first sandbox build stalled at compilation without a diagnostic and was
  stopped. An approved execution retry outside the sandbox passed.
- `git diff --check` passes. Homepage, article content, styles and images are
  unchanged by this repair.

## Reproducing the analytics tests

Run `npm run test:analytics`. For browser integration, first build locally with
`VERCEL_ENV=production`, `GA4_MEASUREMENT_ID=G-ST95SE5T38`, and a harmless local
database placeholder so the compiled consent component contains the existing
measurement ID, then run `npm run test:analytics:e2e`. Install Chromium if it is
not already available. The dedicated config starts a local server on port 3100
and tests route a production hostname to that server while intercepting all
Google traffic. A normally built Vercel Preview keeps analytics disabled.

Real Google-tag automatic-event behavior, Tag Assistant/DebugView, live campaign
attribution, and account-level outbound/redaction decisions were not tested or
changed. UI copy and images were not edited, so this is a behavioral repair,
not a new editorial publication.
