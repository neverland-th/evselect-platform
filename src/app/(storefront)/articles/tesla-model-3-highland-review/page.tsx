import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Car, Info } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import { teslaModel3 as article, teslaModel3Trims as trims } from '@/lib/tesla-model-3';

export const metadata: Metadata = {
  title: `${article.title} | EVSELECT`, description: article.description,
  alternates: { canonical: article.url },
  openGraph: {
    title: article.title, description: article.description, url: article.url,
    siteName: 'EVSELECT Thailand', locale: 'th_TH', type: 'article',
    publishedTime: '2026-08-25T08:00:00+07:00', modifiedTime: `${article.checkedDate}T12:00:00+07:00`,
    images: [{ url: article.image, width: 1200, height: 675, alt: 'ภาพประกอบ Tesla Model 3 Highland' }],
  },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
  description: article.description, mainEntityOfPage: article.url, image: article.image,
  datePublished: '2026-08-25T08:00:00+07:00', dateModified: `${article.checkedDate}T12:00:00+07:00`,
  inLanguage: 'th-TH', author: { '@type': 'Organization', name: 'EVSELECT Editorial Team' },
  publisher: { '@type': 'Organization', name: 'EVSELECT Thailand', url: 'https://evselects.com' },
  citation: Object.values(article.sources),
  about: { '@type': 'Car', name: 'Tesla Model 3', brand: { '@type': 'Brand', name: 'Tesla' } },
};

const rows = [
  ['ราคาเริ่มต้น (บาท)', 'price'], ['ระบบขับเคลื่อน', 'drive'], ['กำลังสูงสุด', 'power'],
  ['0–100 กม./ชม.', 'acceleration'], ['ระยะวิ่งตามล้อมาตรฐาน²', 'range'],
  ['ระยะวิ่งเมื่อล้อ 19 นิ้ว²', 'range19'], ['Supercharger สูงสุด³', 'charging'],
  ['ระบบเสียง', 'audio'], ['ล้อ', 'wheels'], ['โช้คอัพ', 'dampers'],
  ['เบาะหน้า', 'frontSeats'], ['จอผู้โดยสารด้านหลัง', 'rearScreen'],
  ['ประกันแบตเตอรี่และชุดขับเคลื่อน⁴', 'warranty'],
] as const;

export default function TeslaModel3HighlandReviewPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="เส้นทางนำทาง" className="mb-8">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-700"><ArrowLeft className="w-4 h-4" /> กลับไปหน้าบทความและรีวิวรถยนต์ไฟฟ้า</Link>
      </nav>
      <header className="space-y-5 mb-8 max-w-4xl">
        <div className="flex flex-wrap gap-3 items-center text-xs font-semibold">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 text-lime-800 px-3 py-1.5"><Car className="w-4 h-4" /> วิเคราะห์สเปกประเทศไทย</span>
          <span className="inline-flex items-center gap-2 text-slate-500"><CalendarDays className="w-4 h-4" /> ตรวจสอบ {article.checkedLabel}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight" style={{ textWrap: 'balance' }}>{article.title}</h1>
        <p className="text-base sm:text-lg leading-relaxed text-slate-600">Model 3 แต่ละรุ่นไม่ได้ต่างกันแค่ความแรง บทความนี้รวบรวมราคาและอุปกรณ์ที่ Tesla ประเทศไทยแสดงในวันที่ตรวจสอบ เพื่อช่วยเปรียบเทียบรุ่นขับหลังทั้งสามรุ่นกับ Performance AWD ก่อนเลือกทดลองขับ</p>
      </header>
      <figure className="mb-9">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"><Image src="/images/reviews/tesla-model-3-hero.jpg" alt="ภาพประกอบ Tesla Model 3 Highland" fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" /></div>
        <figcaption className="mt-2 text-xs leading-relaxed text-slate-500">ภาพประกอบ Model 3 Highland อุปกรณ์และรายละเอียดของรถแต่ละปีอาจแตกต่างจากรุ่นที่จำหน่ายปัจจุบัน</figcaption>
      </figure>
      <aside className="rounded-2xl bg-lime-50 border border-lime-200 p-5 sm:p-6 mb-10 text-sm leading-relaxed">
        <h2 className="font-bold text-base mb-2 flex gap-2 items-center"><Info className="w-5 h-5 shrink-0 text-lime-700" /> อ่านให้ตรงรุ่นและปีของรถ</h2>
        <p>ตารางนี้อิงรถใหม่ในหน้าสั่งซื้อไทย ณ {article.checkedLabel} ซึ่งมี <strong>Model 3 ขับหลัง, Premium RWD, Premium Long Range RWD และ Performance AWD</strong> โดย Long Range ในชุดนี้เป็นขับหลัง ส่วน Long Range AWD ที่เคยจำหน่ายเป็นคนละรุ่น ไม่ควรนำตัวเลขข้ามปีหรือข้ามตลาดมาใช้แทนกัน</p>
        <p className="mt-2">ข้อมูลนี้เป็นการรวบรวมสเปกจากผู้ผลิต ไม่มีผลวัดอัตราเร่ง ระยะเบรก ความเงียบ หรือระยะวิ่งจริงโดยกองบรรณาธิการประกอบในบทความนี้</p>
      </aside>
      <section id="specifications" aria-labelledby="specs-title" className="mb-12 scroll-mt-24">
        <h2 id="specs-title" className="text-2xl font-extrabold mb-3">ตารางสเปก Model 3 ประเทศไทย</h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">ราคาเงินสดเริ่มต้นตามตัวเลือกพื้นฐานในหน้าสั่งซื้อ ก่อนเพิ่มอุปกรณ์และแพ็กเกจ ไม่รวมมูลค่าประหยัดโดยประมาณ และไม่ผสมกับราคาเปิดตัวหรือโปรโมชันเก่า <a href={article.sources.design} target="_blank" rel="noopener noreferrer" className="underline text-lime-800">ตรวจราคาและเปรียบเทียบอุปกรณ์กับ Tesla</a></p>
        <p id="table-help" className="text-xs text-slate-500 mb-2">บนหน้าจอเล็ก เลื่อนตารางแนวนอนเพื่อดูครบทั้ง 4 รุ่น</p>
        <div role="region" aria-label="ตารางเปรียบเทียบสเปก Model 3" aria-describedby="table-help" tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm focus-visible:outline-2 focus-visible:outline-lime-700">
          <table className="w-full min-w-[1000px] text-sm text-left border-collapse">
            <caption className="sr-only">สเปก Tesla Model 3 ประเทศไทย ตรวจสอบ {article.checkedLabel}</caption>
            <thead className="bg-slate-900 text-white"><tr><th scope="col" className="p-4 w-[20%]">คุณสมบัติ / รุ่นย่อย</th>{trims.map(trim => <th scope="col" key={trim.id} className="p-4 w-[20%] font-bold">{trim.name}</th>)}</tr></thead>
            <tbody>
              {rows.map(([label, key]) => <tr key={key} className="border-t border-slate-100"><th scope="row" className="p-4 font-semibold align-top">{label}</th>{trims.map(trim => <td key={trim.id} className={`p-4 align-top leading-relaxed ${trim.id === 'long-range-rwd' ? 'bg-lime-50/50' : trim.id === 'performance' ? 'bg-slate-50' : ''} ${key === 'price' || key === 'power' ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{trim[key]}</td>)}</tr>)}
              <tr className="border-t border-slate-100"><th scope="row" className="p-4 align-top font-semibold">แรงบิด / ความจุและเคมีแบตเตอรี่</th><td colSpan={4} className="p-4 text-slate-600 leading-relaxed">หน้าสเปกและหน้าเปรียบเทียบ Tesla ไทยที่ตรวจสอบไม่ระบุตัวเลขแรงบิด ความจุ kWh เคมี หรือผู้ผลิตเซลล์ครบรายรุ่น จึงไม่ใช้ตัวเลขประมาณการเป็นสเปกยืนยัน</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-2 text-xs text-slate-600 leading-relaxed">
          <p>¹ Performance: 3.1 วินาทีเป็นตัวเลขผู้ผลิตที่หักช่วงออกตัว (rollout) ออก ตามเชิงอรรถใน <a className="underline text-lime-800" href={article.sources.measurement}>Tesla ประเทศไทย ฉบับภาษาอังกฤษ</a> ไม่ใช่ผลจับเวลาของ EVSELECT</p>
          <p>² ล้อมาตรฐานคือ 18 นิ้วสำหรับรุ่นขับหลัง และ 20 นิ้วสำหรับ Performance ค่า 534 กม. ของ Premium RWD ล้อ 18 นิ้วระบุว่า “โดยประมาณ” บนเว็บ Tesla จึงแยกจากค่าที่ระบุ WLTP ระยะวิ่งจริงขึ้นกับความเร็ว อากาศ เส้นทางและการใช้งาน</p>
          <p>³ กำลังชาร์จสูงสุดไม่ใช่กำลังคงที่ตลอดการชาร์จ ไม่มีข้อมูลยืนยันเวลา 10–80% สำหรับรถทุกรุ่นในแหล่งข้อมูลที่ใช้ จึงไม่ระบุเวลา 18 หรือ 22 นาทีเป็นข้อรับประกัน</p>
          <p>⁴ สิ้นสุดตามเวลา หรือระยะทาง อย่างใดถึงก่อน รายละเอียดความคุ้มครองและเงื่อนไขให้ตรวจเอกสารรับประกันรถคันที่ซื้อ</p>
        </div>
      </section>
      <section id="choose-trim" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-extrabold mb-3">เลือกรุ่นจากสิ่งที่ใช้งานจริง</h2>
        <p className="text-sm text-slate-600 mb-5 leading-relaxed">แนวทางด้านล่างเป็นมุมมองประกอบการเลือกจากอุปกรณ์ที่ระบุ ควรทดลองขับและเทียบค่าใช้จ่ายก่อนตัดสินใจ</p>
        <div className="grid sm:grid-cols-2 gap-5">{trims.map(trim => <section key={trim.id} data-trim={trim.id} className={`rounded-3xl border p-6 flex flex-col ${trim.id === 'performance' ? 'bg-slate-900 border-slate-800 text-white' : trim.id === 'long-range-rwd' ? 'bg-lime-50/50 border-lime-300' : 'bg-white border-slate-200'}`}>
          <span className={`text-xs font-bold mb-3 ${trim.id === 'performance' ? 'text-lime-300' : 'text-lime-800'}`}>{trim.label}</span>
          <h3 className="text-xl font-extrabold mb-2">{trim.name}</h3><p className="text-xl font-bold mb-3">{trim.price} บาท</p>
          <p className={`text-sm font-semibold mb-3 ${trim.id === 'performance' ? 'text-lime-300' : 'text-lime-800'}`}>{trim.range} · 0–100 ใน {trim.acceleration}</p>
          <p className={`text-sm leading-relaxed mb-5 ${trim.id === 'performance' ? 'text-slate-300' : 'text-slate-600'}`}>{trim.summary}</p>
          <p className={`text-sm leading-relaxed mt-auto border-t pt-4 ${trim.id === 'performance' ? 'border-slate-700' : 'border-slate-200'}`}>{trim.consideration}</p>
        </section>)}</div>
      </section>
      <section id="charging" className="mb-12 max-w-4xl space-y-4 leading-relaxed text-slate-600">
        <h2 className="text-2xl font-extrabold text-slate-900">อ่านตัวเลขแบตเตอรี่และการชาร์จอย่างไร</h2>
        <p>เลือกเปรียบเทียบระยะวิ่งด้วยมาตรฐานเดียวกันและขนาดล้อเดียวกันก่อน ตัวเลข WLTP ใช้เป็นข้อมูลเปรียบเทียบระหว่างรถ ส่วนระยะทางต่อการชาร์จที่คุณใช้งานได้จริงอาจต่างออกไป การเลือก Long Range จึงควรพิจารณาเส้นทาง ความเร็ว และโอกาสชาร์จระหว่างวันด้วย</p>
        <p>กำลังสูงสุด 175 หรือ 250 kW ไม่ได้บอกเวลา 10–80% โดยตรง อัตราชาร์จขึ้นอยู่กับแบตเตอรี่ ระดับประจุ อุณหภูมิและสถานีที่ใช้ ตามคำอธิบายของ <a href={article.sources.supercharging} className="underline text-lime-800">Tesla เรื่อง Supercharging</a> จึงไม่ควรคำนวณเวลาทั้งช่วงจากค่ากำลังสูงสุดเพียงค่าเดียว</p>
        <p>สำหรับการชาร์จประจำวัน ให้ใช้ขีดจำกัดที่รถหรือแอปแนะนำสำหรับแบตเตอรี่ของรถคันนั้น ตาม <a href={article.sources.charging} className="underline text-lime-800">คำแนะนำการชาร์จที่บ้านของ Tesla</a> การเห็นชื่อรุ่น RWD อย่างเดียวไม่เพียงพอที่จะสรุปว่าเป็น LFP หรือควรชาร์จถึง 100% ทุกวัน</p>
      </section>
      <section id="model-years" className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 text-slate-600 leading-relaxed">
        <h2 className="text-2xl font-extrabold text-slate-900">ถ้ากำลังดู Highland ปีเก่าหรือรถมือสอง</h2>
        <p>ชื่อ Highland ไม่ได้ทำให้รถทุกคันมีสเปกเหมือนกัน รถ RWD, Long Range AWD และ Performance ที่จำหน่ายในช่วงก่อนหน้านี้อาจมีระยะวิ่ง อุปกรณ์และเงื่อนไขรับประกันต่างจากตารางรถใหม่ด้านบน ให้ตรวจรุ่น ปีผลิต เอกสารส่งมอบ และข้อมูลในหน้าจอรถประกอบกัน</p>
        <ul className="list-disc pl-5 space-y-2 text-sm"><li>จับคู่ราคาเข้ากับรุ่นและวันที่เสนอขาย อย่านำราคาโปรโมชันของรุ่นหนึ่งไปเป็นราคาเริ่มต้นของอีกรุ่น</li><li>ตรวจขนาดล้อ ช่วงล่าง จอหลัง ระบบเสียง และเบาะกับรถจริง โดยเฉพาะเมื่อมีการเปลี่ยนอุปกรณ์ภายหลัง</li><li>ถ้าต้องการทราบความจุหรือเคมีแบตเตอรี่ของคันใด ให้ยืนยันกับเอกสารหรือ Tesla โดยอ้างอิงรถคันนั้น</li><li>ก่อนเลือกพรม ถาดจัดระเบียบหรืออุปกรณ์เสริม ให้ตรวจปีผลิต รุ่นย่อยและรูปทรงชิ้นส่วนในรถไทย ชื่อ Highland เพียงอย่างเดียวไม่ยืนยันความพอดี</li></ul>
      </section>
      <section id="sources" className="mb-10 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-3"><BookOpen className="w-5 h-5 text-lime-700" /> แหล่งข้อมูลและวันที่ตรวจสอบ</h2>
        <p className="text-sm text-slate-600 mb-4">ตรวจสอบ {article.checkedLabel} ใช้หน้าเว็บไซต์ประเทศไทยสำหรับรุ่น ราคาและตัวเลขสเปก ข้อมูลอาจเปลี่ยนหลังวันที่นี้</p>
        <ul className="space-y-3 text-sm"><li><a className="underline text-lime-800" href={article.sources.design} target="_blank" rel="noopener noreferrer">Tesla ประเทศไทย — หน้าเลือกซื้อและเปรียบเทียบรุ่น</a>: ราคา 4 รุ่น อุปกรณ์ ลำโพง ล้อ เบาะและโช้คอัพ</li><li><a className="underline text-lime-800" href={article.sources.specs} target="_blank" rel="noopener noreferrer">Tesla ประเทศไทย — Model 3 และข้อมูลจำเพาะแต่ละรุ่น</a>: อัตราเร่ง ระยะวิ่ง กำลังชาร์จ และ Performance 460 แรงม้า</li><li><a className="underline text-lime-800" href={article.sources.charging} target="_blank" rel="noopener noreferrer">Tesla — การชาร์จที่บ้าน</a>: ขีดจำกัดการชาร์จตามแบตเตอรี่ของรถ</li><li><a className="underline text-lime-800" href={article.sources.supercharging} target="_blank" rel="noopener noreferrer">Tesla — Supercharging</a>: ปัจจัยที่มีผลต่อความเร็วการชาร์จ</li><li><a className="underline text-lime-800" href={article.sources.manual} target="_blank" rel="noopener noreferrer">คู่มือเจ้าของรถ Model 3</a>: ใช้ตรวจการทำงานและอุปกรณ์ของรถที่ครอบครอง</li></ul>
      </section>
      <footer className="flex flex-wrap justify-between items-center gap-4 border-t border-slate-200 pt-6"><ShareButton title={article.title} /><Link href="/articles/ev-damper-tuning-bump-rebound-guide" className="inline-flex items-center gap-2 text-sm font-semibold text-lime-800">อ่านคู่มือการปรับแดมเปอร์ <ArrowRight className="w-4 h-4" /></Link></footer>
    </article>
  );
}
