# EVSELECT Pre-launch Campaign Template

## Campaign direction

**Core idea:** เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม

Use this direction while there is no sellable stock. It keeps EVSELECT useful today, makes the launch status explicit, and turns reader interest into model-level demand signals without taking orders.

## Canonical website copy

- Eyebrow: `EVSELECT กำลังเตรียมเปิดตัว`
- Headline: `เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม`
- Body: `ตอนนี้คุณอ่านรีวิวและคู่มือได้เต็มที่ ส่วนอุปกรณ์เสริมอยู่ระหว่างการคัดเลือกและจัดทำข้อมูลรุ่นรถ จุดติดตั้ง วิธีใช้ และข้อจำกัด ก่อนเปิดจำหน่าย`
- Status: `ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน`
- Primary CTA: `บอกรุ่นรถที่คุณใช้`
- Secondary CTA: `อ่านคู่มือระหว่างรอ`

## Three-step proof block

1. `ฟังจากคนใช้รถก่อน` — รวบรวมรุ่นรถ ปัญหาที่เจอ และอุปกรณ์ที่คนใช้จริงอยากได้
2. `ตรวจข้อมูลให้พร้อม` — ระบุรุ่น ปี จุดติดตั้ง วัสดุ วิธีใช้ และข้อจำกัดให้ชัดเจน
3. `ค่อยเปิดจำหน่าย` — เปิดรายละเอียดสินค้าและราคาเมื่อมีข้อมูลพอให้ตัดสินใจอย่างรับผิดชอบ

## Social post templates

### Facebook / Instagram 1:1

- Headline: `EVSELECT กำลังเตรียมเปิดตัว`
- Subhead: `ระหว่างนี้ บอกรุ่นรถและปัญหาที่คุณอยากให้เราเริ่มก่อน`
- Status line: `ยังไม่เปิดรับคำสั่งซื้อ`
- CTA in caption: `คอมเมนต์หรือส่งข้อความ: รุ่น / ปี / รุ่นย่อย / สิ่งที่อยากแก้`

Caption:

> เราเริ่มจากคำถามของคนใช้รถจริง ก่อนเลือกว่าจะทำสินค้าอะไร รุ่นไหน และต้องบอกข้อจำกัดอะไรให้ครบ ระหว่างนี้เว็บไซต์ยังเปิดให้อ่านรีวิวและคู่มือได้ตามปกติ สินค้ายังไม่เปิดจำหน่ายและยังไม่รับชำระเงิน หากอยากให้เราเริ่มจากรถรุ่นไหน ส่งรุ่น ปี รุ่นย่อย และสิ่งที่คุณอยากแก้มาได้เลย

### Story 9:16

- Frame 1: `กำลังเตรียมเปิดตัว`
- Frame 2: `คุณใช้รถรุ่นอะไร?`
- Frame 3: `อยากแก้เรื่องไหนก่อน?` + `พื้นรถ / แดด / พื้นที่เก็บของ / ช่วงล่าง`
- Frame 4: `ส่งรุ่น + ปี + รุ่นย่อยให้ EVSELECT`
- Footer on every frame: `ยังไม่เปิดรับคำสั่งซื้อ`

## OpenArt image prompt

Recommended model: `GPT Image 2.5 Flare`

Settings:

- Mode: `text2image`
- Aspect ratio: `16:9` for website and Facebook landscape, `1:1` for feed, `9:16` for story
- Resolution: `2K`
- Quality: `medium`
- Format: `webp` for website, `png` for social editing
- Image count: `1`

Prompt:

> Create a premium automotive editorial background for a Thailand electric-vehicle knowledge brand preparing to launch its first accessories. Deep navy and near-black environment with subtle slate gradients, one elegant generic electric-car silhouette on the right half, a restrained electric lime-green light ribbon and precise technical contour lines, realistic refined materials, calm expert mood, and generous clean negative space on the left for Thai copy added later in the layout. Strong readability under a dark overlay. No products, no shop, no boxes, no people, no logos, no car manufacturer marks, no license plates, no words, no letters, no numbers, no badges, no UI, no watermark. Sophisticated and credible editorial art direction, sharp but not flashy.

Do not ask the image model to render the Thai campaign copy. Add the Thai text in HTML, Figma, Canva, or the social editor so it stays accurate and accessible.

## Visual system

- Background: `#020617` / `#0f172a`
- Launch accent: `#bef264`
- Secondary accent: `#84cc16`
- Main text: `#ffffff`
- Supporting text: `#cbd5e1`
- Status panel: amber at low opacity, never a sales-orange button
- Typography: Prompt for Thai and Latin text, using the site's existing weight scale
- Tone: calm, specific, evidence-led; no countdown, fake scarcity, launch date, price, stock count, discount, or fitment guarantee until verified

## Reuse rules

- Always show the status line near the first launch CTA.
- Route interest to `/contact` or the official EVSELECT Facebook inbox.
- Ask for `รุ่น / ปี / รุ่นย่อย / สิ่งที่อยากแก้` to make each response useful.
- Replace the pre-launch block only when products, prices, stock, and the opening channel have been verified.
- Do not link to a marketplace until at least one item is actually available there.

The production web implementation is the reusable `PrelaunchPanel` component in `src/components/PrelaunchPanel.tsx`.
