# Home hero image replacement — 2026-10-12

## Scope and source

- User requested replacing the first main image on Home with their `tesla model3.png` attachment and deploying through Vercel.
- Production base: `445563cdecc384dbf3922cd7517e24194ca15e3e`, deployment `dpl_8p1kUidNQ422hidTni69LNyw2beS`; the older local checkout was not redeployed.
- Release source: `937c082d2cea63c2a59915254b67e26db84c1e30`, branch `codex/homepage-hero-tesla-2026-10-12`.
- The connected GitHub upload tree exactly matches the tested local tree: `7c7754954e5dfeaa66bc88e1bdf2de5ed507a4e0`.
- The new PNG is byte-identical to the supplied attachment: SHA-256 `9ef6924aabd6b84a8568ecf1946cccc921f5afed7c0c0c1582c0848ae9f81300`; 1176 × 733 pixels, 918,202 bytes.
- Asset: `/images/home/tesla-model-3-white-user.png`. Only the Home hero uses it. The existing red Model 3 article thumbnail and article photos remain unchanged.
- Preserved the original frame, title, gradient, link, responsive sizes, eager loading and high fetch priority. On smaller screens the new image uses contain/top alignment so both ends of the car remain visible; desktop retains cover/center alignment.
- Added factual Thai alt text and a Home-only image-credit record. Photographer, manufacturer source, trim/year and open licence are unspecified, not copied from the replaced photograph.

## Pre-publication verification

- PASS: production build, referenced-image verification, link-policy tests and image-metadata tests.
- PASS: targeted ESLint and `git diff --check`.
- PASS: 15 Home/public-indexability runtime tests against the final built server at `http://127.0.0.1:4369/`.
- PASS: strict built-site audit, 32 routes / 29 published pages / 2,158 links / 1,576 internal links, zero findings and blockers. Sitemap endpoints returned valid XML.
- PASS: attribution audit, 28 page/filter variants, 126 rendered ImageObjects, 67 credit records.
- PASS: full rendered Home reader review in sequence at 1365 × 900 and 390 × 844, including every displayed image, all six expanded FAQ answers, shared header/footer and pre-launch notices. No copy or unrelated image was changed.
- Finding corrected: the supplied wide photograph lost the front and rear of the car with the existing mobile cover crop. Responsive contain/top alignment fixed this without changing the container or desktop layout.
- PASS: additional Home hero and new credit-record checks at 320 × 844; no horizontal overflow. New credit-record notes inspected expanded on desktop and mobile.
- PASS: all visible Home images loaded after scrolling. The mobile-hidden desktop logo is intentionally excluded from visible-image checks.
- Browser warnings observed were from a third-party Chrome extension, not the website; no application console errors were observed during local review.
- Preview deployment `dpl_G6sY9H2HABpvjnCiLrYWc8mcWWEk` reached READY for the exact release commit. Its platform noindex header is not production indexability evidence.

## Production verification

- PASS: production deployment `dpl_EYJzZ7iabeSjzW5d4bTRaj82s37d` reached READY with no alias error; Vercel confirms release commit `937c082d2cea63c2a59915254b67e26db84c1e30` on the intended project.
- Immutable URL: `https://evselect-platform-d61fkcjxe-evselects-com.vercel.app`. Framework: Next.js; reported build-to-ready duration: 90.864 seconds.
- PASS: aliases include `evselects.com` and `www.evselects.com`. Both Home origins return HTTP 200 and contain the new hero.
- PASS: 15 runtime tests against `https://evselects.com/`, including the supplied hero, unchanged article thumbnail, loading priority, attribution, original article link, public robots/canonicals and sitemap exclusions.
- PASS: post-release strict audit, 32 routes / 2,158 links, zero findings or blockers; sitemap index and sitemap XML checks pass with 29 published URLs.
- PASS: post-release attribution audit, 28 page/filter variants, 126 rendered ImageObjects, 67 credit records.
- PASS: live original PNG returns HTTP 200 and exactly matches the attachment SHA-256 and 918,202-byte size. A 640-pixel optimized request returns HTTP 200, `image/webp`, 12,396 bytes.
- PASS: actual live desktop (1365 × 900) and mobile (390 × 844) screenshots show the new image loaded with no horizontal overflow. Mobile uses contain alignment and displays the complete car.
- PASS: clicking the new hero navigates in the same browser tab to `/articles/tesla-model-3-highland-review`; its existing red article photo remains unchanged. The Home CTA navigates to `#ev-accessories` and actually places the section at approximately 112px from the viewport top. The rendered Michelin source link retains `_blank` with `noopener noreferrer`.
- Screenshots: `scratch/home-hero-tesla-2026-10-12/live-desktop.jpg` and `scratch/home-hero-tesla-2026-10-12/live-mobile.jpg`.
- Runtime check: no matching error/fatal groups returned for this deployment in the checked 15-minute window. Drains: 0 configured; no monitoring or analytics configuration was changed.
- Rollback reference, if requested: previous production deployment `dpl_8p1kUidNQ422hidTni69LNyw2beS`.
- No Google indexing, ranking, traffic, field Core Web Vitals or new PageSpeed score is claimed by this release.
