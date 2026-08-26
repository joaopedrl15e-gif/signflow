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
  CheckCircle2,
  Lock,
  Building2,
  FileCheck
} from 'lucide-react';

const PRACTICE_AREAS = [
  {
    title: 'Direito Trabalhista & Empresarial',
    desc: 'Defesa de direitos de colaboradores, cálculo de rescisões e assessoria jurídica preventiva para empresas, indústrias e comércios.',
    badge: 'ALTA COMPLEXIDADE',
  },
  {
    title: 'Direito Civil, Imobiliário & Família',
    desc: 'Inventários judiciais e extrajudiciais rápidos, divórcios, partilha de bens, regularização de imóveis e contratos de compra e venda.',
    badge: 'PATRIMÔNIO & FAMÍLIA',
  },
  {
    title: 'Direito Tributário & Recuperação de Crédito',
    desc: 'Planejamento tributário estratégico, anulação de execuções fiscais e recuperação de tributos pagos indevidamente nos últimos 5 anos.',
    badge: 'ECONOMIA EMPRESARIAL',
  },
  {
    title: 'Direito do Consumidor & Indenizações',
    desc: 'Ações contra bancos por juros abusivos, negativação indevida no SPC/Serasa, cancelamento de voos e falhas graves na prestação de serviços.',
    badge: 'DEFESA DO CONSUMIDOR',
  },
];

const PARTNERS = [
  {
    name: 'Dr. Carlos Eduardo Silva',
    role: 'Sócio Fundador • Especialista em Direito Empresarial e Tributário',
    oab: 'OAB/SP 123.456 • Mais de 15 anos de atuação nos tribunais superiores',
  },
  {
    name: 'Dra. Beatriz Menezes',
    role: 'Sócia • Especialista em Direito Civil, Imobiliário e Família',
    oab: 'OAB/SP 234.567 • Pós-graduada pela PUC-SP',
  },
];

const SUCCESS_METRICS = [
  { number: '+15 Anos', label: 'De Tradição Jurídica' },
  { number: '+2.800', label: 'Causas Atendidas' },
  { number: '98.4%', label: 'Índice de Êxito em Acordos' },
  { number: '+R$ 18M', label: 'Recuperados para Clientes' },
];

export default function AdvocaciaDemoPage() {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [caseArea, setCaseArea] = useState('Direito Trabalhista & Empresarial');
  const [caseDescription, setCaseDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dr. Silva! Gostaria de uma consultoria jurídica sigilosa:%0A%0A• *Nome:* ${clientName}%0A• *WhatsApp:* ${clientPhone}%0A• *Área:* ${caseArea}%0A• *Resumo do Caso:* ${caseDescription}`;
    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white pb-24">
      {/* 🚀 TOP STICKY BAR: CONVERSÃO & DEMONSTRAÇÃO 🚀 */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden md:inline font-mono">• Demonstração de Site para Escritório de Advocacia</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20o%20modelo%20de%20Advocacia%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-4 py-1.5 rounded-xl font-black hover:bg-emerald-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Header */}
      <header className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/15 border border-emerald-600/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
          <Scale className="w-4 h-4 text-emerald-400" />
          <span>Assessoria Jurídica Estratégica & Contencioso de Alto Impacto</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
          SILVA & ASSOCIADOS <span className="text-emerald-400">ADVOCACIA</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Mais de 15 anos defendendo os direitos e o patrimônio de pessoas físicas e empresas com rigor técnico, sigilo absoluto e resultados comprovados nos tribunais.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#consulta"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition-all hover:scale-105"
          >
            <Lock className="w-4 h-4" />
            <span>Agendar Consulta Jurídica Sigilosa</span>
          </a>
          <a
            href="https://wa.me/5517992537024?text=Olá!%20Gostaria%20de%20falar%20com%20um%20advogado%20de%20plantão."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp de Plantão</span>
          </a>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-10 mt-10 border-t border-slate-800/80">
          {SUCCESS_METRICS.map((m, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">{m.number}</p>
              <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Practice Areas */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Especialidades</span>
            <h2 className="text-3xl font-black text-white">Nossas Áreas de Atuação</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={idx} className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-all shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="text-base font-black text-white">{area.title}</h3>
                  </div>
                </div>
                <span className="inline-block text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {area.badge}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Corpo Jurídico</span>
            <h3 className="text-2xl font-black text-white">Advogados Sócios</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PARTNERS.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h4 className="font-black text-white text-base">{p.name}</h4>
                </div>
                <p className="text-xs text-emerald-400 font-medium">{p.role}</p>
                <p className="text-[11px] text-slate-400">{p.oab}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <section id="consulta" className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Solicite uma Análise do seu Caso</h2>
            <p className="text-xs text-slate-400 mt-1">Atendimento 100% confidencial sob sigilo profissional da OAB.</p>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp para Contato</label>
                <input
                  type="text"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="(17) 99253-7024"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Área do Direito</label>
                <select
                  value={caseArea}
                  onChange={(e) => setCaseArea(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
                >
                  <option>Direito Trabalhista & Empresarial</option>
                  <option>Direito Civil, Imobiliário & Família</option>
                  <option>Direito Tributário & Recuperação</option>
                  <option>Direito do Consumidor & Indenizações</option>
                </select>
              </div>
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
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-4"
            >
              <Lock className="w-4 h-4" />
              <span>Enviar Caso com Sigilo no WhatsApp</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
