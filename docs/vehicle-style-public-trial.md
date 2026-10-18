# Vehicle Style public trial

## Search presentation

The visible description, free-trial terms and app entity are shared through
`src/lib/vehicle-style/public-info.ts`. Home retains the existing editor and
position; its explanatory footer is server-rendered, not hidden SEO text.
The public guide and original-file upload label both use the 15 MB limit.
That is not the separate server request limit: the editor resizes/re-encodes
before submission. That presentation-only release did not change API,
authentication, provider or quota behavior; the later attempt-limit change is below.

Home and `/vehicle-style` emit the same `WebApplication` entity ID. The guide's
WebPage identifies the app as its main entity; Home mentions that app alongside
its existing editorial content. `/vehicle-style/studio` remains noindex and out
of the sitemap. No fabricated reviews, ratings, screenshot, operating-system
support claims are added. Unlimited application attempts reflect the later owner-approved
change below. Schema.org validity does not establish
Google Software App rich-result eligibility, indexing, ranking or AI citations.

Validate with `tsx --test scripts/test-vehicle-style-public-info.ts` and, against
a built server or production origin, `BASE_URL=... node --test scripts/test-vehicle-style-search.mjs`.

The owner explicitly requested Home use without either API keys or studio codes.
Home directly renders the Thai MagicPath editor, without an extra launch button;
`/vehicle-style/studio` also opens the same editor without authentication.
The noindex tool is excluded from the sitemap; `/vehicle-style` remains the
public guide. The main site keeps its established layout and security headers.

## Image service

The separate `evselects-vehicle-style` service was deliberately made public for
MagicPath in the owner's other task on 2026-10-18. This Home release does not
change that deployment or its access settings. Next.js server routes continue
using `VEHICLE_STYLE_SERVICE_CODE`, a production Secret. OpenAI credentials remain in that
backend. No credential is sent to the visitor, saved in the frontend, or checked
into source. Responses are streamed and never cached. No image is stored by the
Home editor; users must save results before leaving.

The owner supplied `https://designs.magicpath.ai/v1/crisp-wave-3071`. Its exact
revision `462367477918224384` was imported as the namespaced React component
`src/components/vehicle-style/EVSELECTSStudio.tsx` and CSS, without importing the
Vite scaffold, external fonts, global reset or unused package dependencies.
Wheel controls retain the existing diameter/width choices and free text design.
The imported component calls only the same-origin public facade. Its styling text
uses the service's existing `stylePrompt` field (2,000 characters), preserving the
supplied app's high-resolution generation path (2304x1344/high/JPEG). Colour/wheel-only
requests continue using the established medium-quality options path. Explicit consent and service readiness are
required before submission; no requests retry automatically. The single image
comparison, custom colours, local upload and labelled PNG export remain available.
The owner subsequently replaced the demo pair with `tesla model3.png` (Before)
and `red tesla.png` (After). Before exactly matches the existing Home white-car
asset, reused through Next's same-origin image optimizer. After is delivered as
`public/vehicle-style/demo-red-user.webp` (253,106 bytes, encoded from the supplied
PNG without generating new artwork). Its original 64px export footer is excluded
when drawing the 2304x1344 comparison area, so the app adds only one footer on
download. Both canvases keep the same frame; the old car-specific crop/mask and
automatic wheel overlay on the supplied example are disabled. Uploaded-photo and
AI generation paths remain available. The images are labelled examples/concepts,
not a newly paid result or fitment evidence. Earlier demo assets are unused.
The previous vanilla client/template remain for reference and compatibility; they
are no longer mounted on Home. Keep option IDs and validation compatible with the
image service. Test fixtures and credentials must never enter public assets.

## Attempt limits removed — 2026-10-18

The owner explicitly removed both the one-attempt-per-network/day limit and the
five-attempt global/day cap. The Home facade no longer reads or reserves quota,
does not require a visitor IP, and does not write daily counters or network hashes.
Status reports unlimited application attempts and the upstream service's readiness.
Existing quota schema, migrations and historical rows are retained without a
destructive database change; none are used to block generation.

Server-only credentials, production configuration checks, same-origin submission,
consent/input/upload validation, streaming and provider errors remain enforced.
The client still permits one active generation at a time and never retries
automatically. Provider billing, capacity and rate limits are independent of the
removed application caps.

## Validation

- `tsx --test scripts/test-vehicle-style-api.ts`: origin, validation, repeat requests without quota, private
  credentials, streaming and failure paths without paid provider calls.
- Existing build, strict content-link and attribution audits remain required.
- Main site styles remain inline. The dynamically imported app has one same-origin
  namespaced CSS chunk; metadata checks validate that chunk instead of forbidding it.
- `BASE_URL=... node --test scripts/test-homepage-content.mjs scripts/test-llms.mjs`.
- Review the actual Home editor at Android widths and desktop; distinguish local
  fixtures, real image calls, and physical Android picker/export evidence.

2026-10-18 MagicPath integration review: actual rendered desktop (1440px) and
mobile (390px), all three panels, help text and both supplied images reviewed.
The imported cross-origin image failure and an unlinked loading-state brand were
fixed. Local browser fixtures verified consent gating, custom colours, diameter,
width, free-text design, same-origin request fields, reset, file upload, PNG
download (2304x1408), keyboard comparison and touch comparison. Widths
320/360/390/412/768/1440 had no horizontal overflow. No new paid generation was
submitted for this UI change; the previously verified public service is reused.
Physical Android device testing remains outstanding.

Production read checks detected the separately authorized public service change;
the old 401 expectation was updated to the owner's explicit public-access intent.
Missing consent is still checked live with a rejected request and no provider call.

The replacement white/red example pair was reviewed at 1440px and 390px, including
each endpoint of the comparison. The original export footer is absent from the
viewer; PNG export remains 2304x1408 with one application footer. Mobile has no
horizontal overflow, and no paid generation was needed for the replacement.

2026-10-18 unlimited-attempt review: built Home, guide and privacy pages opened
at desktop 1440px and mobile 390px. Reviewed the rendered Thai unlimited-use terms,
service status, consent, both supplied demo images and Concept preview wording.
No daily/network allowance remains in Home copy, guide, metadata, schema or llms.txt.
Repeated generation fixtures passed eight times in each viewport without disabling
the next request, horizontal overflow or page errors. All image responses in these
checks were local fixtures: zero paid provider calls. API tests separately exercise
eight repeated calls without quota storage while keeping consent/origin validation.
Full build, content-link/attribution audits, targeted lint and 26 built-page checks
passed. Browser evidence is local-only in ignored `scratch/unlimited-review/`.
Physical Android-device testing was not performed for this server/copy change.
