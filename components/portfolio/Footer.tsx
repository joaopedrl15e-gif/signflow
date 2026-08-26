'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Sparkles, Instagram, Mail, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#02050e] py-12 px-4 sm:px-6 relative z-10 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Logo & Credits */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#030712] rounded-[6px] flex items-center justify-center font-mono font-black text-[11px] text-cyan-400">
                JP
              </div>
            </div>
            <span className="font-bold text-slate-200">João Pedro</span>
            <span className="text-slate-600">•</span>
            <span className="text-[11px] text-slate-400">Desenvolvedor & Criador de Sites</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Criado por João Pedro — Desenvolvedor e criador de experiências digitais.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-slate-400 font-medium">
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

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-800 hover:border-cyan-500/30 text-xs font-bold"
        >
          <span>Voltar ao início</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};
