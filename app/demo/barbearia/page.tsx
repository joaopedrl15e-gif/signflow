'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scissors,
  Clock,
  MapPin,
  Phone,
  ChevronLeft,
  Check,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface BarberService {
  id: string;
  name: string;
  category: string;
  price: string;
  time: string;
  desc: string;
}

const BARBER_SERVICES: BarberService[] = [
  {
    id: 's-1',
    name: 'Corte Tradicional / Fade Degradê',
    category: 'Cortes',
    price: 'R$ 55,00',
    time: '35 min',
    desc: 'Corte personalizado na tesoura e máquina com acabamento milimétrico na navalha, lavagem com shampoo refrescante e finalização com pomada matte.',
  },
  {
    id: 's-2',
    name: 'Barboterapia com Toalha Quente',
    category: 'Barba',
    price: 'R$ 45,00',
    time: '30 min',
    desc: 'Alinhamento completo da barba na lâmina com aplicação de óleos essenciais, vapor de ozônio, toalha aquecida e bálsamo pós-barba.',
  },
  {
    id: 's-3',
    name: 'Combo Completo (Cabelo + Barba + Sobrancelha)',
    category: 'Combos',
    price: 'R$ 85,00',
    time: '55 min',
    desc: 'A experiência completa: corte degradê, barboterapia tradicional com toalha quente e alinhamento de sobrancelha na navalha.',
  },
  {
    id: 's-4',
    name: 'Camuflagem de Fios Brancos',
    category: 'Química & Cor',
    price: 'R$ 35,00',
    time: '20 min',
    desc: 'Tonalização discreta e rápida que ameniza os fios brancos da barba ou cabelo mantendo aspecto natural sem avermelhar.',
  },
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

export default function BarbeariaClassicPage() {
  const [selectedService, setSelectedService] = useState('Combo Completo (Cabelo + Barba + Sobrancelha)');
  const [selectedSlot, setSelectedSlot] = useState('15:00');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `💈 *AGENDAMENTO • MACHADO & NAVALHA BARBER CLUB* 💈%0A%0A`;
    text += `👤 *Cliente:* ${clientName}%0A`;
    text += `📱 *Telefone:* ${clientPhone}%0A`;
    text += `✂️ *Serviço:* ${selectedService}%0A`;
    text += `⏰ *Horário Solicitado:* ${selectedSlot}%0A%0A`;
    text += `Gostaria de confirmar esse horário na barbearia.`;

    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 font-sans selection:bg-amber-600 selection:text-black pb-32">
      {/* Return Bar */}
      <div className="bg-stone-950 border-b border-stone-800 text-stone-400 px-4 py-2 text-xs flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar ao Portfólio de João Pedro</span>
        </Link>
        <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
          Demonstração de Barbearia & Agendamento
        </span>
      </div>

      {/* Header */}
      <nav className="border-b border-stone-800/80 bg-stone-950/80 backdrop-blur-md sticky top-8 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight block">Machado & Navalha</span>
              <span className="text-[10px] text-stone-400 font-mono">Barbearia Clássica & Grooming</span>
            </div>
          </div>

          <a
            href="#agendar"
            className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs transition-colors"
          >
            Marcar Horário
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-xs text-stone-300 font-mono">
          <span>Tradição no corte e cuidado masculino</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Cortes precisos, barboterapia e ambiente clássico.
        </h1>

        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Atendimento com hora marcada, navalha afiada, produtos de primeira linha e café expresso de cortesia.
        </p>
      </header>

      {/* Services Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BARBER_SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-stone-900/60 rounded-2xl p-6 border border-stone-800/80 hover:border-stone-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base text-white">{s.name}</h3>
                  <span className="font-mono font-bold text-amber-400 text-sm">{s.price}</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-stone-500">{s.time}</span>
                <a
                  href="#agendar"
                  onClick={() => setSelectedService(s.name)}
                  className="text-stone-300 hover:text-white font-semibold"
                >
                  Selecionar este →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <section id="agendar" className="bg-stone-900/80 rounded-3xl p-6 sm:p-10 border border-stone-800 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-white">Agendamento de Horário</h2>
            <p className="text-xs text-stone-400">Escolha o serviço e horário de sua preferência para enviar direto ao barbeiro.</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Seu Nome *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Rodrigo Mendes"
                className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Telefone WhatsApp *</label>
                <input
                  type="text"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="(17) 99253-7024"
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Serviço</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
                >
                  {BARBER_SERVICES.map((s) => (
                    <option key={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-stone-400">Horário Disponível Hoje</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      selectedSlot === slot
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-950 text-stone-400 border border-stone-800'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs transition-colors mt-2"
            >
              Confirmar Agendamento no WhatsApp
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
