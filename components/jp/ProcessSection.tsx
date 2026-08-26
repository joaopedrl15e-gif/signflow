'use client';

import React from 'react';
import { Lightbulb, Layout, Code2, Rocket, Workflow } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Entendimento',
    desc: 'Entendo a ideia, o público e o principal objetivo do projeto.',
    icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
  },
  {
    number: '02',
    title: 'Planejamento',
    desc: 'Organizo a estrutura, as páginas e a experiência do visitante.',
    icon: <Layout className="w-6 h-6 text-blue-400" />,
  },
  {
    number: '03',
    title: 'Criação',
    desc: 'Desenvolvo uma interface moderna, responsiva e funcional.',
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    number: '04',
    title: 'Publicação',
    desc: 'Testo os detalhes e preparo o projeto para ser colocado no ar.',
    icon: <Rocket className="w-6 h-6 text-emerald-400" />,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16 px-[5%]">
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Como transformo uma ideia em um site
          </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Um fluxo transparente e organizado do primeiro conceito até a publicação final.
        </p>
      </div>

      {/* 4 Steps */}
      <div className="relative">
        {/* Desktop Line */}
        <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#38bdf8] -translate-y-6 opacity-30 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-normal">
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
