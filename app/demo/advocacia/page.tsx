'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  ShieldCheck,
  ChevronLeft,
  Lock,
  Phone,
  Check,
  Building2,
  FileText,
  Award
} from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  category: string;
  desc: string;
  services: string[];
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista & Consultoria Empresarial',
    category: 'Trabalho & Negócios',
    desc: 'Atuação na defesa dos direitos de trabalhadores e assessoria preventiva para empresas reduzirem passivos trabalhistas.',
    services: [
      'Cálculo e cobrança de verbas rescisórias não pagas',
      'Ações por assédio moral, burnout e horas extras',
      'Defesa técnica em fiscalizações e reclamatórias',
      'Elaboração e revisão de contratos CLT e PJ',
    ],
  },
  {
    id: 'civil',
    title: 'Direito Civil, Família & Sucessões',
    category: 'Patrimônio & Família',
    desc: 'Condução de inventários extrajudiciais ágeis em cartório, divórcios consensuais e partilha estratégica de patrimônio.',
    services: [
      'Inventário extrajudicial em cartório',
      'Divórcio consensual e dissolução de união estável',
      'Ações de pensão alimentícia e guarda de menores',
      'Regularização de contratos imobiliários e posse',
    ],
  },
  {
    id: 'tributario',
    title: 'Direito Tributário & Recuperação de Créditos',
    category: 'Tributário & Fiscal',
    desc: 'Auditoria fiscal digital para identificar tributos pagos a maior nos últimos 5 anos e defesa em execuções fiscais.',
    services: [
      'Recuperação de créditos fiscais (Simples e Presumido)',
      'Defesa contra multas e autos de infração da Receita',
      'Planejamento tributário para redução lícita de impostos',
      'Adesão a programas de parcelamento de dívidas ativas',
    ],
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor & Indenizações',
    category: 'Defesa do Consumidor',
    desc: 'Ações de reparação de danos por negativação indevida no SPC/Serasa, fraudes bancárias no PIX e abusos comerciais.',
    services: [
      'Limpeza de nome por inscrição indevida em cadastro de restrição',
      'Golpes bancários via PIX e clonagem de cartão sem estorno',
      'Atrasos ou cancelamentos graves de voos com extravio de malas',
      'Revisão judicial de juros abusivos em financiamentos',
    ],
  },
];

export default function AdvocaciaCorporatePage() {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [caseArea, setCaseArea] = useState('Direito Trabalhista & Consultoria Empresarial');
  const [caseSummary, setCaseSummary] = useState('');

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `⚖️ *CONSULTA JURÍDICA • PIMENTEL & ASSOCIADOS* ⚖️%0A%0A`;
    text += `👤 *Nome:* ${clientName}%0A`;
    text += `📱 *Telefone:* ${clientPhone}%0A`;
    text += `🏛️ *Área Jurídica:* ${caseArea}%0A`;
    if (caseSummary) text += `📄 *Resumo da Situação:* ${caseSummary}%0A`;
    text += `%0AOlá! Gostaria de agendar uma consulta sob sigilo profissional da OAB.`;

    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070a08] text-slate-100 font-sans selection:bg-emerald-600 selection:text-white pb-32">
      {/* Return Bar */}
      <div className="bg-slate-950 border-b border-slate-900 text-slate-400 px-4 py-2 text-xs flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar ao Portfólio de João Pedro</span>
        </Link>
        <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
          Demonstração de Advocacia & Consultoria Jurídica
        </span>
      </div>

      {/* Header */}
      <nav className="border-b border-slate-900 bg-[#070a08]/90 backdrop-blur-md sticky top-8 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight block uppercase">Pimentel & Associados</span>
              <span className="text-[10px] text-slate-400 font-mono">Assessoria Jurídica & Contencioso • OAB/SP 123.456</span>
            </div>
          </div>

          <a
            href="#consulta"
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-colors"
          >
            Consulta Sigilosa
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/30 text-xs text-emerald-300 font-mono">
          <Lock className="w-3.5 h-3.5" />
          <span>Atendimento Sob Sigilo Profissional OAB</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Defesa estratégica de direitos e proteção patrimonial.
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Atuação ética e combativa nos tribunais, com foco em resultados sólidos e assessoria preventiva para pessoas e empresas.
        </p>
      </header>

      {/* Areas Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-slate-950/80 rounded-2xl p-6 border border-slate-900 hover:border-emerald-800/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-900 font-semibold">
                  {area.category}
                </span>
                <h3 className="text-base font-bold text-white">{area.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{area.desc}</p>

                <div className="space-y-1.5 pt-2">
                  {area.services.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-900 flex justify-end">
                <a
                  href="#consulta"
                  onClick={() => setCaseArea(area.title)}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  Consultar sobre esta área →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <section id="consulta" className="bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-900 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-white">Análise Preliminar do Caso</h2>
            <p className="text-xs text-slate-400">Envie suas dúvidas de forma confidencial para avaliação direta do advogado.</p>
          </div>

          <form onSubmit={handleConsultation} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Nome Completo *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Carlos Eduardo Silveira"
                className="w-full px-3.5 py-2.5 bg-black border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">WhatsApp para Contato *</label>
                <input
                  type="text"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="(17) 99253-7024"
                  className="w-full px-3.5 py-2.5 bg-black border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Área do Direito</label>
                <select
                  value={caseArea}
                  onChange={(e) => setCaseArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
                >
                  {PRACTICE_AREAS.map((a) => (
                    <option key={a.id}>{a.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Breve Resumo da Dúvida ou Situação</label>
              <textarea
                rows={3}
                value={caseSummary}
                onChange={(e) => setCaseSummary(e.target.value)}
                placeholder="Descreva resumidamente os fatos..."
                className="w-full px-3.5 py-2.5 bg-black border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-colors mt-2"
            >
              Enviar Consulta Confidencial no WhatsApp
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
