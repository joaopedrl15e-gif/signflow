'use client';

import React from 'react';
import { ArrowUp, Instagram, Mail, Github } from 'lucide-react';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'portfolio', label: 'Projetos' },
  { id: 'habilidades', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
];

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/15 bg-[#06040e] py-12 px-4 sm:px-6 relative z-10 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Bio */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#06040e] rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-white">
                  JP
                </div>
              </div>
              <span className="font-bold text-white text-sm">João Pedro</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Frontend Developer</span>
            </div>
            <p className="text-[11px] text-zinc-500 font-normal">
              Criando experiências digitais modernas, rápidas e responsivas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/_jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-zinc-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:pimentarp153@icloud.com"
              className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-zinc-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-zinc-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-purple-500/10 text-center text-[11px] text-zinc-500 font-mono">
          © 2026 João Pedro. Criado com criatividade e tecnologia.
        </div>
      </div>
    </footer>
  );
};
