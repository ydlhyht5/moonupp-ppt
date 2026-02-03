
import React from 'react';
import { translations } from '../../translations';

export const SecurityComplianceSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-7xl font-black tracking-tight text-gradient uppercase">{t.slide7_title}</h2>
        <p className="text-base md:text-2xl text-gradient-silver font-bold">{t.slide7_sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: t.slide7_t1, desc: t.slide7_t1_p, icon: '📂', grad: 'text-gradient-blue' },
          { title: t.slide7_t2, desc: t.slide7_t2_p, icon: '📝', grad: 'text-gradient-vibrant' },
          { title: t.slide7_t3, desc: t.slide7_t3_p, icon: '📊', grad: 'text-gradient-silver' }
        ].map((item, i) => (
          <div key={i} className="glass-card p-10 md:p-12 flex flex-col gap-6 border-white/20 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-blue-500/30 transition-all">
            <div className="text-5xl">{item.icon}</div>
            <h3 className={`text-2xl font-black tracking-tight ${item.grad} uppercase`}>{item.title}</h3>
            <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-10 border-blue-500/30 bg-blue-500/[0.05]">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-blue-500/20 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)]">
             <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <span className="text-lg md:text-2xl font-black text-white">Support Batch Disbursements in 50+ Currencies</span>
        </div>
        <button className="px-10 py-4 rounded-full bg-white text-black text-sm md:text-lg font-black hover:bg-blue-50 transition-all shadow-xl uppercase tracking-widest">Learn More</button>
      </div>
    </div>
  );
};
