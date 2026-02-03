
import React from 'react';
import { translations } from '../../translations';

export const MultiChainSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-24 text-center">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-titanium leading-none uppercase">{t.slide6_title}</h2>
        <p className="text-lg md:text-3xl text-flow-blue font-bold tracking-tight">{t.slide6_sub}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: t.slide6_c1, sub: t.slide6_c1_p, icon: '🏦' },
          { name: t.slide6_c2, sub: t.slide6_c2_p, icon: '📱' },
          { name: t.slide6_c3, sub: t.slide6_c3_p, icon: '💰' }
        ].map((c, i) => (
          <div key={i} className="border-gradient-flow p-12 flex flex-col items-center gap-6 group">
            <div className="text-7xl mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">{c.icon}</div>
            <h3 className="text-3xl font-black text-white uppercase">{c.name}</h3>
            <p className="text-[16px] font-black uppercase tracking-widest text-flow-vibrant">{c.sub}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-16 opacity-30 mt-8">
         {['BINANCE PAY', 'CRYPTO.COM', 'WISE'].map((brand) => (
            <div key={brand} className="text-sm md:text-2xl font-black tracking-[0.2em] text-titanium italic">{brand}</div>
         ))}
      </div>
    </div>
  );
};
