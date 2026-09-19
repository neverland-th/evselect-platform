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

Originally delivered as a Preview pending approval. The user subsequently said “ขึ้นเว็บจริงได้เลย”; the production release below supersedes that gate. The user also authorized future deployments of requested website changes without repeated approval. Draft-only requests remain drafts.

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
- At Preview handoff, production approval was the remaining action; subsequently received and completed below. Similarweb data is unavailable but is not a publication blocker.

## Verified production release

- User approval: “ขึ้นเว็บจริงได้เลย”.
- URL: https://evselects.com/#coming-soon
- Deployment: `dpl_BfDT6M7ivQ89iuTLXWnEAfZuyjxH`.
- Immutable URL: https://evselect-platform-kcf9zrddd-evselect-com.vercel.app
- Target: production; status: READY; aliases include evselects.com and www.evselects.com, independently checked through Vercel API and HTTP.
- Source commit: `5778fc7`; runtime identical to approved `ee3ba4d`. Fresh production build ensures production image/metadata origins, not Preview origins.
- Framework: Next.js 16.3.2; build-to-ready: 31.962 seconds.
- Previous production deployment (rollback reference): `dpl_9Tgs1LK6UQiZ6Ppq84nr45TMhm7Z`.
- Live banner verifier passed at 360, 390, 768 and 1440 px, including 200% text, image decode, keyboard navigation, contact navigation and no-JS. All 24 checked public routes return 200, 7 protected routes return 404. Image: 118644 bytes, image/webp.
- Desktop and mobile production screenshots visually reviewed. Old homepage finder/carousel absent; approved Coming soon banner present. Surrounding UI preserved.
- WWW and immutable production URL return 200 and show new banner, not old carousel.
- Damper image-alignment regression check passed: homepage image/first article image remain the same photograph; OG/Twitter/schema image URL uses evselects.com. Google choosing a thumbnail is not asserted.
- Runtime error/fatal scan scoped to this production deployment, 2026-09-19T08:02:41Z–09:02:41Z, returned no matching entries. No browser page errors observed. Long-term monitoring and log-drain configuration were not verified or changed.
- Evidence: `scratch/coming-soon-production/results.json`, screenshots in that folder, `scratch/damper-image-alignment/results.json`.
- No backend, schema, inventory, payment, or main-branch merge changes.
