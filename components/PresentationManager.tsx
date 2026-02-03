
import React from 'react';
import { PresentationProps } from '../types';

export const PresentationManager: React.FC<PresentationProps> = ({ currentSlideIndex, slides }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            index === currentSlideIndex 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : index < currentSlideIndex 
                ? 'opacity-0 -translate-y-12 scale-95 pointer-events-none' 
                : 'opacity-0 translate-y-12 scale-105 pointer-events-none'
          }`}
        >
          {/* Enhanced padding and flex-col for better small screen flow */}
          <div className="w-full h-full flex items-center justify-center px-4 pt-20 pb-12 md:p-12 lg:p-24 overflow-y-auto no-scrollbar">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center min-h-fit">
              {slide.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
