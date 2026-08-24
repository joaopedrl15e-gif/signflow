'use client';

import React, { useState } from 'react';
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
  DollarSign,
  TrendingUp,
  Clock,
  Layers,
  MousePointerClick,
  Smartphone,
  ChevronRight,
  Sliders,
  Check,
  Lock,
  Flame,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HomePage() {
  // Live Demo Widget state in Hero
  const [demoSigned, setDemoSigned] = useState(false);
  const [demoSigning, setDemoSigning] = useState(false);

  // Interactive ROI Calculator state
  const [proposalsPerMonth, setProposalsPerMonth] = useState(12);
  const [averageTicket, setAverageTicket] = useState(2500);

  const handleTestDemoSignature = () => {
    if (demoSigned) return;
    setDemoSigning(true);
    setTimeout(() => {
      setDemoSigning(false);
      setDemoSigned(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {}
    }, 900);
  };

  const handleResetDemo = () => {
    setDemoSigned(false);
  };

  // Calculations for ROI Calculator
  const estimatedHoursSaved = Math.round(proposalsPerMonth * 1.8);
  const potentialNewWinsRevenue = Math.round(proposalsPerMonth * averageTicket * 0.25); // +25% conversion
  const formattedRevenue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(potentialNewWinsRevenue);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden bg-grid-pattern relative">
      {/* Radial ambient glow orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial-gradient pointer-events-none z-0" />
      <div className="fixed top-1/3 -left-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="fixed top-1/2 -right-48 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Floating Navbar */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel-glow rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">SignFlow</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase border border-emerald-500/30">
                  v2.0
                </span>
              </div>
              <p className="text-[10px] text-slate-400 -mt-0.5">Propostas & Assinatura Digital</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#demo" className="hover:text-white transition-colors">Demonstração</a>
            <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
            <a href="#calculadora" className="hover:text-white transition-colors">Calculadora de Lucro</a>
            <a href="#comparativo" className="hover:text-white transition-colors">Antes vs Depois</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <span>Abrir Painel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Floating Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-8 shadow-inner hover:border-indigo-500/60 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Plataforma #1 de Conversão de Orçamentos Comerciais</span>
        </div>

        {/* Hero Title */}
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
            href="/dashboard/propostas/nova"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Criar Minha Primeira Proposta Grátis</span>
          </Link>
          <a
            href="#demo"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass-panel hover:bg-slate-850 text-slate-200 font-semibold text-sm transition-all"
          >
            <MousePointerClick className="w-4 h-4 text-indigo-400" />
            <span>Testar Demonstração Interativa</span>
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
          {/* Floating dynamic tags around the card */}
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
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl border border-indigo-500/30">
            {/* Window header */}
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

            {/* Simulated Proposal Header */}
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

            {/* Interactive Scope & Signature Trigger */}
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

              {/* Signature Action Box */}
              <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                demoSigned
                  ? 'bg-emerald-950/40 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-indigo-950/40 border-indigo-500/40'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className={`w-4 h-4 ${demoSigned ? 'text-emerald-400' : 'text-indigo-400'}`} />
                      {demoSigned ? 'Contrato Aceito & Assinado!' : 'Experimente Assinar como Cliente'}
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
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Veja como é a experiência do seu cliente final ao assinar a proposta com 1 clique.
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  {demoSigned ? (
                    <button
                      onClick={handleResetDemo}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
                    >
                      Reiniciar Teste
                    </button>
                  ) : (
                    <button
                      onClick={handleTestDemoSignature}
                      disabled={demoSigning}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      {demoSigning ? (
                        <span>Simulando Assinatura em Canvas...</span>
                      ) : (
                        <>
                          <FileCheck className="w-4 h-4 text-slate-950" />
                          <span>Clique Aqui para Testar a Assinatura</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 CALCULADORA DE ECONOMIA E LUCRO 📊 */}
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
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Ajuste seus números e veja o impacto financeiro de enviar links interativos no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Sliders Box */}
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

              <div className="pt-2 text-[11px] text-slate-500">
                * Estimativa baseada no aumento médio de +25% na taxa de conversão e fechamento imediato no WhatsApp.
              </div>
            </div>

            {/* Results Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/30 text-center space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Potencial de Faturamento Extra / Mês
                </span>
                <span className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                  +{formattedRevenue}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-left">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">Tempo Economizado</span>
                  <span className="text-lg font-bold text-white">~{estimatedHoursSaved}h / mês</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">Tempo de Resposta</span>
                  <span className="text-lg font-bold text-indigo-400">32 minutos</span>
                </div>
              </div>

              <Link
                href="/dashboard/propostas/nova"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                <span>Começar a Aumentar Minhas Vendas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ⚖️ ANTES VS DEPOIS COMPARISON ⚖️ */}
      <section id="comparativo" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Por que as propostas tradicionais falham?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Veja a diferença entre o modelo antigo em PDF e o fluxo inteligente do SignFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Old Way */}
          <div className="p-8 rounded-3xl bg-rose-950/20 border border-rose-500/20 text-left space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>O Jeito Antigo (PDFs & E-mails)</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>PDF pesado que desformata ao ser aberto no celular do cliente.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Você não sabe se o cliente sequer abriu o documento ou ignorou.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Cliente precisa imprimir, assinar à mão, escanear e devolver.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Ciclo de fechamento lento que dura de 5 a 15 dias para responder.</span>
              </li>
            </ul>
          </div>

          {/* SignFlow Way */}
          <div className="p-8 rounded-3xl bg-emerald-950/30 border border-emerald-500/40 text-left space-y-4 shadow-xl shadow-emerald-500/5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Com o SignFlow (Link Interativo)</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Página responsiva ultra-moderna que abre instantaneamente no WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tracking ao vivo: saiba o momento exato em que o cliente visualizou.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Assinatura na tela em 10 segundos com o dedo ou digitação automática.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fechamento imediato com notificação e validade jurídica auditada.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🚀 BENTO GRID DE RECURSOS 🚀 */}
      <section id="recursos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Projetado para Máxima Conversão</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Tudo o que você precisa para profissionalizar suas vendas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Modelos Prontos por Nicho</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Templates otimizados para Desenvolvimento de Sites, Tráfego Pago, Design e Consultoria que preenchem itens e valores em segundos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Assinatura Mobile-First</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desenho com o dedo na tela em qualquer smartphone ou digitação em caligrafia cursiva elegante.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Disparo 1-Click WhatsApp</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gera a mensagem personalizada para o seu cliente com link seguro e encurtado, pronto para enviar.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Auditoria & Segurança</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Registro completo de IP, dispositivo, data/hora e documento do signatário com validade jurídica.
            </p>
          </div>

          {/* Card 5 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Métricas de Faturamento</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Painel completo com gráficos de receita total, valores em negociação e taxa de conversão dos orçamentos.
            </p>
          </div>

          {/* Card 6 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Chave Pix & Recebimento</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Exiba sua chave Pix e dados bancários na própria proposta para que o cliente realize o pagamento da entrada imediatamente.
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CALL TO ACTION 🚀 */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10 text-center">
        <div className="glass-panel-glow p-10 sm:p-16 rounded-3xl border border-emerald-500/30 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-6 border border-emerald-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Comece hoje mesmo sem complicação</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto tracking-tight leading-tight mb-6">
            Pronto para fechar contratos com a imagem que sua empresa merece?
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Acesse o painel agora, escolha um modelo e envie sua primeira proposta comercial em menos de 3 minutos.
          </p>

          <Link
            href="/dashboard/propostas/nova"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Criar Minha Primeira Proposta Agora</span>
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
    </div>
  );
}
