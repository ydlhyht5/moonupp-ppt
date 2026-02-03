
import React from 'react';
import { PresentationProps } from '../types';

export const PresentationManager: React.FC<PresentationProps> = ({ currentSlideIndex, slides }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{ transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
          className={`absolute inset-0 flex items-center justify-center ${
            index === currentSlideIndex 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : index < currentSlideIndex 
                ? 'opacity-0 -translate-y-12 scale-98 pointer-events-none' 
                : 'opacity-0 translate-y-12 scale-102 pointer-events-none'
          }`}
        >
          <div className="w-full h-full flex items-center justify-center px-4 pt-24 pb-12 md:p-12 lg:p-24 overflow-y-auto no-scrollbar">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center min-h-fit">
              {slide.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
