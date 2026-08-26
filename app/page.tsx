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
  Briefcase,
  TrendingUp,
  X,
  Layers,
  Award,
  Eye
} from 'lucide-react';
import { AGENCY_CONFIG, AGENCY_PACKAGES, DEMO_SHOWCASES } from '@/lib/agency';

// Live Ticker items for social proof
const LIVE_NOTIFICATIONS = [
  { text: 'Novo site de Hamburgueria entregue em 24h', city: 'São Paulo • SP', time: 'há 6m', icon: '🍔' },
  { text: 'Clínica Odonto fechou Landing Page por R$ 350', city: 'Belo Horizonte • MG', time: 'há 18m', icon: '🦷' },
  { text: 'Barbearia Vintage Club no ar com agendamento', city: 'Curitiba • PR', time: 'há 34m', icon: '💈' },
  { text: 'Escritório de Advocacia com +15 contatos no WhatsApp', city: 'Rio de Janeiro • RJ', time: 'há 52m', icon: '⚖️' },
];

export default function AgencyHomePage() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [activeDemoTab, setActiveDemoTab] = useState(0);

  // Social Proof Toast State
  const [tickerIndex, setTickerIndex] = useState(0);
  const [toastVisible, setToastVisible] = useState(true);

  // ROI Calculator
  const [averageTicket, setAverageTicket] = useState(150);
  const [newClientsPerMonth, setNewClientsPerMonth] = useState(15);

  // Mouse Move Listener for Trail & Spotlight
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

  // Rotate Live Ticker Toast
  useEffect(() => {
    const interval = setInterval(() => {
      setToastVisible(false);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
        setToastVisible(true);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const defaultWhatsappMsg = encodeURIComponent(
    'Olá! Vi o portfólio no site e gostaria de um orçamento para criar um site profissional para o meu negócio.'
  );
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.phone}?text=${defaultWhatsappMsg}`;

  const currentNotification = LIVE_NOTIFICATIONS[tickerIndex];
  const activeDemo = DEMO_SHOWCASES[activeDemoTab];
  const calculatedMonthlyRevenue = averageTicket * newClientsPerMonth;

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

      {/* 🌌 MULTI-LAYERED AURORA GLOW BACKGROUND LIGHTS 🌌 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1300px] h-[650px] bg-radial-gradient pointer-events-none z-0" />
      <div className="fixed top-[-5%] left-[8%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none animate-aurora-1 z-0" />
      <div className="fixed top-[18%] right-[5%] w-[650px] h-[650px] bg-indigo-600/25 rounded-full blur-[160px] pointer-events-none animate-aurora-2 z-0" />
      <div className="fixed top-[52%] left-[12%] w-[550px] h-[550px] bg-cyan-500/18 rounded-full blur-[130px] pointer-events-none animate-aurora-3 z-0" />
      <div className="fixed bottom-[8%] right-[12%] w-[600px] h-[600px] bg-emerald-600/18 rounded-full blur-[150px] pointer-events-none animate-pulse-glow z-0" />

      {/* Neon Top Laser Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] neon-line z-50 pointer-events-none opacity-90 shadow-sm shadow-emerald-500/50" />

      {/* 💬 LIVE SOCIAL PROOF POPUP TICKER (Bottom Left) 💬 */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block pointer-events-none">
        <div
          className={`glass-panel-glow px-4 py-3 rounded-2xl flex items-center gap-3 border border-emerald-500/40 shadow-2xl transition-all duration-300 transform ${
            toastVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-base shrink-0 border border-emerald-500/30">
            {currentNotification.icon}
          </div>
          <div>
            <p className="text-xs font-bold text-slate-100 leading-tight line-clamp-1">{currentNotification.text}</p>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
              <span className="text-emerald-400 font-semibold">{currentNotification.city}</span>
              <span>•</span>
              <span>{currentNotification.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🟢 FLOATING WHATSAPP RADAR BUTTON (Bottom Right) 🟢 */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 active:scale-95 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950" />
        </span>
        <Phone className="w-4 h-4 text-slate-950" />
        <span className="hidden sm:inline">Falar com Desenvolvedor</span>
      </a>

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
            <a href="#comparativo" className="hover:text-emerald-400 transition-colors">Por Que Ter um Site?</a>
            <a href="#servicos" className="hover:text-emerald-400 transition-colors">Preços & Pacotes</a>
            <a href="#calculadora" className="hover:text-emerald-400 transition-colors">Simulador de Lucro</a>
          </nav>

          <div className="flex items-center gap-3 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pedir Meu Site</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Floating Badges */}
        <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel text-[11px] font-bold text-emerald-300 absolute top-28 left-2 shadow-2xl animate-float border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>⚡ Site entregue em 24h no Pix</span>
        </div>

        <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel text-[11px] font-bold text-indigo-300 absolute top-40 right-2 shadow-2xl animate-float border border-indigo-500/30">
          <ShieldCheck className="w-4 h-4 text-indigo-400" />
          <span>Sem Mensalidades Obrigatórias</span>
        </div>

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

      {/* 🌟 HERO INTERACTIVE LIVE SHOWCASE WIDGET (Tabs + Live Screen Preview) 🌟 */}
      <section id="modelos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Veja Nossos Modelos de Demonstração Funcionando</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Escolha o modelo perfeito para o seu segmento
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
          Navegue pelas abas abaixo e clique em "Testar Demonstração" para ver a experiência completa como se fosse o seu cliente.
        </p>

        {/* Interactive Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {DEMO_SHOWCASES.map((demo, idx) => {
            const isSelected = activeDemoTab === idx;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemoTab(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105 border border-emerald-400'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <span>{demo.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Demo Showcase Box */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 text-left border border-emerald-500/30 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {activeDemo.category}
                </span>
                <span className="text-xs font-bold text-slate-400">• {activeDemo.niche}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{activeDemo.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">{activeDemo.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href={activeDemo.href}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs transition-all border border-slate-700"
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Testar Demonstração ao Vivo</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </Link>

              <a
                href={`https://wa.me/${AGENCY_CONFIG.phone}?text=${encodeURIComponent(
                  `Olá! Gostei muito do modelo "${activeDemo.title}" e gostaria de criar um site oficial para o meu negócio!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir Este Modelo (R$ 350)</span>
              </a>
            </div>
          </div>

          {/* Device Mockup Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">100% Mobile First</span>
                <span className="text-slate-400 text-[11px]">Perfeito em iPhones e Androids</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">WhatsApp 1-Clique</span>
                <span className="text-slate-400 text-[11px]">Pedidos e agendamentos diretos</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <Zap className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Entrega em 24 Horas</span>
                <span className="text-slate-400 text-[11px]">No ar com domínio configurado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚖️ ANTES VS DEPOIS (POR QUE TER UM SITE PROFISSIONAL) ⚖️ */}
      <section id="comparativo" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>O Impacto de um Site Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Por que empresas sem site perdem mais de 70% das vendas?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lado Negativo: Empresa Sem Site */}
          <div className="p-8 rounded-3xl bg-rose-950/20 border border-rose-500/30 space-y-4 text-left relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
              <h3 className="text-lg font-black text-rose-300">Empresa Sem Site Oficial ❌</h3>
              <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full">Perde Vendas</span>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2"><X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" /><span>Não aparece quando o cliente pesquisa no Google</span></div>
              <div className="flex items-start gap-2"><X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" /><span>Passa imagem amadora e desconfiança</span></div>
              <div className="flex items-start gap-2"><X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" /><span>O cliente desiste porque não encontra cardápio/serviços rápido</span></div>
              <div className="flex items-start gap-2"><X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" /><span>Depende apenas do algoritmo instável do Instagram</span></div>
            </div>
          </div>

          {/* Lado Positivo: Empresa Com Apex Web Studio */}
          <div className="p-8 rounded-3xl bg-emerald-950/30 border-2 border-emerald-500/50 space-y-4 text-left relative overflow-hidden shadow-2xl shadow-emerald-500/10">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30">
              <h3 className="text-lg font-black text-emerald-300">Empresa Com Site Apex Web ✅</h3>
              <span className="text-xs font-black text-slate-950 bg-emerald-400 px-2.5 py-1 rounded-full">Autoridade Máxima</span>
            </div>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Aparece no Google quando clientes buscam na cidade</span></div>
              <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Passa credibilidade de empresa grande e confiável</span></div>
              <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Botão direto de WhatsApp gerando orçamentos 24 horas</span></div>
              <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Investimento único que se paga nas primeiras semanas</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 PACOTES E PREÇOS DOS SITES 💰 */}
      <section id="servicos" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Investimento Acessível com Retorno Imediato</span>
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

      {/* 📊 CALCULADORA DE RETORNO DO CLIENTE (ROI) 📊 */}
      <section id="calculadora" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Simulador de Retorno do Investimento</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Veja em quantos dias o seu site se paga sozinho
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              <div>
                <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-300">
                  <span>Valor médio do seu produto/serviço:</span>
                  <span className="text-emerald-400 text-base font-black">R$ {averageTicket},00</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-300">
                  <span>Novos clientes vindos pelo site por mês:</span>
                  <span className="text-emerald-400 text-base font-black">{newClientsPerMonth} clientes</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="60"
                  value={newClientsPerMonth}
                  onChange={(e) => setNewClientsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/30 text-center space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Faturamento Extra Estimado / Mês
                </span>
                <span className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                  +R$ {calculatedMonthlyRevenue.toLocaleString('pt-BR')},00
                </span>
                <p className="text-[11px] text-emerald-300/80 mt-2">
                  Um site de R$ 350 se paga logo no primeiro cliente fechado! 🚀
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg transition-all"
              >
                <span>Garantir Meu Site com Desconto no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
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
            <span>• Criação de Sites & Landing Pages de Alta Conversão</span>
          </div>
          <p>&copy; 2026 {AGENCY_CONFIG.name}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
