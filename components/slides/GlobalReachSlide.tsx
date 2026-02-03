
import React from 'react';
import { translations } from '../../translations';

export const GlobalReachSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="text-center space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold tracking-tight text-gradient">{t.slide3_title}</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
          {t.slide3_p}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: t.slide3_s1, val: '100+' },
          { label: t.slide3_s2, val: '< 5min' },
          { label: t.slide3_s3, val: 'Global' },
          { label: t.slide3_s4, val: '99.9%' },
        ].map((stat, i) => (
          <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="text-5xl font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="relative h-48 glass rounded-[2rem] border border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="z-10 flex flex-wrap justify-center gap-x-12 gap-y-6 px-12">
          {['Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa'].map((region, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
