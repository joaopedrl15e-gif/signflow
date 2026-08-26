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
  Award,
  HeartHandshake,
  Check
} from 'lucide-react';

const TREATMENTS = [
  {
    title: 'Harmonização Facial & Botox',
    desc: 'Procedimentos estéticos minimamente invasivos para suavizar linhas de expressão e realçar contornos faciais com total naturalidade.',
    price: 'A partir de R$ 890',
    icon: '✨',
    badge: 'DESTAQUE ESTÉTICO',
  },
  {
    title: 'Implantes Dentários de Alta Tecnologia',
    desc: 'Recupere o prazer de sorrir e mastigar com implantes suíços de rápida osseointegração e sedação consciente sem dor.',
    price: 'Condições em até 24x',
    icon: '🦷',
    badge: 'RECUPERE SEU SORRISO',
  },
  {
    title: 'Lentes de Contato Dental em Porcelana',
    desc: 'Transformação estética do sorriso com facetas ultrafinas de porcelana pura para alinhar cor, forma e simetria.',
    price: 'Planejamento Digital 3D',
    icon: '💎',
    badge: 'ESTÉTICA VIP',
  },
  {
    title: 'Clareamento Dental a Laser',
    desc: 'Dentes até 4 tons mais brancos em apenas 1 sessão de consultório com tecnologia de luz fria sem sensibilidade.',
    price: 'R$ 490 / sessão',
    icon: '⚡',
    badge: 'RESULTADO IMEDIATO',
  },
];

const DOCTORS = [
  {
    name: 'Dra. Mariana Costa',
    role: 'Especialista em Harmonização Orofacial & Estética',
    cro: 'CRO/SP 112.450 • 10 anos de experiência',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Dr. Roberto Almeida',
    role: 'Mestre em Implantodontia & Cirurgia Avançada',
    cro: 'CRO/SP 98.320 • Especialista pela USP',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
  },
];

const PATIENT_REVIEWS = [
  { name: 'Fernanda Vasconcelos', text: 'Fiz minhas lentes de porcelana e minha autoestima mudou completamente! O atendimento é impecável.', stars: 5 },
  { name: 'Gabriel Mendes', text: 'Fiz 2 implantes sem dor nenhuma no mesmo dia. Estrutura ultra moderna e equipe muito atenciosa.', stars: 5 },
  { name: 'Patrícia Lima', text: 'O botox ficou super natural, exatamente como eu queria. Recomendo de olhos fechados!', stars: 5 },
];

export default function ClinicaDemoPage() {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Harmonização Facial & Botox');
  const [preferredDate, setPreferredDate] = useState('');

  const handleScheduleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar uma consulta na Clínica VIP:%0A%0A• *Nome:* ${patientName}%0A• *WhatsApp:* ${patientPhone}%0A• *Tratamento:* ${selectedService}%0A• *Data Preferencial:* ${preferredDate || 'A combinar'}`;
    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-black pb-24">
      {/* 🚀 TOP STICKY BAR: CONVERSÃO & DEMONSTRAÇÃO 🚀 */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden md:inline font-mono">• Demonstração de Site para Clínica & Odonto VIP</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20o%20modelo%20da%20Clínica%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-4 py-1.5 rounded-xl font-black hover:bg-cyan-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-6">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Clínica de Referência em Odontologia Digital & Harmonização</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight mb-6">
          Transforme sua autoestima com o sorriso que você{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            sempre sonhou.
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-10 leading-relaxed">
          Tecnologia 3D de ponta, sedação consciente sem dor e uma equipe de especialistas dedicados a cuidar da sua saúde bucal e beleza facial com excelência e carinho.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#agendamento"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Agendar Avaliação Gratuita</span>
          </a>
          <a
            href="https://wa.me/5517992537024?text=Olá!%20Gostaria%20de%20falar%20com%20a%20recepção%20da%20Clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Falar com a Recepção no WhatsApp</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-16 pt-8 border-t border-slate-800/80">
          <div className="text-center">
            <p className="text-3xl font-black text-white">+6.400</p>
            <p className="text-xs text-slate-400 mt-1">Pacientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-cyan-400">14 Anos</p>
            <p className="text-xs text-slate-400 mt-1">De Tradição Médica</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-blue-400">4.9 ★</p>
            <p className="text-xs text-slate-400 mt-1">Nota no Google (900+ avaliações)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Scanner Digital 3D</p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">Tratamentos Especializados</span>
          <h2 className="text-3xl font-black text-white">Excelência em Cada Detalhe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TREATMENTS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{t.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {t.badge}
                  </span>
                </div>
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
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors & Team */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">Corpo Clínico</span>
          <h2 className="text-3xl font-black text-white">Especialistas Renomados</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DOCTORS.map((doc, idx) => (
            <div key={idx} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex items-center gap-5">
              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-cyan-500/30" />
              <div>
                <h4 className="text-base font-black text-white">{doc.name}</h4>
                <p className="text-xs text-cyan-400 font-medium">{doc.role}</p>
                <span className="text-[11px] text-slate-400 block mt-1">{doc.cro}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="bg-slate-900/60 rounded-3xl p-8 border border-slate-800 space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-black text-white">O Que Nossos Pacientes Dizem</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PATIENT_REVIEWS.map((rev, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex text-amber-400 text-xs">{'★'.repeat(rev.stars)}</div>
                <p className="text-xs text-slate-300 italic leading-relaxed">"{rev.text}"</p>
                <span className="text-[11px] font-bold text-cyan-400 block">— {rev.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section id="agendamento" className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Agende sua Avaliação VIP</h2>
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
                  placeholder="(17) 99253-7024"
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
                  <option>Implantes Dentários de Alta Tecnologia</option>
                  <option>Lentes de Contato Dental em Porcelana</option>
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
