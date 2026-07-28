import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !images[currentIndex]) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Закрити перегляд"
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Previous */}
      <button
        onClick={onPrev}
        aria-label="Попередній відгук"
        className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image Display */}
      <div className="max-w-3xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Відгук учасника ${currentIndex + 1}`}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
        />
        <span className="text-white/60 text-xs font-medium mt-4">
          {currentIndex + 1} з {images.length}
        </span>
      </div>

      {/* Navigation Next */}
      <button
        onClick={onNext}
        aria-label="Наступний відгук"
        className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
