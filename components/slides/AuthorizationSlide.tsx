
import React from 'react';
import { translations } from '../../translations';

export const AuthorizationSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-24 items-center h-full justify-center px-4 w-full">
      <div className="space-y-4 md:space-y-8 w-full">
        <div className="border-gradient-flow p-3 md:p-4 inline-block">
          <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1.944A11.94 11.94 0 012.183 5c-.356 1.677-.03 4.616 1.215 6.812C4.673 13.937 7.61 15.843 10 18c2.39-2.157 5.327-4.063 6.602-6.188 1.245-2.196 1.571-5.135 1.215-6.812A11.94 11.94 0 0110 1.944zM10 10a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm-4 0a1 1 0 110-2h1a1 1 0 110 2H6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="space-y-2 md:space-y-4">
            <h2 className="text-3xl md:text-7xl font-black leading-none tracking-tighter text-titanium uppercase">
            {t.slide2_title}
            </h2>
            <p className="text-lg md:text-3xl text-flow-blue font-black uppercase tracking-tight">
            {t.slide2_sub}
            </p>
        </div>
        <ul className="space-y-2 md:space-y-4">
          {[t.slide2_li1, t.slide2_li2, t.slide2_li3].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm md:text-xl font-bold text-white/70">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-xs md:max-w-lg lg:max-w-none">
        <div className="border-gradient-flow aspect-video flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden shadow-2xl">
          <div className="z-10 text-center space-y-4 md:space-y-8 w-full">
            <div className="text-3xl md:text-8xl font-black italic tracking-tighter text-titanium">LEAD BANK</div>
            <div className="h-[1px] md:h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="text-[10px] md:text-xl font-black text-flow-vibrant tracking-[0.2em] md:tracking-[0.4em] uppercase">Official Authorization</div>
          </div>
        </div>
      </div>
    </div>
  );
};
