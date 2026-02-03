
import React from 'react';
import { translations } from '../../translations';

export const UseCasesSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-10 md:space-y-16 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-600/10 blur-[160px] -z-10" />
      
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-titanium uppercase leading-none">
          {t.slide8_title}
        </h2>
        <p className="text-lg md:text-3xl text-flow-blue font-black max-w-3xl mx-auto tracking-tight uppercase leading-tight opacity-90">
          {t.slide8_sub}
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 md:gap-14">
         <div className="border-gradient-flow p-10 md:p-20 rounded-[3rem] shadow-[0_0_80px_rgba(59,130,246,0.2)]">
            <div className="text-6xl md:text-[9rem] font-black text-flow-vibrant tracking-tighter leading-none animate-pulse">
              {t.slide8_stat}
            </div>
            <div className="text-[12px] md:text-xl font-black uppercase tracking-[0.5em] text-white/40 mt-6 md:mt-10">
              Annual Percentage Yield
            </div>
         </div>
         
         <div className="glass-card p-6 md:p-10 border-white/5 bg-white/[0.02] max-w-3xl rounded-3xl">
            <p className="text-base md:text-2xl text-white font-medium leading-relaxed italic tracking-tight opacity-80">
              "{t.slide8_p}"
            </p>
         </div>
      </div>
    </div>
  );
};
