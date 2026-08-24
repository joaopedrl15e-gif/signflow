'use client';

import React from 'react';
import Link from 'next/link';
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronLeft,
  CreditCard,
  ExternalLink,
  Crown,
  Flame
} from 'lucide-react';
import { CHECKOUT_LINKS } from '@/lib/plans';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden bg-grid-pattern relative pb-20">
      {/* Top Banner */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-colors"
          >
            Criar Conta Grátis
          </Link>
        </div>
      </header>

      {/* Main Pricing Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Planos Transparentes e Sem Taxas Ocultas</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
          Invista no fechamento dos seus contratos
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-16">
          Comece gratuitamente e faça upgrade quando quiser criar propostas comerciais ilimitadas e acelerar suas vendas.
        </p>

        {/* 👑 SPECIAL LIFETIME DEAL BANNER 👑 */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border-2 border-amber-500/50 shadow-2xl relative overflow-hidden text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-3 h-3 text-slate-950" />
                  <span>Oferta Especial de Lançamento</span>
                </span>
                <span className="text-xs text-amber-400 font-bold">Vagas Limitadas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Plano Vitalício Founder (Acesso Eterno)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Pague <strong className="text-amber-400">uma única vez (R$ 297)</strong> e tenha todas as ferramentas do Plano Pro liberadas para sempre, sem nenhuma mensalidade.
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

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch mb-24">
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

          {/* Card 2: Starter (R$ 29 - Cakto Real) */}
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
              className="w-full py-3 px-4 rounded-xl font-black text-xs bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
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

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto text-left glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-3 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-2xl font-black text-white mb-6">Perguntas Frequentes sobre os Planos</h2>

          <div className="space-y-6 divide-y divide-slate-800">
            <div className="pt-4 first:pt-0">
              <h4 className="text-sm font-bold text-white mb-1">Como funciona a Oferta Vitalícia?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você faz um pagamento único de R$ 297 e nunca mais precisa pagar mensalidades. Sua conta terá acesso a todas as ferramentas do Plano Pro para sempre.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">Quais formas de pagamento são aceitas?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aceitamos PIX instantâneo com liberação na hora e Cartão de Crédito em até 12x.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">Posso cancelar a qualquer momento?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sim! Não há nenhuma fidelidade ou multa nos planos mensais. Você pode cancelar quando desejar com apenas 1 clique.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
