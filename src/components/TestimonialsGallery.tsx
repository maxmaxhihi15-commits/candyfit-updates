import React, { useState, useEffect, useRef } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { LightboxModal } from './LightboxModal';
import { MessageSquareHeart, Maximize2 } from 'lucide-react';

export const TestimonialsGallery: React.FC = () => {
  const { reviews } = COURSE_DATA;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isIntersectingRef = useRef(false);
  const isPausedRef = useRef(false);
  const scrollPosRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Target speed: 20 pixels per second
  const SPEED_PX_PER_SEC = 20;

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const step = (time: number) => {
      if (
        lastTimeRef.current !== null &&
        isIntersectingRef.current &&
        !isPausedRef.current &&
        selectedIdx === null
      ) {
        const deltaSec = (time - lastTimeRef.current) / 1000;
        const safeDeltaSec = Math.min(deltaSec, 0.1);
        scrollPosRef.current += SPEED_PX_PER_SEC * safeDeltaSec;

        if (trackRef.current) {
          const halfWidth = trackRef.current.scrollWidth / 2;
          if (halfWidth > 0) {
            if (scrollPosRef.current >= halfWidth) {
              scrollPosRef.current %= halfWidth;
            }
            trackRef.current.style.transform = `translate3d(${-scrollPosRef.current}px, 0, 0)`;
          }
        }
      }
      lastTimeRef.current = time;
      animFrameIdRef.current = requestAnimationFrame(step);
    };

    animFrameIdRef.current = requestAnimationFrame(step);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isIntersectingRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      observer.disconnect();
    };
  }, [selectedIdx]);

  const handleInteractionStart = () => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    // Resume autoplay 4 seconds after interaction ends
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 4000);
  };

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

  // Duplicate image set once for seamless looping
  const combinedImages = [...reviews.images, ...reviews.images];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-lightBorder/80 overflow-hidden">
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

        {/* Continuous Motion Gallery Wrapper */}
        <div
          ref={containerRef}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          className="relative w-full overflow-hidden py-2"
        >
          <div
            ref={trackRef}
            className="flex gap-4 w-max will-change-transform"
            style={{ transform: `translate3d(0,0,0)` }}
          >
            {combinedImages.map((imgUrl, idx) => {
              const isDuplicate = idx >= reviews.images.length;
              const originalIndex = idx % reviews.images.length;

              return (
                <div
                  key={idx}
                  aria-hidden={isDuplicate ? 'true' : undefined}
                  onClick={() => setSelectedIdx(originalIndex)}
                  className="shrink-0 w-60 sm:w-64 group relative bg-warmBg rounded-2xl overflow-hidden border border-lightBorder hover:border-brand-300 shadow-sm hover:shadow-card cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-pinkAccent/20">
                    <img
                      src={imgUrl}
                      alt={isDuplicate ? "" : `Відгук дівчат ${originalIndex + 1}`}
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
              );
            })}
          </div>
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
