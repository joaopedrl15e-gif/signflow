'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Palette,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

const BENEFIT_CARDS = [
  {
    title: 'Credibilidade',
    desc: 'Uma presença profissional aumenta a confiança no seu trabalho ou negócio.',
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
  },
  {
    title: 'Disponibilidade',
    desc: 'Seu trabalho pode ser encontrado e apresentado a qualquer momento.',
    icon: <Clock className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: 'Novas oportunidades',
    desc: 'Um site bem planejado facilita contatos e pode gerar novos clientes.',
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
  },
  {
    title: 'Identidade própria',
    desc: 'Seu site oferece mais controle e personalização do que depender apenas das redes sociais.',
    icon: <Palette className="w-5 h-5 text-pink-400" />,
  },
];

export const WhyWebsiteSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'with' | 'without'>('with');

  return (
    <section id="beneficios" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Benefícios</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Por que seu negócio precisa de um site?
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Um site profissional fortalece sua presença digital, apresenta seus serviços com clareza e oferece um espaço próprio para transformar visitantes em novas oportunidades.
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full mx-auto mt-2" />
      </div>

      {/* 4 Cards de Benefícios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {BENEFIT_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#07031e]/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              {card.icon}
            </div>

            <div>
              <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h4>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Comparison: Sem site vs Com site */}
      <div className="rounded-3xl p-6 sm:p-8 bg-[#07031e]/90 border border-purple-500/20 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-purple-500/20">
          <div>
            <h3 className="text-lg font-bold text-white">Comparação Prática de Impacto</h3>
            <p className="text-xs text-zinc-400">Veja o que muda na experiência do seu cliente</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center bg-[#030014] p-1 rounded-xl border border-purple-500/30">
            <button
              onClick={() => setActiveTab('without')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'without'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Sem site
            </button>
            <button
              onClick={() => setActiveTab('with')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'with'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Com site profissional
            </button>
          </div>
        </div>

        {/* Dynamic Panels */}
        {activeTab === 'with' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">Apresentação e Organização 24/7</h5>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Cardápio, portfólio de fotos e serviços explicados com clareza a qualquer momento do dia.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">Alta Autoridade e Confiança</h5>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Um endereço próprio passa segurança imediata antes mesmo do primeiro contato.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">Canal de Contato Descomplicado</h5>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Botões rápidos de e-mail e formulário sem depender do algoritmo das redes sociais.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">Total Controle da Marca</h5>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Design personalizado exclusivo, sem distrações e sem anúncios de concorrentes ao lado.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-zinc-200">Informações dispersas</h5>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Clientes perdidos entre posts antigos de redes sociais procurando preços e horários.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-zinc-200">Dependência de algoritmos</h5>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Sem controle sobre quem visualiza o seu perfil ou se sua página será entregue.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-zinc-200">Menor percepção de valor</h5>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Negócios sem site parecem informais e perdem clientes para quem possui página própria.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-zinc-200">Perda de novos contatos</h5>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Dificuldade para quem pesquisa no Google e não encontra seu endereço nem seus serviços.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
