import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { zeekr7xArticle as article, zeekr7xSources as sources } from '@/lib/zeekr-7x-article';
import { thaiRoadsArticle as teslaPhoto } from '@/lib/thai-roads-article';

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
const specs = [
  ['ระบบขับเคลื่อน', 'ล้อหลัง', 'ล้อหลัง', 'สี่ล้อ'],
  ['กำลังสูงสุด', '310 kW / 416 hp', '310 kW / 416 hp', '475 kW / 637 hp'],
  ['แรงบิดสูงสุด', '440 Nm', '440 Nm', '710 Nm'],
  ['0–100 กม./ชม.', '6.0 วินาที', '6.0 วินาที', '3.8 วินาที'],
  ['แบตเตอรี่', '75 kWh · LFP', '100 kWh · NCM', '100 kWh · NCM'],
  ['ระยะทาง NEDC', '566 กม.', '730 กม.', '635 กม.'],
  ['น้ำหนักรถตามโบรชัวร์', '2,395 กก.', '2,415 กก.', '2,535 กก.'],
  ['ล้อและขนาดยาง', '19 นิ้ว · 255/50R19', '19 นิ้ว · 255/50R19', '21 นิ้ว Forged · 265/40R21'],
  ['ถุงลมพร้อม CCD', 'ไม่มี', 'ไม่มี', 'มี'],
  ['ชาร์จ AC สูงสุด', '22 kW', '22 kW', '22 kW'],
];

export default function Zeekr7XReviewPage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกรุ่น · ข้อมูลจาก ZEEKR ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>เห็น ZEEKR 7X รุ่นท็อป 637 hp พร้อมช่วงล่างถุงลมแล้วน่าสนใจ แต่ถ้าใช้เดินทางกับครอบครัว รุ่น Long Range ที่วิ่งได้ไกลกว่าตามมาตรฐาน NEDC อาจตอบโจทย์กว่า ความต่างของสามรุ่นไม่ได้มีแค่แรงม้า: แบตเตอรี่ ล้อ เบาะ และระบบเสียงก็เปลี่ยนด้วย บทนี้แยกให้เห็นว่าเงินที่เพิ่มซื้ออะไร และเรื่องไหนต้องไปลองกับรถจริงก่อนตัดสินใจ</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">อ้างอิงหน้า <Source href={sources.model}>สเปก ZEEKR 7X ประเทศไทย</Source> และโบรชัวร์ฉบับเดือนสิงหาคม 2025 ที่หน้าเว็บยังเชื่อมอยู่ ณ วันที่ตรวจ บทนี้เป็นการวิเคราะห์เอกสาร ยังไม่มีผลทดลองขับหรือชาร์จที่ทีมงานวัดเอง และไม่ได้ยืนยันว่ารถส่งมอบทุกล็อตใช้อุปกรณ์เหมือนกัน</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1920} height={1440} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">ภาพประกอบ ZEEKR 7X จากต่างประเทศ ใช้ดูรูปทรงรถ ไม่ยืนยันรุ่นย่อยหรืออุปกรณ์สเปกไทย ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ย่อขนาด</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="choose-trim">
        <h2 id="choose-trim" className={headingStyle}>เลือกรุ่นจากสิ่งที่ใช้ทุกวัน</h2>
        <div><h3 className="text-lg font-bold text-slate-950">Standard RWD: เริ่มที่ความต้องการพื้นฐาน</h3><p>แบตเตอรี่ 75 kWh แบบ LFP กำลัง 416 hp และล้อ 19 นิ้ว เหมาะใช้เป็นตัวตั้งในการเทียบใบเสนอราคา หากอุปกรณ์ของรุ่นนี้ครบที่ต้องการอยู่แล้ว ให้ถามว่าระยะทางและความสะดวกที่เพิ่มในรุ่นถัดไปจำเป็นกับชีวิตคุณแค่ไหน</p></div>
        <div><h3 className="text-lg font-bold text-slate-950">Long Range RWD: เน้นระยะทางและอุปกรณ์ห้องโดยสาร</h3><p>ขยับเป็นแบตเตอรี่ 100 kWh โดยยังใช้ขับหลัง 416 hp และล้อ 19 นิ้ว ระยะ NEDC มากที่สุดในสามรุ่น เพิ่ม AR HUD และระบบเสียง 21 ตำแหน่ง เป็นรุ่นที่ควรนำมาลองก่อน หากเดินทางบ่อยแต่ไม่ได้ต้องการกำลังของ AWD</p></div>
        <div><h3 className="text-lg font-bold text-slate-950">Performance AWD: ต้องการทั้งกำลังและช่วงล่างถุงลม</h3><p>กำลัง 637 hp ขับเคลื่อนสี่ล้อ ถุงลมพร้อม CCD และล้อ Forged 21 นิ้ว เป็นแพ็กเกจคนละแบบกับสองรุ่นขับหลัง ควรลองความสบายกับผู้โดยสารประจำ และขอราคายางขนาดที่ใช้ก่อนตัดสินใจเพิ่มงบ</p></div>
        <p className="text-sm leading-6">การเลือกข้างต้นเป็นข้อเสนอในการพิจารณาจากสเปก ไม่ใช่ผลจัดอันดับจากการทดลองขับ</p>
      </section>

      <section className="space-y-5" aria-labelledby="specification">
        <h2 id="specification" className={headingStyle}>เทียบสเปกไทยทั้งสามรุ่นให้ตรงคอลัมน์</h2>
        <p>ข้อมูลจาก <Source href={sources.brochure}>โบรชัวร์ ZEEKR 7X ไทย หน้า 3–4</Source> และหน้าโมเดลไทย ตัวเลขแรงม้าใช้ <strong>hp</strong> ตามหน้าเว็บ: 637 hp ไม่ใช่ 637 PS ส่วนอัตราเร่งและระยะทางด้านล่างเป็นค่าที่ผู้ผลิตระบุ</p>
        <p id="spec-scroll" className="text-sm leading-6 text-slate-500">บนมือถือ เลื่อนตารางในแนวนอนเพื่อดูให้ครบสามรุ่น</p>
        <div role="region" aria-label="ตารางเปรียบเทียบ ZEEKR 7X สามรุ่น" aria-describedby="spec-scroll" tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-lime-700">
          <table className="w-full min-w-[760px] text-left text-sm leading-6">
            <caption className="sr-only">สเปก ZEEKR 7X ประเทศไทยจากเอกสารผู้ผลิต ไม่ใช่ผลทดสอบของ <BrandHomeLink /></caption>
            <thead className="bg-slate-900 text-white"><tr><th scope="col" className="p-4">รายการ</th><th scope="col" className="p-4">Standard RWD</th><th scope="col" className="p-4">Long Range RWD</th><th scope="col" className="p-4">Performance AWD</th></tr></thead>
            <tbody>{specs.map(([label, ...values]) => <tr key={label} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-4 font-semibold text-slate-900">{label}</th>{values.map((value, index) => <td key={index} className="p-4">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p><strong>NEDC เป็นระยะทางจากมาตรฐานทดสอบ</strong> ใช้เปรียบเทียบตัวเลขบนฐานเดียวกัน ไม่ใช่คำรับรองว่าจะขับทางด่วนได้เท่านั้นทุกครั้ง บทนี้ยังไม่มีข้อมูลการใช้ไฟจริงบนเส้นทางเดียวกันของทั้งสามรุ่น จึงไม่แปลงเป็นระยะทางใช้งานด้วยเปอร์เซ็นต์ตายตัว</p>
      </section>

      <section className="space-y-5" aria-labelledby="weight-and-tyres">
        <h2 id="weight-and-tyres" className={headingStyle}>2,535 กก. กับ 637 hp ทำให้เรื่องยางสำคัญอย่างไร</h2>
        <p>น้ำหนัก <strong>2,535 กก.</strong> เป็นตัวเลขรถรุ่น Performance AWD ในโบรชัวร์ ไม่ใช่น้ำหนักบรรทุกสูงสุด และไม่ใช่น้ำหนักที่ยางทุกเส้นรับเท่ากันเสมอ รุ่นนี้ระบุยาง <strong>265/40R21</strong> ส่วนรุ่นขับหลังใช้ 255/50R19 จึงไม่ควรเลือกซื้อจากคำว่า “ยางสำหรับ 7X” เพียงอย่างเดียว</p>
        <p>เริ่มจากป้ายประจำรถและคู่มือของรถคันนั้น ตรวจขนาด ดัชนีรับน้ำหนักหรือ Load Index พิกัดความเร็ว และแรงดันที่กำหนด ขอรหัสยางเต็มจากร้าน รวมถึงเครื่องหมาย XL หรือ HL ถ้ามี <Source href={sources.tyres}>คำอธิบายยางรับน้ำหนักสูงของ Michelin</Source> ช่วยแยกความหมายของเครื่องหมายเหล่านี้ แต่ไม่ได้เป็นใบรับรองว่ายางทุกรุ่นในหมวดนั้นใส่กับ 7X ได้</p>
        <p>ไม่มีสูตรแปลงแรงม้าเป็น Load Index และการเอาน้ำหนักรถหารสี่ไม่พอสำหรับเลือกยาง เพราะยังต้องคำนึงถึงการบรรทุกและข้อกำหนดของแต่ละเพลา อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางและคอยล์โอเวอร์สำหรับ EV แรงและหนัก</Link> เพื่อเตรียมข้อมูลให้ร้านตรวจความเหมาะสมก่อนซื้อ</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={teslaPhoto.image} alt="Tesla Model 3 Performance ปี 2024 สีเทา เห็นตัวรถและล้อ เป็นตัวอย่างรถอีกแบบที่ต้องตรวจสเปกยางแยกตามรุ่น" width={1280} height={640} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">Model 3 Performance เป็นอีกตัวอย่างในคู่มือเลือกยาง รูปรถทั้งสองช่วยเห็นบริบทการใช้งาน แต่ใช้ยืนยันขนาดหรือพิกัดยางแทนคู่มือไม่ได้ ภาพปี 2024: <Source href={teslaPhoto.imageSource}>iMoD Official / Wikimedia Commons</Source> · <Source href={teslaPhoto.imageLicenseUrl}>CC BY 3.0</Source> · ย่อขนาด ไม่ใช่ภาพทดสอบของทีมงาน</figcaption>
        </figure>
      </section>

      <section className="space-y-5" aria-labelledby="suspension">
        <h2 id="suspension" className={headingStyle}>ถุงลมพร้อม CCD มีเฉพาะ Performance AWD</h2>
        <p>โบรชัวร์ไทยระบุช่วงล่างหน้าดับเบิลวิชโบนและหลังมัลติลิงก์ทั้งสามรุ่น แต่แถว <strong>ถุงลมพร้อม CCD</strong> ทำเครื่องหมายเฉพาะ Performance AWD จึงไม่ควรนำคำบรรยายความสามารถของรุ่นท็อปไปใช้แทน Long Range หรือ Standard</p>
        <p>ถุงลมเป็นส่วนของสปริง ส่วนการควบคุมแรงหน่วงเป็นหน้าที่ของแดมเปอร์ ทั้งสองทำงานร่วมกัน แต่มีบทบาทต่างกัน อ่าน <Link href="/articles/shock-absorber-types-monotube-twintube-air-ev" className={linkStyle}>ความต่างของโช้ค ระบบปรับแรงหน่วง และถุงลม</Link> ก่อนตัดสินความนุ่มจากชื่ออุปกรณ์</p>
        <p>ถ้าจะลองขับ ควรนั่งเบาะหลังด้วย ใช้เส้นทางที่ได้รับอนุญาตและใกล้เคียงการใช้ประจำ สังเกตจังหวะกระแทกกับจังหวะที่ตัวรถยังเคลื่อนไหวต่อหลังผ่านรอยต่อ แยกสองอาการนี้ไว้คุยกับผู้ขายได้จาก <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>คู่มือประเมินอาการช่วงล่างบนถนนไทย</Link> โดยไม่ต้องทดลองใช้ความเร็วสูง</p>
      </section>

      <section className="space-y-5" aria-labelledby="cabin">
        <h2 id="cabin" className={headingStyle}>อุปกรณ์ที่ต้องลอง ไม่ใช่ดูแค่จำนวน</h2>
        <p>ทั้งสามรุ่นมีจอกลาง Mini LED 16 นิ้ว, Snapdragon 8295 และรองรับ Apple CarPlay กับ Android Auto ตามโบรชัวร์ ส่วนรายการที่ต่างกันและควรเช็กกับรถคันจริงมีดังนี้</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>ระบบเสียง:</strong> Standard มี 10 ตำแหน่ง ส่วน Long Range และ Performance มี Sound Pro 21 ตำแหน่ง ลองเพลงที่ฟังประจำในระดับเสียงใช้งานจริง</li>
          <li><strong>AR HUD:</strong> จอแสดงข้อมูลบนกระจกหน้าขนาดที่ผู้ผลิตระบุ 36.21 นิ้ว มีใน Long Range และ Performance ลองปรับท่านั่งและใส่แว่นที่ใช้ขับรถดูด้วย</li>
          <li><strong>เบาะ:</strong> Standard ใช้ Soft PU เบาะคนขับปรับ 14 ทิศทาง ผู้โดยสารหน้า 10 ทิศทาง; Long Range เพิ่มระบบนวดและระบายอากาศคู่หน้า พร้อมปรับ 14 ทิศทางทั้งคู่; Performance ใช้ NAPPA พร้อมชุดปรับ นวด และระบายอากาศคู่หน้า</li>
          <li><strong>ประตูและม่านหลัง:</strong> ประตูไฟฟ้าและม่านไฟฟ้ากระจกด้านข้างผู้โดยสารหลังอยู่ใน Performance อย่าเหมารวมกับม่านหลังคาที่โบรชัวร์ระบุว่ามีทั้งสามรุ่น</li>
        </ul>
        <p>รถยาว 4,787 มม. กว้าง 1,930 มม. และฐานล้อ 2,900 มม. ตาม <Source href={sources.model}>มิติตัวถัง ZEEKR 7X</Source> ก่อนจองควรลองทางเข้าที่จอด การเปิดประตู และพื้นที่สำหรับเบาะเด็กหรือสัมภาระที่ใช้จริง แค่เห็นตัวเลขฐานล้อยังตอบแทนความสะดวกของครอบครัวไม่ได้</p>
      </section>

      <section className="space-y-5" aria-labelledby="charging">
        <h2 id="charging" className={headingStyle}>800V และ AC 22 kW: ต้องดูระบบที่ใช้ชาร์จด้วย</h2>
        <p>โบรชัวร์ไทยระบุสถาปัตยกรรม 800V และรองรับ AC 22 kW ทั้งสามรุ่น แต่กำลังที่รับได้ของรถไม่เท่ากับกำลังที่จะได้จากทุกจุดชาร์จ ก่อนซื้อ Wallbox ให้ผู้ติดตั้งตรวจระบบไฟบ้าน ตู้ชาร์จ สาย และการป้องกันให้รองรับร่วมกัน</p>
        <p>สำหรับ DC เอกสารสเปกไทยที่อ้างในบทนี้ยังไม่แสดงกำลังสูงสุดแยกรุ่นและเงื่อนไขเวลาชาร์จ 10–80% ครบพอจะยืนยันตัวเลขเดียวให้ทุกคัน จึงยังไม่รับรองคำว่า “420 kW ทุกสถานี” หรือเวลาชาร์จตายตัว ควรขอข้อมูลของรุ่นที่จะซื้อ พร้อมเงื่อนไขแบตเตอรี่และสถานีที่ใช้วัด</p>
        <p>หากกำลังเปรียบเทียบ 75 kWh LFP กับ 100 kWh NCM ให้แยกคำถามเรื่องระยะเดินทางออกจากวิธีดูแล อ่าน <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลและชาร์จแบตเตอรี่ EV</Link> แล้วใช้คู่มือของรถคันจริงเป็นหลักในการตั้งระดับชาร์จ</p>
      </section>

      <section className="space-y-5" aria-labelledby="safety">
        <h2 id="safety" className={headingStyle}>ระบบช่วยขับ: เช็กวิธีใช้และข้อจำกัดตอนรับรถ</h2>
        <p>โบรชัวร์หน้า 4 ระบุ ACC, AEB, ระบบช่วยรักษากึ่งกลางเลน LCC และระบบช่วยเปลี่ยนเลน ALC ทั้งสามรุ่น รวมถึงถุงลมนิรภัย 7 จุด การมีชื่อฟังก์ชันในรายการอุปกรณ์ไม่ได้เป็นผลทดสอบว่าระบบจะตรวจจับทุกเหตุการณ์ได้</p>
        <p>ให้ผู้ส่งมอบสาธิตการเปิด–ปิดและอธิบายสัญญาณเตือนกับข้อจำกัดจากคู่มือ รักษาความรับผิดชอบในการควบคุมรถไว้กับผู้ขับ ไม่ใช้การทดลองปล่อยมือหรือสร้างสถานการณ์เสี่ยงเพื่อพิสูจน์ระบบ</p>
      </section>

      <section className="space-y-5" aria-labelledby="price">
        <h2 id="price" className={headingStyle}>ราคาและการรับประกัน: ขอเงื่อนไขเป็นลายลักษณ์อักษร</h2>
        <p>หน้าโมเดลของ ZEEKR ประเทศไทยที่ตรวจวันที่ 23 กันยายน 2569 แสดงราคาเริ่มต้น <strong>1,399,000 บาท</strong> ตัวเลขนี้เป็นราคาที่หน้าเว็บแสดง ไม่ใช่ใบเสนอราคาของรถทุกล็อต ส่วนหน้า <Source href={sources.offers}>ข้อเสนอจาก ZEEKR ประเทศไทย</Source> ที่ตรวจยังมีรายการลงวันที่ 1–31 สิงหาคม 2569 จึงไม่ควรถือว่าของแถมหรือเงื่อนไขเดือนนั้นยังใช้ได้ในวันนี้</p>
        <p>โบรชัวร์อ้างการรับประกันรถ 5 ปีหรือ 150,000 กม. และมอเตอร์ขับเคลื่อนกับแบตเตอรี่แรงดันสูง 8 ปีหรือ 180,000 กม. แล้วแต่อย่างใดถึงก่อน ควรขอสมุดรับประกันและเงื่อนไขของรถที่จะซื้อ เพื่อดูข้อยกเว้น การบำรุงรักษา และผลของการเปลี่ยนอุปกรณ์</p>
        <ol className="list-decimal space-y-3 pl-6 marker:font-bold">
          <li>ชื่อรุ่น ปีผลิต และรายการอุปกรณ์ของรถที่จะส่งมอบตรงกับที่ลองหรือไม่?</li>
          <li>ราคาสุทธิรวมสีรถ ประกันภัย และค่าใช้จ่ายวันรับรถเท่าไร?</li>
          <li>ถ้ามี Wallbox รวมอยู่ รุ่นอะไร กำลังเท่าไร และครอบคลุมงานติดตั้งส่วนใด?</li>
          <li>ยางรหัสเดิมและชิ้นส่วนช่วงล่างมีค่าเปลี่ยนเท่าไร และรับประกันอย่างไร?</li>
          <li>ศูนย์ที่สะดวกเข้ารับบริการอยู่ที่ไหน นัดตรวจหรือขอความช่วยเหลือผ่านช่องทางใด?</li>
        </ol>
      </section>

      <section className="space-y-4 rounded-2xl bg-slate-50 p-5 sm:p-7" aria-labelledby="conclusion">
        <h2 id="conclusion" className={headingStyle}>รุ่นที่ควรลองก่อน ขึ้นอยู่กับโจทย์ของคุณ</h2>
        <p>ถ้าเดินทางบ่อยและไม่ได้ต้องการ AWD เริ่มลอง Long Range RWD เพื่อประเมินระยะทางกับอุปกรณ์ที่เพิ่มมา หากต้องการ 637 hp พร้อมถุงลม ให้ลอง Performance กับผู้โดยสารประจำและเทียบค่าใช้จ่ายยางด้วย ส่วนคนที่ Standard ให้ทุกอย่างครบแล้ว ไม่จำเป็นต้องเพิ่มงบเพียงเพราะมีรุ่นท็อปให้เลือก</p>
        <p>บทนี้ช่วยจัดคำถามจากสเปกที่ตรวจสอบได้ ส่วนความสบาย ระยะทางจริง และเวลาชาร์จบนเส้นทางของคุณยังต้องมีข้อมูลเพิ่ม <BrandHomeLink /> ยังไม่มีบันทึกการทดสอบรถสามรุ่นบนเงื่อนไขเดียวกัน จึงไม่ให้คะแนนขับขี่หรือประกาศรุ่นที่ดีที่สุดแทนผลทดสอบ</p>
      </section>

      <aside className="space-y-4 rounded-2xl border border-lime-200 p-5 sm:p-7" aria-label="สถานะการเตรียมเปิดตัว">
        <p className="font-bold text-slate-950"><BrandHomeLink /> — เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม</p>
        <p>ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน ข้อมูลในบทนี้ใช้ประกอบการศึกษา การเลือกอุปกรณ์ต้องตรวจรถจริงและสเปกก่อนเสมอ</p>
        <Link href="/articles" className={linkStyle}>เลือกอ่านบทความ EV ตามเรื่องที่กำลังตัดสินใจ</Link>
      </aside>
    </div>
  </article>;
}
