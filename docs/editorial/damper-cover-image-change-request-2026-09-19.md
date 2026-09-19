# Change request: synchronize article, homepage and search/share cover

Requester: site owner. Date: 2026-09-19. Priority: High. Status: **Pending production approval**.

## Description and justification

Use the supplied KW photograph consistently for the first article image, its homepage/listing cards, Open Graph, Twitter and BlogPosting image. Preserve the article URL, surrounding UI and pre-launch protections. The goal includes production/search-facing delivery, not merely a passing Preview. Google choosing/updating a search thumbnail remains an external outcome requiring separate observation.

## Verified state

`scripts/verify-damper-image-alignment.mjs` was run against the live Preview and production on 2026-09-19. Evidence: `scratch/damper-image-alignment/results.json`.

| Surface | Live Preview | Live production |
|---|---|---|
| First blog image | Supplied KW AVIF | Existing ev-damper-tuning-cover JPEG |
| Homepage card | Same KW AVIF | damper_tuning_hero.jpg |
| OG / Twitter / BlogPosting | Same-image KW social JPEG | Existing ev-damper-tuning-cover JPEG |
| New KW AVIF / JPEG URLs | Both HTTP 200; exact hashes match local files | Both HTTP 404 |
| Indexing header | noindex, intentionally retained | No X-Robots-Tag on article response |
| Actual Google thumbnail | Not expected to index Preview | Data unavailable; not visually verified |

Preview URL: https://evselect-platform-pyfkr9l7y-evselect-com.vercel.app/articles/ev-damper-tuning-bump-rebound-guide

The AVIF and social JPEG are different encodings of the same picture: RGB mean absolute difference at 256x144 is 0.164/255, with unchanged framing. Preview HTTP bytes match local originals exactly. Canonical remains the production article URL.

## Impact and risk

- Users: low UI impact; consistent cover in cards and article. No inventory/payment changes.
- Systems: article and homepage/listing image references plus social/search metadata; no backend work.
- Processes/cost: no new service or purchase needed. Rights basis for the owner-supplied KW image should remain on record.
- Risk: promoting the entire current Preview would also publish the new article and third-party product photographs whose permissions remain unconfirmed. **Do not promote the complete Preview as an image-only fix.**
- Risk: Google may retain or choose a different thumbnail. Metadata is an input, not a guarantee or instant update.

## Implementation plan

1. Site owner approves a production release limited to cover assets/references/metadata, or separately approves the full editorial release after image-rights review.
2. For image-only scope, identify the exact current production source checkout/commit from authoritative local/Vercel evidence, then isolate only the cover changes. Do not assume the latest Preview equals the production baseline.
3. Reuse one shared image definition across article hero, homepage/listing cards and OG/Twitter/BlogPosting. Keep compatible JPEG social encoding of the supplied AVIF.
4. Build and run scoped image alignment, mobile/desktop and sensitive-route regressions on a Preview of that production-based patch.
5. After approval, deploy production and verify READY, aliases, every referenced image URL, actual decoded hero/card and metadata, and unchanged non-scoped content.
6. Use Search Console URL inspection/request indexing if an authorized connection becomes available. Do not claim it was submitted through an unrelated analytics connector. Observe actual Google result separately; never claim guaranteed thumbnail selection or timing.

## Communication and support

Explain that Preview is already aligned but production is not yet updated. Ask one explicit production-scope approval in this task. No external stakeholder messages or training needed. Report confirmed delivery separately from Google's later thumbnail decision.

## Rollback

Before deployment, freshly record the current production deployment/aliases and source revision. The prior verified deployment is `dpl_7uPfCEoPgYUsawKSH6pW9LkAWn4m`, but must be rechecked before release. Trigger rollback for broken cover URLs, incorrect images, route regressions or unintended publication. Restore the recorded production deployment using the approved Vercel rollback procedure, then recheck aliases, routes, images and metadata. Do not revert unrelated source work or delete assets broadly.

## Approval and completion gates

Site owner: pending production publishing approval. Google SERP thumbnail evidence: pending external observation. Do not mark the active goal complete based only on Preview.

Primary guidance checked: https://developers.google.com/search/docs/appearance/google-images — Google image-preview selection is automated; representative high-quality images and consistent metadata inform selection. No promise of a forced image or immediate refresh is made.
