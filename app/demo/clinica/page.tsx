'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Star,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  UserCheck,
  Award
} from 'lucide-react';

const TREATMENTS = [
  {
    title: 'Harmonização Facial & Botox',
    desc: 'Procedimentos estéticos minimamente invasivos para realçar sua beleza natural com naturalidade e segurança.',
    price: 'A partir de R$ 890',
    icon: '✨',
  },
  {
    title: 'Implantes & Próteses Dentárias',
    desc: 'Recupere o prazer de sorrir e mastigar com implantes de titânio de rápida cicatrização e tecnologia suíça.',
    price: 'Avaliação Gratuita',
    icon: '🦷',
  },
  {
    title: 'Lentes de Contato Dental (Facetas)',
    desc: 'Transformação estética completa do sorriso com lâminas ultrafinas de porcelana de alta durabilidade.',
    price: 'Condições Especiais',
    icon: '💎',
  },
  {
    title: 'Clareamento Dental a Laser',
    desc: 'Dentes até 4 tons mais brancos em apenas 1 sessão de consultório com tecnologia de luz fria sem dor.',
    price: 'R$ 450 / sessão',
    icon: '⚡',
  },
];

export default function ClinicaDemoPage() {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Harmonização Facial & Botox');
  const [preferredDate, setPreferredDate] = useState('');

  const handleScheduleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar uma consulta na Clínica VIP:%0A%0A• *Nome:* ${patientName}%0A• *WhatsApp:* ${patientPhone}%0A• *Tratamento:* ${selectedService}%0A• *Data Preferencial:* ${preferredDate || 'A combinar'}`;
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* 🚀 TOP BAR: DEMONSTRATION NOTICE BANNER 🚀 */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/30 hover:bg-black/50 px-2.5 py-1 rounded-lg transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden sm:inline">• Modelo de Demonstração: Clínica Odontológica & Estética</span>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20modelo%20da%20Clínica%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-3 py-1 rounded-lg font-black hover:bg-cyan-100 transition-colors flex items-center gap-1 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-6">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Clínica de Referência em Saúde & Estética Integrada</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight mb-6">
          Transforme sua autoestima com o sorriso que você{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            sempre sonhou.
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-10 leading-relaxed">
          Especialistas renomados, equipamentos de última geração e atendimento humanizado para cuidar do seu sorriso e harmonia facial com excelência.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#agendamento"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Agendar Consulta de Avaliação</span>
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Falar com a Recepção</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-16 pt-8 border-t border-slate-800/80">
          <div className="text-center">
            <p className="text-3xl font-black text-white">+5.200</p>
            <p className="text-xs text-slate-400 mt-1">Pacientes Atendidos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-cyan-400">12 Anos</p>
            <p className="text-xs text-slate-400 mt-1">De Excelência Médica</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-blue-400">4.9 ★</p>
            <p className="text-xs text-slate-400 mt-1">Nota no Google</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Tecnologia Digital</p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">Especialidades</span>
          <h2 className="text-3xl font-black text-white">Nossos Principais Tratamentos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TREATMENTS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-3xl block">{t.icon}</span>
                <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400">{t.price}</span>
                <a
                  href="#agendamento"
                  className="text-xs font-bold text-white group-hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Agendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Form */}
      <section id="agendamento" className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Agende sua Avaliação</h2>
            <p className="text-xs text-slate-400 mt-2">
              Preencha os dados abaixo e nossa equipe confirmará seu horário imediatamente no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleScheduleAppointment} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Seu Nome Completo</label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ex: Dra. Mariana Costa"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Seu WhatsApp</label>
                <input
                  type="text"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="(11) 98765-4321"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Tratamento de Interesse</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500"
                >
                  <option>Harmonização Facial & Botox</option>
                  <option>Implantes & Próteses</option>
                  <option>Lentes de Contato Dental</option>
                  <option>Clareamento Dental a Laser</option>
                  <option>Limpeza & Check-up Geral</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Data Preferencial (Opcional)</label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-4"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirmar Agendamento no WhatsApp</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
