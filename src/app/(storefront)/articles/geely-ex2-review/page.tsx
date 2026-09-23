import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { geelyEx2Article as article, geelyEx2Sources as sources } from '@/lib/geely-ex2-article';

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
export default function GeelyEx2ArticlePage() {
  const rows = [
    ['ล้อ / ยาง', 'เหล็ก 15 นิ้ว / 205/65 R15', 'อัลลอย 16 นิ้ว / 205/60 R16'],
    ['เบาะคนขับ', 'ปรับ 6 ทิศทาง', 'ปรับไฟฟ้า 6 ทิศทาง'],
    ['กล้องช่วยจอด', 'กล้องหลัง', 'กล้องรอบคัน 360° พร้อมภาพตัวรถโปร่งแสง'],
    ['ACC / FCW / AEB', 'ไม่มี', 'มี'],
    ['เตือนออกนอกเลน (LDW)', 'ไม่มี', 'มี'],
    ['เตือนจุดอับสายตา (BSD)', 'มี', 'มี'],
    ['ลำโพง', '4 ตำแหน่ง', '6 ตำแหน่ง'],
    ['ชาร์จโทรศัพท์ไร้สาย', 'ไม่มี', 'มี'],
    ['เบาะหลังพับ 60:40', 'มี', 'มี'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · Geely EX2 ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>ถ้าคุณกำลังดู EX2 เป็นรถ EV คันแรก คำถามสำคัญคืออุปกรณ์ที่เพิ่มใน Max จะได้ใช้ทุกวันแค่ไหน ทั้งสองรุ่นใช้มอเตอร์และแบตเตอรี่ชุดเดียวกันตามโบรชัวร์ไทย แต่ต่างกันที่ล้อ กล้องช่วยจอดและระบบช่วยขับบางรายการ บทนี้ช่วยแยกสิ่งที่ต้องจ่ายเพิ่มออกจากสิ่งที่มีอยู่แล้ว พร้อมจุดที่ควรลองกับรถจริงก่อนจอง</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">อ้างอิง <Source href={sources.brochure}>โบรชัวร์ Geely EX2 ประเทศไทย ฉบับ 12/25</Source> ของธนบุรีนอยสเติน ซึ่งเก็บสำเนาไว้ที่ ZigWheels ตรวจเอกสารวันที่ 23 กันยายน 2569 และควรยืนยันรุ่นปีผลิตกับผู้จำหน่ายอีกครั้ง บทนี้เป็นคู่มืออ่านสเปก ทีมงานยังไม่มีผลทดสอบรถรุ่นนี้สำหรับให้คะแนน</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={720} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">EX2 Max จัดแสดงที่เมืองทองธานี เดือนพฤศจิกายน 2025 ภาพประกอบรถไทย ไม่ใช่ภาพทดลองขับของทีมงาน ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="shared-specs">
        <h2 id="shared-specs" className={headingStyle}>Pro กับ Max ใช้ขุมพลังเดียวกัน</h2>
        <p>โบรชัวร์ระบุขับล้อหลัง มอเตอร์ 85 kW แรงบิด 150 Nm และแบตเตอรี่ LFP 39.4 kWh ทั้งคู่ อัตราเร่ง 0–100 กม./ชม. ตามผู้ผลิตคือ 11.5 วินาที จึงไม่ควรเลือกรุ่น Max ด้วยความเข้าใจว่าจะได้มอเตอร์แรงกว่า Pro</p>
        <p>ระยะในเอกสารมีสองมาตรฐาน: <strong>395 กม. NEDC และ 325 กม. WLTP</strong> ให้เทียบรถด้วยมาตรฐานเดียวกัน ตัวเลขทั้งสองไม่ใช่ระยะวิ่งจริงที่เราวัดเอง หากต้องการเข้าใจว่ากำลังกับแรงบิดบอกอะไร อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>แรงม้ากับแรงบิดในการเลือกรถ EV</Link> ประกอบได้</p>
      </section>

      <section className="space-y-5" aria-labelledby="trim-comparison">
        <h2 id="trim-comparison" className={headingStyle}>อุปกรณ์ที่ต่างกัน มีอะไรที่คุณจะใช้จริง?</h2>
        <p>ตารางนี้เลือกประเด็นที่มีผลต่อการใช้งานและค่าอัปเกรด โดยอ่านจากคอลัมน์ Pro และ Max ของโบรชัวร์ฉบับเดียวกัน ไม่เหมารวมว่า Pro ไม่มีระบบช่วยขับทุกชนิด</p>
        <p className="text-sm text-slate-500" id="table-hint">บนมือถือ เลื่อนตารางไปด้านข้างเพื่ออ่านคอลัมน์ Max</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-2" tabIndex={0} role="region" aria-label="ตารางเปรียบเทียบ Pro และ Max" aria-describedby="table-hint">
          <table className="w-full min-w-[600px] text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-semibold text-slate-950">อุปกรณ์ตามโบรชัวร์ไทยฉบับ 12/25</caption>
            <thead className="bg-slate-950 text-white"><tr><th scope="col" className="w-1/3 p-3">รายการ</th><th scope="col" className="w-1/3 p-3">Pro</th><th scope="col" className="w-1/3 p-3">Max</th></tr></thead>
            <tbody>{rows.map(([label, pro, max]) => <tr key={label} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-3 font-semibold text-slate-950">{label}</th><td className="p-3 align-top">{pro}</td><td className="p-3 align-top">{max}</td></tr>)}</tbody>
          </table>
        </div>
        <p>ACC คือระบบช่วยควบคุมความเร็วแบบแปรผัน ส่วน FCW เตือนการชนด้านหน้าและ AEB ช่วยเบรกฉุกเฉิน ระบบเหล่านี้มีขอบเขตการทำงานตามคู่มือ ผู้ขับยังต้องควบคุมรถและเฝ้าดูทาง กล้องรอบคันก็เป็นตัวช่วยมอง ไม่ได้ทดแทนการตรวจรอบรถก่อนเคลื่อนตัว</p>
        <p>ถ้าคุณจอดในพื้นที่แคบบ่อย ให้ลองกล้องของทั้งสองรุ่นในสภาพแสงใกล้เคียงที่ใช้จริง ส่วนเบาะไฟฟ้าและระบบเสียง ลองปรับท่านั่งและฟังด้วยตัวเอง แล้วเทียบส่วนต่างราคาสุทธิจากใบเสนอราคาในวันเดียวกัน</p>
      </section>

      <section className="space-y-5" aria-labelledby="space-and-screen">
        <h2 id="space-and-screen" className={headingStyle}>รถเล็กที่ต้องลองทั้งคน ของ และโทรศัพท์</h2>
        <p>EX2 ยาว 4,135 มม. กว้าง 1,805 มม. และมีฐานล้อ 2,650 มม. ตามเอกสาร พื้นที่เก็บของหน้า 70 ลิตรและท้าย 375 ลิตรเป็นจุดที่น่าลองสำหรับชีวิตในเมือง นำกระเป๋า รถเข็นเด็กหรือของที่ใช้ประจำไปทดลองวาง รวมถึงลองเปิดประตูในช่องจอดจริงก่อนสรุปว่าคล่องตัวพอ</p>
        <p>ทั้งคู่ระบุจอกลาง 14.6 นิ้วและมาตรวัด 8.8 นิ้ว สิ่งที่ต้องเช็กเพิ่มคือซอฟต์แวร์ของรถคันที่จะรับ: โบรชัวร์ฉบับนี้ใส่หมายเหตุว่า Apple CarPlay และ Android Auto เริ่มใช้งานในไตรมาส 2 ปี 2569 การถึงกำหนดในเอกสารยังไม่ยืนยันว่ารถทุกคันอัปเดตแล้ว จึงควรขอให้ทดลองเชื่อมโทรศัพท์จริงก่อนส่งมอบ</p>
        <p>หากกำลังหาอุปกรณ์แต่ง อย่าใช้ชื่อ Xingyuan หรือรูปสินค้าจากต่างประเทศเป็นหลักฐานว่าติด EX2 ไทยได้ทันที ต้องตรวจพวงมาลัย รุ่นย่อย จุดยึดและขนาดกับรถจริง โดยเฉพาะพรมที่ต้องไม่รบกวนแป้นเหยียบหรือชิ้นส่วนใกล้ถุงลมนิรภัย</p>
      </section>

      <section className="space-y-5" aria-labelledby="ride">
        <h2 id="ride" className={headingStyle}>ขับหลังและ Multi-link บอกโครงสร้าง แต่ยังต้องลองความสบาย</h2>
        <p><Source href={sources.thailandLaunch}>ข้อมูลเปิดตัว EX2 ในไทยจาก Geely</Source> ระบุระบบขับหลังและช่วงล่างหลัง Multi-link สอดคล้องกับโบรชัวร์ แต่นี่ไม่ใช่หลักฐานว่ารถนุ่มที่สุดหรือดีกว่าคู่แข่งทุกคัน ล้อและยางของ Pro กับ Max ต่างขนาดกัน จึงควรทดลองรุ่นที่คิดจะซื้อ พร้อมผู้โดยสารที่นั่งด้วยประจำ</p>
        <p>สังเกตการผ่านรอยต่อถนน การเด้งต่อหลังผ่านลูกระนาด และความสบายของเบาะหลังบนเส้นทางที่ใช้จริง หากต้องการแยกอาการ อ่าน <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>วิธีดูอาการช่วงล่างบนถนนไทย</Link> ส่วนแผนเปลี่ยนยางหรือโช้คควรเริ่มจาก <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>การเลือกยางและ Coilover ให้ตรงรถและการใช้งาน</Link> ก่อนซื้ออุปกรณ์มาแก้ปัญหาที่ยังไม่ชัด</p>
      </section>

      <section className="space-y-5" aria-labelledby="charging-and-choice">
        <h2 id="charging-and-choice" className={headingStyle}>แผนชาร์จพร้อมแล้ว ค่อยตัดสินว่ารุ่นไหนเหมาะ</h2>
        <p>โบรชัวร์ระบุ AC สูงสุด 6.6 kW และ DC สูงสุด 70 kW โดยอ้างเวลาชาร์จ <strong>30–80% ใน 25 นาที</strong> ตัวเลขนี้ไม่ใช่เวลาจากแบตหมดถึงเต็มและไม่รับประกันทุกสถานี ก่อนซื้อให้ตรวจจุดชาร์จที่บ้าน คอนโดหรือเส้นทางประจำ รวมถึงอ่าน <Link href="/articles/ev-battery-care" className={linkStyle}>การดูแลแบตเตอรี่และวางแผนชาร์จรถ EV</Link> แล้วใช้คู่มือ EX2 ของรถคันจริงเป็นหลัก</p>
        <p><strong>Pro</strong> เหมาะจะเริ่มพิจารณาหากอุปกรณ์ที่มีตอบโจทย์และต้องการคุมงบ ส่วน <strong>Max</strong> ควรอยู่ในตัวเลือกเมื่อคุณเห็นประโยชน์จากกล้องรอบคันและระบบช่วยขับที่เพิ่มมา ขอใบเสนอราคาทั้งคู่พร้อมเงื่อนไขประกัน การรับประกันรถและแบตเตอรี่ให้เทียบกันได้ บทนี้ยังยืนยันราคาและข้อเสนอเฉพาะคันในวันซื้อไม่ได้</p>
        <p>ตรวจเอกสารใหม่จาก <Source href={sources.brochureIndex}>หน้ารวมโบรชัวร์ของผู้จำหน่ายทางการไทย</Source> หรือขอจากศูนย์ก่อนจอง โดยเฉพาะเมื่อรุ่นปีผลิต อุปกรณ์หรือซอฟต์แวร์ต่างจากโบรชัวร์ฉบับที่ใช้ในบทนี้</p>
      </section>

      <aside className="rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7" aria-label="สถานะการเปิดตัวสินค้า">
        <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
        <p className="mt-3"><Link href="/articles" className={linkStyle}>อ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>บอกรุ่นรถและสิ่งที่อยากให้เราศึกษาเพิ่ม</Link></p>
      </aside>
    </div>
  </article>;
}
