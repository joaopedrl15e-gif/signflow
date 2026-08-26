'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Mail, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'beneficios', label: 'Por Que Ter Site' },
  { id: 'portfolio', label: 'Projetos' },
  { id: 'habilidades', label: 'Stack & Habilidades' },
  { id: 'contato', label: 'Contato' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className={`rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06040e]/85 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-950/40'
            : 'bg-[#06040e]/40 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('inicio')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#06040e] rounded-[10px] flex items-center justify-center font-mono font-black text-xs text-white">
              JP
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
              João Pedro
            </span>
            <span className="text-[10px] text-zinc-400 font-mono -mt-0.5">Frontend Developer</span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0f0927]/60 px-3.5 py-1.5 rounded-full border border-purple-500/20 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/40 to-indigo-600/40 border border-purple-400/40 shadow-sm z-0 animate-in fade-in zoom-in-95 duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Social & Contact CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://instagram.com/_jaopimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white transition-all hover:scale-105"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="mailto:pimentarp153@icloud.com"
            className="w-8 h-8 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-cyan-300 hover:text-white transition-all hover:scale-105"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection('contato')}
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Falar Comigo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-zinc-300 hover:text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#06040e]/95 backdrop-blur-2xl p-6 pt-24 animate-in fade-in duration-200 flex flex-col justify-between">
          <div className="flex flex-col space-y-3 text-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`p-3.5 rounded-2xl text-sm font-bold transition-all ${
                  activeSection === link.id
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-purple-500/20 flex flex-col items-center gap-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl"
            >
              Entrar em contato
            </button>

            <div className="flex items-center gap-4 text-zinc-400 pt-2">
              <a
                href="https://instagram.com/_jaopimentel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:pimentarp153@icloud.com"
                className="hover:text-cyan-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
