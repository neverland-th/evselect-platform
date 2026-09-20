import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MessageCircle, Rocket } from "lucide-react";

const launchSteps = [
  {
    number: "01",
    title: "ฟังจากคนใช้รถก่อน",
    description: "รวบรวมรุ่นรถ ปัญหาที่เจอ และอุปกรณ์ที่คนใช้จริงอยากได้",
  },
  {
    number: "02",
    title: "ตรวจข้อมูลให้พร้อม",
    description: "ระบุรุ่น ปี จุดติดตั้ง วัสดุ วิธีใช้ และข้อจำกัดให้ชัดเจน",
  },
  {
    number: "03",
    title: "ค่อยเปิดจำหน่าย",
    description: "เปิดรายละเอียดสินค้าและราคาเมื่อมีข้อมูลพอให้ตัดสินใจอย่างรับผิดชอบ",
  },
];

export default function PrelaunchPanel() {
  return (
    <section id="launch" className="scroll-mt-28 px-5 pb-14 sm:px-8 md:pb-20" aria-labelledby="launch-heading">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-300/30">
        <div className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full bg-lime-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:p-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold text-lime-300">
              <Rocket className="h-4 w-4" aria-hidden="true" /> <Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link> กำลังเตรียมเปิดตัว
            </span>
            <h2 id="launch-heading" className="mt-6 max-w-2xl font-bold text-white">
              เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              ตอนนี้คุณอ่านรีวิวและคู่มือได้เต็มที่ ส่วนอุปกรณ์เสริมอยู่ระหว่างการคัดเลือก
              และจัดทำข้อมูลรุ่นรถ จุดติดตั้ง วิธีใช้ และข้อจำกัด ก่อนเปิดจำหน่าย
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p><strong className="text-white">สถานะตอนนี้:</strong> ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200"
              >
                บอกรุ่นรถที่คุณใช้ <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                อ่านคู่มือระหว่างรอ <BookOpen className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:border-l lg:border-white/15 lg:pl-10">
            <p className="mb-2 text-sm font-semibold text-lime-300">ก่อนเปิดตัว เรากำลังทำ 3 เรื่องนี้</p>
            <ol>
              {launchSteps.map((step) => (
                <li key={step.number} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/15 py-4 last:border-b-0">
                  <span className="font-mono text-xs font-semibold text-lime-300">{step.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/editorial-policy" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime-300 hover:text-lime-200">
              นโยบายบทความ (กำลังจัดทำ) <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
