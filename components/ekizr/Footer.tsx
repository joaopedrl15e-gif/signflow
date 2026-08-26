'use client';

import React from 'react';
import { ArrowUp, Instagram, Mail, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/15 bg-[#030014] py-12 px-4 sm:px-6 relative z-10 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Logo & Bio */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#030014] rounded-[4px] flex items-center justify-center font-mono font-bold text-[10px] text-white">
                JP
              </div>
            </div>
            <span className="font-bold text-white">João Pedro</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Front-End Developer</span>
          </div>
          <p className="text-[11px] text-zinc-500">
            Crafting digital experiences with Next.js, React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://instagram.com/_jaopimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@_jaopimentel</span>
          </a>

          <a
            href="mailto:pimentarp153@icloud.com"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>pimentarp153@icloud.com</span>
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-zinc-300 hover:text-white transition-all text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};
