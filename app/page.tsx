'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Share2,
  FileCheck,
  Eye,
  MessageSquare,
  TrendingUp,
  Clock,
  Layers,
  Smartphone,
  Check,
  Flame,
  HelpCircle,
  LogIn,
  UserPlus,
  CreditCard,
  ExternalLink,
  Crown,
  Lock,
  Star,
  Activity,
  Send,
  PenTool,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAAS_PLANS, LIFETIME_PLAN, CHECKOUT_LINKS } from '@/lib/plans';
import { UpgradeModal } from '@/components/UpgradeModal';

// Live Ticker items for social proof
const LIVE_CONVERSIONS = [
  { text: 'Rafael M. assinou o Plano Pro (R$ 49/mês)', time: 'há 3m', city: 'São Paulo • SP', icon: '⚡' },
  { text: 'Proposta de R$ 8.500 assinada no celular via WhatsApp', time: 'há 11m', city: 'Belo Horizonte • MG', icon: '✍️' },
  { text: 'Agência Lumina garantiu a Vaga Vitalícia (R$ 297)', time: 'há 24m', city: 'Curitiba • PR', icon: '👑' },
  { text: 'Lucas Silveira enviou proposta de Website em 1 clique', time: 'há 38m', city: 'Rio de Janeiro • RJ', icon: '🚀' },
];

export default function HomePage() {
  // Cursor Spotlight State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive Live Signature State
  const [demoSigned, setDemoSigned] = useState(false);
  const [demoSigning, setDemoSigning] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Social Proof Toast State
  const [tickerIndex, setTickerIndex] = useState(0);
  const [toastVisible, setToastVisible] = useState(true);

  // Upgrade Modal State
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<'starter' | 'pro' | 'agency' | 'lifetime'>('pro');

  // ROI Calculator State
  const [proposalsPerMonth, setProposalsPerMonth] = useState(12);
  const [averageTicket, setAverageTicket] = useState(2500);

  // Mouse Spotlight Tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Rotate Live Conversion Toast
  useEffect(() => {
    const interval = setInterval(() => {
      setToastVisible(false);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % LIVE_CONVERSIONS.length);
        setToastVisible(true);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Canvas Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (demoSigned) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || demoSigned) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#34d399'; // Emerald neon
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const handleTestDemoSignature = () => {
    if (demoSigned) return;
    setDemoSigning(true);
    setTimeout(() => {
      setDemoSigning(false);
      setDemoSigned(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.65 },
        });
      } catch {}
    }, 800);
  };

  const handleResetDemo = () => {
    setDemoSigned(false);
    clearCanvas();
  };

  const estimatedHoursSaved = Math.round(proposalsPerMonth * 1.8);
  const potentialNewWinsRevenue = Math.round(proposalsPerMonth * averageTicket * 0.25);
  const formattedRevenue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(potentialNewWinsRevenue);

  const currentToast = LIVE_CONVERSIONS[tickerIndex];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden bg-grid-pattern relative"
    >
      {/* 🔦 DYNAMIC MOUSE SPOTLIGHT GLOW 🔦 */}
      <div
        className="pointer-events-none fixed -inset-px opacity-40 transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.12), rgba(99, 102, 241, 0.08), transparent 75%)`,
        }}
      />

      {/* 🌌 ULTRA-MODERN AURORA GLOW BACKGROUND LIGHTS 🌌 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1300px] h-[650px] bg-radial-gradient pointer-events-none z-0" />
      
      {/* Aurora Orb 1 (Emerald Glow) */}
      <div className="fixed top-[-5%] left-[8%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none animate-aurora-1 z-0" />
      
      {/* Aurora Orb 2 (Indigo / Violet Glow) */}
      <div className="fixed top-[18%] right-[5%] w-[650px] h-[650px] bg-indigo-600/25 rounded-full blur-[160px] pointer-events-none animate-aurora-2 z-0" />
      
      {/* Aurora Orb 3 (Cyan Glow) */}
      <div className="fixed top-[52%] left-[12%] w-[550px] h-[550px] bg-cyan-500/18 rounded-full blur-[130px] pointer-events-none animate-aurora-3 z-0" />

      {/* Aurora Orb 4 (Bottom Amber/Emerald Glow) */}
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
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-sm shrink-0 border border-emerald-500/30">
            {currentToast.icon}
          </div>
          <div>
            <p className="text-xs font-bold text-slate-100 leading-tight line-clamp-1">{currentToast.text}</p>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
              <span className="text-emerald-400 font-semibold">{currentToast.city}</span>
              <span>•</span>
              <span>{currentToast.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navbar */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel-glow rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />

          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-emerald-400 to-teal-300 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-tight text-white">SignFlow</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold tracking-wider uppercase border border-emerald-500/40">
                  v2.0
                </span>
              </div>
              <p className="text-[10px] text-slate-400 -mt-0.5">Propostas & Assinatura Digital</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300 relative z-10">
            <a href="#demo" className="hover:text-emerald-400 transition-colors">Demonstração</a>
            <a href="#calculadora" className="hover:text-emerald-400 transition-colors">Calculadora de ROI</a>
            <a href="#planos" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 shadow-sm">
              <Zap className="w-3.5 h-3.5" />
              <span>Planos & Preços</span>
            </a>
          </nav>

          <div className="flex items-center gap-3 relative z-10">
            <Link
              href="/login"
              className="text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/cadastro"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Criar Conta Grátis</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Floating Badges (Left & Right) */}
        <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel text-[11px] font-bold text-emerald-300 absolute top-28 left-2 shadow-2xl animate-float border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>🎉 Contrato R$ 6.400 assinado há 2m</span>
        </div>

        <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel text-[11px] font-bold text-indigo-300 absolute top-40 right-2 shadow-2xl animate-float-slow border border-indigo-500/30">
          <ShieldCheck className="w-4 h-4 text-indigo-400" />
          <span>Validade Jurídica MP 2.200-2</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/40 text-xs font-semibold text-indigo-300 mb-8 shadow-inner hover:border-indigo-500/70 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Plataforma #1 de Conversão de Orçamentos Comerciais</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl leading-[1.08] mb-6">
          Transforme orçamentos em{' '}
          <span className="shimmer-text">
            contratos assinados
          </span>{' '}
          em minutos.
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mb-10 leading-relaxed font-normal">
          Abandone PDFs estáticos que ninguém lê. Crie propostas interativas de alto luxo, dispare direto no WhatsApp do cliente e colete assinaturas na tela com validade jurídica.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href="/cadastro"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Criar Minha Conta Gratuita</span>
          </Link>
          <a
            href="#planos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass-panel hover:bg-slate-850 text-slate-200 font-semibold text-sm transition-all border border-slate-800 hover:border-slate-700"
          >
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Ver Todos os Planos</span>
          </a>
        </div>

        {/* Social Proof Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-4 pb-12 border-y border-slate-800/80">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">R$ 4.8M+</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Gerados em propostas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">3.2 min</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Tempo médio de criação</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-indigo-400 tracking-tight">94.8%</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Taxa de aprovação</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">1-Click</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Envio no WhatsApp</p>
          </div>
        </div>

        {/* 🌟 HERO INTERACTIVE LIVE DEMO WIDGET 🌟 */}
        <div id="demo" className="w-full max-w-4xl mt-12 relative">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-panel-glow text-xs font-semibold text-emerald-300 absolute -top-6 -left-8 shadow-2xl animate-float z-20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Enviado no WhatsApp • há 2m</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-panel-glow text-xs font-semibold text-indigo-300 absolute -bottom-6 -right-6 shadow-2xl animate-float-slow z-20">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Assinatura Criptografada com IP & Data</span>
          </div>

          {/* Main Card Container */}
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl border border-emerald-500/30">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">
                  app.signflow.com/proposta/demo-2026
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Modo Interativo ao Vivo</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Desenvolvimento & Branding
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5">
                  Criação de Website & Posicionamento de Marca
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Apresentado a: <strong className="text-slate-200">Dra. Camila Vasconcelos</strong>
                </p>
              </div>

              <div className="sm:text-right">
                <span className="text-[10px] text-slate-400 uppercase block font-semibold">Investimento Total</span>
                <span className="text-2xl font-black text-emerald-400">R$ 6.400,00</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">50% entrada + 50% entrega</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-slate-300 block text-[11px] uppercase tracking-wider">
                  Entregáveis Inclusos:
                </span>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Design exclusivo mobile-first no Figma</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Desenvolvimento Next.js com carregamento em &lt; 0.8s</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Botão direto de WhatsApp e Pixel de Rastreio</span>
                </div>
              </div>

              {/* Interactive Canvas Signature Box */}
              <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                demoSigned
                  ? 'bg-emerald-950/40 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-indigo-950/40 border-indigo-500/40'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className={`w-4 h-4 ${demoSigned ? 'text-emerald-400' : 'text-indigo-400'}`} />
                      {demoSigned ? 'Contrato Aceito & Assinado!' : 'Assine com seu Mouse ou Toque:'}
                    </span>
                    {demoSigned && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                        Válido Juridicamente
                      </span>
                    )}
                  </div>

                  {demoSigned ? (
                    <div className="space-y-2">
                      <div className="bg-slate-900 p-2.5 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                        <div>
                          <p className="font-signature text-2xl text-emerald-300">Camila Vasconcelos</p>
                          <p className="text-[10px] text-slate-400">Doc: 12.345.678/0001-90 • IP: 177.135.24.11</p>
                        </div>
                        <Check className="w-5 h-5 text-emerald-400" />
                      </div>
                      <p className="text-[11px] text-emerald-300/80">
                        🎉 Status atualizado instantaneamente no Dashboard!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="relative bg-slate-900/90 rounded-xl border border-indigo-500/30 overflow-hidden">
                        <canvas
                          ref={canvasRef}
                          width={320}
                          height={85}
                          onMouseDown={startDrawing}
                          onMouseMove={draw}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          onTouchStart={startDrawing}
                          onTouchMove={draw}
                          onTouchEnd={stopDrawing}
                          className="w-full h-[85px] cursor-crosshair touch-none"
                        />
                        {!hasDrawn && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-500 text-[11px] gap-1">
                            <PenTool className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Desenhe sua assinatura aqui</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3">
                  {demoSigned ? (
                    <button
                      onClick={handleResetDemo}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reiniciar Teste de Assinatura</span>
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      {hasDrawn && (
                        <button
                          type="button"
                          onClick={clearCanvas}
                          className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-semibold"
                        >
                          Limpar
                        </button>
                      )}
                      <button
                        onClick={handleTestDemoSignature}
                        disabled={demoSigning}
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                      >
                        {demoSigning ? (
                          <span>Criptografando com IP & Data...</span>
                        ) : (
                          <>
                            <FileCheck className="w-4 h-4 text-slate-950" />
                            <span>{hasDrawn ? 'Confirmar Minha Assinatura' : 'Assinar com 1-Clique'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 SEÇÃO DE PLANOS & VALORES EMBUTIDA NO SITE 💰 */}
      <section id="planos" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Planos Transparentes com Liberação Imediata</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Escolha o plano ideal para o seu negócio
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-16">
          Comece gratuitamente e faça upgrade quando quiser criar propostas comerciais ilimitadas e acelerar suas vendas.
        </p>

        {/* 👑 SPECIAL LIFETIME DEAL BANNER ON HOMEPAGE 👑 */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border-2 border-amber-500/50 shadow-2xl relative overflow-hidden text-left group">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Flame className="w-3 h-3 text-slate-950" />
                  <span>Oferta Especial de Lançamento</span>
                </span>
                <span className="text-xs text-amber-400 font-bold">Vagas Limitadas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Plano Vitalício Founder (Acesso Eterno)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Pague <strong className="text-amber-400">uma única vez</strong> e tenha todas as ferramentas do Plano Pro liberadas para sempre, sem nenhuma mensalidade ou renovação.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 flex-wrap">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-amber-400" /> Propostas ilimitadas</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-amber-400" /> Assinatura digital na tela</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-amber-400" /> Zero mensalidades</span>
              </div>
            </div>

            <div className="text-center sm:text-right shrink-0 bg-slate-950/80 p-5 rounded-2xl border border-amber-500/30">
              <span className="text-[11px] text-slate-400 line-through block">De R$ 588,00/ano</span>
              <span className="text-3xl sm:text-4xl font-black text-amber-400 block">
                R$ 297
              </span>
              <span className="text-[11px] text-slate-400 block mb-3 font-medium">Pagamento único no Pix ou Cartão</span>
              <a
                href={CHECKOUT_LINKS.lifetime}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <Crown className="w-4 h-4 text-slate-950" />
                <span>Garantir Vaga Vitalícia (R$ 297)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pricing Cards with DIRECT CAKTO URLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch mb-16">
          {/* Card 1: Gratuito */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between glass-panel border border-slate-800 hover:border-slate-700 transition-all">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Gratuito (Teste)</h3>
              <p className="text-xs text-slate-400 mb-5 min-h-[32px]">Ideal para testar a ferramenta e fechar suas primeiras propostas.</p>
              <div className="mb-5 pb-5 border-b border-slate-800">
                <span className="text-3xl sm:text-4xl font-black text-white">R$ 0</span>
                <span className="text-xs text-slate-400 font-medium"> / mês</span>
              </div>
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Até 3 propostas ativas</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Assinatura na tela</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Download em PDF</span></div>
              </div>
            </div>
            <Link
              href="/cadastro"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-slate-850 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Começar Grátis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Starter (R$ 29) */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[9px] font-black uppercase tracking-wider mb-2 border border-indigo-500/30">
                ECONÔMICO ⚡
              </span>
              <h3 className="text-lg font-bold text-white mb-1">Iniciante Starter</h3>
              <p className="text-xs text-slate-400 mb-5 min-h-[32px]">Para autônomos com volume moderado de orçamentos.</p>
              <div className="mb-5 pb-5 border-b border-slate-800">
                <span className="text-3xl sm:text-4xl font-black text-white">R$ 29</span>
                <span className="text-xs text-slate-400 font-medium"> / mês</span>
              </div>
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Até 10 propostas por mês</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Envio no WhatsApp</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Sem marca d'água</span></div>
              </div>
            </div>
            <a
              href={CHECKOUT_LINKS.starter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Assinar Starter (R$ 29)</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Card 3: Pro (R$ 49) */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between glass-panel-glow border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 scale-105 z-10 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[9px] font-black uppercase tracking-wider shadow-md">
              MAIS POPULAR ⭐
            </span>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Profissional Pro</h3>
              <p className="text-xs text-slate-400 mb-5 min-h-[32px]">Para quem quer fechar contratos semanais sem limites.</p>
              <div className="mb-5 pb-5 border-b border-slate-800">
                <span className="text-3xl sm:text-4xl font-black text-white">R$ 49</span>
                <span className="text-xs text-slate-400 font-medium"> / mês</span>
              </div>
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Propostas ILIMITADAS</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Assinatura válida juridicamente</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Suporte prioritário WhatsApp</span></div>
              </div>
            </div>
            <a
              href={CHECKOUT_LINKS.pro}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-black text-xs bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Assinar Plano Pro (R$ 49)</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Card 4: Agência (R$ 119) */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between glass-panel border border-slate-800 hover:border-purple-500/40 transition-all">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-black uppercase tracking-wider mb-2 border border-purple-500/30">
                ESCALA RÁPIDA 🚀
              </span>
              <h3 className="text-lg font-bold text-white mb-1">Agência & Equipe</h3>
              <p className="text-xs text-slate-400 mb-5 min-h-[32px]">Para agências e empresas com múltiplos vendedores.</p>
              <div className="mb-5 pb-5 border-b border-slate-800">
                <span className="text-3xl sm:text-4xl font-black text-white">R$ 119</span>
                <span className="text-xs text-slate-400 font-medium"> / mês</span>
              </div>
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Tudo do Plano Pro</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Até 5 membros de equipe</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>Domínio personalizado</span></div>
              </div>
            </div>
            <a
              href={CHECKOUT_LINKS.agency}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Assinar Agência (R$ 119)</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Garantia de 7 dias ou seu dinheiro de volta • Pagamento 100% seguro com liberação no Pix</span>
        </div>
      </section>

      {/* 📊 CALCULADORA DE ROI 📊 */}
      <section id="calculadora" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Simulador de Retorno sobre Investimento (ROI)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Quanto você está deixando na mesa com PDFs comuns?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              <div>
                <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-300">
                  <span>Propostas enviadas por mês:</span>
                  <span className="text-emerald-400 text-base font-extrabold">{proposalsPerMonth} propostas</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={proposalsPerMonth}
                  onChange={(e) => setProposalsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-300">
                  <span>Ticket Médio por Projeto:</span>
                  <span className="text-emerald-400 text-base font-extrabold">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(averageTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/30 text-center space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Potencial de Faturamento Extra / Mês
                </span>
                <span className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                  +{formattedRevenue}
                </span>
              </div>

              <Link
                href="/cadastro"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                <span>Criar Minha Conta Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CALL TO ACTION 🚀 */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10 text-center">
        <div className="glass-panel-glow p-10 sm:p-16 rounded-3xl border border-emerald-500/30 relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto tracking-tight leading-tight mb-6">
            Pronto para fechar contratos com a imagem que sua empresa merece?
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Crie sua conta gratuita agora, escolha um modelo e envie sua primeira proposta comercial em menos de 3 minutos.
          </p>

          <Link
            href="/cadastro"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Criar Conta Gratuita Agora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-300">SignFlow SaaS</span>
            <span>• Propostas & Contratos Digitais</span>
          </div>
          <p>&copy; 2026 SignFlow. Todos os direitos reservados.</p>
        </div>
      </footer>

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        initialPlan={selectedPlanForModal}
      />
    </div>
  );
}
