'use client';

import React from 'react';
import { User, Code2, Sparkles, Layers, Cpu, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Projetos Criados', value: '5+', desc: 'Web apps & landing pages' },
    { label: 'Tecnologias', value: '12+', desc: 'Next.js, TS, React, Tailwind' },
    { label: 'Design Responsivo', value: '100%', desc: 'Mobile, Tablet e Desktop' },
    { label: 'Foco em Performance', value: '99%', desc: 'Código limpo e otimizado' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Behind the Code
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Sou João Pedro, desenvolvedor front-end focado em criar experiências digitais que combinam estética visual de ponta, velocidade de carregamento e arquitetura limpa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Bio card */}
        <div className="lg:col-span-6 space-y-4">
          <div className="rounded-3xl p-7 bg-[#07031e]/80 border border-purple-500/20 space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Minha Jornada & Filosofia</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Acredito que um site deve ser muito mais do que um documento estático. Deve ser uma extensão viva da marca, oferecendo interatividade fluida, tempo de resposta instantâneo e facilidade total de contato para o cliente final.
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Estou constantemente aprimorando minhas habilidades com as tecnologias mais recentes do ecossistema React, Next.js e TypeScript, aplicando boas práticas de UI/UX e design responsivo.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['Clean Code', 'Mobile-First', 'Performance', 'Modern UI/UX', 'SEO Friendly'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 4 Stat Cards */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-[#07031e]/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 text-center space-y-2 group shadow-xl hover:shadow-purple-900/20"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {item.value}
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-white">{item.label}</h4>
              <p className="text-[11px] text-zinc-400 font-mono">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
