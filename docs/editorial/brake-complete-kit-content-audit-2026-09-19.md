# Complete front brake kit revision — evidence and editorial decisions

Checked 2026-09-19. This revision follows the user's later instructions to use a simple Brembo / ENDLESS / Carbon Ceramic comparison with clickable, approximate editorial scores. The article retains an auditable table of complete new front kits; it does not substitute pad prices for kit prices.

## Production title hotfix already verified

- Commit `51bfb24`, branch `codex/carbon-ceramic-title-2026-09-19`.
- Deployment `dpl_4Csi7yVskS7AoRzoz1ugTd4BwYjR`, READY and aliased to evselects.com.
- Immutable URL: https://evselect-platform-jf7xibqg1-evselect-com.vercel.app
- Public article, WWW article and listing returned 200 with the new title. Browser checks at 390 and 1440 px found the correct H1 and no horizontal overflow.
- New title: Carbon Ceramic คุ้มไหม? ก่อนจ่ายหลักแสนอัปเกรดเบรก EV
- This title is also retained in the complete-kit revision. The title hotfix was isolated so it could publish before the longer content work.

## Hardware and price evidence

| Complete new front kit | Specification | Price observed | Provenance / limitations |
| --- | --- | --- | --- |
| AP Racing by Essex 20.01.10013 | CP9561 six pistons, 380x36 mm two-piece iron J Hook, 72 vanes; Ferodo DS2500 included | USD 5,249 | Product page directly from Essex; official AP distributor list includes Essex. Optional pre-bedding USD100 is not selected. Destination tax, shipping, import and installation not included in the article's comparable equipment amount. |
| Brembo GT M 1N1.9076A2 | Six-piston monobloc, 380x34 mm two-piece, red / drilled / FM1000 base configuration | USD 4,895 | Race Technologies official Brembo partner product page. Complete axle set includes calipers, discs, adapters, Goodridge lines, pads and hardware. Changing pad/disc options can change price. Destination tax/shipping require a quotation. |
| ENDLESS ALVELL6 FIYIXGH40W | Six pistons, 380x34 mm two-piece, RCP120 MX72; full kit | JPY 602,800 incl. Japanese tax; JPY548,000 ex. tax | ENDLESS manufacturer's own linked application table. Alphard/Vellfire40 application; not Tesla or the owner's M6. |
| Project mu FS6-T127C | Six pistons, 380x32 mm two-piece, 8 straight slots; NS-C standard | JPY547,800 incl. Japanese tax; JPY498,000 ex. tax | Project mu current Toyota matching table; AGH30W/GGH30W 2015/01-2023/06 domestic Japan application. The cheaper starting price belongs to smaller-disc kits. |

Primary links:
- https://www.essexparts.com/essex-designed-ap-racing-radi-cal-competition-brake-kit-front-cp9562380mm-tesla-model-3
- https://apracing.com/find-a-dealer
- https://www.essexparts.com/storage/wysiwyg/20-99-00012.pdf — locally read using pypdf; pp.5-8 confirm supplied Spiegler lines, adapters, hardware and pads. Instructions are evidence only, not reproduced as installation advice.
- https://www.essexparts.com/storage/wysiwyg/1916.pdf — wheel template. Product page lists OEM20 wheels but specifically still requires clearance checks; do not extend to all20-inch wheels or Highland.
- https://www.racetechnologies.com/products/brembo-gt-m-front-brake-system-6-piston-caliper-2-piece-disc-18-model-3-awd-18-model-3-rwd-1
- https://www.racetechnologies.com/cdn/shop/files/1Nx.9076A_DRW.png?v=1782767898
- https://www.brembo.com/jp/ComunicatiStampa/2012/RaceReadybrakekits.pdf — historical manufacturer confirmation of partner, considered together with the current partner product page.
- See `brake-complete-kit-japan-research-2026-09-19.md` for exact current Japanese tables, contents, application limits and linked manufacturer sheets.

No foreign exchange rate, Thai landed price, stock status or current Thai kit quotation has been invented. Native market price/tax and application remain attached to each row. Imported Japanese catalog examples are not advertised as Tesla fitment. The known Brembo Performance 4.5mm outboard wheel-position note is disclosed.

## Owner case and photos

Owner explicitly confirmed Tesla Model3 Performance Highland; front rotor375mm; Advan20x10.5 all four; Michelin Pilot Sport4S; H-Drive Euro Spec; Hardrace suspension parts and carbon parts. The photos show blue ENDLESS calipers and two-piece iron rotors. Box EC690/RCP209 MX72 is consistent with ENDLESS Global M6; the complete kit code has not been independently decoded. Photo appearance alone does not certify authenticity or manufacturer-approved Highland fitment.

Approximate THB200,000 is owner-reported caliper/front-rotor cost, not an independently verified current complete-kit invoice. Thickness, included pads/lines/brackets/tax/labor and thermal measurement timing/emissivity remain unavailable. Thermal below200C is owner-reported, not EVSELECT measurement or certified peak. MX72's50-700C rotor operating range is compound data, not the thermal capacity of the whole kit; do not divide Celsius readings into capacity percentages.

The owner's reported Carbon Ceramic quotes of THB150,000-200,000 and THB300,000-400,000 are explicitly rotor-only and unverified. Supplier identity, exact grade/part/count/tax remain unavailable. These are neither complete-kit prices nor a basis for computing price differences. Tesla's410mm Plaid example is explicitly outside375-390mm and is used only to illustrate system integration.

New self-hosted images (original bytes, rendered responsively with Next Image):
- endless-m6-owner-model3-installed.jpg: owner's image2;2906x2581.
- endless-m6-owner-front-kit.jpg: owner's image4;2831x2153.
- endless-alvell6-official.jpg: https://www.endless-sport.co.jp/products/brake_caliper/img/products_photo/Alvel6_main.jpg ;600x400, manufacturer product illustration, not M6.
- project-mu-fs6-official.jpg: https://www.project-mu.co.jp/ja/wp-content/uploads/2019/04/FS6caliper-1.jpg ;529x250, caliper illustration, not full Tesla kit.

Manufacturer product media carry source credits; no open-license or separate granted permission is claimed. Owner photos are used in the article modification they requested. The approved Porsche cover is retained unchanged.

## Editorial scoring requested by the user

The user explicitly asked to estimate scores from reviews, simplify the labels to Brembo / ENDLESS / Carbon Ceramic, and make every circle clickable. Scores are coarse EVSELECT opinion for road use, not measured results, not an average of reviewer stars, not general scores for every product under a brand, and not schema.org AggregateRating.

| Profile | Performance | Road-use price/value | Low dust |
| --- | ---: | ---: | ---: |
| Brembo GT / FM1000 reference |8|6|4|
| ENDLESS six-pot / iron / MX72 reference |8|6|4|
| Manufacturer-engineered road CCB, illustrated by PCCB |9|3|8|

Rationale and limits are exposed by each circle, with primary manufacturer and firsthand owner-review links. Performance is a qualitative assessment of correctly matched systems; no shorter stopping-distance claim. Price is road-use value, not cross-currency arithmetic; equal6 scores deliberately do not say Brembo is cheaper than ENDLESS. Dust4 reflects owner reports of visible dust, not measured particle mass. CCB8 reflects cleaner-wheel reports while also citing contrary reports; no zero-dust claim. Carbon Ceramic is labeled a material category, not a brand or approval for unidentified aftermarket discs. Confidence for transferring results across cars/versions is low. A one-point difference is not proof of superiority.

Firsthand-review sources inspected:
- https://nam3forum.com/forums/forum/main-forum/e46-2001-2006/303813-choosing-brake-pads-for-brembo-gt-big-brake-kit — 2025 BMW GT/FM1000 owners report positive bite/feel and considerable dust. Different BMW caliper/rotor setups, not a Tesla380mm test.
- https://minkara.carview.co.jp/userid/2381346/car/1882719/11119748/parts.aspx —2021 WRX STI MX72 owner reports modulation and visible dust. Compound context only, not M6 system testing.
- https://minkara.carview.co.jp/userid/3131142/car/2765147/10310208/parts.aspx —2020 Legacy MX72 owner reports after roughly500km; dust and positive warm feel. No kit price inferred from pad price.
- https://www.reddit.com/r/porsche911/comments/1f3avgw/downsides_with_ceramic_brakes/ —2024 owners discuss clean wheels and replacement-cost concerns.
- https://www.reddit.com/r/Porsche/comments/1m5wjub/tracking_with_pccb/ —2025 discussion includes differing dust reports; used to avoid blanket zero-dust claims.

## Supermetrics

Explicitly checked Supermetrics source discovery. The available connectors were ecommerce/marketing account sources and NOT_AUTHENTICATED, not a public manufacturer brake catalog. No account connection, private campaign query, seller contact or write action was performed. Public primary catalogs supplied the verified specifications and pricing instead.

## Verification status

Application verification and production evidence are recorded in the final release note after checks complete. This research document alone does not prove deployment.

## Publication and search-discovery follow-up

The user subsequently requested publication plus sitemap.xml and robots.txt. Native Next.js metadata routes now expose both files. The explicit sitemap allowlist contains the homepage, article index and 22 published articles (24 canonical URLs). Six publicly linked preparation pages (about, contact, editorial-policy, privacy, terms, warranty) remain accessible but are excluded and marked noindex, follow while their content is unfinished. No legal-policy text is fabricated.

Eight existing articles inherited the homepage canonical. Each now declares its own unchanged article URL, so sitemap entries and canonical metadata agree. The six preparation pages also use their own canonical URLs. robots.txt allows public content and render assets, points to the canonical sitemap and disallows crawl of non-editorial product, internal and API paths; it is not access control. Existing server-side route protection is unchanged.

Only the brake article has a maintained lastmod included; other dates are omitted instead of fabricated build timestamps. verify:seo parses the actual XML and HTML from a running site, checks all published article folders against the allowlist, verifies the 24 canonical/indexable URLs and six excluded preparation pages, and checks robots rules. Local build (43 routes), physics, targeted ESLint, four-width brake browser suite and SEO validation passed before deployment. The initial SEO test was corrected to normalize equivalent homepage URLs with/without the trailing slash.

Implementation references inspected: bundled Next.js 16.3.2 sitemap/robots metadata docs; https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap and https://developers.google.com/crawling/docs/robots-txt/create-robots-txt. Publishing these files does not itself prove Search Console submission or indexing.

## Comparison interaction correction

The first complete release (8897643 / dpl_3fL2QUy6Lj3nAeVt75bd8h7XDUJp) used exclusive brand filtering. The user reported that selecting a choice left only one graph. The follow-up changes the controls to independent multi-selection, starts with all three profiles and all nine scores visible, keeps at least one selection, and provides a reset to all three. Clicking any score opens its rationale and sources. Tests now explicitly exercise 3-to-2-to-3 transitions for every choice, 1-to-2 selection by keyboard, all nine source panels and four viewport sizes. Score values and evidence have not changed.

The first complete release independently passed the live SEO suite (24 sitemap URLs / six excluded preparation pages) and the 30-route image check (208 image instances at each of 1440px and 390px). Final graph-release verification is recorded separately after deployment.
