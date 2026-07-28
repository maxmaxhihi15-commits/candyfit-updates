import React, { useState } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Play, Dumbbell } from 'lucide-react';

const YOUTUBE_VIDEO_ID = 'xnwHm7LTU7c';

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

        <div className="max-w-2xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border border-lightBorder relative aspect-video">
          {!isPlaying ? (
            <div className="relative w-full h-full group">
              <img
                src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                onError={(event) => {
                  event.currentTarget.src = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                }}
                alt="Прев’ю відео з тренуваннями біля стіни"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Відтворити відео тренування"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-cta hover:scale-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium backdrop-blur-md bg-black/40 p-3 rounded-2xl border border-white/10 flex items-center justify-between gap-3">
                <span>Тренування біля стіни для початківців</span>
                <span className="shrink-0 bg-brand-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Демо
                </span>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Приклад відео з тренуваннями"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};
