import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { useInquiry } from '../context/InquiryContext';
import { Search, Filter, Plus, Check, Eye, Phone, SlidersHorizontal } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { activeCategoryFilter, setActiveCategoryFilter, openProductDetail, addItem } = useInquiry();
  const [searchQuery, setSearchQuery] = useState('');
  const [wholesaleOnly, setWholesaleOnly] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategoryFilter !== 'all' && product.category !== activeCategoryFilter) {
        return false;
      }
      // Wholesale only toggle
      if (wholesaleOnly && !product.wholesaleAvailable) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchDesc = product.shortDesc.toLowerCase().includes(q) || product.fullDesc.toLowerCase().includes(q);
        const matchCat = product.categoryLabel.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchCat) return false;
      }
      return true;
    });
  }, [activeCategoryFilter, wholesaleOnly, searchQuery]);

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
            Fresh Butcher Counter & Inventory
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1.5">
            OUR MEAT & DELI SELECTION
          </h1>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Hand-trimmed Canadian AAA beef, Ontario farm poultry, traditional European deli specialties, and commercial wholesale cases available at 2395 Cawthra Rd, Mississauga.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E8DFD3] shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cuts (e.g. ribeye, sausage, poultry)..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-[#C8484A] text-stone-900"
              />
            </div>

            {/* Wholesale Filter Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-semibold text-stone-700 select-none">
                <input
                  type="checkbox"
                  checked={wholesaleOnly}
                  onChange={(e) => setWholesaleOnly(e.target.checked)}
                  className="rounded text-[#C8484A] focus:ring-[#C8484A] w-4 h-4 cursor-pointer"
                />
                <span>Show Commercial Wholesale Packs Only</span>
              </label>

              <span className="text-xs text-stone-400">
                {filteredProducts.length} items
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#C8484A] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Items
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                  activeCategoryFilter === cat.id
                    ? 'bg-[#C8484A] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-xl border border-[#E8DFD3] p-8">
            <p className="text-stone-600 font-semibold text-lg">No products match your current filters.</p>
            <p className="text-stone-400 text-sm mt-1">Try resetting the category filter or searching for another keyword.</p>
            <button
              onClick={() => {
                setActiveCategoryFilter('all');
                setSearchQuery('');
                setWholesaleOnly(false);
              }}
              className="mt-4 px-5 py-2 bg-[#1A1614] text-white text-xs font-bold uppercase tracking-wider rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => openProductDetail(product)}
                className="group bg-white rounded-lg border border-[#E8DFD3] hover:border-stone-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {product.saleBadge && (
                      <span className="absolute top-3 left-3 bg-[#C8484A] text-white text-xs font-bold px-2.5 py-1 rounded tracking-wide shadow-sm">
                        {product.saleBadge}
                      </span>
                    )}

                    {product.wholesaleAvailable && (
                      <span className="absolute top-3 right-3 bg-[#1A1614]/80 text-[#C9A961] text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm uppercase tracking-wider">
                        Wholesale Ready
                      </span>
                    )}

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#1A1614] text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                        <Eye className="w-3.5 h-3.5 text-[#C8484A]" />
                        Cut Details & Specs
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#C8484A]">
                      {product.categoryLabel}
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1A1614] mt-1 group-hover:text-[#C8484A] transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xl sm:text-2xl font-bold text-[#1A1614] tabular-nums">
                      {product.priceFormatted}
                      <span className="text-xs font-medium text-stone-500 font-sans ml-0.5">
                        {product.priceUnit}
                      </span>
                    </span>
                    {product.originalPrice && (
                      <s className="text-xs text-stone-400 font-medium tabular-nums">
                        {product.originalPrice}
                      </s>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleAdd(product, e)}
                    title="Add to wholesale / retail inquiry list"
                    className={`p-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                      addedId === product.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#F4EDE3] hover:bg-[#C8484A] text-[#1A1614] hover:text-white'
                    }`}
                  >
                    {addedId === product.id ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Wholesale Case Ordering Callout */}
        <div className="mt-14 p-8 bg-[#1A1614] text-white rounded-xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A961]">
              Commercial Inquiries & Master Packs
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mt-1">
              Need custom weight cuts or multi-case restaurant orders?
            </h3>
            <p className="text-sm text-stone-300 mt-1 max-w-xl">
              We cut primal beef ribs, striploins, and bulk poultry cases to exact chef specifications. Contact our wholesale desk for scheduled delivery or morning dock pickup.
            </p>
          </div>

          <a
            href="tel:+19058963666"
            className="bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-base font-bold uppercase tracking-wider px-6 py-3 rounded shadow transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call (905) 896-3666</span>
          </a>
        </div>
      </div>
    </div>
  );
};
