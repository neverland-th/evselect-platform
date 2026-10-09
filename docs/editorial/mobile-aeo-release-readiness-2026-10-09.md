# EVSELECTS Mobile Release Readiness — v1.0

ตรวจวันที่ 2026-10-09T22:26:25+07:00 · Asia/Bangkok · **สถานะ: DRAFT / mobile reader review blocked / production ยังไม่ deploy**

## สิ่งที่เพิ่มใน v1.0

เริ่มรายงาน release readiness จาก Audit v1.0 วันที่ 6 ต.ค. ที่เพิ่งแนบและผลตรวจเว็บวันที่ 9 ต.ค. เพิ่ม source checkout ที่ตรงกับ commit ที่ production ระบุ, ชุดแก้ metadata ของแบบบันทึก Damper, Preview ที่ build ผ่าน, HTTP 38 URL ของ Preview และบันทึกสาเหตุที่ยังตรวจมือถือไม่ได้ รายงานนี้ไม่แทนผล mobile ที่ยังไม่ได้รัน และไม่ยืนยันว่า deploy production แล้ว

## ผลหลัก

| รายการ | ผลที่ได้ | Source | Label |
| --- | --- | --- | --- |
| Production ที่ตรวจต้นรอบ | `dpl_6rzKnEDYCWm59ZEWFNU65djqsBTG`; READY; alias apex/www ไป deployment เดียวกัน; metadata ระบุ `e4542cc0c6bf8ca383aab406438e8f6bbd717a82` | Vercel deployment / alias API รอบนี้ | VERIFIED · mapping; ไม่ใช่หลักฐานของ indexing |
| Repository | `neverland-th/evselect-platform`; source checkout เริ่มจาก `e4542cc0c6bf8ca383aab406438e8f6bbd717a82`; ไม่ merge main | Git fetch/checkout และ GitHub API | VERIFIED |
| Preview ที่ build ผ่าน | `dpl_9TPJ9KPZnhHJAVD2CAJRXZ3kbUqP`; `33c946b1d4da1818c3568216a956c40a4a48c338`; `https://evselect-platform-b4q9o0my8-evselects-com.vercel.app` | Vercel deployment API / build logs | VERIFIED · READY; ไม่ใช่ mobile pass |
| Build | npm build ของโปรเจกต์บน Vercel ผ่าน; build log รายงาน 48 วินาที รวม checks ภาพ ลิงก์ metadata และการตรวจเว็บที่ build แล้ว | Vercel build logs | VERIFIED · remote build |
| Attribution | build log รายงาน 28 page/filter variants, 125 rendered ImageObjects, 66 accessible credit records | `verify-image-attribution.mjs --build` ใน remote build | VERIFIED · เครดิต/การเข้าถึง ไม่ใช่การรับรองสิทธิ์ภาพทั้งหมด |
| HTTP ของ candidate Preview | HTML canonical 29 URL + filter 7 URL + text download 2 URL = 38 URL; ทุก URL ได้ 200 | Preview crawl / filters JSON | VERIFIED · HTTP เท่านั้น |
| H1 และ JSON-LD | HTML canonical 29 หน้า มี H1 หนึ่งรายการใน raw HTML; JSON-LD ที่เก็บ parse ได้; filter 7 สถานะมี H1 หนึ่งรายการ | Preview raw responses / parser | VERIFIED · ไม่ใช่ rendered mobile หรือ Rich Results Test |
| Metadata แบบบันทึก | title เป็น EVSELECTS.COM; เพิ่ม description, og:title, og:description; canonical เดิมถูกต้อง | Preview `/downloads/evselect-damper-setup-log.html` | VERIFIED · Preview; production NOT RELEASED |
| Body แบบบันทึก | body ก่อน/หลังเหมือนกันทุก byte; SHA-256 `ed3dd8b79125130706f204336d37690b4e0a4779f88cf97fd202470133f1ebbe`; ไม่เพิ่มการส่งข้อมูลจาก form | git base/source body comparison | VERIFIED · source invariance; ไม่แทน reader review |
| Privacy ระหว่าง environments | Preview ระบุยังไม่เปิด GA4; production ระบุตั้งค่าแล้วแต่ต้อง consent; สอดคล้องกับ conditional `getAnalyticsMeasurementId` | Privacy raw body + source | VERIFIED · environment-dependent wording; ไม่ได้ตรวจ GA4 property/events |
| ภาพแนบ 5 ไฟล์ | ไฟล์มีอยู่และ Pillow verify ผ่านทุกไฟล์; ไม่สร้าง/แก้ภาพเพื่อปิด error เก่า | attachment copies / Pillow รอบนี้ | VERIFIED · การอ่านไฟล์รอบนี้; สาเหตุเดิมไม่ทราบ |
| Mobile 320/360/390/430 px | **NOT RUN**; viewport เหล่านี้เป็นแผนตรวจ ไม่ใช่ผลผ่าน | browser opening failure ตามส่วนถัดไป | [UNAVAILABLE] · Data unavailable. |
| Production deploy รอบนี้ | **NOT PERFORMED** | Vercel mutations รอบนี้เป็น Preview เท่านั้น | VERIFIED · ยังไม่มี production candidate cutover |

## ชุดแก้ไขและขอบเขต

การเปลี่ยน app ที่เตรียมเผยแพร่มีเฉพาะ head metadata ของ `public/downloads/evselect-damper-setup-log.html`:

- title: `แบบบันทึกช่วงล่างและ Damper Baseline | EVSELECTS.COM`
- description และ og:description: `แบบบันทึกช่วงล่างรถ EV และค่าปรับแดมเปอร์รายมุม สำหรับเก็บข้อมูลก่อนคุยกับผู้ติดตั้ง ไม่ใช่สูตรตั้งค่า ข้อมูลที่กรอกไม่ส่งไปที่เว็บไซต์`
- og:title ใช้ข้อความเดียวกับ title

Preview branch มี `public/__review__/responsive.html` เป็น same-origin harness และ build-only fallback ไป dummy PostgreSQL ที่ `127.0.0.1:1` เมื่อ VERCEL_ENV เป็น preview และไม่มี DATABASE_URL เพื่อสร้าง frontend; ไม่ได้เชื่อมฐานข้อมูลจริงหรือเปลี่ยนค่าลับของโปรเจกต์ ชุด candidate สำหรับ production แยกจาก Preview โดยไม่รวม harness, helper หรือ vercel.json override ดังกล่าว ไม่เปลี่ยน backend, stock, payment, slug หรือโลโก้

ชื่อสาขา Preview: `codex/mobile-aeo-release-2026-10-09` โดยคง Preview เก่าและประวัติ patch เดิมไว้ Source notes ของ Research อยู่ `docs/editorial/research-mobile-release-2026-10-09.md`

## เหตุผลที่ตรวจมือถือและ deploy ยังไม่ครบ

เปิด HTTPS URL ของ Preview harness ด้วย browser ที่เลือกไว้แล้วได้ `net::ERR_BLOCKED_BY_CLIENT` หลังจากนั้นการอ่านแท็บที่เปิดผิดพลาดถูกปฏิเสธด้วยข้อความนโยบาย URL ว่า protocol ไม่ได้รับอนุญาต และห้ามบรรลุผลผ่าน workaround, raw CDP, browser commands หรือ alternate browser surfaces ไม่ได้พยายามข้ามข้อจำกัดดังกล่าว

HTTP GET ของ Preview harness สำเร็จ 200 จึง **ไม่สรุปว่าเว็บไซต์ล่มหรือเป็น anti-bot block ของเว็บไซต์** ข้อจำกัดนี้เกิดกับ browser ในรอบตรวจนี้ ไม่มี rendered mobile snapshot, screenshot หรือ navigation result ที่ยืนยันได้จาก candidate รอบนี้

`AGENTS.md` ใน repository ระบุ:

> Read the actual rendered desktop and mobile views in order.

และระบุ:

> If the browser or preview cannot be opened, keep additional content changes as a draft and report the missing check; do not publish or claim the reader review is complete.

คำสั่งล่าสุดของผู้ใช้อนุมัติ deploy แล้ว จึงไม่ต้องขออนุมัติ deploy ซ้ำ แต่ approval นี้ไม่ได้ทำให้ผล mobile ที่ยังไม่รันกลายเป็นผ่าน ชุดแก้จึงอยู่ใน candidate/draft จนตรวจหน้าแสดงผลได้ตาม gate

## เทียบ Audit 6 ต.ค. กับหลักฐานใหม่

| ID | ผลเทียบ | Source | Label |
| --- | --- | --- | --- |
| F01 ชื่อแบรนด์ | มี shared Organization ชื่อ EVSELECTS.COM และ alternateName EVSELECT/EVSELECTS แล้ว; title หลายหน้ายังใช้ EVSELECT เช่น /articles และ Tesla จึงไม่กล่าวว่า standardization ทุก template เสร็จแล้ว; wordmark เดิมยังเก็บไว้ | current source site-identity.ts + production/Preview raw metadata | VERIFIED · partial; ผลต่อ ranking NOT VERIFIED |
| F02 ผู้จัดทำ Tesla | raw main มี byline “จัดทำโดย EVSELECTS.COM”; author/publisher ใช้ Organization ID และ URL เดียวกัน ไม่สร้าง reviewer ใหม่ | production Tesla main + JSON-LD | VERIFIED · resolved in serving release |
| F03 lastmod | หลักฐาน crawl production วันที่ 9 ต.ค. ยืนยัน article 22/22 มี lastmod ตรง dateModified รวมสี่ URL ที่ Audit เคยขาด | prior Oct9 audit evidence + sitemap/source | VERIFIED · ไม่ใช่ indexing measurement |
| F04 www redirect | alias www และ apex ยังไม่มี redirect; canonical ใช้ apex; เก็บเป็นข้อเสนอ ไม่เรียกว่า access/index blocker | Vercel aliases / prior HTTP audit | VERIFIED observation / PROPOSED improvement |
| F05 Organization/WebSite | homepage raw JSON-LD พบทั้ง Organization และ WebSite แล้ว ใช้ ID ร่วมกับ article publisher | production homepage JSON-LD / site-identity.ts | VERIFIED · resolved in serving release; AI citations NOT VERIFIED |

ยังไม่พบไฟล์ AEO B2C Search Reference, Blueprint หรือ Handoff สำหรับอ่านจริงในไฟล์ที่มีให้รอบนี้ จึงยังไม่ยืนยันว่าตรวจครบตามข้อกำหนดเฉพาะในเอกสารทั้งสาม


## OPEN ITEMS

Rendered mobile reader review is blocked; do not publish this candidate until the repository gate passes.
