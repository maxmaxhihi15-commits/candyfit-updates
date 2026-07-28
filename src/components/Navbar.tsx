import React from 'react';
import { Flame } from 'lucide-react';
import { usePricingSectionInView } from '../hooks/usePricingSectionInView';

export const Navbar: React.FC = () => {
  const isPricingInView = usePricingSectionInView();

  return (
    <header
      className={[
        'sticky top-0 z-40 border-b border-lightBorder/60 bg-warmBg/90 backdrop-blur-md',
        'transition-[transform,opacity] duration-300 ease-out',
        isPricingInView
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100',
        'sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto',
      ].join(' ')}
      aria-hidden={isPricingInView || undefined}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Creator Name */}
        <a
          href="#"
          tabIndex={isPricingInView ? -1 : 0}
          className="flex items-center gap-2 group"
        >
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

        {/* Action Button CTA */}
        <a
          href="#pricing"
          tabIndex={isPricingInView ? -1 : 0}
          className="flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-cta transition-all hover:scale-105 active:scale-95"
        >
          <Flame className="w-3.5 h-3.5 fill-white" />
          <span>ПРИДБАТИ</span>
        </a>
      </div>
    </header>
  );
};
