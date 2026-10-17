# Vehicle Style public trial

The owner explicitly requested Home use without either API keys or studio codes.
The Home button mounts the existing Thai editor in an isolated ShadowRoot;
`/vehicle-style/studio` also opens the same editor without authentication.
The noindex tool is excluded from the sitemap; `/vehicle-style` remains the
public guide. The main site keeps its established layout and security headers.

## Private image service

The existing `evselects-vehicle-style` backend and Android APK retain their
authentication. Only Next.js server routes use `VEHICLE_STYLE_SERVICE_CODE`, a
production Secret, to call that service. OpenAI credentials remain in that
backend. No credential is sent to the visitor, saved in the frontend, or checked
into source. Responses are streamed and never cached. No image is stored by the
Home editor or quota database; users must save results before leaving.

`src/lib/vehicle-style/client.js`, `options.js`, `input.mjs`, and the scoped CSS
reuse the existing standalone app implementation. Keep option IDs and validation
compatible with that private service. Test fixtures and service credentials must
never be copied into public assets.

## Shared quota

The additive Prisma migration creates only `VehicleStyleQuota`, separate from
commerce tables. An atomic PostgreSQL upsert reserves one attempt per network
per Bangkok calendar day, with a shared hard limit of five attempts/day across
instances and deployments. The Vercel-overwritten client-IP header is HMACed with
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
- `BASE_URL=... node --test scripts/test-homepage-content.mjs scripts/test-llms.mjs`.
- Review the actual Home editor at Android widths and desktop; distinguish local
  fixtures, real image calls, and physical Android picker/export evidence.
