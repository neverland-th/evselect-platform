"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Car, Sparkles, ShieldCheck, ShoppingBag, MessageCircle, Layers } from "lucide-react";

export default function MobileMenu() {
  const drawerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const drawer = drawerRef.current;
    const scroller = scrollerRef.current;
    const sheet = sheetRef.current;
    const openBtn = openBtnRef.current;
    if (!drawer || !scroller || !sheet || !openBtn) return;

    const visibleThreshold = 1 / window.innerWidth;
    
    const onDrawerOpened = () => {
      openBtn.setAttribute('aria-expanded', 'true');
      sheet.focus();
    };
    
    const onDrawerClosed = () => {
      drawer.hidePopover();
      openBtn.setAttribute('aria-expanded', 'false');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(-1);
        if (entry && entry.intersectionRatio < visibleThreshold) onDrawerClosed();
        if (entry && entry.intersectionRatio === 1) onDrawerOpened();
      },
      { root: drawer, threshold: [0, visibleThreshold, 1] }
    );
    observer.observe(sheet);

    // Initial state: drawer popover is closed
    return () => observer.disconnect();
  }, []);

  const openDrawer = () => {
    const drawer = drawerRef.current;
    const scroller = scrollerRef.current;
    if (!drawer || !scroller) return;
    
    try {
        drawer.showPopover();
    } catch(e) {}
    
    // Fallback for browsers without scroll-initial-target:
    // When popover is first shown, it might be at scrollLeft=0.
    // If we want it to animate in, it needs to start from closed.
    if (scroller.scrollLeft === 0) {
      scroller.scrollBy({ left: 100, behavior: 'instant' } as any);
    }

    // Now smooth scroll it into view
    scroller.scrollTo({left: 0, behavior: 'smooth'});
  };

  const closeDrawer = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({left: scroller.offsetWidth, behavior: 'smooth'});
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
      closeDrawer();
    }
  };

  return (
    <div className="md:hidden flex items-center">
      {/* Trigger */}
      <button
        ref={openBtnRef}
        onClick={openDrawer}
        id="drawer-open"
        className="p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
        aria-label="Menu"
        aria-expanded="false"
        aria-controls="drawer"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Popover Manual Drawer */}
      {/* @ts-ignore */}
      <div 
        className="Drawer" 
        id="drawer" 
        popover="manual"
        ref={drawerRef}
        onClick={handleBackdropClick}
      >
        <div className="Drawer-scroller" ref={scrollerRef}>
          <nav className="Drawer-sheet bg-white text-slate-900 shadow-2xl flex flex-col" ref={sheetRef} tabIndex={-1}>
            {/* Drawer Header */}
            <div className="h-16 border-b border-zinc-100 flex items-center justify-between px-4 shrink-0">
              <span className="font-bold tracking-tight text-slate-800">
                EV<span className="text-lime-600">SELECT</span>
              </span>
              <button
                onClick={closeDrawer}
                className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              <Link
                href="/articles"
                onClick={closeDrawer}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 hover:bg-lime-50 hover:text-lime-700 transition-colors font-semibold"
              >
                <Sparkles className="w-4 h-4 text-lime-600" />
                บทความ EV
              </Link>
              <a
                href="/#vehicle-finder"
                onClick={closeDrawer}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
              >
                <Car className="w-4 h-4" />
                ค้นหารถ (Vehicle Finder)
              </a>
              <a
                href="/#products"
                onClick={closeDrawer}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium"
              >
                <ShoppingBag className="w-4 h-4" />
                หมวดหมู่สินค้า
              </a>
              <a
                href="/#fitment-assurance"
                onClick={closeDrawer}
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
                onClick={closeDrawer}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors text-sm font-medium mt-4"
              >
                <Layers className="w-4 h-4" />
                ระบบหลังบ้าน (Admin)
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .Drawer {
          --drawer-width: min(20em, 80dvw);
          --drawer-backdrop: 0;
          width: auto;
          height: auto;
          background: transparent;
          border: 0;
          overflow: visible;
          margin: 0;
          inset: 0;
        }

        .Drawer::backdrop {
          background: #000;
          opacity: calc(var(--drawer-backdrop) / 2);
        }

        .Drawer-scroller {
          position: relative;
          display: grid;
          grid-template-columns: var(--drawer-width) 100vw;
          overflow-x: auto;
          overscroll-behavior-x: none;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
          width: 100vw;
          height: 100dvh;
        }

        .Drawer-scroller::-webkit-scrollbar {
          display: none;
        }

        .Drawer-scroller::after {
          content: '';
          scroll-snap-align: end;
          scroll-initial-target: nearest;
        }

        .Drawer-sheet {
          height: 100dvh;
          overflow-y: auto;
          scroll-snap-align: start;
          scrollbar-width: none;
        }

        @supports (animation-timeline: scroll()) {
          .Drawer {
            timeline-scope: --drawer-fade;
            animation: fade-drawer-backdrop linear both;
            animation-timeline: --drawer-fade;
          }

          .Drawer-scroller {
            scroll-timeline: --drawer-fade x;
          }

          @property --drawer-backdrop {
            syntax: '<number>';
            inherits: true;
            initial-value: 0;
          }

          @keyframes fade-drawer-backdrop {
            0% { --drawer-backdrop: 1 }
            100% { --drawer-backdrop: 0 }
          }
        }
      `}} />
    </div>
  );
}
