'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  Globe,
  Instagram,
  Mail,
  Github,
  Layers,
  Cpu,
  Layout,
  ExternalLink,
  Laptop
} from 'lucide-react';

const TYPED_PHRASES = [
  'Criador de sites',
  'Desenvolvedor Front-end',
  'Interfaces modernas',
  'Experiências digitais',
];

const TECH_BADGES = [
  { name: 'React', icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" /> },
  { name: 'Next.js', icon: <Globe className="w-3.5 h-3.5 text-white" /> },
  { name: 'TypeScript', icon: <Cpu className="w-3.5 h-3.5 text-blue-400" /> },
  { name: 'JavaScript', icon: <Terminal className="w-3.5 h-3.5 text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <Layout className="w-3.5 h-3.5 text-cyan-300" /> },
  { name: 'Supabase', icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
];

export const HeroSection: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = TYPED_PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentPhrase) {
      typingSpeed = 2200; // Pause when word is finished
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

  // Subtle 3D Parallax on Right Illustration
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMouseOffset({
      x: ((clientX - centerX) / centerX) * 15,
      y: ((clientY - centerY) / centerY) * 15,
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LADO ESQUERDO */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Selo: Disponível para novos projetos */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0424]/80 border border-purple-500/30 text-xs font-mono shadow-lg shadow-purple-950/40 animate-in fade-in zoom-in duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-300 font-medium">Disponível para novos projetos</span>
          </div>

          {/* Título Principal */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-white">Frontend </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            {/* Máquina de escrever */}
            <div className="min-h-[55px] sm:min-h-[70px] flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl sm:text-4xl font-bold text-zinc-300 font-mono">
                <span>{displayText}</span>
                <span className="animate-pulse text-cyan-400 font-bold">|</span>
              </h2>
            </div>
          </div>

          {/* Descrição Oficial */}
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Crio sites modernos, responsivos e interativos para profissionais e negócios que querem construir uma presença digital marcante.
          </p>

          {/* Badges das Tecnologias */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {TECH_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090426]/70 border border-purple-500/20 text-xs font-mono text-zinc-200 hover:border-cyan-400/50 hover:bg-[#120938] transition-all hover:scale-105 shadow-sm"
              >
                {badge.icon}
                <span>{badge.name}</span>
              </div>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
            <button
              onClick={() => scrollTo('portfolio')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver projetos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contato')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-transparent hover:bg-purple-950/30 text-zinc-200 font-semibold text-xs border border-purple-500/40 hover:border-cyan-400/60 transition-all hover:scale-105 active:scale-95 shadow-md shadow-purple-950/30 cursor-pointer"
            >
              Entrar em contato
            </button>
          </div>

          {/* Ícones Sociais (Instagram, Email, GitHub) */}
          <div className="pt-4 border-t border-purple-500/15 flex items-center justify-center lg:justify-start gap-3">
            <a
              href="https://instagram.com/_jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:pimentarp153@icloud.com"
              className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-cyan-300 hover:text-white transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-blue-300 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* LADO DIREITO: COMPOSIÇÃO TECNOLÓGICA EM 3D */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-sm transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${-mouseOffset.y * 0.8}deg) rotateY(${mouseOffset.x * 0.8}deg)`,
            }}
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-35 animate-pulse" />

            {/* Main Floating Glass Window */}
            <div className="relative rounded-3xl p-6 bg-[#080424]/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl space-y-5">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-purple-300">joaopedro.dev</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Code Interface Graphic */}
              <div className="w-full h-44 rounded-2xl bg-[#030014] border border-purple-500/20 p-4 font-mono text-xs text-zinc-300 space-y-2 overflow-hidden relative group">
                <div className="text-zinc-500 text-[10px]">&gt; developer.config.ts</div>
                <div className="space-y-1 text-[11px]">
                  <p><span className="text-purple-400">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-emerald-400">&apos;João Pedro&apos;</span>,</p>
                  <p className="pl-4">role: <span className="text-cyan-400">&apos;Frontend Developer&apos;</span>,</p>
                  <p className="pl-4">focus: <span className="text-amber-300">&apos;High-Performance Web&apos;</span>,</p>
                  <p className="pl-4">status: <span className="text-purple-300">&apos;Online & Building&apos;</span></p>
                  <p>&#125;;</p>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] text-cyan-400 font-bold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                  Ready to Deploy
                </div>
              </div>

              {/* Floating Mini Feature Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#030014]/90 border border-purple-500/20 text-center">
                  <span className="text-purple-400 font-bold block text-sm">100%</span>
                  <span className="text-zinc-400 text-[10px]">Mobile-First</span>
                </div>
                <div className="p-3 rounded-xl bg-[#030014]/90 border border-purple-500/20 text-center">
                  <span className="text-cyan-400 font-bold block text-sm">Ultra</span>
                  <span className="text-zinc-400 text-[10px]">Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
