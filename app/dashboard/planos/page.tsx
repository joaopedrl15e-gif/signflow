'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Check,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SAAS_PLANS, Plan } from '@/lib/plans';
import { UpgradeModal } from '@/components/UpgradeModal';

export default function DashboardPlansPage() {
  const [subscriptionData, setSubscriptionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [targetPlan, setTargetPlan] = useState<'pro' | 'agency'>('pro');

  const fetchSubscription = async () => {
    try {
      const res = await fetch('/api/subscription');
      const data = await res.json();
      setSubscriptionData(data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const handleOpenUpgrade = (planId: 'pro' | 'agency') => {
    setTargetPlan(planId);
    setIsUpgradeOpen(true);
  };

  if (loading) {
    return <div className="p-12 text-center text-xs text-slate-400">Carregando informações da sua conta...</div>;
  }

  const currentPlanId = subscriptionData?.plan || 'free';
  const isFree = currentPlanId === 'free';
  const usage = subscriptionData?.usage || { current: 2, max: 3, percentage: 66 };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Assinatura & Planos do SignFlow
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Gerencie seu plano ativo, limites de uso e recursos disponíveis na sua conta.
        </p>
      </div>

      {/* Current Plan Status Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Plano Atual:</span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase ${
              isFree
                ? 'bg-slate-100 text-slate-700 border border-slate-200'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}>
              {subscriptionData?.planDetails?.name || 'Plano Gratuito'}
            </span>
          </div>

          <p className="text-base font-bold text-slate-900">
            {isFree
              ? 'Você está no plano de teste com até 3 propostas ativas.'
              : 'Você tem acesso ILIMITADO a todas as ferramentas do SignFlow!'}
          </p>

          {/* Progress Bar */}
          <div className="pt-2 max-w-md">
            <div className="flex justify-between text-xs text-slate-500 mb-1 font-medium">
              <span>Propostas Criadas</span>
              <span className="font-bold text-slate-900">{usage.current} de {usage.max}</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  isFree ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${usage.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {isFree && (
          <button
            onClick={() => handleOpenUpgrade('pro')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>Desbloquear Propostas Ilimitadas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Available Plans Grid */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Comparativo de Planos Disponíveis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAAS_PLANS.map((plan) => {
            const isCurrent = plan.id === currentPlanId;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'border-2 border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-black text-slate-900">{plan.name}</h3>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                        Ativo
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mb-4 min-h-[32px]">{plan.description}</p>

                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <span className="text-3xl font-black text-slate-900">
                      R$ {plan.monthlyPrice}
                    </span>
                    <span className="text-xs text-slate-400"> / mês</span>
                  </div>

                  <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {isCurrent ? (
                    <button
                      disabled
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-500 font-bold text-xs cursor-default"
                    >
                      Plano Atual
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenUpgrade(plan.id as any)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
                    >
                      Migrar para {plan.name}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        initialPlan={targetPlan}
        onSuccess={fetchSubscription}
      />
    </div>
  );
}
