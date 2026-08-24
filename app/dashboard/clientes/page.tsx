'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Search, Phone, Mail, FileText, Plus } from 'lucide-react';
import { Proposal } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface ClientAggregated {
  name: string;
  companyName?: string;
  email?: string;
  phone: string;
  document?: string;
  proposalsCount: number;
  totalWon: number;
  proposals: Proposal[];
}

export default function ClientsPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/proposals')
      .then(res => res.json())
      .then(data => {
        setProposals(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const clientMap = new Map<string, ClientAggregated>();

  proposals.forEach(p => {
    const key = p.client.name.toLowerCase().trim();
    const existing = clientMap.get(key);

    const isAccepted = p.status === 'accepted';
    const amount = isAccepted ? p.total : 0;

    if (existing) {
      existing.proposalsCount += 1;
      existing.totalWon += amount;
      existing.proposals.push(p);
      if (!existing.companyName && p.client.companyName) existing.companyName = p.client.companyName;
      if (!existing.email && p.client.email) existing.email = p.client.email;
      if (!existing.phone && p.client.phone) existing.phone = p.client.phone;
    } else {
      clientMap.set(key, {
        name: p.client.name,
        companyName: p.client.companyName,
        email: p.client.email,
        phone: p.client.phone,
        document: p.client.document,
        proposalsCount: 1,
        totalWon: amount,
        proposals: [p],
      });
    }
  });

  const clients = Array.from(clientMap.values()).filter(c => {
    const term = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(term) ||
      (c.companyName && c.companyName.toLowerCase().includes(term)) ||
      (c.phone && c.phone.includes(term))
    );
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Base de Clientes
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Histórico consolidado de clientes e faturamento gerado por conta.
          </p>
        </div>

        <Link
          href="/dashboard/propostas/nova"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold shadow-sm hover:from-emerald-500 hover:to-teal-500 transition-all"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>Nova Proposta para Cliente</span>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar cliente por nome, empresa ou telefone..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-xs"
        />
      </div>

      {/* Clients Cards Grid */}
      {loading ? (
        <div className="p-12 text-center text-xs text-slate-400">Carregando clientes...</div>
      ) : clients.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
          <p className="text-sm font-bold text-slate-900">Nenhum cliente cadastrado ainda</p>
          <p className="text-xs text-slate-500 mt-1">Ao criar sua primeira proposta, os dados do cliente serão salvos aqui automaticamente.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {client.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 line-clamp-1">{client.name}</h3>
                    {client.companyName && (
                      <p className="text-xs text-indigo-600 font-semibold line-clamp-1">{client.companyName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 my-4">
                  {client.phone && (
                    <p className="flex items-center gap-2 text-slate-500">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-800 font-medium">{client.phone}</span>
                    </p>
                  )}
                  {client.email && (
                    <p className="flex items-center gap-2 text-slate-500">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span className="line-clamp-1 text-slate-700">{client.email}</span>
                    </p>
                  )}
                  <p className="flex items-center gap-2 text-slate-500">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>{client.proposalsCount} {client.proposalsCount === 1 ? 'proposta emitida' : 'propostas emitidas'}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">Total Faturado</span>
                  <span className="text-sm font-black text-emerald-600">
                    {formatCurrency(client.totalWon)}
                  </span>
                </div>

                {client.phone && (
                  <a
                    href={`https://wa.me/55${client.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Conversar no WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
