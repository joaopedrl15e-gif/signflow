'use client';

import React, { useState, useEffect } from 'react';
import { Building, Save, Check, Loader2, CreditCard, Shield, Sparkles } from 'lucide-react';
import { CompanySettings } from '@/lib/types';

export default function SettingsPage() {
  const [settings, setSettings] = useState<CompanySettings>({
    name: '',
    tagline: '',
    email: '',
    phone: '',
    document: '',
    website: '',
    primaryColor: '#4f46e5',
    pixKey: '',
    bankDetails: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data) setSettings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 3000);
      }
    } catch {
      alert('Erro ao salvar dados');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-12 text-center text-xs text-slate-400">Carregando configurações...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Configurações da Empresa
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Essas informações aparecem no cabeçalho e rodapé de todas as propostas enviadas aos seus clientes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dados Institucionais */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Building className="w-4 h-4 text-indigo-600" />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">1. Identificação do Emissor</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nome da Empresa ou Profissional *
              </label>
              <input
                type="text"
                required
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                placeholder="Ex: Studio Nova Digital"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Slogan / Descrição Curta
              </label>
              <input
                type="text"
                value={settings.tagline || ''}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                placeholder="Ex: Desenvolvimento Web & Performance"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CNPJ ou CPF *
              </label>
              <input
                type="text"
                required
                value={settings.document}
                onChange={(e) => setSettings({ ...settings, document: e.target.value })}
                placeholder="00.000.000/0001-00"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Telefone Comercial *
              </label>
              <input
                type="text"
                required
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                placeholder="(11) 99999-8888"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                E-mail Comercial
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                placeholder="contato@empresa.com.br"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Website Institucional
              </label>
              <input
                type="text"
                value={settings.website || ''}
                onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                placeholder="https://meusite.com.br"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Dados Financeiros / Pix */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <CreditCard className="w-4 h-4 text-emerald-600" />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">2. Dados de Recebimento & Pix</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Chave Pix Principal
              </label>
              <input
                type="text"
                value={settings.pixKey || ''}
                onChange={(e) => setSettings({ ...settings, pixKey: e.target.value })}
                placeholder="Ex: CNPJ, e-mail ou celular"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Dados Bancários / Transferência
              </label>
              <input
                type="text"
                value={settings.bankDetails || ''}
                onChange={(e) => setSettings({ ...settings, bankDetails: e.target.value })}
                placeholder="Banco Inter (077) - Ag: 0001 - Conta: 123456-7"
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between pt-2">
          {savedSuccess && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
              <Check className="w-4 h-4" />
              <span>Configurações salvas com sucesso!</span>
            </div>
          )}
          {!savedSuccess && <div />}

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all disabled:opacity-50"
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Salvando...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Salvar Alterações</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
