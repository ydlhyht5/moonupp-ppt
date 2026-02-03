
import React from 'react';
import { translations } from '../../translations';

export const AuthorizationSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-20 items-center h-full justify-center px-4 w-full">
      <div className="space-y-6 md:space-y-10 w-full">
        <div className="glass-card p-4 inline-block rounded-2xl border border-blue-500/50 bg-blue-500/10">
          <svg className="w-10 h-10 md:w-14 md:h-14 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1.944A11.94 11.94 0 012.183 5c-.356 1.677-.03 4.616 1.215 6.812C4.673 13.937 7.61 15.843 10 18c2.39-2.157 5.327-4.063 6.602-6.188 1.245-2.196 1.571-5.135 1.215-6.812A11.94 11.94 0 0110 1.944zM10 10a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm-4 0a1 1 0 110-2h1a1 1 0 110 2H6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-black leading-tight tracking-tight text-white">
            {t.slide2_title}<br />
            <span className="text-gradient-blue">{t.slide2_sub}</span>
            </h2>
            <p className="text-sm md:text-2xl text-gradient-silver leading-relaxed font-medium">
            {t.slide2_p}
            </p>
        </div>
        <ul className="space-y-4 md:space-y-6">
          {[t.slide2_li1, t.slide2_li2, t.slide2_li3].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 md:gap-5 text-sm md:text-xl font-bold text-white/90">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full max-w-lg lg:max-w-none">
        <div className="glass-card aspect-video rounded-3xl border border-white/20 flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900/20 to-black/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-blue-500/20" />
          <div className="z-10 text-center space-y-6 md:space-y-10 w-full">
            <div className="text-4xl md:text-7xl font-black italic tracking-tighter text-gradient-silver">LEAD BANK</div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="text-xs md:text-lg font-black text-gradient-vibrant tracking-[0.4em] uppercase">Official Authorization</div>
          </div>
        </div>
      </div>
    </div>
  );
};
