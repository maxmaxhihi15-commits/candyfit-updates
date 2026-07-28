import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
  dark?: boolean;
}

// 20-minute cycle in milliseconds (20 * 60 * 1000 = 1,200,000 ms)
const CYCLE_MS = 20 * 60 * 1000;

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = '', dark = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 20,
    seconds: 0,
  });

  useEffect(() => {
    // Persistent timer start anchor stored in localStorage
    let startTimeStr = localStorage.getItem('annafitt_timer_start_time');
    let startTime: number;

    if (!startTimeStr) {
      startTime = Date.now();
      localStorage.setItem('annafitt_timer_start_time', startTime.toString());
    } else {
      startTime = parseInt(startTimeStr, 10);
      if (isNaN(startTime)) {
        startTime = Date.now();
        localStorage.setItem('annafitt_timer_start_time', startTime.toString());
      }
    }

    const calculateTime = () => {
      const now = Date.now();
      const elapsed = Math.max(0, now - startTime);
      const remainingMs = CYCLE_MS - (elapsed % CYCLE_MS);

      // Convert to total remaining seconds
      const totalRemainingSec = Math.floor(remainingMs / 1000);

      const mins = Math.floor((totalRemainingSec % 3600) / 60);
      const secs = totalRemainingSec % 60;

      setTimeLeft({
        minutes: mins >= 20 && secs > 0 ? 20 : mins,
        seconds: secs,
      });
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        calculateTime();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}>
      {/* Days - Always 00 */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-darkCharcoal text-white border-gray-800' : 'bg-white text-darkCharcoal border-lightBorder'
        }`}>
          00
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">днів</span>
      </div>

      <span className={`font-bold text-lg -mt-4 ${dark ? 'text-gray-400' : 'text-darkCharcoal'}`}>:</span>

      {/* Hours - Always 00 */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-darkCharcoal text-white border-gray-800' : 'bg-white text-darkCharcoal border-lightBorder'
        }`}>
          00
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">годин</span>
      </div>

      <span className={`font-bold text-lg -mt-4 ${dark ? 'text-gray-400' : 'text-darkCharcoal'}`}>:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-darkCharcoal text-white border-gray-800' : 'bg-white text-darkCharcoal border-lightBorder'
        }`}>
          {pad(timeLeft.minutes)}
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">хвилин</span>
      </div>

      <span className={`font-bold text-lg -mt-4 ${dark ? 'text-gray-400' : 'text-darkCharcoal'}`}>:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-brand-500 text-white border-brand-400' : 'bg-brand-50 text-brand-600 border-brand-200'
        }`}>
          {pad(timeLeft.seconds)}
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">секунд</span>
      </div>
    </div>
  );
};
