'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  Globe,
  Instagram,
  Mail,
  Github,
  Layers,
  Cpu,
  Layout,
  Laptop
} from 'lucide-react';

const TYPED_PHRASES = [
  'Criador de sites',
  'Desenvolvedor Front-end',
  'Interfaces modernas',
  'Experiências digitais',
];

const TECH_STACKS = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Supabase',
];

export const HeroSection: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentPhrase = TYPED_PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentPhrase) {
      typingSpeed = 2200;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPED_PHRASES.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMouseOffset({
      x: ((clientX - centerX) / centerX) * 12,
      y: ((clientY - centerY) / centerY) * 12,
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LADO ESQUERDO */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-block animate-float lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text text-xs sm:text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Disponível para novos projetos</span>
                </span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20" />
                <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Frontend
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20" />
                <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Developer
                </span>
              </span>
            </h1>

            {/* Typewriter text */}
            <div className="min-h-[50px] sm:min-h-[60px] flex items-center justify-center lg:justify-start pt-2">
              <h2 className="text-xl sm:text-3xl font-semibold text-gray-300 font-mono">
                <span>{displayText}</span>
                <span className="animate-pulse text-[#6366f1] font-bold">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Crio sites modernos, responsivos e interativos para profissionais e negócios que querem construir uma presença digital marcante.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
            {TECH_STACKS.map((tech, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            {/* Primary CTA */}
            <button
              onClick={() => scrollTo('portfolio')}
              className="group relative w-full sm:w-[170px] cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-60 blur-md group-hover:opacity-100 transition-all duration-700" />
              <div className="relative h-12 bg-[#030014] backdrop-blur-xl rounded-xl border border-white/10 leading-none overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/30 to-[#8644c5]/30" />
                <span className="relative flex items-center justify-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all duration-300">
                  <span>Ver projetos</span>
                  <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollTo('contato')}
              className="group relative w-full sm:w-[170px] cursor-pointer"
            >
              <div className="relative h-12 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/20 leading-none flex items-center justify-center transition-all duration-300">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  Entrar em contato
                </span>
              </div>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
            <a
              href="https://instagram.com/_jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110 text-gray-400 hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="mailto:pimentarp153@icloud.com"
              aria-label="Email"
              className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110 text-gray-400 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110 text-gray-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* LADO DIREITO: COMPOSIÇÃO 3D TECNOLÓGICA */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-md transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${-mouseOffset.y * 0.8}deg) rotateY(${mouseOffset.x * 0.8}deg)`,
            }}
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />

            {/* Main Window */}
            <div className="relative rounded-3xl p-6 sm:p-7 bg-[#0b0424]/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-purple-300">joaopedro.dev</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Code Graphic */}
              <div className="w-full h-48 rounded-2xl bg-[#030014] border border-white/10 p-4 font-mono text-xs text-zinc-300 space-y-2 overflow-hidden relative group">
                <div className="text-zinc-500 text-[11px]">&gt; developer.profile.ts</div>
                <div className="space-y-1 text-xs">
                  <p><span className="text-[#a855f7]">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-emerald-400">&apos;João Pedro&apos;</span>,</p>
                  <p className="pl-4">role: <span className="text-cyan-400">&apos;Frontend Developer&apos;</span>,</p>
                  <p className="pl-4">focus: <span className="text-amber-300">&apos;High-Performance Web&apos;</span>,</p>
                  <p className="pl-4">status: <span className="text-purple-300">&apos;Ready to Build&apos;</span></p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Status Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#030014]/90 border border-white/10 text-center">
                  <span className="text-[#a855f7] font-bold block text-sm">100%</span>
                  <span className="text-gray-400 text-[10px]">Mobile-First</span>
                </div>
                <div className="p-3 rounded-xl bg-[#030014]/90 border border-white/10 text-center">
                  <span className="text-cyan-400 font-bold block text-sm">Ultra</span>
                  <span className="text-gray-400 text-[10px]">Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
