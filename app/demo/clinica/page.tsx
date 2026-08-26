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
  Check,
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Smile,
  Zap,
  Building,
  Video,
  X,
  MessageSquare
} from 'lucide-react';

interface TreatmentDetail {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  price: string;
  time: string;
  recovery: string;
  icon: string;
  badge: string;
  benefits: string[];
}

const TREATMENTS_DATA: TreatmentDetail[] = [
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial & Botox Preventivo',
    category: 'Estética Avançada',
    desc: 'Suavização de linhas de expressão, volumização labial anatômica e contorno de mandíbula com ácido hialurônico de alta pureza.',
    fullDesc: 'Procedimento 100% individualizado feito após escaneamento facial digital 3D. Utilizamos apenas as melhores marcas mundiais de ácido hialurônico e toxina botulínica para garantir resultados elegantes, naturais e sem exageros.',
    price: 'A partir de R$ 890,00',
    time: '45 minutos',
    recovery: 'Imediata (sem repouso)',
    icon: '✨',
    badge: 'DESTAQUE ESTÉTICO',
    benefits: ['Rejuvenescimento natural', 'Lábios definidos e hidratados', 'Contorno mandibular marcante', 'Sem necessidade de cortes'],
  },
  {
    id: 'implantes',
    title: 'Implantes Dentários Guiados por Computador',
    category: 'Reabilitação Oral',
    desc: 'Recupere a mastigação firme e o prazer de sorrir com implantes suíços Straumann de cicatrização ultrarrápida em até 21 dias.',
    fullDesc: 'Cirurgia guiada por computador sem cortes desnecessários com bisturi e sem pontos. O paciente pode optar por sedação consciente com óxido nitroso, não sentindo absolutamente nenhuma dor durante todo o processo.',
    price: 'Parcelamento em até 24x',
    time: '60 minutos',
    recovery: '24 a 48 horas',
    icon: '🦷',
    badge: 'RECUPERE SEU SORRISO',
    benefits: ['Sedação consciente sem dor', 'Pinos de titânio suíço Straumann', 'Mastigação 100% restaurada', 'Garantia vitalícia do fabricante'],
  },
  {
    id: 'lentes',
    title: 'Lentes de Contato Dental em Porcelana Pura',
    category: 'Estética do Sorriso',
    desc: 'Transformação estética do sorriso com lâminas ultrafinas de 0.2mm de porcelana E.max para corrigir cor, formato e alinhamento.',
    fullDesc: 'As lentes de contato dental são desenhadas digitalmente no computador (CAD/CAM) para harmonizar perfeitamente com os traços do seu rosto. Não mancham com café ou vinho e possuem durabilidade superior a 15 anos.',
    price: 'Planejamento Digital 3D',
    time: '2 sessões',
    recovery: 'Imediata',
    icon: '💎',
    badge: 'SORRISO DOS FAMOSOS',
    benefits: ['Porcelana pura que não mancha', 'Planejamento com simulação antes de fazer', 'Dentes brancos e simétricos', 'Durabilidade superior a 15 anos'],
  },
  {
    id: 'clareamento',
    title: 'Clareamento Dental a Laser Luz Violeta',
    category: 'Estética Rápida',
    desc: 'Dentes até 5 tons mais brancos em 1 sessão de 50 minutos com tecnologia de luz violeta fria que não causa sensibilidade.',
    fullDesc: 'A mais moderna tecnologia mundial de clareamento dental. Diferente dos lasers antigos que esquentavam o dente, a luz violeta atua quebrando as moléculas de pigmento sem agredir o esmalte dental.',
    price: 'R$ 490,00 / sessão',
    time: '50 minutos',
    recovery: 'Imediata',
    icon: '⚡',
    badge: 'RESULTADO IMEDIATO',
    benefits: ['Dentes até 5 tons mais claros', 'Zero sensibilidade pós-sessão', 'Aplicação de gel protetor remineralizante', 'Resultado visível na hora'],
  },
  {
    id: 'invisalign',
    title: 'Aparelho Invisível (Alinhadores Transparentes)',
    category: 'Ortodontia Digital',
    desc: 'Alinhe seus dentes sem fios de metal nem braquetes com alinhadores transparentes removíveis e confortáveis.',
    fullDesc: 'O tratamento ortodôntico mais moderno do mundo. Você pode retirar os alinhadores para comer e escovar os dentes, e já vê a simulação do resultado final antes mesmo de iniciar o tratamento.',
    price: 'Mensalidades Acessíveis',
    time: '6 a 12 meses',
    recovery: 'Sem dor',
    icon: '🛡️',
    badge: '100% INVISÍVEL',
    benefits: ['Totalmente transparente e discreto', 'Removível para comer', 'Tratamento até 2x mais rápido', 'Sem machucar bochechas'],
  },
  {
    id: 'checkup',
    title: 'Check-Up Digital com Câmera Intraoral',
    category: 'Prevenção & Saúde',
    desc: 'Exame preventivo detalhado com câmera que aumenta a imagem dos seus dentes em até 60x para detectar problemas precocemente.',
    fullDesc: 'Limpeza profunda com ultrassom e jato de bicarbonato de sódio micronizado, aplicação de flúor e diagnóstico completo em tela de alta resolução para você acompanhar a saúde de cada dente.',
    price: 'R$ 220,00',
    time: '40 minutos',
    recovery: 'Imediata',
    icon: '🩺',
    badge: 'SAÚDE PREVENTIVA',
    benefits: ['Diagnóstico com imagem 60x', 'Limpeza indolor com ultrassom', 'Remoção completa de tártaro e manchas', 'Prevenção de cáries e gengivite'],
  },
];

const CLINIC_DOCTORS = [
  {
    name: 'Dra. Mariana Costa',
    role: 'Responsável Técnica & Harmonização Orofacial',
    registry: 'CRO/SP 112.450',
    bio: 'Pós-graduada pela New York University (NYU) em estética facial. Mais de 12 anos de atuação e mais de 3.500 pacientes transformados com técnicas de naturalidade.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80',
    specialties: ['Harmonização Facial', 'Lentes de Porcelana', 'Botox'],
  },
  {
    name: 'Dr. Roberto Almeida',
    role: 'Mestre em Implantodontia & Reabilitação Oral',
    registry: 'CRO/SP 98.320',
    bio: 'Mestre pela USP em Cirurgia e Prótese sobre Implante. Membro da International Team for Implantology (ITI - Suíça) com mais de 5.000 implantes realizados.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
    specialties: ['Implantes Guiados', 'Enxertos Ósseos', 'Sedação'],
  },
  {
    name: 'Dra. Camila Nogueira',
    role: 'Especialista em Ortodontia Digital & Invisalign',
    registry: 'CRO/SP 134.890',
    bio: 'Invisalign Top Doctor Diamond. Especialista em acelerar tratamentos ortodônticos em adultos e crianças com tecnologia de escaneamento intraoral 3D.',
    image: 'https://images.unsplash.com/photo-1594824813515-322199b5314e?auto=format&fit=crop&w=500&q=80',
    specialties: ['Invisalign', 'Ortodontia Estética', 'Bruxismo'],
  },
];

const AMENITIES = [
  { title: 'Scanner 3D iTero', desc: 'Sem massinhas na boca! Escaneamento digital em 60 segundos com simulação do seu novo sorriso.' },
  { title: 'Sedação Consciente', desc: 'Tratamentos 100% sem dor ou ansiedade com óxido nitroso para você relaxar totalmente.' },
  { title: 'TV no Teto com Netflix', desc: 'Assista seus filmes e séries favoritos enquanto cuidamos do seu sorriso com conforto máximo.' },
  { title: 'Estacionamento com Manobrista', desc: 'Conveniência total no coração da cidade com vagas privativas e manobrista gratuito.' },
];

const PATIENT_STORIES = [
  {
    name: 'Fernanda Vasconcelos',
    role: 'Empresária',
    text: 'Eu tinha vergonha de sorrir em fotos e reuniões. Fiz minhas lentes de porcelana com a Dra. Mariana e foi a melhor decisão da minha vida! O resultado ficou ultra natural e o atendimento da equipe é de outro mundo.',
    rating: 5,
    treatment: 'Lentes de Contato Dental',
  },
  {
    name: 'Gabriel Mendes',
    role: 'Arquiteto',
    text: 'Tinha pavor de dentista por traumas do passado. Fiz 2 implantes com a sedação com gás e não senti absolutamente nada! Dormi relaxado e acordei com o dente pronto. Recomendo de olhos fechados!',
    rating: 5,
    treatment: 'Implantes Straumann',
  },
  {
    name: 'Patrícia Lima',
    role: 'Advogada',
    text: 'Fiz a harmonização e o clareamento antes do meu casamento. Meu rosto ficou suave, descansado e meus dentes super brancos. Todos os convidados elogiaram!',
    rating: 5,
    treatment: 'Harmonização & Clareamento',
  },
];

export default function ClinicaUltraDemoPage() {
  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<TreatmentDetail | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Booking Form State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientService, setPatientService] = useState('Harmonização Facial & Botox Preventivo');
  const [patientPeriod, setPatientPeriod] = useState('Manhã (08h às 12h)');
  const [patientDate, setPatientDate] = useState('');
  const [patientNotes, setPatientNotes] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `🩺 *NOVO AGENDAMENTO DE CONSULTA - CLÍNICA VIP* 🩺%0A%0A`;
    text += `👤 *Paciente:* ${patientName}%0A`;
    text += `📱 *WhatsApp:* ${patientPhone}%0A`;
    text += `✨ *Tratamento de Interesse:* ${patientService}%0A`;
    text += `📅 *Data Preferencial:* ${patientDate || 'A combinar'}%0A`;
    text += `⏰ *Período Desejado:* ${patientPeriod}%0A`;
    if (patientNotes) {
      text += `📝 *Observações/Dúvidas:* ${patientNotes}%0A`;
    }
    text += `%0APor favor, confirmem os horários livres na agenda da recepção!`;

    window.open(`https://wa.me/5517992537024?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-black pb-32">
      {/* 🚀 TOP SELLER BAR 🚀 */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-all">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden lg:inline text-cyan-100 font-mono">• Demonstração de Plataforma para Clínicas & Odontologia VIP</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20a%20demonstração%20completa%20da%20Clínica%20e%20gostaria%20de%20um%20site%20nesse%20nível%20para%20meu%20consultório!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-4 py-1.5 rounded-xl font-black hover:bg-cyan-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md text-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* 🏥 CLINIC HEADER 🏥 */}
      <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-10 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight text-white">CLÍNICA ODONTO & ESTÉTICA</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[9px] font-black tracking-wider uppercase border border-cyan-500/30">
                  PADRÃO OURO
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Excelência Médica & Odontologia Digital 3D</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-xs transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 🌟 HERO SECTION 🌟 */}
      <header className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center border-b border-slate-800/80">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-6">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Clínica de Referência em Reabilitação Oral & Harmonização</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Transforme sua autoestima com o sorriso que você{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            sempre sonhou.
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Tecnologia 3D de precisão, sedação consciente 100% sem dor e uma equipe multidisciplinar de mestres e doutores para cuidar da sua saúde e beleza facial.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>Agendar Consulta de Avaliação</span>
          </button>
          <a
            href="https://wa.me/5517992537024?text=Olá!%20Gostaria%20de%20falar%20com%20a%20recepção%20da%20Clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-850 text-white font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Falar com a Recepção no WhatsApp</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-16 pt-8 border-t border-slate-800/80">
          <div className="text-center">
            <p className="text-3xl font-black text-white">+7.200</p>
            <p className="text-xs text-slate-400 mt-1">Pacientes Atendidos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-cyan-400">14 Anos</p>
            <p className="text-xs text-slate-400 mt-1">De Excelência Médica</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-blue-400">4.9 ★</p>
            <p className="text-xs text-slate-400 mt-1">Nota no Google (1.100+ avaliações)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Scanner Digital 3D</p>
          </div>
        </div>
      </header>

      {/* 💎 TREATMENTS GRID 💎 */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">Especialidades Clínicas</span>
          <h2 className="text-3xl font-black text-white">Nossos Principais Tratamentos</h2>
          <p className="text-xs text-slate-400">Clique em qualquer procedimento para ver detalhes completos e benefícios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/50 transition-all group flex flex-col justify-between shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{t.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {t.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.category}</span>
                  <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors mt-0.5">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 mt-2 leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  {t.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Condição Especial:</span>
                  <span className="text-xs font-bold text-cyan-400">{t.price}</span>
                </div>

                <button
                  onClick={() => setSelectedTreatmentModal(t)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors flex items-center gap-1"
                >
                  <span>Saiba Mais</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏢 CLINIC AMENITIES & INFRASTRUCTURE 🏢 */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">Estrutura de Ponta</span>
          <h2 className="text-3xl font-black text-white">Conforto de Alto Luxo para Você</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((am, idx) => (
            <div key={idx} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 font-bold text-sm">
                0{idx + 1}
              </div>
              <h4 className="font-black text-white text-base">{am.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{am.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🩺 MEDICAL TEAM 🩺 */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">Corpo Clínico</span>
          <h2 className="text-3xl font-black text-white">Especialistas e Mestres</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_DOCTORS.map((doc, idx) => (
            <div key={idx} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <img src={doc.image} alt={doc.name} className="w-full h-52 rounded-2xl object-cover border border-cyan-500/20" />
                <div>
                  <h4 className="text-lg font-black text-white">{doc.name}</h4>
                  <p className="text-xs text-cyan-400 font-bold">{doc.role}</p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">{doc.registry}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{doc.bio}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                {doc.specialties.map((s, sIdx) => (
                  <span key={sIdx} className="text-[10px] bg-slate-950 text-cyan-300 px-2.5 py-1 rounded-md border border-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ PATIENT REVIEWS ⭐ */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">Histórias de Sucesso</span>
          <h2 className="text-3xl font-black text-white">O Que Nossos Pacientes Dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATIENT_STORIES.map((p, idx) => (
            <div key={idx} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex text-amber-400 text-xs">{'★'.repeat(p.rating)}</div>
                <p className="text-xs text-slate-300 leading-relaxed italic">"{p.text}"</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-white text-xs">{p.name}</h5>
                  <span className="text-[10px] text-slate-500">{p.role}</span>
                </div>
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  {p.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ MODAL DE DETALHES DO TRATAMENTO 🛠️ */}
      {selectedTreatmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-700 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedTreatmentModal.icon}</span>
                <div>
                  <h3 className="text-base font-black text-white">{selectedTreatmentModal.title}</h3>
                  <span className="text-[10px] text-cyan-400 font-bold">{selectedTreatmentModal.category}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTreatmentModal(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedTreatmentModal.fullDesc}</p>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div>
                <span className="text-[10px] text-slate-500 block">Duração do Procedimento:</span>
                <span className="font-bold text-white">{selectedTreatmentModal.time}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Recuperação:</span>
                <span className="font-bold text-white">{selectedTreatmentModal.recovery}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white block">Vantagens deste Tratamento:</label>
              {selectedTreatmentModal.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-slate-400 block">Investimento:</span>
                <span className="text-sm font-black text-cyan-400">{selectedTreatmentModal.price}</span>
              </div>

              <button
                onClick={() => {
                  setPatientService(selectedTreatmentModal.title);
                  setSelectedTreatmentModal(null);
                  setIsBookingModalOpen(true);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black text-xs shadow-lg transition-all hover:scale-105"
              >
                Agendar Este Tratamento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📅 MODAL DE AGENDAMENTO COMPLETO 📅 */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-black text-white">Agendar Avaliação VIP</h3>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Seu Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ex: Ana Carolina Ferreira"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Seu WhatsApp para Confirmação *</label>
                <input
                  type="text"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="(17) 99253-7024"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tratamento de Interesse *</label>
                <select
                  value={patientService}
                  onChange={(e) => setPatientService(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-cyan-500"
                >
                  {TREATMENTS_DATA.map((t) => (
                    <option key={t.id}>{t.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Data Preferencial</label>
                  <input
                    type="date"
                    value={patientDate}
                    onChange={(e) => setPatientDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Período do Dia</label>
                  <select
                    value={patientPeriod}
                    onChange={(e) => setPatientPeriod(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-cyan-500"
                  >
                    <option>Manhã (08h às 12h)</option>
                    <option>Tarde (13h às 18h)</option>
                    <option>Noite (18h às 20h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Observações ou Dúvidas (Opcional)</label>
                <textarea
                  rows={2}
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  placeholder="Ex: Gostaria de saber sobre formas de pagamento..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirmar Agendamento no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
