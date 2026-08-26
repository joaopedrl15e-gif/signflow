'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Palette,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';

const BENEFIT_CARDS = [
  {
    title: 'Credibilidade',
    desc: 'Uma presença profissional aumenta a confiança no seu trabalho ou negócio.',
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
  },
  {
    title: 'Disponibilidade',
    desc: 'Seu trabalho pode ser encontrado e apresentado a qualquer momento.',
    icon: <Clock className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'Novas oportunidades',
    desc: 'Um site bem planejado facilita contatos e pode gerar novos clientes.',
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'Identidade própria',
    desc: 'Seu site oferece mais controle e personalização do que depender apenas das redes sociais.',
    icon: <Palette className="w-6 h-6 text-pink-400" />,
  },
];

export const WhyWebsiteSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'with' | 'without'>('with');

  return (
    <section id="beneficios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16 px-[5%]">
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Por que seu negócio precisa de um site?
          </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Um site profissional fortalece sua presença digital, apresenta seus serviços com clareza e oferece um espaço próprio para transformar visitantes em novas oportunidades.
        </p>
      </div>

      {/* 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {BENEFIT_CARDS.map((card, idx) => (
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
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Comparison Panel */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white">Comparação de Impacto Comercial</h3>
            <p className="text-xs sm:text-sm text-gray-400">Veja a diferença na experiência do seu cliente</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center bg-[#030014] p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('without')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'without'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sem site
            </button>
            <button
              onClick={() => setActiveTab('with')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'with'
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Com site profissional
            </button>
          </div>
        </div>

        {/* Dynamic Panels */}
        {activeTab === 'with' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-white">Apresentação e Organização 24h</h5>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Fotos em alta resolução, serviços e valores explicados a qualquer hora do dia.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-white">Alta Autoridade e Credibilidade</h5>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Um endereço próprio passa segurança imediata antes mesmo do primeiro contato.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-white">Canal de Contato Descomplicado</h5>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Botões diretos de e-mail e formulário sem depender do algoritmo das redes sociais.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-white">Total Controle da Marca</h5>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Design personalizado exclusivo, sem distrações e sem anúncios de concorrentes ao lado.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3.5">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-200">Informações dispersas</h5>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Clientes perdidos entre posts antigos de redes sociais procurando preços e horários.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3.5">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-200">Dependência de algoritmos</h5>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Sem controle sobre quem visualiza o seu perfil ou se sua página será entregue.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3.5">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-200">Menor percepção de valor</h5>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Negócios sem site parecem informais e perdem clientes para quem possui página própria.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3.5">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-200">Perda de novos contatos</h5>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
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
