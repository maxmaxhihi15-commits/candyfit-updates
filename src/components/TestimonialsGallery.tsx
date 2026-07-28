import React, { useState } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { LightboxModal } from './LightboxModal';
import { MessageSquareHeart, Maximize2 } from 'lucide-react';

export const TestimonialsGallery: React.FC = () => {
  const { reviews } = COURSE_DATA;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? reviews.images.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === reviews.images.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-lightBorder/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pinkAccent text-brand-600 text-xs font-semibold mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Результати дівчат</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight">
            {reviews.title}
          </h2>
          <p className="text-xs sm:text-sm text-softGray font-normal mt-2">
            Натисніть на зображення, щоб переглянути у повному розмірі
          </p>
        </div>

        {/* Touch-friendly horizontal scroll / grid gallery */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar snap-x snap-mandatory sm:grid sm:grid-cols-3 md:grid-cols-4 sm:overflow-visible">
          {reviews.images.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="shrink-0 w-64 sm:w-auto snap-center group relative bg-warmBg rounded-2xl overflow-hidden border border-lightBorder hover:border-brand-300 shadow-sm hover:shadow-card cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-pinkAccent/20">
                <img
                  src={imgUrl}
                  alt={`Відгук дівчат ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay hover icon */}
              <div className="absolute inset-0 bg-darkCharcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md text-darkCharcoal p-2.5 rounded-full shadow-lg">
                  <Maximize2 className="w-5 h-5 text-brand-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Component */}
        <LightboxModal
          images={reviews.images}
          currentIndex={selectedIdx}
          onClose={() => setSelectedIdx(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
};
