# EVSELECTS Mobile Release Readiness — v1.2

ตรวจต่อจากรายงาน 9 ต.ค. 2026 · บันทึก 10 ต.ค. 2026 (Asia/Bangkok) · **สถานะ: rendered Preview checks ผ่าน; แก้ Preview build environment แล้ว; รอ build ซ้ำและ Production cutover**

## สิ่งที่เปลี่ยนจาก v1.0 / v1.1

เปิด browser ได้แล้วและปิดช่องว่างการตรวจ responsive 320/360/390/430px จาก v1.0 เพิ่มผลการทำงานของเมนู, cookie consent, ภาพ, ตาราง และ reader review แบบบันทึก Damper ทั้งหน้า แก้ regression tests ที่ยังใช้ชื่อปุ่มและรายการเมนูเก่า เพิ่ม 360/430px และรองรับ BASE_URL ภายนอก เพิ่ม HTTP release verifier ที่ไม่ต้องเปิด browser โดยไม่ได้แก้ application body หรือภาพในรอบนี้

เพิ่มใน v1.2: candidate `226c25905b239a302fb0cdf9f615b21e12d146e8` build ครั้งแรกที่ `dpl_B2uUimTYndJYN3MgQWgq8hvb3JxN` compile/TypeScript ผ่าน แต่ ERROR ระหว่าง collect page data เพราะ Preview ไม่มี DATABASE_URL สำหรับ module ของ `/api/export/shopee` แก้เฉพาะคำสั่ง frontend build: `scripts/build-frontend.mjs` ให้ placeholder แบบ loopback เฉพาะ VERCEL_ENV=preview เมื่อไม่มีค่าเดิม ค่านี้อยู่เฉพาะ child build process ไม่แก้ project secrets/runtime/backend Production และ local/custom environment ไม่มี fallback; unit checks ของเงื่อนไขนี้ผ่าน 4/4 Candidate ยังไม่รวม review harness และไม่ได้ merge main

## เวอร์ชันที่ตรวจและความแตกต่าง

| รายการ | ผล | Source | Label |
| --- | --- | --- | --- |
| Preview ต้นทาง | `dpl_9TPJ9KPZnhHJAVD2CAJRXZ3kbUqP`; READY; commit `33c946b1d4da1818c3568216a956c40a4a48c338` | Vercel get_deployment + live Preview | VERIFIED |
| Preview URL | https://evselect-platform-b4q9o0my8-evselects-com.vercel.app | Vercel + browser | VERIFIED |
| Candidate เริ่มรอบ | `codex/mobile-aeo-candidate-2026-10-09`; `793baf52a6b4e8f192f007b047d1e69549de2d81` | git checkout/diff | VERIFIED |
| Preview → candidate | application content และ metadata เหมือนกัน; candidate ตัด `public/__review__/responsive.html`, `scripts/build-preview-review.mjs` และคืน `vercel.json` buildCommand เป็น `npm run build`; เพิ่มรายงาน v1.0 | git diff Preview..candidate | VERIFIED |
| Production → candidate | application diff มีเฉพาะ title/description/og:title/og:description ของแบบบันทึก Damper | git diff `e4542cc0`..candidate | VERIFIED |
| Damper body | body ไม่เปลี่ยน; SHA-256 `ed3dd8b79125130706f204336d37690b4e0a4779f88cf97fd202470133f1ebbe` | source comparison | VERIFIED |
| Production ก่อน cutover | `dpl_6rzKnEDYCWm59ZEWFNU65djqsBTG`; commit `e4542cc0c6bf8ca383aab406438e8f6bbd717a82` | Vercel deployment API | VERIFIED · ยังไม่ใช่ candidate |

## ผลตรวจ rendered mobile

ใช้ Chromium live Preview ผ่าน same-origin review iframe ที่มี viewport CSS กว้าง 320/360/390/430 และสูง 844px ตรวจ DOM ที่ browser แสดงจริงและ screenshots การทดสอบนี้ไม่ได้ใช้ handset จริง, Safari/iOS หรือ touch/device emulation สถานะเหล่านั้นยังไม่ได้ทดสอบและไม่ได้อ้างว่าได้ทดสอบ

| รายการ | ผล | Source | Label |
| --- | --- | --- | --- |
| Layout | 29 public HTML routes + 7 filter states × 4 widths = 144 กรณี ไม่มี document/body horizontal overflow | `evidence/mobile-aeo-2026-10-10/responsive-matrix.json` | VERIFIED · rendered Chromium |
| H1/heading | H1 หนึ่งรายการทุกกรณี; main content ไม่มีการข้ามระดับ heading; local fragment anchors ไม่ขาด | responsive matrix + HTTP parser | VERIFIED |
| Hamburger | เปิด drawer, ปิดด้วยปุ่ม/Escape และตามลิงก์บทความได้ทั้งสี่ขนาด; คืน focus ให้ trigger หลัง Escape; trigger 44px, rows 52px; drawer อยู่ในขอบจอ | live interactions / responsive matrix / `menu-*-final.jpg` | VERIFIED |
| Cookie settings | dialog อยู่ใน viewport ทุกขนาด; 320px มี scroll ภายในและถึงปุ่มท้ายได้; บันทึก analytics choice แล้วเปิดใหม่พบตัวเลือกเดิม; ปฏิเสธ/ถอน choice ได้ | live consent interactions / responsive matrix | VERIFIED · Preview UI/storage; ไม่ใช่ GA4 event validation |
| รูปภาพ | เลื่อน main images เข้า viewport ทีละภาพ ตรวจโหลดสำเร็จและ natural dimensions ครบ 106 ตำแหน่งบนหน้าแรก, index และ 22 บทความที่ 430px; ตรวจ crop/relevance ด้วย screenshot รายภาพ | `image-loads-final.json` + screenshots | VERIFIED · final loads; initial lazy-load timing superseded |
| การอ่าน | ตัวอักษรไทย/ลิงก์/ภาพอยู่ในกรอบทั้งสี่ขนาด; ตารางกว้างอยู่ใน container ของตนเอง; ตาราง BYD Seal เลื่อนด้วยคีย์บอร์ดได้ทั้งสี่ขนาด | responsive matrix / `table-interactions.json` / table screenshots | VERIFIED |
| Damper reader gate | อ่านทุกบรรทัดและตรวจช่อง FL/FR/RL/RR, A–B–A, ข้อควรหยุดและ footer ครบ ใน rendered mobile 320px (7 overlapping views) และ desktop 1363px (4 views); ไม่มีภาพในแบบบันทึก; เนื้อหาไม่เพิ่มสูตรตั้งค่าหรือการส่งข้อมูล | `damper-320-01..07.jpg`, `damper-desktop-01..04.jpg` | VERIFIED · full affected content |
| ภาพโปสเตอร์ยาง | ข้อความละเอียดในภาพปกยางมีขนาดเล็กเมื่อแสดงบนมือถือ; เนื้อหา HTML แยกอธิบายประเด็นสำคัญอยู่แล้ว | rendered tyre article 430px | OBSERVED · optional editorial improvement |

Scrollbar ของ iframe ใช้พื้นที่ 8px ใน mobile จึงมี clientWidth 312/352/382/422; เทียบ overflow กับพื้นที่แสดงผลจริง ไม่ใช้ viewport width แทน clientWidth แบบผิด ๆ Vercel Preview toolbar ที่ปรากฏในภาพเป็นองค์ประกอบของ Preview

## HTTP, SEO/AEO และโค้ด

| รายการ | ผล | Source | Label |
| --- | --- | --- | --- |
| HTTP | 36 HTML states + 2 text downloads = 38 URL ได้ 200; ลิงก์ภายในที่ตรวจพบและปลายทางเพิ่มเติม 66 รายการได้ 200 | `preview-http.json`; `scripts/verify-release-http.mts` | VERIFIED |
| Metadata/JSON-LD | canonical ไป apex และตัด filter query; description มีครบ; JSON-LD ที่มี parse ได้; แบบบันทึก static ไม่มี JSON-LD และไม่อ้างว่ามี; Preview x-robots-tag noindex เป็นการกัน Preview index | HTTP parser + rendered DOM | VERIFIED · ไม่ใช่ indexing/Rich Results/AI citation measurement |
| Sitemap/robots | sitemap มี public canonical 29 URL ตรง allowlist; robots อ้าง sitemap apex | HTTP verifier | VERIFIED |
| Unit/policy | analytics/link-policy/image-metadata 17/17; content-link parser 9/9; public image verifier 96 references | local Node tests | VERIFIED |
| TypeScript/scoped lint | tsc --noEmit และ eslint ของไฟล์ที่แก้ผ่าน | local checks | VERIFIED |
| Full repo lint | 52 errors / 31 warnings เดิมใน scripts/tests อื่น; ไม่ผ่านทั้ง repository; รอบนี้ไม่เปลี่ยน application files ที่เกี่ยวข้อง | local lint log + git diff | VERIFIED · inherited debt, not a clean full-lint claim |
| E2E runner | discovery ผ่าน 328 cases / 8 projects; เพิ่ม 360/430 และขยาย route coverage; ไม่ได้ execute Playwright suite ในเครื่องนี้ | Playwright --list | VERIFIED · discovery only; 328 cases NOT RUN |
| Local npm build | image/content-parser checks ผ่านก่อนหยุดที่ tsx IPC `listen EPERM`; ไม่ใช่ successful local build | local npm build output | VERIFIED · environment restriction |
| Candidate remote build | ครั้งแรก ERROR เพราะ Preview environment; compile/TypeScript ผ่าน; รอ build ซ้ำหลังแก้ frontend build wrapper และตรวจ fallback tests 4/4 | Vercel candidate deployment / logs ที่ต้องเก็บ | [UNAVAILABLE] · pending |
| Production รอบนี้ | ยังไม่ cutover ณ v1.1 | Vercel mutations ณ เวอร์ชันนี้ | VERIFIED · not deployed yet |

ไม่เปลี่ยน backend, database schema, CMS, stock, payment, route/slug หรือโลโก้ และไม่ merge main การตรวจนี้ไม่ยืนยัน external editorial source links ทุกเว็บไซต์, Safari/physical-device behavior, Google indexing, Rich Results eligibility หรือผล AI citation ซึ่งไม่ใช่ผลที่จะอนุมานได้จาก HTTP/JSON-LD parse

## OPEN ITEMS

1. Data: successful exact candidate remote build and build audit logs. Source: Vercel deployment on `evselects-com/evselect-platform`. Blocks: production cutover.
2. Data: candidate production deployment ID/commit, apex+www mapping, production HTTP and rendered smoke checks. Source: Vercel API + live https://evselects.com. Blocks: marking release complete.
