import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { deepalS07Article as article, deepalS07Sources as sources } from '@/lib/deepal-s07-article';

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
export default function DeepalS07ArticlePage() {
  const rows = [
    ['ระบบขับเคลื่อน', 'มอเตอร์ไฟฟ้า ขับล้อหลัง'],
    ['กำลัง / แรงบิดสูงสุด', '190 kW / 320 Nm'],
    ['0–100 กม./ชม. ตามผู้ผลิต', '7.9 วินาที'],
    ['แบตเตอรี่', 'LFP 68.8 kWh'],
    ['ระยะตามมาตรฐาน NEDC', '485 กม.'],
    ['ชาร์จ AC / DC สูงสุด', '6.6 / 167 kW'],
    ['ชาร์จ DC 30–80% ตามผู้ผลิต', '15 นาที'],
    ['ขนาดยาง', '255/45 R20'],
    ['ยาว × กว้าง × สูง', '4,750 × 1,930 × 1,625 มม.'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · Deepal NEW S07 ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>ม่านหลังคาไฟฟ้า จอที่หันเข้าหาคนขับ และพื้นที่เก็บของหน้า 125 ลิตร ทำให้ S07 มีจุดที่น่าลองมากกว่าตัวเลขแรงม้า แต่จะเหมาะกับครอบครัวคุณหรือไม่ ต้องตอบให้ได้ทั้งเรื่องท่านั่ง ความถนัดในการใช้จอ การชาร์จ และความรู้สึกบนล้อ 20 นิ้ว บทนี้พาดูสิ่งที่ควรตรวจจากสเปกไทยและรถจริง ก่อนตัดสินใจจากรายการออปชัน</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">บทนี้ใช้ <Source href={sources.brochure}>สเปก Deepal NEW S07 ประเทศไทย</Source> จากโบรชัวร์ที่ลิงก์อยู่ใน <Source href={sources.model}>เว็บไซต์ CHANGAN Thailand</Source> ณ วันที่ตรวจข้อมูล โดยแยกจาก S07 และ S07 Long Range รุ่นก่อน ทีมงานยังไม่มีผลทดลองขับหรือวัดระยะวิ่ง เสียง และระยะเบรกของรุ่นนี้มาให้คะแนน</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={960} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">รถป้าย DEEPAL NEW S07 จัดแสดงที่เมืองทองธานี เดือนพฤศจิกายน 2025 ใช้ประกอบรูปทรงตัวรถ ไม่ใช่ภาพทดลองขับของทีมงาน ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="thai-specs">
        <h2 id="thai-specs" className={headingStyle}>เริ่มจากสเปก NEW S07 ให้ตรงกับรถที่จะซื้อ</h2>
        <p>ชื่อ S07 มีข้อมูลจากหลายช่วงเวลาปะปนอยู่ ตารางนี้ใช้ชุด NEW S07 ที่ระบุแบตเตอรี่ LFP 68.8 kWh เพียงรุ่นเดียวตามโบรชัวร์ไทยปัจจุบัน หากใบเสนอราคาของคุณเป็นรถปีผลิตหรือรุ่นย่อยอื่น ให้ขอเอกสารของคันนั้นมาเทียบใหม่</p>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full table-fixed text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-semibold text-slate-950">ข้อมูลผู้ผลิต · ตรวจ 23 กันยายน 2569</caption>
            <thead className="bg-slate-950 text-white"><tr><th scope="col" className="w-1/2 p-3">รายการ</th><th scope="col" className="p-3">NEW S07</th></tr></thead>
            <tbody>{rows.map(([label, value]) => <tr key={label} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-3 font-semibold text-slate-950">{label}</th><td className="p-3 align-top">{value}</td></tr>)}</tbody>
          </table>
        </div>
        <p>ระยะ 485 กม. เป็น NEDC ไม่ใช่ผลวิ่งจริงของทีมงาน และไม่ใช่ระยะที่รับประกันทุกเส้นทาง ส่วนกำลังใช้หน่วย kW เพื่อไม่ปน hp กับ PS ตัวเลข 0–100 ช่วยเห็นสมรรถนะตามผู้ผลิต แต่ยังไม่บอกความนุ่มของคันเร่งหรือความสบายของผู้โดยสาร</p>
      </section>

      <section className="space-y-5" aria-labelledby="cabin">
        <h2 id="cabin" className={headingStyle}>ห้องโดยสาร: ลองใช้จริงให้มากกว่าดูออปชัน</h2>
        <p><strong>ม่านหลังคาไฟฟ้า:</strong> โบรชัวร์ระบุหลังคากระจกพาโนรามาพร้อมม่านไฟฟ้า ลองเปิด–ปิดและนั่งทั้งหน้า–หลังในเวลาที่มีแดด เพื่อดูว่าแสงและความสบายเหมาะกับคุณไหม การมีม่านไม่ใช่ผลทดสอบว่าอุณหภูมิห้องโดยสารจะลดลงกี่องศา</p>
        <p><strong>จอ Sunflower 15.6 นิ้วและ AR-HUD:</strong> ลองปรับเบาะ พวงมาลัยและมุมจอ แล้วดูข้อมูลที่แสดงบนกระจกหน้า ก่อนออกขับควรลองตั้งแอร์ นำทาง และเชื่อมต่อโทรศัพท์ตอนรถจอดให้คล่อง โบรชัวร์ระบุ Apple CarPlay และ Android Auto แบบไร้สาย แต่ควรทดสอบกับโทรศัพท์ของคุณเองด้วย</p>
        <p><strong>พื้นที่สำหรับคนและของ:</strong> รถมี 5 ที่นั่ง ฐานล้อ 2,900 มม. และที่เก็บของหน้า 125 ลิตรตามผู้ผลิต ให้นำคาร์ซีตหรือกระเป๋าที่ใช้ประจำไปลองจัดวาง โดยเฉพาะการขึ้นลงและท่านั่งเบาะหลัง ตัวเลขลิตรไม่ได้บอกว่าของชิ้นที่คุณใช้จะวางได้พอดี</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <p className="border-b border-slate-200 p-4 text-sm font-semibold leading-6">ภาพประกอบห้องโดยสาร S07 พวงมาลัยซ้ายในเยอรมนี รถไทยเป็นพวงมาลัยขวาและอุปกรณ์อาจต่างกัน</p>
          <Image src={article.cabinImage} alt="ห้องโดยสาร Deepal S07 พวงมาลัยซ้าย จอกลางและคอนโซล ในงาน IAA 2025 ประเทศเยอรมนี" width={1280} height={856} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">ใช้ดูแนวทางจัดวางจอกลางและคอนโซลเท่านั้น ไม่ใช้ยืนยันรายการอุปกรณ์ของ NEW S07 ไทย ภาพ: <Source href={article.cabinImageSource}>Alexander Migl</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · IAA 2025 · ภาพย่อจาก Wikimedia Commons</figcaption>
        </figure>
      </section>

      <section className="space-y-5" aria-labelledby="charging">
        <h2 id="charging" className={headingStyle}>ชาร์จ 15 นาที ต้องเริ่มและจบที่กี่เปอร์เซ็นต์?</h2>
        <p>ตัวเลขในโบรชัวร์คือ <strong>DC 30–80% ใน 15 นาที</strong> ไม่ใช่เวลาชาร์จจากแบตหมดจนเต็ม และไม่ยืนยันว่าทุกสถานีจะทำได้เท่ากัน กำลัง DC สูงสุด 167 kW เป็นเพดานที่รถรองรับ ไม่ใช่กำลังเฉลี่ยตลอดช่วงชาร์จ ควรวางแผนเผื่อสภาพแบตเตอรี่ กำลังตู้และเวลารอด้วย</p>
        <p>ฝั่ง AC ระบุสูงสุด 6.6 kW ก่อนติดตั้งที่บ้าน ให้ผู้ติดตั้งตรวจระบบไฟและเลือกอุปกรณ์ที่รองรับรถ หากอยู่คอนโดให้ตรวจสิทธิ์ใช้และเวลาที่สะดวกจริง การเข้าถึงจุดชาร์จเป็นส่วนหนึ่งของการเลือกรถ ไม่ควรคิดจากระยะบนโบรชัวร์อย่างเดียว</p>
        <p>อ่าน <Link href="/articles/ev-battery-care" className={linkStyle}>การดูแลแบตเตอรี่และตั้งขีดจำกัดการชาร์จ</Link> เพื่อเข้าใจหลักทั่วไป จากนั้นใช้คำแนะนำในคู่มือ NEW S07 ของคันที่จะรับเป็นหลักในการตั้งค่ารายวัน</p>
      </section>

      <section className="space-y-5" aria-labelledby="ride">
        <h2 id="ride" className={headingStyle}>ล้อ 20 นิ้วและช่วงล่าง ควรลองตรงไหน?</h2>
        <p>สเปกไทยระบุยาง 255/45 R20 ช่วงล่างหน้า MacPherson Strut และหลังอิสระ Multi-link แบบ H-arm ชื่อโครงสร้างไม่ได้รับประกันว่ารถจะนุ่มหรือเกาะถนนเท่าใด ควรทดลองขับรถที่ใช้ล้อและยางตรงกับคันที่จะรับ โดยมีผู้โดยสารประจำนั่งด้วย</p>
        <p>ลองสังเกตอย่างปลอดภัยบนเส้นทางใกล้เคียงชีวิตจริง: ผ่านรอยต่อแล้วกระแทกครั้งเดียวหรือเด้งต่อ เบาะหลังรู้สึกต่างจากเบาะหน้าหรือไม่ และเสียงที่รบกวนเปลี่ยนไปตามผิวถนนอย่างไร ถ้าจับอาการยังไม่ถูก อ่าน <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>วิธีแยกอาการช่วงล่างบนถนนไทย</Link> เพื่อคุยกับช่างได้ตรงประเด็น</p>
        <p>หากคิดจะเปลี่ยนยางหรือโช้ค ให้เริ่มจากขนาดและพิกัดที่ผู้ผลิตรถกำหนด รวมถึงปัญหาที่ต้องการแก้ อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>แนวทางเลือกยางและ Coilover สำหรับรถ EV</Link> ก่อนเลือกจากล้อใหญ่หรือคำว่า “สปอร์ต” เพียงอย่างเดียว</p>
      </section>

      <section className="space-y-5" aria-labelledby="decision">
        <h2 id="decision" className={headingStyle}>ควรไปต่อกับ S07 หรือเทียบรุ่นอื่นก่อน?</h2>
        <p>ให้ S07 อยู่ในรายชื่อทดลองขับ หากคุณต้องการเอสยูวี 5 ที่นั่งและสนใจห้องโดยสารที่มีม่านไฟฟ้า จอปรับทิศทาง และพื้นที่เก็บของหน้า จากนั้นใช้ความถนัดของคนขับ ความสบายของคนที่นั่งด้วย และแผนชาร์จจริงตัดสินต่อ บทนี้ยังไม่มีข้อมูลทดสอบพอจะจัดอันดับความนุ่ม ความเงียบ หรือความคุ้มค่าเหนือคู่แข่ง</p>
        <p>ถ้ายังเปิดรับทางเลือกที่มีเครื่องยนต์ผลิตไฟฟ้าด้วย อ่าน <Link href="/articles/deepal-s05-review" className={linkStyle}>Deepal S05: เลือก BEV หรือ REEV ให้ตรงการใช้งาน</Link> เพื่อแยกขุมพลังและอุปกรณ์ของรุ่นน้องก่อนเทียบใบเสนอราคา ไม่เหมารวมว่าฟังก์ชันที่ S05 มีจะอยู่ใน S07 ด้วย</p>
        <p>ก่อนจอง ขอเอกสารยืนยันรุ่น ปีผลิต รายการอุปกรณ์ ราคาสุทธิ ของแถม เงื่อนไขรับประกันแต่ละส่วนและกำหนดส่งมอบ บทนี้ยังยืนยันข้อเสนอปัจจุบันของรถคันที่จะซื้อไม่ได้ จึงไม่ใช้ราคาเปิดตัวหรือโปรโมชันเก่าเป็นคำรับรองราคา</p>
      </section>

      <aside className="rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7" aria-label="สถานะการเปิดตัวสินค้า">
        <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
        <p className="mt-3"><Link href="/articles" className={linkStyle}>เลือกอ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>ดูช่องทางติดต่อทีมงาน</Link></p>
      </aside>
    </div>
  </article>;
}
