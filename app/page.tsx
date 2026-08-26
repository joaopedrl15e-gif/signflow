'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  MessageSquare,
  Flame,
  Star,
  ExternalLink,
  Laptop,
  Smartphone,
  Clock,
  Check,
  HelpCircle,
  Scissors,
  Briefcase
} from 'lucide-react';
import { AGENCY_CONFIG, AGENCY_PACKAGES, DEMO_SHOWCASES } from '@/lib/agency';

export default function AgencyHomePage() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });

  // Mouse Spotlight
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Smooth Trailing Dot
  useEffect(() => {
    let animationFrameId: number;
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.18,
        y: prev.y + (mousePos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };
    animationFrameId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  const defaultWhatsappMsg = encodeURIComponent(
    'Olá! Vi o portfólio no site e gostaria de um orçamento para criar um site profissional para o meu negócio.'
  );
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.phone}?text=${defaultWhatsappMsg}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden bg-grid-pattern relative">
      {/* 🟢 CUSTOM CURSOR HALO 🟢 */}
      <div
        className="pointer-events-none fixed z-50 rounded-full border border-emerald-400/60 transition-transform duration-75 hidden md:block"
        style={{
          width: '36px',
          height: '36px',
          transform: `translate(${trailingPos.x - 18}px, ${trailingPos.y - 18}px)`,
          boxShadow: '0 0 15px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2)',
          backdropFilter: 'blur(1px)',
        }}
      />
      <div
        className="pointer-events-none fixed z-50 w-2 h-2 rounded-full bg-emerald-400 hidden md:block"
        style={{
          transform: `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)`,
          boxShadow: '0 0 10px #34d399',
        }}
      />

      {/* 🔦 DYNAMIC MOUSE SPOTLIGHT GLOW 🔦 */}
      <div
        className="pointer-events-none fixed -inset-px opacity-40 transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.12), rgba(99, 102, 241, 0.08), transparent 75%)`,
        }}
      />

      {/* 🌌 AURORA GLOW LIGHTS 🌌 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1300px] h-[650px] bg-radial-gradient pointer-events-none z-0" />
      <div className="fixed top-[-5%] left-[8%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none animate-aurora-1 z-0" />
      <div className="fixed top-[18%] right-[5%] w-[650px] h-[650px] bg-indigo-600/25 rounded-full blur-[160px] pointer-events-none animate-aurora-2 z-0" />
      <div className="fixed bottom-[8%] right-[12%] w-[600px] h-[600px] bg-emerald-600/18 rounded-full blur-[150px] pointer-events-none animate-pulse-glow z-0" />

      {/* Neon Top Laser Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] neon-line z-50 pointer-events-none opacity-90 shadow-sm shadow-emerald-500/50" />

      {/* Floating Navbar */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel-glow rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-emerald-400 to-teal-300 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-tight text-white">{AGENCY_CONFIG.name}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold tracking-wider uppercase border border-emerald-500/40">
                  ESTÚDIO WEB
                </span>
              </div>
              <p className="text-[10px] text-slate-400 -mt-0.5">{AGENCY_CONFIG.tagline}</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300 relative z-10">
            <a href="#modelos" className="hover:text-emerald-400 transition-colors">Modelos Prontos</a>
            <a href="#servicos" className="hover:text-emerald-400 transition-colors">Preços & Pacotes</a>
            <a href="#vantagens" className="hover:text-emerald-400 transition-colors">Por Que Ter um Site?</a>
          </nav>

          <div className="flex items-center gap-3 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pedir Meu Site no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/40 text-xs font-semibold text-indigo-300 mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Sites Profissionais Entregues em 24h a 48h</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl leading-[1.08] mb-6">
          Coloque sua empresa no Google com um{' '}
          <span className="shimmer-text">
            site de alta conversão
          </span>{' '}
          em 24 horas.
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mb-10 leading-relaxed font-normal">
          Chega de perder clientes para a concorrência. Desenvolvemos sites rápidos, modernos e otimizados para smartphones que transformam visitantes em mensagens diretas no seu WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Fazer Orçamento pelo WhatsApp</span>
          </a>
          <a
            href="#modelos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass-panel hover:bg-slate-850 text-slate-200 font-semibold text-sm transition-all border border-slate-800 hover:border-slate-700"
          >
            <Laptop className="w-4 h-4 text-emerald-400" />
            <span>Ver Modelos Prontos</span>
          </a>
        </div>

        {/* Social Proof Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-4 pb-12 border-y border-slate-800/80">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">24h - 48h</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Prazo de entrega recorde</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">100%</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Responsivo para Celulares</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-indigo-400 tracking-tight">0.8s</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Carregamento Ultra-Rápido</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">1-Click</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Botão Direto no WhatsApp</p>
          </div>
        </div>
      </section>

      {/* 🌟 SEÇÃO DE MODELOS DE DEMONSTRAÇÃO AO VIVO (SHOWCASE) 🌟 */}
      <section id="modelos" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Veja Nossos Modelos de Demonstração Funcionando</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Escolha o modelo perfeito para o seu segmento
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-16">
          Clique nos modelos abaixo para navegar e testar a experiência exata que seus clientes terão no celular e computador.
        </p>

        {/* 4 Demo Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {DEMO_SHOWCASES.map((demo) => (
            <div
              key={demo.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {demo.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{demo.niche}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  {demo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {demo.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={demo.href}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-black transition-colors"
                >
                  <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ver Demonstração ao Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </Link>

                <a
                  href={`https://wa.me/${AGENCY_CONFIG.phone}?text=${encodeURIComponent(
                    `Olá! Vi o modelo de demonstração "${demo.title}" e gostaria de criar um site nesse estilo para minha empresa!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black shadow-md transition-all hover:scale-105"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Pedir Este Modelo (R$ 350)</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 PACOTES E PREÇOS DOS SITES 💰 */}
      <section id="servicos" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Investimento Acessível com Retorno Rápido</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Pacotes Completos e Sem Mensalidades Obrigatórias
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-16">
          Pague uma única vez pelo desenvolvimento do seu site e tenha uma máquina de vendas funcionando 24h por dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch mb-16">
          {AGENCY_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'glass-panel-glow border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 scale-105 z-10 relative'
                    : 'glass-panel border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase tracking-wider mb-3 border border-emerald-500/30">
                      {pkg.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-black text-white mb-1">{pkg.title}</h3>
                  <p className="text-xs text-slate-400 mb-5 min-h-[32px]">{pkg.description}</p>

                  <div className="mb-5 pb-5 border-b border-slate-800">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                      R$ {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium"> (pagamento único no Pix)</span>
                    {pkg.installments && (
                      <span className="block text-[11px] text-slate-400 mt-1">{pkg.installments}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold mb-4">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{pkg.deliveryTime}</span>
                  </div>

                  <div className="space-y-2.5 mb-8 text-xs text-slate-300">
                    {pkg.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${AGENCY_CONFIG.phone}?text=${encodeURIComponent(
                    `Olá! Gostaria de contratar o pacote "${pkg.title}" por R$ ${pkg.price} para o meu negócio.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]'
                      : 'bg-slate-850 hover:bg-slate-800 text-white border border-slate-700'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Fechar Este Pacote no WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Garantia de Satisfação: Ajustamos o design até ficar 100% do seu agrado!</span>
        </div>
      </section>

      {/* 🚀 CALL TO ACTION FINAL 🚀 */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10 text-center">
        <div className="glass-panel-glow p-10 sm:p-16 rounded-3xl border border-emerald-500/30 relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto tracking-tight leading-tight mb-6">
            Pronto para ter o site oficial da sua empresa no ar até amanhã?
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Chame nossa equipe no WhatsApp agora mesmo, tire suas dúvidas e receba sua prévia em menos de 24 horas.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 text-slate-950" />
            <span>Falar com o Desenvolvedor no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-300">{AGENCY_CONFIG.name}</span>
            <span>• Criação de Sites & Landing Pages</span>
          </div>
          <p>&copy; 2026 {AGENCY_CONFIG.name}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
