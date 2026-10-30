import React from 'react';
import { ShieldCheck, Award, Scissors } from 'lucide-react';

export const ServiceStrip: React.FC = () => {
  return (
    <section className="bg-[#C8484A] text-white py-8 border-y border-[#B23E40]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Card 1 */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-4 first:md:pl-0">
            <div className="p-2.5 bg-black/15 rounded-lg shrink-0 mt-0.5">
              <ShieldCheck className="w-7 h-7 text-[#F4EDE3]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                High-Quality Meat
              </h3>
              <p className="mt-1 text-sm text-white/90 leading-relaxed font-normal">
                Hand-selected Canadian AAA beef, fresh Ontario poultry, and humanely raised pork — expertly hand-trimmed by skilled butchers.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-4">
            <div className="p-2.5 bg-black/15 rounded-lg shrink-0 mt-0.5">
              <Award className="w-7 h-7 text-[#F4EDE3]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                Best Value & Selection
              </h3>
              <p className="mt-1 text-sm text-white/90 leading-relaxed font-normal">
                Comprehensive retail counter cuts, traditional European deli specialties, cured sausages, and volume wholesale pricing.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-4 last:md:pr-0">
            <div className="p-2.5 bg-black/15 rounded-lg shrink-0 mt-0.5">
              <Scissors className="w-7 h-7 text-[#F4EDE3]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                Cut to Order & Specs
              </h3>
              <p className="mt-1 text-sm text-white/90 leading-relaxed font-normal">
                Tell us your thickness, trim, or commercial packaging requirements — custom cuts and primals prepared to your exact kitchen needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
