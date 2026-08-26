'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  TrendingUp,
  Fingerprint,
  Check,
  X,
  Sparkles,
  Sliders,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  detail: string;
  delay: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, desc, detail }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left - card.width / 2) / 14;
    const y = (e.clientY - card.top - card.height / 2) / -14;
    setRotate({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer group flex flex-col justify-between relative overflow-hidden shadow-xl hover:shadow-cyan-500/10"
    >
      <div className="space-y-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all duration-300">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Expandable Detail */}
        {isExpanded && (
          <div className="pt-3 border-t border-slate-800/80 text-xs text-cyan-300/90 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
            {detail}
          </div>
        )}
      </div>

      <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span>{isExpanded ? 'Clique para recolher' : 'Toque para detalhes'}</span>
        <ChevronRight
          className={`w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
          }`}
        />
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

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, container);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, container);
  };

  return (
    <section id="beneficios" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Valor Real para seu Negócio</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Por que seu negócio precisa de um site?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Um site é mais do que uma página na internet. Ele funciona como a presença oficial do seu negócio, apresenta seus serviços, fortalece sua marca e transforma visitantes em novas oportunidades.
        </p>
      </div>

      {/* 4 Benefits Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <BenefitCard
          icon={<ShieldCheck className="w-6 h-6" />}
          title="Mais credibilidade"
          desc="Um site profissional mostra que seu negócio é sério e ajuda a conquistar a confiança de possíveis clientes."
          detail="Ter um endereço próprio transmite autoridade imediata. Clientes que pesquisam no Google antes de comprar optam por negócios com presença sólida."
          delay="0"
        />

        <BenefitCard
          icon={<Globe className="w-6 h-6" />}
          title="Presença digital"
          desc="Seu trabalho pode ser encontrado, conhecido e acessado a qualquer momento."
          detail="Seu site trabalha 24 horas por dia, 7 dias por semana, apresentando seus serviços mesmo fora do horário comercial."
          delay="1"
        />

        <BenefitCard
          icon={<TrendingUp className="w-6 h-6" />}
          title="Mais oportunidades"
          desc="Um site bem planejado pode transformar visitantes em contatos, clientes e novas oportunidades."
          detail="Com botões de ação estratégicos e layout intuitivo, você encurta o caminho entre o interesse do visitante e o contato direto."
          delay="2"
        />

        <BenefitCard
          icon={<Fingerprint className="w-6 h-6" />}
          title="Identidade própria"
          desc="Diferente das redes sociais, o site é um espaço personalizado e totalmente controlado pela sua marca."
          detail="Você não fica refém de mudanças de algoritmos ou limites visuais das redes. A experiência é 100% pensada para o seu projeto."
          delay="3"
        />
      </div>

      {/* ⚖️ INTERACTIVE COMPARISON SLIDER ("SEM SITE" VS "COM SITE") ⚖️ */}
      <div className="glass-card-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/25 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
            Comparação Interativa
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Sem Site vs. Com Site Profissional
          </h3>
          <p className="text-xs text-slate-400">
            Arraste a barra para comparar como seu negócio é percebido pelos clientes.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div
          className="relative h-[340px] sm:h-[280px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700 bg-slate-950"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* LADO DIREITO: COM SITE PROFISSIONAL (Base) */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/50 p-6 sm:p-8 flex flex-col justify-between text-right">
            <div className="flex justify-end">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-black border border-cyan-500/30 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>COM SITE PROFISSIONAL</span>
              </span>
            </div>

            <div className="space-y-2.5 max-w-sm ml-auto text-xs text-slate-200">
              <div className="flex items-center justify-end gap-2">
                <span className="font-bold text-white">Mais profissionalismo & autoridade</span>
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Melhor apresentação visual e organizada</span>
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Facilidade de contato e botões diretos</span>
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Mais credibilidade e confiança imediata</span>
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Identidade própria livre de algoritmos</span>
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* LADO ESQUERDO: SEM SITE (Sobreposto pelo Clip Path) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-slate-950 to-slate-900 p-6 sm:p-8 flex flex-col justify-between text-left border-r border-cyan-400"
            style={{ width: `${sliderPosition}%` }}
          >
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-mono text-xs font-black border border-rose-500/30 flex items-center gap-1.5 w-fit">
                <X className="w-3.5 h-3.5 text-rose-400" />
                <span>SEM SITE OFICIAL</span>
              </span>
            </div>

            <div className="space-y-2.5 max-w-sm text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Presença digital dispersa e genérica</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Informações confusas e difíceis de achar</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Dificuldade para o cliente entrar em contato</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Menor percepção de valor dos serviços</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Dependência total das regras de redes sociais</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-cyan-400 pointer-events-none shadow-[0_0_15px_#22d3ee]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-400/50 font-bold text-xs">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
