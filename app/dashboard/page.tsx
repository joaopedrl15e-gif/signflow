'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  FileCheck2,
  Clock,
  Plus,
  Share2,
  ExternalLink,
  Target,
  Sparkles,
  Zap,
  CheckCircle2,
  FileText,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Eye,
  Crown,
  ChevronRight,
  Layers
} from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { StatusBadge } from '@/components/StatusBadge';
import { ShareModal } from '@/components/ShareModal';
import { UpgradeModal } from '@/components/UpgradeModal';
import { clientAuth } from '@/lib/clientAuth';

// Quick creation shortcuts
const QUICK_TEMPLATES = [
  { id: 'template-web-dev', title: 'Criação de Website & Landing Page', price: 'R$ 3.650', tag: 'Web Dev' },
  { id: 'template-traffic', title: 'Gestão de Tráfego Pago & Meta Ads', price: 'R$ 2.400/mês', tag: 'Tráfego' },
  { id: 'template-branding', title: 'Branding & Identidade Visual', price: 'R$ 4.200', tag: 'Design' },
  { id: 'template-consulting', title: 'Consultoria Estratégica Mensal', price: 'R$ 5.000/mês', tag: 'Consultoria' },
];

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // 1. Read user session instantly
    const active = clientAuth.getCurrentUser();
    if (active) {
      setUser(active);
    } else {
      fetch('/api/auth/me')
        .then(res => res.json())
        .then(data => {
          if (data.authenticated && data.user) setUser(data.user);
        })
        .catch(() => {});
    }

    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    try {
      const res = await fetch('/api/proposals');
      if (!res.ok) {
        setProposals([]);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setProposals(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch {
      setProposals([]);
      setLoading(false);
    }
  };

  const safeProposals = Array.isArray(proposals) ? proposals : [];
  const totalRevenue = safeProposals
    .filter(p => p && p.status === 'accepted')
    .reduce((acc, p) => acc + (Number(p.total) || 0), 0);

  const pendingRevenue = safeProposals
    .filter(p => p && (p.status === 'sent' || p.status === 'viewed'))
    .reduce((acc, p) => acc + (Number(p.total) || 0), 0);

  const acceptedCount = safeProposals.filter(p => p && p.status === 'accepted').length;
  const viewedCount = safeProposals.filter(p => p && (p.status === 'viewed' || p.status === 'accepted')).length;
  const totalCount = safeProposals.length;

  const conversionRate = totalCount > 0
    ? Math.round((acceptedCount / totalCount) * 100)
    : 0;

  const monthlyTarget = 15000;
  const goalProgress = Math.min(100, Math.round((totalRevenue / monthlyTarget) * 100));

  const filteredProposals = safeProposals.filter(p => {
    if (!p) return false;
    if (filterStatus === 'all') return true;
    return p.status === filterStatus;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* 🌟 Welcome Top Header Bar 🌟 */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider border border-emerald-200/80 inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Painel de Vendas Ativo</span>
            </span>
            <span className="text-xs text-slate-400 font-medium">• Hoje, {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Olá, {user?.name || 'Gestor'}! 👋
          </h1>
          <p className="text-xs text-slate-500 max-w-xl">
            Acompanhe o status das suas propostas comerciais e contratos assinados digitalmente.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 shrink-0">
          <Link
            href="/dashboard/propostas/nova"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-black shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Criar Nova Proposta</span>
          </Link>
        </div>
      </div>

      {/* 🎯 Meta Mensal de Fechamento de Contratos 🎯 */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-slate-900">Meta de Faturamento do Mês</h3>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {goalProgress}% concluída
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Você formalizou <strong className="text-emerald-700 font-bold">{formatCurrency(totalRevenue)}</strong> da meta mensal de <strong className="text-slate-700">{formatCurrency(monthlyTarget)}</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsUpgradeOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all shrink-0 hover:scale-105"
          >
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span>Desbloquear Recursos Pro</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000 shadow-sm"
            style={{ width: `${Math.max(4, goalProgress)}%` }}
          />
        </div>
      </div>

      {/* 📊 4 Cards de Métricas Executivas (Clean White) 📊 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Faturado */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Faturado (Aceitos)</span>
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {formatCurrency(totalRevenue)}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold mt-2.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>{acceptedCount} {acceptedCount === 1 ? 'contrato assinado' : 'contratos assinados'}</span>
          </div>
        </div>

        {/* Card 2: Em Negociação */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-amber-300 hover:shadow-sm transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Em Negociação</span>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {formatCurrency(pendingRevenue)}
          </div>
          <div className="text-xs text-amber-700 font-bold mt-2.5 flex items-center gap-1.5">
            <Send className="w-3.5 h-3.5" />
            <span>{safeProposals.filter(p => p && (p.status === 'sent' || p.status === 'viewed')).length} aguardando aceite</span>
          </div>
        </div>

        {/* Card 3: Taxa de Conversão */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Taxa de Conversão</span>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {conversionRate}%
          </div>
          <div className="text-xs text-indigo-600 font-bold mt-2.5 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>{viewedCount} propostas visualizadas</span>
          </div>
        </div>

        {/* Card 4: Total de Propostas */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Emitido</span>
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {totalCount}
          </div>
          <div className="text-xs text-blue-600 font-bold mt-2.5 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Validade jurídica ativa</span>
          </div>
        </div>
      </div>

      {/* 🚀 Lançador Rápido de Modelos Comerciais 🚀 */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              Criar Rápido a partir de Modelos Validados
            </h2>
          </div>
          <Link
            href="/dashboard/templates"
            className="text-xs text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
          >
            <span>Ver todos</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {QUICK_TEMPLATES.map((tpl) => (
            <Link
              key={tpl.id}
              href="/dashboard/propostas/nova"
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-black text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {tpl.tag}
                </span>
                <p className="font-bold text-xs text-slate-900 mt-2 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                  {tpl.title}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-700">{tpl.price}</span>
                <span className="text-emerald-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                  Usar <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 📄 Tabela de Propostas Recentes 📄 */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-black text-slate-900">Propostas & Orçamentos</h2>
            <p className="text-xs text-slate-500 mt-0.5">Gerencie os orçamentos e acompanhe a assinatura dos clientes</p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['all', 'accepted', 'viewed', 'sent', 'draft'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterStatus === st
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st === 'all' && 'Todas'}
                {st === 'accepted' && 'Aceitas'}
                {st === 'viewed' && 'Visualizadas'}
                {st === 'sent' && 'Enviadas'}
                {st === 'draft' && 'Rascunhos'}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">Carregando propostas...</div>
        ) : filteredProposals.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-slate-900">Nenhuma proposta encontrada</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Clique no botão abaixo para criar seu primeiro orçamento comercial e enviar direto para o cliente no WhatsApp.
            </p>
            <Link
              href="/dashboard/propostas/nova"
              className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-sm transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Criar Minha Primeira Proposta</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredProposals.map((proposal) => {
              const clientInitial = (proposal.client?.name || 'C').slice(0, 1).toUpperCase();
              return (
                <div
                  key={proposal.id}
                  className="p-5 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500/15 to-emerald-500/15 text-indigo-700 font-black text-sm flex items-center justify-center shrink-0 border border-indigo-100 mt-0.5">
                      {clientInitial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          {proposal.code}
                        </span>
                        <StatusBadge status={proposal.status} />
                      </div>
                      <Link
                        href={`/dashboard/propostas/${proposal.id}`}
                        className="font-bold text-sm text-slate-900 hover:text-indigo-600 transition-colors block line-clamp-1"
                      >
                        {proposal.title}
                      </Link>
                      <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-slate-800">{proposal.client?.name || 'Cliente'}</span>
                        {proposal.client?.companyName && <span>• {proposal.client.companyName}</span>}
                        <span>• Criada em {formatDate(proposal.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="text-right sm:mr-4">
                      <div className="text-sm font-black text-slate-900">
                        {formatCurrency(proposal.total || 0)}
                      </div>
                      <div className="text-[10px] text-slate-400 font-semibold">
                        {(proposal.items || []).length} {((proposal.items || []).length === 1) ? 'item' : 'itens'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedProposal(proposal);
                          setIsShareOpen(true);
                        }}
                        className="p-2 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all hover:scale-105 shadow-2xs"
                        title="Compartilhar no WhatsApp"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      <Link
                        href={`/proposta/${proposal.id}`}
                        target="_blank"
                        className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                        title="Visualizar proposta ao vivo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/dashboard/propostas/${proposal.id}`}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-colors shadow-2xs"
                      >
                        Gerenciar
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedProposal && (
        <ShareModal
          proposal={selectedProposal}
          isOpen={isShareOpen}
          onClose={() => {
            setIsShareOpen(false);
            setSelectedProposal(null);
          }}
        />
      )}

      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        initialPlan="pro"
      />
    </div>
  );
}
