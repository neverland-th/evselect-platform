import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  BatteryCharging,
  ShieldAlert,
  Zap,
  Settings,
  BookOpen,
  ChevronRight,
  Sparkles,
  Award
} from 'lucide-react';
import ShareButton from '@/components/ShareButton';

export const metadata: Metadata = {
  title: '5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี | EVSELECT',
  description: 'เรียนรู้เทคนิคการชาร์จที่ถูกต้อง การตั้งค่า Limit การชาร์จ และพฤติกรรมที่ควรหลีกเลี่ยงเพื่อยืดอายุแบตเตอรี่รถยนต์ไฟฟ้าของคุณให้ใช้งานได้ยาวนานเกิน 10 ปี',
  keywords: [
    'ดูแลแบตเตอรี่รถ EV',
    'แบตเตอรี่รถยนต์ไฟฟ้า',
    'ถนอมแบต EV',
    'ชาร์จรถไฟฟ้า 80%',
    'แบตเตอรี่ LFP vs NMC',
    'ยืดอายุแบตเตอรี่ EV',
    'ม่านบังแดดรถ EV'
  ],
  alternates: {
    canonical: 'https://evselect.com/articles/ev-battery-care',
  },
  openGraph: {
    title: '5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี | EVSELECT',
    description: 'รวม 5 เทคนิคสำคัญในการถนอมแบตเตอรี่รถยนต์ไฟฟ้า ตั้งแต่พฤติกรรมการชาร์จ อุณหภูมิ ไปจนถึงการตั้งค่า Limit เพื่ออายุการใช้งานเกิน 10 ปี',
    url: 'https://evselect.com/articles/ev-battery-care',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Guides',
    tags: ['EV Battery', 'Battery Care', 'EV Tips', 'Electric Vehicles', 'Guide'],
    images: [
      {
        url: '/images/reviews/ev-battery-hero-new.jpg',
        width: 1200,
        height: 675,
        alt: 'การดูแลแบตเตอรี่รถยนต์ไฟฟ้า EV Battery Care'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี | EVSELECT',
    description: 'เทคนิคการชาร์จและพฤติกรรมที่ช่วยยืดอายุแบตเตอรี่รถยนต์ไฟฟ้าของคุณให้ทนทาน',
    images: ['/images/reviews/ev-battery-hero-new.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': '5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี',
  'description': 'เรียนรู้เทคนิคการชาร์จที่ถูกต้อง การตั้งค่า Limit การชาร์จ และพฤติกรรมที่ควรหลีกเลี่ยงเพื่อยืดอายุแบตเตอรี่รถยนต์ไฟฟ้าของคุณ',
  'image': 'https://evselect.com/images/reviews/ev-battery-hero-new.jpg',
  'datePublished': '2026-08-25T08:00:00+07:00',
  'dateModified': '2026-08-29T07:00:00+07:00',
  'author': {
    '@type': 'Organization',
    'name': 'EVSELECT Editorial Team',
    'url': 'https://evselect.com'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'EVSELECT Thailand',
    'url': 'https://evselect.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://evselect.com/logo-desktop.png'
    }
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://evselect.com/articles/ev-battery-care'
  }
};

export default function EVBatteryCareArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปหน้ารวมบทความและรีวิวรถยนต์ไฟฟ้า</span>
        </Link>
      </nav>

      {/* 2. Article Header */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="bg-lime-50 text-lime-700 border border-lime-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            Tips &amp; Tricks Guide
          </span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
            คู่มือดูแลรักษารถยนต์ไฟฟ้า
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 25 สิงหาคม 2569
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 5 นาที
          </span>
        </div>

        <h1 
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี
        </h1>
        
        <p 
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          แบตเตอรี่คือหัวใจสำคัญและชิ้นส่วนที่มีมูลค่าสูงที่สุดของรถยนต์ไฟฟ้า การดูแลรักษาอย่างถูกวิธีไม่เพียงช่วยยืดอายุการใช้งานให้ทนทาน แต่ยังช่วยคงมูลค่าของตัวรถไว้ได้นานที่สุด
        </p>
      </header>

      {/* 3. Featured Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-14 border border-slate-200 bg-slate-100 shadow-md">
        <Image
          src="/images/reviews/ev-battery-hero-new.jpg"
          alt="การชาร์จแบตเตอรี่รถยนต์ไฟฟ้า EV Battery Charging"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      {/* 4. Article Body */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">
        
        <p className="text-slate-700 leading-relaxed text-base sm:text-base">
          ผู้ใช้รถ EV มือใหม่หลายคนมักมีความกังวลเกี่ยวกับ <strong>&quot;แบตเตอรี่เสื่อม&quot; (Battery Degradation)</strong> ซึ่งเป็นปรากฏการณ์ทางเคมีตามธรรมชาติที่เกิดขึ้นกับแบตเตอรี่ลิเธียมไอออนทุกประเภท ไม่ว่าจะเป็นในสมาร์ทโฟนหรือยานยนต์ไฟฟ้า แต่ด้วยเทคโนโลยีระบบจัดการแบตเตอรี่ (BMS - Battery Management System) ในรถ EV ยุคปัจจุบัน การเสื่อมสภาพนั้นเกิดขึ้นช้ามาก หากเราใช้งานและปรับพฤติกรรมอย่างถูกวิธี
        </p>

        <p className="text-slate-700 leading-relaxed text-base sm:text-base">
          วันนี้ทีมบรรณาธิการ <strong>EVSELECT</strong> ขอแนะนำ 5 เทคนิคสำคัญที่คุณสามารถทำตามได้ง่ายๆ ในชีวิตประจำวัน เพื่อถนอมแบตเตอรี่รถยนต์ไฟฟ้าคันโปรดของคุณให้อยู่ในสภาพสมบูรณ์และใช้งานได้ยาวนานเกิน 10 ปี
        </p>

        <hr className="border-slate-200 my-10" />

        {/* Tip 1 */}
        <div className="my-10 not-prose">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-lime-500 text-black p-3.5 rounded-2xl shrink-0 shadow-sm">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0 mb-1.5">
                1. รักษาระดับแบตเตอรี่ให้อยู่ระหว่าง 20% - 80%
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                กฎทองของการใช้แบตเตอรี่ลิเธียมไอออนคือ <strong>&quot;ไม่ควรปล่อยให้แบตเตอรี่หมดเกลี้ยง (ต่ำกว่า 20%) และไม่จำเป็นต้องชาร์จเต็ม 100% ตลอดเวลา&quot;</strong>
              </p>
            </div>
          </div>
          
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            การชาร์จแบตเตอรี่จนเต็ม 100% บ่อยครั้งจะทำให้เซลล์แบตเตอรี่เกิดความเครียดสูง (High State of Charge Stress) ซึ่งเร่งให้เกิดการเสื่อมสภาพทางเคมี แนะนำให้ตั้งค่า Limit การชาร์จในตัวรถหรือแอปพลิเคชันไว้ที่ <strong>80%</strong> สำหรับการใช้งานประจำวัน และชาร์จเต็ม 100% เฉพาะเมื่อต้องเดินทางไกลเท่านั้น
          </p>

          <div className="bg-lime-50/70 border-l-4 border-lime-500 p-4 rounded-r-2xl text-xs sm:text-sm text-slate-700 leading-relaxed my-4">
            <strong className="text-lime-900 font-bold">*หมายเหตุสำคัญสำหรับแบตเตอรี่ LFP:</strong> สำหรับรถที่ใช้แบตเตอรี่ชนิด LFP (Lithium Iron Phosphate) เช่น BYD Atto 3, BYD Dolphin, Geely EX2 หรือ Deepal S05 ผู้ผลิตแนะนำให้ชาร์จเต็ม 100% อย่างน้อยสัปดาห์ละ 1 ครั้ง เพื่อให้ระบบ BMS ทำการคำนวณและปรับสมดุลแรงดันระหว่างเซลล์ (Cell Balancing) ได้อย่างแม่นยำ
          </div>
        </div>

        {/* Tip 2 */}
        <div className="my-10 not-prose">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-600 text-white p-3.5 rounded-2xl shrink-0 shadow-sm">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0 mb-1.5">
                2. อย่าพึ่งพาการชาร์จเร็ว (DC Fast Charge) มากเกินไป
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                แม้ว่าสถานีชาร์จเร็ว DC จะสะดวกรวดเร็ว แต่ความร้อนสะสมที่เกิดขึ้นระหว่างการอัดกระแสไฟสูงคือปัจจัยเร่งการเสื่อมสภาพของเซลล์
              </p>
            </div>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            ความร้อนสะสมจากการชาร์จ DC บ่อยครั้งจะทำให้โครงสร้างผลึกภายในเซลล์แบตเตอรี่เสื่อมเร็วกว่าปกติ ควรใช้การชาร์จแบบ AC (Home Charger หรือ Wallbox) ที่บ้านเป็นหลัก เพราะเป็นการชาร์จช้าข้ามคืนด้วยกระแสไฟที่สม่ำเสมอ ซึ่งถนอมแบตเตอรี่ได้ดีที่สุด และเก็บ DC Fast Charge ไว้ใช้เฉพาะเวลาออกทริปเดินทางไกล
          </p>
        </div>

        {/* Tip 3 */}
        <div className="my-10 not-prose">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-amber-500 text-white p-3.5 rounded-2xl shrink-0 shadow-sm">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0 mb-1.5">
                3. หลีกเลี่ยงการจอดรถตากแดดจัดเป็นเวลานาน
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                ความร้อนไม่เพียงมาจากกระแสไฟ แต่ยังมาจากสภาพอากาศเมืองไทย 40 องศา อุณหภูมิสะสมที่สูงเกินไปจะเร่งปฏิกิริยาเคมีที่ไม่พึงประสงค์ภายในแบตเตอรี่
              </p>
            </div>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
            พยายามจอดรถในที่ร่ม อาคารจอดรถ หรือใต้หลังคา หากหลีกเลี่ยงไม่ได้ การติดตั้ง <strong>ม่านบังแดดหลังคากระจกพาโนรามา</strong> หรือฟิล์มกรองแสงกันความร้อนสูง จะช่วยลดอุณหภูมิสะสมในห้องโดยสารลงได้มาก ซึ่งส่งผลดีต่อทั้งแบตเตอรี่และยืดอายุการใช้งานของวัสดุภายในรถ
          </p>

          {/* Sunroof Shade Accessory Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 my-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="relative w-full sm:w-1/3 h-36 rounded-2xl overflow-hidden shrink-0 bg-slate-200 border border-slate-200">
              <Image 
                src="/images/sunroof-shade.jpg" 
                alt="ม่านบังแดดหลังคาแก้วพาโนรามา EVSELECT" 
                fill 
                sizes="(max-width: 640px) 100vw, 250px"
                className="object-cover" 
              />
              <div className="absolute top-2.5 left-2.5 bg-lime-500 text-black text-[10px] font-black px-2 py-0.5 rounded">
                Must-Have Item
              </div>
            </div>
            <div className="flex-1 space-y-2 text-center sm:text-left">
              <h4 className="text-base font-bold text-slate-900 m-0">
                ไอเทมแนะนำ: ม่านบังแดดหลังคาพาโนรามา Nano-Silver สู้แดดไทย
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 m-0 leading-relaxed">
                ลดอุณหภูมิสะสมในห้องโดยสารขณะจอดตากแดดได้ถึง 10-15°C ช่วยลดภาระคอมเพรสเซอร์แอร์และถนอมแบตเตอรี่รถคุณ
              </p>
              <div className="pt-1">
                <Link 
                  href="/#products" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-700 hover:text-lime-800"
                >
                  <span>เลือกซื้อม่านบังแดดตรงรุ่นรถของคุณ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tip 4 */}
        <div className="my-10 not-prose">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-purple-600 text-white p-3.5 rounded-2xl shrink-0 shadow-sm">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0 mb-1.5">
                4. วางแผนหากต้องจอดรถทิ้งไว้หลายสัปดาห์
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                หากคุณต้องเดินทางไปต่างประเทศหรือไม่ได้ใช้รถเป็นเวลานาน ไม่ควรชาร์จทิ้งไว้ที่ 100% หรือปล่อยให้แบตเตอรี่เหลือน้อยกว่า 20%
              </p>
            </div>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            ระดับประจุแบตเตอรี่ที่เหมาะสมที่สุดสำหรับการจอดรถทิ้งไว้ระยะยาว (Storage Mode) คือประมาณ <strong>50% - 60%</strong> เพื่อลดความเครียดของเซลล์แบตเตอรี่ให้น้อยที่สุด นอกจากนี้ หากจอดที่บ้านและมีแท่นชาร์จ AC ควรเสียบสายชาร์จทิ้งไว้ (หากรถรองรับฟังก์ชัน Maintain) เพื่อให้ระบบ BMS ดึงไฟบ้านมาเลี้ยงอุปกรณ์อิเล็กทรอนิกส์ 12V และปรับอุณหภูมิได้โดยไม่ต้องใช้ไฟจากแบตเตอรี่หลัก
          </p>
        </div>

        {/* Tip 5 */}
        <div className="my-10 not-prose">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-emerald-600 text-white p-3.5 rounded-2xl shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0 mb-1.5">
                5. ขับขี่อย่างนุ่มนวล หลีกเลี่ยงการกระชากคันเร่งรุนแรงบ่อยครั้ง
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                อัตราเร่งที่รวดเร็วทันใจคือเสน่ห์ของรถ EV แต่การเหยียบคันเร่งแบบจมมิดบ่อยๆ จะสร้างความร้อนสูงให้กับเซลล์แบตเตอรี่
              </p>
            </div>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            การเร่งออกตัวแบบเต็มกำลัง (Launch) บ่อยครั้งจะทำให้เกิดการดึงกระแสไฟมหาศาลออกจากแบตเตอรี่ในเวลาสั้นๆ ส่งผลให้อุณหภูมิเซลล์พุ่งสูงขึ้นอย่างรวดเร็ว การขับขี่แบบค่อยเป็นค่อยไป ใช้คันเร่งอย่างนุ่มนวล และปล่อยให้ระบบ <strong>Regenerative Braking (One-Pedal Drive)</strong> ช่วยชะลอความเร็ว จะช่วยให้แบตเตอรี่ทำงานอยู่ในสภาวะที่สบายที่สุด และเพิ่มระยะทางขับขี่ต่อการชาร์จอีกด้วย
          </p>
        </div>

        <hr className="border-slate-200 my-10" />
        
        {/* Summary Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 my-8 shadow-sm not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-lime-600" /> บทสรุปจากผู้เชี่ยวชาญ EVSELECT
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed m-0">
            เทคโนโลยีแบตเตอรี่ของรถยนต์ไฟฟ้ายุคปัจจุบันพัฒนาไปไกลมาก ผู้ผลิตส่วนใหญ่รับประกันแบตเตอรี่นานถึง <strong>8 ปี หรือ 160,000 กิโลเมตร</strong> หากคุณปรับเปลี่ยนพฤติกรรมการใช้งานเล็กน้อยตาม 5 ข้อที่แนะนำนี้ คุณจะสามารถใช้งานรถยนต์ไฟฟ้าคันโปรดของคุณได้อย่างสบายใจ แบตเตอรี่เสื่อมช้าลงอย่างเห็นได้ชัด และประหยัดค่าใช้จ่ายในระยะยาวได้อย่างยั่งยืน
          </p>
        </div>
      </div>

      {/* 5. Related Articles Grid */}
      <section className="my-16 border-t border-slate-200 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-lime-600" />
            <h3 className="text-xl font-bold text-slate-900">รีวิวรถยนต์ไฟฟ้าที่น่าสนใจ</h3>
          </div>
          <Link
            href="/articles"
            className="text-xs font-semibold text-lime-700 hover:text-lime-800 flex items-center gap-1"
          >
            <span>ดูรีวิวทั้งหมด</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Related Card 1: Deepal S07 */}
          <Link
            href="/articles/deepal-s07-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/deepal-s07-hero.jpg"
                alt="รีวิว Changan Deepal S07"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                D-Segment SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Changan Deepal S07: มอเตอร์ 258 แรงม้า ม่านบังแดดไฟฟ้าสู้แดดไทย
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกเอสยูวีไฟฟ้ารุ่นพี่ ออปชันหรูหรา และการชาร์จ DC 167 kW
              </p>
            </div>
          </Link>

          {/* Related Card 2: Deepal S05 */}
          <Link
            href="/articles/deepal-s05-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/deepal-s05-hero.jpg"
                alt="รีวิว Changan Deepal S05"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Smart Tech SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Changan Deepal S05: กล้อง 4K Gimbal ไฟหน้า DLP ฉายหนัง และ Frunk 159 ลิตร
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกเอสยูวีไฟฟ้าน้องใหม่สายแคมปิ้ง ออปชันไฮเทค และการชาร์จเร็ว 3C
              </p>
            </div>
          </Link>

          {/* Related Card 3: Geely EX2 */}
          <Link
            href="/articles/geely-ex2-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/geely-ex2-hero.jpg"
                alt="รีวิว Geely EX2 สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Urban City EV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                สัมผัสแรกกับซิตี้คาร์ไฟฟ้าขับหลัง 116 แรงม้า ที่นุ่มนวลที่สุดในงบ 4 แสนบาท
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 6. Article Footer & Sharing */}
      <footer className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="text-sm text-slate-600 hover:text-lime-700 flex items-center gap-2 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> ดูบทความและรีวิวทั้งหมด
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">แชร์บทความนี้:</span>
          <ShareButton title="5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
