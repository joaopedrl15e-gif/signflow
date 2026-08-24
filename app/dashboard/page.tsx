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
  FileText
} from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { StatusBadge } from '@/components/StatusBadge';
import { ShareModal } from '@/components/ShareModal';
import { UpgradeModal } from '@/components/UpgradeModal';
import { clientAuth } from '@/lib/clientAuth';

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
      {/* Welcome Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Olá, {user?.name || 'Gestor'}! 👋
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Aqui está a visão consolidada dos seus orçamentos e receita este mês.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/propostas/nova"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Criar Nova Proposta</span>
          </Link>
        </div>
      </div>

      {/* 🎯 Meta Mensal de Faturamento 🎯 */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900">Meta de Fechamento do Mês</h3>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {goalProgress}% atingida
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Você faturou <strong className="text-slate-900 font-bold">{formatCurrency(totalRevenue)}</strong> da sua meta de <strong className="text-slate-700">{formatCurrency(monthlyTarget)}</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsUpgradeOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Acelerar Vendas com Pro</span>
          </button>
        </div>

        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000 shadow-sm"
            style={{ width: `${Math.max(3, goalProgress)}%` }}
          />
        </div>
      </div>

      {/* 4 Cards de Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-emerald-200 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Faturado (Aceitos)</span>
            <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 tracking-tight">
            {formatCurrency(totalRevenue)}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{acceptedCount} {acceptedCount === 1 ? 'contrato formalizado' : 'contratos formalizados'}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-amber-200 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Em Negociação</span>
            <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 tracking-tight">
            {formatCurrency(pendingRevenue)}
          </div>
          <div className="text-[11px] text-amber-700 font-semibold mt-2">
            {safeProposals.filter(p => p && (p.status === 'sent' || p.status === 'viewed')).length} propostas na mão dos clientes
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-indigo-200 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Taxa de Conversão</span>
            <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 tracking-tight">
            {conversionRate}%
          </div>
          <div className="text-[11px] text-indigo-600 font-semibold mt-2">
            {viewedCount} propostas visualizadas
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-200 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Emitido</span>
            <div className="w-9 h-9 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <FileCheck2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 tracking-tight">
            {totalCount}
          </div>
          <div className="text-[11px] text-blue-600 font-semibold mt-2">
            Histórico completo ativo
          </div>
        </div>
      </div>

      {/* Propostas Recentes */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Propostas Recentes</h2>
            <p className="text-xs text-slate-500 mt-0.5">Gerencie os orçamentos e acompanhe o aceite</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {['all', 'accepted', 'viewed', 'sent', 'draft'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
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
            <p className="text-sm font-bold text-slate-900">Nenhuma proposta criada ainda</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Seu painel está limpo! Clique no botão abaixo para criar seu primeiro orçamento comercial e enviar para o cliente no WhatsApp.
            </p>
            <Link
              href="/dashboard/propostas/nova"
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Criar Minha Primeira Proposta</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        {proposal.code}
                      </span>
                      <StatusBadge status={proposal.status} />
                    </div>
                    <Link
                      href={`/dashboard/propostas/${proposal.id}`}
                      className="font-bold text-sm text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      {proposal.title}
                    </Link>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-slate-700">{proposal.client?.name || 'Cliente'}</span>
                      {proposal.client?.companyName && <span>• {proposal.client.companyName}</span>}
                      <span>• {formatDate(proposal.createdAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <div className="text-right sm:mr-4">
                    <div className="text-sm font-black text-slate-900">
                      {formatCurrency(proposal.total || 0)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {(proposal.items || []).length} {((proposal.items || []).length === 1) ? 'item' : 'itens'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedProposal(proposal);
                        setIsShareOpen(true);
                      }}
                      className="p-2 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all hover:scale-105"
                      title="Compartilhar no WhatsApp"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <Link
                      href={`/proposta/${proposal.id}`}
                      target="_blank"
                      className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                      title="Visualizar proposta"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <Link
                      href={`/dashboard/propostas/${proposal.id}`}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-colors"
                    >
                      Gerenciar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
