import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import bc from "../../public/images/articles/damper-guide/bc-zr.webp";

const startingPoints = [
  {
    number: "01",
    category: "ของใช้ในรถ",
    title: "ใช้รถสะดวกขึ้น",
    description: "พรม ถาดคอนโซล ที่เก็บของ เลือกชิ้นที่ใช้จริง และเช็กรุ่นรถให้ตรงก่อนซื้อ",
    href: "#tesla-accessories",
    linkLabel: "ดูของแต่งภายใน Tesla",
    image: "/images/editorial/tesla-model-3-performance-2024.png",
    imageAlt: "Tesla Model 3 Performance ปี 2024 สีเทา มองจากด้านหน้าซ้าย เห็นตัวรถและล้อครบ",
    imageClass: "bg-[#f7f7f7] object-contain",
  },
  {
    number: "02",
    category: "ล้อและยาง",
    title: "เปลี่ยนล้อ เปลี่ยนฟีล",
    description: "อย่าเลือกแค่ลายล้อ ขนาดและพิกัดยางต้องตรงกับรถและการใช้งานด้วย",
    href: "/articles/ev-tyre-and-coilover-selection-guide",
    linkLabel: "อ่านวิธีเลือกยางรถไฟฟ้า",
    image: "/images/articles/ev-tyre-michelin-audi.jpg",
    imageAlt: "แก้มยาง Michelin Pilot Sport All Season 4 บนล้อ Audi เห็นชื่อรุ่นและรหัสขนาดยาง",
    imageClass: "bg-slate-100 object-cover",
  },
  {
    number: "03",
    category: "ช่วงล่าง",
    title: "รถเด้ง ต้องเปลี่ยนโช้ค?",
    description: "ลองแยกอาการก่อน รถเด้ง กระแทก หรือโยน ไม่ได้แก้ด้วยโช้คแบบเดียวกันเสมอไป",
    href: "/articles/ev-damper-tuning-bump-rebound-guide#symptoms",
    linkLabel: "เข้าใจอาการก่อนปรับโช้ค",
    image: bc,
    imageAlt: "โช้ค BC Racing ZR พร้อมซับแทงก์และสายเชื่อมแยกจากกระบอก",
    imageClass: "bg-white object-contain",
  },
];

export default function EvUpgradeInfographic() {
  return (
    <div
      id="ev-upgrade-map"
      aria-labelledby="ev-upgrade-map-heading"
      className="mb-10 scroll-mt-28 border-y border-slate-200 py-7 sm:py-8"
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 id="ev-upgrade-map-heading" className="font-bold">เริ่มจากสิ่งที่ใช้จริง</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">สามจุดเริ่มต้น เลือกจากสิ่งที่อยากเปลี่ยน</p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime-500" /><Link href="/" className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700">EVSELECTS</Link> / QUICK GUIDE</span>
      </div>

      <ol className="grid gap-6 md:grid-cols-3 md:gap-7">
        {startingPoints.map(({ number, category, title, description, href, linkLabel, image, imageAlt, imageClass }) => (
          <li key={number} className="grid min-w-0 grid-cols-[6rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[8rem_minmax(0,1fr)] md:flex md:flex-col md:gap-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl sm:aspect-square md:aspect-[16/10]">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 639px) 96px, (max-width: 767px) 128px, (max-width: 1279px) 30vw, 384px" className={imageClass} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col md:pt-5">
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-500"><span aria-hidden="true" className="text-lime-800">{number}</span><span aria-hidden="true" className="h-px w-4 bg-slate-300" />{category}</p>
              <h4 className="mt-2 text-lg font-bold leading-relaxed">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              <Link href={href} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-3 text-sm font-semibold text-lime-800 underline underline-offset-4 hover:text-lime-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700">
                {linkLabel}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-lime-50 px-4 py-4 sm:px-5">
        <p className="text-sm font-semibold">ก่อนซื้อ เช็ก 3 อย่างนี้</p>
        <ol aria-label="สิ่งที่ต้องเช็กก่อนซื้อของแต่ง" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
          {['รุ่นรถและปี', 'การใช้งาน', 'งบรวมติดตั้ง'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-lime-800" />{item}
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">ภาพประกอบการเลือก ไม่ใช่การยืนยันว่าอุปกรณ์ในภาพใช้ได้กับรถทุกคัน</p>
    </div>
  );
}
