'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  ChevronLeft,
  ArrowRight,
  CheckCircle2,
  Lock,
  HeartPulse,
  User,
  Stethoscope,
  X
} from 'lucide-react';

interface Procedure {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  time: string;
  recovery: string;
  benefits: string[];
}

const PROCEDURES_DATA: Procedure[] = [
  {
    id: 'lentes',
    title: 'Lentes em Cerâmica Feldspática E.max',
    category: 'Estética Dental',
    desc: 'Lâminas ultrafinas de cerâmica que corrigem formato, tamanho, cor e pequenos desalinhamentos dentários com máxima durabilidade.',
    fullDesc: 'As lentes de contato em cerâmica E.max preservam ao máximo a estrutura original do dente com preparo minimamente invasivo. Proporcionam translucidez, brilho e textura idênticos aos dentes naturais.',
    time: '2 a 3 sessões',
    recovery: 'Imediata',
    benefits: ['Alta resistência a manchas e desgaste', 'Planejamento digital com mock-up na boca', 'Translucidez e aspecto 100% natural', 'Garantia de material cerâmico'],
  },
  {
    id: 'implantes',
    title: 'Implantes com Cirurgia Guiada 3D',
    category: 'Reabilitação Oral',
    desc: 'Reposicionamento seguro de dentes ausentes com pinos de titânio de osseointegração rápida e sem cortes extensos de bisturi.',
    fullDesc: 'Utilizamos guia cirúrgico impresso em 3D a partir da tomografia do paciente. Isso reduz o tempo do procedimento em mais de 60% e garante um pós-operatório muito mais confortável e sem inchaço.',
    time: '45 minutos por implante',
    recovery: '48 a 72 horas',
    benefits: ['Cirurgia sem retalhos nem pontos dolorosos', 'Titânio com certificado internacional', 'Recuperação mastigatória completa', 'Sedação consciente disponível'],
  },
  {
    id: 'invisalign',
    title: 'Ortodontia Digital com Alinhadores Invisíveis',
    category: 'Ortodontia',
    desc: 'Alinhamento do sorriso com placas transparentes removíveis que não interferem na sua rotina ou alimentação.',
    fullDesc: 'Escaneamento digital em 60 segundos com o scanner iTero. Você visualiza uma simulação tridimensional da movimentação de cada dente e a previsão de término antes mesmo de começar.',
    time: '6 a 14 meses em média',
    recovery: 'Confortável e indolor',
    benefits: ['Removível para refeições e escovação', 'Totalmente transparente e discreto', 'Consultas de acompanhamento mais rápidas', 'Sem ferimentos nos tecidos bucais'],
  },
  {
    id: 'clareamento',
    title: 'Clareamento Dental a Laser com Luz Violeta',
    category: 'Estética Dental',
    desc: 'Técnica moderna de clareamento que preserva o esmalte dentário sem provocar sensibilidade térmica após a sessão.',
    fullDesc: 'Diferente de lâmpadas antigas de calor, a luz violeta age de forma seletiva sobre as moléculas de pigmento, proporcionando dentes visivelmente mais claros com conforto total.',
    time: 'Sessões de 45 minutos',
    recovery: 'Imediata',
    benefits: ['Zero dor ou sensibilidade pós-procedimento', 'Gel remineralizante de proteção', 'Resultado perceptível na primeira sessão', 'Acompanhamento fotográfico'],
  },
];

export default function ClinicaBoutiquePage() {
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('Lentes em Cerâmica Feldspática E.max');
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã (09h às 12h)');
  const [notes, setNotes] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `🩺 *SOLICITAÇÃO DE AVALIAÇÃO • STUDIO ODONTO & ESTÉTICA* 🩺%0A%0A`;
    text += `👤 *Paciente:* ${patientName}%0A`;
    text += `📱 *Telefone:* ${patientPhone}%0A`;
    text += `✨ *Procedimento de Interesse:* ${selectedTreatment}%0A`;
    text += `⏰ *Período Preferencial:* ${preferredPeriod}%0A`;
    if (notes) text += `📝 *Observações:* ${notes}%0A`;
    text += `%0AOlá! Gostaria de verificar a disponibilidade de horários para avaliação na clínica.`;

    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black pb-32">
      {/* Return Bar */}
      <div className="bg-slate-950 border-b border-slate-800 text-slate-400 px-4 py-2 text-xs flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar ao Portfólio de João Pedro</span>
        </Link>
        <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
          Demonstração de Clínica Médica & Odontológica
        </span>
      </div>

      {/* Clinic Header */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-8 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight block">Studio Odonto & Estética</span>
              <span className="text-[10px] text-slate-400 font-mono">Saúde Oral & Harmonização • CRO/SP 112.450</span>
            </div>
          </div>

          <a
            href="#agendar"
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-colors"
          >
            Agendar Avaliação
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Tecnologia 3D & Atendimento Humanizado</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Odontologia estética e reabilitação com precisão digital.
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Planejamento digital do sorriso, cirurgias guiadas sem dor e tratamentos focados na naturalidade e saúde a longo prazo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#agendar"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-all shadow-md"
          >
            Solicitar Avaliação Inicial
          </a>
          <a
            href="https://wa.me/5517992537024?text=Olá!%20Gostaria%20de%20informações%20sobre%20os%20tratamentos%20da%20clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 font-semibold text-xs border border-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Falar com a Recepção</span>
          </a>
        </div>
      </header>

      {/* Procedures */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Tratamentos</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Especialidades Clínicas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCEDURES_DATA.map((proc) => (
              <div
                key={proc.id}
                className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 font-semibold">
                    {proc.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{proc.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{proc.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProcedure(proc)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Ver detalhes do procedimento →
                  </button>
                  <a
                    href="#agendar"
                    onClick={() => setSelectedTreatment(proc.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Section */}
        <section id="agendar" className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-white">Agendamento de Avaliação</h2>
            <p className="text-xs text-slate-400">Preencha seus dados para receber o contato da recepção com os horários disponíveis.</p>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Nome Completo *</label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ex: Mariana Costa"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Telefone WhatsApp *</label>
                <input
                  type="text"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="(17) 99253-7024"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Tratamento de Interesse</label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400"
                >
                  {PROCEDURES_DATA.map((p) => (
                    <option key={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Período de Preferência</label>
              <select
                value={preferredPeriod}
                onChange={(e) => setPreferredPeriod(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400"
              >
                <option>Manhã (09h às 12h)</option>
                <option>Tarde (13h às 18h)</option>
                <option>Noite (18h às 20h)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs transition-colors mt-2"
            >
              Solicitar Horário no WhatsApp
            </button>
          </form>
        </section>
      </main>

      {/* Modal */}
      {selectedProcedure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-800 space-y-4">
            <div className="flex justify-between items-start pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-semibold">{selectedProcedure.category}</span>
                <h3 className="font-bold text-base text-white">{selectedProcedure.title}</h3>
              </div>
              <button onClick={() => setSelectedProcedure(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedProcedure.fullDesc}</p>

            <div className="space-y-1.5 pt-2">
              {selectedProcedure.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProcedure(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
