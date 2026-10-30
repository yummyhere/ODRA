import React from 'react';
import { useInquiry } from '../context/InquiryContext';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export const Footer: React.FC = () => {
  const { setActiveNavTab, setActiveCategoryFilter } = useInquiry();

  const handleNav = (tab: string, category?: string) => {
    setActiveNavTab(tab);
    if (category) setActiveCategoryFilter(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1614] text-[#E5DCD3] border-t border-[#2A2421] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-extrabold tracking-tight text-white leading-none">
                ODRA
              </span>
              <span className="h-2 w-2 rounded-full bg-[#C8484A] inline-block mb-1"></span>
            </div>
            <div className="font-display text-xs font-bold tracking-[0.2em] text-[#C8484A] uppercase mt-1">
              DELI & WHOLESALE MEAT
            </div>
            <div className="inline-block mt-3 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#C9A961]">
              MISSISSAUGA · RETAIL & WHOLESALE
            </div>
            <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
              Odra Deli & Wholesale Meat provides Canadian AAA beef, fresh poultry, custom pork cuts, and European deli specialties for Mississauga households and commercial food businesses across the Greater Toronto Area.
            </p>
          </div>

          {/* Column 2: Products & Counter */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white mb-4">
              Counter Cuts
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav('products', cat.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('products', 'all')}
                  className="text-[#C8484A] hover:text-[#e0585a] font-semibold transition-colors cursor-pointer mt-1"
                >
                  All Products →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wholesale')} className="hover:text-white transition-colors cursor-pointer">
                  Wholesale Program
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Custom Butchery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8484A] shrink-0 mt-0.5" />
                <p>
                  2395 Cawthra Rd<br />
                  Mississauga, ON L5A 2W8, Canada
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#C8484A] shrink-0" />
                <a
                  href="tel:+19058963666"
                  className="font-bold text-white hover:text-[#C8484A] transition-colors"
                >
                  (905) 896-3666
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-stone-400 text-xs">
                <p>Retail Counter & Wholesale Dock Pickup</p>
                <p className="mt-1 text-[11px] text-stone-400">
                  Call ahead for custom cuts or bulk orders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Odra Deli & Wholesale Meat · Mississauga, Ontario.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('wholesale')} className="hover:text-white transition-colors">
              Wholesale Terms
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
              Directions & Map
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
