
import React from 'react';
import { translations } from '../../translations';

export const SecurityComplianceSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto h-full justify-center px-4 space-y-6 md:space-y-24">
      <div className="text-center space-y-2 md:space-y-4">
        <h2 className="text-3xl md:text-8xl font-black tracking-tighter text-titanium uppercase leading-none">{t.slide7_title}</h2>
        <p className="text-sm md:text-3xl text-flow-blue font-bold tracking-tight">{t.slide7_sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
        {[
          { title: t.slide7_t1, desc: t.slide7_t1_p, icon: '📂' },
          { title: t.slide7_t2, desc: t.slide7_t2_p, icon: '📝' },
          { title: t.slide7_t3, desc: t.slide7_t3_p, icon: '📊' }
        ].map((item, i) => (
          <div key={i} className="border-gradient-flow p-5 md:p-12 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
            <div className="text-3xl md:text-6xl shrink-0">{item.icon}</div>
            <div className="text-left">
              <h3 className="text-base md:text-2xl font-black tracking-tighter text-flow-vibrant uppercase">{item.title}</h3>
              <p className="hidden md:block text-white/70 text-sm md:text-xl font-medium leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-gradient-flow p-5 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        <div className="flex items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="hidden md:flex p-4 glass-card rounded-2xl bg-blue-500/10">
             <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <span className="text-sm md:text-3xl font-black text-white tracking-tight">Global Disbursements In 50+ Currencies</span>
        </div>
        <button className="border-gradient-flow px-8 py-3 md:px-12 md:py-5 text-xs md:text-lg font-black text-white uppercase tracking-widest w-full md:w-auto">
          <span className="relative z-10">Learn More</span>
        </button>
      </div>
    </div>
  );
};
