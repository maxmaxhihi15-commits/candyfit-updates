import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AudiencePainPoints } from './components/AudiencePainPoints';
import { ExpectedResults } from './components/ExpectedResults';
import { CoursePillars } from './components/CoursePillars';
import { CourseFormat } from './components/CourseFormat';
import { PricingSection } from './components/PricingSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { VideoPreviewSection } from './components/VideoPreviewSection';
import { TestimonialsGallery } from './components/TestimonialsGallery';
import { FAQAccordion } from './components/FAQAccordion';
import { OrderFormSection } from './components/OrderFormSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex flex-col justify-between selection:bg-brand-100 selection:text-brand-700 font-sans">
      
      {/* Outer wrapper: Centered on desktop with subtle background framing, full fluid width on mobile */}
      <div className="w-full max-w-[1280px] mx-auto bg-warmBg min-h-screen shadow-2xl relative flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections Flow */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Audience Pain Points ("Цей курс для вас, якщо...") */}
          <AudiencePainPoints />

          {/* 3. Expected Results & Benefits */}
          <ExpectedResults />

          {/* 4. Course Pillars (What participants receive) */}
          <CoursePillars />

          {/* 5. Course Format (Softbook, Telegram, device access) */}
          <CourseFormat />

          {/* 6. Pricing Packages & Checkout */}
          <PricingSection />

          {/* 7. How participation works (Timeline) */}
          <ProcessTimeline />

          {/* 8. Training video snippet preview */}
          <VideoPreviewSection />

          {/* 9. Participant Reviews & Results (Lightbox gallery) */}
          <TestimonialsGallery />

          {/* 10. FAQ Accordions */}
          <FAQAccordion />

          {/* 11. Lead / Order Form */}
          <OrderFormSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Sticky Bottom CTA Bar */}
        <StickyMobileCTA />
      </div>

    </div>
  );
};

export default App;
