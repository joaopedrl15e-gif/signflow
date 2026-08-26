'use client';

import React, { useState } from 'react';
import { Sparkles, Code2, Laptop, Terminal, Cpu, CheckCircle2, Compass, Layers, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 18;
    const y = (e.clientY - rect.top - rect.height / 2) / -18;
    setCardTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  const indicators = [
    { title: 'Projetos próprios', desc: 'Soluções desenvolvidas com código limpo e foco em usabilidade.' },
    { title: 'Interfaces responsivas', desc: 'Adaptação fluida para smartphones, tablets e computadores.' },
    { title: 'Tecnologias modernas', desc: 'Uso de ecossistemas atuais como Next.js, React e Tailwind CSS.' },
    { title: 'Evolução constante', desc: 'Estudo contínuo e aprimoramento de técnicas de desenvolvimento.' },
  ];

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Desenvolvedor & Criador</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Quem está por trás dos projetos?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sou <strong>João Pedro</strong>, desenvolvedor e criador de experiências digitais. Gosto de transformar ideias em interfaces modernas, funcionais e fáceis de usar. Estou sempre estudando novas tecnologias e melhorando minhas habilidades para criar projetos cada vez mais completos.
          </p>

          {/* 4 Clean Authentic Indicators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {indicators.map((ind, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-card border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-1 group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <h4 className="font-bold text-white text-xs group-hover:text-cyan-300 transition-colors">
                    {ind.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pl-4">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive 3D Developer Depth Composition */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
            }}
            className="w-full max-w-md rounded-3xl p-6 sm:p-8 glass-card-glow border border-cyan-500/30 shadow-2xl relative overflow-hidden transition-transform duration-150 ease-out space-y-6 group"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">developer.profile.ts</span>
            </div>

            {/* Code Representation */}
            <div className="font-mono text-xs text-slate-300 space-y-2 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-slate-500">// Identidade e propósito</p>
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-slate-400">nome:</span>{' '}
                <span className="text-emerald-300">&apos;João Pedro&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">foco:</span>{' '}
                <span className="text-emerald-300">&apos;Interfaces Digitais Modernas&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">filosofia:</span>{' '}
                <span className="text-emerald-300">&apos;Código limpo e foco na experiência&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">disponibilidade:</span>{' '}
                <span className="text-cyan-400">true</span>,
              </p>
              <p>&#125;;</p>
            </div>

            {/* Interactive Status Tag */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-slate-300">Criando novos projetos</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
