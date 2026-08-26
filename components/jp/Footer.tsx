'use client';

import React from 'react';
import { ArrowUp, Instagram, Mail, Github } from 'lucide-react';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'habilidades', label: 'Habilidades' },
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
    <footer className="border-t border-white/10 bg-[#030014] py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Bio */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#030014] rounded-[10px] flex items-center justify-center font-bold text-xs text-white">
                  JP
                </div>
              </div>
              <span className="font-bold text-white text-base">João Pedro</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Frontend Developer</span>
            </div>
            <p className="text-xs text-gray-500 font-normal">
              Criando experiências digitais modernas, rápidas e responsivas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
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
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:pimentarp153@icloud.com"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
            >
              <span>Topo</span>
              <ArrowUp className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          © 2026 João Pedro. Criado com criatividade e tecnologia.
        </div>
      </div>
    </footer>
  );
};
