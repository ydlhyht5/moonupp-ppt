
import React from 'react';
import { translations } from '../../translations';

export const MissionSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto h-full justify-center px-4 space-y-6 md:space-y-20">
      <div className="space-y-2 md:space-y-4">
        <h2 className="text-3xl md:text-8xl font-black tracking-tighter text-titanium leading-none uppercase">
          {t.slide3_title}
        </h2>
        <p className="text-base md:text-3xl text-flow-blue font-bold tracking-tight">
          {t.slide3_sub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
        {[
          { title: t.slide3_b1, desc: t.slide3_b1_p, icon: '🏷️' },
          { title: t.slide3_b2, desc: t.slide3_b2_p, icon: '🌍' },
          { title: t.slide3_b3, desc: t.slide3_b3_p, icon: '⚡' },
        ].map((item, i) => (
          <div key={i} className="border-gradient-flow p-4 md:p-10 flex flex-row md:flex-col items-center gap-4 md:gap-6 group">
            <div className="text-3xl md:text-6xl drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0">{item.icon}</div>
            <div className="text-left md:text-center">
              <h3 className="text-lg md:text-2xl font-black text-flow-vibrant uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs md:text-lg text-white/70 font-medium leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-6 md:gap-12 opacity-40 py-4 md:py-8 overflow-hidden">
         {['BINANCE', 'BYBIT', 'OKX'].map((partner) => (
            <div key={partner} className="text-lg md:text-4xl font-black italic tracking-tighter text-titanium">{partner}</div>
         ))}
      </div>
    </div>
  );
};
