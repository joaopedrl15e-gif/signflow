'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Github, Sparkles, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 220;

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className={`rounded-2xl px-5 sm:px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'bg-[#030014]/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-950/40'
              : 'bg-transparent border border-white/[0.04]'
          }`}
        >
          {/* Logo JP */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#030014] rounded-[10px] flex items-center justify-center font-bold text-xs text-white">
                JP
              </div>
            </div>
            <span className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
              João Pedro
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full shadow-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium text-xs shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <span>Falar Comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-2xl p-6 pt-24 animate-in fade-in duration-200 flex flex-col justify-between">
          <div className="flex flex-col space-y-3 text-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`p-3.5 rounded-2xl text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium text-sm shadow-xl"
            >
              Entrar em contato
            </button>

            <div className="flex items-center gap-4 text-gray-400 pt-2">
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
