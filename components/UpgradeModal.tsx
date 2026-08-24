'use client';

import React, { useState } from 'react';
import { X, Check, Zap, Sparkles, ShieldCheck, CreditCard, Loader2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAAS_PLANS, LIFETIME_PLAN, CHECKOUT_LINKS } from '@/lib/plans';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialPlan?: 'starter' | 'pro' | 'agency' | 'lifetime';
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialPlan = 'pro',
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'agency' | 'lifetime'>(initialPlan);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const isLifetime = selectedPlan === 'lifetime';
  const plan = SAAS_PLANS.find(p => p.id === selectedPlan) || SAAS_PLANS[2];
  const price = isLifetime ? LIFETIME_PLAN.oneTimePrice : (billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice);
  const currentCheckoutUrl = isLifetime ? CHECKOUT_LINKS.lifetime : CHECKOUT_LINKS[selectedPlan];

  const handleSimulateUpgrade = async () => {
    try {
      setIsProcessing(true);
      const res = await fetch('/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selectedPlan, cycle: isLifetime ? 'lifetime' : billingCycle }),
      });

      if (!res.ok) throw new Error('Erro ao ativar plano');

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {}

      setTimeout(() => {
        setIsProcessing(false);
        if (onSuccess) onSuccess();
        onClose();
        window.location.reload();
      }, 1000);
    } catch {
      alert('Erro ao processar ativação');
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Checkout Seguro (Pix & Cartão) 🔒</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Escolha seu Plano de Upgrade
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Selecione o plano ideal para a sua necessidade e comece agora.
          </p>
        </div>

        {/* Plan Selector Grid */}
        <div className="space-y-3 mb-6">
          {/* Plan Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => setSelectedPlan('starter')}
              className={`p-3 rounded-2xl border text-center transition-all ${
                selectedPlan === 'starter'
                  ? 'border-indigo-500 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-[11px] font-black block text-slate-900">Starter</span>
              <span className="text-xs font-bold text-indigo-600">R$ 29/mês</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPlan('pro')}
              className={`p-3 rounded-2xl border text-center transition-all relative ${
                selectedPlan === 'pro'
                  ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded bg-emerald-500 text-white text-[8px] font-extrabold">
                TOP ⭐
              </span>
              <span className="text-[11px] font-black block text-slate-900">Pro</span>
              <span className="text-xs font-bold text-emerald-600">R$ 49/mês</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPlan('agency')}
              className={`p-3 rounded-2xl border text-center transition-all ${
                selectedPlan === 'agency'
                  ? 'border-purple-500 bg-purple-50/50 ring-2 ring-purple-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-[11px] font-black block text-slate-900">Agência</span>
              <span className="text-xs font-bold text-purple-600">R$ 119/mês</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPlan('lifetime')}
              className={`p-3 rounded-2xl border text-center transition-all relative ${
                selectedPlan === 'lifetime'
                  ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20'
                  : 'border-amber-200 bg-amber-50/20 hover:border-amber-400'
              }`}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded bg-amber-500 text-white text-[8px] font-extrabold">
                ÚNICO 🔥
              </span>
              <span className="text-[11px] font-black block text-slate-900">Vitalício</span>
              <span className="text-xs font-bold text-amber-700">R$ 297</span>
            </button>
          </div>

          {/* Monthly / Annual Toggle for non-lifetime */}
          {!isLifetime && (
            <div className="flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-2xl w-fit mx-auto text-xs font-bold mt-2">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1 rounded-xl transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Mensal
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1 rounded-xl transition-all flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>Anual</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-extrabold">
                  -20% OFF
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Benefits Checklist */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-2 text-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {isLifetime ? 'Benefícios da Oferta Vitalícia Founder:' : `Recursos inclusos no Plano ${plan.name}:`}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
            {(isLifetime ? LIFETIME_PLAN.features : plan.features).slice(0, 4).map((f, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Checkout Button via Cakto Link */}
        <div className="space-y-3">
          <a
            href={currentCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <CreditCard className="w-4 h-4 text-emerald-100" />
            <span>
              {isLifetime
                ? 'Garantir Acesso Vitalício por R$ 297 (Pix ou Cartão)'
                : `Pagar R$ ${price}/mês com Pix ou Cartão`}
            </span>
            <ExternalLink className="w-4 h-4 text-white ml-1" />
          </a>

          <button
            type="button"
            onClick={handleSimulateUpgrade}
            disabled={isProcessing}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Ativando plano na sua conta...</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Ativar Imediatamente no Painel (Simulação)</span>
              </>
            )}
          </button>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Pagamento 100% criptografado e seguro com liberação imediata via Pix.</span>
        </p>
      </div>
    </div>
  );
};
