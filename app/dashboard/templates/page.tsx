'use client';

import React from 'react';
import Link from 'next/link';
import {
  Globe,
  TrendingUp,
  Palette,
  Briefcase,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PROPOSAL_TEMPLATES } from '@/lib/templates';
import { formatCurrency } from '@/lib/utils';

export default function TemplatesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'TrendingUp': return TrendingUp;
      case 'Palette': return Palette;
      case 'Briefcase': return Briefcase;
      default: return Layers;
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Modelos de Propostas Validados
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Economize tempo usando estruturas de alto fechamento prontas para seu nicho de atuação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROPOSAL_TEMPLATES.map((tpl) => {
          const Icon = getIcon(tpl.icon);
          const totalEstimated = tpl.items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);

          return (
            <div
              key={tpl.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between group hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {tpl.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {tpl.title}
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {tpl.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Entregáveis inclusos no modelo:
                  </span>
                  {tpl.deliverables.slice(0, 3).map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                  {tpl.deliverables.length > 3 && (
                    <span className="text-[11px] text-indigo-600 font-semibold pl-5.5 block">
                      +{tpl.deliverables.length - 3} outros itens detalhados
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Ticket Médio Sugerido</span>
                  <span className="text-sm font-black text-emerald-600">
                    {formatCurrency(totalEstimated)}
                  </span>
                </div>

                <Link
                  href="/dashboard/propostas/nova"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold shadow-sm transition-all"
                >
                  <span>Usar Este Modelo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
