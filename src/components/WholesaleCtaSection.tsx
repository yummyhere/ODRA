import React from 'react';
import { useInquiry } from '../context/InquiryContext';
import { Phone, ArrowRight } from 'lucide-react';

export const WholesaleCtaSection: React.FC = () => {
  const { setActiveNavTab } = useInquiry();

  return (
    <section className="bg-[#120F0E] text-white py-20 sm:py-24 border-b border-[#2A2421] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C8484A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[840px] mx-auto px-4 sm:px-8 text-center relative z-10">
        <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
          For Chefs, Grocers & Food Businesses
        </span>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-[1.08] text-balance">
          RESTAURANTS & BANQUETS. WHOLESALE YOU CAN RELY ON.
        </h2>

        <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          AAA Canadian beef primals, commercial poultry master cases, custom pork cuts, and authentic European deli items. Case lot orders, weekly deliveries or dock pickup at 2395 Cawthra Rd, Mississauga.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveNavTab('wholesale');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>Wholesale Program Inquiries</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:+19058963666"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 font-display text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C9A961]" />
            <span>Call +1 (905) 896-3666</span>
          </a>
        </div>
      </div>
    </section>
  );
};
