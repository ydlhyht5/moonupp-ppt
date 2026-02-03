
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
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onNavigate(0)}>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform">
           <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </div>
        <span className="logo-wordmark text-lg md:text-2xl">moonupp</span>
      </div>

      <div className="hidden sm:flex gap-1 items-center px-4 py-2 rounded-full border border-white/5 bg-white/5">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentSlide ? 'w-8 md:w-12 bg-blue-500 shadow-[0_0_10px_#0037ff]' : 'w-2 bg-white/10 hover:bg-white/30'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onToggleLang}
          className="flex items-center gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/50 transition-all font-bold text-[10px] md:text-xs tracking-widest uppercase"
        >
          <span className="text-blue-500 hidden xs:inline">●</span>
          {t.lang}
        </button>
      </div>
    </nav>
  );
};
