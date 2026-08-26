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
  Flame
} from 'lucide-react';

const BARBER_SERVICES = [
  { name: 'Corte Cabelo Tradicional / Fade', price: 'R$ 45,00', time: '35 min', desc: 'Degradê na navalha ou tesoura, lavagem com shampoo refrescante e finalização com pomada matte.' },
  { name: 'Barboterapia Completa com Toalha Quente', price: 'R$ 40,00', time: '30 min', desc: 'Esfoliação facial, toalha quente com óleos essenciais, massagem relaxante e alinhamento na navalha.' },
  { name: 'Combo Completo (Cabelo + Barba)', price: 'R$ 75,00', time: '55 min', desc: 'A experiência completa de cuidado masculino com corte, barba, toalha quente e cerveja artesanal cortesia.' },
  { name: 'Platinado / Nevou / Coloração', price: 'R$ 120,00', time: '90 min', desc: 'Descoloração global com proteção capilar anti-quebra e matização profissional.' },
];

export default function BarbeariaDemoPage() {
  const [clientName, setClientName] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('Qualquer Barbeiro Disponível');
  const [selectedService, setSelectedService] = useState('Combo Completo (Cabelo + Barba)');

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Fala galera da Barbearia Vintage! Gostaria de agendar um horário:%0A%0A• *Cliente:* ${clientName}%0A• *Serviço:* ${selectedService}%0A• *Profissional:* ${selectedBarber}`;
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-600 selection:text-black">
      {/* 🚀 TOP BAR: DEMONSTRATION NOTICE BANNER 🚀 */}
      <div className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/40 hover:bg-black/60 px-2.5 py-1 rounded-lg transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden sm:inline">• Modelo de Demonstração: Barbearia & Salão VIP</span>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20modelo%20da%20Barbearia%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-stone-950 px-3 py-1 rounded-lg font-black hover:bg-amber-100 transition-colors flex items-center gap-1 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Header */}
      <header className="relative py-20 px-4 sm:px-6 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-600/10 border border-amber-600/30 text-amber-400 text-xs font-black uppercase tracking-wider">
          <Scissors className="w-4 h-4 text-amber-500" />
          <span>Estilo Clássico • Atendimento Premium</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
          BARBEARIA <span className="text-amber-500">VINTAGE CLUB</span>
        </h1>

        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
          Cortes modernos, barboterapia tradicional com toalha quente e aquele ambiente exclusivo com chopp gelado e sinuca.
        </p>

        <div className="flex items-center justify-center gap-6 text-xs text-stone-300 pt-2 flex-wrap">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold text-white">4.9 ★</span> (450+ clientes fiéis)
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Seg a Sáb: 09h às 20h</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Rua Augusta, 500 • SP</span>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-xs font-black text-amber-500 uppercase tracking-widest text-center">Tabela de Serviços</h2>
          <div className="divide-y divide-stone-800 bg-stone-900/80 rounded-3xl border border-stone-800 p-6 shadow-xl">
            {BARBER_SERVICES.map((s, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black text-white">{s.name}</h3>
                    <span className="text-[10px] font-bold bg-stone-800 text-stone-400 px-2 py-0.5 rounded-full">{s.time}</span>
                  </div>
                  <p className="text-xs text-stone-400 max-w-md">{s.desc}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <span className="text-lg font-black text-amber-400">{s.price}</span>
                  <a
                    href="#agendar"
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-black font-black text-xs transition-colors"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Booking Form */}
        <section id="agendar" className="bg-stone-900 rounded-3xl p-8 border border-stone-800 shadow-2xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-white">Marque seu Horário em 30 Segundos</h2>
            <p className="text-xs text-stone-400 mt-1">Selecione o serviço e confirme direto no WhatsApp da barbearia.</p>
          </div>

          <form onSubmit={handleBook} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">Seu Nome</label>
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
                <option>Mestre Rodrigo (Fade & Navalha)</option>
                <option>Lucas Barba (Barboterapia)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
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
