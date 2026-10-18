import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BrandHomeLink from '@/components/BrandHomeLink';
import ImageMetadata from '@/components/ImageMetadata';
import { withPublicMetadata } from '@/lib/public-metadata';
import { editorialOrganization } from '@/lib/site-identity';
import { mgIm5Article as article, mgIm5Sources as sources } from '@/lib/mg-im5-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'scroll-mt-28 text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
function Photo({ src, alt, width, height, preload = false }: { src: string; alt: string; width: number; height: number; preload?: boolean }) {
  return <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
    <Image src={src} alt={alt} width={width} height={height} preload={preload} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
  </figure>;
}

export const metadata: Metadata = withPublicMetadata(article.path, {
  title: 'รีวิว MG IM5 สเปกไทย ราคา จุดเด่นและข้อควรรู้ | EVSELECTS',
  description: article.description, alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: `https://evselects.com${article.path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECTS', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1440, height: 849, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
});
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: `https://evselects.com${article.image}`, datePublished: article.publishedAt, dateModified: article.updatedAt,
  inLanguage: 'th-TH', author: editorialOrganization,
  publisher: { ...editorialOrganization, logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://evselects.com${article.path}` },
};
const specs = [
  ['ระบบขับเคลื่อน', 'มอเตอร์เดี่ยว ขับเคลื่อนล้อหลัง', sources.launch],
  ['กำลัง / แรงบิด', '407 แรงม้าตามที่แหล่งข้อมูลระบุ / 500 นิวตันเมตร', sources.launch],
  ['แบตเตอรี่', '100 kWh', sources.model],
  ['ระยะทางต่อการชาร์จ', 'สูงสุด 860 กม. ตามมาตรฐาน NEDC', sources.model],
  ['สถาปัตยกรรมไฟฟ้า / DC สูงสุด', '800V / 396 kW', sources.launch],
  ['ชาร์จ 10–80%', 'แหล่งข้อมูลระบุเวลาน้อยกว่า 18 นาที', sources.launch],
  ['ระบบบังคับเลี้ยว', 'เลี้ยว 4 ล้อ รัศมีวงเลี้ยว 4.99 เมตร', sources.model],
  ['หน้าจอ', '26.3 นิ้ว และจอควบคุมกลาง 10.5 นิ้ว', sources.model],
];
const sections = [['drive', 'ทดลองขับบนถนนไทย'], ['price', 'ราคาไทย'], ['specs', 'สเปกสำคัญ'], ['steering', 'เลี้ยว 4 ล้อ'], ['range', 'ระยะทางและแบตเตอรี่'], ['charging', 'การชาร์จ'], ['interior', 'ห้องโดยสาร'], ['warranty', 'รับประกัน'], ['verdict', 'เหมาะกับใคร'], ['faq', 'คำถามที่พบบ่อย']];

export default function MgIm5ReviewPage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <ImageMetadata pagePath={article.path} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="เส้นทางบทความ" className="mb-7"><Link href="/articles" className={linkStyle}>← บทความและรีวิวรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">รีวิวรถ EV · MG IM5 Premium Long Range ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{article.title}</h1>
      <p className="text-lg leading-9">MG IM5 น่าสนใจสำหรับคนที่กำลังมองหาซีดานไฟฟ้าที่เน้นแบตเตอรี่ขนาดใหญ่ เทคโนโลยีช่วยจอด และการใช้งานในชีวิตประจำวัน แต่ก่อนตัดสินใจ ควรดูทั้งการควบคุมผ่านหน้าจอ ความสบายบนถนนที่ใช้จริง และจุดชาร์จตามเส้นทางประจำ</p>
      <p className="text-sm text-slate-500">เรียบเรียงโดย <BrandHomeLink /> · ตรวจข้อมูล <time dateTime="2026-10-18">18 ตุลาคม 2569</time> · อ่านประมาณ {article.readTime}</p>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7">
        <p><Link href="/" className={linkStyle}>EVSELECTS.COM</Link> ได้ทดลองขับ MG IM5 บนถนนไทยแล้ว บทความฉบับนี้เน้นข้อมูลสเปกไทยและประเด็นก่อนซื้อ ความเห็นเรื่องช่วงล่าง พวงมาลัย และอัตราเร่งในหัวข้อทดลองขับเป็นความรู้สึกของผู้ขับ ส่วนวันที่ เส้นทาง และสภาพการทดสอบยังรอระบุเพิ่มเติม ตัวเลขระยะทาง สมรรถนะ และเวลาชาร์จด้านล่างเป็นข้อมูลที่แหล่งอ้างอิงประกาศ ไม่ใช่ผลวัดจากการทดลองขับของเรา</p>
      </div>
      <Photo src={article.image} alt={article.imageAlt} width={1440} height={849} preload />
    </header>
    <nav aria-label="สารบัญบทความ" className="my-8 rounded-2xl border border-slate-200 p-5"><p className="mb-3 font-bold text-slate-900">เลือกอ่านหัวข้อ</p><ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">{sections.map(([id, title]) => <li key={id}><a href={`#${id}`} className={linkStyle}>{title}</a></li>)}</ul></nav>
    <div className="space-y-12">
      <section className="space-y-4" aria-labelledby="drive">
        <h2 id="drive" className={headingStyle}>ทดลองขับบนถนนไทย: เร่งดี แต่ช่วงล่างและพวงมาลัยยังไม่ใช่จุดเด่น</h2>
        <p>จากการทดลองขับของ <Link href="/" className={linkStyle}>EVSELECTS.COM</Link> ความรู้สึกที่ได้คือ <strong>ช่วงล่างอยู่ในระดับพอใช้ แต่ยังไม่รู้สึกหนึบมาก พวงมาลัยค่อนข้างเบาและการตอบสนองยังไม่คมเท่าที่คาด ส่วนอัตราเร่งทำได้ดี</strong></p>
        <p>สำหรับคนที่ชอบฟีลรถแน่น ๆ และพวงมาลัยที่ตอบสนองคมชัด สองจุดนี้ควรลองให้ตรงความชอบก่อนตัดสินใจ ขณะที่คนให้ความสำคัญกับการเร่งตอบสนอง อัตราเร่งเป็นด้านที่ผู้ขับรู้สึกดีในการทดลองครั้งนี้</p>
        <p className="text-sm leading-7 text-slate-500">นี่เป็นความเห็นเชิงความรู้สึกจากผู้ขับ ไม่ใช่ผลวัดอัตราเร่งหรือการทดสอบการยึดเกาะ วันที่ เส้นทาง รุ่นย่อยของรถทดสอบ ล้อและยาง โหมดขับ และน้ำหนักบรรทุกยังรอระบุเพิ่มเติม จึงไม่ใช้ข้อสังเกตนี้ตัดสินสมรรถนะหรือความปลอดภัยของรถทุกสภาพการใช้งาน</p>
      </section>
      <section className="space-y-4" aria-labelledby="price">
        <h2 id="price" className={headingStyle}>MG IM5 ราคาเท่าไรในประเทศไทย?</h2>
        <p>รุ่น Premium Long Range มีราคาปกติ <strong>1,549,900 บาท</strong> และราคาพิเศษ <strong>1,499,900 บาท</strong> ตามแคมเปญสำหรับลูกค้าที่จองและรับรถระหว่างวันที่ <strong>1–31 ตุลาคม 2569</strong> ภายใต้เงื่อนไขของบริษัท จึงควรตรวจใบเสนอราคาปัจจุบัน ไม่ใช้ราคาเปิดตัวหรือโปรโมชันเก่ามาเทียบโดยตรง <Source href={sources.promotion}>ราคาและเงื่อนไขแคมเปญ MG IM5</Source></p>
      </section>
      <section className="space-y-4" aria-labelledby="specs">
        <h2 id="specs" className={headingStyle}>สเปก MG IM5 รุ่นไทย มีอะไรน่าสนใจ?</h2>
        <p>ตารางนี้สรุปข้อมูล Premium Long Range ตลาดไทย คำว่า “ข้อมูลประกาศ” หมายถึงตัวเลขจากแหล่งอ้างอิง ยังไม่ใช่ผลวัดอิสระของ <BrandHomeLink /></p>
        <p className="text-sm text-slate-500 sm:hidden">เลื่อนตารางในแนวนอนเพื่ออ่านแหล่งข้อมูลและสถานะ →</p>
        <div role="region" aria-label="ตารางสเปก MG IM5 เลื่อนแนวนอนได้" tabIndex={0} className="overflow-x-auto rounded-xl border border-slate-200 focus-visible:outline-2">
          <table className="w-full min-w-[640px] text-left text-sm leading-6"><caption className="sr-only">สเปก MG IM5 Premium Long Range ตลาดไทย ตรวจวันที่ 18 ตุลาคม 2569</caption><thead className="bg-slate-100 text-slate-950"><tr>{['รายการ', 'ข้อมูลที่ประกาศ', 'แหล่งข้อมูล', 'สถานะ'].map(x => <th key={x} scope="col" className="p-4">{x}</th>)}</tr></thead><tbody>{specs.map(([name, value, source]) => <tr key={name} className="border-t border-slate-200"><th scope="row" className="p-4 font-medium">{name}</th><td className="p-4">{value}</td><td className="p-4"><Source href={source}>{source === sources.model ? 'MG Thailand' : 'Motor Show 2026'}</Source></td><td className="p-4">ข้อมูลประกาศ</td></tr>)}</tbody></table>
        </div>
      </section>
      <section className="space-y-4" aria-labelledby="steering">
        <h2 id="steering" className={headingStyle}>เลี้ยว 4 ล้อและระบบช่วยจอด มีประโยชน์ตรงไหน?</h2>
        <p>สิ่งที่ทำให้ MG IM5 น่าสนใจไม่ได้มีเพียงกำลังมอเตอร์ แต่รวมถึงระบบที่ออกแบบมาช่วยจัดการสถานการณ์ใกล้ตัว เช่น การกลับรถ การจอดริมทาง และการออกจากช่องจอดแคบ</p>
        <p>MG ระบุว่ารถมีระบบบังคับเลี้ยว 4 ล้อ พร้อม One Touch iAD ซึ่งครอบคลุมการช่วยจอด การนำรถออกจากช่องจอด และการถอยย้อนเส้นทางเดิมสูงสุด 100 เมตร <Source href={sources.model}>รายละเอียดระบบจาก MG Thailand</Source></p>
        <Photo src="/images/reviews/mg-im5/thailand-steering.webp" alt="ภาพอธิบายแชสซีและระบบบังคับเลี้ยว 4 ล้อ MG IM5 จาก MG Thailand" width={750} height={712} />
        <p>สำหรับคนที่ต้องเข้าลานจอดอาคารหรือเจอซอยแคบเป็นประจำ ฟังก์ชันนี้เป็นเหตุผลที่ควรไปลอง แต่ให้ดูทั้งความสะดวก ความเข้าใจง่าย และเงื่อนไขที่ระบบทำงานได้ ไม่เหมารวมว่าระบบจะจัดการทุกช่องจอดแทนผู้ขับได้</p>
        <p><strong>4.99 เมตรเป็นรัศมีวงเลี้ยว</strong> อย่าเทียบตรง ๆ กับรถที่ประกาศเป็นเส้นผ่านศูนย์กลาง ส่วน “เลี้ยว 4 ล้อ” ก็ไม่ใช่ “ขับเคลื่อน 4 ล้อ” รถรุ่นที่กล่าวถึงนี้เป็นมอเตอร์เดี่ยวขับหลัง</p>
      </section>
      <section className="space-y-4" aria-labelledby="range">
        <h2 id="range" className={headingStyle}>วิ่งได้ 860 กม. หมายถึงขับจริงได้เท่านี้หรือไม่?</h2>
        <p><strong>ยังสรุปเช่นนั้นไม่ได้</strong> ตัวเลข 860 กม. ของแบตเตอรี่ 100 kWh เป็นระยะตามมาตรฐาน NEDC ที่ผู้ผลิตประกาศ ไม่ใช่ผลขับจริงของเรา <Source href={sources.model}>ข้อมูลระยะทางจาก MG Thailand</Source></p>
        <Photo src="/images/reviews/mg-im5/thailand-battery.webp" alt="ภาพอธิบายชุดแบตเตอรี่ MG IM5 จากหน้าแนะนำรถของ MG Thailand" width={750} height={712} />
        <p>สำหรับการตัดสินใจซื้อ คำถามที่มีประโยชน์กว่าคือ รถรองรับเส้นทางประจำอย่างไร มีจุดชาร์จสำรองที่ไหน และเมื่อเดินทางพร้อมผู้โดยสารกับสัมภาระ ยังเหลือแบตเตอรี่ปลายทางเท่าไร</p>
        <p>ฉบับนี้ยังไม่มีบันทึกทดสอบที่ระบุความเร็ว อุณหภูมิ การใช้แอร์ น้ำหนักบรรทุก และระดับแบตเตอรี่ต้นทาง–ปลายทาง จึงไม่แปลง NEDC เป็นระยะใช้งานจริงด้วยเปอร์เซ็นต์สมมติ และไม่ใช้การยืนยันว่าได้ทดลองขับแล้วแทนหลักฐานทดสอบระยะทาง</p>
        <p>อ่านเพิ่มเติมเรื่อง <Link href="/articles/ev-battery-care" className={linkStyle}>การดูแลแบตเตอรี่ EV และการเลือกชาร์จ 80% หรือ 100%</Link> ส่วนคำแนะนำเฉพาะ MG IM5 ให้ยึดคู่มือของรถรุ่นนี้เป็นหลัก</p>
      </section>
      <section className="space-y-4" aria-labelledby="charging">
        <h2 id="charging" className={headingStyle}>ชาร์จเร็วแค่ไหน และควรดูอะไรนอกจาก 396 kW?</h2>
        <p>ข้อมูลเปิดตัวในไทยระบุสถาปัตยกรรม 800V รองรับ DC สูงสุด 396 kW และชาร์จจาก 10–80% ในเวลาน้อยกว่า 18 นาที เป็นข้อมูลที่ประกาศ ไม่ใช่ผลจับเวลาของบทความนี้ <Source href={sources.launch}>ข้อมูล MG IM5 จากเว็บไซต์งาน Motor Show 2026</Source></p>
        <p>ก่อนใช้ตัวเลขนี้วางแผนเดินทาง ให้ตรวจความสามารถของสถานีที่ใช้ รวมถึงเงื่อนไขแบตเตอรี่และการเตรียมรถตามคู่มือ อย่าตีความว่าทุกสถานีจะทำเวลาได้เท่ากัน หรือรถจะรับกำลังสูงสุดตลอดการชาร์จ</p>
        <p>บันทึกที่ช่วยตัดสินใจได้ควรระบุสถานี รุ่นหัวชาร์จ ระดับแบตเตอรี่เริ่มต้น–สิ้นสุด และเวลาที่ใช้ ข้อมูลชุดนี้มีประโยชน์กว่าภาพกำลังชาร์จสูงสุดเพียงชั่วขณะ</p>
      </section>
      <section className="space-y-5" aria-labelledby="interior">
        <h2 id="interior" className={headingStyle}>ห้องโดยสารเน้นหน้าจอ เหมาะกับคุณหรือไม่?</h2>
        <p>MG IM5 ใช้หน้าจอขนาด 26.3 นิ้ว ร่วมกับจอควบคุมกลาง 10.5 นิ้ว ตาม <Source href={sources.model}>รายละเอียดห้องโดยสาร MG Thailand</Source> ภาพด้านล่างเป็นห้องโดยสารพวงมาลัยขวาจากชุดสื่อบนหน้ารุ่นไทย</p>
        <Photo src="/images/reviews/mg-im5/thailand-rhd-cockpit.webp" alt="ห้องโดยสาร MG IM5 พวงมาลัยขวา จอแนวนอนและจอควบคุมกลาง จาก MG Thailand" width={1440} height={849} />
        <p>ขนาดจอเป็นเพียงส่วนหนึ่งของประสบการณ์ใช้งาน สิ่งที่ควรลองตอนรถจอดคือการปรับแอร์ เลือกเมนูที่ใช้บ่อย อ่านข้อมูลสำคัญ และตรวจว่าตำแหน่งนั่งมองจอได้สะดวกเพียงใด โดยเฉพาะคนที่คุ้นกับการใช้ปุ่มจริง</p>
        <h3 className="text-lg font-bold text-slate-950">เบาะและพื้นที่ผู้โดยสาร ต้องลองนั่งด้วยกัน</h3>
        <Photo src="/images/reviews/mg-im5/thailand-seating.webp" alt="ภาพพื้นที่เบาะหน้าและเบาะหลัง MG IM5 ห้องโดยสารพวงมาลัยขวาจาก MG Thailand" width={1440} height={849} />
        <p>หากมีผู้โดยสารประจำ ควรให้คนนั้นมาลองเบาะหลังด้วย ตรวจพื้นที่ศีรษะ การรองรับต้นขา การขึ้นลง และความสบายหลังนั่งต่อเนื่อง ภาพห้องโดยสารบอกการจัดวางได้ แต่ใช้ยืนยันความนุ่มหรือพื้นที่สำหรับคนทุกสรีระไม่ได้</p>
        <p>ความเห็นเรื่องช่วงล่างและพวงมาลัยอยู่ในหัวข้อทดลองขับ ส่วนเสียงรบกวนและความสบายของผู้โดยสารยังไม่มีข้อมูลรายงานเพิ่มเติม จึงยังไม่ให้คะแนนในสองด้านนี้</p>
      </section>
      <section className="space-y-4" aria-labelledby="warranty">
        <h2 id="warranty" className={headingStyle}>รับประกันอย่างไร ต้องอ่านเงื่อนไขส่วนไหน?</h2>
        <p>แคมเปญเดือนตุลาคม 2569 ระบุการรับประกันตัวรถ <strong>5 ปี หรือ 160,000 กม. แล้วแต่อย่างใดถึงก่อน</strong> และการรับประกันตลอดอายุการใช้งานสำหรับแบตเตอรี่แรงเคลื่อนสูง ชุดมอเตอร์ขับเคลื่อน และชุดควบคุมมอเตอร์ขับเคลื่อน ภายใต้เงื่อนไขฝ่ายบริการหลังการขาย</p>
        <p>ส่วนการรับประกันตลอดอายุการใช้งานมีข้อยกเว้นสำหรับรถจดทะเบียนเป็นรถนิติบุคคลและการใช้รถเชิงพาณิชย์ จึงไม่ใช่การรับประกันทุกชิ้นส่วนโดยไม่มีข้อจำกัด <Source href={sources.promotion}>อ่านเงื่อนไขรับประกันและแคมเปญ MG</Source></p>
        <p>ก่อนจอง ขอเอกสารรับประกันฉบับเต็มพร้อมรายละเอียดการบำรุงรักษา และสอบถามศูนย์ที่จะใช้บริการจริงเรื่องขั้นตอนนัดหมายและการดูแลรถรุ่นนี้</p>
      </section>
      <section className="space-y-4" aria-labelledby="verdict">
        <h2 id="verdict" className={headingStyle}>MG IM5 เหมาะกับใคร และมีอะไรที่ยังต้องพิสูจน์?</h2>
        <p>จากข้อมูลสเปก MG IM5 ควรอยู่ในรายชื่อรถที่ไปทดลอง หากต้องการซีดานไฟฟ้า สนใจเทคโนโลยีช่วยจอด และอยากได้แบตเตอรี่ขนาดใหญ่สำหรับเดินทางประจำกับทริปต่างจังหวัด นี่เป็นมุมมองเชิงวิเคราะห์ของ <BrandHomeLink /> ไม่ใช่ข้อสรุปว่าคุ้มที่สุดสำหรับทุกคน</p>
        <p>จุดที่น่าสนใจคือระบบเลี้ยว 4 ล้อ แบตเตอรี่ 100 kWh และความสามารถการชาร์จที่ประกาศไว้ ส่วนข้อแลกเปลี่ยนที่ต้องพิจารณาคือความคุ้นเคยกับการควบคุมผ่านจอ ความเหมาะสมกับที่จอด และเงื่อนไขการดูแลระยะยาว</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>ความสบาย:</strong> ลองถนนใกล้เคียงเส้นทางประจำ พร้อมผู้โดยสารที่ใช้งานด้วยกัน</li>
          <li><strong>การควบคุม:</strong> ลองเมนูหน้าจอและการตั้งค่าที่ใช้บ่อยขณะรถจอด</li>
          <li><strong>การจอด:</strong> ตรวจขนาดช่องจอดที่บ้าน และขอสาธิตระบบช่วยจอด</li>
          <li><strong>การเดินทาง:</strong> ตรวจจุดชาร์จหลักและจุดสำรองตลอดเส้นทาง</li>
          <li><strong>ค่าใช้จ่าย:</strong> ขอราคาสุทธิ ประกันปีถัดไป ค่าบำรุงรักษา และเงื่อนไขรับประกันเป็นลายลักษณ์อักษร</li>
        </ol>
        <p className="rounded-xl bg-lime-50 p-5 font-semibold text-slate-900">ใช้สเปกเป็นเหตุผลในการนัดทดลองขับ แล้วใช้ผลทดลองกับเงื่อนไขการครอบครองจริงเป็นเหตุผลในการซื้อ</p>
      </section>
      <section className="space-y-5" aria-labelledby="faq">
        <h2 id="faq" className={headingStyle}>คำถามที่พบบ่อยเกี่ยวกับ MG IM5</h2>
        <div className="space-y-2"><h3 className="font-bold text-slate-950">MG IM5 ราคาเท่าไรในประเทศไทย?</h3><p>Premium Long Range ราคาปกติ 1,549,900 บาท แคมเปญวันที่ 1–31 ตุลาคม 2569 ระบุราคาพิเศษ 1,499,900 บาท ต้องจองและรับรถภายในช่วงที่กำหนด พร้อมเงื่อนไขอื่นของบริษัท <Source href={sources.promotion}>ตรวจโปรโมชันปัจจุบัน</Source></p></div>
        <div className="space-y-2"><h3 className="font-bold text-slate-950">MG IM5 วิ่งได้ 860 กม. จริงไหม?</h3><p>860 กม. เป็นระยะ NEDC ที่ผู้ผลิตประกาศ ยังไม่มีผลทดสอบระยะทางของเราในบทความนี้ และไม่ควรนำไปเทียบกับ WLTP โดยไม่ระบุมาตรฐานให้ตรงกัน <Source href={sources.model}>ข้อมูลระยะทาง MG IM5</Source></p></div>
        <div className="space-y-2"><h3 className="font-bold text-slate-950">ระบบเลี้ยว 4 ล้อ หมายถึงขับเคลื่อน 4 ล้อหรือไม่?</h3><p>ไม่ใช่ ระบบเลี้ยวเกี่ยวกับการเปลี่ยนทิศทางล้อ ส่วนระบบขับเคลื่อนเกี่ยวกับล้อที่รับกำลังจากมอเตอร์ ข้อมูลเปิดตัวไทยระบุรุ่นนี้เป็นขับหลัง พร้อมระบบบังคับเลี้ยว 4 ล้อ <Source href={sources.launch}>ข้อมูลเปิดตัวในประเทศไทย</Source></p></div>
        <div className="space-y-2"><h3 className="font-bold text-slate-950">รีวิวนี้ทดลองขับบนถนนไทยแล้วหรือยัง?</h3><p><Link href="/" className={linkStyle}>EVSELECTS.COM</Link> ยืนยันว่าได้ทดลองขับ MG IM5 บนถนนไทยแล้ว ความเห็นที่รายงานคือช่วงล่างพอใช้แต่ไม่หนึบมาก พวงมาลัยค่อนข้างเบาและไม่ค่อยคม ส่วนอัตราเร่งดี ยังรอรายละเอียดเส้นทางและเงื่อนไขการทดสอบ จึงไม่มีคะแนนหรือตัวเลขผลวัด</p></div>
      </section>
      <footer className="space-y-3 border-t border-slate-200 pt-6 text-sm leading-7">
        <p>ภาพประกอบจาก MG Thailand รวมภาพแนะนำรถและภาพอธิบายระบบ ไม่ใช่ภาพถ่ายการทดลองขับหรือภาพถอดชิ้นส่วนของทีมงาน ดู <Link href="/image-credits#mg-im5-thailand-exterior" className={linkStyle}>แหล่งที่มาและเครดิตภาพ MG IM5</Link> และ <Link href="/editorial-policy" className={linkStyle}>แนวทางการจัดทำบทความ</Link></p>
        <p>ตรวจข้อมูลวันที่ 18 ตุลาคม 2569 · ฉบับ 1.2 เพิ่มภาพตรงหัวข้อและความเห็นจากการทดลองขับบนถนนไทย โดยยังแยกตัวเลขผู้ผลิตออกจากผลทดสอบจริง ราคาและอุปกรณ์อาจเปลี่ยนแปลง ควรตรวจเอกสารของรถที่จะรับมอบ</p>
        <Link href="/articles" className={linkStyle}>อ่านบทความรถ EV สเปกไทยเพิ่มเติม →</Link>
      </footer>
    </div>
  </article>;
}

