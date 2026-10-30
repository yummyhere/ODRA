import React from 'react';
import { useInquiry } from '../context/InquiryContext';
import { Phone, ArrowRight } from 'lucide-react';
import { images } from '../assets/images';

export const AboutStatsSection: React.FC = () => {
  const { setActiveNavTab } = useInquiry();

  return (
    <section className="py-20 bg-white border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Butcher Craft Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              <img
                src={images.butcherCraft}
                alt="Master butcher hand trimming meat at Odra Deli & Wholesale Meat"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Overlay Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1A1614]/90 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A961]">
                  Butchery Craftsmanship
                </span>
                <p className="text-sm font-medium text-stone-200 mt-0.5">
                  Hand-cut to your exact thickness and trim specifications.
                </p>
              </div>
            </div>

            {/* Subtle decorative background block */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 bg-[#F4EDE3] rounded-xl -z-10 border border-[#E8DFD3]"></div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
              The Premier Meat & Deli Provider
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-2 leading-[1.1]">
              YOUR LOCAL MEAT & DELI DESTINATION IN MISSISSAUGA
            </h2>
            
            <p className="mt-5 text-stone-700 text-base sm:text-lg leading-relaxed">
              Odra Deli & Wholesale Meat serves customers in Mississauga, Ontario, with a focus on meat and deli products for retail shoppers and business buyers.
            </p>

            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you are shopping for weekend barbecue roasts, premium steaks, European cured sausages, or seeking a consistent commercial meat supplier for your restaurant, banquet hall, or market, our team provides knowledgeable service and dependable cuts.
            </p>

            {/* Factual Stats Row */}
            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#C8484A] pl-4">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#1A1614] tabular-nums">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                  Canadian & Quality Meat Sourcing
                </div>
              </div>

              <div className="border-l-2 border-[#C9A961] pl-4">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#1A1614] tabular-nums">
                  6 Days
                </div>
                <div className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                  Retail Counter & Wholesale Inquiries
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveNavTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#1A1614] hover:bg-[#332B27] text-white font-display text-base font-bold uppercase tracking-wider px-6 py-3 rounded shadow hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+19058963666"
                className="inline-flex items-center gap-2 border border-stone-300 hover:border-[#C8484A] hover:text-[#C8484A] text-stone-800 font-display text-base font-bold uppercase tracking-wider px-5 py-3 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8484A]" />
                <span>Call (905) 896-3666</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
