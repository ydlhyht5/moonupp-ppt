
import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* Deep Liquid Gradients */}
      <div 
        className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full opacity-20 animate-pulse"
        style={{ background: 'radial-gradient(circle, #0037ff 0%, transparent 70%)', filter: 'blur(100px)', animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-10 animate-pulse"
        style={{ background: 'radial-gradient(circle, #9d00ff 0%, transparent 70%)', filter: 'blur(100px)', animationDuration: '12s' }}
      />

      {/* Summer.fi Pulse Paths */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25]" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <path 
          className="flow-path" 
          d="M-100,200 C300,50 600,400 1500,100" 
          stroke="url(#pulseGrad)" 
          strokeWidth="2"
        />
        <path 
          className="flow-path" 
          style={{ animationDelay: '-10s', animationDuration: '25s' }}
          d="M-100,700 C400,900 800,500 1600,800" 
          stroke="url(#pulseGrad)" 
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#0037ff" />
            <stop offset="70%" stopColor="#9d00ff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
