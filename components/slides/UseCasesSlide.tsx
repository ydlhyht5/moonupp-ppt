
import React from 'react';
import { translations } from '../../translations';

export const UseCasesSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-8 md:space-y-12 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-600/10 blur-[140px] -z-10" />
      
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-titanium uppercase leading-none">
          {t.slide8_title}
        </h2>
        <p className="text-base md:text-2xl text-flow-blue font-black max-w-2xl mx-auto tracking-tight uppercase leading-tight opacity-90">
          {t.slide8_sub}
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 md:gap-12">
         <div className="border-gradient-flow p-10 md:p-16 rounded-[2.5rem] shadow-[0_0_60px_rgba(59,130,246,0.15)] bg-black/40 backdrop-blur-sm">
            <div className="text-6xl md:text-8xl lg:text-9xl font-black text-flow-vibrant tracking-tighter leading-none animate-pulse">
              {t.slide8_stat}
            </div>
            <div className="text-[10px] md:text-lg font-black uppercase tracking-[0.6em] text-white/40 mt-6 md:mt-8">
              Annual Percentage Yield
            </div>
         </div>
         
         <div className="glass-card p-6 md:p-8 border-white/5 bg-white/[0.02] max-w-2xl rounded-3xl">
            <p className="text-sm md:text-xl text-white font-medium leading-relaxed italic tracking-tight opacity-80">
              "{t.slide8_p}"
            </p>
         </div>
      </div>
    </div>
  );
};
