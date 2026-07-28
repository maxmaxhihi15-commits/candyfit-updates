import React, { useEffect, useState } from 'react';
import { Flame, Tag } from 'lucide-react';
import { COURSE_DATA } from '../data/courseData';
import { usePricingSectionInView } from '../hooks/usePricingSectionInView';

export const StickyMobileCTA: React.FC = () => {
  const { hero } = COURSE_DATA;
  const [pastHero, setPastHero] = useState(false);
  const isPricingInView = usePricingSectionInView();

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visible = pastHero && !isPricingInView;

  return (
    <div
      className={[
        'fixed bottom-0 left-0 right-0 z-40 border-t border-lightBorder bg-white/95 p-3 shadow-2xl backdrop-blur-md',
        'transition-[transform,opacity] duration-300 ease-out sm:hidden',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none',
      ].join(' ')}
      aria-hidden={!visible}
    >
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
          tabIndex={visible ? 0 : -1}
          className="flex-1 flex items-center justify-center gap-1.5 bg-brand-500 active:bg-brand-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-cta transition-all text-center"
        >
          <Flame className="w-4 h-4 fill-white" />
          <span>ПРИДБАТИ КУРС</span>
        </a>
      </div>
    </div>
  );
};
