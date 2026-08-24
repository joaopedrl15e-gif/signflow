'use client';

import React, { useState } from 'react';
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
import { SAAS_PLANS, LIFETIME_PLAN, STRIPE_CHECKOUT_URL } from '@/lib/plans';
import { UpgradeModal } from '@/components/UpgradeModal';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<'starter' | 'pro' | 'agency' | 'lifetime'>('pro');

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

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
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
                <span className="text-xs text-amber-400 font-bold">Vagas Limitadas (Primeiros 50)</span>
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
              <span className="text-[11px] text-slate-400 block mb-3 font-medium">Pagamento único ou 12x</span>
              <a
                href={STRIPE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <Crown className="w-4 h-4 text-slate-950" />
                <span>Garantir Vaga Vitalícia</span>
              </a>
            </div>
          </div>
        </div>

        {/* Billing Switcher */}
        <div className="flex items-center justify-center gap-3 p-1.5 glass-panel rounded-2xl w-fit mx-auto text-xs font-bold mb-16">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-xl transition-all ${
              billingCycle === 'monthly'
                ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cobrança Mensal
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-2 rounded-xl transition-all flex items-center gap-2 ${
              billingCycle === 'annual'
                ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Cobrança Anual</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-900 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
              Economize 20%
            </span>
          </button>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch mb-24">
          {SAAS_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? 'glass-panel-glow border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 scale-105 z-10'
                    : 'glass-panel border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[9px] font-black uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-5 min-h-[32px]">{plan.description}</p>

                  <div className="mb-5 pb-5 border-b border-slate-800">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      R$ {price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium"> / mês</span>
                    {billingCycle === 'annual' && plan.monthlyPrice > 0 && (
                      <p className="text-[10px] text-emerald-400 mt-1">Faturado anualmente com 20% OFF</p>
                    )}
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Recursos inclusos:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {plan.id === 'free' ? (
                  <Link
                    href="/cadastro"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-slate-850 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Começar Grátis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <a
                    href={STRIPE_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]'
                        : 'bg-slate-850 hover:bg-slate-800 text-white border border-slate-700'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Assinar {plan.name}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}
              </div>
            );
          })}
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
                Você faz um pagamento único de R$ 297 e nunca mais precisa pagar mensalidades. Sua conta terá acesso a todas as ferramentas do Plano Pro para sempre, incluindo todas as atualizações que lançarmos.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">Como funciona o pagamento via Stripe?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você é redirecionado para a página oficial e segura do Stripe, onde pode pagar com cartão de crédito, Apple Pay, Google Pay ou Pix. A ativação é imediata.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">Posso cancelar a qualquer momento?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sim! Não há nenhuma fidelidade ou multa nos planos mensais. Você pode cancelar sua assinatura quando desejar com apenas 1 clique no painel.
              </p>
            </div>
          </div>
        </div>
      </main>

      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        initialPlan={selectedPlanForModal}
      />
    </div>
  );
}
