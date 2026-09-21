import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageCredit } from '@/components/ImageCredit';

const title = 'เลือกยางและคอยล์โอเวอร์ EV อย่างไร ให้รับทั้งน้ำหนักและแรงม้า';
const description = 'เลือกยางและคอยล์โอเวอร์ให้ตรงรถและการใช้งาน ดู Load Index, XL/HL, ขนาดยางหน้า–หลัง และระยะยุบ ผ่านตัวอย่าง ZEEKR 7X Performance AWD และ Tesla Model 3 Performance';
const path = '/articles/ev-tyre-and-coilover-selection-guide';
const hero = '/images/editorial/tesla-model-3-performance-2024.png';
const teslaManual = 'https://www.tesla.com/ownersmanual/model3/th_th/GUID-FDDB10EF-FFA9-46EB-B8CC-03614AE92B6B.html';
const zeekrBrochure = 'https://www.datocms-assets.com/142974/1756887361-7x-brochure-aug2025-correct.pdf';
const linkStyle = 'font-semibold text-lime-800 underline decoration-lime-500 underline-offset-4 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';

export const metadata: Metadata = {
  title: `${title} | EVSELECT`, description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `https://evselects.com${path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', images: [{ url: hero, width: 1280, height: 640, alt: 'Tesla Model 3 Performance ปี 2024' }] },
  twitter: { card: 'summary_large_image', title, description, images: [hero] },
};

function Section({ id, title: heading, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 space-y-5">
    <h2 id={`${id}-title`} className="border-b border-slate-200 pb-3 text-2xl font-bold leading-snug text-slate-900">{heading}</h2>
    {children}
  </section>;
}
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}

export default function EVTyreAndCoiloverSelectionGuidePage() {
  return <article className="mx-auto max-w-5xl px-4 py-10 text-base leading-[1.9] text-slate-700 sm:px-6 sm:py-14 sm:text-lg lg:px-8">
    <nav aria-label="Breadcrumb" className="mb-7 text-sm"><Link href="/articles" className="inline-flex items-center gap-2 text-slate-600 hover:text-lime-800"><ArrowLeft size={16} />บทความและคู่มือ EV</Link></nav>
    <header className="space-y-5">
      <p className="text-sm font-semibold text-lime-800">ยางและช่วงล่าง · คู่มือก่อนอัปเกรด</p>
      <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="max-w-3xl text-lg leading-[1.9] sm:text-xl">รถ EV อาจเร่งได้ทันใจตั้งแต่เดิม แต่ความมั่นใจตอนเบรก เลี้ยว หรือเจอรอยต่อถนน ยังขึ้นอยู่กับยางและช่วงล่างด้วย ของราคาแพงอาจยังไม่ตอบโจทย์ ถ้าขนาด พิกัดรับน้ำหนัก และลักษณะการทำงานไม่เหมาะกับรถคันนั้น</p>
      <p className="max-w-3xl">คู่มือนี้ชวนเริ่มจากสเปกรถจริง แล้วค่อยเลือกว่าต้องการความนุ่ม เงียบ หรือการตอบสนองแบบไหน โดยใช้ ZEEKR 7X Performance AWD และ Tesla Model 3 Performance เป็นตัวอย่าง เพื่อให้คุยกับร้านได้ตรงประเด็นก่อนจ่ายเงิน</p>
      <p className="text-sm text-slate-500">อัปเดต <time dateTime="2026-09-21">21 กันยายน 2569</time> · เรียบเรียงโดย <Link href="/" className={linkStyle}>EVSELECT</Link> จากข้อมูลผู้ผลิต</p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src={hero} alt="Tesla Model 3 Performance ปี 2024 สีเทา มองด้านหน้าซ้าย เห็นล้อและตัวรถเต็มคัน" width={1280} height={640} sizes="(max-width: 1024px) 100vw, 960px" preload className="h-auto w-full" />
        <figcaption className="space-y-2 p-4 text-sm leading-relaxed text-slate-600">
          <p>Tesla Model 3 Performance ปี 2024 — ภาพประกอบรุ่นรถ ไม่ใช่รถทดสอบของเรา และไม่ใช้ภาพนี้ยืนยันสเปกยางของรถแต่ละคัน</p>
          <ImageCredit author="iMoD Official" source="https://commons.wikimedia.org/wiki/File:2024_Tesla_Model_3_Performance_front_view_03.png" license="CC BY 3.0" licenseUrl="https://creativecommons.org/licenses/by/3.0/" className="" />
          <p>ภาพจาก <Source href="https://www.youtube.com/watch?v=Lr1FdX7Pi5o">วิดีโอต้นฉบับของ iMoD Official</Source> ผ่าน Wikimedia Commons; ใช้ภาพย่อโดยไม่รีทัช</p>
        </figcaption>
      </figure>
    </header>

    <div className="mt-10 space-y-12">
      <section aria-labelledby="start-here" className="rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7">
        <h2 id="start-here" className="mb-4 text-xl font-bold text-slate-950">เริ่มจากสามเรื่องนี้ก่อนเลือกแบรนด์</h2>
        <ul className="space-y-3">
          <li><strong>ตรงรถ:</strong> ขนาดยาง พิกัดรับน้ำหนัก พิกัดความเร็ว และล้อที่ใช้ ต้องตรงข้อกำหนดของรุ่นและปีรถ</li>
          <li><strong>ตรงการใช้งาน:</strong> ขับคนเดียวทุกวันกับพาครอบครัวและสัมภาระเดินทางไกล มีโจทย์ต่างกัน</li>
          <li><strong>แก้ถูกอาการ:</strong> ยางสึกผิดรูป ลมไม่เหมาะ หรือช่วงล่างหลวม ควรตรวจให้ชัดก่อนซื้อชุดใหม่</li>
        </ul>
      </section>

      <Section id="heavy-ev" title="1. รถหนักและแรง ทำให้ต้องอ่านสเปกยางให้ละเอียดขึ้น">
        <h3 className="text-xl font-bold text-slate-900">ZEEKR 7X Performance AWD: น้ำหนัก 2,535 กก. กับกำลัง 637 hp</h3>
        <p>ตัวเลขใน <Source href="https://www.zeekrlife.com/en-th/models/7x">สเปก ZEEKR 7X</Source> รุ่น Performance AWD ประเทศไทยระบุกำลังสูงสุด 475 kW / 637 hp ส่วน <Source href={zeekrBrochure}>โบรชัวร์ไทย</Source> ระบุน้ำหนักรถ 2,535 กก. และยางขนาด 265/40R21 ตัวเลขนี้เป็นของรุ่นย่อยนั้น ไม่ควรนำไปใช้แทน Standard RWD หรือ Long Range RWD</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200">
          <Image src="/images/editorial/zeekr-7x-photo.jpg" alt="ZEEKR 7X สีเทา มองด้านหน้าซ้าย เห็นตัวรถและล้อ" width={1920} height={1440} sizes="(max-width: 1024px) 100vw, 960px" className="h-auto w-full" />
          <figcaption className="space-y-2 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
            <p>ภาพประกอบ ZEEKR 7X; อุปกรณ์และรุ่นย่อยของรถในภาพอาจต่างจากรุ่นไทย ตัวเลขข้างต้นอ้างอิงเอกสารผู้ผลิต ไม่ได้อนุมานจากภาพ</p>
            <ImageCredit author="JustAnotherCarDesigner" source="https://commons.wikimedia.org/wiki/File:Zeekr_7X_011.jpg" license="CC0 1.0" licenseUrl="https://creativecommons.org/publicdomain/zero/1.0/" className="" />
          </figcaption>
        </figure>
        <p>น้ำหนักทำให้พิกัดรับน้ำหนักของยางเป็นเรื่องที่มองข้ามไม่ได้ ขณะที่การใช้กำลังรถต้องอาศัยการยึดเกาะด้วย แต่ไม่มีสูตรแปลง “637 แรงม้า” เป็น Load Index และไม่ควรนำ 2,535 หารสี่แล้วเลือกยางจากคำตอบนั้นเพียงอย่างเดียว เพราะยังมีผู้โดยสาร สัมภาระ และข้อกำหนดน้ำหนักลงแต่ละเพลาของรถ</p>
        <p>หากกำลังเทียบรุ่นย่อย อ่าน <Link href="/articles/zeekr-7x-2026-review" className={linkStyle}>รีวิวและสเปก ZEEKR 7X สำหรับไทย</Link> ต่อได้ แล้วกลับมาตรวจป้ายข้อมูลของรถคันที่จะเปลี่ยนยางอีกครั้ง</p>
        <h3 className="text-xl font-bold text-slate-900">Tesla Model 3 Performance: ยางหน้า–หลังอาจไม่ใช่ชุดเดียวกัน</h3>
        <p>สำหรับ Model 3 ชุดล้อโรงงาน 20 นิ้ว <Source href={teslaManual}>คู่มือ Tesla ภาษาไทยเรื่องล้อและยาง</Source> ระบุยางหน้า 235/35R20 และหลัง 275/30R20 ตัวอย่างนี้เตือนว่าแค่บอก “ยาง 20 นิ้วสำหรับ Model 3” ยังไม่พอ ต้องตรวจรุ่นย่อย ปีรถ ตำแหน่งล้อ และป้ายข้อมูลยางของคันจริง โดยเฉพาะรถที่เจ้าของเดิมเปลี่ยนล้อมาแล้ว</p>
        <p>รถที่เปลี่ยนล้อหรือยางจากโรงงานควรให้ผู้ติดตั้งตรวจความเข้ากันได้ทั้งชุด รวมถึงระยะห่างจากเบรกและช่วงล่าง อย่าคัดลอกขนาดจากภาพรถแต่งอย่างเดียว ดูพื้นฐานรุ่นรถได้ที่ <Link href="/articles/tesla-model-3-highland-review" className={linkStyle}>คู่มือ Tesla Model 3 Highland สเปกไทย</Link></p>
      </Section>

      <Section id="tyre-spec" title="2. อ่าน Load Index, XL และ HL ให้ถูกเรื่อง">
        <p><strong>Load Index คือดัชนีรับน้ำหนัก</strong> ส่วน Speed Rating คือพิกัดความเร็ว ต้องอ่านควบคู่กับขนาดและเครื่องหมายอื่นบนแก้มยาง โดยเทียบกับคู่มือหรือป้ายประจำรถ การเห็นคำว่า EV บนชื่อสินค้าอย่างเดียวจึงยังไม่ยืนยันว่าใส่กับรถเราได้</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[560px] text-left text-base leading-relaxed">
            <caption className="p-4 text-left font-semibold text-slate-900">คำบนสเปกยางบอกอะไร และยังต้องตรวจอะไรต่อ</caption>
            <thead className="bg-slate-100 text-slate-900"><tr><th scope="col" className="p-4">คำหรือรหัส</th><th scope="col" className="p-4">ความหมาย</th><th scope="col" className="p-4">ก่อนเลือกซื้อ</th></tr></thead>
            <tbody className="divide-y divide-slate-200">
              <tr><th scope="row" className="p-4">Load Index</th><td className="p-4">รหัสพิกัดรับน้ำหนักของยางเส้นนั้น</td><td className="p-4">เทียบข้อกำหนดของรถ ไม่เลือกจากน้ำหนักรถหารสี่อย่างเดียว</td></tr>
              <tr><th scope="row" className="p-4">SL / XL</th><td className="p-4">Standard Load / Extra Load; เป็นประเภทการรับน้ำหนัก</td><td className="p-4">อ่านขนาดและ Load Index ร่วมกัน ไม่เหมารวมว่า XL ทุกเส้นรับน้ำหนักได้เท่ากัน</td></tr>
              <tr><th scope="row" className="p-4">HL</th><td className="p-4">High Load Capacity สำหรับความสามารถรับน้ำหนักที่สูงขึ้น</td><td className="p-4">ยึดสเปกที่ผู้ผลิตรถอนุมัติ ไม่ถือว่ารถ EV ทุกคันต้องใช้ HL</td></tr>
              <tr><th scope="row" className="p-4">Speed Rating</th><td className="p-4">พิกัดความเร็วภายใต้เงื่อนไขของยาง</td><td className="p-4">เลือกตามข้อกำหนดรถ ไม่ใช่ตามความเร็วที่คิดว่าจะขับเพียงอย่างเดียว</td></tr>
            </tbody>
          </table>
        </div>
        <p>อ่าน <Source href="https://www.michelin.co.th/auto/advice/ev-guide/high-load-capacity-tyres">ความแตกต่างของยาง HL และ XL จาก Michelin</Source> ประกอบได้ ความสามารถรับน้ำหนักต้องพิจารณาร่วมกับแรงดันลมและสเปกยาง จึงไม่ควรกำหนดตัวเลขรับน้ำหนักตายตัวให้ทั้งกลุ่ม SL, XL หรือ HL</p>
        <h3 className="text-xl font-bold text-slate-900">เติมลมตามรถ ไม่ใช่ตามตัวเลขสูงสุดบนแก้มยาง</h3>
        <p>Tesla ระบุให้ดูแรงดันจากฉลากข้อมูลยางที่เสาประตูฝั่งคนขับ และแยกชัดว่าค่าแรงดันสูงสุดบนแก้มยางไม่ใช่ค่าที่ใช้ขับทั่วไป ดังนั้นคำแนะนำ “EV ทุกคันเติม 40 psi” จึงข้ามรายละเอียดสำคัญของรถ ยาง และการบรรทุกไป ให้ใช้ <Source href={teslaManual}>ข้อมูลแรงดันยางในคู่มือรถ</Source> เป็นจุดตั้งต้น</p>
      </Section>

      <Section id="choose-tyre" title="3. เลือกความนุ่ม เงียบ และการยึดเกาะให้ตรงชีวิตจริง">
        <p>เมื่อผ่านสเปกพื้นฐานแล้ว ค่อยเทียบคุณสมบัติที่คุณต้องการ ยางที่โดดเด่นด้านหนึ่งไม่ได้แปลว่าจะดีที่สุดทุกด้าน และชื่อรุ่นเดียวกันอาจมีหลายขนาดหรือหลายสเปกย่อย</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>ขับทุกวัน เจอฝนบ่อย:</strong> ให้ความสำคัญกับข้อมูลการยึดเกาะและเบรกบนถนนเปียกของขนาดที่กำลังซื้อ พร้อมตรวจสภาพดอกยางและศูนย์ล้อ</li>
          <li><strong>อยากเงียบขึ้น:</strong> โฟมซับเสียงช่วยจัดการเสียงบางลักษณะ แต่ไม่ใช่คำรับรองว่าจะเงียบทุกผิวถนน อ่านหลักการของ <Source href="https://www.michelin.co.th/why-michelin/innovation/acoustic-technology">Michelin Acoustic Technology</Source> แล้วตรวจว่ายางรหัสที่ซื้อมีเทคโนโลยีนั้นจริงหรือไม่</li>
          <li><strong>สนใจระยะวิ่ง:</strong> เทียบข้อมูลแรงต้านการหมุนภายใต้เงื่อนไขเดียวกัน ไม่ควรนำตัวเลขประหยัดไฟของรถทดสอบรุ่นหนึ่งมารับรองระยะวิ่งของรถเรา</li>
          <li><strong>มีวันลงสนาม:</strong> แยกโจทย์ถนนสาธารณะกับสนามให้ชัด ขอคำแนะนำสำหรับรถและยางชุดนั้นจากผู้ผลิตหรือผู้เชี่ยวชาญ ไม่ใช้พิกัดความเร็วเป็นคำรับรองการยึดเกาะทุกสถานการณ์</li>
        </ul>
        <p>ก่อนตัดสินใจ ขอชื่อรุ่น ขนาด และรหัสยางเต็มจากร้าน แล้วตรวจใน <Source href="https://www.michelin.co.th/auto/advice/choose-tyres/car-tyre-size-table">คู่มืออ่านขนาดและพิกัดยางของ Michelin</Source> หากยางมีโฟมและต้องซ่อมภายหลัง ให้ร้านตรวจจากด้านในตาม <Source href="https://www.michelin.co.th/auto/advice/change-tyres/tyre-repair">แนวทางซ่อมยางของผู้ผลิต</Source> แทนการสรุปวิธีซ่อมจากรอยรั่วภายนอกเพียงอย่างเดียว</p>
      </Section>

      <Section id="coilover" title="4. คอยล์โอเวอร์ที่เหมาะ เริ่มจากตรงรุ่นและอาการที่อยากแก้">
        <p>คอยล์โอเวอร์เป็นชุดสปริงและแดมเปอร์ที่มีการปรับความสูงตามการออกแบบของชุดนั้น ก่อนเทียบจำนวนปุ่มปรับ ให้ระบุว่าต้องการแก้อาการอะไร เช่น รถกระแทกบนรอยต่อ โยนต่อหลังผ่านเนิน หรืออยากลดความสูงโดยยังใช้งานประจำวันได้ แล้วตรวจสภาพยางและช่วงล่างเดิมก่อน</p>
        <h3 className="text-xl font-bold text-slate-900">Spring Rate ไม่ใช่คะแนนว่าใครเกาะถนนกว่า</h3>
        <p>Spring Rate บอกความแข็งของสปริง แต่ความรู้สึกที่ล้อยังขึ้นกับตำแหน่งและอัตราทดการติดตั้ง น้ำหนักที่สปริงรองรับ ระยะยุบ และการทำงานของแดมเปอร์ จึงไม่ควรคัดลอกค่า 8K หรือ 10K จากรถคนละรุ่น หรือคำนวณสั่งสปริงจากน้ำหนักรถรวมเพียงตัวเดียว</p>
        <p>สปริง Linear มีอัตราความแข็งคงที่ในช่วงการทำงานที่ออกแบบไว้ ส่วน Progressive มีอัตราความแข็งเปลี่ยนไปตามระยะยุบ ทั้งสองแบบต้องทำงานร่วมกับชุดช่วงล่างที่ออกแบบมารองรับ จึงไม่ควรจัดอันดับว่าแบบหนึ่งนุ่มหรือดีกว่าอีกแบบเสมอไป หากต้องการเทียบแนวทางแต่ละแบรนด์ อ่าน <Link href="/articles/ev-suspension-tuning-guide" className={linkStyle}>คู่มือเลือกช่วงล่าง EV ตามลักษณะการใช้งาน</Link></p>
        <h3 className="text-xl font-bold text-slate-900">ถามร้านให้ครบก่อนวางมัดจำ</h3>
        <ul className="list-disc space-y-3 pl-6">
          <li>รหัสชุดตรงกับรุ่น ปี รุ่นย่อย และพิกัดน้ำหนักเพลาของรถเราหรือไม่ มีคู่มือติดตั้งให้ตรวจไหม?</li>
          <li>ช่วงปรับความสูงที่ผู้ผลิตอนุญาตเท่าไร และยังเหลือระยะยุบใช้งานเพียงพอกับการบรรทุกของเราหรือไม่?</li>
          <li>หากรถมีแดมเปอร์ไฟฟ้าหรือระบบปรับระดับเดิม ชุดใหม่รองรับระบบนั้นอย่างไร และฟังก์ชันใดจะเปลี่ยนไป?</li>
          <li>หลังติดตั้งมีการตั้งศูนย์ ตรวจระยะล้อ–ยาง และบันทึกค่าตั้งต้นให้หรือไม่ รวมถึงบริการซ่อมและอะไหล่ในอนาคต?</li>
        </ul>
        <p>เก็บคู่มือติดตั้งที่ตรงรหัสชุดและรายการตั้งค่าหลังติดตั้งไว้ด้วย เมื่อกลับไปตรวจซ้ำ คุณกับร้านจะมีข้อมูลชุดเดียวกันสำหรับเทียบว่าปรับอะไรไปบ้าง และอาการเปลี่ยนไปอย่างไร</p>
      </Section>

      <Section id="ride-height" title="5. โหลดเตี้ยแค่ไหน ต้องดูรถ ชุดช่วงล่าง และเส้นทางจริง">
        <p>ความสูงที่ดูลงตัวในรูปอาจไม่พอกับทางเข้าบ้าน ลูกระนาด หรือผู้โดยสารเต็มคัน ไม่ควรใช้ตัวเลขลดความสูงหรือระยะใต้ท้องค่าเดียวกับ EV ทุกคัน ให้ตรวจช่วงปรับที่ผู้ผลิตชุดช่วงล่างอนุญาตและระยะจริงหลังติดตั้ง รวมทั้งช่วงที่ล้อเลี้ยวและช่วงล่างยุบตัว</p>
        <p>การเปลี่ยนความสูงยังสัมพันธ์กับมุมล้อและเรขาคณิตช่วงล่าง จึงควรตรวจและตั้งศูนย์หลังติดตั้ง อ่าน <Link href="/articles/ev-camber-adjustment-wheel-alignment-guide" className={linkStyle}>เรื่อง Camber และการตั้งศูนย์ล้อ EV</Link> เพื่อเข้าใจว่าทำไมรถที่เตี้ยขึ้นจึงยังต้องตรวจการสึกของยางและการตอบสนองของพวงมาลัย</p>
      </Section>

      <Section id="damper-next" title="6. ยาง สปริง และแดมเปอร์เกี่ยวข้องกันอย่างไร?">
        <p>ยางเป็นจุดสัมผัสถนน สปริงรองรับน้ำหนักและเปิดให้ช่วงล่างเคลื่อนตัว ส่วนแดมเปอร์ควบคุมการเคลื่อนไหวนั้น เมื่อเลือกยางและชุดช่วงล่างตรงรถแล้ว จึงค่อยประเมินจังหวะยุบและยืดให้เข้ากับการใช้งาน</p>
        <p>รายละเอียดปุ่มปรับและกราฟแรงหน่วงอยู่ใน <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>คู่มือปรับแดมเปอร์: Bump และ Rebound</Link> ซึ่งอธิบายเรื่องนี้โดยเฉพาะ บทความหน้านี้เน้นช่วยเลือกอุปกรณ์ให้ถูกชุดก่อนเริ่มปรับ</p>
      </Section>

      <Section id="before-you-buy" title="7. เช็กลิสต์ที่ใช้คุยกับร้านได้ทันที">
        <ul className="space-y-4">
          {['ถ่ายป้ายข้อมูลยางและจดรุ่น ปี รุ่นย่อย พร้อมขนาดล้อ–ยางที่ใช้อยู่จริง', 'ระบุการใช้งานหลัก จำนวนผู้โดยสาร และอาการที่ต้องการแก้ให้ชัด', 'ขอรหัสยางหรือชุดช่วงล่างเต็ม พร้อมเอกสารยืนยันความเข้ากันได้', 'ตกลงงานตั้งศูนย์ ตรวจระยะติดตั้ง และค่าตั้งต้นที่จะได้รับหลังงานเสร็จ', 'ขอเงื่อนไขการรับประกัน การตรวจซ้ำ และบริการอะไหล่เป็นลายลักษณ์อักษร'].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1.5 shrink-0 text-lime-600" size={20} /><span>{item}</span></li>)}
        </ul>
        <p>เป้าหมายคือรถที่ตอบโจทย์คุณมากขึ้น โดยมีข้อมูลอธิบายได้ว่าของแต่ละชิ้นเหมาะอย่างไร <Link href="/" className={linkStyle}>EVSELECT</Link> กำลังเปิดความรู้ก่อนเปิดขายสินค้า ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      </Section>
      <footer className="flex flex-wrap gap-6 border-t border-slate-200 pt-6 text-base">
        <Link href="/articles" className={linkStyle}>อ่านบทความและคู่มือทั้งหมด</Link>
        <Link href="/articles/ev-carbon-ceramic-brakes-guide" className={`${linkStyle} inline-flex items-center gap-2`}>อ่านต่อ: Carbon Ceramic คุ้มกับรถคุณไหม?<ArrowRight size={18} /></Link>
      </footer>
    </div>
  </article>;
}
