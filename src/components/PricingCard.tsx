import React from 'react';
import { PricingPackage } from '../data/courseData';
import { Check, Sparkles, Flame, ArrowUpRight } from 'lucide-react';

interface PricingCardProps {
  pkg: PricingPackage;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  const isPopular = pkg.popular;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
        isPopular
          ? 'bg-white border-2 border-brand-500 shadow-xl ring-4 ring-brand-100 scale-[1.02] z-10'
          : 'bg-white border border-lightBorder shadow-soft hover:shadow-card'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 fill-white" />
          <span>Найпопулярніший</span>
        </div>
      )}

      <div>
        {/* Package Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-darkCharcoal mb-3 tracking-tight">
          {pkg.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-2.5 mb-6 pb-6 border-b border-lightBorder">
          <span className="text-3xl sm:text-4xl font-extrabold text-brand-500 tracking-tight">
            {pkg.price}
          </span>
          <span className="text-sm sm:text-base text-softGray font-normal line-through">
            {pkg.originalPrice}
          </span>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3.5 mb-8">
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                isPopular ? 'bg-brand-100 text-brand-600' : 'bg-emerald-100 text-emerald-600'
              }`}>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-darkCharcoal leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button linked to exact Softbook URL */}
      <a
        href={pkg.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 font-extrabold text-sm py-4 px-6 rounded-2xl transition-all shadow-md ${
          isPopular
            ? 'bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white shadow-cta hover:scale-105'
            : 'bg-darkCharcoal hover:bg-black text-white hover:scale-105'
        }`}
      >
        <Flame className="w-4 h-4 fill-white" />
        <span>{pkg.buttonLabel}</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};
