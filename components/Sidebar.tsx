'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  LayoutTemplate,
  Users,
  Settings,
  Sparkles,
  Zap,
  CreditCard,
  ChevronRight
} from 'lucide-react';
import { UpgradeModal } from './UpgradeModal';

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Propostas', href: '/dashboard/propostas', icon: FileText },
  { name: 'Nova Proposta', href: '/dashboard/propostas/nova', icon: PlusCircle, highlight: true },
  { name: 'Modelos Prontos', href: '/dashboard/templates', icon: LayoutTemplate },
  { name: 'Base de Clientes', href: '/dashboard/clientes', icon: Users },
  { name: 'Planos & Assinatura', href: '/dashboard/planos', icon: CreditCard },
  { name: 'Configurações', href: '/dashboard/configuracoes', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [subData, setSubData] = useState<any>(null);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  useEffect(() => {
    fetch('/api/subscription')
      .then(res => res.json())
      .then(data => setSubData(data))
      .catch(() => {});
  }, []);

  const isFree = !subData?.plan || subData.plan === 'free';
  const usageCurrent = subData?.usage?.current || 2;
  const usageMax = subData?.usage?.max || 3;

  return (
    <aside className="w-64 bg-white text-slate-800 flex flex-col border-r border-slate-200/90 min-h-screen shrink-0 shadow-sm relative z-30">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-slate-900">SignFlow</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold tracking-wider border ${
                isFree
                  ? 'bg-slate-100 text-slate-600 border-slate-200'
                  : 'bg-emerald-100 text-emerald-800 border-emerald-200'
              }`}>
                {isFree ? 'FREE' : 'PRO'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-none mt-0.5">Painel Executivo</p>
          </div>
        </Link>
      </div>

      {/* Nav List */}
      <div className="flex-1 px-3 py-6 space-y-1.5">
        <div className="px-3 pb-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
          Módulos Principais
        </div>

        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href) && item.href !== '/dashboard/propostas/nova');
          const Icon = item.icon;

          if (item.highlight) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20 transition-all mb-3 hover:translate-x-1"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-emerald-100" />
                  <span>{item.name}</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-indigo-50/80 text-indigo-700 font-bold border border-indigo-100 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-3.5 h-3.5 text-indigo-600" />}
            </Link>
          );
        })}
      </div>

      {/* Subscription Plan Card in Sidebar */}
      <div className="p-4 m-3 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 text-center relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-slate-900 text-xs font-black">
            <Zap className={`w-3.5 h-3.5 ${isFree ? 'text-amber-500' : 'text-emerald-500'}`} />
            <span>{isFree ? 'Plano Gratuito' : 'Plano Pro Ativo'}</span>
          </div>
          <span className={`w-2 h-2 rounded-full ${isFree ? 'bg-amber-400' : 'bg-emerald-500'} animate-ping`} />
        </div>

        <p className="text-[11px] text-slate-500 text-left mb-2.5">
          {isFree ? `${usageCurrent} de ${usageMax} propostas grátis usadas` : 'Propostas ilimitadas liberadas'}
        </p>

        {isFree ? (
          <div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-3">
              <div
                className="bg-amber-500 h-full rounded-full"
                style={{ width: `${Math.min(100, (usageCurrent / 3) * 100)}%` }}
              />
            </div>
            <button
              onClick={() => setIsUpgradeOpen(true)}
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-[11px] shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-emerald-200" />
              <span>Assinar Pro (R$ 49)</span>
            </button>
          </div>
        ) : (
          <div className="text-left text-[10px] text-emerald-700 font-bold flex items-center gap-1">
            <span>✓ Todos os recursos liberados</span>
          </div>
        )}
      </div>

      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        initialPlan="pro"
      />
    </aside>
  );
};
