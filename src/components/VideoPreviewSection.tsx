import React, { useState } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Play, Dumbbell } from 'lucide-react';

export const VideoPreviewSection: React.FC = () => {
  const { videoPreview } = COURSE_DATA;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-16 bg-warmBg border-t border-lightBorder/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pinkAccent text-brand-600 text-xs font-semibold mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Демо тренування</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-darkCharcoal tracking-tight mb-2">
            {videoPreview.title}
          </h2>
          <p className="text-xs sm:text-sm text-softGray font-normal">
            {videoPreview.subtitle}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-2xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border border-lightBorder relative aspect-video">
          {!isPlaying ? (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Video Poster Thumbnail */}
              <img
                src="/images/course/IMG_7812.png"
                alt="Уривок тренування біля стіни"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Дивитися уривок тренування"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-cta group-hover:scale-110 active:scale-95 transition-all"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium backdrop-blur-md bg-black/40 p-3 rounded-2xl border border-white/10 flex items-center justify-between">
                <span>Тренування біля стіни для початківців</span>
                <span className="bg-brand-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Демо</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-darkCharcoal text-white text-center">
              <p className="text-sm font-semibold mb-3">Уривок тренування доступний для перегляду</p>
              <p className="text-xs text-gray-400 mb-4 max-w-sm">Повноцінні відео у 1080p HD розширенні відкриваються у кабінеті Softbook після оплати.</p>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-xs bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/20 transition-all"
              >
                Закрити плеєр
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
