# Home keyword follow-up — 29 September 2026

Status: IMPLEMENTED and VERIFIED locally; production deployment pending.

## Research and scope

The user requested Similarweb or another available tool, a keyword summary, content implementation and deployment without a second approval. The ongoing content scope is Home. No new database, checkout, paid plan, article URL or dependency is introduced.

The Similarweb Keywords Overview request for `ยางรถไฟฟ้า`, country `th`, latest monthly volume/difficulty/clicks returned HTTP 403 `FORBIDDEN_ERROR` (missing access claims). No keyword metrics were returned. This is unavailable data, not zero searches. No alternate endpoint was used to bypass that denial.

Fallback: the same-day actual Google Trends browser research in `google-trends-ev-accessories-th-2026-09-29.md`: Thailand, past 12 months, Web Search, all categories, search terms. Fourteen unique terms in three comparisons. Indices are normalized within a comparison, not monthly search volumes; do not compare values across groups. “ยาง รถ ev ราคา” appeared in related Top queries for ยาง EV. The new full-sentence headings are editorial interpretations, not separately measured keywords.

| Keyword group | Use in this release |
| --- | --- |
| ของแต่งรถไฟฟ้า / ของแต่ง EV | Keep existing Home positioning; low Trends values do not prove no demand |
| ยางรถไฟฟ้า / ยาง EV | Prioritize the existing tyre guide in Home's topic cards, without a duplicate article |
| ยางรถ EV ราคา | Add a practical quote-comparison checklist and FAQ, not invented price figures |
| โช้คแต่ง / สตรัทปรับเกลียว | Retain existing natural Thai entry points to suspension content |
| ฟิล์มรถยนต์ / พรมรถยนต์ | Research backlog only; the broad signals are not specifically EV demand |

## Production preservation

The live alias changed during this work to READY deployment `dpl_1WVJoe4axcHv5uZ7QYvdk4TVTBth`, `evselect-platform-i4ms7uv35-evselect-com.vercel.app`. The concurrent tyre worktree was clean at `e329c81`. Its history includes the prior Home release `946bf9c`. Merged that completed release into this Home branch, preserving the new tyre article, images, catalogue, incoming links and sitemap. No edits to the other worktree or main branch.

## Content and image evidence

Home retains its UI, metadata and pre-launch status. New content explains comparing the same tyre specification, quantities and included services, written warranty and quotation dates. It offers questions rather than unsupported product, price, fitment or ranking claims. All technical selection still refers to the vehicle's requirements.

- Manufacturer evidence: https://www.michelin.co.th/auto/advice/tyre-basics/tyre-markings-explained — checked 29 September; explains tyre markings, vehicle manual, load and speed ratings. Linked beside the relevant text, not used as price evidence.
- Existing local photo `public/images/articles/ev-tyre-michelin-audi.jpg`, 1920 × 1920, was individually viewed and reused without editing. It is an Audi wheel with Michelin Pilot Sport All Season 4, not claimed to be an EV or a universal fitment recommendation.
- Exact creator page rechecked: https://commons.wikimedia.org/wiki/File:Audi_Wheel_with_Michelin_Pilot_Sport_All_Season_4_Tire.jpg — TaurusEmerald, own work dated 17 November 2024, CC BY-SA 4.0. Home keeps full ratio and visible source/licence/resize credit. Next.js provides responsive optimized images; no new asset download.
- Internal links: existing tyre and alignment guides, plus new `#compare-ev-tyre-prices`; same tab. Manufacturer and photo/licence sources: protected new tab with accessible notice. No forced new-tab internal links.

## Checks

- Targeted ESLint on Home and its SSR test passed; `git diff --check` passed (line-ending notices only).
- `npm run build` passed: 88 referenced public images, 11 link-policy tests, TypeScript/Next compilation, 43 generated routes. Strict audit: 31 pages, 1,909 links, 1,323 internal links, 91 contextual candidates, no issues or blocked routes. Both sitemap indexes and the 24-URL sitemap passed HTTP/XML checks; robots references passed.
- Actual built-server Home tests at `http://127.0.0.1:4339` passed 4/4: metadata/headings, five SSR FAQs/pre-launch state, actionable tyre-price guidance and photo credit, anchors/tab policy.
- Read the complete final rendered Home at desktop 1440 × 1000 and mobile 390 × 1000, including all five expanded FAQs, shared header/footer, every content image and the new image credit. Nine overlapping desktop captures and fifteen sequential mobile captures plus three overlap-detail captures cover the full page. No page-level overflow, broken images or clipped new text. Inspected all six main-content images individually. The new photo keeps its full square ratio. Native FAQ opens/closes with Enter; browser recorded no errors/warnings.
- Activated the price-checklist FAQ link: same tab, target top about 112 px, below the mobile header. Activated both new contextual article links and checked the actual tyre/alignment H1s in the same tab. The new Michelin markings source opened a separate tab while Home remained open. The image-source credit is separate from the technical source.
- Audited current live production before deployment: 31 pages / 1,903 links / zero issues. Compared all audited content/link fingerprints: only `/` differs; the other 30 routes match the reviewed build. This preserves the concurrent tyre release, not just its filename or route.
- Evidence is in ignored `scratch/keyword-home-desktop-*.png`, `keyword-home-mobile-*.png`, `content-link-audit.json` and `keyword-predeploy-live-audit.json`. Screenshots are local review evidence, not yet production evidence.

Rollback target: prior READY production deployment `dpl_1WVJoe4axcHv5uZ7QYvdk4TVTBth`. A release-induced failure to render Home, broken image/guide link, lost latest tyre content, or incorrect production alias is a rollback/fix trigger. No database migration or irreversible data mutation is involved. CI was not run; the checks above ran locally against the production build. Live verification remains pending.

Google indexing, rankings, Similarweb volumes/difficulty and conversion effects are not verified by this work.
