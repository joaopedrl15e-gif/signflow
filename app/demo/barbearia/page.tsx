'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scissors,
  Star,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  Flame,
  Beer,
  Tv,
  Wifi,
  ShieldCheck
} from 'lucide-react';

const BARBER_SERVICES = [
  { name: 'Corte Cabelo Tradicional / Fade Degradê', price: 'R$ 45,00', time: '35 min', desc: 'Degradê na navalha ou tesoura, lavagem refrescante com mentol e finalização com pomada matte importada.' },
  { name: 'Barboterapia Completa com Toalha Quente', price: 'R$ 40,00', time: '30 min', desc: 'Esfoliação de pele, toalha quente com óleos essenciais, massagem relaxante e alinhamento na navalha afiada.' },
  { name: 'Combo Supreme (Cabelo + Barba + Sobrancelha)', price: 'R$ 80,00', time: '55 min', desc: 'A experiência completa de cuidado masculino com corte, barba, toalha quente, alinhamento de sobrancelha e chopp cortesia.' },
  { name: 'Platinado Global / Nevou / Coloração', price: 'R$ 130,00', time: '90 min', desc: 'Descoloração global com proteção capilar anti-quebra e matização profissional sem arder o couro cabeludo.' },
];

const BARBERS = [
  { name: 'Mestre Rodrigo "Blade"', exp: '12 anos de experiência • Especialista em Fade e Navalha' },
  { name: 'Lucas "Old School"', exp: '8 anos de experiência • Mestre em Barboterapia Clássica' },
  { name: 'Gabriel "FreeStyle"', exp: '6 anos de experiência • Especialista em Riscos e Platinados' },
];

export default function BarbeariaDemoPage() {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('Qualquer Barbeiro Disponível');
  const [selectedService, setSelectedService] = useState('Combo Supreme (Cabelo + Barba + Sobrancelha)');
  const [selectedTime, setSelectedTime] = useState('Hoje - Próximo Horário Livre');

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Fala galera da Barbearia Vintage Club! Gostaria de agendar um horário:%0A%0A• *Cliente:* ${clientName}%0A• *WhatsApp:* ${clientPhone}%0A• *Serviço:* ${selectedService}%0A• *Barbeiro:* ${selectedBarber}%0A• *Horário:* ${selectedTime}`;
    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-600 selection:text-black pb-24">
      {/* 🚀 TOP STICKY BAR: CONVERSÃO & DEMONSTRAÇÃO 🚀 */}
      <div className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden md:inline font-mono">• Demonstração de Site para Barbearia & Salão VIP</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20o%20modelo%20da%20Barbearia%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-stone-950 px-4 py-1.5 rounded-xl font-black hover:bg-amber-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Header */}
      <header className="relative py-20 px-4 sm:px-6 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/15 border border-amber-600/30 text-amber-400 text-xs font-black uppercase tracking-wider">
          <Scissors className="w-4 h-4 text-amber-500" />
          <span>Estilo Clássico • Cerveja Gelada • Atendimento VIP</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
          BARBEARIA <span className="text-amber-500">VINTAGE CLUB</span>
        </h1>

        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Muito mais que um corte de cabelo. Um refúgio masculino com toalha quente, navalha afiada, sinuca, chopp artesanal e boa conversa.
        </p>

        <div className="flex items-center justify-center gap-6 text-xs text-stone-300 pt-2 flex-wrap font-medium">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold text-white">4.9 ★</span> (580+ avaliações no Google)
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Seg a Sáb: 09h às 20h30</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Rua Augusta, 500 • SP</span>
          </div>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
          <div className="p-3 bg-stone-900/80 rounded-2xl border border-stone-800 flex items-center justify-center gap-2 text-xs text-stone-300">
            <Beer className="w-4 h-4 text-amber-500" />
            <span>Chopp Gelado Free</span>
          </div>
          <div className="p-3 bg-stone-900/80 rounded-2xl border border-stone-800 flex items-center justify-center gap-2 text-xs text-stone-300">
            <Tv className="w-4 h-4 text-amber-500" />
            <span>Futebol & Sinuca</span>
          </div>
          <div className="p-3 bg-stone-900/80 rounded-2xl border border-stone-800 flex items-center justify-center gap-2 text-xs text-stone-300">
            <Wifi className="w-4 h-4 text-amber-500" />
            <span>Wi-Fi 500MB</span>
          </div>
          <div className="p-3 bg-stone-900/80 rounded-2xl border border-stone-800 flex items-center justify-center gap-2 text-xs text-stone-300">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Navalhas 100% Descartáveis</span>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-black text-amber-500 uppercase tracking-widest block mb-1">Menu de Serviços</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Escolha sua Experiência</h2>
          </div>

          <div className="divide-y divide-stone-800 bg-stone-900/90 rounded-3xl border border-stone-800 p-6 sm:p-8 shadow-2xl">
            {BARBER_SERVICES.map((s, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-black text-white">{s.name}</h3>
                    <span className="text-[10px] font-bold bg-stone-800 text-amber-400 px-2.5 py-0.5 rounded-full border border-stone-700">{s.time}</span>
                  </div>
                  <p className="text-xs text-stone-400 max-w-md leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <span className="text-xl font-black text-amber-400">{s.price}</span>
                  <a
                    href="#agendar"
                    className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-black font-black text-xs transition-all hover:scale-105 shadow-md shadow-amber-600/20"
                  >
                    Agendar Horário
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barbers Team */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-black text-amber-500 uppercase tracking-widest block mb-1">Nosso Time</span>
            <h3 className="text-xl font-black text-white">Profissionais de Elite</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BARBERS.map((b, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-1.5 text-center">
                <h4 className="font-black text-white text-sm">{b.name}</h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">{b.exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Booking Form */}
        <section id="agendar" className="bg-stone-900 rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-2xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-white">Marque seu Horário em 30 Segundos</h2>
            <p className="text-xs text-stone-400 mt-1">Selecione o serviço e confirme direto no WhatsApp da barbearia.</p>
          </div>

          <form onSubmit={handleBook} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">Seu Nome Completo</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Pedro Henrique"
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">WhatsApp para Contato</label>
              <input
                type="text"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="(17) 99253-7024"
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">Serviço Desejado</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              >
                {BARBER_SERVICES.map((s, idx) => (
                  <option key={idx}>{s.name} - {s.price}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">Preferência de Barbeiro</label>
              <select
                value={selectedBarber}
                onChange={(e) => setSelectedBarber(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              >
                <option>Qualquer Barbeiro Disponível</option>
                <option>Mestre Rodrigo "Blade" (Fade & Navalha)</option>
                <option>Lucas "Old School" (Barboterapia Clássica)</option>
                <option>Gabriel "FreeStyle" (Riscos & Platinados)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black font-black text-sm shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-4"
            >
              <Scissors className="w-4 h-4" />
              <span>Agendar Agora no WhatsApp</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
