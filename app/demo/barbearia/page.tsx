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
  ShieldCheck,
  Award,
  Crown,
  Check,
  X,
  UserCheck,
  Coffee,
  Gamepad2
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  time: string;
  desc: string;
  badge?: string;
  popular?: boolean;
}

const BARBER_SERVICES: ServiceItem[] = [
  {
    id: 's-1',
    name: 'Corte Tradicional / Fade Degradê na Navalha',
    category: 'Cabelo',
    price: 'R$ 45,00',
    time: '35 min',
    desc: 'Degradê perfeito (Low, Mid, High ou Taper Fade), acabamento afiado na navalha, lavagem refrescante com mentol e finalização com pomada matte importada.',
    badge: 'MAIS PEDIDO ⚡',
    popular: true,
  },
  {
    id: 's-2',
    name: 'Barboterapia Clássica com Toalha Quente',
    category: 'Barba',
    price: 'R$ 40,00',
    time: '30 min',
    desc: 'Esfoliação facial com microesferas, aplicação de toalha quente com essência de eucalipto, massagem relaxante, alinhamento milimétrico na navalha e balm hidratante.',
    badge: 'RELAX TOTAL 🧖‍♂️',
    popular: true,
  },
  {
    id: 's-3',
    name: 'Combo Supreme (Cabelo + Barba + Sobrancelha)',
    category: 'Combos VIP',
    price: 'R$ 80,00',
    time: '55 min',
    desc: 'A experiência completa do homem moderno: corte degradê completo, barboterapia com toalha quente, alinhamento de sobrancelha na navalha e chopp artesanal cortesia.',
    badge: 'MELHOR CUSTO BENEFÍCIO ⭐',
    popular: true,
  },
  {
    id: 's-4',
    name: 'Platinado Global / Nevou / Matização',
    category: 'Química & Cor',
    price: 'R$ 130,00',
    time: '90 min',
    desc: 'Descoloração global com plex protetor anti-quebra, matização perolada ou acinzentada sem queimar o couro cabeludo.',
    badge: 'TENDÊNCIA 🔥',
  },
  {
    id: 's-5',
    name: 'Camuflagem de Fios Brancos (Barba ou Cabelo)',
    category: 'Química & Cor',
    price: 'R$ 35,00',
    time: '20 min',
    desc: 'Tonalização rápida e discreta que disfarça até 70% dos fios brancos com aspecto 100% natural e sem tom avermelhado.',
  },
  {
    id: 's-6',
    name: 'Alinhamento e Limpeza de Pele Facial Black Mask',
    category: 'Estética Masculina',
    price: 'R$ 30,00',
    time: '20 min',
    desc: 'Máscara negra de carvão ativado com vapor de ozônio para remoção de cravos e oleosidade profunda dos poros.',
  },
];

const BARBER_TEAM = [
  {
    name: 'Mestre Rodrigo "Blade"',
    role: 'Head Barber & Especialista em Degradê',
    exp: '14 anos de profissão • Premiado no Barber Week',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    cuts: '+12.000 cortes',
  },
  {
    name: 'Lucas "Old School"',
    role: 'Mestre em Barboterapia & Navalha Tradicional',
    exp: '9 anos de profissão • Especialista em Barbas Longas',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    cuts: '+8.500 barbas',
  },
  {
    name: 'Gabriel "FreeStyle"',
    role: 'Especialista em Platinado, Riscos & Tendências',
    exp: '7 anos de profissão • Especialista em Cortes Urbanos',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    cuts: '+6.000 platinados',
  },
];

const TIME_SLOTS = [
  '09:00', '09:45', '10:30', '11:15', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '19:45'
];

export default function BarbeariaUltraDemoPage() {
  const [selectedService, setSelectedService] = useState<string>('Combo Supreme (Cabelo + Barba + Sobrancelha)');
  const [selectedBarber, setSelectedBarber] = useState<string>('Qualquer Barbeiro Disponível');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('16:00');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');

  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `💈 *NOVO AGENDAMENTO - BARBEARIA VINTAGE CLUB* 💈%0A%0A`;
    text += `👤 *Cliente:* ${clientName}%0A`;
    text += `📱 *WhatsApp:* ${clientPhone}%0A`;
    text += `✂️ *Serviço:* ${selectedService}%0A`;
    text += `💈 *Barbeiro:* ${selectedBarber}%0A`;
    text += `📅 *Data:* ${bookingDate || 'Hoje'}%0A`;
    text += `⏰ *Horário:* ${selectedTimeSlot}%0A%0A`;
    text += `Por favor, confirmem o horário no sistema da barbearia! 🍺`;

    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  const categories = ['Todos', 'Combos VIP', 'Cabelo', 'Barba', 'Química & Cor', 'Estética Masculina'];
  const filteredServices = activeCategory === 'Todos'
    ? BARBER_SERVICES
    : BARBER_SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-600 selection:text-black pb-32 relative overflow-x-hidden">
      {/* 💈 THEMED VINTAGE BARBER GOLDEN EMBERS & LEATHER GLOW 💈 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial-gradient pointer-events-none z-0 opacity-50" />
      <div className="fixed top-[-5%] left-[5%] w-[500px] h-[500px] bg-amber-700/20 rounded-full blur-[140px] pointer-events-none animate-aurora-1 z-0" />
      <div className="fixed top-[30%] right-[5%] w-[550px] h-[550px] bg-yellow-600/18 rounded-full blur-[150px] pointer-events-none animate-aurora-2 z-0" />
      <div className="fixed bottom-[10%] left-[10%] w-[600px] h-[600px] bg-amber-600/15 rounded-full blur-[160px] pointer-events-none animate-float-slow z-0" />

      {/* Floating Golden Sparks */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[32%] left-[14%] w-2 h-2 rounded-full bg-amber-400/50 blur-xs animate-ember-1" />
        <div className="absolute top-[58%] right-[18%] w-3 h-3 rounded-full bg-yellow-500/40 blur-xs animate-ember-2" />
        <div className="absolute top-[78%] left-[20%] w-2 h-2 rounded-full bg-amber-600/40 blur-xs animate-ember-3" />
        <div className="absolute top-[16%] right-[14%] w-2.5 h-2.5 rounded-full bg-yellow-400/50 blur-xs animate-ember-4" />
      </div>
      {/* 🚀 TOP SELLER BAR 🚀 */}
      <div className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-all">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden lg:inline text-amber-100 font-mono">• Demonstração de Plataforma para Barbearias & Salões VIP</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20a%20demonstração%20completa%20da%20Barbearia%20e%20gostaria%20de%20um%20site%20nesse%20nível%20para%20meu%20negócio!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-stone-950 px-4 py-1.5 rounded-xl font-black hover:bg-amber-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md text-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* 💈 BARBERSHOP HEADER 💈 */}
      <nav className="border-b border-stone-800/80 bg-stone-950/90 backdrop-blur-md sticky top-10 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-black shadow-lg shadow-amber-600/20 font-black">
              <Scissors className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight text-white uppercase">VINTAGE CLUB</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-black tracking-wider uppercase border border-amber-500/30">
                  PREMIUM
                </span>
              </div>
              <span className="text-[11px] text-stone-400">Barbearia Clássica & Cervejaria Artesanal</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#agendar"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black font-black text-xs transition-all hover:scale-105 shadow-lg shadow-amber-600/25"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Horário</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 🌟 HERO SECTION 🌟 */}
      <header className="relative py-16 sm:py-24 px-4 sm:px-6 text-center max-w-5xl mx-auto space-y-6 border-b border-stone-800/80">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/15 border border-amber-600/30 text-amber-400 text-xs font-black uppercase tracking-wider">
          <Scissors className="w-4 h-4 text-amber-500" />
          <span>Estilo Clássico • Cerveja Gelada • Atendimento VIP</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.1]">
          BARBEARIA <span className="text-amber-500">VINTAGE CLUB</span>
        </h1>

        <p className="text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Muito mais que um simples corte de cabelo. Um clube exclusivo para homens com toalha quente, navalha afiada, sinuca, videogame, chopp artesanal na torneira e café gourmet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#agendar"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black font-black text-sm shadow-xl shadow-amber-600/25 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Marcar Meu Horário Agora</span>
          </a>
          <a
            href="https://wa.me/5517992537024?text=Fala%20pessoal%20da%20Barbearia!%20Gostaria%20de%20tirar%20uma%20dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-stone-900 border border-stone-800 hover:bg-stone-850 text-white font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>Falar no WhatsApp da Barbearia</span>
          </a>
        </div>

        {/* Perks Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-4xl mx-auto">
          <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800 flex items-center gap-3">
            <Beer className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="font-bold text-white text-xs block">Chopp Artesanal Free</span>
              <span className="text-[11px] text-stone-400">Gelado em todo atendimento</span>
            </div>
          </div>
          <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800 flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="font-bold text-white text-xs block">PS5 & Sinuca</span>
              <span className="text-[11px] text-stone-400">Espaço de lazer liberado</span>
            </div>
          </div>
          <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800 flex items-center gap-3">
            <Coffee className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="font-bold text-white text-xs block">Café Espresso</span>
              <span className="text-[11px] text-stone-400">Grãos nobres selecionados</span>
            </div>
          </div>
          <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="font-bold text-white text-xs block">100% Descartável</span>
              <span className="text-[11px] text-stone-400">Máxima higiene e biossegurança</span>
            </div>
          </div>
        </div>
      </header>

      {/* 👑 CLUBE DE ASSINATURA VIP (MENSALIDADE) 👑 */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 rounded-3xl p-8 sm:p-10 border-2 border-amber-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">Clube de Assinatura Vintage VIP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Corte Cabelo e Barba Ilimitados Todo Mês</h3>
            <p className="text-xs text-stone-300 max-w-lg leading-relaxed">
              Mantenha o visual sempre na régua sem se preocupar com quanto vai gastar. Pague uma mensalidade fixa e corte quantas vezes quiser.
            </p>
            <div className="flex gap-4 text-xs text-stone-300 pt-2 flex-wrap">
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-400" /> Cortes Ilimitados</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-400" /> Chopp liberado</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-400" /> Desconto em produtos</span>
            </div>
          </div>

          <div className="text-center md:text-right shrink-0 bg-stone-950 p-6 rounded-2xl border border-amber-500/30">
            <span className="text-xs text-stone-400 block">Apenas</span>
            <span className="text-3xl sm:text-4xl font-black text-amber-400 block">R$ 89,90</span>
            <span className="text-[10px] text-stone-400 block mb-3">por mês (sem fidelidade)</span>
            <a
              href="https://wa.me/5517992537024?text=Olá!%20Gostaria%20de%20assinar%20o%20Clube%20VIP%20de%20Cortes%20da%20Barbearia!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs shadow-md transition-all inline-block"
            >
              Assinar Clube VIP
            </a>
          </div>
        </div>
      </section>

      {/* ✂️ SERVICES CATALOG ✂️ */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-amber-500 uppercase tracking-widest block">Tabela Completa de Serviços</span>
          <h2 className="text-3xl font-black text-white">Escolha o seu Cuidado</h2>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-amber-600 text-black shadow-lg shadow-amber-600/20'
                  : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="divide-y divide-stone-800 bg-stone-900/90 rounded-3xl border border-stone-800 p-6 sm:p-8 shadow-2xl space-y-4">
          {filteredServices.map((s) => (
            <div key={s.id} className="pt-5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-black text-white">{s.name}</h3>
                  <span className="text-[10px] font-bold bg-stone-800 text-amber-400 px-2.5 py-0.5 rounded-full border border-stone-700">{s.time}</span>
                  {s.badge && (
                    <span className="text-[9px] font-black uppercase text-black bg-amber-500 px-2 py-0.5 rounded shadow-sm">
                      {s.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-400 max-w-xl leading-relaxed">{s.desc}</p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                <span className="text-xl font-black text-amber-400">{s.price}</span>
                <a
                  href="#agendar"
                  onClick={() => setSelectedService(s.name)}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-black font-black text-xs transition-all hover:scale-105 shadow-md shadow-amber-600/20"
                >
                  Selecionar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💈 BARBER TEAM 💈 */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-t border-stone-800/80 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-black text-amber-500 uppercase tracking-widest block">Nossos Mestres Barbeiros</span>
          <h3 className="text-2xl font-black text-white">Artistas da Navalha</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {BARBER_TEAM.map((b, idx) => (
            <div key={idx} className="bg-stone-900 rounded-3xl p-5 border border-stone-800 space-y-3 text-center">
              <img
                src={b.image}
                alt={b.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80';
                }}
                className="w-full h-48 rounded-2xl object-cover border border-amber-500/20"
              />
              <div>
                <h4 className="font-black text-white text-base">{b.name}</h4>
                <p className="text-xs text-amber-400 font-bold">{b.role}</p>
                <p className="text-[11px] text-stone-400 mt-1">{b.exp}</p>
              </div>
              <span className="inline-block text-[10px] bg-stone-950 text-amber-400 px-3 py-1 rounded-full border border-stone-800 font-bold">
                {b.cuts} realizados
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 📅 AGENDAMENTO RÁPIDO NO WHATSAPP 📅 */}
      <section id="agendar" className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Marque seu Horário em 30 Segundos</h2>
            <p className="text-xs text-stone-400">Escolha o serviço, barbeiro e horário de sua preferência.</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">Seu Nome Completo *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Pedro Henrique Silveira"
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1">Seu WhatsApp para Confirmação *</label>
              <input
                type="text"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="(17) 99253-7024"
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1">Serviço Selecionado</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
                >
                  {BARBER_SERVICES.map((s) => (
                    <option key={s.id}>{s.name} - {s.price}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1">Barbeiro de Preferência</label>
                <select
                  value={selectedBarber}
                  onChange={(e) => setSelectedBarber(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-xs outline-none focus:border-amber-500"
                >
                  <option>Qualquer Barbeiro Disponível</option>
                  <option>Mestre Rodrigo "Blade"</option>
                  <option>Lucas "Old School"</option>
                  <option>Gabriel "FreeStyle"</option>
                </select>
              </div>
            </div>

            {/* Time Slot Picker Grid */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-bold text-stone-300">Escolha o Horário de Atendimento:</label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedTimeSlot === slot
                        ? 'border-amber-500 bg-amber-500 text-black font-black'
                        : 'border-stone-800 bg-stone-950 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black font-black text-sm shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
            >
              <Scissors className="w-4 h-4" />
              <span>Confirmar Agendamento no WhatsApp ({selectedTimeSlot})</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
