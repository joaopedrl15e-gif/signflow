import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ProposalStatus } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
}

export function formatDate(dateString: string): string {
  if (!dateString) return '-';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}

export function formatDateTime(dateString: string): string {
  if (!dateString) return '-';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch {
    return dateString;
  }
}

export function getStatusConfig(status: ProposalStatus) {
  switch (status) {
    case 'accepted':
      return {
        label: 'Aceita & Assinada',
        bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        dot: 'bg-emerald-500',
      };
    case 'viewed':
      return {
        label: 'Visualizada',
        bg: 'bg-blue-50 text-blue-700 border-blue-200',
        dot: 'bg-blue-500',
      };
    case 'sent':
      return {
        label: 'Enviada',
        bg: 'bg-amber-50 text-amber-700 border-amber-200',
        dot: 'bg-amber-500',
      };
    case 'declined':
      return {
        label: 'Recusada',
        bg: 'bg-rose-50 text-rose-700 border-rose-200',
        dot: 'bg-rose-500',
      };
    case 'expired':
      return {
        label: 'Expirada',
        bg: 'bg-zinc-100 text-zinc-600 border-zinc-200',
        dot: 'bg-zinc-400',
      };
    case 'draft':
    default:
      return {
        label: 'Rascunho',
        bg: 'bg-slate-100 text-slate-700 border-slate-200',
        dot: 'bg-slate-400',
      };
  }
}

export function generateWhatsAppMessage(proposalTitle: string, clientName: string, proposalUrl: string, companyName: string): string {
  const text = `Olá, *${clientName}*! Tudo bem? 👋\n\nAqui está a proposta comercial para o projeto *"${proposalTitle}"* preparada pela *${companyName}*.\n\nVocê pode visualizar todos os detalhes e assinar digitalmente pelo link seguro abaixo:\n🔗 ${proposalUrl}\n\nFico à disposição para qualquer dúvida!`;
  return encodeURIComponent(text);
}
