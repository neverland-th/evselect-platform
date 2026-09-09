import MobileMenu from "@/components/MobileMenu";
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  ShoppingBag, 
  ExternalLink, 
  MessageCircle, 
  Sparkles, 
  Car, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Layers 
} from 'lucide-react';

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-lime-500 selection:text-black">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-slate-200 leading-tight">
            <strong className="text-lime-400 font-semibold">การันตี Fitment ตรงรุ่น 100%</strong>
            <span className="hidden sm:inline"> — ทดสอบจริงบนรถ EV สเปกไทย</span>
          </span>
        </div>
        <span className="hidden md:inline text-slate-600">|</span>
        <span className="hidden md:inline text-slate-300">
          คัดเกรดตรงจากโรงงาน • จัดส่งไวจากกรุงเทพฯ • รับประกันเปลี่ยนคืนใน 7 วัน
        </span>
      </div>

      {/* Main Storefront Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <MobileMenu />
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            {/* Mobile Logo */}
            <div className="md:hidden relative w-28 sm:w-36 h-9 sm:h-10 overflow-hidden rounded-lg bg-white p-1 flex items-center justify-center border border-slate-200 shadow-xs transition-all duration-300 group-hover:border-lime-500">
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
            <div className="hidden md:flex relative w-44 lg:w-52 h-12 lg:h-14 overflow-hidden rounded-xl bg-white p-1.5 items-center justify-center border border-slate-200 shadow-xs transition-all duration-300 group-hover:border-lime-500 group-hover:shadow-md group-hover:scale-[1.02]">
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
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="/#vehicle-finder" className="hover:text-lime-600 transition-colors flex items-center gap-1.5">
              <Car className="w-4 h-4 text-lime-600" />
              เลือกรุ่นรถ (Vehicle Finder)
            </a>
            <a href="/#products" className="hover:text-lime-600 transition-colors">
              สินค้าตรงรุ่น (Catalog)
            </a>
            <a href="/#fitment-assurance" className="hover:text-lime-600 transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-lime-600" />
              มาตรฐานการทดสอบ (QC)
            </a>
            <a href="/#ecosystem" className="hover:text-lime-600 transition-colors">
              รุ่นรถที่รองรับ
            </a>
            <Link href="/articles" className="hover:text-lime-600 transition-colors flex items-center gap-1.5 font-semibold text-slate-800">
              <Sparkles className="w-4 h-4 text-lime-600" />
              บทความ EV
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Shopee Store Link */}
            <a
              href="https://shopee.co.th/shop/9535932"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ร้าน Shopee TH</span>
            </a>

            {/* Facebook / Line Link */}
            <a
              href="https://m.me/evselects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-2 rounded-lg transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">สอบถามทาง LINE / FB</span>
              <span className="sm:hidden">แชท</span>
            </a>

            {/* Admin Portal Switch Button */}
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 sm:px-3.5 py-2 rounded-lg shadow-xs hover:shadow-sm transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ระบบหลังบ้าน</span>
            </Link>
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
                ศูนย์รวมอุปกรณ์เสริมและของแต่งรถยนต์ไฟฟ้า (EV) ในประเทศไทย คัดสรรตรงจากโรงงานระดับท็อป พร้อมทดสอบ Fitment บนรถสเปกไทยจริงทุกชิ้นก่อนจัดส่ง
              </p>
              <div className="flex items-center gap-2 text-xs text-lime-400 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>รับประกันใส่ได้ตรงรุ่น 100%</span>
              </div>
            </div>

            {/* Supported Models */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">รุ่นรถ EV ที่รองรับในไทย</h4>
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
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">ช่องทางการสั่งซื้อและติดต่อ</h4>
              <ul className="text-xs space-y-2.5 text-zinc-400">
                <li>
                  <a href="https://shopee.co.th/shop/9535932" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <ShoppingBag className="w-3.5 h-3.5 text-orange-400" />
                    <span>ร้านค้าทางการบน Shopee Thailand</span>
                  </a>
                </li>
                <li>
                  <a href="https://m.me/evselects" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                    <span>Facebook Page & Marketplace</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-emerald-400">
                    <Phone className="w-3.5 h-3.5" />
                    <span>LINE Official: @evselect_th</span>
                  </span>
                </li>
                <li className="flex items-center gap-2 text-zinc-500 pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>ศูนย์กระจายสินค้า กรุงเทพมหานคร</span>
                </li>
              </ul>
            </div>

            {/* Quality Commitment */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">มาตรฐาน EVSELECT</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                อุปกรณ์เสริม EV ทั่วไปจากจีนมักมีปัญหาเมื่อใส่กับรถสเปกไทย (พวงมาลัยขวา / คอนโซลปรับปรุง) EVSELECT แก้ปัญหานี้ด้วยการนำเข้าตัวอย่างและลองใส่จริงก่อนเปิดขาย
              </p>
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded"
                >
                  <span>ระบบจัดการสินค้า PIM</span>
                  <ExternalLink className="w-3 h-3" />
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

