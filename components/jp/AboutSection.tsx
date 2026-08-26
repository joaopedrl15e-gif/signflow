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
  Quote,
  Code
} from 'lucide-react';

const INFO_CARDS = [
  {
    title: 'Projetos próprios',
    desc: 'Soluções criadas para praticar e resolver problemas reais.',
    icon: <FolderGit2 className="w-6 h-6 text-purple-400" />,
  },
  {
    title: 'Interfaces responsivas',
    desc: 'Experiências adaptadas com perfeição para diferentes telas.',
    icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'Tecnologias modernas',
    desc: 'Ferramentas atuais para desenvolvimento web ágil e performático.',
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'Evolução constante',
    desc: 'Aprendizado aplicado continuamente em novos projetos.',
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
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
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16 px-[5%]">
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Sobre mim
          </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transformando ideias em experiências digitais
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Profile Showcase with Multi-layer Spinning Glowing Aura */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Multi-layer gradient backgrounds */}
            <div className="absolute -inset-6 opacity-[30%] z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
              <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
            </div>

            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105 bg-gradient-to-br from-purple-950/80 via-[#030014] to-indigo-950/80 flex flex-col items-center justify-center border-4 border-white/20 p-6 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#6366f1] to-[#a855f7] p-1 shadow-2xl shadow-purple-500/40 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-[#030014] rounded-[14px] flex items-center justify-center font-black text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-white via-purple-200 to-cyan-300">
                    JP
                  </div>
                </div>

                <h3 className="font-bold text-xl text-white">João Pedro</h3>
                <p className="text-xs text-purple-300 font-mono mt-1">Frontend Developer</p>
                <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
                  Disponível para novos projetos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bio & Quote Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              Olá, sou <strong>João Pedro</strong>. Sou desenvolvedor front-end e criador de sites, apaixonado por transformar ideias em interfaces modernas, funcionais e fáceis de usar. Estou sempre estudando novas tecnologias e desenvolvendo projetos para evoluir minhas habilidades e criar experiências digitais cada vez melhores.
            </p>
          </div>

          {/* Highlight Quote Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-indigo-950/40 border border-white/10 flex items-start gap-4 shadow-xl">
            <Quote className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
            <p className="text-sm sm:text-base font-medium text-white italic leading-relaxed">
              &ldquo;Tecnologia é a ferramenta. Criar uma boa experiência é o objetivo.&rdquo;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('portfolio')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5457cd] hover:to-[#9333ea] text-white font-medium text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Ver projetos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contato')}
              className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 font-medium text-sm border border-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Falar comigo
            </button>
          </div>
        </div>
      </div>

      {/* 4 Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
        {INFO_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              {card.icon}
            </div>

            <div>
              <h4 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
