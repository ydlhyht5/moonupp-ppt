
import React from 'react';
import { translations } from '../../translations';

export const HeroSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto h-full justify-center px-4">
      <div className="border-gradient-flow px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 shadow-[0_0_12px_#0037ff]" />
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-flow-blue">{t.slide1_badge}</span>
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-8 leading-[0.9] tracking-tighter text-titanium uppercase">
        {t.heroTitle}
      </h1>
      
      <p className="text-base md:text-2xl lg:text-3xl text-flow-blue mb-8 md:mb-16 max-w-4xl leading-tight font-bold opacity-90">
        {t.heroSub}
      </p>

      <div className="grid grid-cols-2 gap-8 md:gap-40">
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-flow-vibrant">{t.poweredBy}</span>
          <span className="text-xl md:text-4xl font-black tracking-tighter italic text-white/40">LEAD BANK</span>
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-flow-vibrant">{t.poweredBy}</span>
          <span className="text-xl md:text-4xl font-black tracking-tighter italic text-white/40">CIRCLE</span>
        </div>
      </div>
    </div>
  );
};
