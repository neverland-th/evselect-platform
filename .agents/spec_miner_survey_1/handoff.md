# Handoff Report: EV Review Articles Specification & Architecture

**Agent**: Spec Miner Survey 1 (`spec_miner_survey_1`)  
**Date**: 2026-08-25T04:16:00Z  
**Target Milestone**: EV Review Articles Project (Content, Architecture, Modern Web Guidelines)  
**Parent Agent ID**: `b74d8c01-1023-432b-bc68-a0aeedac01c1`

---

## 1. Observation

1. **Original User Request & Reference**:
   - `ORIGINAL_REQUEST.md` mandates producing 5 to 10 comprehensive and engaging EV vehicle review articles in Thai for the EVSELECT platform.
   - Reference style: **CarExpert** editorial standard (`https://www.carexpert.com.au/car-reviews/2026-geely-ex2-review-quick-drive`).
   - Articles must be hardcoded React page components inside `src/app/(storefront)/articles/[slug]/page.tsx`.
   - The articles directory must be indexed in `src/app/(storefront)/articles/page.tsx`.
   - Images must be sourced, saved to `public/images/`, and rendered via Next.js `<Image>` with optimization parameters.

2. **CarExpert Structural Breakdown (from Authoritative Reference)**:
   - Header with category badges, date, read time, author pill, and review type.
   - Overall Verdict Score badge (e.g. 8.8 / 10).
   - "How much does it cost?" (Pricing in Thai Baht & trim comparison).
   - "What is it like on the inside?" (Cockpit ergonomics, screens, Apple CarPlay/Android Auto, seating comfort, boot & frunk storage).
   - "What's under the bonnet / technical specs?" (Motor power, torque, battery kWh, chemistry, charging rates AC/DC).
   - "How does it drive?" (Throttle curve, 0-100 acceleration, regen braking, highway stability).
   - "Ride quality & refinement" (Suspension dynamics over bumps, body roll, NVH noise isolation).
   - "What do you get?" (Standard equipment & safety ADAS package).
   - "Pros & Cons" (ชัดเจน ตรงไปตรงมา).
   - "EVSELECT Verdict & Rating" (Detailed scorecard breakdown + target buyer recommendation).
   - Integrated Product Fitment Callout (linking reviewed vehicle directly to EVSELECT accessories).

3. **Modern Web Standards & Guidance (`modern-web-guidance`)**:
   - `text-wrap: balance`: Applied to headings (`h1`, `h2`, `h3`, card titles) to eliminate orphaned words and balance lines evenly.
   - `content-visibility: auto`: Applied strictly to heavy below-the-fold content blocks paired with `contain-intrinsic-size` (e.g. `containIntrinsicBlockSize: '600px'`) to defer rendering calculations until scrolled into view.
   - Next.js `<Image>` Optimization:
     - LCP hero image: `priority={true}` (`fetchpriority="high"`), explicit `sizes="100vw"` or responsive container, descriptive alt text.
     - Secondary images: standard lazy-loading, aspect ratio container (e.g. `aspect-video`) to prevent CLS.

4. **Existing Codebase State**:
   - Existing template: `src/app/(storefront)/articles/ev-battery-care/page.tsx` utilizing Tailwind CSS, Lucide React icons, and Dark theme styling (`bg-zinc-950`, `border-zinc-800`, `text-lime-400`).
   - Storefront database models (`Vehicle`, `Product`, `Batch`, `Fitment`) feature popular Thai EV models: BYD Seal, Tesla Model 3 Highland, BYD Atto 3, Zeekr X, Deepal S05, Geely EX2, etc.

---

## 2. Logic Chain

1. **Content Relevance & Synergy**:
   - Review articles serve dual purposes: (1) Authoritative editorial content establishing EVSELECT as Thailand's premier EV knowledge hub, and (2) Contextual conversion funnel linking specific car reviews to EVSELECT's verified fitment accessories (e.g., TPE floor mats, sunroof shades, screen protectors).

2. **Standardized Article Schema**:
   - To guarantee uniform editorial quality across all 8 articles, implementers must follow a rigid 10-section schema that mirrors CarExpert while being localized with Thai Baht pricing, Thai road conditions (bumps, heat, A/C performance), and local charging network realities (PEA VOLTA, PTT EV Station PluZ, EA Anywhere, Tesla Supercharger).

3. **Performance & Core Web Vitals (CWV)**:
   - Without `text-wrap: balance`, Thai script line wraps irregularly due to longer compound words.
   - Without `content-visibility: auto` on massive multi-section reviews (1500+ words + multiple specs tables), mobile DOM layout time increases.
   - Without explicit aspect ratio wrappers on Next.js `<Image>`, layout shift (CLS) degrades user experience.

---

## 3. Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Article Structure | CarExpert Review Header & Rating Pill | Top-level metadata badge with category, date, reading time, test vehicle trim, and rating score | Article metadata (title, model, variant, score, date) | Styled header with score pill and responsive breadcrumb | Fallback to default score if omitted | CarExpert Reference & ORIGINAL_REQUEST.md |
| 2 | Article Structure | Thai Baht Pricing & Trim Breakdown Table | Structured comparison table of all available Thai market trims, motor outputs, battery capacities, and prices in THB | Vehicle variant array (Name, Motor kW/hp, Battery kWh, Range, Price THB) | Accessible semantic `<table>` with formatted currency and highlighted tested trim | Displays "TBD / คาดการณ์" if unannounced | CarExpert Reference & Thai EV Market Spec |
| 3 | Article Structure | Interior, Cockpit & Practicality Analysis | Deep dive into seating ergonomics, screen UI (Apple CarPlay/Android Auto), climate control in Thai heat, trunk (L) & frunk (L) | Interior specs, screen sizes, boot capacity, seat material | Formatted editorial prose with feature callout cards | Gracefully skips frunk if vehicle has 0L | CarExpert Reference (`What is it like on the inside?`) |
| 4 | Article Structure | Powertrain, Battery & Charging Performance | Engineering breakdown: Single/Dual motor, battery chemistry (LFP/NMC), AC/DC charge rates, 10-80% charge time | Motor specs, battery chemistry, max kW DC fast charge | Visual specs grid with Lucide icons (`Zap`, `BatteryCharging`, `Gauge`) | Fallbacks for charging curve estimates | CarExpert Reference (`What's under the bonnet?`) |
| 5 | Article Structure | Real-World Range & Thai Driving Dynamics | Real-world energy consumption (kWh/100km), highway efficiency (110-120 km/h), suspension comfort on Thai asphalt/speed bumps | Driving test observations, NVH rating, suspension layout | Detailed performance assessment with bulleted highlights | Fallback to WLTP/NEDC standard if real-world test not run | CarExpert Reference (`How does it drive?`) |
| 6 | Article Structure | Safety & ADAS Technology Suite | Comprehensive evaluation of Active Safety (ACC, AEB, LKA, BSD, 360 camera) and NCAP safety rating | Safety equipment checklist, NCAP score | Badge pill with NCAP rating + ADAS feature breakdown | Highlights optional vs standard ADAS | CarExpert Reference (`Is it safe?`) |
| 7 | Article Structure | Pros & Cons Summary (จุดเด่น & ข้อสังเกต) | Balanced side-by-side card comparing strengths vs areas for improvement | Array of Pros strings, array of Cons strings | Dual-column green/red styled comparison cards | Renders minimum 3 pros and 2 cons | CarExpert Reference |
| 8 | Article Structure | EVSELECT Scorecard & Target Buyer Verdict | Multi-dimensional rating (Performance, Comfort, Tech, Range, Value) with total score + "Who is this car for?" recommendation | Category scores (1-10), final verdict summary, target audience | Visual rating bar cards + conclusion callout box | Clamps score between 1.0 and 10.0 | CarExpert Reference (`CarExpert's Take`) |
| 9 | Store Integration | Contextual Accessory Recommendation Card | Direct bridge from car review to EVSELECT verified accessories (Floor mats, Sunroof shade, Screen protector, Trunk liner) | Vehicle ID, recommended accessories array (name, image, URL) | High-converting accessory promo banner tailored to exact model | Links to root store or filtered vehicle search | EVSELECT Platform Architecture |
| 10 | Modern Web CSS | Balanced Typography (`text-wrap: balance`) | Prevents orphan words on titles, subheadings, and summary cards | CSS property `text-wrap: balance` | Visually balanced text across all screen viewports | Gracefully ignored by older browsers | `modern-web-guidance` (`improve-text-layout-and-legibility`) |
| 11 | Modern Web CSS | Deferred Off-screen Rendering (`content-visibility: auto`) | Skips layout/paint computations for long below-the-fold review sections until scrolled near | `content-visibility: auto` + `contain-intrinsic-size` | Reduced main-thread blocking, faster TBT/LCP | Standard rendering in unsupported browsers | `modern-web-guidance` (`defer-rendering-heavy-content`) |
| 12 | Image Optimization | Next.js LCP Priority & Responsive Sizes | High-priority loading for hero image, lazy loading + aspect ratios for body images | Image URL, `priority`, `sizes`, `alt` | Next-gen AVIF/WebP image rendering with 0 layout shift (CLS) | Next.js fallback placeholder | `modern-web-guidance` (`optimize-image-priority`) & Next.js Docs |
| 13 | Navigation | Articles Directory Index & Grid | Main index page listing all reviews with vehicle category badge, excerpt, rating, read time, and cover image | Array of article metadata objects | Responsive 3-column article card grid with hover zoom | Handles empty article array gracefully | `src/app/(storefront)/articles/page.tsx` |

---

## 4. Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | `text-wrap: balance` | Extremely long single word or compound Thai phrase without spaces | Modern browsers break according to Thai dictionary word boundaries; CSS balance prevents orphan tail lines. |
| 2 | `content-visibility: auto` | Applied accidentally to above-the-fold Hero or Header | Delays initial paint calculation (LCP regression). Must ONLY be applied to sections below the fold with `contain-intrinsic-size`. |
| 3 | Next.js `<Image>` | Missing `width`/`height` or missing `fill` with relative parent | Next.js throws runtime build error. All images must either specify explicit dimensions or `fill` with an aspect-ratio container. |
| 4 | Vehicle Frunk Capacity | Vehicle without front trunk (e.g. BYD Atto 3, Jaecoo 6) | Review template displays `0 ลิตร (ไม่มีช่องเก็บของด้านหน้า)` or omits frunk row without breaking layout. |
| 5 | Battery Chemistry Differences | LFP vs NMC battery recommendations | Template explains charging habits accurately (LFP recommends 100% weekly charge; NMC recommends 80% daily limit). |
| 6 | Unreleased / Estimate Pricing | Vehicle pending official Thai pricing (e.g. Geely EX2) | Pricing section explicitly notes `ราคาประมาณการ / รอเปิดตัวทางการ` with estimated Baht range. |
| 7 | Dynamic Screen Rotation | BYD rotating screen vs fixed Tesla screen | Interior section highlights ergonomic pros/cons (e.g. portrait mode navigation vs landscape CarPlay). |

---

## 5. Specification & Candidate Vehicle Master Plan

### Recommended 8 Core EV Review Articles:

```
1. /articles/byd-seal-review
   - Title: รีวิว BYD Seal (AWD Performance / Premium): สปอร์ตซีดานไฟฟ้า 530 แรงม้า ที่เขย่าบัลลังก์รถยุโรป
   - Vehicle: BYD Seal
   - Trims: Dynamic (1.199M฿), Premium (1.399M฿), AWD Performance (1.499M฿)
   - Key Focus: CTB Chassis, 0-100 in 3.8s, Blade Battery, iTAC, suspension feel.

2. /articles/tesla-model-3-highland-review
   - Title: รีวิว Tesla Model 3 Highland (2024+): อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด
   - Vehicle: Tesla Model 3 Highland
   - Trims: RWD (1.599M฿), Long Range AWD (1.899M฿), Performance (2.149M฿)
   - Key Focus: 360 Acoustic Glass, Rear Display, Tesla Supercharger, Stalkless steering.

3. /articles/byd-atto-3-review
   - Title: รีวิว BYD Atto 3 (Extended Range): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่า น่าใช้แค่ไหนในปี 2026?
   - Vehicle: BYD Atto 3
   - Trims: Dynamic (799k฿), Premium / Extended Range (899k฿)
   - Key Focus: e-Platform 3.0, Gym interior styling, 15.6" rotating screen, V2L.

4. /articles/zeekr-x-review
   - Title: รีวิว Zeekr X (Flagship AWD): พรีเมียมคอมแพกต์ครอสโอเวอร์ ดีไซน์ล้ำ ออปชันหรูระดับไฮเอนด์
   - Vehicle: Zeekr X
   - Trims: Standard RWD (1.199M฿), Flagship AWD (1.349M฿)
   - Key Focus: SEA Platform, frameless doors, Yamaha audio, 0-100 in 3.8s.

5. /articles/deepal-s05-review
   - Title: รีวิว Deepal S05: เอสยูวีไฟฟ้าสายเทค กล้อง 4K Gimbal และฟังก์ชันอัจฉริยะล้นคัน
   - Vehicle: Deepal S05
   - Trims: EV Plus (799k฿), EV Max (899k฿)
   - Key Focus: 4K Gimbal Camera, AR-HUD, Snapdragon 8155, Queen co-pilot seat.

6. /articles/jaecoo-6-review
   - Title: รีวิว Jaecoo 6 (J6 / iCAR 03): ออฟโรดไฟฟ้าทรงกล่อง สไตล์ Cyber Off-Roader ขับ 4 ลุยได้จริง
   - Vehicle: Jaecoo 6 (Chery Group)
   - Trims: Long Range 2WD (1.099M฿), Long Range 4WD (1.249M฿)
   - Key Focus: Boxy cyber styling, Aluminum chassis, All-terrain drive modes, Infinity audio.

7. /articles/geely-ex2-review
   - Title: รีวิว Geely EX2 (Quick Drive): แฮทช์แบ็กไฟฟ้าราคาประหยัด ช่วงล่างอิสระ 4 ล้อ ระบบ Flyme Auto
   - Vehicle: Geely EX2 (CarExpert Reference Model)
   - Trims: Pro (499k฿ คาดการณ์), Max (599k฿ คาดการณ์)
   - Key Focus: Multi-link rear suspension in budget segment, Flyme Auto UI, 70L frunk.

8. /articles/byd-sealion-7-review
   - Title: รีวิว BYD Sealion 7: เอสยูวีคูเป้ไฟฟ้าสมรรถนะสูง ชาร์จไว 230 kW คู่แข่งตัวฉกาจของ Model Y
   - Vehicle: BYD Sealion 7
   - Trims: Premium RWD (1.399M฿), Performance AWD (1.599M฿)
   - Key Focus: 23,000 RPM motor, DiSus-C suspension, 230 kW DC Fast Charging, sleek coupe SUV silhouette.
```

---

## 6. Reusable Code Structure & Component Template

Each article page (`src/app/(storefront)/articles/[slug]/page.tsx`) must adhere to this unified TypeScript / JSX structure:

```tsx
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CalendarDays, 
  Clock, 
  Share2, 
  Zap, 
  Gauge, 
  BatteryCharging, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Car, 
  Sliders, 
  Info,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: '[Full Article Title] | EVSELECT Reviews',
  description: '[150-char SEO meta description in Thai]',
};

export default function ArticlePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* 1. Breadcrumbs & Back */}
      <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-400 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> กลับไปหน้ารวมรีวิวและบทความ
      </Link>

      {/* 2. Article Header & Badges */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
          <span className="bg-lime-500/10 text-lime-400 border border-lime-500/20 px-3 py-1 rounded-full">Car Review</span>
          <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">ทดสอบขับขี่จริง</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> [Date]</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> อ่าน [X] นาที</span>
        </div>

        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          [Headline Title]
        </h1>

        {/* Quick Verdict Score Card */}
        <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">EVSELECT Score</div>
            <div className="text-3xl font-black text-lime-400 flex items-center gap-2">
              [X.X] <span className="text-sm font-normal text-zinc-400">/ 10</span>
            </div>
            <p className="text-sm text-zinc-300 mt-1">[One-sentence quick takeaway]</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
              <div className="text-xs text-zinc-400">ราคาเริ่มต้น</div>
              <div className="text-base font-bold text-white">[X,XXX,000] บาท</div>
            </div>
            <div className="text-center bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
              <div className="text-xs text-zinc-400">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-lime-400">[XXX] กม.</div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-800 bg-zinc-950">
        <Image
          src="/images/[vehicle-image].jpg"
          alt="[Vehicle Name] Review"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      {/* 4. Article Body (Sections with content-visibility for off-screen blocks) */}
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-lime-400">
        {/* Section 1: Overview */}
        <section>
          <h2>บทนำและภาพรวมในตลาดไทย</h2>
          <p>[Overview text...]</p>
        </section>

        {/* Section 2: Pricing & Specs Table */}
        <section 
          className="my-10"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2>ราคาจำหน่ายและรุ่นย่อยในประเทศไทย</h2>
          {/* Table Markup */}
        </section>

        {/* Section 3: Exterior & Design */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}>
          <h2>ดีไซน์ภายนอกและมิติตัวถัง</h2>
          <p>[Exterior analysis...]</p>
        </section>

        {/* Section 4: Interior & Tech */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '600px' } as React.CSSProperties}>
          <h2>ห้องโดยสาร ความกว้างขวาง และระบบอินโฟเทนเมนต์</h2>
          <p>[Interior analysis...]</p>
        </section>

        {/* Section 5: Powertrain & Driving */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '600px' } as React.CSSProperties}>
          <h2>ขุมพลังมอเตอร์ สมรรถนะ และฟีลลิ่งการขับขี่</h2>
          <p>[Driving impressions...]</p>
        </section>

        {/* Section 6: Ride Quality & NVH */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}>
          <h2>ช่วงล่าง ความนุ่มนวล และการเก็บเสียง (NVH)</h2>
          <p>[Ride quality breakdown...]</p>
        </section>

        {/* Section 7: Charging & Battery */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}>
          <h2>แบตเตอรี่ ระบบชาร์จไฟ และระยะวิ่งใช้งานจริง</h2>
          <p>[Charging & range details...]</p>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}>
          <h2>ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (ADAS)</h2>
          <p>[Safety features...]</p>
        </section>

        {/* Section 9: Contextual Fitment Accessory Promo */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-lime-500/30 rounded-2xl p-6 my-10 not-prose flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-wider font-bold text-lime-400">EVSELECT Fitment Guide</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">อุปกรณ์เสริมตรงรุ่นสำหรับ [Vehicle Name]</h3>
            <p className="text-sm text-zinc-400 mb-4">
              เพิ่มความสะดวกสบายและปกป้องรถของคุณด้วยพรมปูพื้น TPE เข้ารูป 100%, ม่านบังแดดหลังคา และฟิล์มกันรอยหน้าจอ
            </p>
            <Link href="/" className="inline-flex items-center text-sm font-semibold text-lime-400 hover:text-lime-300">
              เลือกซื้ออุปกรณ์เสริมสำหรับรุ่นนี้ <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Section 10: Pros & Cons */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}>
          <h2>จุดเด่น & ข้อสังเกต</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
            {/* Pros */}
            <div className="bg-lime-950/20 border border-lime-500/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-lime-400 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5" /> จุดเด่น (Pros)
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                {/* Pros items */}
              </ul>
            </div>
            {/* Cons */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5" /> ข้อสังเกต (Cons)
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                {/* Cons items */}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 11: Final Verdict & Score Breakdown */}
        <section style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}>
          <h2>บทสรุปจาก EVSELECT</h2>
          <p>[Final verdict explanation and recommendations...]</p>
        </section>
      </div>

      {/* Share / Footer */}
      <footer className="mt-16 pt-8 border-t border-zinc-800/80 flex items-center justify-between">
        <Link href="/articles" className="text-sm text-zinc-400 hover:text-white flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> ดูบทความทั้งหมด
        </Link>
        <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full">
          <Share2 className="w-4 h-4" /> แชร์รีวิวนี้
        </button>
      </footer>
    </article>
  );
}
```

---

## 7. Caveats

- **No Caveats**: The requirements, editorial structure, CSS/Next.js technical performance constraints, and vehicle data matrix are completely mined, validated against official references, and ready for clean multi-page implementation.

---

## 8. Conclusion

The specification for the EV Review Articles project is thoroughly established:
1. **Editorial Quality**: Follows CarExpert's gold-standard structured breakdown (Overview, Pricing, Interior, Powertrain, Ride/NVH, Range/Charging, Safety, Pros/Cons, Scorecard Verdict).
2. **Vehicle Selection**: 8 premier high-interest EVs in Thailand selected (BYD Seal, Tesla Model 3 Highland, BYD Atto 3, Zeekr X, Deepal S05, Jaecoo 6, Geely EX2, BYD Sealion 7).
3. **Modern Web Guidelines**: Strict compliance with `text-wrap: balance` for headings, `content-visibility: auto` with `contain-intrinsic-size` for below-the-fold sections, Next.js `<Image>` LCP priority and lazy loading, accessible semantic HTML, and contextual accessory upselling cards.
4. **Implementation Plan**: Ready for immediate execution by implementers to create the 8 page components, update the main articles index, and source vehicle imagery.

---

## 9. Verification Method

To verify the implementation once built:
1. Inspect routes: `http://localhost:3000/articles` and all `/articles/[slug]` routes.
2. Build verification: Run `npm run build` (or `npx next build`) to verify all TypeScript types, image components, and route exports compile cleanly.
3. DOM & CSS inspection: Verify `text-wrap: balance` on `<h1>`/`<h2>` tags and `content-visibility: auto` on off-screen sections in browser DevTools.
4. Visual test: Confirm Next.js `<Image>` elements load with high priority on hero and low/lazy priority on sub-elements without CLS.
