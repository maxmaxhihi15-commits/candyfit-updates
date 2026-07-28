import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Dumbbell, Utensils, Sparkles, MessageCircle, Heart, ArrowRight } from 'lucide-react';

export const CoursePillars: React.FC = () => {
  const { pillars, midCta } = COURSE_DATA;

  const pillarIcons: Record<string, React.ReactNode> = {
    trainings: <Dumbbell className="w-6 h-6" />,
    nutrition: <Utensils className="w-6 h-6" />,
    skincare: <Sparkles className="w-6 h-6" />,
    motivation: <MessageCircle className="w-6 h-6" />,
    confidence: <Heart className="w-6 h-6" />,
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-lightBorder/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 mb-2 block">
            Складові програми
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight">
            Що ви отримаєте під час курсу
          </h2>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`p-6 rounded-3xl border transition-all duration-300 ${
                idx === 0
                  ? 'sm:col-span-2 bg-gradient-to-r from-pinkAccent to-warmBg border-brand-200 shadow-soft'
                  : 'bg-warmBg/50 border-lightBorder hover:border-brand-200 hover:bg-white shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-500 text-white shrink-0 shadow-md">
                  {pillarIcons[pillar.id] || <Sparkles className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-darkCharcoal mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-softGray font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA callout */}
        <div className="bg-gradient-to-r from-brand-50 via-pinkAccent to-brand-50 border border-brand-200 rounded-3xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm font-semibold text-darkCharcoal mb-1">
            {midCta.text}
          </p>
          <h3 className="text-lg sm:text-xl font-extrabold text-brand-600 mb-6">
            {midCta.subtext}
          </h3>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-cta transition-all hover:scale-105"
          >
            <span>{midCta.buttonLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
