import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { useInquiry } from '../context/InquiryContext';
import { Plus, Check, ArrowRight, Eye } from 'lucide-react';

interface FreshProductsSectionProps {
  title?: string;
  eyebrow?: string;
  filterMode?: 'featured' | 'bestsellers' | 'all';
  limit?: number;
}

export const FreshProductsSection: React.FC<FreshProductsSectionProps> = ({
  title = 'FRESH AT THE COUNTER',
  eyebrow = 'This Week',
  filterMode = 'featured',
  limit = 4,
}) => {
  const { addItem, openProductDetail, setActiveNavTab, setActiveCategoryFilter } = useInquiry();
  const [addedId, setAddedId] = useState<string | null>(null);

  const displayProducts = PRODUCTS.filter((p) => {
    if (filterMode === 'featured') return p.featured;
    if (filterMode === 'bestsellers') return p.bestseller;
    return true;
  }).slice(0, limit);

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8DFD3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Split Section Head matching reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
          <div>
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1">
              {title}
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              setActiveNavTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-display font-bold uppercase tracking-wider text-[#C8484A] hover:text-[#A83638] group cursor-pointer"
          >
            <span>View All Counter Cuts</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Product Cards Grid matching reference product-card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <article
              key={product.id}
              onClick={() => openProductDetail(product)}
              className="group bg-white rounded-lg border border-[#E8DFD3] hover:border-stone-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Sale Badge */}
                  {product.saleBadge && (
                    <span className="absolute top-3 left-3 bg-[#C8484A] text-white text-xs font-bold px-2.5 py-1 rounded tracking-wide shadow-sm">
                      {product.saleBadge}
                    </span>
                  )}

                  {/* Wholesale Tag */}
                  {product.wholesaleAvailable && (
                    <span className="absolute top-3 right-3 bg-[#1A1614]/80 text-[#C9A961] text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm uppercase tracking-wider">
                      Wholesale Ready
                    </span>
                  )}

                  {/* Quick Detail Overlay on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 text-[#1A1614] text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                      <Eye className="w-3.5 h-3.5 text-[#C8484A]" />
                      View Cut Details
                    </span>
                  </div>
                </div>

                {/* Product Body */}
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

              {/* Price & Action Footer */}
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
      </div>
    </section>
  );
};
