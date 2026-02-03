
import React from 'react';

export const Web3IntegrationSlide: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Ethereum', color: 'bg-slate-500' },
            { name: 'Solana', color: 'bg-purple-500' },
            { name: 'Arbitrum', color: 'bg-blue-600' },
            { name: 'Polygon', color: 'bg-purple-600' },
            { name: 'Base', color: 'bg-blue-400' },
            { name: 'Optimism', color: 'bg-red-500' },
          ].map((chain, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/5 transition-all">
              <div className={`w-3 h-3 rounded-full ${chain.color} shadow-[0_0_10px_currentColor]`} />
              <span className="font-medium tracking-tight">{chain.name}</span>
            </div>
          ))}
        </div>
        {/* Glowing background behind chain list */}
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10" />
      </div>

      <div className="space-y-8 order-1 lg:order-2">
        <h2 className="text-5xl font-bold leading-tight">
          Universal<br />
          <span className="text-blue-500">Liquidity Distribution.</span>
        </h2>
        <p className="text-xl text-slate-400 leading-relaxed font-light">
          Once your USD is converted to USDC, the possibilities are infinite. 
          Withdraw directly to your personal hardware wallet, deploy to DeFi protocols, 
          or pay global contractors across 20+ supported chains.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4 p-4 glass rounded-2xl border border-white/5">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm">Instant Settlement</h4>
              <p className="text-xs text-white/40">No more 3-5 day international wire delays.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 glass rounded-2xl border border-white/5">
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm">Programmable Compliance</h4>
              <p className="text-xs text-white/40">Automatic AML monitoring built into the payout layer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
