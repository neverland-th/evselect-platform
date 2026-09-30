# Home photo update — production verification

## Release identity

- User-authorized objective: recheck “แต่งรถ EV และของแต่งรถไฟฟ้า | EVSELECTS” and deploy.
- Checkout: `evselect-homepage-thai-search`; branch: `codex/homepage-thai-search-2026-09-29`.
- Photo/content application commit: `64ac4a9`; final same-page navigation repair: `85a1fe9`.
- Final Vercel deployment: `dpl_GLaxfcyZouHANDe36o9nWdebpMqv`, READY at https://evselect-platform-3vm2nqx4k-evselect-com.vercel.app/ .
- The final candidate was built using the production environment with `--skip-domain`, browser-tested, then promoted. Both `evselects.com` and `www.evselects.com` were inspected and resolved to this exact deployment.
- Earlier photo candidate `dpl_4mawK7Ldvb2UQ9aHrpevNNmtaMuP` was promoted first; the final navigation repair supersedes it. The previous release-only review record remains historical, not the current public status.

## Requirement-by-requirement checks

| Requirement | Current evidence |
| --- | --- |
| Replace photos only in their existing positions | First guide slot: Tesla Model 3 Performance (2024); existing two vehicle cards: Tesla Model Y L and white ZEEKR X Flagship AWD (2024); former TEIN slot: BC Racing ZR. The existing three-slot guide and two-card vehicle section remain. No additional vehicle row. |
| Keep the existing page structure and routes | Targeted source diff and six rendered-HTML Home regression checks retain section IDs, card counts, destination routes and the pre-launch status. No backend, schema, credential, domain/DNS, dependency or main-branch changes. |
| Cover the three Thai keyword topics | Live Home checks confirm “แต่งรถ EV”, “ของแต่ง Tesla” and “ของแต่งรถไฟฟ้า” in readable content and the description; title is “แต่งรถ EV และของแต่งรถไฟฟ้า \| EVSELECTS”, one H1 and canonical https://evselects.com/ . No indexing or ranking claim. |
| Full rendered reader review | Before promotion, the complete final photo/content version was read top-to-footer at 1440×1000 and 390×1000, including all six expanded FAQs and all images. Review artifacts: `scratch/home-final-desktop-1.png` through `11.png` and `scratch/home-final-mobile-1.png` through `21.png`. The later repair changes navigation markup only, not text, photographs or styles; the affected navigation was then verified on the final candidate and live site. |
| Same-page navigation works | A real browser defect was reproduced: the guide link changed the hash but did not scroll. Home-only `#fragment` links now use native anchors; page-route navigation still uses Next Link. Candidate browser checks covered the guide, hero, journey, tyre FAQ and launch FAQ anchors, including keyboard activation and repeated activation. Target sections landed at approximately 112px below the viewport top. Final live guide-to-vehicle navigation passed on desktop and mobile. |
| Replacement images render on production | The actual live images loaded successfully, with positive natural widths. Desktop proof images show the guide and both vehicle cards. Mobile Home navigation and absence of horizontal overflow were checked. |
| Links, SEO structure and sitemap remain valid | Final live strict audit: 32 public pages, 2,032 links, zero findings. Sitemap index and compatibility endpoint return XML 200 with one child sitemap; `/sitemap.xml` returns XML 200 with 25 published URLs. The audit also checks robots references. This does not prove Search Console acceptance. |
| Attribution remains accessible | Live attribution verification passed 28 page/filter variants, 118 ImageObjects and 58 credit records. Source/rights boundaries remain as recorded in `home-image-replacements-2026-09-30.md`; no new BC Racing reuse permission is claimed. |
| Preserve existing article content | All 22 published article fingerprints were compared between the previous public release and the initial photo candidate, with zero differences. Final build-to-production comparison covered all 32 audited pages, with zero fingerprint mismatches. |

## Checks actually run

- Targeted ESLint on the two navigation files and `git diff --check`: passed.
- `npm run build`: passed, including image-reference validation, content/link tests, image metadata tests, TypeScript, strict build-time audit and attribution validation.
- Final candidate and live `node --test scripts/test-homepage-content.mjs`: 6/6 passed on each.
- Live `npm run audit:content`: passed; report `scratch/home-final-production-link-audit.json`.
- Live `npm run verify:attribution`: passed.
- Final Vercel deployment error-log scan for the preceding 10 minutes: no logs found. Candidate/browser error and warning observations were empty; this is not long-term monitoring proof.

## Final production screenshots

- `scratch/home-final-live-guide-desktop.png`
- `scratch/home-final-live-vehicle-cards-desktop.png`
- `scratch/home-final-live-guide-mobile.png`

The inline editorial comparison was also refreshed to show the Model 3 and BC Racing photos. Its rendered preview loaded all three guide images without captured console errors; it is a design comparison, not evidence of production routing.

## Not verified / unchanged scope

- Google Search Console acceptance, indexing, rankings, traffic and conversion impact were not checked and are not claimed.
- No database migration or production data mutation was performed. No purchase/checkout feature was introduced.
- No Git push or merge into `main` was performed. The release was promoted through the existing Vercel project.
