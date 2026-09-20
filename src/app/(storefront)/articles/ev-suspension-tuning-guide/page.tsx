import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { ImageCredit } from '@/components/ImageCredit';
import { damperArticle } from '@/lib/damper-article';

const title = 'ช่วงล่าง EV ย้วยหรือกระด้าง? เริ่มเช็กตรงไหน ก่อนเปลี่ยนโช้ค';
const description = 'เริ่มจากอาการ ยาง และการใช้งาน ก่อนเลือกช่วงล่าง EV เทียบระบบปรับของ KW V3, Öhlins Road & Track, BC Racing BR และ H-Drive พร้อมคำถามที่ควรถามร้าน';
const path = '/articles/ev-suspension-tuning-guide';
const hero = '/images/editorial/tesla-model-3-performance-2024.png';
const linkStyle = 'font-semibold text-lime-800 underline decoration-lime-500 underline-offset-4 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const sources = {
  kw: 'https://www.kwsuspensions.com/us-en/products/street-performance/v3-coilovers',
  ohlins: 'https://www.ohlins.com/en-us/automotive/road-and-track/tesla-model-3-model-y-road-and-track-set?v=tesla-model-3-2020',
  ohlinsManual: 'https://www.ohlins.com/storage/7AC688BED0B27E53064F094EF615E1B088E4D8FEA94635A5D2ECCC5FB1894053/b31b9618ad354b438a407241ceb64a6d/pdf/media/d60188c2ea574151aad35b903c54e441/OM_07451-01_7_R_T.pdf',
  bc: 'https://shop.bcracing-na.com/pages/br-series',
  hdrive: 'https://www.hdrive-racing.com/videocarsuse',
  tesla: 'https://www.tesla.com/ownersmanual/model3/th_th/GUID-FDDB10EF-FFA9-46EB-B8CC-03614AE92B6B.html',
};

export const metadata: Metadata = {
  title: `${title} | EVSELECT`, description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `https://evselects.com${path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', images: [{ url: hero, width: 1280, height: 640, alt: 'Tesla Model 3 Performance ปี 2024 สีเทา' }] },
  twitter: { card: 'summary_large_image', title, description, images: [hero] },
};

function Section({ id, title: heading, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 space-y-5">
    <h2 id={`${id}-title`} className="border-b border-slate-200 pb-3 text-2xl font-bold leading-snug text-slate-900">{heading}</h2>
    {children}
  </section>;
}
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className={linkStyle}>{children}</a>;
}

export default function EvSuspensionTuningGuidePage() {
  return <article className="mx-auto max-w-5xl px-4 py-10 text-base leading-[1.9] text-slate-700 sm:px-6 sm:py-14 sm:text-lg lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
      mainEntityOfPage: `https://evselects.com${path}`, image: `https://evselects.com${hero}`,
      datePublished: '2026-09-03', dateModified: '2026-09-21', inLanguage: 'th-TH',
      author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com' },
      publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com' },
    }) }} />
    <nav aria-label="Breadcrumb" className="mb-7 text-sm"><Link href="/articles" className="inline-flex items-center gap-2 text-slate-600 hover:text-lime-800"><ArrowLeft size={16} />บทความและคู่มือ EV</Link></nav>
    <header className="space-y-5">
      <p className="text-sm font-semibold text-lime-800">ช่วงล่าง · คู่มือก่อนอัปเกรด</p>
      <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="max-w-3xl text-lg leading-[1.9] sm:text-xl">ขับผ่านรอยต่อทีไรสะเทือนทั้งคัน แต่พอขึ้นคอสะพานกลับโยนต่ออีกหลายจังหวะ — ถ้ารถคุณมีอาการแบบนี้ คำถามแรกคือ “เกิดอะไรขึ้นกับช่วงล่าง?” แล้วค่อยตัดสินใจว่าจำเป็นต้องเปลี่ยนโช้คหรือไม่</p>
      <p className="max-w-3xl">คู่มือนี้ช่วยเรียงสิ่งที่ควรเช็กก่อนจ่ายเงิน ตั้งแต่ยาง สภาพชิ้นส่วน ไปจนถึงระบบปรับของโช้คแต่ละรุ่น คุณจะได้คุยกับร้านด้วยอาการและเป้าหมายที่ชัดเจน แทนการซื้อจากราคา จำนวนคลิก หรือชื่อแบรนด์เพียงอย่างเดียว</p>
      <p className="text-sm text-slate-500">อัปเดต <time dateTime="2026-09-21">21 กันยายน 2569</time> · เรียบเรียงโดย <BrandHomeLink /> จากเอกสารผู้ผลิต</p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src={hero} alt="Tesla Model 3 Performance ปี 2024 สีเทา มองจากด้านหน้าซ้าย เห็นตัวรถและล้อครบ" width={1280} height={640} preload sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full object-contain" />
        <figcaption className="space-y-2 p-4 text-sm leading-relaxed text-slate-600">
          <p>ภาพ Tesla Model 3 Performance ปี 2024 ใช้ประกอบเรื่องการเลือกช่วงล่าง ไม่ใช่รถทดสอบหรือหลักฐานว่าโช้คทั้งสี่แบรนด์ติดตั้งกับรถในภาพได้</p>
          <ImageCredit author="iMoD Official" source="https://commons.wikimedia.org/wiki/File:2024_Tesla_Model_3_Performance_front_view_03.png" license="CC BY 3.0" licenseUrl="https://creativecommons.org/licenses/by/3.0/" className="" />
        </figcaption>
      </figure>
    </header>

    <div className="mt-10 space-y-12">
      <Section id="start-with-symptoms" title="1. บอกอาการให้ชัด ก่อนฟันธงว่าโช้คไม่ดี">
        <p>คำว่า “ย้วย” หรือ “กระด้าง” ยังบอกสาเหตุไม่ได้ ลองจดว่าเกิดบนถนนแบบไหน ขณะรถบรรทุกเท่าไร และเริ่มเป็นตั้งแต่เมื่อใด โดยเฉพาะหลังเปลี่ยนยาง ล้อ หรือปรับความสูง ข้อมูลเหล่านี้ช่วยให้ช่างตรวจได้ตรงจุดขึ้น</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="mb-2 text-xl font-bold text-slate-900">กระแทกเป็นจังหวะสั้น ๆ</h3><p>บันทึกว่าเกิดกับรอยต่อเล็ก ๆ หรือเนินใหญ่ พร้อมขนาดยางและแรงดันลมตอนยางเย็น ให้ร้านตรวจทั้งยางและระยะการทำงานของช่วงล่างก่อนเสนอเปลี่ยนอะไหล่</p></div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="mb-2 text-xl font-bold text-slate-900">โยนต่อหลังผ่านเนิน</h3><p>แยกว่าเป็นหน้า–หลังหรือซ้าย–ขวา และต่างกันไหมเมื่อมีผู้โดยสารเต็มคัน ใช้เป็นข้อมูลให้ช่างตรวจสภาพและการตั้งค่า ไม่ใช่หลักฐานว่าแบรนด์ใดจะรักษาอาการนี้ได้แน่นอน</p></div>
        </div>
        <p>เริ่มจาก <Source href={sources.tesla}>ข้อกำหนดแรงดันและการตรวจยางในคู่มือรถ</Source> ตัวอย่าง Tesla ให้ยึดฉลากข้อมูลยางของคันจริง ไม่ใช้ค่าแรงดันสูงสุดบนแก้มยางแทน จากนั้นอ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางและคอยล์โอเวอร์ให้ตรงน้ำหนักรถ</Link> หากล้อหรือยางถูกเปลี่ยนจากโรงงาน</p>
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-base text-slate-800">หากมีเสียงผิดปกติ น้ำมันรั่ว หรือการควบคุมรถเปลี่ยนไปฉับพลัน ให้หยุดในที่ปลอดภัยและตรวจหาสาเหตุก่อนปรับโช้คต่อ แนวทางนี้สอดคล้องกับ <Source href={sources.ohlinsManual}>ข้อควรปฏิบัติในคู่มือ Öhlins Road &amp; Track</Source></p>
      </Section>

      <Section id="damping-basics" title="2. เข้าใจ Bump และ Rebound เท่าที่ใช้คุยกับร้าน">
        <p><strong>Bump หรือ Compression</strong> คือการหน่วงขณะโช้คยุบ ส่วน <strong>Rebound</strong> คือการหน่วงขณะโช้คยืดกลับ แรงหน่วงช่วยควบคุมการเคลื่อนที่ของช่วงล่าง แต่ความรู้สึกที่นั่งยังขึ้นกับสปริง ยาง ระยะยุบ และการติดตั้งร่วมกัน</p>
        <p>ปุ่ม “นุ่ม–แข็ง” อาจปรับสองจังหวะร่วมกัน หรือแยกคนละปุ่มตามรุ่น จำนวนคลิกจึงเป็นช่วงปรับของผลิตภัณฑ์นั้น ไม่ใช่คะแนนสมรรถนะ และ “คลิกที่ 10” ของคนละชุดไม่ใช่ความหนืดเท่ากัน</p>
        <p>ก่อนเริ่มปรับ อ่าน <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>คู่มือ Bump, Rebound และความต่างของโช้ค 1-Way–3-Way</Link> ต่อได้ ส่วนค่าตั้งต้นและวิธีนับคลิกให้ยึดคู่มือรหัสชุดจริง ไม่มีตัวเลขกลางที่ใช้ได้กับรถ EV ทุกคัน</p>
      </Section>

      <Section id="compare-products" title="3. เทียบรุ่นสินค้าให้ตรง แทนการจัดอันดับทั้งแบรนด์">
        <p>ตัวอย่างต่อไปนี้ใช้ให้เห็นความต่างของระบบปรับตามข้อมูลผู้ผลิต ไม่ใช่ผลทดสอบความนุ่มหรือความเกาะถนนบนรถคันเดียวกัน และยังไม่ยืนยันว่าแต่ละชุดรองรับรถของคุณ</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={damperArticle.cover.src} alt={damperArticle.coverAlt} width={damperArticle.cover.width} height={damperArticle.cover.height} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full object-contain" />
          <figcaption className="p-4 text-sm leading-relaxed text-slate-600">ภาพผลิตภัณฑ์ KW ที่เจ้าของเว็บไซต์จัดส่งให้ ใช้ประกอบภาพรวมคอยล์โอเวอร์ ไม่ระบุรุ่นของแต่ละชิ้นหรือยืนยันการติดตั้งกับรถใด · <Source href="https://www.kwsuspensions.com/uk/products/street-performance">ดูผลิตภัณฑ์จาก KW</Source></figcaption>
        </figure>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-200 p-5"><h3 className="text-xl font-bold text-slate-900">KW V3</h3><p>หน้า V3 ของ KW ระบุปรับ Compression ช่วง Low-speed 12 คลิก และ Rebound ช่วง Low-speed 16 คลิกแยกกัน คำว่า Low-speed ในที่นี้หมายถึงการเคลื่อนที่ของแกนโช้ค ไม่ใช่ความเร็วรถ</p><p>ก่อนเลือก ให้ขอรหัสชุด ช่วงความสูง และคำแนะนำสำหรับรถรุ่นย่อยของคุณโดยเฉพาะ</p><Source href={sources.kw}>ข้อมูลระบบปรับ KW V3 จากผู้ผลิต</Source></div>
          <div className="space-y-3 rounded-2xl border border-slate-200 p-5"><h3 className="text-xl font-bold text-slate-900">Öhlins Road &amp; Track</h3><p>ตัวอย่าง TES MA10S1 ในหน้าที่ระบุ Tesla Model 3 ปี 2020 ใช้ DFV และตัวปรับ 1-Way 25 คลิกที่มีผลต่อ Compression และ Rebound ร่วมกัน ไม่ใช่ปุ่มแยกสองชุด</p><p>ข้อมูลตัวอย่างนี้ไม่ยืนยันการติดตั้งกับ Highland หรือรุ่น Performance ปัจจุบัน ต้องตรวจรายการรองรับของรหัสชุดอีกครั้ง</p><Source href={sources.ohlins}>ข้อมูล Öhlins TES MA10S1 และคู่มือ</Source></div>
          <div className="space-y-3 rounded-2xl border border-slate-200 p-5"><h3 className="text-xl font-bold text-slate-900">BC Racing BR Series</h3><p>BC Racing North America ระบุระบบปรับ Compression/Rebound พร้อมกัน 30 คลิกสำหรับ BR Series จึงไม่ควรอ่านเป็น “ยุบ 30 คลิกและคืนตัวอีก 30 คลิกแบบอิสระ”</p><p>ตัวเลือกสปริงและเบ้าโช้คขึ้นกับชุดที่สั่ง ขอรายละเอียดสินค้าจริงและบริการหลังการขายในไทยประกอบด้วย</p><Source href={sources.bc}>รายละเอียด BR Series จาก BC Racing</Source></div>
          <div className="space-y-3 rounded-2xl border border-slate-200 p-5"><h3 className="text-xl font-bold text-slate-900">H-Drive Euro Spec / Euro R</h3><p>สื่อของ H-Drive แยก Euro ที่ปรับ 30 ระดับ ออกจากตัวอย่าง Euro R สำหรับ BMW M2 F87 ซึ่งเป็น 2-Way แยก Rebound และ Compression อย่างละ 30 ระดับ ชื่อคล้ายกันจึงยังใช้แทนสเปกกันไม่ได้</p><p>สำหรับรถ EV ให้ขอชื่อรุ่นเต็ม รหัสชุด และคู่มือของคันที่จะติดตั้ง ตัวอย่าง BMW ไม่ใช่หลักฐานการรองรับ Tesla</p><Source href={sources.hdrive}>ดูระบบปรับแต่ละรุ่นจาก H-Drive</Source></div>
        </div>
        <p className="text-base text-slate-600">ตรวจแหล่งข้อมูลวันที่ 21 กันยายน 2569 ยังไม่มีผลทดสอบทั้งสี่ชุดภายใต้รถ ยาง และเงื่อนไขเดียวกัน จึงไม่ให้คะแนนความนุ่ม ความคุ้มค่า หรือจัดผู้ชนะจากจำนวนคลิก</p>
      </Section>

      <Section id="before-buying" title="4. ขอข้อมูลห้าข้อนี้ ก่อนวางมัดจำ">
        <ol className="list-decimal space-y-3 pl-6">
          <li><strong>ตรงรถคันไหน:</strong> รหัสชุด รุ่น ปี รุ่นย่อย ระบบขับเคลื่อน และพิกัดน้ำหนักเพลาที่รองรับ พร้อมเอกสารจากผู้ผลิต</li>
          <li><strong>เปลี่ยนอะไรบ้าง:</strong> สปริง เบ้าโช้ค ช่วงปรับความสูง และวิธีรองรับระบบโช้คไฟฟ้าหรือถุงลมเดิม หากรถมีระบบนั้น</li>
          <li><strong>ตั้งต้นอย่างไร:</strong> คู่มือ วิธีนับคลิก ค่าเริ่มต้น และบันทึกความสูงกับค่าปรับหลังติดตั้ง เพื่อกลับไปเทียบได้</li>
          <li><strong>ราคารวมถึงไหน:</strong> ค่าอะไหล่ ติดตั้ง ตั้งศูนย์ ปรับซ้ำ ภาษี และชิ้นส่วนที่ต้องเพิ่ม ขอใบเสนอราคาในขอบเขตเดียวกันก่อนเทียบ</li>
          <li><strong>ดูแลต่ออย่างไร:</strong> เงื่อนไขรับประกัน งานซ่อมหรือโอเวอร์ฮอล อะไหล่ ระยะเวลารอ และผู้รับผิดชอบเมื่อพบปัญหา</li>
        </ol>
        <p>การปรับความสูงเกี่ยวข้องกับมุมล้อด้วย ควรตรวจและตั้งศูนย์ตามข้อกำหนดที่เหมาะกับรถ อ่าน <Link href="/articles/ev-camber-adjustment-wheel-alignment-guide" className={linkStyle}>พื้นฐาน Camber, Toe และการตั้งศูนย์</Link> เพื่อเข้าใจผลตรวจที่ร้านส่งให้ แทนการตัดสินจากทรงรถอย่างเดียว</p>
      </Section>

      <Section id="after-installation" title="5. เทียบก่อน–หลังด้วยสิ่งที่คุณใช้รถจริง">
        <p>ตกลงกับร้านก่อนว่าต้องการแก้อะไรเป็นอันดับแรก เช่น ลดแรงสะเทือนบนรอยต่อหรือควบคุมการโยนตัว โดยยังรักษาความสูงที่ผ่านทางเข้าบ้านได้ หลังติดตั้งให้ตรวจงานและทดลองในสภาพแวดล้อมปลอดภัยตามคู่มือ เริ่มด้วยความเร็วต่ำ</p>
        <p>ใช้ยาง แรงดันลม น้ำหนักบรรทุก และเส้นทางใกล้เคียงเดิม จดค่าที่เปลี่ยนและความรู้สึกทีละเรื่อง หากกลับมาแย่ลงจะได้ย้อนหาสาเหตุ ไม่ปรับทุกจุดพร้อมกันจนไม่รู้ว่าอะไรมีผล</p>
        <p>สำหรับ <BrandHomeLink /> ชุดช่วงล่างที่น่าเลือกคือชุดที่มีข้อมูลรองรับรถของคุณ แก้อาการที่ตั้งใจ และมีคนดูแลหลังติดตั้ง หากยังตอบไม่ได้ว่าชุดใหม่ช่วยอะไร การตรวจสภาพและตั้งค่าชุดเดิมให้ถูกต้องเป็นจุดเริ่มต้นที่มีเหตุผลกว่ารีบซื้อเพิ่ม</p>
      </Section>

      <section aria-labelledby="read-next-title" className="rounded-2xl border border-lime-200 bg-lime-50 p-6">
        <h2 id="read-next-title" className="mb-3 text-2xl font-bold text-slate-900">เลือกอ่านต่อให้ตรงเรื่องที่ยังสงสัย</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li>ยังแยกชนิดโช้คไม่ออก: <Link href="/articles/shock-absorber-types-monotube-twintube-air-ev" className={linkStyle}>Monotube, Twin-tube และช่วงล่างถุงลมต่างกันอย่างไร</Link></li>
          <li>กำลังเปลี่ยนล้อและยางพร้อมกัน: <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>เลือกยางและคอยล์โอเวอร์ให้เป็นชุดเดียวกัน</Link></li>
          <li>มีโช้คปรับได้อยู่แล้ว: <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>ทำความเข้าใจสปริง ระยะยุบ และการปรับแดมเปอร์</Link></li>
        </ul>
      </section>
    </div>
  </article>;
}
