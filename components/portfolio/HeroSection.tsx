'use client';

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });

  const handleMouseMoveBtn1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    setBtn1Pos({ x, y });
  };

  const handleMouseLeaveBtn1 = () => setBtn1Pos({ x: 0, y: 0 });

  const handleMouseMoveBtn2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    setBtn2Pos({ x, y });
  };

  const handleMouseLeaveBtn2 = () => setBtn2Pos({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Studio Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-studio-radial pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full studio-pill text-xs text-zinc-300 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Disponível para novos projetos</span>
        </div>

        {/* Kinetic Staggered Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] text-zinc-100 max-w-3xl">
          Eu transformo ideias em{' '}
          <span className="studio-gradient-cyan">
            experiências digitais.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
          Desenvolvo sites modernos, rápidos e responsivos para profissionais e negócios que querem se destacar na internet.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
          <button
            onClick={() => scrollToSection('projetos')}
            onMouseMove={handleMouseMoveBtn1}
            onMouseLeave={handleMouseLeaveBtn1}
            style={{ transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)` }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-all duration-150 active:scale-[0.98] shadow-lg shadow-white/5"
          >
            <span>Ver meus projetos</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
          </button>

          <button
            onClick={() => scrollToSection('contato')}
            onMouseMove={handleMouseMoveBtn2}
            onMouseLeave={handleMouseLeaveBtn2}
            style={{ transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)` }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl studio-card hover:bg-zinc-800/80 text-zinc-200 font-semibold text-xs transition-all duration-150 active:scale-[0.98]"
          >
            <span>Falar comigo</span>
          </button>
        </div>

        {/* Clean Spec Badges */}
        <div className="flex items-center justify-center gap-5 text-[11px] font-mono text-zinc-500 pt-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>Next.js & React</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>Mobile-First</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>Alta Performance</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Trigger */}
      <div className="relative z-10 pt-16">
        <button
          onClick={() => scrollToSection('beneficios')}
          className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span>Explorar</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-500" />
        </button>
      </div>
    </section>
  );
};
