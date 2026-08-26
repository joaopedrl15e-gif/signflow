'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Laptop,
  CheckCircle2,
  X,
  Code2,
  Layers,
  Smartphone,
  Eye
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  problemSolved: string;
  features: string[];
  techs: string[];
  image: string;
  link: string;
  isExternal?: boolean;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'signflow',
    title: 'SignFlow • Propostas Comerciais & Assinatura Digital',
    category: 'Software / SaaS',
    shortDesc: 'Solução digital criada para proporcionar uma experiência moderna, organizada e intuitiva de envio de propostas e coleta de assinaturas eletrônicas.',
    fullDesc: 'O SignFlow substitui os antigos arquivos em PDF estáticos por propostas interativas de alto luxo que os clientes podem abrir no celular e assinar na tela em menos de 1 minuto, com validação jurídica e envio pelo WhatsApp.',
    problemSolved: 'Acaba com o problema de orçamentos ignorados ou esquecidos em PDFs pesados, acelerando o tempo de resposta e fechamento de contratos de serviços.',
    features: [
      'Geração de propostas comerciais com cálculo automático',
      'Assinatura digital na tela do celular ou computador',
      'Validade jurídica (MP 2.200-2 / Brasil)',
      'Envio formatado em 1 clique para WhatsApp',
      'Painel de controle com acompanhamento de propostas',
    ],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'LocalStorage Auth', 'HTML5 Canvas'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    link: '/dashboard',
  },
  {
    id: 'hamburgueria',
    title: 'Burger House Gourmet • Cardápio Digital & Delivery',
    category: 'Alimentação & E-commerce',
    shortDesc: 'Plataforma interativa com cardápio completo, busca em tempo real, personalização de lanches e finalização de pedidos no WhatsApp.',
    fullDesc: 'Sistema completo voltado para hamburguerias e restaurantes que desejam um cardápio digital próprio sem pagar taxas por pedido em marketplaces.',
    problemSolved: 'Centraliza e organiza os pedidos recebidos no WhatsApp, evitando erros de anotação de endereço e facilitando a escolha de adicionais pelo cliente.',
    features: [
      'Cardápio dividido por categorias com busca instantânea',
      'Modal de personalização (ponto da carne, adicionais e observações)',
      'Carrinho inteligente com cálculo de taxa de entrega e cupons',
      'Envio do pedido 100% formatado no WhatsApp',
    ],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=80',
    link: '/demo/hamburgueria',
  },
  {
    id: 'clinica',
    title: 'Clínica Odonto & Estética VIP • Saúde Digital',
    category: 'Saúde & Estética',
    shortDesc: 'Interface de alto padrão para clínicas médicas e odontológicas com detalhamento de tratamentos 3D e agendamento de consultas.',
    fullDesc: 'Página institucional moderna desenhada para transmitir credibilidade médica, apresentar o corpo clínico especializado e captar pacientes qualificados.',
    problemSolved: 'Resolve a falta de autoridade de consultórios na internet e agiliza a triagem e confirmação de horários de avaliação pela equipe de recepção.',
    features: [
      'Apresentação de tratamentos com modal explicativo',
      'Destaque do corpo clínico com certificações (CRO/CRM)',
      'Formulário inteligente de agendamento por período do dia',
      'Integração direta com o WhatsApp da clínica',
    ],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
    link: '/demo/clinica',
  },
  {
    id: 'barbearia',
    title: 'Barbearia Vintage Club • Gestão & Agendamento',
    category: 'Beleza & Estilo',
    shortDesc: 'Plataforma para barbearias com tabela dinâmica de serviços, clube de assinaturas recorrentes e seletor de horários em tempo real.',
    fullDesc: 'Experiência digital masculina completa para barbearias que desejam modernizar seu atendimento, destacar seus diferenciais de lazer e lotar a agenda dos barbeiros.',
    problemSolved: 'Elimina as mensagens manuais perguntando "tem vaga hoje?", permitindo que o próprio cliente escolha o barbeiro, serviço e horário em segundos.',
    features: [
      'Seletor interativo de horários de atendimento',
      'Apresentação do time de mestres barbeiros',
      'Módulo de Clube de Assinatura VIP para cortes mensais',
      'Confirmação instantânea de agendamento no WhatsApp',
    ],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80',
    link: '/demo/barbearia',
  },
  {
    id: 'advocacia',
    title: 'Silva & Associados • Advocacia & Consultoria',
    category: 'Jurídico & Corporativo',
    shortDesc: 'Página corporativa sóbria para escritórios de advocacia com apresentação de áreas de atuação e intake de casos com sigilo profissional.',
    fullDesc: 'Desenvolvido sob medida para bancas de advocacia que buscam autoridade institucional sólida e canal de atendimento seguro para clientes.',
    problemSolved: 'Facilita a recepção de casos jurídicos com classificação de urgência e dados essenciais antes do primeiro contato.',
    features: [
      'Apresentação das áreas do direito atendidas',
      'Métricas de tradição jurídica e atuação dos sócios',
      'Formulário confidencial com nível de urgência do caso',
      'Encaminhamento imediato para o plantão do escritório',
    ],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    link: '/demo/advocacia',
  },
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-xs">
          <Laptop className="w-3.5 h-3.5" />
          <span>Portfólio em Ação</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Projetos que transformam ideias em experiências
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Cada projeto é pensado do zero com foco em velocidade, estética refinada e facilidade de navegação para o usuário final.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-2xl relative overflow-hidden space-y-6 hover:shadow-cyan-500/10"
          >
            <div className="space-y-4">
              {/* Project Image Mockup with depth */}
              <div className="w-full h-56 rounded-2xl overflow-hidden relative bg-slate-900 border border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#030712]/85 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
              </div>

              {/* Title & Short Description */}
              <div>
                <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techs.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
                {project.techs.length > 4 && (
                  <span className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-1 rounded-md">
                    +{project.techs.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2.5 rounded-xl glass-card hover:bg-slate-900 text-white font-bold text-xs transition-colors flex items-center gap-1.5 border border-slate-800"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ver detalhes</span>
              </button>

              <Link
                href={project.link}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <span>Ver projeto</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 INTERACTIVE PROJECT DETAILS MODAL 🔍 */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-[#030712] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden relative bg-slate-900 border border-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Explanation */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-cyan-400 mb-1">
                  Sobre o Projeto
                </h4>
                <p>{selectedProject.fullDesc}</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-cyan-400 mb-1">
                  Problema que procura resolver
                </h4>
                <p className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-slate-200">
                  {selectedProject.problemSolved}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-cyan-400 mb-2">
                  Principais Funcionalidades
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-cyan-400 mb-2">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-slate-900 text-cyan-300 px-3 py-1 rounded-lg border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold transition-colors"
              >
                Fechar
              </button>

              <Link
                href={selectedProject.link}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs shadow-lg transition-all hover:scale-105 flex items-center gap-1.5"
              >
                <span>Visualizar Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
