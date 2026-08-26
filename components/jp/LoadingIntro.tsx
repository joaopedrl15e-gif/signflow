'use client';

import React, { useState, useEffect } from 'react';

interface LoadingIntroProps {
  onComplete?: () => void;
}

export const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check sessionStorage to avoid annoying repeating intro in the same session if refreshed
    const hasSeenIntro = sessionStorage.getItem('jp_intro_seen');
    if (hasSeenIntro) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem('jp_intro_seen', 'true');
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 800);
        }, 400);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#030014] flex items-center justify-center transition-all duration-700 ${
        isFinished ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="relative text-center space-y-6 max-w-sm px-6">
        {/* Logo JP with glowing gradient */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 p-0.5 shadow-2xl shadow-purple-500/40 animate-in zoom-in duration-500">
          <div className="w-full h-full bg-[#030014] rounded-[14px] flex items-center justify-center font-mono font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-white via-purple-200 to-cyan-300">
            JP
          </div>
        </div>

        {/* Phrase & Percentage */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
            Criando experiências digitais
          </p>
          <div className="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            {progress}%
          </div>
        </div>

        {/* Gradient Progress Bar */}
        <div className="w-full h-1.5 bg-purple-950/40 rounded-full overflow-hidden border border-purple-500/20">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 transition-all duration-100 ease-out rounded-full shadow-lg shadow-purple-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
