import React from 'react';

interface CourseProductBoxProps {
  image: string;
  title: string;
}

/**
 * CSS-only course product mockup.
 * Uses the existing authentic course image as cover artwork, without adding new assets.
 */
export const CourseProductBox: React.FC<CourseProductBoxProps> = ({ image, title }) => {
  return (
    <div
      className="relative mx-auto h-[308px] w-full max-w-[344px] overflow-visible sm:h-[342px] [perspective:1200px]"
      role="img"
      aria-label="Обкладинка онлайн-курсу AnnaFitt"
    >
      {/* Tighter, lighter floor shadow */}
      <div
        className="pointer-events-none absolute bottom-3 left-1/2 h-8 w-[66%] -translate-x-1/2 rounded-full bg-darkCharcoal/14 blur-xl"
        aria-hidden="true"
      />

      {/* Ambient glow behind the product */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/35 blur-3xl"
        aria-hidden="true"
      />

      {/* 3D product box — approximately 6% larger than the previous version */}
      <div className="absolute left-1/2 top-1/2 h-[272px] w-[244px] sm:h-[304px] sm:w-[272px] [transform-style:preserve-3d] [transform:translate(-50%,-50%)_rotateX(2.5deg)_rotateY(-14deg)_rotateZ(-0.5deg)] transition-transform duration-500 ease-out hover:[transform:translate(-50%,-51.5%)_rotateX(2deg)_rotateY(-10.5deg)_rotateZ(0deg)] motion-reduce:transition-none">
        {/* Front cover */}
        <div className="absolute inset-y-0 left-0 w-[208px] overflow-hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-white via-brand-50 to-brand-100 shadow-[0_18px_38px_rgba(36,28,31,0.20)] sm:w-[232px] [transform:translateZ(18px)]">
          {/* Subtle wall-line motif */}
          <div className="pointer-events-none absolute inset-0 opacity-65" aria-hidden="true">
            <div className="absolute inset-y-0 left-[19%] w-px bg-white/75" />
            <div className="absolute inset-y-0 left-[46%] w-px bg-white/45" />
            <div className="absolute inset-y-0 left-[74%] w-px bg-white/60" />
          </div>

          <div className="relative z-10 flex h-full flex-col px-4 pb-3 pt-4 sm:px-5 sm:pb-4 sm:pt-5">
            <div className="mb-3 flex items-center gap-2 text-left">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[11px] font-black text-white shadow-sm">
                AF
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-black leading-none text-darkCharcoal">AnnaFitt</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-brand-600">
                  30-денний курс
                </p>
              </div>
            </div>

            <h3 className="relative z-10 max-w-[180px] text-left text-[17px] font-black leading-[1.02] tracking-[-0.035em] text-darkCharcoal [text-wrap:balance] sm:max-w-[202px] sm:text-[19px]">
              {title}
            </h3>

            <div className="relative -mx-4 mt-auto h-[124px] overflow-hidden sm:-mx-5 sm:h-[139px]">
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-x-0 top-0 h-11 bg-gradient-to-b from-brand-50 via-brand-50/65 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-11 bg-gradient-to-t from-darkCharcoal/45 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/45 bg-white/92 px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-brand-600 shadow-sm backdrop-blur-sm sm:bottom-5">
                Доступ 60 днів
              </span>
            </div>
          </div>
        </div>

        {/* Wider, less distorted side spine with a slight overlap to keep it attached */}
        <div className="absolute inset-y-[8px] left-[205px] w-[50px] origin-left overflow-hidden rounded-r-[14px] border-y border-r border-brand-700/20 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 shadow-[8px_10px_18px_rgba(65,26,39,0.16)] sm:left-[229px] sm:w-[54px] [transform:rotateY(86deg)_translateZ(18px)]">
          <div className="flex h-full items-center justify-center">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-black uppercase tracking-[0.28em] text-white/95">
              AnnaFitt • 30 днів
            </span>
          </div>
        </div>

        {/* Lower-angle top face, visually attached to the front cover */}
        <div className="absolute left-[8px] top-[2px] h-[36px] w-[192px] origin-top rounded-t-[16px] border border-brand-200/45 bg-gradient-to-r from-white/90 to-brand-100/80 opacity-80 sm:w-[216px] [transform:rotateX(78deg)_translateZ(18px)]">
          <div className="flex h-full items-center justify-between px-4 text-[8px] font-black uppercase tracking-[0.18em] text-brand-600/80">
            <span>AnnaFitt</span>
            <span>AF</span>
          </div>
        </div>
      </div>
    </div>
  );
};
