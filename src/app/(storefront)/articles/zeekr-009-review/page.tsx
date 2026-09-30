import ImageMetadata from '@/components/ImageMetadata';
import Zeekr009CabinContent from '@/components/Zeekr009CabinContent';
import photos from '@/data/zeekr-009-images.json';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { zeekr009Article as article, zeekr009Sources as sources } from '@/lib/zeekr-009-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'scroll-mt-28 text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle + ' relative'}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 960, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: [article.image, ...Object.values(photos).map(photo => photo.src)].map(src => 'https://evselects.com' + src), datePublished: article.publishedAt, dateModified: article.updatedAt,
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
  return <article className="mx-auto min-w-0 max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
      <ImageMetadata pagePath="/articles/zeekr-009-review" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · ZEEKR 009 ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>ถ้ารถคันนี้ต้องพาพ่อแม่ ลูก และคนขับออกทริปด้วยกัน ที่นั่งที่เจ็ดอาจสำคัญกว่าแรงม้าที่เพิ่มขึ้น แต่ถ้าเดินทางสี่ถึงห้าคนเป็นหลัก ความต่างของเบาะแถวสองก็น่าลองให้ละเอียด บทนี้พาไล่ดูห้องโดยสาร ZEEKR 009 รุ่นไทย ตั้งแต่เบาะ จอเพดาน ตู้เย็น ไปจนถึงพื้นที่ท้ายรถ เพื่อให้เลือกได้จากคนที่ไปด้วยจริง ๆ</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>30 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">ตรวจ <Source href={sources.model}>สเปก ZEEKR 009 บนเว็บไซต์ประเทศไทย</Source> วันที่ 30 กันยายน 2569 และใช้โบรชัวร์ไทยตามขอบเขตที่ระบุด้านล่าง บทนี้เรียบเรียงข้อมูลผู้ผลิต ยังไม่มีรายงานทดลองขับของทีมงานสำหรับให้คะแนนหรือยืนยันผลวัดความเงียบและระยะเบรก</p>
    </header>
    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={960} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />

    </figure>
    <nav aria-label="สารบัญบทความ" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7">
      <p className="mb-3 font-bold text-slate-950">เลือกอ่านเรื่องที่อยากเห็น</p>
      <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2">{[['thai-trims', 'เทียบสามรุ่นไทย'], ['six-or-seven', 'ภาพ 6 กับ 7 ที่นั่ง'], ['second-row', 'เบาะแถวสองและโต๊ะพับ'], ['screens', 'จอหน้า จอหลัง และเครื่องเสียง'], ['cabin-comfort', 'ตู้เย็น ม่าน และแอร์'], ['access-and-luggage', 'ประตู แถวสาม และพื้นที่ท้าย'], ['suspension-photo', 'ภาพช่วงล่างปรับระดับ'], ['safety', 'ระบบช่วยขับและคาร์ซีต'], ['charging-and-decision', 'เลือกคันที่เหมาะกับบ้านคุณ']].map(([id, title], i) => <li key={id}><Link href={'#' + id} className={linkStyle}>{i + 1}. {title}</Link></li>)}</ol>
    </nav>
    <div className="min-w-0 space-y-12">
      <section className="space-y-5" aria-labelledby="thai-trims">
        <h2 id="thai-trims" className={headingStyle}>สามรุ่นย่อย ต่างกันตรงไหนที่มีผลกับคุณ</h2>
        <p>ตารางหน้ารุ่นของผู้ผลิตแยก Standard FWD และ Premium AWD เป็น 7 ที่นั่ง ส่วน Flagship AWD เป็น 6 ที่นั่ง ตัวเลขด้านล่างเป็นสเปกผู้ผลิต ไม่ใช่ผลวัดจากรถทดสอบของเรา</p>
        <p id="trim-table-hint" className="text-sm text-slate-500">หากตารางแสดงไม่ครบ เลื่อนไปทางขวาเพื่อดูทุกรุ่น พร้อมแหล่งข้อมูลและสถานะ</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200" tabIndex={0} role="region" aria-label="ตารางเปรียบเทียบสามรุ่นย่อย" aria-describedby="trim-table-hint">
          <table className="w-full min-w-[800px] text-left text-sm leading-6 [&_td]:p-3 [&_th]:p-3">
            <caption className="bg-slate-50 p-4 text-left font-bold text-slate-950">ZEEKR 009 ประเทศไทย · ตรวจ 30 กันยายน 2569</caption>
            <thead className="bg-slate-950 text-white"><tr>{['รายการ', 'Standard FWD', 'Premium AWD', 'Flagship AWD', 'แหล่งข้อมูล', 'สถานะ'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
            <tbody>{rows.map(([label, ...values], i) => <tr key={label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}><th scope="row" className="border-t border-slate-200 p-4 font-semibold">{label}</th>{values.map((value, j) => <td key={j} className="border-t border-slate-200 p-4">{value}</td>)}<td className="border-t border-slate-200 p-4"><Source href={sources.model}>ZEEKR ไทย</Source></td><td className="border-t border-slate-200 p-4">ข้อมูลผู้ผลิต</td></tr>)}</tbody>
          </table>
        </div>
        <p>ถ้าต้องใช้เจ็ดที่นั่งเป็นประจำ ให้เริ่มเทียบ Standard กับ Premium ก่อน ส่วน Flagship เหมาะจะนำมาลองเมื่อหกที่นั่งพอใช้งานและให้ความสำคัญกับเบาะแถวสอง ไม่ควรตัดสินความคุ้มค่าจาก 335 หรือ 603 hp เพียงอย่างเดียว อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>ความต่างของแรงม้าและแรงบิดในรถ EV</Link> แล้วกลับมาประเมินการใช้งานจริงของคุณ</p>
        <p>ระยะ 712 และ 686 กม. ใช้มาตรฐาน NEDC จึงไม่ใช่คำรับประกันระยะทางของทริปจริง และไม่ควรนำไปเทียบตรง ๆ กับตัวเลข WLTP ของรถอีกคัน</p>
      </section>
      <Zeekr009CabinContent />
      <section className="space-y-5" aria-labelledby="size-and-tyres">
        <h2 id="size-and-tyres" className={headingStyle}>รถยาวกว่า 5 เมตร ต้องลองช่องจอดด้วย</h2>
        <p>หน้ารุ่นไทยระบุความยาว 5,209 มม. กว้าง 2,024 มม. สูง 1,812 มม. และฐานล้อ 3,205 มม. ก่อนซื้อควรลองทางลาด วงเลี้ยว และช่องจอดใกล้เคียงบ้านจริง โดยเผื่อกระจกมองข้าง การเปิดฝาท้าย และพื้นที่ให้คนขึ้นลงด้วย</p>
        <p>โบรชัวร์ปี 2025 ระบุน้ำหนักรถ Premium AWD และ Flagship AWD ไว้ 2,945 กก. ตัวเลขนี้ไม่ได้แทนน้ำหนักรวมคนและสัมภาระ และไม่ได้ยืนยันน้ำหนัก Standard หากเปลี่ยนล้อหรือยาง ให้ใช้ข้อกำหนดของรถคันจริง ตรวจพิกัดรับน้ำหนัก พิกัดความเร็ว และแรงดันตามคู่มือ อ่านต่อใน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>คู่มือเลือกยางสำหรับ EV หนักและแรง</Link></p>
      </section>
      <section className="space-y-5" aria-labelledby="charging-and-decision">
        <h2 id="charging-and-decision" className={headingStyle}>วางแผนชาร์จและขอเงื่อนไขให้ครบก่อนจอง</h2>
        <p>เว็บไซต์และเอกสารไทยที่อ้างข้างต้นระบุแบตเตอรี่ 116 kWh โดยข่าว Standard ยืนยันความจุของรุ่นขับหน้าเพิ่มเติม แต่ความจุอย่างเดียวไม่บอกเวลาชาร์จจริง ให้ตรวจระบบไฟบ้าน จุดติดตั้งเครื่องชาร์จ และสถานีในเส้นทางประจำตาม <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่และวางแผนชาร์จ</Link> พร้อมขอข้อมูลกำลังชาร์จและเงื่อนไขของรถที่จะซื้อจากผู้จำหน่าย</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong className="text-slate-950">ต้องเดินทางเจ็ดคน:</strong> เริ่มจาก Standard กับ Premium ลองเบาะและอุปกรณ์ก่อนประเมินว่าต้องการสมรรถนะของ AWD เพิ่มหรือไม่</li>
          <li><strong className="text-slate-950">ใช้ไม่เกินหกคนและมีคนนั่งแถวสองบ่อย:</strong> ลอง Flagship เทียบกับ Premium โดยให้คนนั่งประจำตัดสินจากเบาะ โต๊ะ และการขึ้นลงจริง</li>
          <li><strong className="text-slate-950">มีเด็กเล็ก ผู้สูงอายุ หรือสัมภาระเยอะ:</strong> นำคนและของไปลองครบก่อนเลือกรุ่น ที่นั่งพอดีอาจยังไม่แปลว่าขึ้นลงและเก็บของสะดวก</li>
        </ul>
        <p>หากกำลังเทียบ SUV หกที่นั่ง อ่าน <Link href="/articles/tesla-model-y-l-premium-6-seater-review" className={linkStyle}>สิ่งที่ครอบครัวควรลองใน Tesla Model Y L</Link> แล้วใช้รายการคน คาร์ซีต และสัมภาระชุดเดียวกันเปรียบเทียบ</p>
        <p>เริ่มตัดสินจากจำนวนคน ความสะดวกขึ้นลง และพื้นที่กระเป๋า จากนั้นเทียบรุ่นที่ผ่านโจทย์กับราคาสุทธิ ประกันภัย การรับประกันแบตเตอรี่ และบริการหลังการขายในใบเสนอราคาเดียวกัน โปรโมชันจากข่าวเก่าไม่ใช่ข้อเสนอปัจจุบัน สามารถ <Source href={sources.testDrive}>นัดทดลองขับ ZEEKR 009 กับผู้ผลิต</Source> เพื่อทดสอบรายการที่สำคัญกับครอบครัวก่อนเลือกคันจริง</p>
      </section>
    </div>
    <aside aria-label="สถานะการเปิดตัวสินค้า" className="mt-12 space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7">
      <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      <p><Link href="/articles" className={linkStyle}>อ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>บอกรุ่นรถและสิ่งที่อยากให้เราศึกษาเพิ่ม</Link></p>
    </aside>
  </article>;
}
