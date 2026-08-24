'use client';

import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { Proposal } from '@/lib/types';
import { generateWhatsAppMessage } from '@/lib/utils';

interface ShareModalProps {
  proposal: Proposal;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ proposal, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const proposalUrl = `${baseUrl}/proposta/${proposal.id}`;
  const whatsappText = generateWhatsAppMessage(
    proposal.title,
    proposal.client.name,
    proposalUrl,
    proposal.company.name
  );
  
  const cleanPhone = proposal.client.phone.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/55${cleanPhone}?text=${whatsappText}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(proposalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Compartilhar Proposta</h3>
          <p className="text-xs text-slate-500 mt-1">
            Envie o link seguro para <span className="font-semibold text-slate-700">{proposal.client.name}</span> visualizar e assinar.
          </p>
        </div>

        {/* WhatsApp Card */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Envio Rápido pelo WhatsApp
            </span>
            <span className="text-[11px] font-medium text-emerald-700">
              {proposal.client.phone || 'Sem telefone'}
            </span>
          </div>
          <p className="text-xs text-emerald-800/80 mb-3">
            Abre o WhatsApp com uma mensagem formatada e personalizada para seu cliente.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enviar no WhatsApp do Cliente</span>
          </a>
        </div>

        {/* Direct Link Box */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Link Público Exclusivo
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={proposalUrl}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-mono select-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>
        </div>

        {/* Preview Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">Quer ver como o cliente enxerga?</span>
          <a
            href={proposalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>Abrir visualização</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
