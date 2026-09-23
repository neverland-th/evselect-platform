import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { drivingArticle as article, drivingSources as sources } from '@/lib/driving-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 640, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};
export default function DrivingGuidePage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">เข้าใจรถก่อนใช้สมรรถนะ</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>เพิ่งรับ EV คันแรก หรือขยับมาใช้รุ่น Performance? สิ่งที่ต้องคุ้นไม่ใช่แค่รถเร่งเร็วขึ้น แต่รวมถึงจังหวะยกคันเร่งแล้วรถชะลอ และเวลาที่ต้องใช้แป้นเบรก บทนี้ชวนทำความเข้าใจสามเรื่องนี้ก่อน พร้อมแยกให้ชัดว่าส่วนไหนใช้ในชีวิตประจำวัน และส่วนไหนควรเรียนกับครูฝึกในสนาม</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">ตัวอย่างการทำงานและคำแนะนำเฉพาะรถอ้างจากคู่มือ Model 3 สำหรับประเทศไทยที่ตรวจวันที่ 23 กันยายน 2569 เมนูและระบบของ EV รุ่นอื่นอาจต่างกัน ให้ใช้คู่มือที่ตรงรุ่น ปี และซอฟต์แวร์ของรถคุณ</p>
    </header>
    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={640} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Model 3 Performance ปี 2024 ใช้ประกอบรุ่นรถ ไม่ใช่ภาพทดสอบการขับขี่ของทีมงาน ภาพ: <Source href={article.imageSource}>{article.imageAuthor} / Wikimedia Commons</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ย่อขนาด</figcaption>
    </figure>
    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="acceleration">
        <h2 id="acceleration" className={headingStyle}>เริ่มจากคันเร่งที่คุมได้ละเอียด</h2>
        <p>ก่อนขับ ให้ปรับเบาะและกระจกจนใช้พวงมาลัยกับแป้นเหยียบได้สะดวก ตรวจโหมดขับขณะจอด แล้วทำความคุ้นเคยกับรถด้วยความเร็วต่ำในพื้นที่ที่เหมาะสม การรู้ว่ากดเท้าเท่าไรแล้วรถตอบสนองอย่างไร มีประโยชน์กว่าการลองอัตราเร่งสูงสุดทันที</p>
        <p><Source href={sources.acceleration}>คู่มือโหมดอัตราเร่ง Model 3</Source> ระบุว่า Chill จำกัดอัตราเร่งให้ตอบสนองนุ่มนวล ส่วน Insane ของรุ่น Performance ให้สมรรถนะสูงสุดที่พร้อมใช้งาน โหมดที่นุ่มลงช่วยให้คุ้นกับคันเร่งได้ แต่ไม่ได้เพิ่มแรงยึดเกาะของยาง อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>ความสัมพันธ์ของแรงม้า แรงบิด และแรงขับที่ล้อ</Link> เพื่อแยกตัวเลขสมรรถนะออกจากสภาพถนนจริง</p>
      </section>
      <section className="space-y-5" aria-labelledby="regen">
        <h2 id="regen" className={headingStyle}>ยกคันเร่งแล้วหน่วง ไม่ได้แปลว่าไม่ต้องใช้เบรก</h2>
        <p><Source href={sources.regen}>Bosch อธิบาย Regenerative Braking</Source> ว่าให้มอเตอร์ทำหน้าที่เป็นเครื่องกำเนิดไฟฟ้า นำพลังงานการเคลื่อนที่บางส่วนกลับเข้าแบตเตอรี่พร้อมสร้างแรงหน่วง เมื่อแรงเบรกที่ต้องการมากกว่าส่วนนี้ เบรกเสียดทานจะเข้ามาช่วย การประสานระบบและเพลาที่รับแรงหน่วงขึ้นกับรถ จึงไม่ควรเหมาว่า EV ทุกคันยกคันเร่งแล้วเบรกเฉพาะล้อหลัง</p>
        <p><Source href={sources.braking}>คู่มือการเบรกและหยุดรถ Model 3</Source> ระบุว่า Regen อาจลดลงเมื่อแบตเตอรี่เย็นหรือเต็ม ผู้ขับต้องพร้อมใช้แป้นเบรกเพื่อชะลอหรือหยุดรถ เว้นระยะตามสภาพถนนและการจราจร อย่ากะระยะหยุดจากแรงหน่วงที่เคยรู้สึกเพียงครั้งเดียว</p>
        <p>หากรถมีระดับ Regen ให้เลือก เรียนรู้จากคู่มือและลองการตอบสนองในสภาพแวดล้อมที่เหมาะสมก่อนเดินทาง ไม่มีระดับ Low หรือ High ที่ใช้แทนกันได้กับทุกรุ่น อ่านต่อใน <Link href="/articles/hybrid-to-ev-chassis-dynamics-transition" className={linkStyle}>สิ่งที่เปลี่ยนเมื่อย้ายจาก Hybrid มาใช้ EV</Link> และ <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่และการชาร์จ</Link></p>
      </section>
      <section className="space-y-5" aria-labelledby="braking">
        <h2 id="braking" className={headingStyle}>ABS ช่วยควบคุมรถ แต่ไม่เพิ่มขีดจำกัดของถนน</h2>
        <p>ไม่ควรจำว่า “เบรกแรงแล้วเลี้ยวไม่ได้เสมอ” คู่มือ Model 3 อธิบายว่า ABS ปรับแรงเบรกเพื่อลดการล็อกของล้อและช่วยคงการควบคุมทิศทางขณะเบรกหนัก ในเหตุฉุกเฉิน ผู้ผลิตแนะนำให้กดแป้นเบรกเต็มที่และรักษาแรงกด ไม่ย้ำเบรกเป็นจังหวะ หากรู้สึกสั่นจาก ABS ให้คงแรงกดตามคำแนะนำในคู่มือ</p>
        <p>ระบบนี้ไม่ได้ทำให้พ้นข้อจำกัดของแรงยึดเกาะหรือป้องกันการเหินน้ำได้ทุกกรณี บนถนนเปียกต้องปรับความเร็วและระยะห่างให้เหมาะสม ส่วน <Source href={sources.traction}>คู่มือ Traction Control ของ Model 3</Source> แนะนำให้เปิดระบบไว้ในการใช้งานปกติ และระบุว่าไม่สามารถป้องกันอุบัติเหตุจากการขับอันตรายหรือเลี้ยวแรงที่ความเร็วสูงได้</p>
        <p>ก่อนมองหาอุปกรณ์เพิ่มสมรรถนะ ให้ตรวจสภาพยางและแรงดันตามรถคันจริง อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางให้ตรงน้ำหนักและข้อกำหนดรถ EV</Link> หากรถมีไฟเตือนระบบเบรกหรืออาการผิดปกติ ให้ตรวจตามคู่มือและติดต่อศูนย์บริการ ไม่ทดลองแก้ด้วยการปรับโหมดขับ</p>
      </section>
      <section className="space-y-5" aria-labelledby="track">
        <h2 id="track" className={headingStyle}>อยากพัฒนาทักษะ ให้แยกการฝึกในสนามออกจากถนน</h2>
        <p>Trail Braking คือการค่อย ๆ ลดแรงเบรกต่อเนื่องขณะเริ่มเข้าโค้ง เป็นทักษะที่ต้องสัมพันธ์กับความเร็ว แนววิ่ง และแรงยึดเกาะ ไม่ใช่สูตร “เบรกเต็มแล้วหักเลี้ยว” ที่อ่านจบแล้วนำไปลองได้ทันที หากสนใจ ควรเรียนกับครูฝึกในสนามปิดที่จัดการความปลอดภัยและตรวจความพร้อมรถ</p>
        <p><Source href={sources.track}>คู่มือ Track Mode ของ Model 3 Performance</Source> ระบุชัดว่าใช้บนสนามปิดโดยผู้ขับที่มีประสบการณ์ และห้ามใช้บนถนนสาธารณะ เพราะโหมดนี้เปลี่ยนการทำงานของระบบควบคุมเสถียรภาพ แรงฉุด Regen และการระบายความร้อน จึงไม่ควรนำค่าตั้งของโหมดสนามมาเป็นคำแนะนำสำหรับการขับทุกวัน</p>
        <p>สำหรับการเดินทางประจำวัน เป้าหมายคือควบคุมคันเร่งและเบรกได้ต่อเนื่อง มองทางล่วงหน้า และเหลือระยะให้ตัดสินใจ หากอยากอัปเกรดรถหลังเข้าใจอาการแล้ว อ่าน <Link href="/articles/ev-carbon-ceramic-brakes-guide" className={linkStyle}>ประเมินความคุ้มค่าก่อนอัปเกรดเบรก Carbon Ceramic</Link> โดยแยกความต้องการใช้งานออกจากตัวเลขโฆษณา</p>
      </section>
    </div>
    <aside aria-label="สถานะการเปิดตัวสินค้า" className="mt-12 space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7">
      <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      <p><Link href="/articles" className={linkStyle}>เลือกอ่านคู่มือ EV เรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>เสนอเรื่องที่อยากให้เราอธิบายเพิ่ม</Link></p>
    </aside>
  </article>;
}
