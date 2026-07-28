import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { PricingCard } from './PricingCard';
import { CountdownTimer } from './CountdownTimer';
import { Tag, ShieldCheck } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { pricing } = COURSE_DATA;

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-gradient-to-b from-pinkAccent/40 via-warmBg to-white border-t border-lightBorder/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
            <Tag className="w-4 h-4 text-brand-500" />
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">
              {pricing.discountBadge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-darkCharcoal tracking-tight mb-4">
            {pricing.title}
          </h2>

          {/* Countdown Banner */}
          <div className="bg-white/80 backdrop-blur-sm border border-lightBorder rounded-2xl p-4 inline-block shadow-soft">
            <span className="text-xs font-semibold text-softGray uppercase tracking-wider block mb-2">
              {pricing.timerLabel}
            </span>
            <CountdownTimer />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {pricing.packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Payment Trust Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-softGray text-center">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Оплата через захищену систему Softbook</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div>Миттєвий доступ на пошту одразу після оплати</div>
        </div>

      </div>
    </section>
  );
};
