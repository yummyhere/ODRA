import React, { useState } from 'react';
import { X, Check, Phone, Shield, Flame, Scissors, ShoppingBag } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

export const ProductDetailModal: React.FC = () => {
  const { selectedProductForDetail, closeProductDetail, addItem } = useInquiry();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!selectedProductForDetail) return null;

  const product = selectedProductForDetail;

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      closeProductDetail();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={closeProductDetail}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] sm:aspect-[2/1] bg-stone-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <button
            onClick={closeProductDetail}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A961]">
              {product.categoryLabel}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Price & Unit */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <div className="font-display text-3xl font-bold text-[#1A1614] tabular-nums">
                {product.priceFormatted}
                <span className="text-sm font-normal text-stone-500 font-sans ml-1">
                  {product.priceUnit}
                </span>
              </div>
              {product.originalPrice && (
                <div className="text-xs text-stone-400 mt-0.5">
                  Regular: <s>{product.originalPrice}</s> · {product.saleBadge} special
                </div>
              )}
            </div>

            {product.wholesaleAvailable && (
              <span className="bg-[#FAF7F2] text-[#1A1614] border border-[#E8DFD3] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                Wholesale Available
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mt-5">
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {product.fullDesc}
            </p>
          </div>

          {/* Cut Specifications */}
          {product.cutSpecs && product.cutSpecs.length > 0 && (
            <div className="mt-6 p-4 bg-[#FAF7F2] rounded-lg border border-[#E8DFD3]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8484A] mb-2">
                <Scissors className="w-4 h-4" />
                <span>Butcher Cut Specifications</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {product.cutSpecs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8484A]"></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cooking & Handling Advice */}
          {product.cookingTips && (
            <div className="mt-4 flex items-start gap-3 text-xs sm:text-sm text-stone-600 bg-stone-50 p-3.5 rounded border border-stone-200">
              <Flame className="w-4 h-4 text-[#C8484A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900">Recommended Preparation: </span>
                {product.cookingTips}
              </div>
            </div>
          )}

          {/* Quantity Selector & Add to Inquiry Action */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-stone-300 rounded overflow-hidden w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold transition-colors cursor-pointer"
              >
                -
              </button>
              <div className="px-4 py-2 font-display text-lg font-bold min-w-16 text-center tabular-nums">
                {quantity} {product.priceUnit.replace('/', '').trim() || 'lb'}
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold transition-colors cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 w-full sm:w-auto py-3 px-6 rounded font-display text-base font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#C8484A] hover:bg-[#A83638] text-white shadow hover:shadow-md'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added to Inquiry List!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Inquiry List</span>
                </>
              )}
            </button>

            <a
              href="tel:+19058963666"
              className="w-full sm:w-auto px-4 py-3 rounded border border-stone-300 hover:border-[#1A1614] text-stone-800 font-display text-base font-bold uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8484A]" />
              <span>Call Counter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
