# EVSELECT link completion — change record

Latest status: **Deployed and technically verified** under the explicit deploy-first instruction. See [production release evidence](link-release-production-2026-09-21.md). Full legacy editorial/source review remains deferred and is not reported as passed; older "not deployed" statements below describe prior checkpoints.

## Release-order override — 2026-09-21

The user explicitly instructed: "deploy ก่อน แล้ว update skill + memory". For this release, deploy the prepared sitemap/link changes after technical checks, then verify production and update the skill and memory. This is a release-specific override of the earlier full editorial pre-publication gate, not a declaration that every legacy article/source/image has been reviewed, and not a permanent removal of editorial review. Keep the remaining review items in the reader ledger. No checkout/backend work or unrelated Webflow publishing is authorized.

Latest completed local checks: production build including strict audit passed (31 pages, 1,642 anchors, zero findings); 11 link tests passed; rendered structural checks passed at 1440/390 widths (62 views); interaction checks passed (220 states, no errors), including the worksheet round trip. The pre-deploy production alias was freshly confirmed as dpl_AEUYkSAgqf8AHeyS3o5CdL8CFfr8 / evselect-platform-cr0rrvplm-evselect-com.vercel.app, READY. This is the rollback target if the new release introduces a material regression.

Status: In progress. Owner: Codex. User authorization: complete the sitemap/internal/external-link work, deploy and verify without another approval. No backend, checkout, domain migration or unrelated Webflow publishing.

## Assess

The preceding release restored sitemap indexes but left existing link defects under a legacy baseline. This change must correct the rendered public content, not simply preserve a passing baseline. Scope: the homepage, article catalog, 22 articles and six linked pending/noindex pages, including shared UI, interactive article states and source/photo links.

Webflow discovery on 2026-09-21 returned one unrelated site (LaunchSpark) with no custom domains. Current evselects.com is the Next.js/Vercel project evselect-platform. Do not publish LaunchSpark or migrate platforms.

## Plan and execution

1. Fix shared navigation/brand links, misleading anchors, heading semantics and internal/external tab behavior while preserving visual structure and existing URLs.
2. Place contextual links only where the source paragraph actually introduces the destination topic. Verify destination content, URL and fragment.
3. Inspect each unique external source against its neighboring claim. Record primary/source-photo/first-person experience distinctions, redirects, inaccessible evidence and any wording corrections. HTTP 200 alone does not verify a claim.
4. Run strict audit without legacy exceptions; test same-tab and new-tab behavior plus menu and interactive states.
5. Read the complete final affected content and inspect all rendered images on desktop and mobile. Record actual coverage; do not call structural automation a full reader review.
6. Deploy only the reviewed commit to the existing production project, then verify sitemap XML, all public routes/links, browser behavior and runtime logs.

## Impact and risk

- Users: navigation destinations and outbound tab behavior change; article structure and routes remain stable.
- Systems: frontend and build-time verification only. No extra paid service or data migration.
- Main risks: nested links, image/source mismatch, unsupported claims, hidden states missing from SSR, unrelated edits being published. Mitigation: source-aware edits, current evidence ledger, full rendered review and strict post-build/live audits.
- Communication: progress and findings in the current task, final deployed URL/commit and remaining external-data limitations. No third-party notifications.

## Rollback

Known current release before this content change: dpl_AEUYkSAgqf8AHeyS3o5CdL8CFfr8 (runtime f65c1f5). Roll back the production alias only if this change introduces a material regression such as missing public pages, invalid sitemap, broken rendering or incorrect navigation. Recheck the previous deployment and actual aliases first; never reset user files or database state. Verify the restored canonical sitemap/routes after rollback. No rollback has been performed.

## Sustain

Keep strict source/DOM checks in every build after defects are resolved. Manual source relevance and complete reader/image review remain required; do not weaken checks or regenerate exceptions to make a new page pass. Search Console retrieval/indexing is a separate observation and may not be claimed without account evidence.

## Latest local checkpoint

The existing contextual-link skill now explicitly separates internal same-tab navigation from protected external new-tab navigation, covers shared/dynamic components and real fragment targets, and checks that anchor text does not promise content absent from a preparation page. Structure validation and all 11 link tests passed.

The latest strict local audit passes 30 routes / 1,637 anchors without baseline exceptions. Rendered review caught misleading policy CTAs and a contact destination with no contact method: policy anchors now disclose preparation status; contact exposes the Messenger URL already present in global navigation, without adding a checkout, a form backend, or invented business details. Changed-file lint passes. Full capture is complete, but capture is not review.

Actual per-page reader-review coverage and remaining work are recorded in `link-reader-review-2026-09-21.md`. Production deployment of this content release has not yet occurred. Do not report local tests as a deployed or Google-indexed result.
