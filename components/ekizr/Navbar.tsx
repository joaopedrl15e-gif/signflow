'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Github, Sparkles, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Portfolio' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'guestbook', label: 'Guestbook' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className={`rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030014]/85 backdrop-blur-xl border border-purple-500/25 shadow-2xl shadow-purple-950/60'
            : 'bg-[#030014]/40 backdrop-blur-md border border-white/[0.08]'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-purple-500/40 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#030014] rounded-[10px] flex items-center justify-center font-mono font-black text-xs text-white">
              JP
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
              João Pedro
            </span>
            <span className="text-[10px] text-zinc-400 font-mono -mt-0.5">Portfólio</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0b0424]/70 px-3 py-1.5 rounded-full border border-purple-500/25 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md shadow-purple-500/30 z-0 animate-in fade-in zoom-in-95 duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Socials & Contact CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
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
            onClick={() => scrollTo('contact')}
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-2xl p-6 pt-24 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`p-3 rounded-xl text-sm font-bold transition-all ${
                  activeSection === item.id
                    ? 'bg-purple-600/40 text-purple-200 border border-purple-500/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-purple-500/20 flex justify-center gap-3">
              <a
                href="https://instagram.com/_jaopimentel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:pimentarp153@icloud.com"
                className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-cyan-300"
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
