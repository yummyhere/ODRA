import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServiceStrip } from '../components/ServiceStrip';
import { CategorySection } from '../components/CategorySection';
import { AboutStatsSection } from '../components/AboutStatsSection';
import { DualBannerCards } from '../components/DualBannerCards';
import { FreshProductsSection } from '../components/FreshProductsSection';
import { QualityControlSection } from '../components/QualityControlSection';
import { InfiniteMarquee } from '../components/InfiniteMarquee';
import { FaqSection } from '../components/FaqSection';
import { WholesaleCtaSection } from '../components/WholesaleCtaSection';
import { LocationAndContactSection } from '../components/LocationAndContactSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Slideshow / Showcase */}
      <HeroSection />

      {/* 2. Red Service Strip with 3 Value Propositions */}
      <ServiceStrip />

      {/* 3. Circular Product Category Navigation */}
      <CategorySection />

      {/* 4. Business About & Stats Section */}
      <AboutStatsSection />

      {/* 5. Split Promotional Banners (Deli vs Wholesale) */}
      <DualBannerCards />

      {/* 6. Fresh at the Counter Product Grid */}
      <FreshProductsSection
        eyebrow="This Week"
        title="FRESH AT THE COUNTER"
        filterMode="featured"
        limit={4}
      />

      {/* 7. Quality Control & Temperature Standards with Best Quality Stamp */}
      <QualityControlSection />

      {/* 8. Customer Favourites Product Grid */}
      <FreshProductsSection
        eyebrow="Customer Favourites"
        title="WHAT PEOPLE KEEP COMING BACK FOR"
        filterMode="bestsellers"
        limit={4}
      />

      {/* 9. Scrolling Marquee Typography Banner */}
      <InfiniteMarquee />

      {/* 10. Questions & Interactive Accordion with Overlapping Images */}
      <FaqSection />

      {/* 11. Dark Wholesale Call to Action Section */}
      <WholesaleCtaSection />

      {/* 12. Verified Location, Map Embed & Contact Form */}
      <LocationAndContactSection />
    </div>
  );
};
