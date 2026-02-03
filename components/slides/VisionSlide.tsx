
import React from 'react';
import { translations } from '../../translations';

export const VisionSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto h-full justify-center px-4 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[180px] rounded-full -z-10" />
      
      <div className="flex flex-col items-center space-y-12 md:space-y-20 py-8">
        <div className="space-y-6 w-full">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-titanium leading-none uppercase">
            {t.slide10_title}
          </h2>
          
          <p className="text-lg md:text-3xl text-flow-blue max-w-3xl mx-auto leading-tight font-black px-4 uppercase tracking-tighter opacity-90">
            {t.slide10_sub}
          </p>
        </div>

        {/* Improved Info Grid */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {[
            { label: t.slide10_footer1, val: '24/7 Rails', col: 'text-flow-blue' },
            { label: t.slide10_footer2, val: 'DeFi Sync', col: 'text-flow-vibrant' },
            { label: t.slide10_footer3, val: 'Global Reach', col: 'text-flow-blue' }
          ].map((item, i) => (
            <div key={i} className="border-gradient-flow p-6 md:p-8 space-y-2 group hover:scale-105 transition-transform duration-500">
              <div className={`text-[10px] md:text-xs uppercase tracking-[0.6em] font-black ${item.col}`}>{item.label}</div>
              <div className="font-black text-xl md:text-2xl text-white uppercase tracking-tighter">{item.val}</div>
            </div>
          ))}
        </div>

        {/* Refined Branding Footer */}
        <div className="pt-16 md:pt-24 flex flex-col items-center w-full">
          <div className="text-[10px] md:text-lg font-black tracking-[0.8em] text-flow-blue uppercase mb-10 opacity-40">
            THE FUTURE OF GLOBAL LIQUIDITY
          </div>
          <div className="text-[18vw] sm:text-7xl md:text-9xl lg:text-[12rem] lowercase text-titanium leading-none tracking-tighter font-[900] opacity-80 select-none pointer-events-none">
            moonupp
          </div>
        </div>
      </div>
    </div>
  );
};
