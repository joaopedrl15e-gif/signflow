'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Code2, Laptop, ChevronDown, Rocket, Layers } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });

  const handleMouseMoveBtn1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setBtn1Pos({ x, y });
  };

  const handleMouseLeaveBtn1 = () => setBtn1Pos({ x: 0, y: 0 });

  const handleMouseMoveBtn2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
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

  const titleWords = [
    { text: 'Eu', isGradient: false },
    { text: 'transformo', isGradient: true },
    { text: 'ideias', isGradient: false },
    { text: 'em', isGradient: false },
    { text: 'experiências', isGradient: true },
    { text: 'digitais.', isGradient: false },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* 🌌 HERO BACKGROUND GLOW ORBS & GRID 🌌 */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-hero-radial pointer-events-none" />
      
      {/* Animated blurred orbs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-orb-1" />
      <div className="absolute top-1/3 right-[10%] w-80 h-80 bg-indigo-600/25 rounded-full blur-[160px] pointer-events-none animate-orb-2" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-7">
        
        {/* Animated Badge: "Disponível para novos projetos" */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-xl shadow-emerald-500/10 hover:border-emerald-400/60 transition-all cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Disponível para novos projetos</span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
        </div>

        {/* 🎬 KINETIC STAGGERED HEADLINE 🎬 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl">
          {titleWords.map((item, idx) => (
            <span
              key={idx}
              className={`inline-block mr-2.5 sm:mr-3.5 transition-transform duration-300 ${
                item.isGradient
                  ? 'gradient-shimmer-text font-black'
                  : 'text-white'
              }`}
              style={{
                animation: `kinetic-drop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {item.text}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed font-normal">
          Desenvolvo sites modernos, rápidos e responsivos para profissionais e negócios que querem se destacar na internet.
        </p>

        {/* Magnetic Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          {/* Button 1: Ver meus projetos */}
          <button
            onClick={() => scrollToSection('projetos')}
            onMouseMove={handleMouseMoveBtn1}
            onMouseLeave={handleMouseLeaveBtn1}
            style={{ transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)` }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all duration-150 hover:scale-105 active:scale-95 group"
          >
            <Laptop className="w-4 h-4 text-slate-950 group-hover:rotate-6 transition-transform" />
            <span>Ver meus projetos</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: Falar comigo */}
          <button
            onClick={() => scrollToSection('contato')}
            onMouseMove={handleMouseMoveBtn2}
            onMouseLeave={handleMouseLeaveBtn2}
            style={{ transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)` }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card hover:bg-slate-900 text-white font-bold text-sm border border-slate-800 hover:border-cyan-500/40 transition-all duration-150 hover:scale-105 active:scale-95 group"
          >
            <span>Falar comigo</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Micro-Badges */}
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-6 flex-wrap font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Interfaces Modernas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>100% Responsivo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Performance & Velocidade</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pt-16 flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollToSection('beneficios')}
          className="flex flex-col items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <span>Role para explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
};
