'use client';

import React, { useState } from 'react';
import { Sparkles, Sliders, ArrowRight, Laptop, Check, Layout, Palette, Target } from 'lucide-react';

interface MiniSiteBuilderProps {
  onSelectConfig: (config: { projectType: string; style: string }) => void;
}

export const MiniSiteBuilder: React.FC<MiniSiteBuilderProps> = ({ onSelectConfig }) => {
  const [projectType, setProjectType] = useState<'Landing page' | 'Portfólio' | 'Site empresarial'>('Landing page');
  const [visualStyle, setVisualStyle] = useState<'Minimalista' | 'Tecnológico' | 'Criativo'>('Tecnológico');
  const [primaryColor, setPrimaryColor] = useState<'Azul' | 'Roxo' | 'Verde' | 'Laranja'>('Azul');
  const [goal, setGoal] = useState<'Apresentar meu trabalho' | 'Conseguir clientes' | 'Divulgar um serviço'>('Conseguir clientes');

  const colorThemes = {
    Azul: {
      accent: 'bg-cyan-500 text-slate-950',
      border: 'border-cyan-500/50',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20',
      bgGlow: 'bg-cyan-500/10',
    },
    Roxo: {
      accent: 'bg-purple-500 text-white',
      border: 'border-purple-500/50',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20',
      bgGlow: 'bg-purple-500/10',
    },
    Verde: {
      accent: 'bg-emerald-500 text-slate-950',
      border: 'border-emerald-500/50',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20',
      bgGlow: 'bg-emerald-500/10',
    },
    Laranja: {
      accent: 'bg-amber-500 text-slate-950',
      border: 'border-amber-500/50',
      text: 'text-amber-400',
      glow: 'shadow-amber-500/20',
      bgGlow: 'bg-amber-500/10',
    },
  };

  const currentTheme = colorThemes[primaryColor];

  const handleCtaClick = () => {
    onSelectConfig({
      projectType,
      style: `${visualStyle} (${primaryColor})`,
    });

    const contactEl = document.getElementById('contato');
    if (contactEl) {
      const offset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-xs">
          <Sliders className="w-3.5 h-3.5" />
          <span>Configurador Interativo</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Imagine como poderia ser seu site
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Escolha o tipo, estilo e cores para ver uma prévia interativa em tempo real da sua futura presença online.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Controls Column (Left) */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
          {/* Option 1: Tipo de projeto */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-cyan-400" />
              <span>1. Tipo de projeto</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Landing page', 'Portfólio', 'Site empresarial'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    projectType === type
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Option 2: Estilo visual */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span>2. Estilo visual</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Minimalista', 'Tecnológico', 'Criativo'] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => setVisualStyle(style)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    visualStyle === style
                      ? 'bg-purple-500 text-white font-black shadow-md shadow-purple-500/20'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Option 3: Cor principal */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>3. Cor principal</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['Azul', 'Roxo', 'Verde', 'Laranja'] as const).map((color) => (
                <button
                  key={color}
                  onClick={() => setPrimaryColor(color)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    primaryColor === color
                      ? 'bg-slate-800 text-white border-2 border-white/80 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-850 border border-slate-800'
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      color === 'Azul'
                        ? 'bg-cyan-400'
                        : color === 'Roxo'
                        ? 'bg-purple-400'
                        : color === 'Verde'
                        ? 'bg-emerald-400'
                        : 'bg-amber-400'
                    }`}
                  />
                  <span>{color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Option 4: Objetivo */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>4. Objetivo do site</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(['Apresentar meu trabalho', 'Conseguir clientes', 'Divulgar um serviço'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`py-2.5 px-3 rounded-xl text-[11px] font-bold transition-all ${
                    goal === g
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-2">
            <button
              onClick={handleCtaClick}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>Quero um projeto assim</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Live Simulator Preview (Right) */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="glass-card-glow rounded-3xl p-6 border border-cyan-500/30 shadow-2xl flex-1 flex flex-col justify-between space-y-6 relative overflow-hidden bg-slate-950">
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                preview.meuprojeto.com.br
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold">AO VIVO</span>
            </div>

            {/* Miniature Mockup Screen */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 space-y-6 ${
                currentTheme.border
              } ${currentTheme.bgGlow}`}
            >
              {/* Mini Nav */}
              <div className="flex items-center justify-between text-xs">
                <span className={`font-black tracking-tight ${currentTheme.text}`}>
                  SEU LOGO
                </span>
                <div className="flex gap-3 text-[10px] text-slate-400">
                  <span>Início</span>
                  <span>Serviços</span>
                  <span>Contato</span>
                </div>
              </div>

              {/* Mini Hero */}
              <div className="space-y-3 py-4 text-center sm:text-left">
                <span
                  className={`inline-block text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${currentTheme.accent}`}
                >
                  {visualStyle} • {projectType}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {goal === 'Conseguir clientes'
                    ? 'Transforme visitantes em clientes fiéis'
                    : goal === 'Apresentar meu trabalho'
                    ? 'Apresente seu trabalho com máxima autoridade'
                    : 'Divulgue seus serviços 24 horas por dia'}
                </h3>

                <p className="text-xs text-slate-300 max-w-sm">
                  Um site desenhado no estilo <strong>{visualStyle}</strong> para alcançar seu objetivo de{' '}
                  <span className={currentTheme.text}>{goal.toLowerCase()}</span>.
                </p>

                <div className="pt-2 flex gap-2 justify-center sm:justify-start">
                  <span
                    className={`px-4 py-2 rounded-xl text-xs font-black shadow-md ${currentTheme.accent} ${currentTheme.glow}`}
                  >
                    Fazer Contato
                  </span>
                  <span className="px-3 py-2 rounded-xl text-xs bg-slate-900 text-slate-300 border border-slate-800">
                    Saiba Mais
                  </span>
                </div>
              </div>

              {/* Mini Cards Preview */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[10px]">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className={`block font-bold ${currentTheme.text}`}>100% Responsivo</span>
                  <span className="text-slate-400 text-[9px]">Perfeito no celular</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className={`block font-bold ${currentTheme.text}`}>Carregamento Rápido</span>
                  <span className="text-slate-400 text-[9px]">Em menos de 1 segundo</span>
                </div>
              </div>
            </div>

            {/* Selected Summary Info */}
            <div className="pt-2 text-center text-xs text-slate-400">
              <span>Configuração selecionada: </span>
              <strong className="text-white">
                {projectType} • {visualStyle} • {primaryColor}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
