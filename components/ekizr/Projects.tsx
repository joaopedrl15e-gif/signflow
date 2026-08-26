'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  ExternalLink,
  Github,
  CheckCircle2,
  X,
  Eye,
  Layers,
  Sparkles
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  categoryType: 'saas' | 'food' | 'health' | 'services';
  shortDesc: string;
  fullDesc: string;
  problemSolved: string;
  features: string[];
  techs: string[];
  image: string;
  link: string;
  github?: string;
}

const PROJECTS_LIST: Project[] = [
  {
    id: 'signflow',
    title: 'SignFlow • Propostas Comerciais & Assinatura Digital',
    category: 'SaaS Platform',
    categoryType: 'saas',
    shortDesc: 'Plataforma SaaS moderna para criação de propostas comerciais interativas e coleta de assinaturas digitais na tela com envio direto no WhatsApp.',
    fullDesc: 'O SignFlow substitui os antigos arquivos em PDF estáticos por propostas interativas de alto luxo que os clientes podem abrir no celular e assinar na tela em menos de 1 minuto, com validação jurídica e envio pelo WhatsApp.',
    problemSolved: 'Elimina propostas esquecidas em PDFs pesados, acelerando a taxa de fechamento de negócios.',
    features: [
      'Geração de propostas com cálculo dinâmico de parcelas',
      'Assinatura digital na tela do celular e desktop',
      'Validade jurídica eletrônica (MP 2.200-2 / Brasil)',
      'Envio formatado em 1 clique para WhatsApp',
      'Dashboard gerencial com acompanhamento em tempo real',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Canvas API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    link: '/dashboard',
    github: 'https://github.com/jaopimentel',
  },
  {
    id: 'hamburgueria',
    title: 'Artisan Burger Co. • Cardápio Digital & Delivery',
    category: 'Food & E-commerce',
    categoryType: 'food',
    shortDesc: 'Plataforma de pedidos online com cardápio artesanal, personalização do ponto da carne/adicionais e checkout direto no WhatsApp.',
    fullDesc: 'Sistema completo voltado para hamburguerias e restaurantes que desejam um cardápio digital próprio sem pagar taxas por pedido em marketplaces.',
    problemSolved: 'Centraliza pedidos no WhatsApp com formato padronizado, reduzindo erros de anotação e agilizando a cozinha.',
    features: [
      'Cardápio dividido por categorias com busca instantânea',
      'Modal de personalização (ponto da carne, adicionais e observações)',
      'Carrinho inteligente com cálculo de taxa de entrega e cupons',
      'Envio do pedido 100% formatado no WhatsApp',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=80',
    link: '/demo/hamburgueria',
  },
  {
    id: 'clinica',
    title: 'Studio Odonto & Estética • Saúde & Harmonização VIP',
    category: 'Healthcare & Aesthetic',
    categoryType: 'health',
    shortDesc: 'Página institucional de alto padrão para consultórios médicos e odontológicos com modal de procedimentos 3D e agendamento online.',
    fullDesc: 'Página institucional moderna desenhada para transmitir credibilidade médica, apresentar o corpo clínico especializado e captar pacientes qualificados.',
    problemSolved: 'Aumenta a autoridade de consultórios na internet e agiliza a triagem de novos pacientes pela recepção.',
    features: [
      'Apresentação de tratamentos com modal explicativo',
      'Destaque do corpo clínico com certificações (CRO/CRM)',
      'Formulário inteligente de agendamento por período do dia',
      'Integração direta com o WhatsApp da clínica',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
    link: '/demo/clinica',
  },
  {
    id: 'barbearia',
    title: 'Machado & Navalha • Barbearia Clássica & Agendamento',
    category: 'Services & Booking',
    categoryType: 'services',
    shortDesc: 'Sistema para barbearias tradicionais com tabela interativa de serviços, clube de assinaturas e seletor de horários em tempo real.',
    fullDesc: 'Experiência digital masculina completa para barbearias que desejam modernizar seu atendimento, destacar seus diferenciais de lazer e lotar a agenda dos barbeiros.',
    problemSolved: 'Elimina trocas de mensagens manuais para agendamento, permitindo que o cliente reserve o horário desejado em segundos.',
    features: [
      'Seletor interativo de horários de atendimento',
      'Apresentação do time de mestres barbeiros',
      'Módulo de Clube de Assinatura VIP para cortes mensais',
      'Confirmação instantânea de agendamento no WhatsApp',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80',
    link: '/demo/barbearia',
  },
  {
    id: 'advocacia',
    title: 'Pimentel & Associados • Advocacia & Consultoria',
    category: 'Corporate & Law',
    categoryType: 'services',
    shortDesc: 'Plataforma corporativa sóbria para escritórios de advocacia com apresentação de áreas de atuação e intake de casos sob sigilo OAB.',
    fullDesc: 'Desenvolvido sob medida para bancas de advocacia que buscam autoridade institucional sólida e canal de atendimento seguro para clientes.',
    problemSolved: 'Facilita a triagem confidencial de casos com classificação de urgência antes do primeiro contato.',
    features: [
      'Apresentação das áreas do direito atendidas',
      'Métricas de tradição jurídica e atuação dos sócios',
      'Formulário confidencial com nível de urgência do caso',
      'Encaminhamento imediato para o plantão do escritório',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    link: '/demo/advocacia',
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'saas' | 'food' | 'health' | 'services'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_LIST.filter(
    (p) => filter === 'all' || p.categoryType === filter
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Laptop className="w-3.5 h-3.5" />
          <span>Featured Portfolio</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Projects & Case Studies
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Projetos desenvolvidos com foco em usabilidade de alto nível, design moderno e conversão real.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'saas', label: 'SaaS Platform' },
            { id: 'food', label: 'Food & Delivery' },
            { id: 'health', label: 'Healthcare' },
            { id: 'services', label: 'Services' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-[#07031e] text-zinc-400 hover:text-white border border-purple-500/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-3xl p-6 sm:p-7 bg-[#07031e]/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between space-y-5 shadow-xl hover:shadow-purple-950/40 relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Image Preview */}
              <div className="w-full h-56 rounded-2xl overflow-hidden relative bg-[#030014] border border-purple-500/20">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#030014]/90 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-300 border border-purple-500/30">
                  {proj.category}
                </span>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {proj.shortDesc}
                </p>
              </div>

              {/* Techs */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.techs.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-[#030014] text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(proj)}
                className="px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 text-purple-200 text-xs font-bold transition-colors flex items-center gap-1.5 border border-purple-500/30"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>Details</span>
              </button>

              <Link
                href={proj.link}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md shadow-purple-600/30 transition-all hover:scale-105 flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-[#07031e] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-purple-500/20">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-xl text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-56 rounded-2xl overflow-hidden bg-[#030014] border border-purple-500/20">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-1">
                  About the Project
                </h4>
                <p>{selectedProject.fullDesc}</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-1">
                  Problem Solved
                </h4>
                <p className="bg-[#030014] p-3 rounded-xl border border-purple-500/20 text-zinc-200">
                  {selectedProject.problemSolved}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-2">
                  Key Features
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/20 flex justify-between items-center">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-purple-950/40 text-zinc-300 text-xs font-semibold"
              >
                Close
              </button>

              <Link
                href={selectedProject.link}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
