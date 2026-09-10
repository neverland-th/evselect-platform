'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Package, 
  Car, 
  ListTree, 
  FileSpreadsheet, 
  Settings, 
  ExternalLink, 
  ShieldCheck, 
  Menu, 
  X 
} from 'lucide-react';

const navSections = [
  {
    title: 'Sourcing & Catalog',
    links: [
      { href: '/products', label: 'Products & Sourcing', icon: Package },
      { href: '/vehicles', label: 'Vehicle Taxonomy', icon: Car },
      { href: '/categories', label: 'Category Mapping', icon: ListTree },
    ],
  },
  {
    title: 'Quality & Channels',
    links: [
      { href: '/fitment', label: 'Fitment Matrix', icon: FileSpreadsheet },
      { href: '/export', label: 'Export CSVs', icon: Settings },
    ],
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const renderNavLinks = (onItemClick?: () => void) => (
    <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
      {navSections.map((section) => (
        <div key={section.title} className="space-y-1.5">
          <div className="px-3 py-1 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
            {section.title}
          </div>
          {section.links.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onItemClick}
                className={`flex items-center gap-3 px-3 py-2.5 min-h-[44px] text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                    : 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-lime-300' : 'text-lime-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );

  const renderSidebarFooter = () => (
    <div className="p-3 border-t border-zinc-800 bg-zinc-900/30 flex flex-col gap-2 shrink-0">
      <Link
        href="/"
        className="flex items-center justify-between px-3 py-2.5 min-h-[44px] text-xs font-medium text-lime-400 bg-lime-950/40 border border-lime-800/50 rounded-lg hover:bg-lime-900/40 transition-colors"
      >
        <span>View Public Storefront</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
      <p className="text-[11px] text-zinc-500 text-center">
        EVSELECT Thailand Operating OS
      </p>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 text-gray-900 overflow-hidden font-sans">
      {/* Mobile Top Header (< lg) */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-zinc-950 text-white border-b border-zinc-800 shrink-0 z-30">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="min-h-[44px] min-w-[44px] p-2 -ml-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 flex items-center justify-center"
            aria-label="เปิดเมนูผู้ดูแลระบบ"
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight text-white">EVSELECT</span>
            <span className="text-[10px] bg-lime-950 text-lime-400 border border-lime-800/60 px-1.5 py-0.5 rounded font-mono font-semibold uppercase">
              Admin PIM
            </span>
          </Link>
        </div>
        <Link
          href="/"
          className="text-xs text-lime-400 hover:text-lime-300 flex items-center gap-1 font-medium px-2.5 py-1.5 min-h-[36px] bg-lime-950/40 border border-lime-800/50 rounded"
        >
          <span>Storefront</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer (< lg) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-zinc-950 text-zinc-200 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        aria-label="เมนูผู้ดูแลระบบ"
      >
        {/* Mobile Drawer Header */}
        <div className="p-4 border-b border-zinc-800/80 flex items-center justify-between shrink-0 bg-zinc-900/50">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="relative w-36 h-9 overflow-hidden rounded bg-black/40 p-1 flex items-center justify-center border border-zinc-800">
              <Image
                src="/logo.png"
                alt="EVSELECT"
                width={144}
                height={36}
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="min-h-[44px] min-w-[44px] p-2 -mr-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 flex items-center justify-center"
            aria-label="ปิดเมนูผู้ดูแลระบบ"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-4 py-2 text-xs text-zinc-400 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <span className="font-mono text-[10px] tracking-wider text-lime-400 uppercase font-semibold">Admin PIM Platform</span>
          <span className="inline-flex items-center gap-1 text-[10px] bg-lime-950/80 text-lime-400 border border-lime-800/50 px-1.5 py-0.5 rounded">
            <ShieldCheck className="w-3 h-3" /> Thai Spec
          </span>
        </div>

        {renderNavLinks(() => setIsOpen(false))}
        {renderSidebarFooter()}
      </aside>

      {/* Desktop Static Sidebar (>= lg) */}
      <aside className="hidden lg:flex w-64 bg-zinc-950 text-zinc-200 border-r border-zinc-800 flex-col shrink-0 h-full">
        {/* Brand header */}
        <div className="p-4 border-b border-zinc-800/80 flex flex-col gap-2 shrink-0 bg-zinc-900/50">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-40 h-10 overflow-hidden rounded bg-black/40 p-1 flex items-center justify-center border border-zinc-800">
              <Image 
                src="/logo.png" 
                alt="EVSELECT" 
                width={160} 
                height={40} 
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span className="font-mono text-[10px] tracking-wider text-lime-400 uppercase font-semibold">Admin PIM Platform</span>
            <span className="inline-flex items-center gap-1 text-[10px] bg-lime-950/80 text-lime-400 border border-lime-800/50 px-1.5 py-0.5 rounded">
              <ShieldCheck className="w-3 h-3" /> Thai Spec
            </span>
          </div>
        </div>

        {renderNavLinks()}
        {renderSidebarFooter()}
      </aside>

      {/* Main Admin Area */}
      <main className="min-w-0 flex-1 w-full overflow-x-hidden p-4 sm:p-6 lg:p-8 bg-gray-50 text-gray-900 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
