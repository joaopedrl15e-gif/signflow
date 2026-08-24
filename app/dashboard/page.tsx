'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  DollarSign,
  FileCheck2,
  Clock,
  TrendingUp,
  Plus,
  Share2,
  ExternalLink,
  Eye,
  FileText,
  Sparkles,
  Target,
  Zap,
  AlertCircle,
  Activity,
  Trash2,
  Flame,
  ArrowRight
} from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { StatusBadge } from '@/components/StatusBadge';
import { ShareModal } from '@/components/ShareModal';

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const fetchProposals = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/proposals');
      const data = await res.json();
      setProposals(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching proposals:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Deseja realmente excluir esta proposta?')) return;
    try {
      await fetch(`/api/proposals/${id}`, { method: 'DELETE' });
      setProposals(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      alert('Erro ao excluir proposta');
    }
  };

  // Metrics calculations
  const totalRevenue = proposals
    .filter(p => p.status === 'accepted')
    .reduce((acc, p) => acc + (p.total || 0), 0);

  const pendingRevenue = proposals
    .filter(p => p.status === 'sent' || p.status === 'viewed')
    .reduce((acc, p) => acc + (p.total || 0), 0);

  const acceptedCount = proposals.filter(p => p.status === 'accepted').length;
  const totalCount = proposals.length;
  const conversionRate = totalCount > 0 ? Math.round((acceptedCount / totalCount) * 100) : 0;

  // Monthly Goal (Target: R$ 20.000)
  const monthlyTarget = 20000;
  const goalProgress = Math.min(100, Math.round((totalRevenue / monthlyTarget) * 100));

  const filteredProposals = proposals.filter(p => {
    if (filterStatus === 'all') return true;
    return p.status === filterStatus;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Sistema Operacional em Tempo Real</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Painel Executivo & Faturamento
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Acompanhe propostas enviadas, assinaturas coletadas e metas financeiras.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/templates"
            className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-all shadow-xs"
          >
            Modelos Rápidos
          </Link>
          <Link
            href="/dashboard/propostas/nova"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Nova Proposta</span>
          </Link>
        </div>
      </div>

      {/* 4 Crisp Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Faturado */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-emerald-300 transition-all relative overflow-hidden group shadow-sm hover:shadow-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Faturado
            </span>
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {formatCurrency(totalRevenue)}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{acceptedCount} contratos assinados</span>
          </div>
        </div>

        {/* Card 2: Em Negociação */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-amber-300 transition-all relative overflow-hidden group shadow-sm hover:shadow-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Em Negociação
            </span>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {formatCurrency(pendingRevenue)}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-600 font-bold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Aguardando resposta do cliente</span>
          </div>
        </div>

        {/* Card 3: Conversão */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-indigo-300 transition-all relative overflow-hidden group shadow-sm hover:shadow-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Taxa de Conversão
            </span>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {conversionRate}%
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-indigo-600 font-bold">
            <Zap className="w-3.5 h-3.5 text-indigo-500" />
            <span>Fechamento acelerado</span>
          </div>
        </div>

        {/* Card 4: Total de Propostas */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-slate-300 transition-all relative overflow-hidden group shadow-sm hover:shadow-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Criadas
            </span>
            <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center border border-slate-200 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {totalCount}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Links gerados no sistema</span>
          </div>
        </div>
      </div>

      {/* Monthly Goal & Funnel Progress Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meta do Mês */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Meta de Faturamento Mensal</h3>
            </div>
            <span className="text-xs font-black text-emerald-600">{goalProgress}%</span>
          </div>

          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${goalProgress}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-slate-500">
            <span>Faturado: <strong className="text-slate-900">{formatCurrency(totalRevenue)}</strong></span>
            <span>Meta: <strong className="text-slate-700">{formatCurrency(monthlyTarget)}</strong></span>
          </div>
        </div>

        {/* Funil Visual de Conversão */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-600" />
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Funil de Vendas de Propostas</h3>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Tempo real</span>
          </div>

          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-500 uppercase block font-bold">1. Criadas</span>
              <span className="text-lg font-black text-slate-900">{totalCount}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
              <span className="text-[10px] text-amber-700 uppercase block font-bold">2. Enviadas</span>
              <span className="text-lg font-black text-amber-700">
                {proposals.filter(p => p.status === 'sent' || p.status === 'viewed' || p.status === 'accepted').length}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
              <span className="text-[10px] text-blue-700 uppercase block font-bold">3. Vistas</span>
              <span className="text-lg font-black text-blue-700">
                {proposals.filter(p => p.status === 'viewed' || p.status === 'accepted').length}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] text-emerald-700 uppercase block font-bold">4. Assinadas</span>
              <span className="text-lg font-black text-emerald-700">{acceptedCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proposals List Section */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Propostas Comerciais Ativas</h2>
            <p className="text-xs text-slate-500 mt-0.5">Gerencie status, links no WhatsApp e downloads em PDF.</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterStatus === 'all'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({proposals.length})
            </button>
            <button
              onClick={() => setFilterStatus('accepted')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterStatus === 'accepted'
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Aceitas ({acceptedCount})
            </button>
            <button
              onClick={() => setFilterStatus('viewed')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterStatus === 'viewed'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vistas ({proposals.filter(p => p.status === 'viewed').length})
            </button>
            <button
              onClick={() => setFilterStatus('draft')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterStatus === 'draft'
                  ? 'bg-slate-700 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Rascunhos ({proposals.filter(p => p.status === 'draft').length})
            </button>
          </div>
        </div>

        {/* Proposals List */}
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">Carregando propostas...</div>
        ) : filteredProposals.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-slate-900">Nenhuma proposta encontrada</p>
            <p className="text-xs text-slate-500 mt-1 mb-4">Crie um novo orçamento para enviar no WhatsApp.</p>
            <Link
              href="/dashboard/propostas/nova"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-500"
            >
              <Plus className="w-4 h-4" />
              <span>Criar Proposta Agora</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        {proposal.code}
                      </span>
                      <StatusBadge status={proposal.status} />
                      {proposal.viewCount > 0 && (
                        <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 flex items-center gap-1 font-semibold">
                          <Eye className="w-3 h-3" />
                          {proposal.viewCount} visualizações
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/dashboard/propostas/${proposal.id}`}
                      className="font-bold text-sm text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      {proposal.title}
                    </Link>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                      <span className="font-semibold text-slate-700">{proposal.client.name}</span>
                      {proposal.client.companyName && (
                        <>
                          <span>•</span>
                          <span>{proposal.client.companyName}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{formatDate(proposal.createdAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <div className="text-right sm:mr-4">
                    <div className="text-sm font-black text-slate-900">
                      {formatCurrency(proposal.total)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {proposal.items.length} {proposal.items.length === 1 ? 'item' : 'itens'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Share on WhatsApp */}
                    <button
                      onClick={() => {
                        setSelectedProposal(proposal);
                        setIsShareOpen(true);
                      }}
                      title="Compartilhar no WhatsApp"
                      className="p-2 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all hover:scale-105"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    {/* View as Client */}
                    <Link
                      href={`/proposta/${proposal.id}`}
                      target="_blank"
                      title="Ver como cliente final"
                      className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    {/* Manage in Admin */}
                    <Link
                      href={`/dashboard/propostas/${proposal.id}`}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold shadow-xs transition-all"
                    >
                      Gerenciar
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={(e) => handleDelete(proposal.id, e)}
                      title="Excluir"
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Share Modal */}
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
    </div>
  );
}
