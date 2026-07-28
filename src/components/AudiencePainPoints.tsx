import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { HeartHandshake } from 'lucide-react';

export const AudiencePainPoints: React.FC = () => {
  const { painPoints } = COURSE_DATA;

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-lightBorder/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pinkAccent text-brand-600 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Для кого цей курс</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight leading-snug [text-wrap:balance]">
            {painPoints.title}
          </h2>
        </div>

        {/* Editorial Pain Point Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {painPoints.items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-warmBg/70 hover:bg-white rounded-2xl p-5 border border-lightBorder hover:border-brand-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image preview */}
              <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-pinkAccent/30 relative">
                <img
                  src={item.image}
                  alt={`Аудиторія курсу - пункт ${item.id}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-brand-600 font-extrabold text-xs flex items-center justify-center shadow-sm">
                  {item.id}
                </div>
              </div>

              {/* Card Description Text - Center-aligned, +1px font size (13px/15px), balanced text wrapping & adjusted padding */}
              <p className="text-[13px] sm:text-[15px] font-semibold text-darkCharcoal leading-relaxed text-center px-3 sm:px-4 [text-wrap:balance]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
