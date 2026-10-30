import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Do I need to order ahead for retail counter cuts?',
    answer: 'Walk-ins are always welcome at our counter on Cawthra Road! For custom thick cuts, whole primal cryovac bags, or large family packs, a quick call ahead to (905) 896-3666 allows us to have everything trimmed and packed for your arrival.',
  },
  {
    question: 'How do wholesale accounts work for restaurants and grocers?',
    answer: 'We supply restaurants, caterers, banquet facilities, and food markets across Peel Region and the Greater Toronto Area. You can submit our online inquiry form or call our wholesale desk to establish pricing tiers, delivery schedules, and minimum case volumes.',
  },
  {
    question: 'Can I request custom cut thicknesses or special portioning?',
    answer: 'Yes! Custom butchery is at the core of what we do. From custom steak thicknesses (1", 1.5", 2") to frenched bones, skinless poultry, or coarse sausage grind, we trim to your kitchen specifications.',
  },
  {
    question: 'Where is Odra Deli & Wholesale Meat located in Mississauga?',
    answer: 'We are located at 2395 Cawthra Rd, Mississauga, ON L5A 2W8, Canada (between Queensway and Dundas St E). We have customer parking on site for convenient counter shopping and wholesale dock pickup.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { setActiveNavTab } = useInquiry();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Overlapping Image Stack matching reference */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-4/5 rounded-xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <img
                src="/src/assets/images/craft_butcher_work_1793338244517.jpg"
                alt="Craft butchering at Odra"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floater image overlapping */}
            <div className="absolute right-0 bottom-[-20px] z-20 w-3/5 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="/src/assets/images/european_deli_meats_1793338242936.jpg"
                alt="European deli meats counter"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative backdrop */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#C8484A]/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 pt-4 lg:pt-0">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
              Questions & Inquiries
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1.5 leading-[1.1]">
              DO YOU HAVE ANY QUESTIONS?
            </h2>

            <div className="mt-8 space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E8DFD3] rounded-lg bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-[#1A1614] flex items-center justify-between gap-4 hover:text-[#C8484A] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C8484A]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed font-normal border-t border-stone-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Support Prompt */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveNavTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#1A1614] hover:bg-[#332B27] text-white font-display text-sm font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors cursor-pointer"
              >
                Send An Inquiry
              </button>

              <a
                href="tel:+19058963666"
                className="inline-flex items-center gap-2 text-stone-700 hover:text-[#C8484A] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8484A]" />
                <span>Or call directly at (905) 896-3666</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
