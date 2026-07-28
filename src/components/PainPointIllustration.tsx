import React from 'react';

interface PainPointIllustrationProps {
  id: number;
}

const C = {
  coral: '#FF4761',
  coralDark: '#C22B42',
  blush: '#FFE3E3',
  blushSoft: '#FFF0F2',
  cream: '#FFFDF9',
  charcoal: '#1A1D20',
  muted: '#8A7478',
  white: '#FFFFFF',
};

const CommonDefs: React.FC<{ id: number }> = ({ id }) => (
  <defs>
    <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={C.white} />
      <stop offset="100%" stopColor={C.blushSoft} />
    </linearGradient>
    <linearGradient id={`accent-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={C.coral} />
      <stop offset="100%" stopColor={C.coralDark} />
    </linearGradient>
    <filter id={`shadow-${id}`} x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#C22B42" floodOpacity="0.12" />
    </filter>
  </defs>
);

const Figure: React.FC<{
  x?: number;
  y?: number;
  scale?: number;
  pose?: 'standing' | 'wall' | 'confident';
}> = ({ x = 0, y = 0, scale = 1, pose = 'standing' }) => {
  if (pose === 'wall') {
    return (
      <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="52" cy="28" r="15" fill={C.blush} stroke="none" />
        <path d="M52 44 C48 64 48 82 53 100" />
        <path d="M50 58 L23 75" />
        <path d="M55 58 L83 46" />
        <path d="M53 99 L30 130" />
        <path d="M54 99 L82 128" />
        <path d="M83 46 L98 45" stroke={C.coral} />
      </g>
    );
  }

  if (pose === 'confident') {
    return (
      <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="50" cy="27" r="15" fill={C.blush} stroke="none" />
        <path d="M50 44 C42 62 42 84 50 106 C58 84 58 62 50 44" />
        <path d="M45 58 L19 47" />
        <path d="M55 58 L82 45" />
        <path d="M49 104 L33 137" />
        <path d="M51 104 L69 137" />
        <path d="M19 47 L11 57" stroke={C.coral} />
        <path d="M82 45 L90 55" stroke={C.coral} />
      </g>
    );
  }

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="50" cy="27" r="15" fill={C.blush} stroke="none" />
      <path d="M50 44 C40 65 41 88 50 109 C60 88 60 65 50 44" />
      <path d="M45 60 L24 84" />
      <path d="M55 60 L77 84" />
      <path d="M49 107 L33 140" />
      <path d="M51 107 L68 140" />
    </g>
  );
};

const IllustrationOne = () => (
  <>
    <rect x="18" y="14" width="284" height="162" rx="28" fill="url(#bg-1)" />
    <path d="M233 34 V160" stroke={C.blush} strokeWidth="8" strokeLinecap="round" />
    <Figure x={98} y={24} scale={0.9} pose="confident" />
    <path d="M86 139 C110 149 143 148 169 136" stroke={C.coral} strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M85 122 L75 110 M85 122 L96 109" stroke={C.coral} strokeWidth="4" strokeLinecap="round" />
    <path d="M178 122 L168 110 M178 122 L189 109" stroke={C.coral} strokeWidth="4" strokeLinecap="round" />
    <path d="M211 59 L216 69 L227 72 L217 77 L214 88 L209 78 L198 75 L208 70 Z" fill={C.coral} opacity="0.85" />
  </>
);

const IllustrationTwo = () => (
  <>
    <rect x="18" y="14" width="284" height="162" rx="28" fill="url(#bg-2)" />
    <circle cx="130" cy="96" r="53" fill={C.white} stroke={C.blush} strokeWidth="8" filter="url(#shadow-2)" />
    <circle cx="130" cy="96" r="30" fill={C.blushSoft} />
    <path d="M116 107 C124 85 145 80 153 91 C148 111 129 120 116 107 Z" fill="url(#accent-2)" opacity="0.9" />
    <path d="M130 94 C133 83 142 76 153 72" stroke={C.charcoal} strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M66 55 V139 M57 55 V87 M75 55 V87" stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" />
    <path d="M194 53 C210 63 219 81 219 99 C219 127 197 148 171 151" stroke={C.coral} strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M175 139 L164 152 L180 159" stroke={C.coral} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M193 145 L237 51" stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" opacity="0.75" />
  </>
);

const IllustrationThree = () => (
  <>
    <rect x="18" y="14" width="284" height="162" rx="28" fill="url(#bg-3)" />
    <path d="M222 38 V159" stroke={C.blush} strokeWidth="9" strokeLinecap="round" />
    <Figure x={82} y={25} scale={0.9} pose="wall" />
    <g transform="translate(172 58)">
      <rect width="90" height="72" rx="16" fill={C.white} stroke={C.blush} strokeWidth="4" filter="url(#shadow-3)" />
      <path d="M16 54 L35 42 L51 47 L72 28" stroke={C.coral} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="16" cy="54" r="4" fill={C.coral} />
      <circle cx="35" cy="42" r="4" fill={C.coral} />
      <circle cx="51" cy="47" r="4" fill={C.coral} />
      <circle cx="72" cy="28" r="4" fill={C.coral} />
    </g>
    <path d="M101 154 H190" stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" opacity="0.16" />
  </>
);

const IllustrationFour = () => (
  <>
    <rect x="18" y="14" width="284" height="162" rx="28" fill="url(#bg-4)" />
    <rect x="61" y="32" width="104" height="126" rx="48" fill={C.white} stroke={C.blush} strokeWidth="7" filter="url(#shadow-4)" />
    <g transform="translate(69 38) scale(0.78)">
      <Figure pose="standing" />
    </g>
    <Figure x={190} y={31} scale={0.76} pose="confident" />
    <path d="M244 50 C251 39 269 42 269 56 C269 70 247 81 244 84 C241 81 219 70 219 56 C219 42 237 39 244 50 Z" fill={C.coral} opacity="0.92" />
    <path d="M196 142 C215 151 241 151 261 141" stroke={C.coral} strokeWidth="5" strokeLinecap="round" fill="none" />
  </>
);

const IllustrationFive = () => (
  <>
    <rect x="18" y="14" width="284" height="162" rx="28" fill="url(#bg-5)" />
    <path d="M69 43 H181" stroke={C.charcoal} strokeWidth="6" strokeLinecap="round" />
    <path d="M93 43 V146 M159 43 V146" stroke={C.charcoal} strokeWidth="5" strokeLinecap="round" opacity="0.35" />
    <path d="M126 56 C114 65 107 72 98 79 L111 92 L106 145 H148 L143 92 L156 79 C146 72 139 65 126 56 Z" fill="url(#accent-5)" opacity="0.9" />
    <path d="M126 55 V44 C126 35 139 35 139 43 C139 49 132 51 126 55" stroke={C.charcoal} strokeWidth="4" strokeLinecap="round" fill="none" />
    <Figure x={203} y={28} scale={0.72} pose="confident" />
    <path d="M198 151 H280" stroke={C.blush} strokeWidth="7" strokeLinecap="round" />
    <path d="M209 54 L215 62 L224 64 L216 70 L214 79 L208 71 L199 69 L207 63 Z" fill={C.coral} />
  </>
);

const IllustrationSix = () => (
  <>
    <rect x="18" y="14" width="284" height="162" rx="28" fill="url(#bg-6)" />
    <path
      d="M141 36 C121 52 111 74 115 99 C119 125 137 148 160 156 C183 148 201 125 205 99 C209 74 199 52 179 36 C169 47 151 47 141 36 Z"
      fill={C.white}
      stroke={C.blush}
      strokeWidth="7"
      filter="url(#shadow-6)"
    />
    <path d="M133 81 C147 70 173 70 188 81" stroke={C.coral} strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M130 103 C148 92 174 92 191 103" stroke={C.coral} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8" />
    <path d="M136 126 C151 118 171 118 185 126" stroke={C.coral} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.62" />
    <path d="M78 133 V72 M78 72 L66 87 M78 72 L90 87" stroke={C.coral} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M242 133 V72 M242 72 L230 87 M242 72 L254 87" stroke={C.coral} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="78" cy="147" r="8" fill={C.blush} />
    <circle cx="242" cy="147" r="8" fill={C.blush} />
  </>
);

export const PainPointIllustration: React.FC<PainPointIllustrationProps> = ({ id }) => {
  const illustration = (() => {
    switch (id) {
      case 1:
        return <IllustrationOne />;
      case 2:
        return <IllustrationTwo />;
      case 3:
        return <IllustrationThree />;
      case 4:
        return <IllustrationFour />;
      case 5:
        return <IllustrationFive />;
      case 6:
        return <IllustrationSix />;
      default:
        return <IllustrationOne />;
    }
  })();

  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]"
      aria-hidden="true"
      focusable="false"
    >
      <CommonDefs id={id} />
      <g>{illustration}</g>
    </svg>
  );
};
