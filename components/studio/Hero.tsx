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
  Laptop,
  CheckCircle2
} from 'lucide-react';

const TYPED_PHRASES = [
  'Criador de sites',
  'Desenvolvedor Front-end',
  'Interfaces modernas',
  'Experiências digitais',
];

const CODE_TABS = {
  developer: `// developer.config.ts
export const developer = {
  name: 'João Pedro',
  role: 'Frontend Developer',
  focus: 'Ultra-Performance Web',
  stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind'],
  status: 'Ready to build high-impact sites'
};`,
  experience: `// experience.tsx
export function Experience() {
  return (
    <div className="modern-ui">
      <Hero fluid animation="60fps" />
      <Showcase responsive interactive />
      <Conversion focused cleanCode />
    </div>
  );
}`,
  metrics: `// performance.json
{
  "lighthouse": 100,
  "mobileFirst": true,
  "seoOptimized": true,
  "cleanArchitecture": "Production-Ready"
}`,
};

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'developer' | 'experience' | 'metrics'>('developer');
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
      x: ((clientX - centerX) / centerX) * 14,
      y: ((clientY - centerY) / centerY) * 14,
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LADO ESQUERDO */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11092e]/80 border border-purple-500/30 text-xs font-mono shadow-lg shadow-purple-950/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-200 font-medium">Disponível para novos projetos</span>
          </div>

          {/* Título Principal */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              <span className="text-white">Frontend </span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            {/* Máquina de escrever */}
            <div className="min-h-[55px] sm:min-h-[65px] flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl sm:text-4xl font-bold text-zinc-300 font-mono">
                <span>{displayText}</span>
                <span className="animate-pulse text-cyan-400 font-bold">|</span>
              </h2>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Crio sites modernos, responsivos e interativos para profissionais e negócios que querem construir uma presença digital marcante.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Git'].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-[#0e082b]/80 border border-purple-500/25 text-xs font-mono text-purple-200 hover:border-cyan-400/50 hover:bg-[#180e45] transition-all hover:scale-105 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
            <button
              onClick={() => scrollTo('portfolio')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver projetos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contato')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#0d0729]/90 hover:bg-[#180d47] text-zinc-200 font-semibold text-xs border border-purple-500/30 hover:border-cyan-400/50 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Entrar em contato
            </button>
          </div>

          {/* Redes Sociais */}
          <div className="pt-3 border-t border-purple-500/15 flex items-center justify-center lg:justify-start gap-3">
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

        {/* LADO DIREITO: INTERACTIVE 3D CODE STUDIO */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-sm transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${-mouseOffset.y * 0.8}deg) rotateY(${mouseOffset.x * 0.8}deg)`,
            }}
          >
            {/* Ambient Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-35 animate-pulse" />

            {/* Main Window */}
            <div className="relative rounded-3xl p-6 bg-[#0a0524]/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl space-y-5">
              {/* Window Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <div className="flex items-center gap-1.5">
                  {(['developer', 'experience', 'metrics'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCodeTab(tab)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                        activeCodeTab === tab
                          ? 'bg-purple-600/40 text-cyan-300 border border-purple-400/40 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Code Editor Body */}
              <div className="w-full h-48 rounded-2xl bg-[#04020f] border border-purple-500/20 p-4 font-mono text-xs text-zinc-300 overflow-hidden relative group">
                <pre className="text-[11px] leading-relaxed text-purple-200 whitespace-pre-wrap">
                  {CODE_TABS[activeCodeTab]}
                </pre>
              </div>

              {/* Interactive Status Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#04020f] border border-purple-500/20 text-center">
                  <span className="text-purple-400 font-bold block text-sm">100%</span>
                  <span className="text-zinc-400 text-[10px]">Mobile-First</span>
                </div>
                <div className="p-3 rounded-xl bg-[#04020f] border border-purple-500/20 text-center">
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
