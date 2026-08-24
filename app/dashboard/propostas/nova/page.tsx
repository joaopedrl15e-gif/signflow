'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Plus,
  Trash2,
  CheckCircle,
  FileText,
  User,
  DollarSign,
  Calendar,
  Layers,
  ArrowRight,
  Loader2,
  ChevronLeft,
  Lock
} from 'lucide-react';
import { PROPOSAL_TEMPLATES } from '@/lib/templates';
import { ProposalItem, ProposalMilestone, ProposalTemplate } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { UpgradeModal } from '@/components/UpgradeModal';

export default function NewProposalPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('template-web-dev');

  // Subscription verification
  const [subscription, setSubscription] = useState<any>(null);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/subscription')
      .then(res => res.json())
      .then(data => {
        setSubscription(data);
        if (data && !data.usage?.canCreateMore) {
          setIsUpgradeModalOpen(true);
        }
      })
      .catch(() => {});
  }, []);

  // Form State
  const [title, setTitle] = useState('Criação de Website & Landing Page de Alta Conversão');
  const [category, setCategory] = useState('Desenvolvimento Web');
  const [introduction, setIntroduction] = useState(
    'Apresentamos a proposta comercial com as melhores práticas de design e desenvolvimento para impulsionar suas vendas.'
  );

  // Client Info
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientDocument, setClientDocument] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  // Validity
  const defaultValidUntil = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const [validUntil, setValidUntil] = useState(defaultValidUntil);

  // Deliverables
  const [deliverables, setDeliverables] = useState<string[]>([
    'Design moderno exclusivo alinhado à identidade visual da marca',
    'Desenvolvimento 100% responsivo (smartphones e desktop)',
    'Otimização técnica para carregamento ultra-rápido (Core Web Vitals)',
    'Integração com formulários, botão flutuante de WhatsApp e Pixel'
  ]);
  const [newDeliverable, setNewDeliverable] = useState('');

  // Milestones
  const [milestones, setMilestones] = useState<ProposalMilestone[]>([
    { id: 'm1', title: 'Alinhamento & Wireframe', duration: '5 dias úteis' },
    { id: 'm2', title: 'Design Visual & Aprovação', duration: '7 dias úteis' },
    { id: 'm3', title: 'Programação & Integrações', duration: '10 dias úteis' },
    { id: 'm4', title: 'Publicação & Go-Live', duration: '3 dias úteis' }
  ]);

  // Items & Pricing
  const [items, setItems] = useState<ProposalItem[]>([
    { id: '1', title: 'Design UI/UX & Protótipo Interativo', description: 'Layout completo e responsivo', quantity: 1, unitPrice: 1200, total: 1200 },
    { id: '2', title: 'Desenvolvimento Front-End', description: 'Codificação Next.js e Tailwind', quantity: 1, unitPrice: 2000, total: 2000 },
    { id: '3', title: 'Configurações de Domínio e Tags', description: 'Google Analytics 4 e Meta Pixel', quantity: 1, unitPrice: 450, total: 450 }
  ]);

  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [paymentTerms, setPaymentTerms] = useState(
    '50% de entrada no início do projeto e 50% na entrega e publicação do site (Pix ou Boleto Bancário).'
  );
  const [notesAndConditions, setNotesAndConditions] = useState(
    'Esta proposta tem validade de 15 dias. Alterações fora do escopo inicial acordado serão orçadas à parte.'
  );

  // Calculate totals
  const subtotal = items.reduce((acc, item) => acc + (item.total || 0), 0);
  const discountAmount = (subtotal * (discountPercentage || 0)) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  // Apply Template
  const handleApplyTemplate = (template: ProposalTemplate) => {
    setSelectedTemplateId(template.id);
    setTitle(template.title);
    setCategory(template.category);
    setIntroduction(template.description);
    setDeliverables([...template.deliverables]);
    setMilestones([...template.milestones]);
    setPaymentTerms(template.paymentTerms);
    setNotesAndConditions(template.notesAndConditions);

    const newItems: ProposalItem[] = template.items.map((item, idx) => ({
      id: String(idx + 1),
      title: item.title,
      description: item.description,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      total: item.quantity * item.unitPrice,
    }));
    setItems(newItems);
  };

  const handleAddItem = () => {
    const newItem: ProposalItem = {
      id: String(Date.now()),
      title: 'Novo Serviço / Item',
      description: '',
      quantity: 1,
      unitPrice: 500,
      total: 500,
    };
    setItems(prev => [...prev, newItem]);
  };

  const handleUpdateItem = (id: string, field: keyof ProposalItem, value: any) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          const qty = field === 'quantity' ? Number(value) : item.quantity;
          const price = field === 'unitPrice' ? Number(value) : item.unitPrice;
          updated.total = qty * price;
        }
        return updated;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const handleAddDeliverable = () => {
    if (!newDeliverable.trim()) return;
    setDeliverables(prev => [...prev, newDeliverable.trim()]);
    setNewDeliverable('');
  };

  const handleRemoveDeliverable = (index: number) => {
    setDeliverables(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (subscription && !subscription.usage?.canCreateMore) {
      setIsUpgradeModalOpen(true);
      return;
    }

    if (!clientName.trim()) {
      alert('Por favor, informe o nome do cliente.');
      return;
    }
    if (items.length === 0) {
      alert('Adicione pelo menos 1 item ao orçamento.');
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        title,
        category,
        introduction,
        validUntil: new Date(validUntil).toISOString(),
        client: {
          name: clientName,
          companyName: clientCompany,
          email: clientEmail,
          phone: clientPhone,
          document: clientDocument,
          address: clientAddress,
        },
        deliverables,
        milestones,
        items,
        subtotal,
        discountPercentage,
        discountAmount,
        total,
        paymentTerms,
        notesAndConditions,
      };

      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Falha ao criar proposta');
      const data = await res.json();
      router.push(`/dashboard/propostas/${data.id}`);
    } catch (err: any) {
      alert(err.message || 'Erro ao criar proposta');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLimitReached = subscription && !subscription.usage?.canCreateMore;

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Limit Reached Warning Alert */}
      {isLimitReached && (
        <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-900">Você atingiu o limite de 3 propostas gratuitas!</p>
              <p className="text-xs text-amber-700">Faça o upgrade para o Plano Pro por R$ 49/mês para continuar criando orçamentos ilimitados.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsUpgradeModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-sm transition-all hover:scale-105 shrink-0"
          >
            Fazer Upgrade Agora
          </button>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <button
              type="button"
              onClick={() => router.back()}
              className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors font-medium"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </button>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Criador de Propostas
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Selecione um modelo validado ou preencha os dados personalizados.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gerando Link...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Gerar e Compartilhar Proposta</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 1. Modelos Rápidos */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Modelos de Alto Fechamento (Clique para preencher)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PROPOSAL_TEMPLATES.map((tpl) => {
            const isSelected = selectedTemplateId === tpl.id;
            return (
              <button
                key={tpl.id}
                type="button"
                onClick={() => handleApplyTemplate(tpl)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-sm ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded-full">
                  {tpl.category}
                </span>
                <p className="font-bold text-xs text-slate-900 mt-2.5 line-clamp-1">{tpl.title}</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{tpl.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Dados Gerais da Proposta */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <FileText className="w-4 h-4 text-indigo-600" />
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">1. Dados do Projeto</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Título do Projeto *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Validade da Proposta</label>
            <input
              type="date"
              required
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Resumo Executivo / Objetivos</label>
          <textarea
            rows={2}
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
          />
        </div>
      </div>

      {/* 3. Dados do Cliente */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <User className="w-4 h-4 text-emerald-600" />
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">2. Dados do Cliente / Contratante</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Nome do Cliente *</label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Ex: Dra. Mariana Albuquerque"
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Empresa / Clínica</label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              placeholder="Ex: Clínica OdontoPrime"
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp do Cliente *</label>
            <input
              type="text"
              required
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="(11) 98765-4321"
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail</label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="cliente@email.com"
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">CPF ou CNPJ</label>
            <input
              type="text"
              value={clientDocument}
              onChange={(e) => setClientDocument(e.target.value)}
              placeholder="00.000.000/0001-00"
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Cidade / Estado</label>
            <input
              type="text"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              placeholder="São Paulo - SP"
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
            />
          </div>
        </div>
      </div>

      {/* 4. Escopo & Entregáveis */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Layers className="w-4 h-4 text-indigo-600" />
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">3. Entregáveis & Escopo</h2>
        </div>

        <div className="space-y-2">
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const updated = [...deliverables];
                  updated[idx] = e.target.value;
                  setDeliverables(updated);
                }}
                className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveDeliverable(idx)}
                className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <input
            type="text"
            value={newDeliverable}
            onChange={(e) => setNewDeliverable(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddDeliverable();
              }
            }}
            placeholder="Digite um novo item e aperte Enter ou clique em Adicionar..."
            className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            onClick={handleAddDeliverable}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>

      {/* 5. Tabela de Itens e Valores */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">4. Orçamento & Itens</h2>
          </div>
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Adicionar Item</span>
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
            >
              <div className="sm:col-span-6 space-y-1">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                  placeholder="Nome do serviço"
                  className="w-full px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  value={item.description || ''}
                  onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                  placeholder="Descrição detalhada..."
                  className="w-full px-3 py-1 text-[11px] text-slate-500 bg-white border border-slate-200 rounded-lg outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] text-slate-400 mb-0.5">Qtd.</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateItem(item.id, 'quantity', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-center font-bold text-slate-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] text-slate-400 mb-0.5">Valor Unit. (R$)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={(e) => handleUpdateItem(item.id, 'unitPrice', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-right font-bold text-emerald-700"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-2">
                <div className="text-right">
                  <span className="block text-[10px] text-slate-400">Total</span>
                  <span className="text-xs font-black text-slate-900">{formatCurrency(item.total)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals Summary Banner */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-300 font-semibold">Desconto Comercial (%):</span>
            <input
              type="number"
              min="0"
              max="100"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(Number(e.target.value))}
              className="w-16 px-2 py-1 text-xs bg-slate-800 text-white border border-slate-700 rounded-lg text-center font-black"
            />
          </div>

          <div className="flex items-center gap-6 text-right">
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">Subtotal</span>
              <span className="text-xs font-bold text-slate-300">{formatCurrency(subtotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div>
                <span className="text-[10px] text-emerald-400 uppercase block">Desconto</span>
                <span className="text-xs font-bold text-emerald-400">-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">Valor Total Final</span>
              <span className="text-2xl font-black text-emerald-400">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Prazos & Condições de Pagamento */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Calendar className="w-4 h-4 text-indigo-600" />
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">5. Pagamento & Termos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Formas de Pagamento & Parcelamento
            </label>
            <textarea
              rows={3}
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Observações, Cláusulas e Validade
            </label>
            <textarea
              rows={3}
              value={notesAndConditions}
              onChange={(e) => setNotesAndConditions(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Submit Action */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-black shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5 text-emerald-200" />
          <span>Salvar e Gerar Link da Proposta</span>
        </button>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        initialPlan="pro"
      />
    </form>
  );
}
