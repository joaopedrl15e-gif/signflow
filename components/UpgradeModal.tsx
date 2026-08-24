'use client';

import React, { useState } from 'react';
import { X, Check, Zap, Sparkles, ShieldCheck, QrCode, CreditCard, Loader2, ArrowRight, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAAS_PLANS, STRIPE_CHECKOUT_URL } from '@/lib/plans';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialPlan?: 'pro' | 'agency';
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialPlan = 'pro',
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'agency'>(initialPlan);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const plan = SAAS_PLANS.find(p => p.id === selectedPlan) || SAAS_PLANS[1];
  const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

  const handleCheckoutStripe = () => {
    // Redirect directly to the user's Stripe Checkout link
    window.open(STRIPE_CHECKOUT_URL, '_blank');
  };

  const handleSimulateUpgrade = async () => {
    try {
      setIsProcessing(true);
      const res = await fetch('/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selectedPlan, cycle: billingCycle }),
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
            <span>Checkout Seguro Stripe 🔒</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Faça Upgrade para o SignFlow Pro
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Elimine o limite de propostas e feche contratos toda semana com sua marca própria.
          </p>
        </div>

        {/* Plan Selector & Billing Toggle */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-2xl w-fit mx-auto text-xs font-bold">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-xl transition-all ${
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
              className={`px-4 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>Anual</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                -20% OFF
              </span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedPlan('pro')}
              className={`p-4 rounded-2xl border text-left transition-all relative ${
                selectedPlan === 'pro'
                  ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-black text-slate-900">Plano Pro</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  Mais Popular
                </span>
              </div>
              <div className="text-lg font-black text-emerald-600">
                R$ {billingCycle === 'annual' ? '39' : '49'}
                <span className="text-[10px] text-slate-400 font-normal">/mês</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Propostas ilimitadas + WhatsApp</p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPlan('agency')}
              className={`p-4 rounded-2xl border text-left transition-all relative ${
                selectedPlan === 'agency'
                  ? 'border-indigo-500 bg-indigo-50/40 ring-2 ring-indigo-500/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-black text-slate-900">Agência</span>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                  Equipes
                </span>
              </div>
              <div className="text-lg font-black text-indigo-600">
                R$ {billingCycle === 'annual' ? '99' : '119'}
                <span className="text-[10px] text-slate-400 font-normal">/mês</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Até 5 usuários + White-label</p>
            </button>
          </div>
        </div>

        {/* Benefits Checklist */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-2 text-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            O que você desbloqueia no Plano Pro:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Propostas e contratos ilimitados</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Assinatura digital sem limites</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sem marca d'água nas propostas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Envio 1-Clique no WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Primary Checkout Button via Stripe Link */}
        <div className="space-y-3">
          <a
            href={STRIPE_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <CreditCard className="w-4 h-4 text-emerald-100" />
            <span>Pagar R$ {price}/mês com Stripe (Cartão/Pix)</span>
            <ExternalLink className="w-4 h-4 text-white ml-1" />
          </a>

          {/* Quick Activation Simulation Button */}
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
          <span>Pagamento processado com segurança criptografada pelo Stripe. Cancele quando quiser.</span>
        </p>
      </div>
    </div>
  );
};
