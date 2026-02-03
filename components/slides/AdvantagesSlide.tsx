
import React from 'react';
import { translations } from '../../translations';

export const AdvantagesSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="w-full max-w-6xl mx-auto py-10 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-5xl font-black tracking-tight uppercase text-gradient">{t.slide5_title}</h2>
        <p className="text-lg text-white/40 font-medium">{t.slide5_sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          // Corrected to use existing translation keys from Slide 5 (The Protocol)
          { title: t.slide5_step1, desc: t.slide5_step1_p, icon: '⚡' },
          { title: t.slide5_step3, desc: t.slide5_step3_p, icon: '🌐' },
          { title: t.slide5_step2, desc: t.slide5_step2_p, icon: '🛡️' }
        ].map((feature, i) => (
          <div key={i} className="glass-card p-10 flex flex-col gap-8 group">
            <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed font-medium text-sm">{feature.desc}</p>
            </div>
            <div className="mt-auto h-[1px] w-8 bg-blue-600 group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>

      <div className="glass-card p-8 bg-gradient-to-r from-blue-500/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
          </div>
          <span className="text-sm font-black tracking-widest uppercase text-white/80">moonupp clearing infrastructure v1.4</span>
        </div>
        <div className="flex gap-8 opacity-30">
          {['SOC2 Ready', 'FINCEN REG', 'LEAD BANK'].map((tag) => (
            <span key={tag} className="text-[9px] font-black uppercase tracking-[0.4em]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
