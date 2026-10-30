import React from 'react';

const MARQUEE_ITEMS = [
  { text: 'AAA Canadian Beef', outline: false },
  { text: 'European Deli Meats', outline: true },
  { text: 'Fresh Ontario Poultry', outline: false },
  { text: 'Traditional Smoked Sausage', outline: true },
  { text: 'Wholesale Restaurant Supply', outline: false },
  { text: 'Mississauga, Ontario', outline: true },
  { text: 'Custom Cut To Order', outline: false },
  { text: 'Retail Counter & Cases', outline: true },
];

export const InfiniteMarquee: React.FC = () => {
  return (
    <div className="bg-[#1A1614] py-6 sm:py-8 overflow-hidden border-b border-[#2A2421]">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* First set */}
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={`set1-${index}`} className="flex items-center gap-8">
            <span
              className={`font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide select-none ${
                item.outline
                  ? 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]'
                  : 'text-[#F4EDE3]'
              }`}
            >
              {item.text}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8484A]"></span>
          </div>
        ))}

        {/* Duplicate set for seamless continuous loop */}
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={`set2-${index}`} className="flex items-center gap-8" aria-hidden="true">
            <span
              className={`font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide select-none ${
                item.outline
                  ? 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]'
                  : 'text-[#F4EDE3]'
              }`}
            >
              {item.text}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8484A]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
