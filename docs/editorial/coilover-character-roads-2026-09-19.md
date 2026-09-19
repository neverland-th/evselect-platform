# Character, road context and editorial photography

## Scope

User approved `ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?` and requested character/use-case/Thailand-road discussion plus real product images, contextual road/racing photography, manufacturer links and preservation of the existing UI. This revision is Preview only; no production aliases or backend changes are authorized. Keep the existing article slug and supplied KW cover.

## Editorial decisions and evidence

- Use thai-natural-writing: reader-facing `โช้คสตรัทปรับเกลียว`, conversational questions, concrete symptoms; no invented personal test or price claims. The expensive-damper hook is explicitly relevant to all budgets and does not assign blame to owners.
- Add `#character-and-roads` to the article and contents. Distinguish intended use, subjective feel, installed system and adjustment limits. Do not classify national brands as uniformly hard/soft or claim national road-quality statistics.
- HKS current HIPERMAX S page: https://www.hks-power.co.jp/en/product/suspension/hipermax/maxs/index.html — road comfort/vehicle control positioning; describes 2026 generation separately.
- HKS HIPERMAX R: https://www.hks-power.co.jp/en/product/suspension/hipermax/r/index.html — track-focused positioning with daily use considered. This is manufacturer positioning, not an EVSELECT comparative test.
- KW Street Comfort: https://www.kwsuspensions.com/uk/products/street-comfort — demonstrates distinct product goals within the brand.
- BILSTEIN Academy: https://performance.bilstein.com/en/suspensions-with-damping-force-adjustment/ — fixed basic valve characteristics versus adjustable bypass. No generic click recipe reproduced.
- No same-method road roughness dataset comparing Germany and Thailand was obtained. The discussion uses conditional route examples, not national rankings.

## Image provenance

Eight new photographs are interspersed in the article. Source URLs are recorded in `scripts/fetch-damper-editorial-images.mjs`; exact manufacturer/source-page links and captions are in `src/components/articles/DamperPhoto.tsx`. Files are proportionally resized/converted to WebP, not generated, composited, recolored or retouched. Product photos use contain-fit. Each photograph was visually inspected. The original user-supplied KW AVIF remains unchanged.

| Local file | Source / identification | Reuse status |
|---|---|---|
| tein-flex-z.webp | TEIN global FLEX Z page; actual kit photograph, not initial rejected car banner | Manufacturer copyrighted image; attribution is not permission |
| bilstein-b16.webp | BILSTEIN official B16 product page | Manufacturer copyrighted image; attribution is not permission |
| ohlins-road-track-w177.webp | Öhlins Thai page MES MV10S1 for W177; explicitly not an EV kit | Manufacturer copyrighted image; attribution is not permission |
| bc-zr.webp | BC Racing North America ZR product page | Manufacturer copyrighted image; attribution is not permission |
| hks-hipermax-s.webp | Current HKS HIPERMAX S page | Manufacturer copyrighted image; attribution is not permission |
| hks-hipermax-r.webp | HKS HIPERMAX R page | Manufacturer copyrighted image; attribution is not permission |
| bangkok-ratchadamri.webp | kallerna, Bangkok traffic 3.jpg, Ratchadamri Road, 25 December 2019 | CC BY-SA 4.0, linked author/source/license, resize and conversion disclosed; same license retained |
| bmw-m4-gt3-spa.webp | ACBE25, BMWWRT462023SPA24.jpg, Team WRT #46 at Spa, 2 July 2023 | CC BY-SA 4.0, linked author/source/license, resize and conversion disclosed; same license retained |

Commons originals and license declarations checked:
- https://commons.wikimedia.org/wiki/File:Bangkok_traffic_3.jpg
- https://commons.wikimedia.org/wiki/File:BMWWRT462023SPA24.jpg

The Bangkok image is context, not evidence of potholes or present-day national road quality. The racing photo makes no claim about the fitted damper brand. Product images illustrate the named series, not fitment or stock. Product-image permission/reuse basis must be confirmed before production publication; no blanket license was found or asserted. The preview is not a rights-cleared production release.

## Verification

- Source commit: `a3fd180`; Next.js 16.3.2. Changed-file ESLint, TypeScript and production build (41 generated routes) passed locally. No migration executed.
- Preview: https://evselect-platform-pyfkr9l7y-evselect-com.vercel.app/articles/ev-damper-tuning-bump-rebound-guide#character-and-roads
- Deployment `dpl_87pWVBsTUw7D8bg3T39XXCqwPYjv`: CLI target Preview, API READY, no production aliases; build-to-ready interval 38.675 seconds.
- Live browser verification passed at 360/390/768/1440 px and 200% text: 8 new photographs decoded, preserved KW cover, 18 TOC links, 9 comparison rows, 4 diagram modes, 3 scenarios, 7 FAQs, homepage/catalog title and cover, keyboard interactions and downloads. No observed horizontal overflow or page errors. Native diagram/scenarios also passed without JavaScript.
- Local and live homepage carousel regression passed: 3 slides, 11 model routes, arrows/keyboard/wrap, autoplay/pause/resume, reduced motion and touch swipe.
- Sensitive paths `/categories`, `/products`, `/vehicles`, `/fitment`, `/export`, `/api/export/shopee`, `/api/export/woo` each returned 404 on Preview.
- Evidence: `scratch/character-roads-local/results.json`, `scratch/character-roads-preview/results.json`, `scratch/character-roads-audit/audit.json`, `scratch/vehicle-showcase-qa/results.json` and associated screenshots. Local screenshots visually inspected; live assets and page assertions independently verified.
- Production before/after remained `dpl_7uPfCEoPgYUsawKSH6pW9LkAWn4m`, READY with the same evselects.com aliases. Live production still has the old article title and content SHA256 `7f61e47e07f91ce415f132b2d0ba428fa133845db6c00708497be71c8cdc85b3`. This update has NOT been deployed to production.
- Existing robots.txt/sitemap.xml 404s were observed again; they are outside this scoped editorial revision. Preview noindex is expected. No Google-ranking or field performance improvement is asserted.
- Open production gate: confirm reuse permissions/basis for manufacturer product photos, then obtain production publishing approval. Commons attribution/license conditions are shown under both contextual photographs.
