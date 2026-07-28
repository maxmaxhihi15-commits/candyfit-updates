import React, { useState, useEffect, useRef } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Sparkles, CheckCircle2, Trophy, Flame } from 'lucide-react';

export const ExpectedResults: React.FC = () => {
  const { expectedResults } = COURSE_DATA;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const directionRef = useRef<'forward' | 'backward'>('forward');

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setActiveIndex(0);
      return;
    }

    let intervalId: NodeJS.Timeout | null = null;

    const startRotation = () => {
      if (intervalId) return;
      intervalId = setInterval(() => {
        setActiveIndex((prev) => {
          const total = expectedResults.items.length;
          let dir = directionRef.current;

          if (dir === 'forward') {
            if (prev < total - 1) {
              return prev + 1;
            } else {
              directionRef.current = 'backward';
              return total - 2;
            }
          } else {
            if (prev > 0) {
              return prev - 1;
            } else {
              directionRef.current = 'forward';
              return 1;
            }
          }
        });
      }, 3000);
    };

    const stopRotation = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startRotation();
        } else {
          stopRotation();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      stopRotation();
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, [expectedResults.items.length]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-b from-warmBg to-pinkAccent/20">
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

        {/* Section Header with Non-breaking phrase to prevent "марафону:" orphan */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight [text-wrap:balance]">
            Ось що ви отримаєте під час <span className="inline-block">30-ти денного марафону:</span>
          </h2>
        </div>

        {/* Results Checklist Grid with Automatic Sequential Highlighting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {expectedResults.items.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.id}
                className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl border transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white border-brand-400 shadow-cta'
                    : 'bg-white text-darkCharcoal border-lightBorder shadow-soft'
                }`}
              >
                <div className={`p-1.5 rounded-full shrink-0 transition-colors duration-500 ${
                  isActive ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-500'
                }`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className={`text-xs sm:text-sm font-semibold leading-snug transition-colors duration-500 ${
                  isActive ? 'text-white font-bold' : 'text-darkCharcoal'
                }`}>
                  {item.text}
                </p>
              </div>
            );
          })}
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
