import React, { useState } from 'react';
import { X, Trash2, Send, CheckCircle2, ShoppingBag, Phone, AlertCircle } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

export const InquiryDrawer: React.FC = () => {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, clearItems } = useInquiry();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    orderType: 'wholesale_quote', // wholesale_quote | retail_pickup
    deliveryOption: 'pickup_cawthra', // pickup_cawthra | gta_delivery
    notes: '',
  });

  if (!isDrawerOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name, email, and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    clearItems();
    closeDrawer();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeDrawer}
    >
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#1A1614] text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C8484A]" />
            <h3 className="font-display text-xl font-bold uppercase tracking-wider">
              Wholesale & Order Inquiry
            </h3>
          </div>
          <button 
            onClick={closeDrawer}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#1A1614] uppercase">
                Inquiry Request Received!
              </h4>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-xs mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our butcher desk has received your itemized quote request. We will review availability and contact you at <strong>{formData.phone}</strong> shortly.
              </p>

              <div className="mt-6 p-4 bg-stone-50 rounded border border-stone-200 text-left text-xs text-stone-600">
                <span className="font-bold text-stone-800 block mb-1">Pick up & Consultation:</span>
                Odra Deli & Wholesale Meat<br />
                2395 Cawthra Rd, Mississauga, ON<br />
                Phone: (905) 896-3666
              </div>

              <button
                onClick={handleReset}
                className="mt-6 w-full bg-[#1A1614] hover:bg-stone-800 text-white font-display text-sm font-bold uppercase tracking-wider py-3 rounded transition-colors cursor-pointer"
              >
                Close & Return to Browsing
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center text-stone-500">
              <ShoppingBag className="w-12 h-12 mx-auto text-stone-300 mb-3" />
              <p className="text-base font-semibold text-stone-700">Your Inquiry List is Empty</p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Browse our counter cuts and add items to request a custom quote or reserve quantities for pickup.
              </p>
              <button
                onClick={closeDrawer}
                className="mt-6 bg-[#C8484A] text-white font-display text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded shadow hover:bg-[#A83638] transition-colors cursor-pointer"
              >
                Browse Counter Cuts
              </button>
            </div>
          ) : (
            <div>
              {/* Items List */}
              <div className="mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs font-bold uppercase tracking-wider text-stone-500">
                  <span>Selected Cuts ({items.length})</span>
                  <button
                    onClick={clearItems}
                    className="text-[#C8484A] hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                <div className="divide-y divide-stone-100 mt-2">
                  {items.map((item) => (
                    <div key={item.product.id} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 rounded object-cover shrink-0 border border-stone-200"
                        />
                        <div className="min-w-0">
                          <h5 className="font-display text-sm font-bold uppercase text-[#1A1614] truncate">
                            {item.product.name}
                          </h5>
                          <span className="text-xs text-[#C8484A] font-semibold tabular-nums">
                            {item.product.priceFormatted} {item.product.priceUnit}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-stone-200 rounded text-xs font-bold">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-stone-100 text-stone-600"
                          >
                            -
                          </button>
                          <span className="px-2 py-1 tabular-nums text-stone-800">
                            {item.quantity} {item.unit}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-stone-100 text-stone-600"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Submission Form */}
              <form onSubmit={handleSubmit} className="border-t border-stone-200 pt-5 space-y-3.5">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#1A1614]">
                  Contact & Fulfillment Details
                </h4>

                {errorMsg && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:border-[#C8484A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Business / Restaurant Name (If Wholesale)
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Cawthra Grill or Retail Buyer"
                    className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:border-[#C8484A]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(905) 000-0000"
                      className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:border-[#C8484A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:border-[#C8484A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.orderType}
                      onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                      className="w-full px-2 py-2 text-xs rounded border border-stone-300 bg-white"
                    >
                      <option value="wholesale_quote">Wholesale Volume Quote</option>
                      <option value="retail_pickup">Retail Counter Pickup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Fulfillment
                    </label>
                    <select
                      value={formData.deliveryOption}
                      onChange={(e) => setFormData({ ...formData, deliveryOption: e.target.value })}
                      className="w-full px-2 py-2 text-xs rounded border border-stone-300 bg-white"
                    >
                      <option value="pickup_cawthra">Pickup: 2395 Cawthra Rd</option>
                      <option value="gta_delivery">Commercial GTA Delivery</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Trimming Notes & Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Thickness specifications, desired date, packaging instructions..."
                    className="w-full px-3 py-1.5 text-xs rounded border border-stone-300 focus:outline-none focus:border-[#C8484A]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-base font-bold uppercase tracking-wider py-3 rounded shadow hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Quote & Inquire</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Drawer Footer Info */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-500">
          <span>Need immediate counter assistance? </span>
          <a href="tel:+19058963666" className="text-[#C8484A] font-bold hover:underline">
            Call (905) 896-3666
          </a>
        </div>
      </div>
    </div>
  );
};
