'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if user already saw the loading screen in this session
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
            }, 600);
          }, 300);
          return 100;
        }
        // Smooth random stepping
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute w-80 h-80 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-xs px-4">
        {/* Minimalist Logo Badge */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-2xl shadow-cyan-500/20 animate-pulse">
          <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center font-mono font-black text-xl tracking-tighter text-cyan-400">
            JP
          </div>
        </div>

        {/* Phrase */}
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-wide text-slate-200 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>Criando experiências digitais.</span>
          </p>
          <p className="text-[11px] font-mono text-slate-500">João Pedro • Portfolio</p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full space-y-2">
          <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Carregando interface</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
