import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu, X, ChevronDown, MapPin, Search } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import { CATEGORIES } from '../data/products';

export const Header: React.FC = () => {
  const { items, openDrawer, activeNavTab, setActiveNavTab, setActiveCategoryFilter } = useInquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (tab: string, categoryFilter?: string) => {
    setActiveNavTab(tab);
    if (categoryFilter) {
      setActiveCategoryFilter(categoryFilter);
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-[#E8DFD3]">
      {/* Utility Bar */}
      <div className="bg-[#1A1614] text-[#E5DCD3] text-xs py-2 px-4 sm:px-8 border-b border-[#2A2421]">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#C8484A] shrink-0" />
            <span className="truncate">Mississauga's trusted meat & deli supplier · 2395 Cawthra Rd, ON</span>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-5 w-full md:w-auto text-xs font-medium">
            <a 
              href="tel:+19058963666" 
              className="flex items-center gap-1.5 hover:text-white transition-colors text-white font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8484A]" />
              <span>Give us a call · (905) 896-3666</span>
            </a>

            <button
              onClick={() => handleNavClick('wholesale')}
              className="hidden sm:inline-block text-[#C9A961] hover:text-white transition-colors"
            >
              Wholesale Inquiries
            </button>

            <button
              onClick={openDrawer}
              className="flex items-center gap-1.5 bg-[#2B231F] hover:bg-[#382F2A] px-2.5 py-1 rounded text-white transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C8484A]" />
              <span>Inquiry List</span>
              <span className="bg-[#C8484A] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-6">
        {/* Odra Brand Lockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer shrink-0"
        >
          <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1614] leading-none group-hover:text-[#C8484A] transition-colors whitespace-nowrap">
            ODRA
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNavClick('home')}
            className={`font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeNavTab === 'home' ? 'text-[#C8484A] border-b-2 border-[#C8484A] pb-0.5' : 'text-[#1A1614] hover:text-[#C8484A]'
            }`}
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('products')}
              className={`font-display text-base font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                activeNavTab === 'products' ? 'text-[#C8484A] border-b-2 border-[#C8484A] pb-0.5' : 'text-[#1A1614] hover:text-[#C8484A]'
              }`}
            >
              <span>Products & Counter</span>
              <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-[#C8484A]" />
            </button>

            {productsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-[#E8DFD3] rounded-b-lg py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-4 py-1.5 text-[11px] font-bold text-stone-400 uppercase tracking-widest border-b border-stone-100 mb-1">
                  Product Categories
                </div>
                <button
                  onClick={() => handleNavClick('products', 'all')}
                  className="w-full text-left px-4 py-2 text-sm font-semibold text-[#1A1614] hover:bg-[#F4EDE3] hover:text-[#C8484A] transition-colors cursor-pointer flex justify-between items-center"
                >
                  <span>All Meat & Deli Items</span>
                  <span className="text-xs text-stone-400 font-normal">Browse</span>
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick('products', cat.id)}
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-[#1A1614] hover:bg-[#F4EDE3] hover:text-[#C8484A] transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs text-stone-400 font-normal">{cat.itemCount}+</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeNavTab === 'about' ? 'text-[#C8484A] border-b-2 border-[#C8484A] pb-0.5' : 'text-[#1A1614] hover:text-[#C8484A]'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('wholesale')}
            className={`font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeNavTab === 'wholesale' ? 'text-[#C8484A] border-b-2 border-[#C8484A] pb-0.5' : 'text-[#1A1614] hover:text-[#C8484A]'
            }`}
          >
            Wholesale Program
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeNavTab === 'contact' ? 'text-[#C8484A] border-b-2 border-[#C8484A] pb-0.5' : 'text-[#1A1614] hover:text-[#C8484A]'
            }`}
          >
            Location & Contact
          </button>
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('wholesale')}
            className="bg-[#C8484A] hover:bg-[#A83638] text-white font-display text-base font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            Wholesale Inquiries
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openDrawer}
            className="p-2 text-[#1A1614] hover:text-[#C8484A] relative cursor-pointer"
            aria-label="View Inquiry List"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItemCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#C8484A] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {totalItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1614] hover:text-[#C8484A] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8DFD3] px-6 py-5 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 font-display text-lg font-bold uppercase tracking-wider">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 border-b border-stone-100 ${activeNavTab === 'home' ? 'text-[#C8484A]' : 'text-[#1A1614]'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`text-left py-2 border-b border-stone-100 ${activeNavTab === 'products' ? 'text-[#C8484A]' : 'text-[#1A1614]'}`}
            >
              Products & Counter
            </button>

            {/* Mobile Category Sublinks */}
            <div className="pl-4 py-1 flex flex-col gap-2 text-sm normal-case font-normal text-stone-600 font-sans">
              <button 
                onClick={() => handleNavClick('products', 'beef')}
                className="text-left hover:text-[#C8484A]"
              >
                · Beef & Veal Cuts
              </button>
              <button 
                onClick={() => handleNavClick('products', 'poultry')}
                className="text-left hover:text-[#C8484A]"
              >
                · Fresh Poultry
              </button>
              <button 
                onClick={() => handleNavClick('products', 'deli')}
                className="text-left hover:text-[#C8484A]"
              >
                · European Deli & Charcuterie
              </button>
              <button 
                onClick={() => handleNavClick('products', 'wholesale')}
                className="text-left hover:text-[#C8484A]"
              >
                · Wholesale Cases & Primals
              </button>
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2 border-b border-stone-100 ${activeNavTab === 'about' ? 'text-[#C8484A]' : 'text-[#1A1614]'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('wholesale')}
              className={`text-left py-2 border-b border-stone-100 ${activeNavTab === 'wholesale' ? 'text-[#C8484A]' : 'text-[#1A1614]'}`}
            >
              Wholesale Program
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2 border-b border-stone-100 ${activeNavTab === 'contact' ? 'text-[#C8484A]' : 'text-[#1A1614]'}`}
            >
              Location & Contact
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-200 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('wholesale')}
              className="w-full bg-[#C8484A] text-white font-display text-base font-bold uppercase tracking-wider py-3 rounded text-center"
            >
              Wholesale Inquiries
            </button>
            <a
              href="tel:+19058963666"
              className="w-full bg-[#1A1614] text-white font-display text-base font-bold uppercase tracking-wider py-3 rounded text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C8484A]" />
              Call (905) 896-3666
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
