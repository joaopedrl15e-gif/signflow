'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  FileText,
  User,
  DollarSign,
  Calendar,
  Layers,
  Loader2
} from 'lucide-react';
import { Proposal, ProposalItem, ProposalMilestone } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

export default function EditProposalPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [status, setStatus] = useState<Proposal['status']>('draft');

  // Client Info
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientDocument, setClientDocument] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  // Deliverables
  const [deliverables, setDeliverables] = useState<string[]>([]);
  const [newDeliverable, setNewDeliverable] = useState('');

  // Milestones
  const [milestones, setMilestones] = useState<ProposalMilestone[]>([]);

  // Items
  const [items, setItems] = useState<ProposalItem[]>([]);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [paymentTerms, setPaymentTerms] = useState('');
  const [notesAndConditions, setNotesAndConditions] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/proposals/${id}`)
        .then(res => res.json())
        .then((p: Proposal) => {
          if (p) {
            setTitle(p.title);
            setCategory(p.category || '');
            setIntroduction(p.introduction || '');
            setValidUntil(p.validUntil ? p.validUntil.split('T')[0] : '');
            setStatus(p.status);

            setClientName(p.client.name);
            setClientCompany(p.client.companyName || '');
            setClientEmail(p.client.email || '');
            setClientPhone(p.client.phone || '');
            setClientDocument(p.client.document || '');
            setClientAddress(p.client.address || '');

            setDeliverables(p.deliverables || []);
            setMilestones(p.milestones || []);
            setItems(p.items || []);
            setDiscountPercentage(p.discountPercentage || 0);
            setPaymentTerms(p.paymentTerms || '');
            setNotesAndConditions(p.notesAndConditions || '');
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  const subtotal = items.reduce((acc, item) => acc + (item.total || 0), 0);
  const discountAmount = (subtotal * (discountPercentage || 0)) / 100;
  const total = Math.max(0, subtotal - discountAmount);

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

  const handleUpdateItem = (itemId: string, field: keyof ProposalItem, value: any) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id !== itemId) return item;
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

  const handleRemoveItem = (itemId: string) => {
    setItems(prev => prev.filter(i => i.id !== itemId));
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
    try {
      setSaving(true);
      const payload = {
        title,
        category,
        introduction,
        status,
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

      const res = await fetch(`/api/proposals/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Erro ao salvar');
      router.push(`/dashboard/propostas/${id}`);
    } catch {
      alert('Erro ao salvar proposta');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-12 text-center text-xs text-slate-400">Carregando formulário de edição...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar</span>
        </button>

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-all disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          <span>Salvar Alterações</span>
        </button>
      </div>

      {/* Dados Gerais */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <FileText className="w-4 h-4 text-indigo-600" />
          <h2 className="text-sm font-bold text-slate-900">Editar Dados da Proposta</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Título do Projeto *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Validade da Proposta</label>
            <input
              type="date"
              required
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Introdução</label>
          <textarea
            rows={2}
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none"
          />
        </div>
      </div>

      {/* Dados Cliente */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <User className="w-4 h-4 text-indigo-600" />
          <h2 className="text-sm font-bold text-slate-900">Cliente</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Nome do Cliente *</label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Empresa</label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp *</label>
            <input
              type="text"
              required
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl outline-none"
            />
          </div>
        </div>
      </div>

      {/* Itens */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-sm font-bold text-slate-900">Itens e Valores</h2>
          <button
            type="button"
            onClick={handleAddItem}
            className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
          >
            + Adicionar Item
          </button>
        </div>

        <div className="space-y-3">
          {items.map(item => (
            <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-12 gap-3 items-center">
              <div className="col-span-6">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                  className="w-full px-2.5 py-1 text-xs font-semibold border border-slate-200 rounded-lg bg-white"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateItem(item.id, 'quantity', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-slate-200 rounded-lg text-center bg-white"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="number"
                  min="0"
                  value={item.unitPrice}
                  onChange={(e) => handleUpdateItem(item.id, 'unitPrice', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-slate-200 rounded-lg text-right bg-white"
                />
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <span className="text-xs font-bold text-slate-900">{formatCurrency(item.total)}</span>
                <button type="button" onClick={() => handleRemoveItem(item.id)} className="text-rose-500 hover:text-rose-700">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white flex justify-end gap-6 text-right">
          <div>
            <span className="text-[10px] text-slate-400 block">Total Final</span>
            <span className="text-xl font-bold text-emerald-400">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </form>
  );
}
