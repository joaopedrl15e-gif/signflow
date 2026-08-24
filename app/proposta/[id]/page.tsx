'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  Download,
  Building2,
  FileCheck,
  Clock,
  ExternalLink,
  Lock,
  ArrowRight,
  Printer
} from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate, formatDateTime, getStatusConfig } from '@/lib/utils';
import { StatusBadge } from '@/components/StatusBadge';
import { SignatureModal } from '@/components/SignatureModal';

export default function PublicProposalPage() {
  const params = useParams();
  const id = params.id as string;

  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      // Register view
      fetch(`/api/proposals/${id}/view`, { method: 'POST' }).catch(() => {});

      // Fetch proposal
      fetch(`/api/proposals/${id}`)
        .then(res => res.json())
        .then(data => {
          setProposal(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-500 font-medium">Carregando proposta comercial segura...</p>
        </div>
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl max-w-md w-full text-center shadow-lg border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Proposta não encontrada</h2>
          <p className="text-xs text-slate-500">O link informado pode ter expirado ou não existir.</p>
        </div>
      </div>
    );
  }

  const isAccepted = proposal.status === 'accepted';
  const cleanCompanyPhone = proposal.company.phone ? proposal.company.phone.replace(/\D/g, '') : '';
  const companyWhatsappUrl = `https://wa.me/55${cleanCompanyPhone}?text=${encodeURIComponent(
    `Olá! Estou visualizando a proposta "${proposal.title}" (${proposal.code}) e gostaria de tirar uma dúvida.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-100/80 py-6 sm:py-12 px-4 sm:px-6 selection:bg-indigo-500 selection:text-white">
      {/* Top Floating Actions Bar (hidden in print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between no-print">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ambiente Seguro e Criptografado</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / Salvar PDF</span>
          </button>

          {proposal.company.phone && (
            <a
              href={companyWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Dúvidas no WhatsApp</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Proposal Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
        {/* Banner Header */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-3">
                <span>Proposta Comercial</span>
                <span>•</span>
                <span className="font-mono text-emerald-300">{proposal.code}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
                {proposal.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Preparada com exclusividade por <span className="text-white font-semibold">{proposal.company.name}</span>
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <StatusBadge status={proposal.status} className="text-sm py-1.5 px-3.5" />
              <p className="text-[11px] text-slate-400 mt-2">
                Válida até <span className="text-slate-200 font-semibold">{formatDate(proposal.validUntil)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Proposal Body */}
        <div className="p-8 sm:p-12 space-y-10">
          {/* Parties Header Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            {/* Contratante */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Apresentado a (Cliente):
              </span>
              <p className="text-base font-bold text-slate-900">{proposal.client.name}</p>
              {proposal.client.companyName && (
                <p className="text-xs font-semibold text-indigo-700 mt-0.5">{proposal.client.companyName}</p>
              )}
              {proposal.client.document && (
                <p className="text-xs text-slate-500 mt-1">Doc: {proposal.client.document}</p>
              )}
              {proposal.client.email && (
                <p className="text-xs text-slate-500">E-mail: {proposal.client.email}</p>
              )}
            </div>

            {/* Emissor */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Emitido por:
              </span>
              <p className="text-base font-bold text-slate-900">{proposal.company.name}</p>
              {proposal.company.tagline && (
                <p className="text-xs text-slate-500 mt-0.5">{proposal.company.tagline}</p>
              )}
              <p className="text-xs text-slate-500 mt-1">CNPJ/CPF: {proposal.company.document}</p>
              <p className="text-xs text-slate-500">Contato: {proposal.company.phone}</p>
            </div>
          </div>

          {/* Introduction */}
          {proposal.introduction && (
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Resumo do Projeto & Objetivos
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {proposal.introduction}
              </p>
            </div>
          )}

          {/* Deliverables / Scope */}
          {proposal.deliverables && proposal.deliverables.length > 0 && (
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Escopo dos Serviços & Entregáveis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {proposal.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milestones / Timeline */}
          {proposal.milestones && proposal.milestones.length > 0 && (
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Cronograma de Execução Estimado
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {proposal.milestones.map((m, idx) => (
                  <div
                    key={m.id || idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 relative"
                  >
                    <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1">
                      Etapa 0{idx + 1}
                    </div>
                    <p className="text-xs font-bold text-slate-900">{m.title}</p>
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{m.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Table */}
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Investimento & Valores
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Item / Descrição</th>
                    <th className="p-4 text-center">Qtd</th>
                    <th className="p-4 text-right">Valor Unitário</th>
                    <th className="p-4 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {proposal.items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{item.title}</p>
                        {item.description && (
                          <p className="text-[11px] text-slate-500 mt-0.5">{item.description}</p>
                        )}
                      </td>
                      <td className="p-4 text-center font-medium text-slate-600">{item.quantity}</td>
                      <td className="p-4 text-right text-slate-600">{formatCurrency(item.unitPrice)}</td>
                      <td className="p-4 text-right font-bold text-slate-900">{formatCurrency(item.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Financial Summary */}
            <div className="mt-4 p-5 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span>Valores válidos até {formatDate(proposal.validUntil)}</span>
              </div>
              <div className="flex items-center gap-6 text-right">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Subtotal</span>
                  <span className="text-xs font-semibold text-slate-300">{formatCurrency(proposal.subtotal)}</span>
                </div>
                {(proposal.discountAmount || 0) > 0 && (
                  <div>
                    <span className="text-[10px] text-emerald-400 block uppercase">Desconto</span>
                    <span className="text-xs font-semibold text-emerald-400">
                      -{formatCurrency(proposal.discountAmount || 0)}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Total do Investimento</span>
                  <span className="text-2xl font-black text-emerald-400">{formatCurrency(proposal.total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms & Payment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Condições de Pagamento
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{proposal.paymentTerms}</p>
              {proposal.company.pixKey && (
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs">
                  <span className="text-slate-500">Chave Pix:</span>{' '}
                  <span className="font-mono font-bold text-slate-800">{proposal.company.pixKey}</span>
                </div>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Termos Gerais & Cláusulas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {proposal.notesAndConditions || 'Sem termos adicionais.'}
              </p>
            </div>
          </div>

          {/* Acceptance & Signature Area */}
          <div className="pt-6 border-t border-slate-200">
            {isAccepted && proposal.signature ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-emerald-950">
                    Proposta Aceita & Assinada com Sucesso!
                  </h3>
                  <p className="text-xs text-emerald-800 mt-1">
                    Formalizada em {formatDateTime(proposal.signature.signedAt)} por {proposal.signature.signerName} ({proposal.signature.signerDocument}).
                  </p>
                </div>

                {proposal.signature.signatureImage && (
                  <div className="bg-white p-3 rounded-2xl border border-emerald-200 inline-block shadow-sm">
                    <img
                      src={proposal.signature.signatureImage}
                      alt="Assinatura Digital"
                      className="h-16 max-w-xs object-contain mx-auto"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl no-print">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-emerald-300 text-xs font-semibold mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Pronto para dar o próximo passo?</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Aceite esta proposta e inicie seu projeto
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    Assine digitalmente na tela em menos de 1 minuto sem precisar imprimir ou escanear nada.
                  </p>
                </div>

                <button
                  onClick={() => setIsSignModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 shrink-0"
                >
                  <FileCheck className="w-5 h-5" />
                  <span>Aceitar e Assinar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-6 text-center text-xs text-slate-400">
          <p>
            Documento gerado eletronicamente via <strong>SignFlow</strong> • {proposal.company.name}
          </p>
        </div>
      </div>

      {/* Signature Modal */}
      <SignatureModal
        proposal={proposal}
        isOpen={isSignModalOpen}
        onClose={() => setIsSignModalOpen(false)}
        onSuccess={(updatedProposal) => {
          setProposal(updatedProposal);
          setIsSignModalOpen(false);
        }}
      />
    </div>
  );
}
