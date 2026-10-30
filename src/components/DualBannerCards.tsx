import React from 'react';
import { useInquiry } from '../context/InquiryContext';
import { ArrowRight } from 'lucide-react';

export const DualBannerCards: React.FC = () => {
  const { setActiveNavTab, setActiveCategoryFilter } = useInquiry();

  return (
    <section className="py-12 sm:py-16 bg-[#F4EDE3]/40 border-b border-[#E8DFD3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: European Deli */}
          <div className="relative rounded-xl overflow-hidden min-h-[380px] flex flex-col justify-end p-8 text-white shadow-lg group">
            {/* Background Image with Scrim */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('/src/assets/images/european_deli_meats_1793338242936.jpg')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
                DELI COUNTER
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-1 leading-tight">
                TRADITIONAL SMOKED SAUSAGES & DELI MEATS
              </h3>
              <p className="mt-2.5 text-stone-200 text-sm leading-relaxed max-w-lg">
                Naturally hardwood smoked Polish sausages, dried kabanos, slow-cured hams, and authentic European deli cold cuts sliced to order.
              </p>
              
              <div className="mt-5">
                <button
                  onClick={() => {
                    setActiveCategoryFilter('deli');
                    setActiveNavTab('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Deli Cuts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Wholesale Supply */}
          <div className="relative rounded-xl overflow-hidden min-h-[380px] flex flex-col justify-end p-8 text-white shadow-lg group">
            {/* Background Image with Scrim */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('/src/assets/images/wholesale_cold_storage_1793338243843.jpg')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
                COMMERCIAL SUPPLY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-1 leading-tight">
                WHOLESALE SUPPLY FOR RESTAURANTS & GROCERS
              </h3>
              <p className="mt-2.5 text-stone-200 text-sm leading-relaxed max-w-lg">
                Case-lot beef primals, 40 lb commercial poultry boxes, custom restaurant trimming, and scheduled refrigerated delivery across Peel Region.
              </p>
              
              <div className="mt-5">
                <button
                  onClick={() => {
                    setActiveNavTab('wholesale');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-stone-100 text-[#1A1614] font-display text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Wholesale Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
