
import React from 'react';
import { translations } from '../../translations';

export const MissionSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-10 md:space-y-14">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gradient leading-tight">
          {t.slide3_title}
        </h2>
        <p className="text-base md:text-2xl text-gradient-silver font-bold">
          {t.slide3_sub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {[
          { title: t.slide3_b1, desc: t.slide3_b1_p, icon: '🏷️', grad: 'text-gradient-blue' },
          { title: t.slide3_b2, desc: t.slide3_b2_p, icon: '🌍', grad: 'text-gradient-vibrant' },
          { title: t.slide3_b3, desc: t.slide3_b3_p, icon: '⚡', grad: 'text-gradient-silver' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 flex flex-col items-center gap-4 border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/5">
            <div className="text-5xl mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{item.icon}</div>
            <h3 className={`text-xl font-black ${item.grad} uppercase tracking-tight`}>{item.title}</h3>
            <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-8 opacity-60 overflow-hidden py-6">
         {['BINANCE', 'BYBIT', 'COINBASE', 'OKX'].map((partner) => (
            <div key={partner} className="text-xl md:text-3xl font-black italic tracking-tighter text-gradient-silver">{partner}</div>
         ))}
      </div>
    </div>
  );
};
