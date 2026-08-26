'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  ShieldCheck,
  Award,
  Scale,
  Phone,
  Sparkles,
  ChevronLeft,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const PRACTICE_AREAS = [
  { title: 'Direito Trabalhista & Empresarial', desc: 'Defesa de direitos de colaboradores e assessoria jurídica preventiva para empresas e indústrias.' },
  { title: 'Direito Civil & Família', desc: 'Inventários, divórcios, pensão alimentícia, contratos de compra e venda e regularização de imóveis.' },
  { title: 'Direito Tributário & Recuperação de Crédito', desc: 'Redução legal da carga tributária e recuperação de tributos pagos indevidamente.' },
  { title: 'Direito do Consumidor & Indenizações', desc: 'Ações indenizatórias por danos morais, problemas com bancos, voos cancelados e negativação indevida.' },
];

export default function AdvocaciaDemoPage() {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [caseDescription, setCaseDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dr. Silva! Gostaria de uma consultoria jurídica:%0A%0A• *Nome:* ${clientName}%0A• *WhatsApp:* ${clientPhone}%0A• *Resumo do Caso:* ${caseDescription}`;
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
      {/* 🚀 TOP BAR: DEMONSTRATION NOTICE BANNER 🚀 */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/40 hover:bg-black/60 px-2.5 py-1 rounded-lg transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden sm:inline">• Modelo de Demonstração: Escritório de Advocacia & Consultoria</span>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20modelo%20de%20Advocacia%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-3 py-1 rounded-lg font-black hover:bg-emerald-100 transition-colors flex items-center gap-1 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Header */}
      <header className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
          <Scale className="w-4 h-4 text-emerald-400" />
          <span>Assessoria Jurídica de Alta Complexidade • OAB/SP 123.456</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
          SILVA & ASSOCIADOS <span className="text-emerald-400">ADVOCACIA</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Mais de 15 anos de experiência defendendo os direitos e o patrimônio de pessoas e empresas com estratégia, ética e resultados comprovados.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#consulta"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>Falar com um Advogado Especialista</span>
          </a>
        </div>
      </header>

      {/* Practice Areas */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Especialidades</span>
            <h2 className="text-3xl font-black text-white">Áreas de Atuação</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={idx} className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-base font-black text-white">{area.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <section id="consulta" className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Agende uma Consulta Jurídica</h2>
            <p className="text-xs text-slate-400 mt-1">Atendimento sigiloso e resposta em menos de 15 minutos pelo WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Seu Nome Completo</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Carlos Eduardo Silveira"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp para Contato</label>
              <input
                type="text"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="(11) 98765-4321"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Breve Resumo do seu Caso</label>
              <textarea
                rows={3}
                required
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
                placeholder="Descreva brevemente sua dúvida ou situação jurídica..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Briefcase className="w-4 h-4" />
              <span>Enviar Consulta no WhatsApp</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
