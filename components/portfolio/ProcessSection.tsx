'use client';

import React, { useState } from 'react';
import { Sparkles, Lightbulb, Map, Palette, Rocket, CheckCircle } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendimento da ideia',
    description: 'Primeiro, entendo o objetivo, o público e o estilo desejado para o projeto.',
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Organizo a estrutura, as seções e a experiência que o visitante terá.',
    icon: <Map className="w-5 h-5 text-cyan-400" />,
  },
  {
    number: '03',
    title: 'Design e desenvolvimento',
    description: 'Transformo o planejamento em uma interface moderna, responsiva e funcional.',
    icon: <Palette className="w-5 h-5 text-indigo-400" />,
  },
  {
    number: '04',
    title: 'Revisão e publicação',
    description: 'Reviso os detalhes, testo o funcionamento e preparo o projeto para ser publicado.',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Metodologia de Trabalho</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Como transformo uma ideia em realidade
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Um fluxo de trabalho organizado e transparente do primeiro rascunho até a publicação final.
        </p>
      </div>

      {/* 4 Steps with Connecting Line Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {PROCESS_STEPS.map((step, idx) => {
          const isSelected = activeStep === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              onClick={() => setActiveStep(idx)}
              className={`glass-card rounded-3xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 ${
                isSelected
                  ? 'border-cyan-400/60 bg-slate-900/90 shadow-2xl shadow-cyan-500/15 scale-105 z-10'
                  : 'border-slate-800/80 hover:border-slate-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-cyan-400">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Etapa {idx + 1} de 4</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
