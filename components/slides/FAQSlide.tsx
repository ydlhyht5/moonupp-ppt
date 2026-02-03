
import React from 'react';
import { translations } from '../../translations';

export const FAQSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  
  // Removed 🇬🇧 from the flags array
  const flags = ['🇺🇸', '🇪🇺', '🇨🇳', '🇳🇬', '🇧🇷', '🇮🇩', '🇵🇭', '🇲🇽', '🇻🇳', '🇹🇷', '🇿🇦', '🇰🇷'];

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-12 md:space-y-24 text-center">
      <div className="space-y-6">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gradient uppercase leading-tight">{t.slide9_title}</h2>
        <p className="text-lg md:text-3xl text-gradient-silver font-bold">{t.slide9_sub}</p>
      </div>

      <div className="glass-card p-12 md:p-20 border-white/20 relative overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent shadow-2xl">
        <div className="absolute inset-0 bg-blue-500/[0.03] -z-10" />
        <div className="grid grid-cols-4 md:grid-cols-6 gap-10 md:gap-16">
          {flags.map((flag, i) => (
            <div key={i} className="text-5xl md:text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-125 transition-all cursor-default">
              {flag}
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
           <button className="px-12 py-5 rounded-full bg-blue-600 text-sm md:text-lg font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all shadow-xl">
             Show all 100+ nations
           </button>
        </div>
      </div>

      <p className="text-sm md:text-2xl text-white font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-md">
        {t.slide9_p}
      </p>
    </div>
  );
};
