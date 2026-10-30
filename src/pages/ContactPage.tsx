import React from 'react';
import { LocationAndContactSection } from '../components/LocationAndContactSection';
import { FaqSection } from '../components/FaqSection';
import { MapPin, Phone, Clock, Truck, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#1A1614] text-white py-14 sm:py-16 border-b border-stone-800">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 text-center">
          <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
            LOCATION & CONTACT
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Visit our retail deli counter or reach our commercial wholesale team at 2395 Cawthra Rd, Mississauga, Ontario.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8484A]" />
              <span>2395 Cawthra Rd, Mississauga, ON</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C8484A]" />
              <a href="tel:+19058963666" className="hover:text-white font-bold underline">
                +1 905-896-3666
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Location & Contact Form Section */}
      <LocationAndContactSection />

      {/* Questions & Accordion */}
      <FaqSection />
    </div>
  );
};
