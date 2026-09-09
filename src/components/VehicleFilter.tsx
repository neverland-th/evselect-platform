'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Car, 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  RotateCcw, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight,
  ExternalLink,
  Tag,
  Zap
} from 'lucide-react';

export interface VehicleOption {
  id: string;
  make: string;
  model: string;
  year: string;
  variant: string;
}

export interface StorefrontProduct {
  id: string;
  sku: string;
  title: string;
  description: string | null;
  categoryName: string;
  shopeeId: string | null;
  wooId: string | null;
  cost: number | null;
  priceThb: number;
  imageUrl?: string | null;
  verifiedVehicles: {
    vehicleId: string;
    make: string;
    model: string;
    year: string;
    variant: string;
    status: string;
  }[];
}

interface VehicleFilterProps {
  vehicles: VehicleOption[];
  products: StorefrontProduct[];
}

export default function VehicleFilter({ vehicles, products }: VehicleFilterProps) {
  const [selectedMake, setSelectedMake] = useState<string>('ALL');
  const [selectedModel, setSelectedModel] = useState<string>('ALL');
  const [selectedVariant, setSelectedVariant] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Derive unique makes
  const makes = useMemo(() => {
    const set = new Set(vehicles.map((v) => v.make));
    return Array.from(set).sort();
  }, [vehicles]);

  // Derive models based on selected make
  const models = useMemo(() => {
    if (selectedMake === 'ALL') {
      const set = new Set(vehicles.map((v) => v.model));
      return Array.from(set).sort();
    }
    const filtered = vehicles.filter((v) => v.make === selectedMake);
    const set = new Set(filtered.map((v) => v.model));
    return Array.from(set).sort();
  }, [vehicles, selectedMake]);

  // Derive variants based on make and model
  const variants = useMemo(() => {
    return vehicles.filter((v) => {
      if (selectedMake !== 'ALL' && v.make !== selectedMake) return false;
      if (selectedModel !== 'ALL' && v.model !== selectedModel) return false;
      return true;
    });
  }, [vehicles, selectedMake, selectedModel]);

  // Derive categories from products
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.categoryName));
    return ['ALL', ...Array.from(set).sort()];
  }, [products]);

  // Filter products based on selected vehicle criteria and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (activeCategory !== 'ALL' && product.categoryName !== activeCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesText =
          product.title.toLowerCase().includes(q) ||
          product.sku.toLowerCase().includes(q) ||
          (product.description && product.description.toLowerCase().includes(q)) ||
          product.categoryName.toLowerCase().includes(q);
        if (!matchesText) return false;
      }

      // Vehicle fitment filter
      if (selectedMake !== 'ALL' || selectedModel !== 'ALL' || selectedVariant !== 'ALL') {
        const matchesFitment = product.verifiedVehicles.some((vf) => {
          if (selectedMake !== 'ALL' && vf.make !== selectedMake) return false;
          if (selectedModel !== 'ALL' && vf.model !== selectedModel) return false;
          if (selectedVariant !== 'ALL' && vf.variant !== selectedVariant) return false;
          return vf.status === 'PASSED';
        });
        return matchesFitment;
      }

      return true;
    });
  }, [products, selectedMake, selectedModel, selectedVariant, searchQuery, activeCategory]);

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setSelectedModel('ALL');
    setSelectedVariant('ALL');
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setSelectedVariant('ALL');
  };

  const handleReset = () => {
    setSelectedMake('ALL');
    setSelectedModel('ALL');
    setSelectedVariant('ALL');
    setSearchQuery('');
    setActiveCategory('ALL');
  };

  const isFiltered = selectedMake !== 'ALL' || selectedModel !== 'ALL' || selectedVariant !== 'ALL' || searchQuery !== '' || activeCategory !== 'ALL';

  return (
    <div className="space-y-12">
      {/* Vehicle Finder Filter Card */}
      <div 
        id="vehicle-finder"
        className="relative bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 text-lime-700 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
              <Car className="w-4 h-4 text-lime-600" />
              <span>ระบบค้นหาอุปกรณ์เสริมตรงรุ่น EV สเปกไทย</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              เลือกรุ่นรถของคุณ เพื่อแสดงสินค้าที่ผ่านการทดสอบตรงรุ่น 100%
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              ระบบจะแสดงเฉพาะสินค้าที่ผ่านการทดสอบบนรถพวงมาลัยขวาในไทย ปลอดภัย ใส่ได้พอดีแน่นอน
            </p>
          </div>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ล้างตัวกรอง</span>
            </button>
          )}
        </div>

        {/* Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Make Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              1. ยี่ห้อรถ (Brand)
            </label>
            <select
              value={selectedMake}
              onChange={(e) => handleMakeChange(e.target.value)}
              className="w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 text-slate-900 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-lime-600 focus:ring-1 focus:ring-lime-600 transition-colors font-medium shadow-xs"
            >
              <option value="ALL">ทุกยี่ห้อ (BYD, Tesla, Zeekr...)</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Model Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              2. รุ่นรถ (Model)
            </label>
            <select
              value={selectedModel}
              onChange={(e) => handleModelChange(e.target.value)}
              disabled={selectedMake === 'ALL' && models.length === 0}
              className="w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 text-slate-900 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-lime-600 focus:ring-1 focus:ring-lime-600 transition-colors disabled:opacity-50 font-medium shadow-xs"
            >
              <option value="ALL">
                {selectedMake === 'ALL' ? 'ทุกรุ่น' : `ทุกรุ่นของ ${selectedMake}`}
              </option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Variant / Trim Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              3. สเปก / รุ่นย่อยในไทย (Variant)
            </label>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              disabled={variants.length === 0}
              className="w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 text-slate-900 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-lime-600 focus:ring-1 focus:ring-lime-600 transition-colors disabled:opacity-50 font-medium shadow-xs"
            >
              <option value="ALL">ทุกรุ่นย่อยในไทย</option>
              {variants.map((v) => (
                <option key={v.id} value={v.variant}>
                  {v.variant} ({v.year})
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              4. ค้นหาชื่อสินค้า / SKU
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ถาดคอนโซล, พรม, ม่านบังแดด..."
                className="w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 text-slate-900 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-lime-600 focus:ring-1 focus:ring-lime-600 transition-colors placeholder:text-slate-400 shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Selected Vehicle Badge Status */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">รุ่นรถที่กำลังเลือก:</span>
            {selectedMake !== 'ALL' || selectedModel !== 'ALL' || selectedVariant !== 'ALL' ? (
              <span className="inline-flex items-center gap-1.5 bg-lime-50 text-lime-800 border border-lime-300 font-semibold px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-600" />
                <span>
                  {selectedMake !== 'ALL' ? selectedMake : ''} {selectedModel !== 'ALL' ? selectedModel : ''} {selectedVariant !== 'ALL' ? `• ${selectedVariant}` : ''}
                </span>
              </span>
            ) : (
              <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium">
                แสดงสินค้าสำหรับรถทุกรุ่น
              </span>
            )}
          </div>

          <div className="text-slate-500">
            พบสินค้าตรงรุ่น <strong className="text-slate-900 font-mono font-bold">{filteredProducts.length}</strong> รายการ
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      {categories.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs text-slate-500 font-medium shrink-0 flex items-center gap-1 mr-1">
            <Tag className="w-3.5 h-3.5 text-slate-400" /> หมวดหมู่:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-lime-500 text-black shadow-xs font-bold'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'ทั้งหมด (All Categories)' : cat}
            </button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      <div id="products">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>รายการอุปกรณ์เสริมผ่านการทดสอบตรงรุ่น</span>
              <span className="text-xs font-mono font-bold bg-lime-50 text-lime-700 border border-lime-200 px-2.5 py-0.5 rounded-full">
                QC สเปกไทย
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-0.5">
              มั่นใจได้ 100% ใส่ได้พอดี ไม่ติดขัด พร้อมสั่งซื้อบน Shopee หรือทักแชทสั่งตรง
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">ไม่พบสินค้าที่ตรงกับเงื่อนไขที่เลือก</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              ทางทีมงานอาจกำลังอยู่ในขั้นตอนการทดสอบสำหรับรุ่นรถนี้ หรือไม่มีสินค้าตรงกับคำค้นหา
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-lime-500 text-black text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-lime-400 transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>แสดงสินค้าทั้งหมด</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white hover:bg-white border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden border-b border-slate-100">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                        <Car className="w-12 h-12 stroke-[1.5]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-black/10 pointer-events-none" />

                    {/* Overlay Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs">
                        {product.categoryName}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-black bg-lime-400 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-black" />
                        <span>ผ่านทดสอบตรงรุ่น</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pb-2">
                    {/* Title & SKU */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-lime-700 transition-colors leading-snug mb-1">
                      {product.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mb-3">
                      รหัสสินค้า: {product.sku}
                    </p>

                    {/* Description */}
                    {product.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {product.description}
                      </p>
                    )}

                    {/* Verified Compatible Vehicles List */}
                    <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block">
                        รองรับกับรุ่นรถสเปกไทย:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.verifiedVehicles.length > 0 ? (
                          product.verifiedVehicles.map((v) => (
                            <span
                              key={v.vehicleId}
                              className="inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                              <span>{v.make} {v.model} ({v.variant})</span>
                            </span>
                          ))
                        ) : (
                          <span className="text-[11px] text-slate-400 italic">อุปกรณ์เสริมสำหรับรถ EV ทั่วไป</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Buy Action Buttons */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2 space-y-3">
                  <div className="flex items-baseline justify-between pt-3">
                    <span className="text-xs text-slate-500">ราคาพิเศษในไทย:</span>
                    <span className="text-xl font-extrabold text-slate-900 font-mono">
                      ฿{product.priceThb.toLocaleString()} <span className="text-xs text-slate-500 font-normal">บาท</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://shopee.co.th/search?keyword=${encodeURIComponent(product.sku)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ซื้อบน Shopee</span>
                    </a>

                    <a
                      href={`https://m.me/evselects?ref=${encodeURIComponent(`สอบถามสินค้า SKU: ${product.sku}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-xl border border-slate-300 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                      <span>แชทสั่งซื้อ (FB)</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

