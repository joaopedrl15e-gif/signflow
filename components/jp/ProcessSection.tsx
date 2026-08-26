'use client';

import React from 'react';
import { Lightbulb, Layout, Code2, Rocket, Workflow } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Entendimento',
    desc: 'Entendo a ideia, o público e o principal objetivo do projeto.',
    icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
  },
  {
    number: '02',
    title: 'Planejamento',
    desc: 'Organizo a estrutura, as páginas e a experiência do visitante.',
    icon: <Layout className="w-5 h-5 text-blue-400" />,
  },
  {
    number: '03',
    title: 'Criação',
    desc: 'Desenvolvo uma interface moderna, responsiva e funcional.',
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
  },
  {
    number: '04',
    title: 'Publicação',
    desc: 'Testo os detalhes e preparo o projeto para ser colocado no ar.',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Workflow className="w-3.5 h-3.5" />
          <span>Processo de Criação</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Como transformo uma ideia em um site
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Um fluxo organizado e transparente do primeiro conceito até a publicação final na web.
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full mx-auto mt-2" />
      </div>

      {/* 4 Connected Steps */}
      <div className="relative">
        {/* Connecting Line on Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 -translate-y-6 opacity-30 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#07031e]/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
