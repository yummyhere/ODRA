import React from 'react';
import { Thermometer, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

export const QualityControlSection: React.FC = () => {
  const { setActiveNavTab } = useInquiry();

  return (
    <section className="bg-[#1A1614] text-white border-b border-[#2A2421] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
        {/* Left Side: Quality Narrative and 3-Icon Row */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
              What We Deliver
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mt-1.5 leading-[1.08]">
              QUALITY CONTROL, FRESH AND WHOLESALE READY
            </h2>

            {/* 3-Icon Row matching reference split-icon-row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 pt-6 border-t border-white/10">
              <div className="flex flex-col sm:items-start">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A961] mb-2.5">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h4 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  Temperature Monitored
                </h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Continuous cold-chain integrity from intake to refrigerated customer pickup.
                </p>
              </div>

              <div className="flex flex-col sm:items-start">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A961] mb-2.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  Safe Food Standards
                </h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Strict sanitation and daily handling inspections for retail and commercial buyers.
                </p>
              </div>

              <div className="flex flex-col sm:items-start">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A961] mb-2.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  Custom Portioning
                </h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Custom primal breakdowns and portion-controlled thickness for chef kitchens.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
              At Odra Deli & Wholesale Meat, we source quality Canadian meats, poultry, and specialty European deli items. Hand-cut in Mississauga with attention to detail and personal customer service, our counter and wholesale selections provide consistent value for household kitchens and commercial food businesses alike.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => {
                  setActiveNavTab('wholesale');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-base font-bold uppercase tracking-wider px-7 py-3 rounded shadow hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Discover Wholesale Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Imagery with Guarantee Stamp matching reference */}
        <div 
          className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-cover bg-center flex items-center justify-center p-8"
          style={{ backgroundImage: `url('/src/assets/images/beef_steaks_cuts_1793338242259.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/35"></div>

          {/* Guarantee Stamp matching reference guarantee-stamp */}
          <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#C9A961] bg-[#1A1614]/85 backdrop-blur-md p-4 flex flex-col items-center justify-center text-center shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-transform">
            <div className="w-full h-full rounded-full border border-dashed border-[#C9A961]/60 flex flex-col items-center justify-center p-3">
              <span className="text-[10px] tracking-[0.25em] font-extrabold uppercase text-[#C9A961]">
                ODRA MEATS
              </span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider leading-none mt-1">
                BEST QUALITY
              </span>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#C9A961] uppercase tracking-wider leading-none">
                GUARANTEE
              </span>
              <span className="text-[9px] tracking-wider font-semibold text-stone-300 uppercase mt-1.5">
                MISSISSAUGA, ON
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
