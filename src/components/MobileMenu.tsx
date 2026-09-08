"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Car, Sparkles, ShieldCheck, ShoppingBag, MessageCircle, Layers } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden flex items-center">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={"fixed top-0 left-0 h-full w-[280px] bg-white z-[100] transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col " + (isOpen ? "translate-x-0" : "-translate-x-full")}
      >
        {/* Drawer Header */}
        <div className="h-16 border-b border-zinc-100 flex items-center justify-between px-4">
          <span className="font-bold tracking-tight text-slate-800">
            EV<span className="text-lime-600">SELECT</span>
          </span>
          <button
            onClick={closeMenu}
            className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link
            href="/articles"
            onClick={closeMenu}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 hover:bg-lime-50 hover:text-lime-700 transition-colors font-semibold"
          >
            <Sparkles className="w-4 h-4 text-lime-600" />
            บทความ EV
          </Link>
          <a
            href="/#vehicle-finder"
            onClick={closeMenu}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <Car className="w-4 h-4" />
            ค้นหารถ (Vehicle Finder)
          </a>
          <a
            href="/#products"
            onClick={closeMenu}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <ShoppingBag className="w-4 h-4" />
            หมวดหมู่สินค้า
          </a>
          <a
            href="/#fitment-assurance"
            onClick={closeMenu}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
          >
            <ShieldCheck className="w-4 h-4" />
            ความมั่นใจ (QC)
          </a>
          
          <div className="my-4 border-t border-zinc-100"></div>
          
          <div className="px-3 py-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ติดต่อเรา</span>
          </div>
          
          <a
            href="https://shopee.co.th/shop/9535932"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            <ShoppingBag className="w-4 h-4" />
            Shopee Thailand
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            LINE / FB Page
          </a>
          <Link
            href="/products"
            onClick={closeMenu}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors text-sm font-medium mt-4"
          >
            <Layers className="w-4 h-4" />
            ระบบหลังบ้าน (Admin)
          </Link>
        </div>
      </div>
    </div>
  );
}
