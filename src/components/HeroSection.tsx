import React from 'react';
import { Flame, CheckCircle, Sparkles, Tag, Gift } from 'lucide-react';
import { COURSE_DATA } from '../data/courseData';
import { CountdownTimer } from './CountdownTimer';
import { CourseProductBox } from './CourseProductBox';

export const HeroSection: React.FC = () => {
  const { hero } = COURSE_DATA;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warmBg via-pinkAccent/30 to-warmBg py-5 sm:py-8 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:py-10">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1240px]">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-12 lg:gap-y-5">
          {/* Main offer: the timer and CTA are intentionally placed before the product visual */}
          <div className="flex flex-col items-center text-center lg:col-start-1 lg:row-start-1 lg:self-stretch lg:items-start lg:text-left">
            {/* Discount Pill Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 shadow-sm animate-pulse-subtle sm:mb-5">
              <Tag className="h-4 w-4 text-brand-500" />
              <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                {hero.discountBadge}
              </span>
            </div>

            {/* Prominent Primary Heading */}
            <h1 className="mb-4 max-w-4xl text-[clamp(2.1rem,10.5vw,2.75rem)] font-black leading-[0.98] tracking-[-0.045em] text-darkCharcoal [text-wrap:balance] sm:text-5xl sm:leading-[1] lg:max-w-3xl lg:text-6xl xl:text-[4.35rem]">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mb-4 max-w-2xl text-sm font-medium leading-relaxed text-softGray [text-wrap:balance] sm:mb-5 sm:text-base lg:text-lg">
              {hero.subtitle}
            </p>

            {/* Compact above-the-fold purchase panel */}
            <div className="w-full max-w-xl rounded-3xl border border-lightBorder/80 bg-white/95 p-4 shadow-card backdrop-blur-sm sm:p-5">
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-5">
                <div className="min-w-0">
                  <p className="mb-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-softGray sm:text-left sm:text-xs">
                    До закінчення акційної ціни:
                  </p>

                  {/* Mobile timer is visually compact but keeps the original logic */}
                  <div className="mx-auto w-fit origin-center scale-[0.82] -my-2 sm:mx-0 sm:origin-left sm:scale-[0.9] sm:-my-1 lg:scale-[0.88]">
                    <CountdownTimer />
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="flex items-baseline justify-center gap-2 sm:flex-col sm:items-end sm:gap-0">
                  <span className="text-3xl font-extrabold tracking-tight text-brand-500 sm:text-4xl">
                    {hero.price}
                  </span>
                  <span className="text-base font-medium text-softGray line-through sm:text-lg">
                    {hero.originalPrice}
                  </span>
                </div>
              </div>

              {/* Main Primary CTA Button */}
              <a
                href="#pricing"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-3.5 text-base font-extrabold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:bg-brand-600 active:translate-y-0 active:bg-brand-700 sm:mt-4 sm:text-lg"
              >
                <Flame className="h-5 w-5 fill-white" />
                <span>{hero.ctaText}</span>
              </a>

              <div className="mt-3 flex items-center justify-center text-xs font-medium text-softGray">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Доступ 60 днів
                </span>
              </div>
            </div>
          </div>

          {/* Product visual: below the CTA on mobile, beside the offer on desktop */}
          <div className="relative mx-auto w-full max-w-md lg:col-start-2 lg:row-start-1 lg:max-w-none lg:self-stretch">
            <div className="relative rounded-3xl border border-lightBorder/80 bg-white p-4 shadow-card sm:p-5 lg:mt-[58px] lg:flex lg:h-[calc(100%-58px)] lg:min-h-0 lg:items-center">
              <div className="absolute -right-2 -top-3 z-20 flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md sm:-right-3 lg:hidden">
                <span>{hero.discountPercent}</span>
                <span>знижка</span>
              </div>

              <div className="relative w-full overflow-hidden rounded-2xl border border-lightBorder bg-gradient-to-b from-brand-50/70 via-white to-pinkAccent/50 px-2 py-2 sm:py-3 lg:flex lg:h-[440px] lg:items-center lg:justify-center xl:h-[480px]">
                <div className="w-full origin-center lg:scale-[1.18] xl:scale-[1.24]">
                  <CourseProductBox image={hero.image} title={hero.title} />
                </div>
              </div>
            </div>
          </div>

          {/* Purchase bonus: no longer blocks the timer and CTA on mobile */}
          <div className="mx-auto flex w-full max-w-xl items-start gap-3.5 rounded-2xl border border-brand-200/80 bg-gradient-to-r from-pinkAccent to-white p-4 text-left shadow-sm sm:p-5 lg:col-start-1 lg:row-start-2 lg:mx-0 lg:h-full lg:min-h-[92px] lg:self-stretch lg:items-center">
            <div className="mt-0.5 shrink-0 rounded-xl bg-brand-500 p-2.5 text-white shadow-sm">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-1 text-xs font-bold text-darkCharcoal sm:text-sm">
                {hero.bonusTitle}
              </h4>
              <p className="text-xs font-normal leading-relaxed text-softGray">
                {hero.bonusText}
              </p>
            </div>
          </div>

          {/* Course benefit statement */}
          <div className="mx-auto flex w-full max-w-md rounded-2xl border border-lightBorder bg-white/90 p-4 shadow-soft backdrop-blur-sm sm:p-5 lg:col-start-2 lg:row-start-2 lg:h-full lg:min-h-[92px] lg:max-w-none lg:self-stretch lg:items-center">
            <div className="flex items-start gap-3 text-left">
              <div className="mt-0.5 shrink-0 rounded-xl bg-brand-100/60 p-2 text-brand-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold leading-snug text-darkCharcoal sm:text-sm lg:text-[12px] lg:leading-[1.3] lg:tracking-[-0.025em] lg:[text-wrap:balance] xl:text-[13px]">
                {hero.highlightText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
