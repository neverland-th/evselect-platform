# Original User Request

## 2026-08-25T04:12:56+07:00

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview
> Requested team: full team

Write 5 to 10 comprehensive and engaging EV vehicle review articles for the EVSELECT platform, mimicking the expert, detailed review style of CarExpert (reference: https://www.carexpert.com.au/car-reviews/2026-geely-ex2-review-quick-drive). 

Working directory: c:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform
Integrity mode: development

## Requirements

### R1. Content Creation
Research and write 5-10 in-depth EV vehicle reviews in Thai for the models supported on the platform as well as other popular EVs in Thailand (e.g., BYD Seal, Tesla Model 3 Highland, BYD Atto 3, Zeekr X, Deepal S05, Jaecoo 5, etc). The reviews must mirror the structured, expert format of the reference link (covering aspects like Performance, Interior, Ride Quality, and a Verdict).

### R2. Page Implementation
Implement each article as a hardcoded React page component inside `src/app/(storefront)/articles/` (e.g., `articles/byd-seal-review/page.tsx`). Apply modern web guidelines (e.g., `text-wrap: balance` for titles, `content-visibility` for blocks) for optimal rendering. Update the main articles index page (`src/app/(storefront)/articles/page.tsx`) to link to all newly created reviews.

### R3. Image Sourcing
Search the web to find and download new, specific, high-quality images for each vehicle being reviewed. Save these to the `public/images/` directory and integrate them properly into the respective article pages using the Next.js `<Image>` component.

## Acceptance Criteria

### Content & Pages
- [ ] At least 5 new article directories containing a `page.tsx` file exist under `src/app/(storefront)/articles/`.
- [ ] The `src/app/(storefront)/articles/page.tsx` file has been modified and contains `<Link>` elements pointing to all the new article routes.

### Assets
- [ ] New image files corresponding to the reviews have been added to the `public/images/` directory.
- [ ] The Next.js development server builds successfully without import or syntax errors.
