import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { camberArticle, camberSources } from '@/lib/camber-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}

export const metadata: Metadata = {
  title: `${camberArticle.title} | EVSELECT`, description: camberArticle.description,
  alternates: { canonical: camberArticle.path },
  openGraph: { title: camberArticle.title, description: camberArticle.description, url: `https://evselects.com${camberArticle.path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: camberArticle.publishedAt, modifiedTime: camberArticle.updatedAt, images: [{ url: camberArticle.image, width: 1624, height: 875, alt: camberArticle.imageAlt }] },
  twitter: { card: 'summary_large_image', title: camberArticle.title, description: camberArticle.description, images: [camberArticle.image] },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: camberArticle.title, description: camberArticle.description,
  image: `https://evselects.com${camberArticle.image}`, datePublished: camberArticle.publishedAt, dateModified: camberArticle.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://evselects.com${camberArticle.path}` },
};

const directions = [
  { id: 'negative', label: 'แคมเบอร์ลบ', text: 'ยอดล้อเอียงเข้าหาตัวรถ', leftTop: 79, leftBottom: 61, rightTop: 181, rightBottom: 199 },
  { id: 'zero', label: 'แคมเบอร์ศูนย์', text: 'ล้อตั้งตรงในภาพด้านหน้า', leftTop: 70, leftBottom: 70, rightTop: 190, rightBottom: 190 },
  { id: 'positive', label: 'แคมเบอร์บวก', text: 'ยอดล้อเอียงออกจากตัวรถ', leftTop: 61, leftBottom: 79, rightTop: 199, rightBottom: 181 },
];

export default function EVCamberAdjustmentGuidePage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={`${linkStyle} inline-flex items-center gap-2 text-sm`}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเจ้าของรถ · ศูนย์ล้อและการสึกของยาง</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{camberArticle.title}</h1>
      <p>ยางด้านในสึกเร็วจนต้องเปลี่ยนทั้งเส้น ทั้งที่ดอกด้านนอกยังเหลือเยอะ—ก่อนจ่ายค่าอาร์มปรับแคมเบอร์ ลองขอใบตั้งศูนย์ที่อ่านออกก่อนครับ รอยสึกหนึ่งแบบยังฟันธงสาเหตุไม่ได้ และการตั้งทุกมุมให้เป็นศูนย์ก็ไม่ใช่คำตอบสำหรับรถทุกคัน บทความนี้ช่วยให้คุณแยกมุมล้อ อ่านค่าที่ร้านวัด และคุยเรื่องการแก้ไขโดยมีข้อมูลของรถตัวเองอยู่ในมือ</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={camberArticle.updatedAt}>22 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {camberArticle.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src={camberArticle.image} alt={camberArticle.imageAlt} width={1624} height={875} preload sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
        <figcaption className="space-y-2 p-4 text-sm leading-6">
          <p>LADA Vesta Sport บนแท่นตั้งศูนย์ ภาพวันที่ 23 สิงหาคม 2562 ใช้อธิบายการติดเป้าวัดที่ล้อ รถในภาพไม่ใช่ EV และสถานที่ไม่ใช่ศูนย์บริการของเรา</p>
          <p>ภาพ: <Source href={camberArticle.imageSource}>{camberArticle.imageAuthor} / Wikimedia Commons</Source> · <Source href={camberArticle.imageLicenseUrl}>{camberArticle.imageLicense}</Source> · แสดงเต็มสัดส่วนและย่อขนาดสำหรับเว็บ</p>
        </figcaption>
      </figure>
    </header>

    <div className="mt-10 space-y-12">
      <section className="space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="start-here">
        <h2 id="start-here" className={headingStyle}>เริ่มจากหาสาเหตุ ไม่เริ่มจากซื้ออาร์มแต่ง</h2>
        <p><Source href={camberSources.tyreWear}>Michelin อธิบายสาเหตุยางสึกด้านเดียว</Source> ไว้หลายด้าน ทั้งมุมล้อ ชิ้นส่วนช่วงล่างที่หลวมหรือสึก การใช้งาน และการติดตั้งยาง จึงไม่ควรสรุปจากคำว่า “ยางกินใน” เพียงคำเดียวว่าต้องเปลี่ยนอาร์มแคมเบอร์</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-lime-700">
          <li>บอกอาการและประวัติให้ร้านทราบ: เริ่มหลังเปลี่ยนยาง โหลดรถ ตกหลุม หรือเปลี่ยนชิ้นส่วนใดหรือไม่</li>
          <li>ให้ตรวจสภาพยาง ล้อ และช่วงล่าง พร้อมวัดศูนย์เทียบสเปกที่ตรงรุ่น ปี และรุ่นย่อย</li>
          <li>ขอค่าก่อน–หลังและเหตุผลของงานที่เสนอ แล้วค่อยตัดสินใจว่าจำเป็นต้องเปลี่ยนอะไหล่หรือไม่</li>
        </ul>
        <p className="text-sm leading-6">หากเห็นโครงยางโผล่ บวม หรือความเสียหายชัดเจน ให้หยุดใช้งานยางเส้นนั้นและจัดการตรวจหรือเปลี่ยนก่อน ตาม <Source href={camberSources.tyreWear}>คำแนะนำตรวจสภาพยางของผู้ผลิต</Source> การตั้งศูนย์ไม่ทำให้ยางที่เสียหายกลับมาใช้งานได้</p>
      </section>

      <section className="space-y-5" aria-labelledby="three-angles">
        <h2 id="three-angles" className={headingStyle}>Camber, Toe และ Caster มองคนละมุม</h2>
        <p><Source href={camberSources.basics}>Pirelli แยกมุมหลักในการตั้งศูนย์</Source> เป็นสามเรื่องนี้ คำว่าแคมเบอร์จึงไม่ครอบคลุมทุกค่าบนใบตั้งศูนย์</p>
        <div className="space-y-4">
          <div><h3 className="text-lg font-bold text-slate-950">Camber — ล้อเอียงเข้าหรือออก</h3><p>มองจากด้านหน้ารถ: ยอดล้อเอียงเข้าหาตัวรถคือแคมเบอร์ลบ เอียงออกคือแคมเบอร์บวก ค่าที่เหมาะสมต้องอ้างอิงรถคันนั้น การเห็นค่าติดลบจึงยังไม่ได้แปลว่าช่วงล่างผิดปกติ</p></div>
          <div><h3 className="text-lg font-bold text-slate-950">Toe — ล้อชี้หุบเข้าหรือกางออก</h3><p>มองจากด้านบน: ถ้าส่วนหน้าของล้อคู่เดียวกันหันเข้าหากันคือ Toe-in ถ้าหันออกคือ Toe-out มุมโทเกี่ยวข้องกับการสึกของยางด้วย จึงไม่ควรดูเฉพาะแคมเบอร์เมื่อยางสึกผิดปกติ</p></div>
          <div><h3 className="text-lg font-bold text-slate-950">Caster — แนวแกนเลี้ยวเอียงไปทางไหน</h3><p>มองจากด้านข้างรถ: เป็นมุมของแกนเลี้ยว ไม่ใช่มุมเอียงของวงล้อแบบแคมเบอร์ มุมนี้เกี่ยวข้องกับพฤติกรรมพวงมาลัย และวิธีปรับได้มากน้อยแค่ไหนขึ้นกับช่วงล่างของแต่ละรุ่น</p></div>
        </div>
        <figure className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="grid gap-5 sm:grid-cols-3">{directions.map(item => <div key={item.id} className="text-center">
            <svg viewBox="0 0 260 135" role="img" aria-labelledby={`camber-${item.id}`} className="mx-auto w-full max-w-60"><title id={`camber-${item.id}`}>{`${item.label}: ${item.text} เมื่อมองจากด้านหน้า`}</title><rect x="92" y="18" width="76" height="62" rx="14" fill="#d9f99d" stroke="#4d7c0f" strokeWidth="2" /><line x1="20" y1="120" x2="240" y2="120" stroke="#94a3b8" strokeWidth="2" /><line x1="70" y1="20" x2="70" y2="113" stroke="#94a3b8" strokeDasharray="4 4" /><line x1="190" y1="20" x2="190" y2="113" stroke="#94a3b8" strokeDasharray="4 4" /><line x1={item.leftTop} y1="38" x2={item.leftBottom} y2="108" stroke="#0f172a" strokeWidth="14" strokeLinecap="round" /><line x1={item.rightTop} y1="38" x2={item.rightBottom} y2="108" stroke="#0f172a" strokeWidth="14" strokeLinecap="round" /></svg>
            <p className="font-bold text-slate-950">{item.label}</p><p className="text-sm leading-6">{item.text}</p>
          </div>)}</div>
          <figcaption className="mt-5 text-sm leading-6">ภาพอธิบายทิศทางแคมเบอร์เมื่อมองจากด้านหน้า เส้นประคือแนวดิ่ง มุมเอียงวาดให้เห็นง่าย ไม่ใช่สเกลจริง ค่าแนะนำ หรือผลจำลองการยึดเกาะ</figcaption>
        </figure>
        <p>ส่วน <Source href={camberSources.thaiAlignment}>การตั้งศูนย์กับการถ่วงล้อ</Source> เป็นคนละงาน: ตั้งศูนย์ดูมุมและทิศทางล้อ ส่วนถ่วงล้อแก้ความไม่สมดุลของชุดล้อและยาง อาการสั่นหรือรถดึงจึงควรให้ช่างตรวจแยกสาเหตุ ไม่สั่งทำอย่างใดอย่างหนึ่งจากชื่ออาการอย่างเดียว</p>
      </section>

      <section className="space-y-4" aria-labelledby="read-report">
        <h2 id="read-report" className={headingStyle}>อ่านใบตั้งศูนย์ให้มากกว่าสีเขียวกับสีแดง</h2>
        <p>สีบนหน้าจอมีประโยชน์เมื่อเครื่องเลือกข้อมูลรถและเงื่อนไขถูกต้องเท่านั้น ลองไล่ดูรายการต่อไปนี้กับช่าง ก่อนตัดสินว่าค่าที่วัด “ดีแล้ว”</p>
        <ol className="list-decimal space-y-4 pl-6 marker:font-bold marker:text-lime-800">
          <li><strong className="text-slate-950">รุ่นรถ ปี รุ่นย่อย และช่วงสเปก:</strong> ให้เห็นว่าฐานข้อมูลที่เครื่องเลือกตรงกับรถจริง รวมถึงช่วงล่างเดิมหรือที่เปลี่ยนมา</li>
          <li><strong className="text-slate-950">เงื่อนไขตอนวัด:</strong> ถามเรื่องแรงดันลมยาง ความสูงรถ และน้ำหนักบรรทุกที่คู่มือกำหนด อย่านำใบที่วัดคนละเงื่อนไขมาเทียบโดยไม่บอกกัน</li>
          <li><strong className="text-slate-950">ก่อนทำและหลังทำ:</strong> ดูว่ามุมใดเปลี่ยนไปและมุมใดยังอยู่นอกสเปก ถ้ายังแก้ไม่ได้ ให้ร้านอธิบายสิ่งที่พบและขั้นตอนถัดไป</li>
          <li><strong className="text-slate-950">ซ้าย–ขวา หน้า–หลัง:</strong> อ่านค่ารายล้อ ไม่ดูเฉพาะยอดรวม โดยเฉพาะ Individual Toe ซึ่งเป็นค่ารายล้อ ต่างจาก Total Toe ที่รวมสองล้อบนเพลาเดียวกัน</li>
          <li><strong className="text-slate-950">หน่วย:</strong> องศาทศนิยมกับองศา–ลิปดาเขียนไม่เหมือนกัน เช่น 0.50° เท่ากับ 0°30′ ไม่ใช่ 0°50′ ตัวอย่างนี้อธิบายหน่วย ไม่ใช่ค่าตั้งรถ</li>
          <li><strong className="text-slate-950">ผลหลังทำ:</strong> เก็บใบงานและผลตรวจการขับของช่างไว้ หากอาการยังอยู่ ให้กลับไปตรวจต่อ ไม่ถือว่าใบสีเขียวรับรองว่าอาการทุกอย่างหายแล้ว</li>
        </ol>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7" aria-labelledby="tesla-example">
        <h2 id="tesla-example" className={headingStyle}>ตัวอย่าง Tesla: ชื่อรุ่นเดียวกัน ยังต้องดูเงื่อนไข</h2>
        <p><Source href={camberSources.teslaSpecifications}>ตาราง Wheel Alignment ในคู่มือบริการ Model 3 2024+</Source> แยก Performance กับ Non-Performance และแยกการวัดที่มีและไม่มีน้ำหนักถ่วง นี่เป็นเหตุผลที่ไม่ควรคัดลอกมุมจากโพสต์ของรถอีกคันแล้วใช้ทันที</p>
        <p><Source href={camberSources.teslaProcedure}>ขั้นตอนตรวจและปรับศูนย์ของ Tesla</Source> ยังระบุให้ตรวจสเปกในเครื่องเทียบคู่มือ ตรวจความสูง และสมมติว่าช่วงล่างอยู่ในสภาพทำงานปกติ การวัดมุมโดยยังมีชิ้นส่วนผิดปกติจึงไม่ใช่จุดจบของงานตรวจ</p>
        <p>อีกจุดที่มักเข้าใจผิด: เอกสารนี้ระบุว่าไม่มีจุดปรับ Camber/Caster โดยเฉพาะ แต่มีขั้นตอนปรับผ่านระยะขยับของจุดยึด จึงไม่ควรแปลว่า “รถเดิมปรับไม่ได้ ต้องซื้ออาร์มแต่งเท่านั้น” ให้ช่างตรวจวิธีที่ใช้กับรถคันจริงก่อน</p>
        <p className="text-sm leading-6">ลิงก์ตัวอย่างเป็นคู่มือบริการภาษาอังกฤษภูมิภาคออสเตรเลียของ Model 3 2024+ ใช้แสดงวิธีอ่านเงื่อนไข ไม่ได้คัดลอกองศาหรือขั้นตอนซ่อมมาเป็นคำสั่งสำหรับรถไทยทุกคัน รถของคุณต้องยืนยันคู่มือที่ตรง VIN รุ่นย่อย และตลาดจำหน่ายก่อนทำงาน</p>
        <p>หากยังแยกรุ่นย่อยไม่แน่ใจ อ่าน <Link href="/articles/tesla-model-3-highland-review" className={linkStyle}>ข้อมูล Model 3 Highland สเปกไทย</Link> เป็นพื้นฐาน แล้วใช้ข้อมูลประจำรถคันจริงยืนยันอีกครั้ง</p>
      </section>

      <section className="space-y-4" aria-labelledby="modified-car">
        <h2 id="modified-car" className={headingStyle}>โหลดรถหรือเปลี่ยนช่วงล่างแล้ว ควรคุยอะไรกับร้าน?</h2>
        <p>เก็บค่าความสูงและใบตั้งศูนย์ก่อนเปลี่ยนไว้ แล้วตรวจอีกครั้งตามขั้นตอนของชุดที่ติดตั้ง <Source href={camberSources.basics}>Pirelli แนะนำให้ตรวจศูนย์หลังเปลี่ยนชิ้นส่วนช่วงล่าง</Source> หรือได้รับแรงกระแทกรุนแรง การเปลี่ยนสปริงหรืออาร์มจึงควรมีแผนตรวจหลังงาน ไม่จบแค่รถดูเตี้ยลง</p>
        <p>ถ้าค่าบางมุมกลับเข้าสเปกไม่ได้ ให้ร้านระบุว่าติดข้อจำกัดที่ส่วนใด ตรวจพบชิ้นส่วนสึกหรือผิดรูปหรือไม่ และชิ้นส่วนที่เสนอช่วยปรับอะไรได้บ้าง ขอรหัสสินค้าที่ตรงรุ่น ปี รุ่นย่อย พร้อมวิธีติดตั้งและข้อจำกัด ก่อนสรุปว่าอาร์มแต่งจำเป็น</p>
        <p>มุมล้อกับความหน่วงโช้คเป็นคนละเรื่อง ถ้าปัญหาหลักคือรถเด้งหรือย้วย ควรแยกอาการก่อนปรับทุกอย่างพร้อมกัน อ่าน <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>Bump/Rebound และการปรับแดมเปอร์</Link> เพื่อเข้าใจว่าปุ่มโช้คกำลังควบคุมอะไร และใช้ <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>คู่มือเลือกยางและคอยล์โอเวอร์ให้ตรงรถ</Link> เมื่อต้องเปลี่ยนชุดล้อหรือช่วงล่าง</p>
      </section>

      <section className="space-y-4" aria-labelledby="no-universal-setting">
        <h2 id="no-universal-setting" className={headingStyle}>ไม่มีสูตรองศาเดียวที่รับรอง EV ได้ทุกรุ่น</h2>
        <p>บทความนี้ไม่กำหนดสูตรแคมเบอร์สำหรับ “รถหนักสองตัน” หรือรับรองว่าตั้งล้อตรงแล้วจะเบรกดีที่สุด การเลือกค่าต้องมีสเปกรถ สภาพชิ้นส่วน ยาง และลักษณะการใช้งานประกอบ ค่าจากรถสนามก็ไม่ใช่คำแนะนำอัตโนมัติสำหรับการขับบนถนน</p>
        <p>ถ้าใช้รถในสนามและมีข้อมูลอุณหภูมิยาง ให้ขอเกณฑ์จากผู้ผลิตยางรุ่นนั้นและผู้ดูแลการทดสอบ บันทึกวิธีวัดและสภาพการวิ่งร่วมกัน หน้านี้ไม่มีข้อมูลทดสอบที่ใช้กำหนดส่วนต่างอุณหภูมิหรือเปอร์เซ็นต์หน้าสัมผัส จึงไม่ใช้ตัวเลขดังกล่าวตัดสินว่ารถของคุณตั้งมุมถูกหรือผิด</p>
        <p className="rounded-xl bg-slate-50 p-4 text-sm leading-6">ขอบเขตข้อมูล: <BrandHomeLink /> เรียบเรียงจากแหล่งอ้างอิงด้านล่าง ตรวจวันที่ 22 กันยายน 2569 ไม่มีผลวัดจากห้องแล็บหรือผลทดสอบรถเฉพาะคันของทีมงาน ข้อมูลส่วนนั้นเป็น Data unavailable ภาพเส้นล้อในหน้านี้เป็นภาพอธิบายคำศัพท์เท่านั้น</p>
      </section>

      <section className="space-y-4" aria-labelledby="sources">
        <h2 id="sources" className={headingStyle}>แหล่งอ้างอิงที่เปิดตรวจต่อได้</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li><Source href={camberSources.basics}>Pirelli — ความหมาย Camber, Toe, Caster และเวลาที่ควรตรวจศูนย์</Source></li>
          <li><Source href={camberSources.tyreWear}>Michelin Thailand FAQ — ยางสึกด้านเดียว การตรวจความเสียหาย และแรงดันลม</Source></li>
          <li><Source href={camberSources.thaiAlignment}>Michelin ประเทศไทย — การตั้งศูนย์และการถ่วงล้อ</Source></li>
          <li><Source href={camberSources.teslaSpecifications}>Tesla Model 3 2024+ — ตารางศูนย์ล้อและเงื่อนไขการวัด (ภาษาอังกฤษ ออสเตรเลีย)</Source></li>
          <li><Source href={camberSources.teslaProcedure}>Tesla Model 3 2024+ — ขั้นตอนตรวจและปรับศูนย์ (ภาษาอังกฤษ ออสเตรเลีย)</Source></li>
        </ul>
      </section>

      <section className="space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="before-you-pay">
        <h2 id="before-you-pay" className={headingStyle}>ก่อนจ่ายค่าอะไหล่ ให้ได้คำตอบสามข้อ</h2>
        <ol className="list-decimal space-y-2 pl-6"><li>รถของเราใช้สเปกไหน และวัดภายใต้เงื่อนไขอะไร?</li><li>พบสาเหตุใดจริง มีใบวัดหรือผลตรวจส่วนไหนรองรับ?</li><li>งานที่เสนอแก้สาเหตุนั้นอย่างไร และจะตรวจผลหลังทำอย่างไร?</li></ol>
        <p>แค่มีคำตอบครบ คุณจะคุยกับร้านได้ชัดขึ้นมากกว่าขอ “องศาสูตรรถ EV” แล้วหวังว่าทุกอาการจะจบพร้อมกัน</p>
        <p className="text-sm leading-6"><BrandHomeLink /> ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน บทความนี้ไม่ได้เสนอขายชุดอาร์มหรือบริการตั้งศูนย์</p>
        <Link href="/contact" className={`${linkStyle} inline-flex min-h-11 items-center gap-2`}>บอกรุ่นรถและคำถามที่อยากอ่านต่อ<ArrowRight size={16} /></Link>
      </section>
      <Link href="/articles?category=suspension" className={`${linkStyle} inline-flex items-center gap-2`}><ArrowLeft size={16} />อ่านคู่มือช่วงล่างเรื่องอื่น</Link>
    </div>
  </article>;
}
