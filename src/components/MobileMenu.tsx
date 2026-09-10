"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Car, Sparkles, ShieldCheck, ShoppingBag, MessageCircle, FileText, Info } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevIsOpenRef = useRef(isOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll and manage focus transitions
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus drawer when opened
      const focusTimer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      if (prevIsOpenRef.current) {
        triggerRef.current?.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  // Focus trap & Escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }

      if (e.key === "Tab") {
        if (!navRef.current) return;
        const focusableElements = navRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <div className="xl:hidden flex items-center shrink-0">
      {/* Hamburger Button */}
      <button
        ref={triggerRef}
        onClick={open}
        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 shrink-0"
        aria-label="เปิดเมนู"
        aria-expanded={isOpen}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 z-[101] h-full w-[min(20rem,80vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full invisible"
        }`}
        aria-label="เมนูหลัก"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        {/* Drawer Header */}
        <div className="h-16 border-b border-slate-100 flex items-center justify-between px-4 shrink-0">
          <span className="font-bold tracking-tight text-slate-800 text-lg">
            EV<span className="text-lime-600">SELECT</span>
          </span>
          <button
            ref={closeButtonRef}
            onClick={close}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500"
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
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-slate-700 hover:bg-lime-50 hover:text-lime-700 transition-colors font-semibold"
          >
            <Sparkles className="w-5 h-5 text-lime-600" />
            บทความ EV
          </Link>
          <a
            href="/#vehicle-finder"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <Car className="w-5 h-5 text-slate-500" />
            ค้นหารถ (Vehicle Finder)
          </a>
          <a
            href="/#products"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <ShoppingBag className="w-5 h-5 text-slate-500" />
            หมวดหมู่สินค้า
          </a>
          <a
            href="/#fitment-assurance"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <ShieldCheck className="w-5 h-5 text-slate-500" />
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
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-orange-600 hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            <ShoppingBag className="w-5 h-5" />
            ร้าน Shopee EVSELECT
          </a>
          <a
            href="https://m.me/evselects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-5 h-5" />
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
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium"
          >
            <Info className="w-5 h-5" />
            เกี่ยวกับ EVSELECT
          </Link>
          <Link
            href="/privacy"
            onClick={close}
            className="flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium"
          >
            <FileText className="w-5 h-5" />
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
