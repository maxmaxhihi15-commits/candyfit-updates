import React from 'react';
import { Instagram, Flame } from 'lucide-react';
import { COURSE_DATA } from '../data/courseData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-warmBg/90 backdrop-blur-md border-b border-lightBorder/60 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Creator Name */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            AF
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-darkCharcoal group-hover:text-brand-600 transition-colors">
              Anna Fitt
            </span>
            <span className="text-[10px] uppercase tracking-wider text-softGray font-semibold -mt-1">
              30-денний курс
            </span>
          </div>
        </a>

        {/* Action Buttons & Social link */}
        <div className="flex items-center gap-3">
          <a
            href={COURSE_DATA.hero.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-darkCharcoal hover:text-brand-500 bg-white/80 px-3 py-1.5 rounded-full border border-lightBorder shadow-sm transition-all"
            aria-label="Instagram @annafit__"
          >
            <Instagram className="w-4 h-4 text-brand-500" />
            <span className="hidden xs:inline">{COURSE_DATA.hero.instagramHandle}</span>
          </a>

          <a
            href="#pricing"
            className="flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-cta transition-all hover:scale-105 active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 fill-white" />
            <span>ПРИДБАТИ</span>
          </a>
        </div>
      </div>
    </header>
  );
};
