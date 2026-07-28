import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Monitor, Calendar, Send, ShieldCheck, Zap, Layers, PlayCircle } from 'lucide-react';

export const CourseFormat: React.FC = () => {
  const { courseFormat } = COURSE_DATA;

  const icons = [
    <Zap className="w-5 h-5 text-brand-500" />,
    <PlayCircle className="w-5 h-5 text-brand-500" />,
    <Layers className="w-5 h-5 text-brand-500" />,
    <Monitor className="w-5 h-5 text-brand-500" />,
    <Calendar className="w-5 h-5 text-brand-500" />,
    <ShieldCheck className="w-5 h-5 text-brand-500" />,
    <Send className="w-5 h-5 text-brand-500" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-warmBg border-t border-lightBorder/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 mb-2 block">
            Зручне навчання
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight">
            {courseFormat.title}
          </h2>
        </div>

        {/* Feature List */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-lightBorder shadow-card divide-y divide-lightBorder/60">
          {courseFormat.features.map((feature, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
              <div className="p-2.5 rounded-2xl bg-pinkAccent shrink-0 mt-0.5">
                {icons[idx % icons.length]}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-darkCharcoal leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
