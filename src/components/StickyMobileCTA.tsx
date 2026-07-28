import React, { useState, useEffect } from 'react';
import { Flame, Tag } from 'lucide-react';
import { COURSE_DATA } from '../data/courseData';

export const StickyMobileCTA: React.FC = () => {
  const { hero } = COURSE_DATA;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-lightBorder p-3 shadow-2xl transition-all duration-300 animate-slide-up sm:hidden">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Price & Offer Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-extrabold text-brand-500 tracking-tight">
              {hero.price}
            </span>
            <span className="text-xs text-softGray line-through font-normal">
              {hero.originalPrice}
            </span>
          </div>
          <span className="text-[10px] font-bold text-brand-600 uppercase flex items-center gap-1">
            <Tag className="w-2.5 h-2.5" />
            <span>Знижка 82%</span>
          </span>
        </div>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="flex-1 flex items-center justify-center gap-1.5 bg-brand-500 active:bg-brand-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-cta transition-all text-center"
        >
          <Flame className="w-4 h-4 fill-white" />
          <span>ПРИДБАТИ КУРС</span>
        </a>

      </div>
    </div>
  );
};
