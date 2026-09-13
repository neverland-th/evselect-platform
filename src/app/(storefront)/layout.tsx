import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-lime-300 selection:text-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:p-3 focus:rounded-lg"
      >
        ข้ามไปเนื้อหาหลัก
      </a>
      <div className="bg-slate-950 px-4 py-2.5 text-center text-xs leading-relaxed text-slate-200">
        <span className="text-lime-300 font-medium">
          อุปกรณ์เสริม EV กำลังเตรียมเปิดตัว
        </span>
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline">
          อ่านบทความและติดตามความคืบหน้าได้ที่นี่
        </span>
      </div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center min-w-0">
            <Link href="/" aria-label="EVSELECT หน้าแรก" className="shrink-0">
              <Image
                src="/logo-desktop.png"
                alt="EVSELECT"
                width={380}
                height={190}
                sizes="160px"
                className="w-32 sm:w-40 h-14 object-contain"
                preload
              />
            </Link>
          </div>
          <nav
            aria-label="เมนูหลักเดสก์ท็อป"
            className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            <Link href="/articles" className="hover:text-lime-700">
              บทความ EV
            </Link>
            <Link href="/#vehicle-finder" className="hover:text-lime-700">
              ค้นหารุ่นรถ
            </Link>
            <Link href="/#products" className="hover:text-lime-700">
              อุปกรณ์เสริม
            </Link>
            <Link href="/#fitment-assurance" className="hover:text-lime-700">
              แนวทางคัดเลือก
            </Link>
            <Link href="/about" className="hover:text-lime-700">
              เกี่ยวกับเรา
            </Link>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://m.me/evselects"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex shrink-0 justify-center items-center gap-2 min-h-11 px-3 sm:px-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-50"
          >
            <MessageCircle className="w-4 h-4" />
            <span>พูดคุยกับเรา</span>
          </a>
          <MobileMenu />
          </div>
        </div>
      </header>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9">
            <div>
              <div className="bg-white rounded-xl w-40 px-2 mb-5">
                <Image
                  src="/logo-desktop.png"
                  alt="EVSELECT"
                  width={380}
                  height={190}
                  className="w-full h-16 object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed">
                พื้นที่สำหรับคนรักรถ EV ในไทย
                <br />
                รีวิวรถ ความรู้ และแนวคิดเลือกอุปกรณ์เสริม
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-4 text-sm">
                สำรวจ EVSELECT
              </h2>
              <ul className="text-sm space-y-3">
                <li>
                  <Link href="/articles" className="hover:text-lime-300">
                    บทความทั้งหมด
                  </Link>
                </li>
                <li>
                  <Link href="/#vehicle-finder" className="hover:text-lime-300">
                    บทความตามรุ่นรถ
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="hover:text-lime-300">
                    อุปกรณ์เสริมที่กำลังเตรียมเปิดตัว
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-lime-300">
                    เกี่ยวกับเรา
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-4 text-sm">
                ติดต่อและติดตาม
              </h2>
              <ul className="text-sm space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/evselects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-lime-300"
                  >
                    Facebook EVSELECT <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.me/evselects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300"
                  >
                    พูดคุยทาง Messenger
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-lime-300">
                    ติดต่อ EVSELECT
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-4 text-sm">
                ข้อมูลเพิ่มเติม
              </h2>
              <ul className="text-sm space-y-3">
                <li>
                  <Link
                    href="/editorial-policy"
                    className="hover:text-lime-300"
                  >
                    นโยบายบทความ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-lime-300">
                    ความเป็นส่วนตัว
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-lime-300">
                    ข้อกำหนดการใช้งาน
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="hover:text-lime-300">
                    ข้อมูลการรับประกัน
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 mt-10 flex flex-col sm:flex-row justify-between gap-3 text-xs">
            <p>© {new Date().getFullYear()} EVSELECT Thailand</p>
            <p>ยังไม่เปิดรับคำสั่งซื้อในช่วงเตรียมเปิดตัว</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
