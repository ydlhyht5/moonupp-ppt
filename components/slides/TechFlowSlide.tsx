
import React from 'react';
import { translations } from '../../translations';

export const TechFlowSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto h-full justify-center px-4 space-y-10 md:space-y-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-7xl font-black tracking-tight text-gradient uppercase">{t.slide5_title}</h2>
        <p className="text-base md:text-2xl text-gradient-silver font-bold tracking-wide">{t.slide5_sub}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2" />
        
        {/* Step 1 */}
        <div className="z-10 glass-card p-8 md:p-12 w-full lg:w-72 text-center border-white/20 bg-white/[0.02]">
          <div className="w-12 h-12 md:w-16 md:h-16 glass-card flex items-center justify-center mx-auto mb-6 md:mb-10 bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white mb-2">{t.slide5_step1}</h3>
          <p className="text-[11px] md:text-[13px] text-gradient-blue font-black uppercase tracking-widest">{t.slide5_step1_p}</p>
        </div>

        {/* Step 2 */}
        <div className="z-20 glass-card p-10 md:p-16 w-full lg:w-96 text-center border-blue-500/50 bg-black/60 lg:scale-110 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
          <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-8 md:mb-12">
             <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full animate-pulse" />
             <div className="relative w-full h-full glass-card flex items-center justify-center bg-blue-500/10">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-400 animate-[spin_8s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
             </div>
          </div>
          <h3 className="text-2xl md:text-4xl font-black mb-3 uppercase text-white tracking-tighter">{t.slide5_step2}</h3>
          <p className="text-[13px] md:text-lg text-gradient-vibrant font-black mb-2 uppercase tracking-tight">{t.slide5_step2_p}</p>
        </div>

        {/* Step 3 */}
        <div className="z-10 glass-card p-8 md:p-12 w-full lg:w-72 text-center border-white/20 bg-white/[0.02]">
          <div className="w-12 h-12 md:w-16 md:h-16 glass-card flex items-center justify-center mx-auto mb-6 md:mb-10 bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white mb-2">{t.slide5_step3}</h3>
          <p className="text-[11px] md:text-[13px] text-gradient-silver font-black uppercase tracking-widest">{t.slide5_step3_p}</p>
        </div>
      </div>
    </div>
  );
};
