
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PresentationManager } from './components/PresentationManager';
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { useSlides } from './hooks/useSlides';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const slides = useSlides(lang);
  const touchStartX = useRef<number | null>(null);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-black text-white selection:bg-blue-500/30 touch-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <BackgroundEffects />
      <Navbar 
        lang={lang} 
        onToggleLang={toggleLang} 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onNavigate={setCurrentSlide} 
      />
      
      <main className="w-full h-full">
        <PresentationManager 
          currentSlideIndex={currentSlide} 
          slides={slides} 
          onNext={nextSlide} 
          onPrev={prevSlide} 
        />
      </main>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Controls Overlay - Hidden on small mobile to save space if needed, but useful for accessibility */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-2 md:gap-4 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 md:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-10"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 md:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-10"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
