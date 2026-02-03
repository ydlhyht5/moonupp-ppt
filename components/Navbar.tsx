
import React from 'react';
import { translations } from '../translations';

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
  lang: 'en' | 'zh';
  onToggleLang: () => void;
  onNavigate: (index: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSlide, totalSlides, lang, onToggleLang, onNavigate }) => {
  const t = translations[lang];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 md:py-10 flex justify-between items-center bg-gradient-to-b from-black/95 via-black/40 to-transparent pointer-events-none">
      <div 
        className="flex items-center group cursor-pointer pointer-events-auto" 
        onClick={() => onNavigate(0)}
      >
        <span className="text-2xl md:text-4xl font-[900] tracking-tighter lowercase leading-none bg-gradient-to-br from-white via-white to-blue-500 bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300">
          moonupp
        </span>
      </div>

      <div className="hidden sm:flex gap-1.5 items-center px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md pointer-events-auto shadow-xl">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentSlide ? 'w-10 md:w-14 bg-blue-500 shadow-[0_0_15px_#3b82f6]' : 'w-2 bg-white/10 hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 pointer-events-auto">
        <button 
          onClick={onToggleLang}
          className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 backdrop-blur-md transition-all font-black text-[11px] md:text-sm tracking-[0.2em] uppercase text-white/90"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
          {t.lang}
        </button>
      </div>
    </nav>
  );
};
