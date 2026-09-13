# EVSELECT Frontend Pre-launch Patch v1.0

วันที่ตรวจ: 12 กันยายน 2026 — สถานะ: แก้โค้ดและทดสอบในชุดส่งมอบแล้ว ยังไม่ได้ push, merge หรือ deploy

## ผลงาน

- ปรับหน้าแรกเป็นศูนย์รวมบทความและคู่มือเลือกตามรถ โดยรักษาแบรนด์สีขาว/เขียว โลโก้เดิม และ anchor เดิม
- เพิ่มตัวกรองบทความตามยี่ห้อ/ชื่อรถ พร้อมผลลัพธ์และสถานะเมื่อไม่พบข้อมูล
- เปลี่ยนส่วนขายเป็นเตรียมเปิดตัว ยกเลิกสินค้า/ราคา/สต็อกตัวอย่าง และข้อความรับประกัน Fitment ในส่วนส่งเสริมการขายที่แก้
- หน้า `/product/[id]` แสดงสถานะเตรียมเปิดตัวและ noindex โดยไม่เรียกข้อมูลสต็อก หน้าแรกไม่เรียก Prisma อีกต่อไป
- ปรับเมนูมือถือและหน้าติดต่อให้ใช้บทความ Facebook และ Messenger พร้อมนำลิงก์ร้าน/LINE ที่ยังไม่ยืนยันออก
- รักษา URL บทความทั้ง 22 หน้า และแก้การอ้างภาพที่ไม่มีไฟล์ใน ZIP ด้วย placeholder ที่บอกสถานะชัดเจน ไม่ใช่การกู้ภาพต้นฉบับ
- แก้เอกสารส่งมอบให้แยกแหล่งบทความจริงจากไฟล์ส่งออกโพสต์ Facebook และบันทึกข้อมูล Vercel ที่ตรวจแล้ว

## หลักฐานการตรวจ

| รายการ | ผล | Label | Source |
|---|---|---|---|
| Production build ของโค้ดในเครื่อง | ผ่าน | VERIFIED | `verification/build.log` ใน ZIP |
| ESLint เฉพาะไฟล์โค้ดที่แก้ | 0 errors / 0 warnings | VERIFIED | `verification/changed-files-lint.json` |
| ESLint ทั้ง repo | 121 errors / 82 warnings; baseline 128 / 112 | EXISTING DEBT | `verification/lint-summary.json` |
| HTTP หน้าแรก สินค้าเตรียมเปิดตัว ติดต่อ ดัชนีบทความ และบทความ 22 หน้า | 26 หน้า HTTP 200 | VERIFIED | `verification/routes.json` |
| ลิงก์บทความเก่า `/blog/zeekr-009-review` | Redirect 308 ไป URL บทความเดิม | VERIFIED | `scripts/verify-frontend-prelaunch.mjs` และ `verification/routes.json` |
| การอ้างภาพ local ภายในหน้าบทความ | พบไฟล์ครบ 112 การอ้างอิง | VERIFIED | `verification/routes.json` |
| ไฟล์หลังบ้าน/API/Prisma/shared data/package/proxy ที่กำหนดเป็นขอบเขตคุ้มครอง | 38 ไฟล์เหมือน ZIP เดิมทุกไบต์ | VERIFIED | `verification/patch-integrity.json` |
| แพตช์กับ ZIP ต้นทาง | ตรวจ apply และเทียบไฟล์ผลลัพธ์ | VERIFIED เมื่อ manifest ระบุ passed | `verification/patch-integrity.json` |
| ทดสอบ UI ใน browser ทั้งมือถือ/เดสก์ท็อป | ยังทำไม่ได้: browser ปฏิเสธ local preview URL | UNAVAILABLE | ข้อผิดพลาด browser ระหว่างตรวจ |

ตัวอย่าง `EVSELECT-Homepage-Preview-v1.0.html` เป็นหน้าแสดงหน้าตาแบบ static ที่รวมภาพ ฟอนต์ และ CSS ไว้ในไฟล์เดียว ปุ่มตัวกรองถูกปิดในตัวอย่างนี้ ให้ใช้แอป Next.js เพื่อทดสอบการโต้ตอบจริง ไม่ใช่ Vercel Preview หรือภาพหน้าจอที่ผ่าน browser QA

## ฐานของแพตช์และวิธีนำไปใช้

ต้นทาง: `evselect-platform-chatgpt-frontend-handoff.zip` โดย ZIP comment ระบุ SHA `8da4bee101cb98f28be8ec003054bcbc829eb6c0` เอกสารเดิมระบุ base `22cc781386186a9aa028aa5bba7a43d31deb3c48` แพตช์นี้อ้างอิงเนื้อหา ZIP โดยตรง ไม่ใช่ production SHA

ก่อนใช้ ให้ตรวจ origin, branch และงานค้าง แล้วทำบน branch ส่งมอบที่ไม่ใช่ Production Branch ห้ามนำโฟลเดอร์ `files/` ไปทับ checkout รุ่นอื่นโดยไม่ตรวจ diff

```sh
git status --short
git remote -v
git branch --show-current
git apply --check /path/to/EVSELECT-Frontend-Prelaunch-v1.0.patch
git apply /path/to/EVSELECT-Frontend-Prelaunch-v1.0.patch
npm ci --ignore-scripts --no-audit --no-fund
npm run build
```

เปิดเซิร์ฟเวอร์ในเทอร์มินัลหนึ่งด้วย `npm run start -- --port 3100` แล้วอีกเทอร์มินัลรัน:

```sh
FRONTEND_TEST_URL=http://127.0.0.1:3100 node scripts/verify-frontend-prelaunch.mjs
```

`npm run lint` ยังไม่ผ่านทั้ง repo ตามจำนวนด้านบน ไม่ควรปิดกฎหรือแก้ไฟล์หลังบ้านเพื่อทำให้รายงานเป็นสีเขียว

หาก `git apply --check` ไม่ผ่าน ให้ตรวจความต่างของ source snapshot ก่อนปรับแพตช์ ห้ามบังคับทับงานเดิม หากต้องย้อนแพตช์ก่อนมีงานอื่นซ้อน ตรวจด้วย `git apply --reverse --check` ก่อนใช้ `git apply --reverse` ไม่ใช้วิธีนี้แทน production rollback

## ข้อมูล Vercel ที่ตรวจจาก Dashboard

| รายการ | ค่าที่พบ | Label | Source |
|---|---|---|---|
| Project | `evselect-com/evselect-platform` | VERIFIED | https://vercel.com/evselect-com/evselect-platform |
| Connected repository | `evselect/evselect-platform` | VERIFIED | https://vercel.com/evselect-com/evselect-platform/settings/git |
| Production branch | `main` | VERIFIED | https://vercel.com/evselect-com/evselect-platform/settings/environments |
| Production ที่ให้บริการตอนตรวจ | `01c83175d9cb885b2dc8473612b920f6ba441d39` | VERIFIED | Project Overview; deployment `5n8H7YPBM5YV4uBKSWMx5H5NL24A` |
| Deployment ที่ถูกบล็อก | Vercel จับคู่ commit email `admin@evselect.com` กับบัญชี GitHub ไม่ได้ | VERIFIED | https://vercel.com/evselect-com/evselect-platform/D6mWdiRhrNUh3LfSPHn6KmQU3jmt |
| Repository ในเอกสารส่งมอบเดิม | `neverland-th/evselect-platform` | PROVIDED | `docs/FRONTEND_HANDOFF.md` ส่วน original snapshot |

ไม่มีการเปลี่ยนการเชื่อม Git, environment variables, โดเมน, DNS, บัญชี หรือฐานข้อมูล ไม่มีการสร้าง commit ด้วยตัวตนสมมติ

## ข้อจำกัดด้านเนื้อหา

แพตช์นี้แก้หน้าบ้านและข้อความส่งเสริมการขายที่ระบุ ไม่ได้รับรองความถูกต้องของสเปก ราคา หรือคำกล่าวอ้างเรื่องการทดลองขับที่มีอยู่ในเนื้อหาบทความเดิม และยังไม่ได้ตรวจข้อเท็จจริงทั้งหมด ภาพเดิมที่มีไฟล์ถูกนำกลับมาใช้โดยไม่อ้างว่าได้ตรวจสิทธิ์หรือแหล่งที่มาใหม่ ภาพที่หายยังต้องหาต้นฉบับเพิ่มเติม

## OPEN ITEMS

| ข้อมูล/งานที่ขาด | แหล่งที่ต้องใช้ | งานที่ยังติดอยู่ |
|---|---|---|
| ความสัมพันธ์ของ `neverland-th/evselect-platform` กับ repo ที่ Vercel เชื่อมอยู่ | เจ้าของ repo และ GitHub access | เลือกปลายทาง PR โดยไม่ส่งผิด repo |
| การเชื่อม GitHub ที่อ่าน/เขียน repo เป้าหมายได้ | GitHub connector ของผู้ใช้ | Push branch และเปิด Draft PR |
| Commit identity ที่ GitHub จับคู่ได้ | บัญชี GitHub ของผู้ส่ง commit | แก้เหตุ deployment ถูกบล็อก |
| Preview ที่ browser เปิดได้และการตรวจมือถือ/เดสก์ท็อป | Vercel Preview หลังเชื่อม repo สำเร็จ | อนุมัติ release ขึ้นเว็บจริง |
| ต้นฉบับภาพที่หายและการตรวจเนื้อหาบทความ | ไฟล์เจ้าของเว็บและแหล่งข้อมูลอ้างอิง | ความครบถ้วนของภาพและเนื้อหา |
