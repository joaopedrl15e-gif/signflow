'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Search, Share2, ExternalLink, Trash2, FileText } from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { StatusBadge } from '@/components/StatusBadge';
import { ShareModal } from '@/components/ShareModal';

export default function ProposalsPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    fetch('/api/proposals')
      .then(res => res.json())
      .then(data => {
        setProposals(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Deseja realmente excluir esta proposta?')) return;
    try {
      await fetch(`/api/proposals/${id}`, { method: 'DELETE' });
      setProposals(prev => prev.filter(p => p.id !== id));
    } catch {
      alert('Erro ao excluir proposta');
    }
  };

  const filtered = proposals.filter(p => {
    const term = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.code.toLowerCase().includes(term) ||
      p.client.name.toLowerCase().includes(term) ||
      (p.client.companyName && p.client.companyName.toLowerCase().includes(term))
    );
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Todas as Propostas Comerciais
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Gerencie, compartilhe e acompanhe todos os orçamentos emitidos.
          </p>
        </div>

        <Link
          href="/dashboard/propostas/nova"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold shadow-sm hover:from-emerald-500 hover:to-teal-500 transition-all"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>Criar Nova Proposta</span>
        </Link>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por cliente, título ou código (ex: PROP-2026-001)..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-xs"
        />
      </div>

      {/* List */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">Carregando...</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-sm font-bold text-slate-900">Nenhuma proposta encontrada</p>
            <p className="text-xs text-slate-500 mt-1">Tente ajustar seus termos de busca.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filtered.map(proposal => (
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
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                      <span className="font-semibold text-slate-700">{proposal.client.name}</span>
                      {proposal.client.companyName && <span>• {proposal.client.companyName}</span>}
                      <span>• {formatDate(proposal.createdAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <div className="text-right sm:mr-4">
                    <div className="text-sm font-black text-slate-900">
                      {formatCurrency(proposal.total)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      Validade: {formatDate(proposal.validUntil)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedProposal(proposal);
                        setIsShareOpen(true);
                      }}
                      className="p-2 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all hover:scale-105"
                      title="Enviar WhatsApp"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <Link
                      href={`/proposta/${proposal.id}`}
                      target="_blank"
                      className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                      title="Ver como cliente"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <Link
                      href={`/dashboard/propostas/${proposal.id}`}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-colors"
                    >
                      Gerenciar
                    </Link>

                    <button
                      onClick={() => handleDelete(proposal.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Excluir"
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
