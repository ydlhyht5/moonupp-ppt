
import React from 'react';
import { translations } from '../../translations';

export const MissionSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-20">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-titanium leading-none uppercase">
          {t.slide3_title}
        </h2>
        <p className="text-lg md:text-3xl text-flow-blue font-bold tracking-tight">
          {t.slide3_sub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[
          { title: t.slide3_b1, desc: t.slide3_b1_p, icon: '🏷️' },
          { title: t.slide3_b2, desc: t.slide3_b2_p, icon: '🌍' },
          { title: t.slide3_b3, desc: t.slide3_b3_p, icon: '⚡' },
        ].map((item, i) => (
          <div key={i} className="border-gradient-flow p-10 flex flex-col items-center gap-6 group hover:scale-[1.02] transition-transform">
            <div className="text-6xl mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{item.icon}</div>
            <h3 className="text-2xl font-black text-flow-vibrant uppercase tracking-tight">{item.title}</h3>
            <p className="text-sm md:text-lg text-white/70 font-medium leading-tight">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-12 opacity-40 py-8">
         {['BINANCE', 'BYBIT', 'COINBASE', 'OKX'].map((partner) => (
            <div key={partner} className="text-2xl md:text-4xl font-black italic tracking-tighter text-titanium">{partner}</div>
         ))}
      </div>
    </div>
  );
};
