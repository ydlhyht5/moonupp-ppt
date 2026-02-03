
import React from 'react';
import { translations } from '../../translations';

export const VisionSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto h-full justify-center px-4 text-center relative">
      {/* Dynamic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/5 blur-[100px] md:blur-[160px] rounded-full -z-10" />
      
      <div className="flex flex-col items-center space-y-8 md:space-y-16 py-10">
        <div className="space-y-4 md:space-y-8 w-full">
          <h2 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-gradient leading-none uppercase whitespace-nowrap">
            {t.slide10_title}
          </h2>
          
          <p className="text-sm md:text-2xl text-gradient-silver max-w-2xl mx-auto leading-relaxed font-bold px-4">
            {t.slide10_sub}
          </p>
        </div>

        {/* Info Grid */}
        <div className="w-full max-w-4xl mx-auto pt-8 md:pt-16 grid grid-cols-3 gap-2 md:gap-8 border-t border-white/10">
          <div className="space-y-1 md:space-y-2">
            <div className="text-[8px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gradient-blue font-black">{t.slide10_footer1}</div>
            <div className="font-black text-[10px] md:text-lg text-white uppercase">24/7 Rails</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-[8px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gradient-vibrant font-black">{t.slide10_footer2}</div>
            <div className="font-black text-[10px] md:text-lg text-white uppercase">DeFi Sync</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-[8px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gradient-silver font-black">{t.slide10_footer3}</div>
            <div className="font-black text-[10px] md:text-lg text-white uppercase">Global Reach</div>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="pt-12 md:pt-20 flex flex-col items-center w-full">
          <div className="text-[9px] md:text-xs font-black tracking-[0.5em] text-blue-500/50 uppercase mb-4 md:mb-8">THE FUTURE OF GLOBAL LIQUIDITY</div>
          <div className="logo-wordmark text-[18vw] sm:text-7xl md:text-8xl lg:text-[10rem] lowercase text-gradient leading-none tracking-tighter font-black">
            moonupp
          </div>
        </div>
      </div>
    </div>
  );
};
