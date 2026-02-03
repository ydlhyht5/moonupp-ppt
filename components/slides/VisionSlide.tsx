
import React from 'react';
import { translations } from '../../translations';

export const VisionSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-600/5 blur-[150px] rounded-full -z-10" />
      
      <div className="flex flex-col items-center space-y-10 md:space-y-16 py-4">
        <div className="space-y-4 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-titanium leading-none uppercase">
            {t.slide10_title}
          </h2>
          
          <p className="text-base md:text-2xl text-flow-blue max-w-2xl mx-auto leading-tight font-black px-4 uppercase tracking-tighter opacity-90">
            {t.slide10_sub}
          </p>
        </div>

        {/* Optimized Info Grid */}
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6">
          {[
            { label: t.slide10_footer1, val: '24/7 Rails', col: 'text-flow-blue' },
            { label: t.slide10_footer2, val: 'DeFi Sync', col: 'text-flow-vibrant' },
            { label: t.slide10_footer3, val: 'Global Reach', col: 'text-flow-blue' }
          ].map((item, i) => (
            <div key={i} className="border-gradient-flow p-5 md:p-6 space-y-2 group hover:scale-105 transition-transform duration-500">
              <div className={`text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black ${item.col}`}>{item.label}</div>
              <div className="font-black text-sm md:text-lg text-white uppercase tracking-tighter">{item.val}</div>
            </div>
          ))}
        </div>

        {/* Refined Branding Footer */}
        <div className="pt-12 md:pt-16 flex flex-col items-center w-full">
          <div className="text-[9px] md:text-base font-black tracking-[0.6em] text-flow-blue uppercase mb-6 opacity-30">
            THE FUTURE OF GLOBAL LIQUIDITY
          </div>
          <div className="text-7xl md:text-9xl lg:text-[10rem] lowercase text-titanium leading-none tracking-tighter font-[900] opacity-80 select-none pointer-events-none transition-all duration-700">
            moonupp
          </div>
        </div>
      </div>
    </div>
  );
};
