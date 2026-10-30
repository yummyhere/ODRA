import React from 'react';
import { MapPin, Phone, ShieldCheck, Scissors, Store, Truck, ArrowRight } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import { images } from '../assets/images';

export const AboutPage: React.FC = () => {
  const { setActiveNavTab } = useInquiry();

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1A1614] text-white p-8 sm:p-14 mb-12 shadow-xl border border-stone-800">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url('${images.butcherCraft}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614] via-[#1A1614]/85 to-transparent"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
              About Our Business
            </span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-[1.08]">
              YOUR LOCAL MEAT & DELI DESTINATION
            </h1>
            <p className="mt-4 text-stone-200 text-base leading-relaxed">
              Serving retail shoppers and food business buyers in Mississauga, Ontario, with a dedicated focus on quality meat and deli products.
            </p>
          </div>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-center">
          <div className="lg:col-span-7">
            <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
              Mission & Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1.5">
              BUTCHERY DEDICATION & PERSONAL SERVICE
            </h2>

            <div className="mt-5 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Odra Deli & Wholesale Meat</strong> serves customers in Mississauga, Ontario, with a focus on meat and deli products for retail shoppers and business buyers.
              </p>
              <p>
                From everyday family dinners to restaurant and catering supply, we pride ourselves on offering careful hand-trimming, European cured deli favorites, and commercial wholesale packaging.
              </p>
              <p>
                Located conveniently on <strong>2395 Cawthra Rd</strong>, our counter invites walk-in customers to choose from Canadian AAA beef cuts, fresh poultry, pork, and specialty sausages. Commercial clients enjoy direct communication with experienced butchers who understand cut specifications, portion yields, and kitchen lead times.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-[#E8DFD3] shadow-sm">
                <Store className="w-6 h-6 text-[#C8484A] mb-2" />
                <h4 className="font-display text-base font-bold uppercase text-[#1A1614]">
                  Retail Meat & Deli Counter
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Cut-to-order steaks, sliced deli meats, and family barbecue cuts.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#E8DFD3] shadow-sm">
                <Truck className="w-6 h-6 text-[#C8484A] mb-2" />
                <h4 className="font-display text-base font-bold uppercase text-[#1A1614]">
                  Wholesale & Food Service
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Bulk master cases, primal cuts, and regular restaurant supply.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={images.butcherCounter}
                alt="Odra butcher display counter"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-stone-50 border-t border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8484A]">
                  Fresh Counter Display
                </span>
                <p className="text-xs text-stone-600 mt-1">
                  Carefully selected cuts, clean counter display, and personal customer service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
              Counter & Facility Showcase
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1">
              INSIDE ODRA DELI & WHOLESALE MEAT
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md bg-white border border-[#E8DFD3] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images.beefSteaks}
                  alt="AAA Canadian Beef Steaks"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h5 className="font-display text-base font-bold uppercase text-[#1A1614]">
                  AAA Canadian Beef
                </h5>
                <p className="text-xs text-stone-500 mt-0.5">
                  Hand-cut striploins, ribeyes, and short ribs.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md bg-white border border-[#E8DFD3] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images.deliMeats}
                  alt="Artisanal European Deli Counter"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h5 className="font-display text-base font-bold uppercase text-[#1A1614]">
                  European Deli Counter
                </h5>
                <p className="text-xs text-stone-500 mt-0.5">
                  Smoked sausages, kabanos, hams, and cured loins.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md bg-white border border-[#E8DFD3] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images.wholesaleColdStorage}
                  alt="Commercial Wholesale Cold Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h5 className="font-display text-base font-bold uppercase text-[#1A1614]">
                  Wholesale Storage
                </h5>
                <p className="text-xs text-stone-500 mt-0.5">
                  Temperature-controlled commercial volume packaging.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact Strip */}
        <div className="bg-[#1A1614] text-white p-8 sm:p-10 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A961]">
              Visit Our Shop in Mississauga
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-wide text-white mt-1">
              2395 Cawthra Rd, Mississauga, ON L5A 2W8
            </h4>
            <p className="text-xs text-stone-300 mt-1">
              Have questions or looking for a specific cut? Give us a call at (905) 896-3666.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveNavTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-sm font-bold uppercase tracking-wider px-6 py-3 rounded shadow transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
