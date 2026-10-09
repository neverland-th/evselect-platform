# EVSELECTS Mobile Release Readiness — v1.3

ตรวจต่อจากรายงาน 9 ต.ค. 2026 · บันทึก 10 ต.ค. 2026 (Asia/Bangkok) · **สถานะ: RELEASED · candidate/production builds ผ่าน · ตรวจ Production หลังเผยแพร่แล้ว**

## สิ่งที่เปลี่ยนจาก v1.0 / v1.1 / v1.2

เปิด browser ได้แล้วและปิดช่องว่างการตรวจ responsive 320/360/390/430px จาก v1.0 เพิ่มผลการทำงานของเมนู, cookie consent, ภาพ, ตาราง และ reader review แบบบันทึก Damper ทั้งหน้า แก้ regression tests ที่ยังใช้ชื่อปุ่มและรายการเมนูเก่า เพิ่ม 360/430px และรองรับ BASE_URL ภายนอก เพิ่ม HTTP release verifier ที่ไม่ต้องเปิด browser โดยไม่ได้แก้ application body หรือภาพในรอบนี้

เพิ่มใน v1.2: candidate `226c25905b239a302fb0cdf9f615b21e12d146e8` build ครั้งแรกที่ `dpl_B2uUimTYndJYN3MgQWgq8hvb3JxN` compile/TypeScript ผ่าน แต่ ERROR ระหว่าง collect page data เพราะ Preview ไม่มี DATABASE_URL สำหรับ module ของ `/api/export/shopee` แก้เฉพาะคำสั่ง frontend build: `scripts/build-frontend.mjs` ให้ placeholder แบบ loopback เฉพาะ VERCEL_ENV=preview เมื่อไม่มีค่าเดิม ค่านี้อยู่เฉพาะ child build process ไม่แก้ project secrets/runtime/backend Production และ local/custom environment ไม่มี fallback; unit checks ของเงื่อนไขนี้ผ่าน 4/4 Candidate ยังไม่รวม review harness และไม่ได้ merge main

เพิ่มใน v1.3: candidate build ผ่านและเผยแพร่ commit `445563cdecc384dbf3922cd7517e24194ca15e3e` ด้วย Production environment แล้ว เก็บ HTTP audit หลังเผยแพร่และ browser smoke ของ Production แก้ regression test ให้ตรงกับพฤติกรรมจริงที่ hamburger ใช้งานบน desktop ได้ด้วย (desktop links เพิ่มเมื่อ >=1280px) ตรวจ tsc/scoped lint และ discovery ซ้ำหลังแก้ ส่วนแก้ test/evidence/report หลัง cutover ไม่มีผลต่อ application ที่ serve อยู่ และไม่อ้างว่า E2E suite 328 cases ถูก execute

## เวอร์ชันที่ตรวจและความแตกต่าง

| รายการ | ผล | Source | Label |
| --- | --- | --- | --- |
| Preview ต้นทาง | `dpl_9TPJ9KPZnhHJAVD2CAJRXZ3kbUqP`; READY; commit `33c946b1d4da1818c3568216a956c40a4a48c338` | Vercel get_deployment + live Preview | VERIFIED |
| Preview URL | https://evselect-platform-b4q9o0my8-evselects-com.vercel.app | Vercel + browser | VERIFIED |
| Candidate เริ่มรอบ | `codex/mobile-aeo-candidate-2026-10-09`; `793baf52a6b4e8f192f007b047d1e69549de2d81` | git checkout/diff | VERIFIED |
| Preview → candidate เริ่มรอบ | rendered content/metadata เหมือนกัน; candidate เริ่มรอบตัด harness/helper และคืน npm run build; รอบนี้เพิ่ม frontend build wrapper ใหม่หลังพบ Preview environment error; ไม่คืน review harness | git diff + candidate build logs | VERIFIED |
| Production → release | rendered application diff มีเฉพาะ title/description/og:title/og:description ของแบบบันทึก Damper; เพิ่ม QA tests/verifier และ frontend build wrapper | git diff `e4542cc0`..`445563c` | VERIFIED |
| Damper body | outer body เทียบ baseline, candidate source และ Production ตรงกัน; SHA-256 ที่คำนวณใหม่ `35ca3b8ea321f165bfc01317b353d7b2aa6af000606aa0b14ea47d15185f3e08` | `production-extra-checks.json`; source byte comparison | VERIFIED |
| Production ก่อน cutover | `dpl_6rzKnEDYCWm59ZEWFNU65djqsBTG`; commit `e4542cc0c6bf8ca383aab406438e8f6bbd717a82` | Vercel deployment API | VERIFIED · baseline |
| Candidate ที่ผ่าน | `dpl_5hrmB7bQufc2UHkAmb5dHtJn7CSV`; commit `445563cdecc384dbf3922cd7517e24194ca15e3e`; READY | `candidate-build.json` + `candidate-http.json` | VERIFIED |
| Production ใหม่ | `dpl_8p1kUidNQ422hidTni69LNyw2beS`; commitเดียวกับ candidate; READY; target=production; apex/www ชี้ deployment นี้ทั้งคู่ | `production-build.json`; Vercel deployment/alias APIs | VERIFIED · released |

หมายเหตุการแก้หลักฐาน: ค่า hash `ed3dd8b...` ที่อ้างใน v1.0 ไม่ตรงกับวิธีคำนวณที่ระบุชัดเจนในรอบนี้ จึงไม่ใช้ค่านั้นยืนยัน Production ใช้ outer body ตั้งแต่ opening `<body>` ถึง closing `</body>` รวม tags และเทียบข้อความจริงก่อนคำนวณ hash; baseline/source/Production ตรงกัน ไม่มี body change

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
| Full repo lint | 52 errors / 31 warnings ในไฟล์เดิมนอก diff รวม utilities/tests, admin, content-generator และ proxy; ไม่ผ่านทั้ง repository; ไม่แก้ส่วน backend/admin นอกขอบเขตรอบนี้ | `code-checks.json` + local lint log + git diff | VERIFIED · inherited debt, not a clean full-lint claim |
| E2E runner | discovery ผ่าน 328 cases / 8 projects; เพิ่ม 360/430 และขยาย route coverage; ไม่ได้ execute Playwright suite ในเครื่องนี้ | Playwright --list | VERIFIED · discovery only; 328 cases NOT RUN |
| Local npm build | image/content-parser checks ผ่านก่อนหยุดที่ tsx IPC `listen EPERM`; ไม่ใช่ successful local build | local npm build output | VERIFIED · environment restriction |
| Candidate remote build | หลังแก้ wrapper ผ่าน; Build Completed [25s]; content audit 32 pages strict ผ่าน; attribution 28 page/filter variants, 125 ImageObjects, 66 credit records ผ่าน; wrapper environment checks ผ่าน 4/4 ในเครื่อง | `candidate-build.json`; local unit output | VERIFIED |
| Production build | build ใหม่ด้วย target production ผ่าน; Build Completed [49s]; strict content/attribution checks ผ่าน | `production-build.json` | VERIFIED · rebuilt in production environment |
| Production HTTP/SEO | 38 URL และปลายทางภายในเพิ่ม 66 รายการผ่าน 200; H1/canonical/description/schema checks ผ่าน; ไม่พบ noindex header ใน public pages; sitemap 29 canonical routes | `production-http.json` | VERIFIED · after cutover |
| Production browser | หน้าแรกอ่านได้/ภาพ hero โหลด; drawer ปิดและคืน focus หลัง Escape/ปุ่มปิด; ไป /articles ได้; cookie choice เป็น false หลังปฏิเสธ และ GA tag count=0; ลิงก์ toolkit เปิดแบบบันทึกได้และ metadata ใหม่แสดงจริง | `production-browser-smoke.json`; `production-home-desktop.jpg`; `production-damper-desktop.jpg` | VERIFIED · desktop smoke; ไม่ใช่ mobile matrix ซ้ำ |
| Production extras | www หน้าแรก/แบบบันทึก 200 และ canonical apex; review harness ได้ 404; body baseline/source/Production ตรงกัน | `production-extra-checks.json` | VERIFIED |

ไม่เปลี่ยน backend, database schema, CMS, stock, payment, route/slug หรือโลโก้ และไม่ merge main การตรวจนี้ไม่ยืนยัน external editorial source links ทุกเว็บไซต์, Safari/physical-device behavior, Google indexing, Rich Results eligibility หรือผล AI citation ซึ่งไม่ใช่ผลที่จะอนุมานได้จาก HTTP/JSON-LD parse

## OPEN ITEMS

ไม่มี release-blocking item ค้างจากการตรวจรอบนี้ ข้อจำกัดและงานต่อเนื่องที่ไม่ได้อ้างว่าผ่าน:

| Data / work remaining | Exact source / next check | Decision affected |
| --- | --- | --- |
| Physical iOS/Android, Safari และ touch/device emulation | ทดสอบ production https://evselects.com บนอุปกรณ์/engine เหล่านั้น | การรับรอง cross-device behavior; ไม่ได้วัดใน Chromium CSS viewport matrix นี้ |
| Execute E2E 328 cases | `playwright.config.ts` + `tests/e2e/mobile-navigation.spec.ts` + `responsive-scroll.spec.ts` ใน CI/runner ที่เปิด browser ได้; รอบนี้รันเฉพาะ discovery และตรวจ UI ผ่าน browser โดยตรง | การกล่าวว่า full E2E suite ผ่าน; ห้ามอนุมานจาก --list |
| Full repository lint debt (52 errors/31 warnings) | utilities/tests, admin/content-generator/proxy เดิมนอก diff; scoped lint ไฟล์ที่แก้ผ่าน | การกล่าวว่า full-repo lint clean |
| ภาพโปสเตอร์ยางมี fine print เล็กบนมือถือ | `/articles/ev-tyre-and-coilover-selection-guide`; ปรับภาพ/HTML ในงาน editorial ภายหลัง และทำ reader review ใหม่ | optional readability improvement |
| GA4 event delivery / Google indexing / Rich Results / AI citations | GA4 property และ Search Console/validation tool ที่เกี่ยวข้อง | การยืนยันผล tracking/search visibility; JSON-LD parse และ HTTP ไม่ยืนยันผลเหล่านี้ |
