import React from 'react';
import { Flame, CheckCircle, Sparkles, Tag, Gift } from 'lucide-react';
import { COURSE_DATA } from '../data/courseData';
import { CountdownTimer } from './CountdownTimer';

export const HeroSection: React.FC = () => {
  const { hero } = COURSE_DATA;

  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden bg-gradient-to-b from-warmBg via-pinkAccent/30 to-warmBg">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Discount Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 px-4 py-1.5 rounded-full shadow-sm mb-6 animate-pulse-subtle">
            <Tag className="w-4 h-4 text-brand-500" />
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">
              {hero.discountBadge}
            </span>
          </div>

          {/* H1 Main Course Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-darkCharcoal tracking-tight leading-[1.15] max-w-3xl mb-4">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-softGray font-normal max-w-2xl leading-relaxed mb-6">
            {hero.subtitle}
          </p>

          {/* Highlight feature card */}
          <div className="w-full max-w-xl bg-white/90 backdrop-blur-sm border border-lightBorder rounded-2xl p-4 sm:p-5 shadow-soft mb-8">
            <div className="flex items-start gap-3 text-left">
              <div className="p-2 rounded-xl bg-brand-100/60 text-brand-600 shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-darkCharcoal leading-snug">
                {hero.highlightText}
              </p>
            </div>
          </div>

          {/* Creator Image & Main Offer Box Container */}
          <div className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-7 shadow-card border border-lightBorder/80 mb-8 relative">
            
            {/* Discount Ribbon */}
            <div className="absolute -top-3 -right-3 bg-brand-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
              <span>{hero.discountPercent}</span>
              <span>знижка</span>
            </div>

            {/* Author Photo */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-pinkAccent/50 border border-lightBorder">
              <img
                src={hero.image}
                alt="Anna Fitt - Приведи себе у форму за 30 днів"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 bg-darkCharcoal/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span>@annafit__</span>
              </div>
            </div>

            {/* Countdown timer */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-softGray uppercase tracking-wider mb-2">
                До закінчення акційної ціни:
              </p>
              <CountdownTimer />
            </div>

            {/* Pricing Details */}
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-brand-500 tracking-tight">
                {hero.price}
              </span>
              <span className="text-lg sm:text-xl font-medium text-softGray line-through">
                {hero.originalPrice}
              </span>
            </div>

            {/* Main Primary CTA Button */}
            <a
              href="#pricing"
              className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-cta transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Flame className="w-5 h-5 fill-white" />
              <span>{hero.ctaText}</span>
            </a>

            {/* Trust indicators */}
            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-medium text-softGray">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Доступ 60 днів
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Стіна + килимок
              </span>
            </div>
          </div>

          {/* Bonus Banner Box */}
          <div className="w-full max-w-md bg-gradient-to-r from-pinkAccent to-white border border-brand-200/80 rounded-2xl p-4 sm:p-5 text-left flex items-start gap-3.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-brand-500 text-white shrink-0 shadow-sm mt-0.5">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-darkCharcoal mb-1">
                {hero.bonusTitle}
              </h4>
              <p className="text-xs text-softGray leading-relaxed font-normal">
                {hero.bonusText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
