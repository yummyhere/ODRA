import React, { useState } from 'react';
import { Phone, MapPin, Truck, ShieldCheck, CheckCircle2, AlertCircle, Send, Package, Clock, Utensils } from 'lucide-react';
import { images } from '../assets/images';

export const WholesalePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'restaurant',
    productsOfInterest: [] as string[],
    estimatedOrderQuantity: '100_to_300_lbs',
    fulfillmentPreference: 'scheduled_delivery',
    additionalRequirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const productOptions = [
    'Canadian AAA Beef Primals & Steaks',
    'Commercial Fresh Poultry Cases (40 lb)',
    'Pork Loins, Bellies & Ribs',
    'Traditional European Smoked Sausages',
    'Cured Deli Meats & Charcuterie Loaves',
    'Ground Beef (Chuck & Brisket Blends)',
    'Veal Cuts & Custom Trims',
  ];

  const handleProductToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      productsOfInterest: prev.productsOfInterest.includes(item)
        ? prev.productsOfInterest.filter((p) => p !== item)
        : [...prev.productsOfInterest, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.businessName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields (Name, Business, Email, and Phone).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Header Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1A1614] text-white p-8 sm:p-14 lg:p-16 mb-12 shadow-xl border border-stone-800">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${images.wholesaleColdStorage}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614] via-[#1A1614]/90 to-transparent"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A961] uppercase">
              B2B Food Service & Commercial Supply
            </span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-[1.08]">
              WHOLESALE SUPPLY FOR YOUR BUSINESS
            </h1>
            <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed">
              Looking for meat and deli products for your restaurant, grocery store, or food business? Contact Odra Deli & Wholesale Meat to discuss your requirements.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#wholesale-form"
                className="bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-base font-bold uppercase tracking-wider px-7 py-3 rounded shadow transition-all"
              >
                Request Wholesale Quote
              </a>
              <a
                href="tel:+19058963666"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-display text-base font-bold uppercase tracking-wider px-6 py-3 rounded transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A961]" />
                <span>Call (905) 896-3666</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Odra Wholesale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8DFD3] shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#C8484A]/10 text-[#C8484A] flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#1A1614]">
              Restaurants & Banquets
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Consistent steak cuts, frenched bones, portion-controlled burger grinds, and custom primal specifications trimmed to chef standards.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8DFD3] shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#C8484A]/10 text-[#C8484A] flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#1A1614]">
              Grocers & Independent Markets
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Traditional European smoked sausages, authentic dry-cured kabanos, deli loaves, and packaged poultry ready for retail resale.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8DFD3] shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#C8484A]/10 text-[#C8484A] flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#1A1614]">
              Reliable Fulfillment
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Flexible options: early morning dock pickup at our Cawthra Road facility in Mississauga or scheduled refrigerated delivery across the GTA.
            </p>
          </div>
        </div>

        {/* Wholesale Inquiry Form Section */}
        <div id="wholesale-form" className="bg-white rounded-2xl border border-[#E8DFD3] shadow-md p-8 sm:p-12 mb-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-display text-xs font-bold tracking-[0.2em] text-[#C8484A] uppercase">
                Direct Application
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1">
                WHOLESALE INQUIRY & QUOTATION FORM
              </h2>
              <p className="text-stone-600 text-sm mt-2">
                Provide your commercial requirements below. Our wholesale manager will prepare an itemized quote and review delivery or pickup logistics with your team.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-display text-2xl font-bold text-emerald-900 uppercase">
                  Wholesale Inquiry Submitted!
                </h3>
                <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong> from <strong>{formData.businessName}</strong>. Your inquiry has been routed to our commercial sales desk. We will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong>.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-emerald-800 underline cursor-pointer"
                  >
                    Submit another quote request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Contact info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marco Rossi"
                      className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Business / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Cawthra Bistro & Bar"
                      className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="chef@cawthrabistro.com"
                      className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(905) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                    />
                  </div>
                </div>

                {/* Business Type & Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Business Classification
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                    >
                      <option value="restaurant">Restaurant / Steakhouse / Pub</option>
                      <option value="grocery">Grocery Store / Food Market</option>
                      <option value="banquet">Banquet Hall / Event Center</option>
                      <option value="catering">Catering Company</option>
                      <option value="institution">Institutional / Corporate Cafeteria</option>
                      <option value="other">Other Food Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Estimated Order Volume
                    </label>
                    <select
                      value={formData.estimatedOrderQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedOrderQuantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                    >
                      <option value="under_100_lbs">Under 100 lbs / week</option>
                      <option value="100_to_300_lbs">100 – 300 lbs / week</option>
                      <option value="300_to_1000_lbs">300 – 1,000 lbs / week</option>
                      <option value="over_1000_lbs">1,000+ lbs / week (Master Cases)</option>
                    </select>
                  </div>
                </div>

                {/* Products of Interest Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Products of Interest (Select All That Apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-stone-50 p-4 rounded-lg border border-stone-200">
                    {productOptions.map((item) => (
                      <label key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.productsOfInterest.includes(item)}
                          onChange={() => handleProductToggle(item)}
                          className="rounded text-[#C8484A] focus:ring-[#C8484A] w-4 h-4"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Specific Trim Specs, Delivery Frequency, or Schedule
                  </label>
                  <textarea
                    rows={4}
                    value={formData.additionalRequirements}
                    onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    placeholder="Include preferred cut thicknesses, primal trim styles, delivery days in Mississauga/GTA, or starting target date..."
                    className="w-full px-3.5 py-2.5 rounded bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#C8484A] text-sm text-[#1A1614]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-lg font-bold uppercase tracking-wider py-4 rounded shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Wholesale Quotation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Verified Facility Contact Callout */}
        <div className="bg-[#1A1614] text-white p-8 rounded-xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg text-[#C9A961]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-[#C9A961]">
                Wholesale Facility & Dock
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                2395 Cawthra Rd, Mississauga, ON L5A 2W8, Canada
              </p>
            </div>
          </div>

          <a
            href="tel:+19058963666"
            className="inline-flex items-center gap-2 bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-sm font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>Call (905) 896-3666</span>
          </a>
        </div>
      </div>
    </div>
  );
};
