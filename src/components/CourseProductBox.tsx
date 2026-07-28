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
      className="relative mx-auto h-[292px] w-full max-w-[330px] sm:h-[326px] [perspective:1200px]"
      role="img"
      aria-label="Обкладинка онлайн-курсу AnnaFitt"
    >
      {/* Soft floor shadow */}
      <div className="absolute bottom-2 left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-full bg-darkCharcoal/20 blur-2xl" />

      {/* Ambient glow behind the product */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/45 blur-3xl" />

      {/* 3D product box */}
      <div className="absolute left-1/2 top-1/2 h-[258px] w-[232px] sm:h-[288px] sm:w-[258px] [transform-style:preserve-3d] [transform:translate(-50%,-50%)_rotateX(3deg)_rotateY(-17deg)_rotateZ(-1deg)] transition-transform duration-500 ease-out hover:[transform:translate(-50%,-52%)_rotateX(2deg)_rotateY(-12deg)_rotateZ(0deg)]">
        {/* Front cover */}
        <div className="absolute inset-y-0 left-0 w-[198px] overflow-hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-white via-brand-50 to-brand-100 shadow-[0_24px_55px_rgba(36,28,31,0.28)] sm:w-[220px] [transform:translateZ(21px)]">
          {/* Subtle wall-line motif */}
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
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

            <h3 className="relative z-10 max-w-[172px] text-left text-[17px] font-black leading-[1.02] tracking-[-0.035em] text-darkCharcoal [text-wrap:balance] sm:max-w-[190px] sm:text-[19px]">
              {title}
            </h3>

            <div className="relative z-0 -mx-4 mb-[-10px] mt-auto h-[128px] -translate-y-[10px] overflow-hidden sm:-mx-5 sm:mb-[-12px] sm:h-[144px] sm:-translate-y-[12px]">
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-brand-50/90 via-brand-50/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-darkCharcoal/70 to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-brand-600 shadow-sm backdrop-blur-sm">
                Доступ 60 днів
              </span>
            </div>
          </div>
        </div>

        {/* Side spine */}
        <div className="absolute inset-y-[10px] left-[197px] w-[42px] origin-left overflow-hidden rounded-r-[14px] border-y border-r border-brand-700/25 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 shadow-[10px_12px_25px_rgba(65,26,39,0.2)] sm:left-[219px] sm:w-[46px] [backface-visibility:hidden] [transform:translateZ(21px)_rotateY(90deg)]">
          <div className="flex h-full items-center justify-center">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-black uppercase tracking-[0.28em] text-white/95">
              AnnaFitt • 30 днів
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
