'use client';

import React from 'react';
import {
  User,
  Sparkles,
  ArrowRight,
  FolderGit2,
  Smartphone,
  Cpu,
  TrendingUp,
  Quote
} from 'lucide-react';

const INFO_CARDS = [
  {
    title: 'Projetos próprios',
    desc: 'Soluções criadas para praticar e resolver problemas reais.',
    icon: <FolderGit2 className="w-5 h-5 text-purple-400" />,
    gradient: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Interfaces responsivas',
    desc: 'Experiências adaptadas com perfeição para diferentes telas.',
    icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Tecnologias modernas',
    desc: 'Ferramentas atuais para desenvolvimento web ágil e performático.',
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Evolução constante',
    desc: 'Aprendizado aplicado continuamente em novos projetos.',
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

export const AboutSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>Sobre mim</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Transformando ideias em experiências digitais.
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full mx-auto" />
      </div>

      {/* Main Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Elegant Visual Space / Portrait Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Spinning Glow Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-3xl blur-md opacity-50 animate-spin-slow" />

            <div className="relative rounded-3xl p-6 bg-[#07031e] border border-purple-500/30 shadow-2xl space-y-5">
              <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-purple-950/80 via-[#030014] to-blue-950/80 border border-purple-500/30 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 p-1 shadow-2xl shadow-purple-500/40 mb-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-[#030014] rounded-[14px] flex items-center justify-center font-mono font-black text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-white via-purple-200 to-cyan-300">
                    JP
                  </div>
                </div>

                <h3 className="font-bold text-lg text-white">João Pedro</h3>
                <p className="text-xs font-mono text-purple-300">Frontend Developer & Criador de Sites</p>

                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Foco em Excelência Visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bio & Highlight Quote Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              Olá, sou <strong>João Pedro</strong>. Sou desenvolvedor front-end e criador de sites, apaixonado por transformar ideias em interfaces modernas, funcionais e fáceis de usar. Estou sempre estudando novas tecnologias e desenvolvendo projetos para evoluir minhas habilidades e criar experiências digitais cada vez melhores.
            </p>
          </div>

          {/* Highlight Quote Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/50 via-[#0b0526]/80 to-blue-950/50 border border-purple-500/30 flex items-start gap-3.5 shadow-lg">
            <Quote className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-medium text-white italic leading-relaxed">
              &ldquo;Tecnologia é a ferramenta. Criar uma boa experiência é o objetivo.&rdquo;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('portfolio')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Ver projetos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => scrollTo('contato')}
              className="px-6 py-3 rounded-xl bg-[#090426] hover:bg-[#140a3d] text-zinc-200 font-semibold text-xs border border-purple-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Falar comigo
            </button>
          </div>
        </div>
      </div>

      {/* 4 Cards de Informações Sem Números Falsos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-16">
        {INFO_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#07031e]/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-3 group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              {card.icon}
            </div>

            <div>
              <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
