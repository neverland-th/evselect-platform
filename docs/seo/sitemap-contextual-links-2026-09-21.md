# Sitemap และ contextual-link audit — 21 กันยายน 2569

## ขอบเขตและสถานะ

งานนี้แก้ sitemap และเพิ่มการตรวจลิงก์ใน build โดยไม่เปลี่ยนบทความ ภาพ เลย์เอาต์ ระบบซื้อขาย หรือ draft ที่กำลังตรวจในงานอื่น เนื้อหาอ้างอิง production `e69706f` / `dpl_9VJHCKFwQQNFsUmGFo7tWSCSFqJn` ซึ่งยืนยันก่อนเริ่มและก่อนเตรียม deploy

สกิล `evselect-contextual-links` ถูกแก้ในไฟล์เดิมตามคำสั่งล่าสุด: **internal เปิดแท็บเดิม; external เปิดแท็บใหม่พร้อม noopener noreferrer** ไม่ใช้กฎเปิดแท็บใหม่กับทุกลิงก์อีกต่อไป

## Sitemap: สาเหตุที่ยืนยันได้

ก่อนแก้ ตรวจ HTTP ของโดเมนจริง:

| URL | ผล |
| --- | --- |
| `/sitemap.xml` | 200, application/xml, มี 24 canonical URLs |
| `/robots.txt` | 200, มีบรรทัด Sitemap ชี้ `/sitemap.xml` |
| `/sitemap_index.xml` | 404 |
| `/sitemap_indexl.xml` | 404 |

จึงยืนยันได้ว่า URL ของ index สองชื่อยังไม่มี ไม่ใช่ว่าเว็บไม่มี sitemap เลย ส่วน URL ที่ส่งจริงและสถานะประมวลผลใน Google Search Console: **Data unavailable** เพราะไม่มีการเข้าถึง property ในเซสชันนี้

สร้าง `/sitemap_index.xml` เป็น index หลักที่อ้าง `/sitemap.xml` ซึ่งสร้างจากรายการหน้าเผยแพร่เดิม และรองรับ `/sitemap_indexl.xml` เป็น compatibility alias ที่ให้ XML 200 เหมือนกัน ไม่สร้าง sitemap ของ URL ที่พิมพ์ผิดทั้งเว็บ Robots ประกาศทั้ง index หลักและ sitemap เดิม ไม่ใส่วันที่แก้ไขปลอม ไม่ใส่หน้า noindex หรือระบบภายในใน sitemap

Google อนุญาตชื่อไฟล์ sitemap ที่เป็น URL ถูกต้อง ไม่ได้บังคับชื่อเดียว และการส่ง sitemap ไม่รับประกันการ crawl/index: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
โครงสร้าง index: https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps

## ผล inventory ลิงก์

อ่าน HTML ที่เซิร์ฟเวอร์ render ของ 30 หน้า: 24 หน้าเผยแพร่ (หน้าแรก หน้ารวม และ 22 บทความ) กับ 6 หน้าข้อมูลที่ยัง noindex แยกลิงก์ในเนื้อหาออกจาก navigation และแยก same-page TOC ออกด้วย

- พบ `<a>` 1,030 occurrences; เป็น internal 724 occurrences ตัวเลขรวมการซ้ำของ header/footer บนแต่ละหน้า ไม่ใช่จำนวน URL ไม่ซ้ำ
- ไม่พบ internal target ที่ตอบผิดจาก 200, hash ปลายทางหาย, nested anchor หรือบทความ orphan ในขอบเขตที่ตรวจ
- 21 จาก 22 บทความไม่ผ่าน heuristic ของ inline contextual-link candidate อีกหนึ่งบทความมีลิงก์ในประโยคไปยังเช็กลิสต์ดาวน์โหลด **ไม่ได้หมายความว่ามี contextual cross-article links ที่ดีครบแล้ว**
- พบ brand-text occurrences ที่ยังไม่ลิงก์กลับหน้าแรก/ลิงก์ผิดปลายทาง 313 ครั้ง รวมเมนูและ footer ที่ซ้ำ รวม markup ของเมนูมือถือ ไม่ใช่ 313 จุดที่มองเห็นพร้อมกัน
- พบ heading nesting skips 73 occurrences รวม shared components; ไม่พบปัญหาจำนวน H1 ใน inventory นี้
- พบ external HTTP(S) links ที่ยังไม่เปิดแท็บใหม่ 195 occurrences ตามกฎล่าสุดของผู้ใช้
- การ์ด related articles มีประโยชน์ในการค้นพบหน้า แต่ไม่ถือว่าแทนลิงก์อธิบายความสัมพันธ์ในย่อหน้าได้

ข้อจำกัด: ตัวตรวจหา candidate จาก anchor ภายในย่อหน้า/รายการ/เซลล์ที่มีข้อความประกอบ ไม่สามารถตัดสินความเกี่ยวข้องเชิงความหมายแทนคนอ่าน และ inventory แหล่งภายนอกไม่ใช่การ fact-check แหล่งนั้น

## จุดที่ควรแก้ด้านความหมายก่อน

| หน้าต้นทาง | Anchor ที่พบ | ปัญหา | ปลายทาง/แนวทางที่เสนอ |
| --- | --- | --- | --- |
| `shock-absorber-types-monotube-twintube-air-ev` | อ่านรีวิวช่วงล่าง Zeekr 7X | ชี้ `/articles` แทนบทความตรงเรื่อง | `/articles/zeekr-7x-2026-review` หลังตรวจเนื้อหาปลายทาง |
| หลายหน้ารีวิว | ค้นหาตามรุ่นรถ | บางลิงก์ชี้ `/contact`; บางลิงก์ชี้ `/#vehicle-finder` ที่ตอนนี้เป็น Coming soon | เปลี่ยนเป็นข้อความและปลายทางหน้ารวมรีวิวที่ตรงกัน |
| `ev-camber-adjustment-wheel-alignment-guide` | ดูปีกนกปรับแคมเบอร์ตรงรุ่น / ดูชุดอาร์มหลังปรับมุมล้อ | ชี้หน้าแรก ซึ่งไม่ใช่หน้าสินค้าตรงรุ่น | แทนด้วยการอ่านเรื่องการตั้งศูนย์/เลือกช่วงล่างที่มีจริง ไม่อ้างว่าสินค้าพร้อมขาย |
| `shock-absorber-types-monotube-twintube-air-ev` | ดูโช้คอัพ Monotube ตรงรุ่น / ดูชุดอัปเกรดช่วงล่าง SUV | ชี้หน้าแรก ไม่ได้พาไปสิ่งที่ข้อความสัญญา | ใช้ anchor ให้ความรู้และบทความปลายทางที่ตรวจแล้ว |
| `ev-suspension-tuning-guide` และ `tesla-model-3-highland-review` | ไม่มี internal link ใน main content ของ inventory นี้ | ไม่มีเส้นทางอ่านต่อในตัวเนื้อหา | เพิ่มเฉพาะเมื่อบริบทกล่าวถึงประเด็นนั้นและตรวจบทความเต็มแล้ว |

ตัวอย่าง anchor ที่เหมาะกับเนื้อหาซึ่งเกี่ยวข้องจริง: “วิธีปรับ Bump และ Rebound”, “การตั้งแคมเบอร์และศูนย์ล้อ”, “เลือกยางให้เหมาะกับช่วงล่าง”, “ดูแลแบตเตอรี่ตามคู่มือรถ” — ไม่ยัดทุกลิงก์ลงทุกบทความ และไม่อ้างสเปก/การทดสอบจากชื่อบทความเพียงอย่างเดียว

หลัก anchor text ที่อธิบายปลายทางและมีบริบท: https://developers.google.com/search/docs/crawling-indexing/links-crawlable

## การตรวจทุก build

`npm run build` เรียก unit tests → Next build → เปิด production server ชั่วคราวเพื่ออ่าน SSR ของทุก public route → ตรวจ canonical/noindex/sitemap/robots/ลิงก์/anchor/hash/brand/heading/กฎ internal-external → ปิดเซิร์ฟเวอร์เอง มี `vercel.json` ระบุ buildCommand นี้ชัดเจน

คำสั่ง:

```powershell
npm run build
$env:BASE_URL = 'https://evselects.com'
npm run audit:content
npm run audit:content -- --strict
```

- Sitemap/canonical/สถานะ HTTP ที่ไม่ถูกต้องทำให้การตรวจล้มเหลว
- ปัญหา editorial เดิมบันทึกเป็น fingerprint baseline เฉพาะหน้าเดิมที่ **ทั้งเนื้อหา ลิงก์ และ findings ไม่เปลี่ยน** เพื่อให้แก้ sitemap ได้โดยไม่เผยแพร่บทความที่ยังอ่านทวนไม่ครบ
- หน้าใหม่หรือหน้าแก้ไขที่ยังมีปัญหาจะไม่ผ่าน ไม่ regenerate baseline เพื่อกลบ error
- `--strict` ไม่ยกเว้นปัญหาเดิม และตรวจยืนยันแล้วว่าจบด้วย exit 1 ตามที่ควร ไม่รายงานว่าทั้งเว็บ editorial ผ่าน
- Full rendered desktop/mobile reader review และการดูภาพทุกภาพยังเป็นเงื่อนไขก่อนเผยแพร่ **การแก้เนื้อหา** งานนี้ไม่มีการแก้เนื้อหาบทความ จึงไม่อ้างว่าอ่านทวนบทความทั้งหมดแทนงานที่ค้างอยู่

หลักฐาน local: `docs/seo/content-link-inventory-2026-09-21.json` และ CSV ชื่อเดียวกันลงท้าย `-internal-links.csv` มี anchor/ปลายทาง/scope ราย occurrence; strict negative check อยู่ `scratch/content-link-strict-audit.json`

Browser structural check: เปิดทั้ง 30 route ที่ 1440 และ 390 px รวม 60 page/viewport checks ไม่พบ page exceptions หรือ horizontal overflow บันทึก visible anchors และโครงสร้างหลัง hydration ที่ `scratch/content-links-browser/results.json` ตรวจภาพหน้าจอ opening บทความโช้คและ Coming soon banner สองขนาดแล้ว เป็น UI regression sampling ไม่ใช่การอ่านบทความเต็มหรือดูภาพทุกภาพ

Unit tests 8 cases ผ่าน รวม internal absolute/relative URL, fragment decoding, contextual candidate แยกจากเมนู, empty/generic/nested anchors, brand-home, heading skip, malformed XML, canonical sitemap host, legacy-fingerprint gate, internal same-tab เทียบกับ external new-tab และความคงที่ของ fingerprint เมื่อ cache URL รูปเปลี่ยนตาม build; scoped ESLint และ Next.js 16.3.2 build/TypeScript/43 static pages ผ่าน

การ deploy รอบแรก `dpl_AAYKVHBp4Zm86LZXVpdy1rw9ExMy` ถูก audit gate หยุดไว้ เพราะ Next/Vercel เปลี่ยน imported-image URL จาก `/static/media/` เป็น `/static/immutable/media/` พร้อม cache hash คนละค่า ทำให้ fingerprint บทความโช้คต่างจาก local โดยเนื้อหาไม่เปลี่ยน Production alias ยังอยู่ release เดิม แก้โดย normalize เฉพาะ cache path/hash ของภาพภายในเว็บใน text/link fingerprint; ยังคงตรวจชื่อไฟล์และ alt และไม่ข้ามการตรวจภาพหรือ reader review แยกต่างหาก ย้าย baseline เฉพาะหน้าบทความโช้คให้ใช้ algorithm ใหม่นี้ หลังเทียบแล้ว issues, links, headings และ image inventory ของ local ก่อน/หลังเหมือนเดิมทุกค่า อีก 29 หน้าไม่เปลี่ยน fingerprint

## การเผยแพร่

ยังไม่ยืนยันการเผยแพร่ ณ เวอร์ชันเอกสารนี้ ต้องบันทึก deployment และผลตรวจโดเมนจริงหลัง deploy
