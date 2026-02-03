
import React from 'react';
import { translations } from '../../translations';

export const AccountDetailsSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-24 items-center h-full justify-center px-4 w-full">
      <div className="space-y-6 md:space-y-12 w-full order-2 lg:order-1">
        <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gradient leading-tight">
            {t.slide4_title}
            </h2>
            <p className="text-base md:text-2xl text-gradient-silver font-bold max-w-xl">
            {t.slide4_sub}
            </p>
        </div>
        <div className="space-y-4 md:space-y-6">
           {[t.slide4_f1, t.slide4_f2, t.slide4_f3].map((f, i) => (
             <div key={i} className="flex items-center gap-4 md:gap-6 glass-card p-5 md:p-8 border-white/10 group hover:border-blue-500/50 transition-all bg-white/[0.03]">
               <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_#0037ff]" />
               <span className="text-base md:text-2xl font-black tracking-tight text-white">{f}</span>
             </div>
           ))}
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-none order-1 lg:order-2">
        <div className="border-gradient-flow p-[1px] rounded-[32px] shadow-2xl overflow-hidden">
          <div className="bg-[#050505] p-8 md:p-14 rounded-[31px] space-y-10 md:space-y-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-10" />
            
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="text-[12px] font-black tracking-[0.4em] text-gradient-blue uppercase">Settlement Node</div>
                <div className="text-3xl md:text-5xl font-black italic tracking-tighter text-white">LEAD BANK</div>
              </div>
              <div className="text-right">
                <div className="text-[12px] font-black tracking-[0.4em] text-gradient-silver uppercase">Network</div>
                <div className="text-lg font-black text-blue-400 uppercase tracking-tight">FedWire / ACH</div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-[11px] md:text-[13px] font-black text-gradient-vibrant uppercase tracking-[0.2em]">Routing Number (ABA)</div>
                  <div className="text-xl md:text-3xl font-mono text-white tracking-widest font-bold">101019644</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] md:text-[13px] font-black text-gradient-vibrant uppercase tracking-[0.2em]">Account Type</div>
                  <div className="text-xl md:text-3xl font-black text-blue-400 tracking-tight">CHECKING</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] md:text-[13px] font-black text-gradient-vibrant uppercase tracking-[0.2em]">Account Number</div>
                <div className="text-3xl md:text-5xl font-mono text-white tracking-[0.15em] font-black">2169 **** **** *777</div>
              </div>

              <div className="space-y-2 pt-6 border-t border-white/10">
                <div className="text-[11px] md:text-[13px] font-black text-gradient-vibrant uppercase tracking-[0.2em]">Beneficiary Name</div>
                <div className="text-lg md:text-2xl font-black text-white/90 uppercase tracking-tight">MOONUPP LLC</div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-[11px] md:text-[13px] font-black text-green-400 uppercase tracking-[0.3em]">Verified Account</span>
              </div>
              <div className="logo-wordmark text-lg text-gradient-silver lowercase">moonupp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
