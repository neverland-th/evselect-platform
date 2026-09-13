# EVSELECT Frontend Release v1.3

Prepared 2026-09-13. Changes from v1.2: mobile navigation now opens from the right, the hamburger sits at the far right of the header, shopping-bag navigation is replaced with a package icon, and GitHub repository identity has been verified. This release includes the approved cumulative pre-launch changes and supplied responsive article covers.

## Requested behavior

- The damper article cover uses the user's original landscape artwork on screens at least 768px wide and portrait artwork below 768px. Both the article listing and article page preserve the full image and text without cropping or badges over the artwork.
- The mobile hamburger is at the upper right. Its drawer opens from the right and retains Escape handling, focus containment/restoration, and scroll locking. The drawer is portalled to the document body to avoid clipping by the sticky header.
- The storefront has no cart control. Existing links lead to articles, pre-launch information, and the confirmed contact channels.
- The cumulative pre-launch patch removes demo purchase/stock/fitment claims and retains article routes. Backend, schema, inventory logic, APIs, and package dependencies are unchanged.

Source: user instructions in the EVSELECT handoff conversation; supplied `Damper tuning articles.jpg` and `Damper tuning articles(mobile).jpg`; changed source files in this release.

## Verified source and deployment mapping

| Item | Result | Label | Source |
|---|---|---|---|
| Canonical handoff repository | `neverland-th/evselect-platform`, ID `1345499586`; not a fork | Confirmed | https://api.github.com/repos/neverland-th/evselect-platform |
| Handoff commit | `8da4bee101cb98f28be8ec003054bcbc829eb6c0`; all 776 ZIP source blobs match the GitHub tree | Confirmed | https://github.com/neverland-th/evselect-platform/commit/8da4bee101cb98f28be8ec003054bcbc829eb6c0 and local SHA-1 blob comparison |
| Existing Vercel-connected repository | `evselect/evselect-platform`, ID `1345508118`; distinct from the canonical handoff repo | Confirmed | https://api.github.com/repos/evselect/evselect-platform and https://vercel.com/evselect-com/evselect-platform |
| Handoff account permissions | Write/admin on `neverland-th`; read-only on `evselect` | Confirmed for the authenticated account | Authenticated repository API permission responses on 2026-09-13 |
| Production reference | `01c83175d9cb885b2dc8473612b920f6ba441d39`, deployment `5n8H7YPBM5YV4uBKSWMx5H5NL24A` | Dashboard observation | https://vercel.com/evselect-com/evselect-platform |
| Earlier blocked deployment | Vercel could not match its commit email to a GitHub account | Dashboard observation | https://vercel.com/evselect-com/evselect-platform/D6mWdiRhrNUh3LfSPHn6KmQU3jmt |

The release branch is based on the exact handoff commit. Creating this branch or its pull request does not change `evselects.com`. No original branch is overwritten and no historical commit is rewritten. Any new commit uses GitHub's authenticated-account author defaults rather than a fabricated email.

## Validation

- `npm run build`: passed on the final Vercel/Next.js source, including Prisma client generation and TypeScript checking. No database migration or seed ran.
- `scripts/verify-frontend-prelaunch.mjs`: passed against a locally started production server. Home, contact, product pre-launch, article index, and all 22 article routes returned HTTP 200. All 108 checked local article image references exist. The legacy blog redirect and existing admin/API protection checks passed.
- The earlier attempt to run the HTTP checker without a reachable server failed with connection refused. The production server and checker were then run together successfully.
- Browser interaction testing and a full factual audit of pre-existing article bodies were not performed for this release.

## Remaining deployment step

Resolve the existing Vercel project's Git source connection to the intended repository, or provide an authorized route to the currently connected repository. The current GitHub account cannot write to `evselect/evselect-platform`. No Vercel project settings, DNS, production environment variables, or deployment have been changed by preparing this release.
