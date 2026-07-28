import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { CreditCard, MailCheck, Trophy } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const { processSteps } = COURSE_DATA;

  const stepIcons = [
    <CreditCard className="w-6 h-6 text-white" />,
    <MailCheck className="w-6 h-6 text-white" />,
    <Trophy className="w-6 h-6 text-white" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-lightBorder/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 mb-2 block">
            Простий процес
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight">
            Як відбувається проходження?
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {processSteps.map((stepItem, idx) => (
            <div
              key={idx}
              className="relative bg-warmBg/60 rounded-3xl p-6 border border-lightBorder hover:border-brand-200 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-500 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-brand-500 flex items-center justify-center shadow-md">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-darkCharcoal mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-softGray font-normal leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
