import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Sparkles, CheckCircle2, Trophy, Flame } from 'lucide-react';

export const ExpectedResults: React.FC = () => {
  const { expectedResults } = COURSE_DATA;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-warmBg to-pinkAccent/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Intro Highlight Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-lightBorder shadow-card mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-brand-500 text-white shrink-0 shadow-sm hidden xs:block">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 mb-1 block">
                Результати & Трансформація
              </span>
              <p className="text-sm sm:text-base font-semibold text-darkCharcoal leading-relaxed">
                {expectedResults.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight">
            {expectedResults.title}
          </h2>
        </div>

        {/* Results Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {expectedResults.items.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl border transition-all ${
                item.highlight
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white border-brand-400 shadow-cta scale-[1.02]'
                  : 'bg-white text-darkCharcoal border-lightBorder shadow-soft'
              }`}
            >
              <div className={`p-1.5 rounded-full shrink-0 ${
                item.highlight ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-500'
              }`}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className={`text-xs sm:text-sm font-semibold leading-snug ${
                item.highlight ? 'text-white font-bold' : 'text-darkCharcoal'
              }`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Comprehensive Callout Card */}
        <div className="bg-darkCharcoal text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-center">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/40 text-brand-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4 text-brand-400" />
            <span>{expectedResults.highlightHeader}</span>
          </div>

          <p className="text-sm sm:text-base font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
            {expectedResults.comprehensiveBenefit}
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-cta transition-all hover:scale-105"
          >
            <Flame className="w-4 h-4 fill-white" />
            <span>ПРИЄДНАТИСЯ ДО КУРСУ</span>
          </a>
        </div>

      </div>
    </section>
  );
};
