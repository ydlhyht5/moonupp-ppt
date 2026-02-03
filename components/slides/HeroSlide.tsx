
import React from 'react';
import { translations } from '../../translations';

export const HeroSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto h-full justify-center px-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6 md:mb-10">
        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_#0037ff]" />
        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-gradient-blue">{t.slide1_badge}</span>
      </div>
      
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-10 leading-tight tracking-tighter text-gradient">
        {t.heroTitle}
      </h1>
      
      <p className="text-base md:text-2xl text-gradient-silver mb-10 md:mb-20 max-w-3xl leading-relaxed font-semibold">
        {t.heroSub}
      </p>

      <div className="grid grid-cols-2 gap-12 md:gap-32 mt-4">
        <div className="flex flex-col items-center gap-2 md:gap-3 group">
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-gradient-vibrant opacity-80 group-hover:opacity-100 transition-opacity">{t.poweredBy}</span>
          <span className="text-xl md:text-3xl font-black tracking-tighter italic text-white/90">LEAD BANK</span>
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-3 group">
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-gradient-vibrant opacity-80 group-hover:opacity-100 transition-opacity">{t.poweredBy}</span>
          <span className="text-xl md:text-3xl font-black tracking-tighter italic text-white/90">CIRCLE</span>
        </div>
      </div>
    </div>
  );
};
