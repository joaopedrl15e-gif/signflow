'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe2,
  TrendingUp,
  Fingerprint,
  Check,
  X,
  Sliders,
  ChevronRight
} from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  detail: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, desc, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="studio-card studio-card-hover rounded-2xl p-6 cursor-pointer flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
          {icon}
        </div>

        <div>
          <h3 className="text-base font-bold text-zinc-100">
            {title}
          </h3>
          <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
            {desc}
          </p>
        </div>

        {isExpanded && (
          <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-300 leading-relaxed">
            {detail}
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>{isExpanded ? 'Recolher' : 'Ver detalhes'}</span>
        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </div>
    </div>
  );
};

export const WhyWebsiteSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(100, Math.max(0, (relativeX / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, container);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, container);
  };

  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
          Presença Digital
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Por que seu negócio precisa de um site?
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
          Um site é mais do que uma página na internet. Ele funciona como a presença oficial do seu negócio, apresenta seus serviços, fortalece sua marca e transforma visitantes em novas oportunidades.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <BenefitCard
          icon={<ShieldCheck className="w-5 h-5" />}
          title="Mais credibilidade"
          desc="Um site profissional mostra que seu negócio é sério e ajuda a conquistar a confiança de possíveis clientes."
          detail="Ter um endereço próprio com certificado de segurança transmite autoridade instantânea para quem busca seus serviços no Google."
        />
        <BenefitCard
          icon={<Globe2 className="w-5 h-5" />}
          title="Presença digital"
          desc="Seu trabalho pode ser encontrado, conhecido e acessado a qualquer momento."
          detail="O site permanece ativo 24 horas por dia, tirando dúvidas frequentes e apresentando seu portfólio mesmo fora do horário de atendimento."
        />
        <BenefitCard
          icon={<TrendingUp className="w-5 h-5" />}
          title="Mais oportunidades"
          desc="Um site bem planejado pode transformar visitantes em contatos, clientes e novas oportunidades."
          detail="Botões de ação estrategicamente posicionados encurtam a jornada do visitante até a conversa direta no seu canal de atendimento."
        />
        <BenefitCard
          icon={<Fingerprint className="w-5 h-5" />}
          title="Identidade própria"
          desc="Diferente das redes sociais, o site é um espaço personalizado e totalmente controlado pela sua marca."
          detail="Sua comunicação fica livre de instabilidades e limitações visuais de redes sociais de terceiros."
        />
      </div>

      {/* Interactive Slider Comparison */}
      <div className="studio-card rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-1">
          <h3 className="text-lg font-bold text-zinc-100">
            Comparativo de Presença Digital
          </h3>
          <p className="text-xs text-zinc-400">
            Arraste a linha para comparar a percepção do cliente entre ter ou não um site oficial.
          </p>
        </div>

        <div
          className="relative h-[260px] sm:h-[220px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-zinc-800 bg-zinc-950"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Right Side: Com Site */}
          <div className="absolute inset-0 bg-zinc-900/90 p-6 flex flex-col justify-between text-right">
            <div className="flex justify-end">
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-200 font-mono text-[10px] font-bold border border-zinc-700">
                COM SITE PROFISSIONAL
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex items-center justify-end gap-2">
                <span>Apresentação organizada e profissional</span>
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Facilidade de contato e agendamento</span>
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Identidade própria e credibilidade no Google</span>
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* Left Side: Sem Site */}
          <div
            className="absolute inset-0 bg-zinc-950 p-6 flex flex-col justify-between text-left border-r border-zinc-700"
            style={{ width: `${sliderPosition}%` }}
          >
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-500 font-mono text-[10px] font-bold border border-zinc-800">
                SEM SITE
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span>Informações espalhadas e desatualizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span>Menor confiança na seriedade do serviço</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span>Dificuldade para novos clientes encontrarem você</span>
              </div>
            </div>
          </div>

          {/* Slider Line & Thumb */}
          <div
            className="absolute top-0 bottom-0 w-[1px] bg-zinc-400 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center shadow-md">
              <Sliders className="w-3 h-3 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
