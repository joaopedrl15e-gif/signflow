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
  ExternalLink
} from 'lucide-react';
import { SAAS_PLANS, STRIPE_CHECKOUT_URL } from '@/lib/plans';
import { UpgradeModal } from '@/components/UpgradeModal';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<'pro' | 'agency'>('pro');

  const handleSelectPlan = (planId: 'free' | 'pro' | 'agency') => {
    if (planId === 'free') {
      window.location.href = '/cadastro';
    } else {
      window.open(STRIPE_CHECKOUT_URL, '_blank');
    }
  };

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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch mb-24">
          {SAAS_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? 'glass-panel-glow border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 scale-105 z-10'
                    : 'glass-panel border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 min-h-[36px]">{plan.description}</p>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      R$ {price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium"> / mês</span>
                    {billingCycle === 'annual' && plan.monthlyPrice > 0 && (
                      <p className="text-[11px] text-emerald-400 mt-1">Faturado anualmente com desconto</p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Recursos incluídos:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {plan.id === 'free' ? (
                  <Link
                    href="/cadastro"
                    className="w-full py-3.5 px-4 rounded-2xl font-bold text-xs bg-slate-850 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Começar Gratuitamente</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <a
                    href={STRIPE_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl font-black text-xs bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pagar com Stripe</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
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
              <h4 className="text-sm font-bold text-white mb-1">Como funciona o pagamento via Stripe?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você é redirecionado para a página oficial e segura do Stripe, onde pode pagar com cartão de crédito, Apple Pay, Google Pay ou Pix. A ativação é imediata.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">Posso cancelar a qualquer momento?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sim! Não há nenhuma fidelidade ou multa. Você pode cancelar sua assinatura mensal quando desejar com apenas 1 clique no painel do cliente.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">As assinaturas têm validade jurídica no Brasil?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sim. A plataforma registra o endereço IP, navegador, data, hora, CPF/CNPJ e imagem da assinatura, cumprindo os requisitos da legislação brasileira (MP 2.200-2/2001).
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
