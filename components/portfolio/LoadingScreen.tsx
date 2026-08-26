'use client';

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('jp_portfolio_loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              sessionStorage.setItem('jp_portfolio_loaded', 'true');
              onComplete();
            }, 450);
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + step);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-zinc-100 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative z-10 flex flex-col items-center text-center space-y-5 max-w-xs px-4">
        {/* Minimalist Logo Mark */}
        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-sm tracking-tight text-zinc-100 shadow-xl">
          JP
        </div>

        {/* Status Line */}
        <div className="space-y-1">
          <p className="text-xs font-medium tracking-tight text-zinc-200">
            João Pedro • Portfolio
          </p>
          <p className="text-[11px] font-mono text-zinc-500">
            Carregando interface...
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-44 space-y-1.5">
          <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-200 transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-end text-[10px] font-mono text-zinc-500">
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
