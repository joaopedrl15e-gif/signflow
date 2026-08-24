'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Share2,
  ExternalLink,
  ShieldCheck,
  Building,
  User,
  Trash2,
  CheckCircle2,
  Eye,
  ChevronLeft
} from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate, formatDateTime } from '@/lib/utils';
import { StatusBadge } from '@/components/StatusBadge';
import { ShareModal } from '@/components/ShareModal';
import { PdfExportButton } from '@/components/PdfExportButton';

export default function ProposalDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/proposals/${id}`)
        .then(res => res.json())
        .then(data => {
          setProposal(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  const handleDelete = async () => {
    if (!confirm('Deseja realmente excluir esta proposta?')) return;
    try {
      await fetch(`/api/proposals/${id}`, { method: 'DELETE' });
      router.push('/dashboard/propostas');
    } catch {
      alert('Erro ao excluir');
    }
  };

  if (loading) {
    return <div className="p-12 text-center text-xs text-slate-400">Carregando detalhes da proposta...</div>;
  }

  if (!proposal) {
    return (
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
        <p className="text-sm font-bold text-slate-900">Proposta não encontrada</p>
        <Link href="/dashboard/propostas" className="text-xs text-indigo-600 font-bold mt-2 inline-block">
          Voltar para listagem
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/dashboard/propostas"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar para todas as propostas</span>
        </Link>

        <div className="flex items-center gap-2 flex-wrap">
          <PdfExportButton proposalCode={proposal.code} className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50" />

          <button
            onClick={() => setIsShareOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          <Link
            href={`/proposta/${proposal.id}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-sm transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Página do Cliente</span>
          </Link>

          <button
            onClick={handleDelete}
            className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            title="Excluir proposta"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Info Card Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                {proposal.code}
              </span>
              <StatusBadge status={proposal.status} />
              {proposal.viewCount > 0 && (
                <span className="text-xs text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border border-blue-200">
                  <Eye className="w-3 h-3" />
                  {proposal.viewCount} visualizações
                </span>
              )}
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {proposal.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Criada em {formatDate(proposal.createdAt)} • Validade até {formatDate(proposal.validUntil)}
            </p>
          </div>

          {/* Quick Total Box */}
          <div className="sm:text-right bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">
              Valor Total
            </span>
            <span className="text-2xl font-black text-slate-900">
              {formatCurrency(proposal.total)}
            </span>
          </div>
        </div>

        {/* Audit / Signature Banner (If signed) */}
        {proposal.signature && (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Documento Formalizado e Assinado Eletronicamente</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
              <div>
                <span className="block text-emerald-800/80 text-[10px] uppercase font-bold">Signatário</span>
                <span className="font-bold text-slate-900">{proposal.signature.signerName}</span>
                <span className="block text-[11px] text-slate-500">Doc: {proposal.signature.signerDocument}</span>
              </div>
              <div>
                <span className="block text-emerald-800/80 text-[10px] uppercase font-bold">Data & Hora do Aceite</span>
                <span className="font-bold text-slate-900">{formatDateTime(proposal.signature.signedAt)}</span>
                <span className="block text-[11px] text-slate-500">IP: {proposal.signature.ipAddress || '127.0.0.1'}</span>
              </div>
              <div>
                <span className="block text-emerald-800/80 text-[10px] uppercase font-bold">Assinatura Digital</span>
                {proposal.signature.signatureImage && (
                  <div className="bg-white p-1 rounded-lg border border-emerald-300 inline-block mt-1">
                    <img
                      src={proposal.signature.signatureImage}
                      alt="Assinatura"
                      className="h-8 max-w-[140px] object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Client & Issuer Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {/* Client Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              <User className="w-4 h-4 text-indigo-600" />
              <span>Dados do Cliente</span>
            </div>
            <div className="space-y-1 text-xs">
              <p className="font-bold text-slate-900 text-sm">{proposal.client.name}</p>
              {proposal.client.companyName && <p className="text-indigo-600 font-semibold">{proposal.client.companyName}</p>}
              <p className="text-slate-500">WhatsApp: <span className="text-slate-800 font-semibold">{proposal.client.phone}</span></p>
              {proposal.client.email && <p className="text-slate-500">E-mail: <span className="text-slate-700">{proposal.client.email}</span></p>}
              {proposal.client.document && <p className="text-slate-500">Documento: <span className="text-slate-700">{proposal.client.document}</span></p>}
            </div>
          </div>

          {/* Issuer Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              <Building className="w-4 h-4 text-indigo-600" />
              <span>Prestador / Emissor</span>
            </div>
            <div className="space-y-1 text-xs">
              <p className="font-bold text-slate-900 text-sm">{proposal.company.name}</p>
              {proposal.company.tagline && <p className="text-slate-500 italic">{proposal.company.tagline}</p>}
              <p className="text-slate-500">CNPJ/CPF: <span className="text-slate-800 font-semibold">{proposal.company.document}</span></p>
              <p className="text-slate-500">WhatsApp: <span className="text-slate-700">{proposal.company.phone}</span></p>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        {proposal.deliverables && proposal.deliverables.length > 0 && (
          <div className="pt-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Entregáveis & Escopo do Projeto
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {proposal.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Items Table */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Detalhamento do Orçamento
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Serviço / Item</th>
                  <th className="p-3.5 text-center">Qtd</th>
                  <th className="p-3.5 text-right">Valor Unitário</th>
                  <th className="p-3.5 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {proposal.items.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50">
                    <td className="p-3.5">
                      <p className="font-bold text-slate-900">{item.title}</p>
                      {item.description && <p className="text-[11px] text-slate-500 mt-0.5">{item.description}</p>}
                    </td>
                    <td className="p-3.5 text-center font-bold text-slate-600">{item.quantity}</td>
                    <td className="p-3.5 text-right text-slate-600">{formatCurrency(item.unitPrice)}</td>
                    <td className="p-3.5 text-right font-black text-slate-900">{formatCurrency(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white flex justify-end gap-8 text-right">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Subtotal</span>
              <span className="text-xs font-bold text-slate-300">{formatCurrency(proposal.subtotal)}</span>
            </div>
            {(proposal.discountAmount || 0) > 0 && (
              <div>
                <span className="text-[10px] text-emerald-400 block uppercase font-semibold">Desconto ({proposal.discountPercentage}%)</span>
                <span className="text-xs font-bold text-emerald-400">-{formatCurrency(proposal.discountAmount || 0)}</span>
              </div>
            )}
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Total Final</span>
              <span className="text-xl font-black text-emerald-400">{formatCurrency(proposal.total)}</span>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900 block mb-1">Forma de Pagamento</span>
            <p className="text-slate-600 leading-relaxed">{proposal.paymentTerms}</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900 block mb-1">Termos e Condições</span>
            <p className="text-slate-600 leading-relaxed">{proposal.notesAndConditions || 'Sem termos adicionais.'}</p>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        proposal={proposal}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
