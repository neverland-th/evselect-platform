import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { zeekr009Article as article, zeekr009Sources as sources } from '@/lib/zeekr-009-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 960, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};
export default function Zeekr009ArticlePage() {
  const rows = [
    ['จำนวนที่นั่ง', '7', '7', '6'],
    ['ระบบขับเคลื่อน', 'มอเตอร์เดี่ยว FWD', 'มอเตอร์คู่ AWD', 'มอเตอร์คู่ AWD'],
    ['กำลังสูงสุด', '335 hp', '603 hp', '603 hp'],
    ['0–100 กม./ชม.', '7.9 วินาที', '4.5 วินาที', '4.5 วินาที'],
    ['ระยะทาง NEDC', '712 กม.', '686 กม.', '686 กม.'],
    ['ล้ออัลลอย', '19 นิ้ว', '19 นิ้ว', '20 นิ้ว'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · ZEEKR 009 ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>รถครอบครัวที่ดีต้องลงตัวกับคนที่นั่งทุกแถว สำหรับ ZEEKR 009 คำถามแรกจึงเป็น “ต้องใช้หกหรือเจ็ดที่นั่ง และใครต้องขึ้นลงรถบ่อย?” จากนั้นค่อยเลือกระบบขับเคลื่อนและอุปกรณ์ บทนี้เทียบสามรุ่นย่อยไทย พร้อมชวนดูเรื่องเบาะ กระเป๋า ช่วงล่าง และพื้นที่จอดที่ตัวเลขแรงม้าตอบให้ไม่ได้</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">ตรวจ <Source href={sources.model}>สเปก ZEEKR 009 บนเว็บไซต์ประเทศไทย</Source> วันที่ 23 กันยายน 2569 และใช้โบรชัวร์ไทยตามขอบเขตที่ระบุด้านล่าง บทนี้เรียบเรียงข้อมูลผู้ผลิต ยังไม่มีรายงานทดลองขับของทีมงานสำหรับให้คะแนนหรือยืนยันผลวัดความเงียบและระยะเบรก</p>
    </header>
    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={960} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Flagship AWD จัดแสดงที่ขอนแก่น วันที่ 16 กันยายน 2024 ใช้ประกอบรูปทรงรถ ไม่ใช่ภาพทดลองขับหรือหลักฐานอุปกรณ์ทุกคันในปัจจุบัน ภาพ: <Source href={article.imageSource}>{article.imageAuthor} / Wikimedia Commons</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ใช้ภาพย่อ</figcaption>
    </figure>
    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="thai-trims">
        <h2 id="thai-trims" className={headingStyle}>สามรุ่นย่อย ต่างกันตรงไหนที่มีผลกับคุณ</h2>
        <p>ตารางหน้ารุ่นของผู้ผลิตแยก Standard FWD และ Premium AWD เป็น 7 ที่นั่ง ส่วน Flagship AWD เป็น 6 ที่นั่ง ตัวเลขด้านล่างเป็นสเปกผู้ผลิต ไม่ใช่ผลวัดจากรถทดสอบของเรา</p>
        <p id="trim-table-hint" className="text-sm text-slate-500">บนมือถือ เลื่อนตารางไปทางขวาเพื่อดู Premium และ Flagship ครบทุกช่อง</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200" tabIndex={0} role="region" aria-label="ตารางเปรียบเทียบสามรุ่นย่อย" aria-describedby="trim-table-hint">
          <table className="w-full min-w-[680px] text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-bold text-slate-950">ZEEKR 009 ประเทศไทย · ตรวจ 23 กันยายน 2569</caption>
            <thead className="bg-slate-950 text-white"><tr>{['รายการ', 'Standard FWD', 'Premium AWD', 'Flagship AWD'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
            <tbody>{rows.map(([label, ...values], i) => <tr key={label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}><th scope="row" className="border-t border-slate-200 p-4 font-semibold">{label}</th>{values.map((value, j) => <td key={j} className="border-t border-slate-200 p-4">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p>ถ้าต้องใช้เจ็ดที่นั่งเป็นประจำ ให้เริ่มเทียบ Standard กับ Premium ก่อน ส่วน Flagship เหมาะจะนำมาลองเมื่อหกที่นั่งพอใช้งานและให้ความสำคัญกับเบาะแถวสอง ไม่ควรตัดสินความคุ้มค่าจาก 335 หรือ 603 hp เพียงอย่างเดียว อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>ความต่างของแรงม้าและแรงบิดในรถ EV</Link> แล้วกลับมาประเมินการใช้งานจริงของคุณ</p>
        <p>ระยะ 712 และ 686 กม. ใช้มาตรฐาน NEDC จึงไม่ใช่คำรับประกันระยะทางของทริปจริง และไม่ควรนำไปเทียบตรง ๆ กับตัวเลข WLTP ของรถอีกคัน</p>
      </section>
      <section className="space-y-5" aria-labelledby="seating">
        <h2 id="seating" className={headingStyle}>พาครอบครัวไปลองทั้งแถวสองและแถวสาม</h2>
        <p><Source href={sources.brochure}>โบรชัวร์ ZEEKR 009 ไทยฉบับปี 2025 (PDF)</Source> ที่เว็บไซต์ยังเชื่อมอยู่มีตาราง Premium AWD กับ Flagship AWD โดยระบุเบาะ Sofaro พร้อมโต๊ะพับใน Flagship เอกสารนี้ไม่ครอบคลุม Standard จึงไม่ใช้เหมารวมอุปกรณ์ทั้งสามรุ่น ให้ขอรายการอุปกรณ์ของรุ่นและปีผลิตที่จะรับรถอีกครั้ง</p>
        <p>เริ่มลองจากการขึ้นลงรถของคนที่ใช้งานจริง โดยเฉพาะผู้สูงอายุและคนที่ต้องอุ้มเด็ก จากนั้นจัดเบาะแถวสองในท่านั่งเดินทาง แล้วให้คนแถวสามลองวางเท้า คาดเข็มขัด และขึ้นลงโดยไม่ต้องรื้อคาร์ซีตทุกครั้ง ตรวจวิธีติดตั้งคาร์ซีตตามคู่มือรถและคู่มือเบาะเด็กของคุณ</p>
        <p>นำรถเข็นเด็กกับกระเป๋าประจำทริปไปลองวางโดยใช้ที่นั่งครบตามต้องการ พร้อมทดลองช่องแอร์ จอหลัง และปุ่มสั่งงานที่ผู้โดยสารจะใช้ หากกำลังเทียบ SUV หกที่นั่ง อ่าน <Link href="/articles/tesla-model-y-l-premium-6-seater-review" className={linkStyle}>สิ่งที่ครอบครัวควรลองใน Tesla Model Y L</Link> แล้วใช้รายการคนและสัมภาระชุดเดียวกันเปรียบเทียบ</p>
      </section>
      <section className="space-y-5" aria-labelledby="size-and-tyres">
        <h2 id="size-and-tyres" className={headingStyle}>รถยาวกว่า 5 เมตร ต้องลองช่องจอดด้วย</h2>
        <p>หน้ารุ่นไทยระบุความยาว 5,209 มม. กว้าง 2,024 มม. สูง 1,812 มม. และฐานล้อ 3,205 มม. ก่อนซื้อควรลองทางลาด วงเลี้ยว และช่องจอดใกล้เคียงบ้านจริง โดยเผื่อกระจกมองข้าง การเปิดฝาท้าย และพื้นที่ให้คนขึ้นลงด้วย</p>
        <p>โบรชัวร์ปี 2025 ระบุน้ำหนักรถ Premium AWD และ Flagship AWD ไว้ 2,945 กก. ตัวเลขนี้ไม่ได้แทนน้ำหนักรวมคนและสัมภาระ และไม่ได้ยืนยันน้ำหนัก Standard หากเปลี่ยนล้อหรือยาง ให้ใช้ข้อกำหนดของรถคันจริง ตรวจพิกัดรับน้ำหนัก พิกัดความเร็ว และแรงดันตามคู่มือ อ่านต่อใน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>คู่มือเลือกยางสำหรับ EV หนักและแรง</Link></p>
      </section>
      <section className="space-y-5" aria-labelledby="suspension">
        <h2 id="suspension" className={headingStyle}>มีถุงลมและ CCD ก็ยังต้องลองนั่ง</h2>
        <p>โบรชัวร์ไทยระบุถุงลมกับระบบควบคุมความหนืดโช้ค CCD ในรุ่น AWD ส่วน <Source href={sources.standard}>ข่าวเปิดตัว Standard ของ ZEEKR ประเทศไทย</Source> วันที่ 19 กันยายน 2025 ก็ระบุชุดช่วงล่างถุงลมพร้อม CCD ในรุ่นนั้น ข้อมูลนี้บอกอุปกรณ์ที่ผู้ผลิตประกาศ ไม่ได้ยืนยันว่าทุกคนจะรู้สึกสบายเหมือนกัน</p>
        <p>ให้ผู้โดยสารประจำนั่งตำแหน่งที่จะใช้จริง แล้วทดลองผ่านรอยต่อถนนและคอสะพานด้วยความเร็วที่เหมาะสม สังเกตทั้งแรงกระแทกและอาการโยนหลังผ่านลูกระนาด อ่าน <Link href="/articles/shock-absorber-types-monotube-twintube-air-ev" className={linkStyle}>ความต่างของสปริงถุงลมกับโช้คอัพ</Link> และ <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>วิธีแยกอาการช่วงล่างบนถนนไทย</Link> เพื่อคุยกับผู้ขายหรือช่างให้ตรงอาการ</p>
      </section>
      <section className="space-y-5" aria-labelledby="charging-and-decision">
        <h2 id="charging-and-decision" className={headingStyle}>วางแผนชาร์จและขอเงื่อนไขให้ครบก่อนจอง</h2>
        <p>เว็บไซต์และเอกสารไทยที่อ้างข้างต้นระบุแบตเตอรี่ 116 kWh โดยข่าว Standard ยืนยันความจุของรุ่นขับหน้าเพิ่มเติม แต่ความจุอย่างเดียวไม่บอกเวลาชาร์จจริง ให้ตรวจระบบไฟบ้าน จุดติดตั้งเครื่องชาร์จ และสถานีในเส้นทางประจำตาม <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่และวางแผนชาร์จ</Link> พร้อมขอข้อมูลกำลังชาร์จและเงื่อนไขของรถที่จะซื้อจากผู้จำหน่าย</p>
        <p>เริ่มตัดสินจากจำนวนคน ความสะดวกขึ้นลง และพื้นที่กระเป๋า จากนั้นเทียบรุ่นที่ผ่านโจทย์กับราคาสุทธิ ประกันภัย การรับประกันแบตเตอรี่ และบริการหลังการขายในใบเสนอราคาเดียวกัน โปรโมชันจากข่าวเก่าไม่ใช่ข้อเสนอปัจจุบัน สามารถ <Source href={sources.testDrive}>นัดทดลองขับ ZEEKR 009 กับผู้ผลิต</Source> เพื่อทดสอบรายการที่สำคัญกับครอบครัวก่อนเลือกคันจริง</p>
      </section>
    </div>
    <aside aria-label="สถานะการเปิดตัวสินค้า" className="mt-12 space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7">
      <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      <p><Link href="/articles" className={linkStyle}>อ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>บอกรุ่นรถและสิ่งที่อยากให้เราศึกษาเพิ่ม</Link></p>
    </aside>
  </article>;
}