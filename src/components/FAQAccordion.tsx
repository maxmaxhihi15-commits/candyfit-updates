import React, { useState } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const { faq } = COURSE_DATA;
  // First item open by default as required by specification
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 bg-warmBg border-t border-lightBorder/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pinkAccent text-brand-600 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Питання та відповіді</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight">
            {faq.title}
          </h2>
        </div>

        {/* Accessible Accordions */}
        <div className="space-y-3.5">
          {faq.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-brand-300 shadow-soft'
                    : 'bg-white/80 border-lightBorder hover:bg-white hover:border-lightBorder'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-darkCharcoal gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-100 text-brand-600' : 'bg-warmBg text-softGray'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 pb-5 pt-1 border-t border-lightBorder/50 text-xs sm:text-sm text-softGray font-normal leading-relaxed whitespace-pre-line"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
