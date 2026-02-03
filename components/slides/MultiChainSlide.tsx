
import React from 'react';
import { translations } from '../../translations';

export const MultiChainSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-20 text-center">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gradient leading-tight">{t.slide6_title}</h2>
        <p className="text-base md:text-2xl text-gradient-silver font-bold">{t.slide6_sub}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {[
          { name: t.slide6_c1, sub: t.slide6_c1_p, icon: '🏦', grad: 'text-gradient-blue' },
          { name: t.slide6_c2, sub: t.slide6_c2_p, icon: '📱', grad: 'text-gradient-vibrant' },
          { name: t.slide6_c3, sub: t.slide6_c3_p, icon: '💰', grad: 'text-gradient-silver' }
        ].map((c, i) => (
          <div key={i} className="glass-card p-10 md:p-14 flex flex-col items-center gap-6 border-white/20 hover:bg-blue-600/[0.05] transition-all group">
            <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">{c.icon}</div>
            <h3 className="text-2xl md:text-3xl font-black text-white">{c.name}</h3>
            <p className={`text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em] ${c.grad}`}>{c.sub}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-12 opacity-60">
         {['BINANCE PAY', 'CRYPTO.COM', 'WISE'].map((brand) => (
            <div key={brand} className="text-xs md:text-lg font-black tracking-widest text-gradient-silver">{brand}</div>
         ))}
      </div>
    </div>
  );
};
