
import React from 'react';

export const CTAIntroSlide: React.FC = () => {
  return (
    <div className="relative text-center max-w-4xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="space-y-10">
        <h2 className="text-6xl md:text-8xl font-black tracking-tight text-gradient">
          The New Standard<br />
          for Global Trade.
        </h2>
        
        <p className="text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock your US virtual account today and bridge the gap between USD and the decentralized future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <button className="px-12 py-6 rounded-full bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)]">
            Open Account Now
          </button>
          <button className="px-12 py-6 rounded-full glass border border-white/20 font-bold text-xl hover:bg-white/10 transition-all">
            Talk to Sales
          </button>
        </div>

        <div className="pt-20 grid grid-cols-3 gap-8 border-t border-white/10">
          <div>
            <div className="text-sm uppercase tracking-widest text-white/30 mb-2">Support</div>
            <div className="font-semibold">24/7 Global Concierge</div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-white/30 mb-2">Network</div>
            <div className="font-semibold">20+ Blockchains</div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-white/30 mb-2">Onboarding</div>
            <div className="font-semibold">100+ Jurisdictions</div>
          </div>
        </div>
      </div>
    </div>
  );
};
