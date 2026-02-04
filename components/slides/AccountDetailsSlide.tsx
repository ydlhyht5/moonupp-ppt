
import React from 'react';
import { translations } from '../../translations';

export const AccountDetailsSlide: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-24 items-center h-full justify-center px-4 w-full">
      <div className="space-y-4 md:space-y-12 w-full order-2 lg:order-1">
        <div className="space-y-2">
            <h2 className="text-2xl md:text-7xl font-black tracking-tighter text-titanium leading-tight uppercase">
            {t.slide4_title}
            </h2>
            <p className="text-sm md:text-2xl text-flow-blue font-bold max-w-xl">
            {t.slide4_sub}
            </p>
        </div>
        <div className="space-y-2 md:space-y-6">
           {[t.slide4_f1, t.slide4_f2, t.slide4_f3].map((f, i) => (
             <div key={i} className="flex items-center gap-3 md:gap-6 border-gradient-flow p-3 md:p-8 transition-all">
               <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 shadow-[0_0_12px_#0037ff]" />
               <span className="text-xs md:text-2xl font-black tracking-tight text-white uppercase">{f}</span>
             </div>
           ))}
        </div>
      </div>

      <div className="w-full max-w-xs md:max-w-xl lg:max-w-none order-1 lg:order-2">
        <div className="border-gradient-flow p-[1px] rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden scale-[0.9] md:scale-100">
          <div className="bg-[#050505] p-5 md:p-14 rounded-[23px] md:rounded-[31px] space-y-6 md:space-y-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-600/10 blur-[80px] -z-10" />
            
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="text-[8px] md:text-[12px] font-black tracking-[0.4em] text-flow-blue uppercase">Settlement Node</div>
                <div className="text-xl md:text-5xl font-black italic tracking-tighter text-white">LEAD BANK</div>
              </div>
              <div className="text-right">
                <div className="text-[8px] md:text-[12px] font-black tracking-[0.4em] text-white/40 uppercase">Network</div>
                <div className="text-[10px] md:text-lg font-black text-blue-400 uppercase tracking-tight">FedWire / ACH</div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-12">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-1">
                  <div className="text-[8px] md:text-[13px] font-black text-flow-vibrant uppercase tracking-[0.1em]">Routing (ABA)</div>
                  <div className="text-sm md:text-3xl font-mono text-white tracking-widest font-bold">101019644</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[8px] md:text-[13px] font-black text-flow-vibrant uppercase tracking-[0.1em]">Type</div>
                  <div className="text-sm md:text-3xl font-black text-blue-400 tracking-tight">CHECKING</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[8px] md:text-[13px] font-black text-flow-vibrant uppercase tracking-[0.1em]">Account Number</div>
                <div className="text-lg md:text-5xl font-mono text-white tracking-[0.1em] font-black">2169 **** *777</div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-[8px] md:text-[13px] font-black text-green-400 uppercase tracking-[0.2em]">Verified</span>
              </div>
              <div className="text-[10px] md:text-xl font-black text-titanium lowercase">moonupp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
