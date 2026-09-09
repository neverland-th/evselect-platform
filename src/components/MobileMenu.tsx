"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Car, Sparkles, ShieldCheck, ShoppingBag, MessageCircle, Layers, FileText, Info } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <div className="md:hidden flex items-center">
      {/* Hamburger Button */}
      <button
        onClick={open}
        className="p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
        aria-label="เปิดเมนู"
        aria-expanded={isOpen}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <nav
        className={`fixed top-0 left-0 z-[101] h-full w-[min(20rem,80vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="เมนูหลัก"
      >
        {/* Drawer Header */}
        <div className="h-16 border-b border-slate-100 flex items-center justify-between px-4 shrink-0">
          <span className="font-bold tracking-tight text-slate-800 text-lg">
            EV<span className="text-lime-600">SELECT</span>
          </span>
          <button
            onClick={close}
            className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="ปิดเมนู"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link
            href="/articles"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 hover:bg-lime-50 hover:text-lime-700 transition-colors font-semibold"
          >
            <Sparkles className="w-4.5 h-4.5 text-lime-600" />
            บทความ EV
          </Link>
          <a
            href="/#vehicle-finder"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <Car className="w-4.5 h-4.5 text-slate-500" />
            ค้นหารถ (Vehicle Finder)
          </a>
          <a
            href="/#products"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <ShoppingBag className="w-4.5 h-4.5 text-slate-500" />
            หมวดหมู่สินค้า
          </a>
          <a
            href="/#fitment-assurance"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <ShieldCheck className="w-4.5 h-4.5 text-slate-500" />
            มาตรฐาน QC ทดสอบ
          </a>

          {/* Divider */}
          <div className="my-4 border-t border-slate-100" />

          <div className="px-3 py-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ช่องทางซื้อสินค้า</span>
          </div>

          <a
            href="https://shopee.co.th/shop/9535932"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            <ShoppingBag className="w-4 h-4" />
            ร้าน Shopee EVSELECT
          </a>
          <a
            href="https://m.me/evselects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            แชท Facebook Messenger
          </a>

          {/* Divider */}
          <div className="my-4 border-t border-slate-100" />

          <div className="px-3 py-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ข้อมูลเพิ่มเติม</span>
          </div>

          <Link
            href="/about"
            onClick={close}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium"
          >
            <Info className="w-4 h-4" />
            เกี่ยวกับ EVSELECT
          </Link>
          <Link
            href="/privacy"
            onClick={close}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            นโยบายความเป็นส่วนตัว
          </Link>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-100 text-[11px] text-slate-400 text-center shrink-0">
          DRIVE BETTER. SELECT SMARTER.™
        </div>
      </nav>
    </div>
  );
}
