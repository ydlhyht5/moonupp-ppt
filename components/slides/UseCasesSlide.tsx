
import React from 'react';
import { translations } from '../../translations';

export const UseCasesSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-24 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-600/10 blur-[120px] -z-10" />
      
      <div className="space-y-6">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gradient uppercase leading-tight">{t.slide8_title}</h2>
        <p className="text-lg md:text-3xl text-gradient-silver font-bold max-w-3xl mx-auto">{t.slide8_sub}</p>
      </div>

      <div className="flex flex-col items-center gap-12 md:gap-20">
         <div className="glass-card p-14 md:p-24 relative overflow-hidden group border-blue-500/40 bg-black/40 shadow-[0_0_60px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="text-7xl md:text-[10rem] font-black text-gradient-vibrant tracking-tighter drop-shadow-[0_0_40px_rgba(37,99,235,0.6)] animate-pulse">
              {t.slide8_stat}
            </div>
            <div className="text-[14px] md:text-[18px] font-black uppercase tracking-[0.5em] text-white mt-8 drop-shadow-md">Annual Percentage Yield</div>
         </div>
         <p className="text-sm md:text-2xl text-white font-medium max-w-2xl leading-relaxed italic drop-shadow-lg">
           "{t.slide8_p}"
         </p>
      </div>
    </div>
  );
};
