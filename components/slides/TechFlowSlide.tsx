
import React from 'react';
import { translations } from '../../translations';

export const TechFlowSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-titanium uppercase leading-none">{t.slide5_title}</h2>
        <p className="text-lg md:text-3xl text-flow-blue font-bold tracking-wide">{t.slide5_sub}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2" />
        
        {/* Step 1 */}
        <div className="border-gradient-flow z-10 p-10 w-full lg:w-80 text-center">
          <div className="w-16 h-16 glass-card flex items-center justify-center mx-auto mb-8 bg-blue-500/10 border-blue-500/20">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-white mb-2">{t.slide5_step1}</h3>
          <p className="text-[14px] text-flow-blue font-black uppercase tracking-widest">{t.slide5_step1_p}</p>
        </div>

        {/* Step 2 */}
        <div className="border-gradient-flow z-20 p-14 w-full lg:w-[440px] text-center lg:scale-110 shadow-2xl">
          <div className="relative w-24 h-24 mx-auto mb-8">
             <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
             <div className="relative w-full h-full glass-card flex items-center justify-center bg-blue-500/10 border-blue-500/30">
                <svg className="w-12 h-12 text-blue-400 animate-[spin_8s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
             </div>
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter leading-none">{t.slide5_step2}</h3>
          <p className="text-xl md:text-2xl text-flow-vibrant font-black uppercase tracking-tight">{t.slide5_step2_p}</p>
        </div>

        {/* Step 3 */}
        <div className="border-gradient-flow z-10 p-10 w-full lg:w-80 text-center">
          <div className="w-16 h-16 glass-card flex items-center justify-center mx-auto mb-8 bg-purple-500/10 border-purple-500/20">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-white mb-2">{t.slide5_step3}</h3>
          <p className="text-[14px] text-flow-blue font-black uppercase tracking-widest">{t.slide5_step3_p}</p>
        </div>
      </div>
    </div>
  );
};
