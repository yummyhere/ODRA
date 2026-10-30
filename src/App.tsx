/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { InquiryProvider, useInquiry } from './context/InquiryContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { activeNavTab } = useInquiry();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1614] antialiased">
      {/* Announcement Bar matching reference */}
      <AnnouncementBar />

      {/* Main Header with Utility Bar & Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeNavTab === 'home' && <HomePage />}
        {activeNavTab === 'products' && <ProductsPage />}
        {activeNavTab === 'about' && <AboutPage />}
        {activeNavTab === 'wholesale' && <WholesalePage />}
        {activeNavTab === 'contact' && <ContactPage />}
      </main>

      {/* Structured 4-Column Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <InquiryDrawer />
      <ProductDetailModal />
    </div>
  );
};

export default function App() {
  return (
    <InquiryProvider>
      <AppContent />
    </InquiryProvider>
  );
}
