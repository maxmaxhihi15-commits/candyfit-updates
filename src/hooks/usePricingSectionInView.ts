import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 639px)';

/**
 * Returns true only on mobile while the pricing section intersects the viewport.
 * Desktop always returns false.
 */
export const usePricingSectionInView = (): boolean => {
  const [isPricingInView, setIsPricingInView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    let observer: IntersectionObserver | null = null;

    const connectObserver = () => {
      observer?.disconnect();
      observer = null;

      if (!mediaQuery.matches) {
        setIsPricingInView(false);
        return;
      }

      const pricingSection = document.getElementById('pricing');

      if (!pricingSection) {
        setIsPricingInView(false);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsPricingInView(entry.isIntersecting);
        },
        {
          threshold: 0.01,
        },
      );

      observer.observe(pricingSection);
    };

    connectObserver();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', connectObserver);
    } else {
      mediaQuery.addListener(connectObserver);
    }

    return () => {
      observer?.disconnect();

      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', connectObserver);
      } else {
        mediaQuery.removeListener(connectObserver);
      }
    };
  }, []);

  return isPricingInView;
};
