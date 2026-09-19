import Image from 'next/image';
import tein from '../../../public/images/articles/damper-guide/tein-flex-z.webp';
import bilstein from '../../../public/images/articles/damper-guide/bilstein-b16.webp';
import bc from '../../../public/images/articles/damper-guide/bc-zr.webp';
import ohlins from '../../../public/images/articles/damper-guide/ohlins-road-track-w177.webp';
import hksS from '../../../public/images/articles/damper-guide/hks-hipermax-s.webp';
import hksR from '../../../public/images/articles/damper-guide/hks-hipermax-r.webp';
import bangkok from '../../../public/images/articles/damper-guide/bangkok-ratchadamri.webp';
import race from '../../../public/images/articles/damper-guide/bmw-m4-gt3-spa.webp';

const photos = {
  tein: { image: tein, alt: 'ชุดโช้ค TEIN FLEX Z จากหน้าผลิตภัณฑ์ TEIN', caption: 'TEIN FLEX Z — ภาพชุดตัวอย่างของซีรีส์ ไม่ใช่การยืนยันรหัสที่ใส่กับรถของผู้อ่าน', source: 'TEIN', href: 'https://www.tein.com/products/flex_z.html' },
  bilstein: { image: bilstein, alt: 'โช้ค BILSTEIN B16 สปริงสีฟ้า พร้อมปุ่มปรับด้านล่าง', caption: 'BILSTEIN B16 — ดูปุ่มปรับที่ฐานโช้ค และเทียบหน้าที่ของปุ่มกับคู่มือชุดจริง', source: 'BILSTEIN', href: 'https://performance.bilstein.com/en/products/bilstein-b16/' },
  ohlins: { image: ohlins, alt: 'ชุด Öhlins Road & Track สำหรับ Mercedes-AMG W177 มีโช้คและสปริงหลังแยกกัน', caption: 'Öhlins Road & Track — ภาพจากหน้าชุด W177 รหัส MES MV10S1 ไม่ใช่ชุดสำหรับ EV', source: 'Öhlins', href: 'https://www.ohlins.com/th-th/automotive/road-track/mercedes-amg-a45-(w177)?v=mercedes-benz-a45-amg-2026' },
  bc: { image: bc, alt: 'โช้ค BC Racing ZR พร้อมซับแทงก์และสายเชื่อมแยกจากกระบอก', caption: 'BC Racing ZR — มองเห็น Reservoir แยกชัดเจน แต่จำนวน Way ต้องอ่านจากระบบปรับ ไม่ใช่นับถังจากภาพ', source: 'BC Racing North America', href: 'https://bcracing-na.com/series/zr-series/' },
  hksS: { image: hksS, alt: 'ภาพผลิตภัณฑ์ HKS HIPERMAX S รุ่นปัจจุบัน สปริงสีขาว', caption: 'HIPERMAX S — ผู้ผลิตวางโจทย์ให้ความสบายบนถนนทำงานร่วมกับการควบคุมรถ', source: 'HKS', href: 'https://www.hks-power.co.jp/en/product/suspension/hipermax/maxs/index.html' },
  hksR: { image: hksR, alt: 'ภาพผลิตภัณฑ์ HKS HIPERMAX R สปริงสีขาวและแหวนสีแดง', caption: 'HIPERMAX R — ผู้ผลิตให้น้ำหนักกับการขับในสนาม โดยยังคำนึงถึงการขับประจำวัน', source: 'HKS', href: 'https://www.hks-power.co.jp/en/product/suspension/hipermax/r/index.html' },
  bangkok: { image: bangkok, alt: 'รถยนต์บนถนนราชดำริ กรุงเทพฯ ถ่ายเดือนธันวาคม 2019', caption: 'ถนนราชดำริ กรุงเทพฯ ปี 2019 — ภาพบริบทการใช้รถในเมือง ไม่ใช่ภาพทดสอบโช้คหรือหลักฐานเปรียบเทียบความขรุขระของสองประเทศ', source: 'kallerna / Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Bangkok_traffic_3.jpg', license: true },
  race: { image: race, alt: 'BMW M4 GT3 หมายเลข 46 ของ Team WRT ในการแข่งขัน 24 Hours of Spa ปี 2023', caption: 'BMW M4 GT3 ของ Team WRT ที่ Spa ปี 2023 — ภาพประกอบบริบทสนาม ไม่ได้ระบุว่ารถคันนี้ใช้โช้ครุ่นใดในบทความ', source: 'ACBE25 / Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:BMWWRT462023SPA24.jpg', license: true },
} as const;

export default function DamperPhoto({ name }: { name: keyof typeof photos }) {
  const photo = photos[name];
  const isScene = 'license' in photo;
  return (
    <figure data-editorial-photo={name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <a href={photo.href} className="block rounded-t-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700" aria-label={`ดูที่มาภาพ: ${photo.source}`}>
        <Image src={photo.image} alt={photo.alt} loading="lazy" sizes={isScene ? '(max-width: 1024px) 100vw, 960px' : '(max-width: 640px) 100vw, 480px'} className={isScene ? 'h-auto w-full' : 'h-72 w-full bg-slate-50 object-contain p-5 sm:h-80'} />
      </a>
      <figcaption className="space-y-2 border-t border-slate-200 p-4 text-sm leading-relaxed text-slate-600">
        <p>{photo.caption}</p>
        <p><a href={photo.href} className="font-medium text-lime-800 underline underline-offset-4">{isScene ? 'ภาพ' : 'ภาพและข้อมูลผู้ผลิต'}: {photo.source} ↗</a>{isScene && <> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline underline-offset-4">CC BY-SA 4.0</a> · ย่อขนาดและแปลงเป็น WebP ภายใต้สัญญาอนุญาตเดิม</>}</p>
      </figcaption>
    </figure>
  );
}
