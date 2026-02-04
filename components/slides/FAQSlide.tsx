
import React from 'react';
import { translations } from '../../translations';

export const FAQSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  
  // Removed 🇨🇳 (China) as requested
  const flags = ['🇺🇸', '🇪🇺', '🇳🇬', '🇧🇷', '🇮🇩', '🇵🇭', '🇲🇽', '🇻🇳', '🇹🇷', '🇿🇦', '🇰🇷', '🇸🇬'];

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto h-full justify-center px-4 space-y-6 md:space-y-12 text-center">
      <div className="space-y-3 md:space-y-6">
        <h2 className="text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter text-titanium uppercase leading-none">{t.slide9_title}</h2>
        <p className="text-sm md:text-2xl lg:text-3xl text-flow-blue font-bold">{t.slide9_sub}</p>
      </div>

      <div className="border-gradient-flow p-6 md:p-12 lg:p-20 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-16">
          {flags.map((flag, i) => (
            <div key={i} className="text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-125 transition-all cursor-default">
              {flag}
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-16 flex justify-center">
           <button className="px-8 py-3 md:px-12 md:py-5 rounded-full bg-blue-600 text-xs md:text-lg font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all shadow-xl">
             Show all 100+ nations
           </button>
        </div>
      </div>

      <p className="text-xs md:text-xl lg:text-2xl text-white font-semibold max-w-4xl mx-auto leading-relaxed opacity-70">
        {t.slide9_p}
      </p>
    </div>
  );
};
