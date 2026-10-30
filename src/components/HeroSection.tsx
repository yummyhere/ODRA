import React, { useState } from 'react';
import { ChevronRight, Phone, ShieldCheck, Award, Truck } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

interface HeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  targetTab: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'QUALITY MEATS & DELI · MISSISSAUGA, ON',
    title: 'QUALITY YOU CAN TASTE. SERVICE YOU CAN TRUST.',
    subtitle: 'Explore fresh retail meat and European deli selections for your home, or dependable wholesale supply for your food business in Mississauga, Ontario.',
    primaryCtaText: 'Explore Our Products',
    targetTab: 'products',
  },
  {
    eyebrow: 'COMMERCIAL SUPPLY & DISTRIBUTION',
    title: 'RESTAURANTS & GROCERS. WHOLESALE YOU CAN RELY ON.',
    subtitle: 'AAA Canadian beef primals, fresh poultry master cases, custom portioning, and refrigerated delivery across Mississauga and the GTA.',
    primaryCtaText: 'Wholesale Program',
    targetTab: 'wholesale',
  },
  {
    eyebrow: 'ARTISANAL EUROPEAN CHARCUTERIE',
    title: 'TRADITIONAL SMOKED SAUSAGES & DELI SELECTIONS',
    subtitle: 'Old-world recipes, naturally hardwood smoked sausages, hams, and gourmet cold cuts sliced fresh to your order at our counter.',
    primaryCtaText: 'Shop Deli Counter',
    targetTab: 'products',
  },
];

export const HeroSection: React.FC = () => {
  const { setActiveNavTab, setActiveCategoryFilter } = useInquiry();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = HERO_SLIDES[currentSlideIndex];

  const handlePrimaryClick = () => {
    setActiveNavTab(slide.targetTab);
    if (currentSlideIndex === 2) {
      setActiveCategoryFilter('deli');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWholesaleClick = () => {
    setActiveNavTab('wholesale');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center bg-[#1A1614] overflow-hidden text-white">
      {/* Background Hero Image with Dark Gradient Scrim */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url('/src/assets/images/hero_butcher_counter_1793338241942.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/75 to-[#1A1614]/65"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center">
        {/* Eyebrow / Script */}
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs sm:text-sm font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
          <span>{slide.eyebrow}</span>
        </div>

        {/* Hero Title */}
        <h1 
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight max-w-4xl text-white leading-[1.05] drop-shadow-md text-balance"
        >
          {slide.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
          {slide.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={handlePrimaryClick}
            className="w-full sm:w-auto bg-[#C8484A] hover:bg-[#a83638] text-white font-display text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{slide.primaryCtaText}</span>
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleWholesaleClick}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 font-display text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded backdrop-blur-sm transition-all cursor-pointer"
          >
            Wholesale Inquiries
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="mt-12 flex items-center gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                idx === currentSlideIndex ? 'w-8 bg-[#C8484A]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Fast Value Markers */}
        <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-300 w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A961]" />
            <span>Canadian AAA Beef & Fresh Poultry</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-[#C9A961]" />
            <span>Hand-Trimmed Cuts & Custom Specs</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#C9A961]" />
            <span>Retail Counter & Wholesale Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
