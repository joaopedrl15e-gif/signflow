'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Disc } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleSound}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0b0424]/90 border border-purple-500/30 text-purple-300 hover:text-white shadow-xl shadow-purple-950/50 backdrop-blur-xl transition-all hover:scale-105 group"
      >
        <div className="relative flex items-center justify-center">
          <Disc className={`w-4 h-4 text-purple-400 ${isPlaying ? 'animate-spin' : ''}`} />
          {isPlaying && (
            <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          )}
        </div>

        <span className="text-[11px] font-mono font-medium">
          {isPlaying ? 'Ambience: ON' : 'Ambience: OFF'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
        )}
      </button>
    </div>
  );
};
