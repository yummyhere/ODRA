import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';

export const LocationAndContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    customerType: 'wholesale_inquiry', // wholesale_inquiry | retail_customer | catering
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name, email, and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="location-contact" className="py-20 bg-white border-b border-[#E8DFD3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C8484A] uppercase">
            Visit & Connect
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1">
            LOCATION & CONTACT
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently located on Cawthra Road in Mississauga. Visit our retail counter or reach out to our wholesale desk to discuss custom orders and food service supply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Address Card */}
              <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#E8DFD3] shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C8484A]/10 text-[#C8484A] rounded-lg shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#1A1614]">
                      Odra Deli & Wholesale Meat
                    </h3>
                    <p className="mt-1 text-stone-700 text-base leading-relaxed">
                      2395 Cawthra Rd,<br />
                      Mississauga, ON L5A 2W8, Canada
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=2395+Cawthra+Rd,+Mississauga,+ON+L5A+2W8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#1A1614] hover:bg-[#332B27] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#C9A961]" />
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Call Card */}
                <div className="mt-6 pt-6 border-t border-stone-200 flex items-start gap-4">
                  <div className="p-3 bg-[#C8484A]/10 text-[#C8484A] rounded-lg shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Direct Counter & Wholesale Desk
                    </span>
                    <div className="mt-0.5">
                      <a
                        href="tel:+19058963666"
                        className="font-display text-2xl sm:text-3xl font-extrabold text-[#C8484A] hover:text-[#A83638] tracking-wide transition-colors"
                      >
                        +1 905-896-3666
                      </a>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Call ahead for custom cuts, wholesale quotes, or counter inquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Preview / Interactive Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#E8DFD3] shadow-md h-64 sm:h-72 bg-stone-100">
                <iframe
                  title="Odra Deli & Wholesale Meat Location Map"
                  src="https://maps.google.com/maps?q=2395+Cawthra+Rd,+Mississauga,+ON+L5A+2W8,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-xl border border-[#E8DFD3] shadow-sm">
              <span className="font-display text-xs font-bold tracking-[0.2em] text-[#C8484A] uppercase">
                Direct Message
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#1A1614] mt-1">
                SEND AN INQUIRY OR QUOTE REQUEST
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Fill in your details below. For wholesale and commercial inquiries, our team will review your requirements and respond promptly.
              </p>

              {submitted ? (
                <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base">Inquiry Submitted Successfully</h4>
                      <p className="text-xs text-emerald-800 mt-1">
                        Thank you for contacting Odra Deli & Wholesale Meat. A member of our team will contact you shortly regarding your request. You can also reach us directly at (905) 896-3666.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        customerType: 'wholesale_inquiry',
                        message: '',
                      });
                    }}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

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
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D5C8B8] focus:border-[#C8484A] focus:outline-none text-sm text-[#1A1614]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Business Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Restaurant or Market"
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D5C8B8] focus:border-[#C8484A] focus:outline-none text-sm text-[#1A1614]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D5C8B8] focus:border-[#C8484A] focus:outline-none text-sm text-[#1A1614]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(905) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D5C8B8] focus:border-[#C8484A] focus:outline-none text-sm text-[#1A1614]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.customerType}
                      onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D5C8B8] focus:border-[#C8484A] focus:outline-none text-sm text-[#1A1614]"
                    >
                      <option value="wholesale_inquiry">Wholesale Supply for Restaurant / Food Business</option>
                      <option value="grocery_market">Grocery / Independent Market Resale</option>
                      <option value="catering">Catering & Event Orders</option>
                      <option value="retail_customer">Retail Customer Inquiry / Special Roast</option>
                      <option value="custom_butchery">Custom Cut & Wrap Specs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Message & Product Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify products of interest, estimated quantities, or delivery requirements..."
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D5C8B8] focus:border-[#C8484A] focus:outline-none text-sm text-[#1A1614]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-base font-bold uppercase tracking-wider py-3.5 rounded shadow hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
