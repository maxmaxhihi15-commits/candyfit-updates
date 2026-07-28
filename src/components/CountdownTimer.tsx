import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  /** Configurable deadline timestamp in milliseconds or target Date */
  targetDate?: Date;
  className?: string;
  dark?: boolean;
}

// Configurable target deadline: set to 24 hours from current time or fixed date
const DEFAULT_TARGET_HOURS = 24;

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '', dark = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // If no target date provided, use persistent deadline stored in localStorage or 24h from first visit
    let deadline: number;
    const storedDeadline = localStorage.getItem('annafitt_timer_deadline');
    if (storedDeadline && !targetDate) {
      deadline = parseInt(storedDeadline, 10);
    } else if (targetDate) {
      deadline = targetDate.getTime();
    } else {
      deadline = Date.now() + DEFAULT_TARGET_HOURS * 60 * 60 * 1000;
      localStorage.setItem('annafitt_timer_deadline', deadline.toString());
    }

    const calculateTime = () => {
      const difference = deadline - Date.now();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Reset 24 hours to keep offer active
        const newDeadline = Date.now() + DEFAULT_TARGET_HOURS * 60 * 60 * 1000;
        localStorage.setItem('annafitt_timer_deadline', newDeadline.toString());
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}>
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-darkCharcoal text-white border-gray-800' : 'bg-white text-darkCharcoal border-lightBorder'
        }`}>
          {pad(timeLeft.days)}
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">днів</span>
      </div>

      <span className={`font-bold text-lg -mt-4 ${dark ? 'text-gray-400' : 'text-darkCharcoal'}`}>:</span>

      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-darkCharcoal text-white border-gray-800' : 'bg-white text-darkCharcoal border-lightBorder'
        }`}>
          {pad(timeLeft.hours)}
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">годин</span>
      </div>

      <span className={`font-bold text-lg -mt-4 ${dark ? 'text-gray-400' : 'text-darkCharcoal'}`}>:</span>

      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl font-extrabold text-lg sm:text-xl shadow-sm border ${
          dark ? 'bg-darkCharcoal text-white border-gray-800' : 'bg-white text-darkCharcoal border-lightBorder'
        }`}>
          {pad(timeLeft.minutes)}
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-softGray mt-1">хвилин</span>
      </div>

      <span className={`font-bold text-lg -mt-4 ${dark ? 'text-gray-400' : 'text-darkCharcoal'}`}>:</span>

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
