import MobileMenu from "@/components/MobileMenu";
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  MessageCircle, 
  Rocket,
  Sparkles
} from 'lucide-react';

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="storefront-shell min-h-screen flex flex-col bg-white text-slate-900 selection:bg-lime-500 selection:text-black">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-slate-200 leading-tight">
            <strong className="text-lime-400 font-semibold">EVSELECT กำลังเตรียมเปิดตัวสินค้า</strong>
            <span className="hidden sm:inline"> — ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย</span>
          </span>
        </div>
        <span className="hidden md:inline text-slate-600">|</span>
        <span className="hidden md:inline text-slate-300">
          อ่านบทความและบอกรุ่นรถที่คุณใช้ได้ก่อน
        </span>
      </div>

      {/* Main Storefront Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <MobileMenu />
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            {/* Mobile Logo */}
            <div className="xl:hidden relative w-24 sm:w-36 h-9 sm:h-10 overflow-hidden rounded-lg bg-white p-1 flex items-center justify-center border border-slate-200 shadow-xs transition-all duration-300 group-hover:border-lime-500">
              <Image
                src="/logo.png"
                alt="EVSELECT"
                width={140}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Desktop / PC Logo */}
            <div className="hidden xl:flex relative w-40 lg:w-44 h-12 lg:h-14 overflow-hidden rounded-xl bg-white p-1.5 items-center justify-center border border-slate-200 shadow-xs transition-all duration-300 group-hover:border-lime-500 group-hover:shadow-md group-hover:scale-[1.02]">
              <Image
                src="/logo-desktop.png"
                alt="EVSELECT - DRIVE BETTER. SELECT SMARTER."
                width={380}
                height={190}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/#launch" className="hover:text-lime-600 transition-colors">
              เตรียมเปิดตัว
            </Link>
            <Link href="/articles" className="hover:text-lime-600 transition-colors flex items-center gap-1.5 font-semibold text-slate-800">
              <Sparkles className="w-4 h-4 text-lime-600" />
              บทความ EV
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              href="/#launch"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] h-11 bg-lime-50 hover:bg-lime-100 text-lime-800 border border-lime-200 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>กำลังเปิดตัว</span>
            </Link>

            {/* Facebook / Line Link */}
            <a
              href="https://m.me/evselects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] h-11 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-2 rounded-lg transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">สอบถามทาง LINE / FB</span>
              <span className="sm:hidden">แชท</span>
            </a>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* Storefront Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="md:col-span-1 space-y-4">
              <div className="relative w-48 h-14 overflow-hidden rounded-xl bg-white p-1.5 flex items-center justify-center border border-zinc-800 shadow-sm">
                <Image
                  src="/logo-desktop.png"
                  alt="EVSELECT"
                  width={380}
                  height={190}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                บทความรถยนต์ไฟฟ้า ความรู้เรื่องช่วงล่าง และแนวทางเลือกอุปกรณ์เสริมสำหรับผู้ใช้รถ EV ในไทย
              </p>
              <div className="flex items-center gap-2 text-xs text-lime-400 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>อ่านข้อมูลให้ครบก่อนตัดสินใจ</span>
              </div>
            </div>

            {/* Supported Models */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">รุ่นรถที่มีบทความ</h4>
              <ul className="text-xs space-y-2 text-zinc-400">
                <li className="hover:text-lime-400 transition-colors">BYD Atto 3 / Seal / Sealion 7</li>
                <li className="hover:text-lime-400 transition-colors">Tesla Model 3 Highland & Legacy</li>
                <li className="hover:text-lime-400 transition-colors">Tesla Model Y & Model Y L</li>
                <li className="hover:text-lime-400 transition-colors">Zeekr X & Zeekr 009</li>
                <li className="hover:text-lime-400 transition-colors">Deepal S05 / S07 & Geely EX2</li>
              </ul>
            </div>

            {/* Channels & Support */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">ติดตามการเปิดตัวและติดต่อ</h4>
              <ul className="text-xs space-y-1 text-zinc-400">
                <li>
                  <Link href="/#launch" className="min-h-[44px] py-2.5 flex items-center gap-2 hover:text-lime-400 transition-colors">
                    <Rocket className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                    <span>สถานะการเปิดตัวสินค้า</span>
                  </Link>
                </li>
                <li>
                  <a href="https://m.me/evselects" target="_blank" rel="noopener noreferrer" className="min-h-[44px] py-2.5 flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Facebook Page & Marketplace</span>
                  </a>
                </li>
                <li><Link href="/contact" className="min-h-[44px] py-2.5 flex items-center gap-2 hover:text-lime-400 transition-colors">ติดต่อ EVSELECT</Link></li>
              </ul>
            </div>

            {/* Quality Commitment */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">แนวทาง EVSELECT</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                เราแยกข้อมูลจากผู้ผลิต หลักการทั่วไป และสิ่งที่ยังต้องตรวจสอบ เพื่อให้ผู้อ่านเห็นข้อจำกัดของข้อมูลก่อนนำไปใช้
              </p>
              <div className="pt-2">
                <Link
                  href="/editorial-policy"
                  className="min-h-[44px] inline-flex items-center justify-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-2 rounded"
                >
                  <span>อ่านนโยบายบทความ</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} EVSELECT Thailand. สงวนลิขสิทธิ์ทุกประการ</p>
            <p className="font-mono text-[11px] text-zinc-500">
              DRIVE BETTER. SELECT SMARTER.™
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

