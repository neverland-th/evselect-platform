import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { zeekrXArticle as article, zeekrXSources as sources } from '@/lib/zeekr-x-article';

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
export default function ZeekrXArticlePage() {
  const rows = [
    ['ระบบขับเคลื่อน', 'ขับหลัง RWD', 'ขับเคลื่อนสี่ล้อ AWD'],
    ['กำลังสูงสุด', '250 kW / 335 hp', '365 kW / 489 hp'],
    ['แรงบิดสูงสุด', '373 Nm', '573 Nm'],
    ['0–100 กม./ชม.', '5.6 วินาที', '3.7 วินาที'],
    ['แบตเตอรี่', '61 kWh · LFP', '66 kWh · NCM'],
    ['ระยะทาง NEDC', '450 กม.', '470 กม.'],
    ['การชาร์จ AC สูงสุด', '11 kW', '22 kW'],
    ['ล้อและขนาดยาง', '19 นิ้ว · 235/50 R19', '20 นิ้ว Forged · 245/45 R20'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · ZEEKR X ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>เล็ง ZEEKR X เพราะขนาดกำลังดีและชอบดีไซน์ แล้วควรขยับไป Flagship ไหม? ส่วนต่างที่ต้องดูไม่ได้มีแค่อัตราเร่ง แต่รวมถึงล้อ ยาง การชาร์จ AC และอุปกรณ์ที่ใช้ทุกวัน บทนี้พาเทียบ Standard RWD กับ Flagship AWD สเปกไทย เพื่อให้คุณรู้ว่าควรลองอะไรที่โชว์รูมก่อนตัดสินใจ</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">อ้างอิง <Source href={sources.brochure}>โบรชัวร์ ZEEKR X ประเทศไทย ฉบับกรกฎาคม 2026 (PDF)</Source> และตรวจหน้ารุ่นวันที่ 23 กันยายน 2569 เป็นการเรียบเรียงข้อมูลผู้ผลิต ยังไม่มีรายงานทดลองขับของทีมงานสำหรับให้คะแนนหรือยืนยันผลวัดเสียง อัตราเร่ง และระยะเบรก</p>
    </header>
    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={720} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Flagship AWD จัดแสดงที่กรุงเทพฯ วันที่ 20 กรกฎาคม 2024 ใช้ประกอบรูปทรงรถ ไม่ใช่ภาพ The New ZEEKR X ตามโบรชัวร์ปี 2026 หรือรถทดสอบของเรา ภาพ: <Source href={article.imageSource}>{article.imageAuthor} / Wikimedia Commons</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ใช้ภาพย่อ</figcaption>
    </figure>
    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="thai-trims">
        <h2 id="thai-trims" className={headingStyle}>เทียบสองรุ่นให้ครบกว่าแรงม้า</h2>
        <p>โบรชัวร์ไทยแยก Standard ขับหลังกับ Flagship ขับเคลื่อนสี่ล้อ ทั้งคู่มี 5 ที่นั่ง ตัวเลขในตารางเป็นค่าที่ผู้ผลิตประกาศ โดยกำลังชาร์จ AC คือไฟสลับที่ใช้กับเครื่องชาร์จบ้านและสถานีบางประเภท</p>
        <p id="trim-table-hint" className="text-sm text-slate-500">บนมือถือ เลื่อนตารางไปทางขวาเพื่ออ่าน Flagship ครบทุกช่อง</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200" tabIndex={0} role="region" aria-label="ตารางเปรียบเทียบสองรุ่นย่อย" aria-describedby="trim-table-hint">
          <table className="w-full min-w-[620px] text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-bold text-slate-950">ZEEKR X ประเทศไทย · โบรชัวร์กรกฎาคม 2026</caption>
            <thead className="bg-slate-950 text-white"><tr>{['รายการ', 'Standard RWD', 'Flagship AWD'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
            <tbody>{rows.map(([label, ...values], i) => <tr key={label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}><th scope="row" className="border-t border-slate-200 p-4 font-semibold">{label}</th>{values.map((value, j) => <td key={j} className="border-t border-slate-200 p-4">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p><Source href={sources.model}>ตารางสเปก ZEEKR X บนเว็บไซต์ประเทศไทย</Source> ระบุระยะ NEDC 450 และ 470 กม. ตรงกับโบรชัวร์ แต่ข้อความส่วนอื่นในหน้าเดียวกันมีตัวเลข 479 และ 540 กม. บทนี้จึงใช้ตารางรุ่นย่อยและโบรชัวร์ไทยเป็นหลัก ไม่ผสมตัวเลขข้ามส่วน ระยะ NEDC ไม่ใช่ระยะรับประกันในการใช้งานจริง และเทียบตรงกับ WLTP ไม่ได้</p>
        <p>Flagship เร่ง 0–100 กม./ชม. ได้เร็วกว่า แต่การขับในเมืองยังต้องดูความนุ่มนวลของคันเร่งและความสะดวกใช้งาน อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>แรงม้าและแรงบิดต่างกันอย่างไร</Link> เพื่อเข้าใจตัวเลข ก่อนลองรถทั้งสองรุ่นบนเส้นทางใกล้เคียงชีวิตประจำวัน</p>
      </section>
      <section className="space-y-5" aria-labelledby="cabin">
        <h2 id="cabin" className={headingStyle}>อุปกรณ์ที่เพิ่มมา คุณจะใช้บ่อยแค่ไหน</h2>
        <p>โบรชัวร์ระบุจอกลาง 14.6 นิ้ว ระบบเสียง Yamaha 13 ตำแหน่ง และเบาะหน้าระบายอากาศในทั้งสองรุ่น ส่วน Flagship เพิ่มประตูไฟฟ้าคู่หน้า จอที่เสา B และจอ AR HUD ขนาด 24.3 นิ้วสำหรับฉายข้อมูลบนกระจกหน้า จึงควรลองใช้อุปกรณ์เหล่านี้จริงก่อนตีมูลค่าส่วนต่าง</p>
        <p>ลองเปิดประตูในพื้นที่แคบ ปรับเบาะจนได้ท่าขับ แล้วดูว่าจอ HUD อ่านสบายตาหรือไม่ ต่อโทรศัพท์เครื่องที่คุณใช้ ทดลองนำทาง ฟังเพลง และปรับแอร์จากตำแหน่งคนขับ ไม่ควรสรุปความสะดวกจากขนาดจอหรือจำนวนลำโพงเพียงอย่างเดียว</p>
        <p>ตัวรถยาว 4,432 มม. กว้าง 1,836 มม. สูง 1,566 มม. ฐานล้อ 2,750 มม. ให้คนที่นั่งหลังประจำลองนั่งพร้อมกัน และนำสัมภาระจริงไปลองวาง หากพื้นที่ยังไม่พอ อ่าน <Link href="/articles/zeekr-7x-2026-review" className={linkStyle}>สเปกและข้อพิจารณาของ ZEEKR 7X</Link> แล้วเปรียบเทียบโดยใช้คนและกระเป๋าชุดเดียวกัน</p>
      </section>
      <section className="space-y-5" aria-labelledby="wheels-and-ride">
        <h2 id="wheels-and-ride" className={headingStyle}>ล้อ 19 กับ 20 นิ้ว ต้องลองบนถนนที่ใช้จริง</h2>
        <p>Standard ใช้ยาง 235/50 R19 ส่วน Flagship ใช้ 245/45 R20 กับล้อ Forged ตามโบรชัวร์ ความต่างนี้มีผลกับรายการยางและค่าเปลี่ยนในอนาคต แต่ขนาดล้ออย่างเดียวตัดสินความนุ่มหรือการเกาะถนนไม่ได้ ควรทดลองผ่านรอยต่อและลูกระนาดด้วยความเร็วเหมาะสม พร้อมตรวจแรงดันตามข้อกำหนดรถ</p>
        <p>ก่อนเปลี่ยนล้อหรือยาง ต้องตรวจขนาดที่รองรับ พิกัดรับน้ำหนัก พิกัดความเร็ว และแรงดันสำหรับรถคันจริง ไม่เลือกจากคำว่า “ยาง EV” หรือแรงม้าอย่างเดียว อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางและช่วงล่างให้เหมาะกับ EV</Link> เพื่อแยกโจทย์ความสบายออกจากการเปลี่ยนอะไหล่โดยไม่รู้สาเหตุ</p>
        <p>บทความนี้ไม่มีผลทดสอบระยะเบรกของทีมงาน จึงไม่ใช้ตัวเลขจากโฆษณารับรองความปลอดภัยในการขับจริง ถ้ากำลังคิดอัปเกรดชุดเบรก อ่าน <Link href="/articles/ev-carbon-ceramic-brakes-guide" className={linkStyle}>Carbon Ceramic คุ้มไหมสำหรับการใช้งานของคุณ</Link> แล้วตรวจชุดตรงรุ่นและข้อจำกัดการติดตั้งก่อนตัดสินใจ</p>
      </section>
      <section className="space-y-5" aria-labelledby="charging">
        <h2 id="charging" className={headingStyle}>ชาร์จ AC 22 kW จะได้ใช้จริงหรือเปล่า</h2>
        <p>Standard รองรับ AC สูงสุด 11 kW ส่วน Flagship รองรับ 22 kW ตามโบรชัวร์ การได้กำลังดังกล่าวต้องขึ้นกับระบบไฟ เครื่องชาร์จ และข้อกำหนดการติดตั้งด้วย การซื้อรุ่นที่รองรับมากกว่าจึงไม่ได้ทำให้ทุกจุดชาร์จเร็วขึ้นตามตัวเลขเสมอไป ให้ช่างผู้มีคุณสมบัติตรวจระบบไฟและออกแบบการติดตั้ง</p>
        <p>เอกสารที่ใช้ในบทนี้ยังไม่ให้รายละเอียดเพียงพอสำหรับยืนยันเวลาชาร์จ DC 10–80% จึงไม่ใส่เวลาประมาณแทนผู้ผลิต ก่อนเดินทางให้เช็กสถานีในเส้นทางและขอข้อมูลชาร์จของรุ่นที่จะรับรถ อ่านต่อใน <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่และวางแผนชาร์จ EV</Link> โดยใช้คู่มือรถคันจริงเป็นหลัก</p>
      </section>
      <section className="space-y-5" aria-labelledby="decision">
        <h2 id="decision" className={headingStyle}>เลือกจากสิ่งที่ใช้ แล้วค่อยเทียบราคาสุทธิ</h2>
        <p>เริ่มลอง Standard ถ้าระบบขับหลังและอุปกรณ์หลักตอบโจทย์แล้ว ส่วน Flagship ควรนำมาเทียบเมื่อคุณต้องการ AWD สมรรถนะที่เพิ่มขึ้น หรืออุปกรณ์เฉพาะรุ่น และยอมรับค่าใช้จ่ายของล้อกับยางขนาด 20 นิ้วได้ ไม่มีรุ่นไหนคุ้มกับทุกคนโดยอัตโนมัติ</p>
        <p>ขอใบเสนอราคาที่ระบุรุ่น ปีผลิต ราคาสุทธิ ประกันภัย อุปกรณ์ชาร์จ และเงื่อนไขรับประกันให้ครบ โปรโมชันหรือสิทธิพิเศษจากคนละช่วงเวลาอาจไม่ตรงกับรถที่เสนอขาย สามารถ <Source href={sources.testDrive}>นัดทดลองขับ ZEEKR X กับผู้ผลิต</Source> พร้อมรายการที่อยากลอง แล้วตัดสินจากรถและข้อเสนอที่ตรวจได้จริง</p>
      </section>
    </div>
    <aside aria-label="สถานะการเปิดตัวสินค้า" className="mt-12 space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7">
      <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      <p><Link href="/articles" className={linkStyle}>อ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>บอกรุ่นรถและสิ่งที่อยากให้เราศึกษาเพิ่ม</Link></p>
    </aside>
  </article>;
}
