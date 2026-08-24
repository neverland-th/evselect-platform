import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Share2, BatteryCharging, ShieldAlert, Zap, Settings } from 'lucide-react';

export const metadata = {
  title: '5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี | EVSELECT',
  description: 'เรียนรู้เทคนิคการชาร์จที่ถูกต้อง การตั้งค่า Limit การชาร์จ และพฤติกรรมที่ควรหลีกเลี่ยงเพื่อยืดอายุแบตเตอรี่รถยนต์ไฟฟ้าของคุณ',
};

export default function EVBatteryCareArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Back button */}
      <Link 
        href="/articles" 
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        กลับไปหน้าบทความทั้งหมด
      </Link>

      {/* Article Header */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400">
          <span className="bg-lime-500/10 text-lime-400 border border-lime-500/20 px-3 py-1 rounded-full">
            Tips & Tricks
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            25 สิงหาคม 2569
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            ใช้เวลาอ่าน 4 นาที
          </span>
        </div>

        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
          style={{ textWrap: 'balance' } as any}
        >
          5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี
        </h1>
        
        <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
          แบตเตอรี่คือหัวใจสำคัญและชิ้นส่วนที่แพงที่สุดของรถยนต์ไฟฟ้า การดูแลรักษาอย่างถูกวิธีไม่เพียงช่วยยืดอายุการใช้งาน แต่ยังรักษามูลค่าของรถคุณไว้ได้นานที่สุด
        </p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-zinc-800">
        <Image
          src="/images/hero-bg.jpg"
          alt="EV Battery Charging"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-lime-400 hover:prose-a:text-lime-300">
        
        <p>
          ผู้ใช้รถ EV มือใหม่หลายคนมักมีความกังวลเกี่ยวกับ <strong>"แบตเตอรี่เสื่อม" (Battery Degradation)</strong> ซึ่งเป็นเรื่องธรรมชาติที่เกิดขึ้นกับแบตเตอรี่ลิเธียมไอออนทุกประเภท ไม่ว่าจะเป็นในสมาร์ทโฟนหรือรถยนต์ แต่ด้วยเทคโนโลยีระบบจัดการแบตเตอรี่ (BMS - Battery Management System) ในรถ EV ยุคปัจจุบัน การเสื่อมสภาพนั้นเกิดขึ้นช้ามาก หากเราใช้งานอย่างถูกวิธี
        </p>

        <p>
          วันนี้ EVSELECT ขอแนะนำ 5 เทคนิคสำคัญที่คุณสามารถทำได้ง่ายๆ ในชีวิตประจำวัน เพื่อถนอมแบตเตอรี่รถ EV ของคุณให้อยู่คู่รถไปได้นานเกิน 10 ปี
        </p>

        <hr className="border-zinc-800 my-10" />

        <div className="flex items-start gap-4 mb-6">
          <div className="bg-lime-500 text-black p-3 rounded-2xl shrink-0">
            <BatteryCharging className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mt-0 mb-2">1. รักษาระดับแบตเตอรี่ให้อยู่ระหว่าง 20% - 80%</h2>
            <p className="text-zinc-300">
              กฎทองของการใช้แบตเตอรี่ลิเธียมไอออนคือ <strong>"ไม่ควรปล่อยให้แบตเตอรี่หมดเกลี้ยง (0%) และไม่จำเป็นต้องชาร์จเต็ม 100% ตลอดเวลา"</strong>
            </p>
          </div>
        </div>
        <p>
          การชาร์จแบตเตอรี่จนเต็ม 100% บ่อยครั้งจะทำให้เซลล์แบตเตอรี่เกิดความเครียดสูง (High State of Charge Stress) ซึ่งเร่งให้เกิดการเสื่อมสภาพ แนะนำให้ตั้งค่า Limit การชาร์จในรถหรือแอปพลิเคชันไว้ที่ 80% สำหรับการใช้งานประจำวัน และชาร์จเต็ม 100% เฉพาะเมื่อต้องเดินทางไกลเท่านั้น
        </p>
        <p className="text-sm text-zinc-500 italic border-l-2 border-lime-500 pl-4 py-1 my-6 bg-zinc-900/30 rounded-r-lg">
          *หมายเหตุ: สำหรับรถที่ใช้แบตเตอรี่ชนิด LFP (Lithium Iron Phosphate) เช่น BYD Atto 3, BYD Seal หรือ Tesla Model 3 RWD รุ่นใหม่ ผู้ผลิตแนะนำให้ชาร์จเต็ม 100% อย่างน้อยสัปดาห์ละ 1 ครั้ง เพื่อให้ระบบ BMS ทำการคำนวณและปรับสมดุลเซลล์ (Cell Balancing) ได้อย่างแม่นยำ
        </p>

        <div className="flex items-start gap-4 mb-6 mt-12">
          <div className="bg-blue-500 text-white p-3 rounded-2xl shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mt-0 mb-2">2. อย่าพึ่งพาการชาร์จเร็ว (DC Fast Charge) มากเกินไป</h2>
            <p className="text-zinc-300">
              แม้ว่าสถานีชาร์จ DC (ตู้ชาร์จตามปั๊มน้ำมันและห้างสรรพสินค้า) จะสะดวกรวดเร็ว แต่ความร้อนสูงที่เกิดขึ้นระหว่างการชาร์จเร็วคือศัตรูตัวฉกาจของแบตเตอรี่
            </p>
          </div>
        </div>
        <p>
          ความร้อนสะสมจากการชาร์จ DC บ่อยๆ จะทำให้โครงสร้างภายในเซลล์เสื่อมเร็วกว่าปกติ ควรใช้การชาร์จแบบ AC (Home Charger หรือ Wallbox) ที่บ้านเป็นหลัก เพราะเป็นการชาร์จแบบช้าข้ามคืนที่ถนอมแบตเตอรี่ได้ดีที่สุด และเก็บ DC Fast Charge ไว้ใช้เฉพาะเวลาออกทริปเดินทางไกล
        </p>

        <div className="flex items-start gap-4 mb-6 mt-12">
          <div className="bg-orange-500 text-white p-3 rounded-2xl shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mt-0 mb-2">3. หลีกเลี่ยงการจอดรถตากแดดจัดเป็นเวลานาน</h2>
            <p className="text-zinc-300">
              ความร้อนไม่เพียงมาจากการชาร์จ แต่ยังมาจากสภาพอากาศด้วย อุณหภูมิที่สูงเกินไปจะเร่งปฏิกิริยาเคมีภายในแบตเตอรี่ ทำให้เสื่อมสภาพเร็วขึ้น
            </p>
          </div>
        </div>
        <p>
          พยายามจอดรถในที่ร่ม อาคารจอดรถ หรือใต้หลังคา หากหลีกเลี่ยงไม่ได้จริงๆ การติดตั้ง <strong>ม่านบังแดดหลังคากระจก</strong> หรือฟิล์มกรองแสงคุณภาพสูง จะช่วยลดอุณหภูมิสะสมภายในห้องโดยสาร ซึ่งส่งผลดีต่อทั้งแบตเตอรี่และยืดอายุการใช้งานของวัสดุคอนโซลรถด้วย
        </p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full blur-2xl"></div>
          <div className="relative w-full sm:w-1/3 h-32 rounded-lg overflow-hidden shrink-0 bg-black">
             <Image src="/images/sunroof-shade.jpg" alt="Sunroof Shade" fill className="object-cover" />
          </div>
          <div className="flex-1 relative z-10">
            <h4 className="text-lg font-bold text-white m-0 mb-2">ไอเทมแนะนำ: ม่านบังแดดหลังคาพาโนรามา</h4>
            <p className="text-sm text-zinc-400 m-0 mb-4">
              ลดอุณหภูมิห้องโดยสารขณะจอดตากแดด ช่วยลดภาระระบบทำความเย็นและถนอมรถคุณ
            </p>
            <Link href="/" className="inline-flex items-center text-sm font-semibold text-lime-400 hover:text-lime-300">
              เลือกซื้อม่านบังแดดตรงรุ่นรถคุณ <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-6 mt-12">
          <div className="bg-purple-500 text-white p-3 rounded-2xl shrink-0">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mt-0 mb-2">4. วางแผนหากต้องจอดรถทิ้งไว้หลายวัน</h2>
            <p className="text-zinc-300">
              หากคุณต้องเดินทางไปต่างประเทศหรือไม่ได้ใช้รถเป็นเวลาหลายสัปดาห์ ไม่ควรชาร์จแบตเตอรี่ทิ้งไว้ที่ 100% หรือปล่อยจนแบตเตอรี่ต่ำกว่า 20%
            </p>
          </div>
        </div>
        <p>
          ระดับแบตเตอรี่ที่เหมาะสมที่สุดสำหรับการจอดรถทิ้งไว้เป็นเวลานาน (Storage Mode) คือประมาณ <strong>50% - 60%</strong> เพื่อลดความเครียดของเซลล์แบตเตอรี่ นอกจากนี้ควรเสียบสายชาร์จ AC ทิ้งไว้ (หากรถรองรับฟังก์ชันนี้) เพื่อให้ระบบ BMS สามารถดึงไฟจากผนังมาเลี้ยงระบบต่างๆ ในรถและรักษาอุณหภูมิแบตเตอรี่ได้โดยไม่ต้องดึงไฟจากแบตเตอรี่หลัก
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. ขับขี่อย่างนุ่มนวล หลีกเลี่ยงการกระชาก</h2>
        <p>
          อัตราเร่งที่รวดเร็วทันใจคือเสน่ห์ของรถ EV แต่การเหยียบคันเร่งแบบจมมิด (Launch Control) หรือการเร่งกระชากบ่อยๆ จะทำให้เกิดการดึงกระแสไฟจำนวนมหาศาลออกจากแบตเตอรี่ในระยะเวลาสั้นๆ ซึ่งสร้างความร้อนสูงและความเครียดให้กับแบตเตอรี่ 
        </p>
        <p>
          การขับขี่แบบค่อยเป็นค่อยไป ใช้คันเร่งอย่างนุ่มนวล และปล่อยให้ระบบ <strong>Regenerative Braking</strong> ช่วยชะลอความเร็ว จะช่วยให้แบตเตอรี่ทำงานอยู่ในสภาวะที่สบายที่สุด และยืดระยะทางที่วิ่งได้ต่อการชาร์จอีกด้วย
        </p>

        <hr className="border-zinc-800 my-10" />
        
        <h3>สรุป</h3>
        <p>
          เทคโนโลยีแบตเตอรี่ EV พัฒนาไปไกลมาก ผู้ผลิตหลายแบรนด์รับประกันแบตเตอรี่นานถึง 8 ปี หรือ 160,000 กิโลเมตร หากคุณปรับเปลี่ยนพฤติกรรมการใช้งานเล็กน้อยตาม 5 ข้อที่กล่าวมา คุณจะสามารถใช้งานรถยนต์ไฟฟ้าคันโปรดของคุณได้อย่างสบายใจ และประหยัดค่าใช้จ่ายในระยะยาวได้อย่างแน่นอน
        </p>
      </div>

      {/* Share Section */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="EVSELECT" width={100} height={24} className="opacity-50" />
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full transition-colors">
          <Share2 className="w-4 h-4" />
          แชร์บทความนี้
        </button>
      </div>
    </article>
  );
}

