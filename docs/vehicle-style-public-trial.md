# Vehicle Style public trial

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
Home editor or quota database; users must save results before leaving.

The owner supplied `https://designs.magicpath.ai/v1/crisp-wave-3071`. Its exact
revision `462367477918224384` was imported as the namespaced React component
`src/components/vehicle-style/EVSELECTSStudio.tsx` and CSS, without importing the
Vite scaffold, external fonts, global reset or unused package dependencies.
Wheel controls retain the existing diameter/width choices and free text design.
The imported component calls only the same-origin public facade. Its styling text
uses the service's existing `stylePrompt` field (2,000 characters), preserving the
supplied app's high-resolution generation path (2304x1344/high/JPEG). Colour/wheel-only
requests continue using the established medium-quality options path. Explicit consent and quota readiness are
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

## Shared quota

The additive Prisma migration creates only `VehicleStyleQuota`, separate from
commerce tables. An atomic PostgreSQL upsert reserves one attempt per network
per Bangkok calendar day, with a shared hard limit of five attempts/day across
the main website's instances and deployments. This quota covers requests through
`/api/vehicle-style/preview` only; direct use of the separately public MagicPath
service is not covered and must not be described as subject to this global cap.
The Vercel-overwritten client-IP header is HMACed with
the day and the server credential; raw IPs, prompts and images are not stored.
Old quota rows are cleaned on the next successful reservation after seven days.

Missing credentials, unknown client IPs, database errors and exhausted quotas
stop before a paid service call. Failed/ambiguous provider attempts remain counted
and are never retried automatically. Preview environments fail closed without
production credentials. A change to quota limits must update the SQL check,
public copy, llms index, and tests together.

## Validation

- `tsx --test scripts/test-vehicle-style-api.ts`: origin, validation, quota, private
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
