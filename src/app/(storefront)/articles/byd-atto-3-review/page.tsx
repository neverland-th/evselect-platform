import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { atto3Article as article, atto3Sources as sources } from '@/lib/atto3-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 720, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};

export default function Atto3ArticlePage() {
  const rows = [
    ['แบตเตอรี่ BYD Blade Battery', '50.25 kWh', '60.48 kWh'],
    ['ระยะตามมาตรฐาน NEDC', '410 กม.', '480 กม.'],
    ['กำลัง / แรงบิดสูงสุด', '150 kW / 310 Nm', '150 kW / 310 Nm'],
    ['ระบบขับเคลื่อน', 'ล้อหน้า', 'ล้อหน้า'],
    ['0–100 กม./ชม. ตามผู้ผลิต', '7.9 วินาที', '7.3 วินาที'],
    ['AC Type 2 สูงสุด', '7 kW', '7 kW'],
    ['DC CCS2 สูงสุด', '70 kW', '88 kW'],
    ['น้ำหนักรถเปล่า', '1,680 กก.', '1,750 กก.'],
    ['ขนาดยาง', '235/50 R18', '235/50 R18'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · รถประเทศไทย MY2026</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>Atto 3 สองรุ่นใช้มอเตอร์กำลังเท่ากัน แต่แบตเตอรี่และการชาร์จต่างกัน คำถามจึงอยู่ที่ว่าเส้นทางของคุณต้องใช้ส่วนต่างนั้นแค่ไหน ถ้าชาร์จที่บ้านและขับระยะเดิมทุกวัน คุณอาจมองคนละรุ่นกับครอบครัวที่ออกต่างจังหวัดบ่อย บทนี้จะช่วยเทียบ Premium กับ Extended ให้ตรงโจทย์ ก่อนนำใบเสนอราคามาตัดสินความคุ้มค่า</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">อ้างอิง <Source href={sources.brochure}>โบรชัวร์ BYD Atto 3 ประเทศไทย MY2026</Source> ตารางเป็นข้อมูลผู้ผลิต ส่วนคำแนะนำเป็นการวิเคราะห์การใช้งาน ทีมงานยังไม่มีผลวัดระยะวิ่ง ระยะเบรก หรือเสียงในห้องโดยสารของรถสองรุ่นนี้มาเปรียบเทียบ</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={720} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Atto 3 Extended จัดแสดงที่เมืองทองธานี ประเทศไทย ปี 2024 ใช้ประกอบภาพตัวรถ รายละเอียดอุปกรณ์ MY2026 ให้ยึดโบรชัวร์ ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="trim-specs">
        <h2 id="trim-specs" className={headingStyle}>Premium กับ Extended ต่างกันตรงไหน?</h2>
        <p>โบรชัวร์ MY2026 ระบุสองรุ่นนี้โดยตรง หากกำลังดูรถปีเก่าหรือชื่อรุ่นจากตลาดอื่น อย่านำราคาและอุปกรณ์มาปนกัน ตารางต่อไปนี้ใช้ <Source href={sources.brochure}>ข้อมูลสเปกในโบรชัวร์ หน้า 4</Source> ทั้งหมด:</p>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full table-fixed text-left text-sm leading-6 sm:text-base">
            <caption className="bg-slate-50 p-4 text-left font-semibold text-slate-950">BYD Atto 3 ประเทศไทย MY2026</caption>
            <thead className="bg-slate-950 text-white"><tr><th scope="col" className="w-[40%] p-3">รายการ</th><th scope="col" className="p-3">Premium</th><th scope="col" className="p-3">Extended</th></tr></thead>
            <tbody>{rows.map(([label, premium, extended]) => <tr key={label} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-3 font-semibold text-slate-950">{label}</th><td className="p-3 align-top">{premium}</td><td className="p-3 align-top">{extended}</td></tr>)}</tbody>
          </table>
        </div>
        <p><strong>จุดที่น่าสนใจ:</strong> Extended เพิ่มความจุแบตเตอรี่ 10.23 kWh และระยะ NEDC 70 กม. จาก Premium ขณะที่กำลังสูงสุดยังเท่ากันที่ 150 kW อย่าตีความส่วนต่างของระยะมาตรฐานว่าเป็นระยะที่เพิ่มได้แน่นอนในการเดินทางจริง</p>
        <p>หากสงสัยว่ามอเตอร์กำลังเท่ากันแต่ตัวเลขอัตราเร่งต่างกันได้อย่างไร อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>แรงม้ากับแรงบิดในรถ EV</Link> ประกอบได้ การเร่งยังขึ้นอยู่กับน้ำหนัก ระบบส่งกำลัง และการควบคุมกำลัง จึงไม่ควรตัดสินจากตัวเลขเดียว</p>
      </section>

      <section className="space-y-5" aria-labelledby="range-charge">
        <h2 id="range-charge" className={headingStyle}>เลือกแบตเตอรี่จากเส้นทาง และเลือกแผนชาร์จก่อนซื้อ</h2>
        <p>410 และ 480 กม. เป็นระยะตามมาตรฐาน NEDC ผู้ผลิตระบุว่าระยะใช้งานเปลี่ยนตามพฤติกรรมขับ สภาพอากาศ อุณหภูมิ และน้ำหนักบรรทุก ถ้าเดินทางไกล ให้ดูระยะระหว่างจุดชาร์จที่ใช้งานได้จริงและเผื่อทางเลือกเมื่อสถานีเต็ม แทนการวางแผนว่าจะใช้ได้ครบตัวเลขในตาราง</p>
        <p>ถ้าชาร์จบ้านเป็นหลัก ทั้งสองรุ่นรองรับ AC สูงสุด 7 kW เท่ากัน ส่วนคนใช้ชาร์จเร็วบ่อยควรทราบว่า Premium รับ DC สูงสุด 70 kW และ Extended 88 kW ตัวเลขสูงสุดไม่ได้บอกเวลาชาร์จทั้งช่วง ต้องดูระดับแบตเตอรี่ อุณหภูมิรถ และข้อจำกัดของตู้ร่วมกัน บทนี้จึงไม่ใส่เวลาชาร์จ 10–80% ที่ยังไม่มีข้อมูลการทดสอบรองรับ</p>
        <p><strong>แนวทางเลือก:</strong> เริ่มพิจารณา Premium หากระยะประจำวันกับจุดชาร์จของคุณลงตัวอยู่แล้ว ส่วน Extended ควรอยู่ในรายการเปรียบเทียบเมื่อเดินทางไกลบ่อยหรือต้องการความจุเผื่อเพิ่ม แล้วนำส่วนต่างราคาจริงมาเทียบกับประโยชน์นั้น ไม่มีรุ่นใดคุ้มที่สุดสำหรับทุกบ้าน</p>
        <p>เรื่องการชาร์จประจำวันให้ใช้คู่มือที่มากับรถ อ่าน <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่ EV</Link> เพื่อแยกคำแนะนำตามชนิดแบตเตอรี่และข้อกำหนดผู้ผลิต ชื่อ Blade Battery เพียงอย่างเดียวไม่ใช่หลักฐานรับรองว่าจะไม่เสื่อมหรือไม่เกิดอันตรายในทุกสถานการณ์</p>
      </section>

      <section className="space-y-5" aria-labelledby="cabin">
        <h2 id="cabin" className={headingStyle}>อุปกรณ์มีมาให้มาก แต่ต้องลองกับคนที่ใช้จริง</h2>
        <p>ตามโบรชัวร์ MY2026 ทั้งสองรุ่นมีจอกลางหมุนได้ 15.6 นิ้ว เบาะคู่หน้าระบายอากาศ เบาะคนขับไฟฟ้า 6 ทิศทาง เบาะผู้โดยสารหน้าไฟฟ้า 4 ทิศทาง และหลังคาพาโนรามิกพร้อมม่านไฟฟ้า จึงควรตรวจความถนัดในการใช้งาน มากกว่านับจำนวนอุปกรณ์อย่างเดียว</p>
        <p>ลองปรับเบาะให้เป็นท่าขับของคุณก่อนดูจอและกระจก จากนั้นให้ผู้โดยสารประจำนั่งด้านหลัง ลองขึ้นลงรถ วางเท้า และใช้ช่องแอร์ หากมีคาร์ซีตหรือรถเข็นเด็ก ให้นำขนาดจริงไปตรวจพื้นที่: โบรชัวร์ระบุห้องเก็บสัมภาระ 440 ลิตร และ 1,340 ลิตรเมื่อพับเบาะ แต่ตัวเลขลิตรไม่บอกว่าของชิ้นหนึ่งจะผ่านช่องประตูท้ายได้หรือไม่</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={article.interior} alt="ห้องโดยสาร BYD Atto 3 รุ่นพวงมาลัยซ้าย เห็นจอกลาง พวงมาลัย และคอนโซล" width={1280} height={853} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">ภาพห้องโดยสาร Atto 3 Premium พวงมาลัยซ้าย ปี 2025 ใช้ประกอบการดูรูปแบบจอและคอนโซล รถไทยเป็นพวงมาลัยขวาและต้องตรวจอุปกรณ์ตามปีรุ่น ภาพ: <Source href={article.interiorSource}>Ethan Llamas</Source> · <Source href={article.imageLicenseUrl}>CC BY-SA 4.0</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
        </figure>
        <p>ระบบช่วยขับในโบรชัวร์มีทั้งระบบควบคุมความเร็วแบบปรับระยะห่างและระบบเบรกฉุกเฉินอัตโนมัติ ให้ผู้ส่งมอบสอนการเปิดปิด ข้อจำกัด และข้อความเตือนจากคู่มือ รถยังต้องมีผู้ขับดูแลตลอดเวลา ไม่ทดลองด้วยการสร้างสถานการณ์เสี่ยงบนถนน</p>
      </section>

      <section className="space-y-5" aria-labelledby="ride-tyres">
        <h2 id="ride-tyres" className={headingStyle}>ลองช่วงล่างและยาง ก่อนตัดสินใจแต่ง</h2>
        <p>สเปก MY2026 ใช้ช่วงล่างหน้า MacPherson strut หลัง Multilink และยาง 235/50 R18 ทั้งสองรุ่น โครงสร้างเหล่านี้ยังบอกไม่ได้ว่าคุณจะรู้สึกนุ่มหรือโยนแค่ไหน ให้ลองบนเส้นทางที่ใกล้เคียงการใช้ประจำ พร้อมคนที่นั่งด้วยจริง และบันทึกว่ารู้สึกกระแทกตอนผ่านรอยต่อหรือโคลงต่อหลังผ่านไปแล้ว</p>
        <p>อ่าน <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>วิธีแยกอาการช่วงล่างบนถนนไทย</Link> เพื่ออธิบายปัญหาได้ชัด หากจะเปลี่ยนยาง ต้องตรวจดัชนีรับน้ำหนักและความเร็วตามข้อกำหนดรถด้วย ไม่ใช่ตรงแค่ขนาด 235/50 R18 ดูต่อที่ <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>การเลือกยางและคอยล์โอเวอร์สำหรับ EV</Link></p>
        <p>ความสูงใต้ท้องรถใช้พิจารณาระยะเคลียร์สิ่งกีดขวางภายใต้เงื่อนไขที่ระบุ ไม่ใช่ระดับน้ำที่ขับผ่านได้อย่างปลอดภัย ถ้าเส้นทางมีน้ำท่วม อย่าใช้ตัวเลขความสูงรถตัดสินว่าจะผ่านได้ ให้หลีกเลี่ยงและปฏิบัติตามคำเตือนในคู่มือ</p>
      </section>

      <section className="space-y-5" aria-labelledby="price-warranty">
        <h2 id="price-warranty" className={headingStyle}>ราคาและการรับประกัน: ขอเอกสารตรงคันที่จะรับ</h2>
        <p>ยังไม่มีข้อมูลราคาสุทธิแยก Premium และ Extended ที่ยืนยันเงื่อนไขซื้อ ณ วันที่ตรวจครบถ้วน — <strong>Data unavailable</strong> จึงไม่ใช้ราคาจากโปรโมชันเก่ามาตัดสินความคุ้มค่า ตรวจ <Source href={sources.model}>หน้า BYD Atto 3 ของ RÊVER ประเทศไทย</Source> และขอใบเสนอราคาที่ระบุปีรุ่น รุ่นย่อย สี เงื่อนไขเงินสดหรือสินเชื่อ ของแถม และวันหมดอายุข้อเสนอให้ชัด</p>
        <p>ขอเอกสารการรับประกันตัวรถ แบตเตอรี่แรงดันสูง และระบบขับเคลื่อนแยกกัน ตรวจทั้งระยะเวลา ระยะทาง เงื่อนไขความจุแบตเตอรี่ และประวัติบำรุงรักษาที่ต้องมี บทนี้ยังไม่ยืนยันแพ็กเกจรับประกันแทนผู้ขาย เพราะเงื่อนไขอาจขึ้นกับรถและช่วงเวลาที่ซื้อ</p>
      </section>

      <section className="space-y-5 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="decision">
        <h2 id="decision" className={headingStyle}>ก่อนจอง ให้ตอบได้สามข้อ</h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li><strong>ชาร์จที่ไหน:</strong> มีที่ชาร์จประจำที่ติดตั้งและใช้งานได้จริง หรือมีสถานีสะดวกพร้อมแผนสำรองหรือยัง?</li>
          <li><strong>แบตเตอรี่เพิ่มช่วยอะไร:</strong> เทียบเส้นทางที่ขับบ่อยกับส่วนต่างราคาในใบเสนอราคา ไม่ใช้ระยะ NEDC เป็นคำสัญญาว่าจะขับถึงทุกครั้ง</li>
          <li><strong>คนในรถอยู่ด้วยแล้วโอเคไหม:</strong> ลองเบาะหลัง ช่องแอร์ การขึ้นลง และสัมภาระ ก่อนเพิ่มงบให้รุ่นย่อยหรืออุปกรณ์แต่ง</li>
        </ol>
        <p>Premium เป็นจุดเริ่มต้นที่ควรลองเมื่อแผนชาร์จและระยะประจำวันลงตัว ส่วน Extended เพิ่มความจุให้คนที่ใช้ประโยชน์จากมันได้จริง เลือกจากโจทย์เหล่านี้แล้วค่อยเทียบราคา จะได้รถที่เหมาะกับบ้านคุณมากกว่าตัดสินจากคำว่า “รุ่นท็อป”</p>
      </section>
    </div>
    <aside className="mt-12 space-y-4 rounded-2xl border border-lime-200 p-5 text-sm leading-7">
      <p className="font-bold text-slate-950"><BrandHomeLink /> — เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม</p>
      <p>ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน ข้อมูลรถอ้างอิงเอกสารที่ระบุ ตรวจสเปกและเงื่อนไขของรถคันจริงกับผู้จำหน่ายก่อนตัดสินใจ</p>
      <Link href="/articles" className={linkStyle}>เลือกอ่านบทความ EV ตามเรื่องที่กำลังตัดสินใจ</Link>
    </aside>
  </article>;
}
