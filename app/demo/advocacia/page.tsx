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
  FileCheck,
  Check,
  X,
  FileText,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  fullDesc: string;
  services: string[];
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista & Assessoria Empresarial',
    category: 'Trabalho & Negócios',
    badge: 'ALTA COMPLEXIDADE',
    desc: 'Defesa vigorosa dos direitos de colaboradores e assessoria jurídica preventiva para empresas, indústrias e comércios reduzirem passivos trabalhistas.',
    fullDesc: 'Atuação especializada em reversão de justa causa indevida, cálculo exato de horas extras não pagas, equiparação salarial, indenizações por acidente de trabalho ou burnout, e auditoria preventiva em contratos de trabalho para empresas.',
    services: [
      'Cálculo e cobrança de verbas rescisórias',
      'Indenizações por assédio moral e acidente de trabalho',
      'Defesa em fiscalizações do Ministério do Trabalho',
      'Elaboração e revisão de contratos PJ e CLT',
    ],
  },
  {
    id: 'civil-familia',
    title: 'Direito Civil, Família & Sucessões',
    category: 'Patrimônio & Família',
    badge: 'RESOLUÇÃO ÁGIL',
    desc: 'Inventários extrajudiciais rápidos em cartório, divórcios consensuais e litigiosos, partilha estratégica de bens e regularização de imóveis.',
    fullDesc: 'Conduzimos processos de inventário de forma humanizada e ágil para liberar heranças e patrimônios sem brigas desnecessárias. Atuação também em pensão alimentícia, guarda compartilhada e elaboração de testamentos.',
    services: [
      'Inventário extrajudicial em cartório (até 30 dias)',
      'Divórcio consensual e partilha de patrimônio',
      'Ações de alimentos e revisão de pensão',
      'Regularização de imóveis e contratos imobiliários',
    ],
  },
  {
    id: 'tributario',
    title: 'Direito Tributário & Recuperação de Créditos',
    category: 'Finanças & Empresas',
    badge: 'ECONOMIA TRIBUTÁRIA',
    desc: 'Recuperação de impostos federais e estaduais pagos a maior nos últimos 5 anos e defesa contra execuções fiscais da Receita.',
    fullDesc: 'Auditoria tributária digital que identifica créditos fiscais não aproveitados por empresas do Simples Nacional, Lucro Presumido e Lucro Real, gerando caixa imediato e redução legal da carga tributária.',
    services: [
      'Recuperação de créditos PIS/COFINS e ICMS-ST',
      'Defesa contra multas e autos de infração',
      'Planejamento tributário estratégico e blindagem',
      'Parcelamentos especiais de dívidas com a União',
    ],
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor & Indenizações Graves',
    category: 'Defesa do Cidadão',
    badge: 'INDENIZAÇÕES',
    desc: 'Ações indenizatórias por negativação indevida no SPC/Serasa, cancelamento de voos, fraudes bancárias e juros abusivos.',
    fullDesc: 'Defesa implacável contra abusos cometidos por grandes bancos, companhias aéreas, operadoras de telefonia e construtoras. Buscamos a reparação integral dos danos morais e materiais sofridos.',
    services: [
      'Limpeza de nome e indenização por negativação indevida',
      'Fraudes no PIX e clonagem de cartão sem reembolso',
      'Atrasos e cancelamentos de voos com extravio de bagagem',
      'Revisional de juros abusivos em financiamentos',
    ],
  },
];

const SENIOR_PARTNERS = [
  {
    name: 'Dr. Carlos Eduardo Silva',
    role: 'Sócio Fundador & Coordenador Jurídico',
    oab: 'OAB/SP 123.456',
    bio: 'Mestre em Direito Empresarial e Tributário pela USP. Mais de 16 anos de experiência em sustentações orais nos tribunais superiores (STJ e STF).',
  },
  {
    name: 'Dra. Beatriz Menezes',
    role: 'Sócia Especialista em Direito Civil & Família',
    oab: 'OAB/SP 234.567',
    bio: 'Especialista em Direito de Família e Sucessões pela PUC-SP. Mediadora judicial certificada com mais de 800 acordos homologados.',
  },
];

export default function AdvocaciaUltraDemoPage() {
  const [selectedAreaModal, setSelectedAreaModal] = useState<PracticeArea | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [caseArea, setCaseArea] = useState('Direito Trabalhista & Assessoria Empresarial');
  const [urgencyLevel, setUrgencyLevel] = useState('Atendimento Normal (Hoje)');
  const [caseDescription, setCaseDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `⚖️ *CONSULTA JURÍDICA SIGILOSA - SILVA & ASSOCIADOS* ⚖️%0A%0A`;
    text += `👤 *Nome:* ${clientName}%0A`;
    text += `📱 *WhatsApp:* ${clientPhone}%0A`;
    text += `🏛️ *Área Jurídica:* ${caseArea}%0A`;
    text += `🚨 *Urgência:* ${urgencyLevel}%0A`;
    text += `📄 *Resumo do Caso:* ${caseDescription}%0A%0A`;
    text += `Solicito análise jurídica confidencial sob sigilo profissional OAB.`;

    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white pb-32">
      {/* 🚀 TOP SELLER BAR 🚀 */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-all">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden lg:inline text-emerald-100 font-mono">• Demonstração de Plataforma para Escritórios de Advocacia & Consultorias</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20a%20demonstração%20completa%20do%20site%20de%20Advocacia%20e%20gostaria%20de%20um%20site%20nesse%20nível%20para%20meu%20escritório!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-4 py-1.5 rounded-xl font-black hover:bg-emerald-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md text-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* 🏛️ LAW FIRM HEADER 🏛️ */}
      <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-10 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight text-white uppercase">SILVA & ASSOCIADOS</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-black tracking-wider uppercase border border-emerald-500/30">
                  OAB/SP 123.456
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Assessoria Jurídica Estratégica & Contencioso</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#consulta"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs transition-all hover:scale-105 shadow-lg shadow-emerald-600/25"
            >
              <Lock className="w-4 h-4" />
              <span>Consulta Sigilosa</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 🌟 HERO SECTION 🌟 */}
      <header className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-6 border-b border-slate-800/80">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/15 border border-emerald-600/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
          <Scale className="w-4 h-4 text-emerald-400" />
          <span>Defesa Jurídica Rigorosa & Resultados Comprovados</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
          SILVA & ASSOCIADOS <span className="text-emerald-400">ADVOCACIA</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Mais de 16 anos defendendo os direitos e o patrimônio de pessoas físicas e empresas com ética, inteligência processual e presença combativa nos tribunais.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#consulta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition-all hover:scale-105"
          >
            <Lock className="w-4 h-4" />
            <span>Falar com Advogado Especialista</span>
          </a>
          <a
            href="https://wa.me/5517992537024?text=Olá!%20Gostaria%20de%20um%20atendimento%20jurídico%20de%20plantão."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-850 text-white font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Plantão WhatsApp 24h</span>
          </a>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-10 mt-10 border-t border-slate-800/80">
          <div className="text-center">
            <p className="text-3xl font-black text-white">+16 Anos</p>
            <p className="text-xs text-slate-400 mt-0.5">De Tradição Jurídica</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-emerald-400">+3.200</p>
            <p className="text-xs text-slate-400 mt-0.5">Causas Atendidas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-teal-400">98.6%</p>
            <p className="text-xs text-slate-400 mt-0.5">Índice de Êxito em Acordos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-amber-400">+R$ 22M</p>
            <p className="text-xs text-slate-400 mt-0.5">Recuperados para Clientes</p>
          </div>
        </div>
      </header>

      {/* ⚖️ PRACTICE AREAS ⚖️ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <div>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Especialidades</span>
            <h2 className="text-3xl font-black text-white">Áreas de Atuação Especializadas</h2>
            <p className="text-xs text-slate-400">Clique em qualquer área para ver os serviços inclusos e jurisprudência.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {area.badge}
                    </span>
                    <span className="text-xs text-slate-400">{area.category}</span>
                  </div>

                  <h3 className="text-lg font-black text-white">{area.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{area.desc}</p>

                  <div className="space-y-1.5 pt-2">
                    {area.services.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-bold">Atendimento sob Sigilo</span>
                  <a
                    href="#consulta"
                    onClick={() => setCaseArea(area.title)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                  >
                    Consultar Esta Área
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 👥 SENIOR PARTNERS 👥 */}
        <div className="space-y-8 pt-8 border-t border-slate-800/80">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Corpo Jurídico</span>
            <h3 className="text-3xl font-black text-white">Advogados Sócios</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SENIOR_PARTNERS.map((p, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg">{p.name}</h4>
                    <p className="text-xs text-emerald-400 font-bold">{p.role}</p>
                    <p className="text-[11px] text-slate-400">{p.oab}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔒 INTAKE FORM 🔒 */}
        <section id="consulta" className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Solicite uma Análise do seu Caso</h2>
            <p className="text-xs text-slate-400">Atendimento 100% confidencial sob sigilo profissional da OAB.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Seu Nome Completo *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Carlos Eduardo Silveira"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp para Contato *</label>
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
                  {PRACTICE_AREAS.map((a) => (
                    <option key={a.id}>{a.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Nível de Urgência</label>
              <select
                value={urgencyLevel}
                onChange={(e) => setUrgencyLevel(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-emerald-500"
              >
                <option>Atendimento Normal (Hoje)</option>
                <option>🚨 Urgente (Audiência ou Prazo Fatal em 24h)</option>
                <option>Apenas Tirar Dúvidas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Breve Resumo do seu Caso *</label>
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
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
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
