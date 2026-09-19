# Homepage coming-soon banner

## Request and scope

Replace the homepage vehicle-finder section shown in the supplied screenshot with an exciting, follow-worthy coming-soon banner. The current source had already replaced that grid with VehicleGuide; this change replaces that entire section, not another unrelated homepage block.

- Preserve surrounding homepage structure, article routes, white/slate/lime identity and public pre-launch protections.
- Retain `#vehicle-finder` as a legacy anchor and add `#coming-soon` for direct preview.
- Keep the existing `#launch` panel and its explicit non-transactional status.
- Redirect the mobile review navigation and article-list review CTA to `/articles?category=reviews` so they no longer promise a removed home search interface.
- No backend, inventory, payment, schema or CMS changes.

## Visual and copy

- Skill: artifact-template-ev-select-launch-visual; unchanged retained `assets/reference.png` used as image-generation reference.
- Built-in image generation used; no external image-generation CLI/API.
- Charcoal, ivory, acid-lime and cobalt selector motif; covered concept vehicle, not a real product/fitment photograph.
- Headline: ของแต่ง EV ที่อยากให้รอดู
- Eyebrow: COMING SOON (explicitly requested format).
- CTA: ติดตามข่าวเปิดตัว → existing EVSELECT Facebook page.
- Secondary CTA: อยากได้ของแต่งอะไร บอกเราได้ → existing contact page.
- Clear AI concept caption; no invented launch date, inventory, price, testing or fitment claim.
- Thai text remains selectable HTML rather than baked into the image. The thai-natural-writing skill informed concise copy.
- Source: `public/images/launch/evselect-coming-soon-source.png`; web asset: `public/images/launch/evselect-coming-soon.webp` (1672 × 941, 118644 bytes).

### Final image-generation prompt

Use case: ads-marketing. Create a wide landscape 16:9 coming-soon campaign illustration for EV SELECT's Thai EV accessories website using the supplied retained launch template as the style and composition reference. Preserve ivory negative space on left, charcoal studio area at right, tactile paper and asphalt materials, premium soft dramatic lighting, restrained acid-lime and cobalt selector-line motif. Transform the visible car on right into an unbranded, mostly covered compact EV concept silhouette: satin ivory drape gently lifted at the front corner revealing only a narrow headlight and part of a wheel, a subtle acid-lime light accent. Anticipation, confident and intriguing, not a vehicle sale advertisement. Keep a generous blank left half for accessible Thai HTML headline overlaid later. No lettering, no logos, no buttons, no launch date, no fitment claims, no badges, no extra objects. Preserve sophisticated quiet editorial aesthetic and reference composition, not neon sci-fi. This is an illustrative coming-soon teaser, not a photo of any real product. Return the generated image and local path.

## Similarweb

Requested latest monthly total-web visits, bounce rate and pages per visit for evselects.com, Thailand. Connector returned 403 FORBIDDEN_ERROR: account credit limit exhausted; explicitly says not to retry. **Data unavailable.** No traffic, audience or conversion-lift claims are made. This does not block creating or testing the banner.

## Verification

- `npm run build`: Next.js 16.3.2 build, TypeScript and 41 generated routes passed.
- Scoped ESLint on edited TSX and verification script.
- `scripts/verify-coming-soon.mjs`: 360/390/768/1440, text enlarged to 200%, image decoding, removed finder/carousel, keyboard focus/order, contact navigation, no-JavaScript support, 24 public routes, 7 protected routes, WebP content type and size.
- Screenshots and machine-readable results: `scratch/coming-soon-qa/`.
- Visual review caught a low-contrast secondary CTA on the initial desktop composition; added ivory gradient and stacked tablet layout before Preview.
- The old carousel verifier is historical and is not an acceptance test for the newly requested banner.

## Release boundary

This change is being delivered as a Vercel Preview. Production publication of this new banner has not been requested explicitly after the previous article release; do not infer a new production approval from that earlier release. Request approval once the tested Preview is ready. Do not mark the full homepage goal complete based on Preview alone.

## Verified Preview result

- URL: https://evselect-platform-rnpp2fcq8-evselect-com.vercel.app/#coming-soon
- Target: preview; status: READY (CLI inspect and Vercel deployment API).
- Deployment: `dpl_DtvSo3CQrx117GLWfHdaDLPphtL3`.
- Source commit: `ee3ba4d`, pushed to `codex/vehicle-showcase-2026-09-19`.
- Framework: Next.js 16.3.2; build-to-ready: 32.956 seconds.
- Re-ran the full banner verifier against the actual Preview: all four widths, 200% text, image decode, keyboard, contact navigation, no-JS, 24 public routes and 7 protected routes passed; no observed page errors.
- Evidence: `scratch/coming-soon-preview/results.json` and screenshots in that directory. Desktop and mobile Preview screenshots visually inspected.
- Direct production HTTP check after Preview creation returned 200, existing carousel present, new banner absent, pre-launch status present. No production deployment performed.
- Native app preview-open request returned `queued`; this is not evidence that the user has seen it.
- Approval for production publication remains the next required action; Similarweb data is unavailable but is not a publication blocker.
