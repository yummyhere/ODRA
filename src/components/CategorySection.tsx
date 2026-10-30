import React from 'react';
import { CATEGORIES } from '../data/products';
import { useInquiry } from '../context/InquiryContext';
import { ArrowRight } from 'lucide-react';

export const CategorySection: React.FC = () => {
  const { setActiveNavTab, setActiveCategoryFilter } = useInquiry();

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryFilter(categoryId);
    setActiveNavTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
            Explore Now
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1.5">
            SHOP BY CATEGORY
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Browse the counter by what you're cooking or serving. Click through to view specific cuts, custom trim options, and wholesale packaging.
          </p>
        </div>

        {/* Category Circular Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1.5"
            >
              {/* Circular Image Container */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 border-2 border-stone-200 group-hover:border-[#C8484A] shadow-md group-hover:shadow-xl transition-all duration-300 bg-white">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                >
                  <div className="absolute inset-0 rounded-full bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* Title & Item Count */}
              <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-[#1A1614] mt-3.5 group-hover:text-[#C8484A] transition-colors">
                {cat.label}
              </h4>
              <span className="text-xs text-stone-500 font-medium mt-0.5">
                {cat.itemCount}+ Available
              </span>
            </button>
          ))}
        </div>

        {/* View All Meat Products Banner Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              setActiveNavTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#C8484A] hover:text-[#A83638] hover:underline cursor-pointer"
          >
            <span>Browse Full Product Counter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
