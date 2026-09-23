import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { teslaModelYLArticle as article, teslaModelYLSources as sources } from '@/lib/tesla-model-y-l-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1920, height: 1440, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};
export default function TeslaModelYLArticlePage() {
  const rows = [
    ['ที่นั่ง', '6 ที่นั่ง ใน 3 แถว'],
    ['ระบบขับเคลื่อน', 'มอเตอร์คู่ AWD'],
    ['0–100 กม./ชม.', '5.0 วินาที'],
    ['ระยะทาง WLTP', '681 กม.'],
    ['น้ำหนักที่หน้ารุ่นระบุ', '2,088 กก.'],
    ['ล้อ', '19 นิ้ว'],
    ['หน้าจอ', 'กลาง 16 นิ้ว / หลัง 8 นิ้ว'],
    ['Supercharging สูงสุด', '250 kW'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · Tesla Model Y L ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>เพิ่มเบาะเป็น 6 ที่นั่งแล้ว จะพาครอบครัวกับกระเป๋าไปด้วยกันได้พอดีหรือเปล่า? นี่คือคำถามที่ควรลองกับ Model Y L ก่อนดูตัวเลขอัตราเร่ง เบาะแถวสองแยกอิสระน่าสนใจ แต่ความสะดวกจริงขึ้นกับคนที่นั่งแถวสาม คาร์ซีต และสัมภาระที่คุณใช้ บทนี้พาอ่านสเปกไทย พร้อมสิ่งที่ควรนำไปลองในรถก่อนจอง</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">ตรวจ <Source href={sources.model}>สเปก Model Y L Premium บน Tesla ประเทศไทย</Source> โดยเลือกแท็บ Model Y L และคู่มือเจ้าของรถ วันที่ 23 กันยายน 2569 บทนี้วิเคราะห์ข้อมูลผู้ผลิต ยังไม่มีผลทดสอบรถรุ่นนี้ของทีมงานสำหรับให้คะแนนหรือยืนยันความสบายจริง</p>
    </header>
    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1920} height={1440} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Model Y L ภาพต่างประเทศ วันที่ 25 ธันวาคม 2025 ใช้ประกอบรูปทรงตัวรถ ไม่ยืนยันอุปกรณ์รถไทยหรือผลทดลองขับ ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ย่อขนาดจากต้นฉบับ</figcaption>
    </figure>
    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="thai-specs">
        <h2 id="thai-specs" className={headingStyle}>อ่านสเปกให้ตรงกับรุ่น L 6 ที่นั่ง</h2>
        <p>หน้ารุ่นของ Tesla รวม Model Y หลายแบบไว้ด้วยกัน ตัวเลขของรุ่น 5 ที่นั่งจึงไม่ควรถูกนำมาใช้แทนรุ่น L ตารางนี้ยึดแท็บ Model Y L Premium ของตลาดไทย ณ วันที่ตรวจ</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-bold text-slate-950">ข้อมูลผู้ผลิต ไม่ใช่ผลทดสอบของทีมงาน</caption>
            <thead className="bg-slate-950 text-white"><tr><th scope="col" className="w-1/2 p-4">รายการ</th><th scope="col" className="p-4">Model Y L Premium</th></tr></thead>
            <tbody>{rows.map(([label, value], i) => <tr key={label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}><th scope="row" className="border-t border-slate-200 p-4 font-semibold">{label}</th><td className="border-t border-slate-200 p-4">{value}</td></tr>)}</tbody>
          </table>
        </div>
        <p>681 กม. เป็นระยะมาตรฐาน WLTP ไม่ใช่ระยะที่รับประกันสำหรับทริปของคุณ ส่วนกำลังมอเตอร์เป็นแรงม้าและความจุแบตเตอรี่ไม่ได้แสดงในตารางหน้ารุ่นที่ตรวจ จึงไม่เติมตัวเลขจากรถตลาดอื่น หากกำลังเทียบกับรถ 5 ที่นั่งอย่าง <Link href="/articles/zeekr-7x-2026-review" className={linkStyle}>ZEEKR 7X สเปกไทย</Link> ให้ตัดสินเรื่องจำนวนที่นั่งที่ต้องใช้ก่อนเทียบความแรง</p>
      </section>
      <section className="space-y-5" aria-labelledby="seats-and-family">
        <h2 id="seats-and-family" className={headingStyle}>พาคนที่จะนั่งแถวสามไปลองด้วย</h2>
        <p>Tesla ระบุเบาะสามแถว 2+2+2 โดยแถวสองเป็น Captain Seat หรือเบาะแยกอิสระ มีที่วางแขนไฟฟ้าและระบบระบายอากาศ จุดที่ต้องลองคือเมื่อคนนั่งแถวสองจัดท่านั่งที่สบายแล้ว คนแถวสามยังวางเท้า นั่งหลังตรง และคาดเข็มขัดได้พอดีหรือไม่ ไม่ควรใช้ส่วนสูงตัวเลขเดียวตัดสินแทนทุกคน</p>
        <p>ลองขึ้นลงรถเมื่อมีคาร์ซีตติดอยู่ และให้ผู้ที่จะนั่งประจำลองสั่งงานเบาะกับแอร์หลังด้วย อ่าน <Source href={sources.seats}>วิธีปรับเบาะ Model Y แบบ 6 ที่นั่ง</Source> ก่อนใช้ระบบพับไฟฟ้า โดยตรวจคนและสิ่งของรอบเบาะก่อนเคลื่อน หากมีเด็ก ให้เลือกตำแหน่งและวิธีติดตั้งตาม <Source href={sources.childSeats}>คู่มือคาร์ซีตของ Tesla สำหรับรุ่น 6 ที่นั่ง</Source> และคู่มือคาร์ซีตรุ่นนั้น</p>
      </section>
      <section className="space-y-5" aria-labelledby="cargo">
        <h2 id="cargo" className={headingStyle}>2,539 ลิตร ไม่ใช่พื้นที่กระเป๋าเมื่อนั่งครบหกคน</h2>
        <p><Source href={sources.dimensions}>คู่มือมิติและพื้นที่เก็บของ Model Y L</Source> แยกชัดว่า 2,539 ลิตรเป็นปริมาตรสูงสุดเมื่อมีเพียงผู้ขับกับผู้โดยสารหน้าและพับเบาะแถวสอง–สาม เมื่อใช้เบาะครบ พื้นที่หลังแถวสามระบุ 420 ลิตร ส่วนช่องเก็บของหน้า 116 ลิตร รวมเป็น 536 ลิตรตามวิธีนับในคู่มือ</p>
        <p>ตัวเลขลิตรไม่ได้บอกว่ากระเป๋าใบใหญ่หรือรถเข็นเด็กของคุณจะวางผ่านช่องท้ายได้พอดี นำของจริงไปทดลองจัดโดยยังเปิดใช้ที่นั่งครบ และอย่าลืมเผื่อของที่ต้องหยิบระหว่างทาง</p>
        <p>ตัวรถยาวประมาณ 5 เมตร คู่มือระบุฐานล้อ 3,040 มม. และความกว้างรวมกระจก 2,129 มม. ควรลองเข้าช่องจอด เปิดประตูและยกฝาท้ายในพื้นที่ใกล้เคียงบ้านจริง ความยาวในหน้ารุ่นระบุ 4,969 มม. ขณะที่คู่มือระบุ 4,976 มม. จึงควรยืนยันมิติกับรถคันที่จะรับเมื่อพื้นที่จอดมีระยะเผื่อน้อย</p>
      </section>
      <section className="space-y-5" aria-labelledby="screens">
        <h2 id="screens" className={headingStyle}>หน้าจอต้องใช้คล่องทั้งคนขับและคนนั่งหลัง</h2>
        <p>ข้อมูลไทยระบุจอกลาง 16 นิ้วและจอหลัง 8 นิ้ว ก่อนซื้อให้ลองปรับแอร์ ควบคุมเบาะ วางเส้นทางชาร์จ และใช้งานโทรศัพท์ของคุณจากรถจริง ฟีเจอร์หรือบริการที่ชอบควรตรวจว่ารวมอยู่กับรถ ต้องสมัครเพิ่ม หรือขึ้นกับซอฟต์แวร์ใด</p>
        <p className="text-sm leading-6 text-slate-500">ภาพต่อไปเป็นรถพวงมาลัยซ้ายในฟิลิปปินส์ ใช้อธิบายตำแหน่งจอและคอนโซลเท่านั้น รถไทยเป็นพวงมาลัยขวาและต้องตรวจอุปกรณ์กับคันจริง</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src="/images/reviews/tesla-model-y-l-interior-ph-2026.jpg" alt="จอกลางและคอนโซล Model Y L พวงมาลัยซ้ายในฟิลิปปินส์ เดือนเมษายน 2026" width={1280} height={853} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">ห้องโดยสารรถต่างประเทศ วันที่ 18 เมษายน 2026 ภาพ: <Source href={sources.cabin}>Ethan Llamas / Wikimedia Commons</Source> · <Source href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Source> · ใช้ภาพย่อ ไม่ใช่ภาพทดสอบของทีมงาน</figcaption>
        </figure>
      </section>
      <section className="space-y-5" aria-labelledby="ride-and-tyres">
        <h2 id="ride-and-tyres" className={headingStyle}>ลองช่วงล่างพร้อมผู้โดยสาร ก่อนคิดเปลี่ยนล้อ</h2>
        <p>Tesla ระบุระบบกันสะเทือนแบบปรับได้และโช้คอัพควบคุมด้วยไฟฟ้าสำหรับรุ่น L แต่ชื่อระบบยังบอกไม่ได้ว่าทุกคนในรถจะชอบความนุ่มระดับเดียวกัน ทดลองรุ่นและล้อที่จะซื้อบนรอยต่อถนน พร้อมผู้โดยสารประจำ แล้วอ่าน <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>วิธีแยกอาการช่วงล่างบนถนนไทย</Link> เพื่ออธิบายสิ่งที่รู้สึกให้ตรงกัน</p>
        <p>น้ำหนัก 2,088 กก. ที่หน้ารุ่นระบุยังไม่ใช่น้ำหนักพร้อมคนและกระเป๋าทั้งทริป หากเปลี่ยนยาง อย่าเลือกจากขนาดล้อหรือแรงม้าอย่างเดียว ให้ตรวจข้อกำหนดรถและพิกัดยางตาม <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>คู่มือเลือกยางสำหรับ EV หนักและแรง</Link> ส่วนแดมเปอร์ควบคุมการเคลื่อนตัวของช่วงล่าง อ่านหลักการต่อใน <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>บทความ Bump และ Rebound</Link> โดยไม่ใช้แทนขั้นตอนปรับระบบของ Tesla</p>
      </section>
      <section className="space-y-5" aria-labelledby="charging-and-decision">
        <h2 id="charging-and-decision" className={headingStyle}>ให้แผนชาร์จและของที่ต้องขนเป็นตัวตัดสิน</h2>
        <p>กำลัง Supercharging สูงสุด 250 kW ไม่ได้คงที่ตลอดการชาร์จ Tesla อ้างเพิ่มระยะได้สูงสุด 288 กม. ใน 15 นาทีโดยอิงข้อมูลความเร็วคงที่ จึงไม่ควรแปลเป็นเวลาชาร์จ 10–80% หรือระยะทางที่ทุกทริปจะได้เท่ากัน วางจุดพักและจุดชาร์จสำรอง พร้อมอ่าน <Link href="/articles/ev-battery-care" className={linkStyle}>การดูแลแบตเตอรี่และวางแผนชาร์จ EV</Link> ประกอบคู่มือรถ</p>
        <p>Model Y L น่าลองหากคุณต้องใช้หกที่นั่งและชอบเบาะแถวสองแยกกัน ส่วนครอบครัวที่ขนของชิ้นใหญ่พร้อมผู้โดยสารครบทุกทริปควรทดลองจัดของให้ผ่านก่อนตัดสินใจ ตรวจ <Source href={sources.configure}>ราคาและอุปกรณ์ Model Y L ในหน้าจัดสเปก Tesla ไทย</Source> พร้อมเงื่อนไขรับประกันและบริการที่เลือกรวมกัน บทนี้ไม่ยืนยันราคาสุทธิหรือโปรโมชันแทนใบเสนอราคาในวันซื้อ</p>
      </section>
    </div>
    <aside aria-label="สถานะการเปิดตัวสินค้า" className="mt-12 space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7">
      <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      <p><Link href="/articles" className={linkStyle}>อ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>บอกรุ่นรถและสิ่งที่อยากให้เราศึกษาเพิ่ม</Link></p>
    </aside>
  </article>;
}