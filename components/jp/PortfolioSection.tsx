'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code,
  Boxes,
  Award,
  ExternalLink,
  ArrowRight,
  Eye,
  X,
  CheckCircle2,
  Globe,
  Database,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Layout,
  GitBranch,
  FolderGit2,
  Sparkles,
  CreditCard,
  Mail,
  BarChart3,
  Timer
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  objective: string;
  problemSolved: string;
  features: string[];
  techs: string[];
  image: string;
  link: string;
  isMain?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'signflow',
    title: 'SignFlow • Propostas Comerciais & Assinatura Digital',
    category: 'SaaS Platform',
    shortDesc: 'Uma solução digital desenvolvida para oferecer uma experiência moderna, organizada e intuitiva.',
    fullDesc: 'O SignFlow substitui os antigos arquivos em PDF estáticos por propostas comerciais interativas de alto luxo que os clientes podem abrir no celular ou computador e assinar na tela em menos de 1 minuto.',
    objective: 'Oferecer uma experiência moderna e descomplicada de fechamento de propostas para autônomos e agências.',
    problemSolved: 'Elimina o abandono de propostas comerciais presas em arquivos PDF pesados e acelera o aceite pelo cliente.',
    features: [
      'Geração de propostas interativas com cálculo de parcelas',
      'Assinatura digital na tela em celular e desktop',
      'Dashboard gerencial com acompanhamento em tempo real',
      'Exportação e compartilhamento simplificado',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Canvas API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    link: '/dashboard',
    isMain: true,
  },
  {
    id: 'hamburgueria',
    title: 'Artisan Burger Co. • Cardápio Digital & Delivery',
    category: 'Food & E-commerce',
    shortDesc: 'Cardápio digital artesanal com seleção de adicionais, ponto da carne e checkout organizado.',
    fullDesc: 'Experiência completa para restaurantes artesanais que desejam apresentar seu menu de forma atraente, permitindo personalizações do pedido de maneira fluida.',
    objective: 'Proporcionar uma experiência visual de dar água na boca e simplificar a escolha dos pratos pelo cliente.',
    problemSolved: 'Reduz ruídos no atendimento com opções padronizadas e cálculos automáticos de taxas.',
    features: [
      'Cardápio dividido por categorias com fotos em alta definição',
      'Modal interativo de personalização (ponto da carne, adicionais e observações)',
      'Carrinho inteligente com resumo do pedido',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=80',
    link: '/demo/hamburgueria',
  },
  {
    id: 'clinica',
    title: 'Studio Odonto & Estética • Saúde & Harmonização',
    category: 'Healthcare & Aesthetic',
    shortDesc: 'Página institucional de alto padrão para consultórios médicos e odontológicos com agendamento online.',
    fullDesc: 'Interface moderna desenvolvida para transmitir autoridade médica, apresentar os procedimentos e facilitar a triagem de novos pacientes.',
    objective: 'Fortalecer a credibilidade de profissionais da saúde e estética na internet.',
    problemSolved: 'Centraliza a apresentação dos tratamentos com linguagem clara e botão direto de contato.',
    features: [
      'Apresentação dos tratamentos com detalhes explicativos',
      'Destaque para o corpo clínico especializado',
      'Formulário inteligente para solicitação de agendamento',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
    link: '/demo/clinica',
  },
  {
    id: 'barbearia',
    title: 'Machado & Navalha • Barbearia Clássica & Serviços',
    category: 'Services & Booking',
    shortDesc: 'Sistema para barbearias tradicionais com tabela interativa de serviços e seletor de horários.',
    fullDesc: 'Experiência digital masculina completa para barbearias que desejam destacar seus diferenciais de atendimento e organizar a agenda dos profissionais.',
    objective: 'Facilitar a visualização de serviços e a escolha de horários convenientes.',
    problemSolved: 'Elimina trocas manuais de mensagens para saber os horários livres da barbearia.',
    features: [
      'Tabela de serviços completa com valores e tempo de execução',
      'Seletor interativo de horários de atendimento',
      'Apresentação dos barbeiros e diferenciais de lazer',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80',
    link: '/demo/barbearia',
  },
  {
    id: 'advocacia',
    title: 'Pimentel & Associados • Advocacia & Consultoria',
    category: 'Corporate & Law',
    shortDesc: 'Plataforma corporativa sóbria para escritórios de advocacia com apresentação de áreas de atuação.',
    fullDesc: 'Desenvolvido sob medida para bancas jurídicas que buscam autoridade institucional sólida e canal de atendimento seguro para clientes.',
    objective: 'Transmitir confiança jurídica e facilitar o primeiro contato confidencial.',
    problemSolved: 'Facilita a triagem inicial de casos com segurança e organização.',
    features: [
      'Apresentação detalhada das áreas do direito atendidas',
      'Métricas de tradição jurídica e perfil dos sócios',
      'Formulário confidencial para envio do caso',
    ],
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    link: '/demo/advocacia',
  },
];

const TECHNOLOGIES_LIST = [
  { name: 'HTML5', desc: 'Estruturação semântica, acessível e otimizada para SEO.', color: '#e34f26', icon: <Code className="w-6 h-6" /> },
  { name: 'CSS3', desc: 'Estilização moderna, animações fluidas e layouts responsivos.', color: '#1572b6', icon: <Layers className="w-6 h-6" /> },
  { name: 'JavaScript (ES6+)', desc: 'Lógica dinâmica, manipulação do DOM e funções assíncronas.', color: '#f7df1e', icon: <Terminal className="w-6 h-6" /> },
  { name: 'TypeScript', desc: 'Tipagem estática rigorosa para prevenir erros e acelerar manutenções.', color: '#3178c6', icon: <Cpu className="w-6 h-6" /> },
  { name: 'React 19', desc: 'Componentes modulares, hooks reativos e renderização ultra rápida.', color: '#61dafb', icon: <Zap className="w-6 h-6" /> },
  { name: 'Next.js 15', desc: 'App Router, Server Components e otimização de carregamento.', color: '#ffffff', icon: <Globe className="w-6 h-6" /> },
  { name: 'Tailwind CSS', desc: 'Design system ágil, microinterações e glassmorphism refinado.', color: '#38bdf8', icon: <Layout className="w-6 h-6" /> },
  { name: 'Supabase', desc: 'Autenticação segura, banco de dados PostgreSQL e APIs na nuvem.', color: '#3ecf8e', icon: <Database className="w-6 h-6" /> },
  { name: 'Git', desc: 'Controle de versões, histórico seguro de código e ramificações.', color: '#f05032', icon: <GitBranch className="w-6 h-6" /> },
  { name: 'GitHub', desc: 'Hospedagem de repositórios, documentação e colaboração em equipe.', color: '#a855f7', icon: <FolderGit2 className="w-6 h-6" /> },
  { name: 'Vercel', desc: 'Deploy contínuo, rede Edge mundial e alta performance global.', color: '#06b6d4', icon: <Sparkles className="w-6 h-6" /> },
];

const IN_DEV_LIST = [
  {
    title: 'APIs e integrações externas',
    desc: 'Estudo e implementação de comunicação com serviços de terceiros e webhooks.',
    icon: <Globe className="w-6 h-6 text-purple-400" />,
  },
  {
    title: 'Sistemas de pagamento',
    desc: 'Pesquisa e implementação de gateways como Stripe, Mercado Pago e Pix dinâmico.',
    icon: <CreditCard className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'E-mails automáticos',
    desc: 'Disparo de notificações transacionais e mensagens de boas-vindas via Resend/SMTP.',
    icon: <Mail className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'Analytics & Métricas',
    desc: 'Acompanhamento de eventos de conversão e comportamento dos usuários no site.',
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: 'Otimização de performance',
    desc: 'Práticas para alcançar 100 no Lighthouse com compressão de assets e lazy loading.',
    icon: <Timer className="w-6 h-6 text-amber-400" />,
  },
  {
    title: 'Animações avançadas',
    desc: 'Efeitos imersivos de física, shaders e transições de tela com Framer Motion.',
    icon: <Sparkles className="w-6 h-6 text-pink-400" />,
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'techs' | 'indev'>('projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-12 px-[5%]">
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Portfólio
          </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Projetos, tecnologias e aprendizados que fazem parte da minha evolução como desenvolvedor.
        </p>
      </div>

      {/* 3 Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-purple-600/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Projetos</span>
          </button>

          <button
            onClick={() => setActiveTab('techs')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === 'techs'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-purple-600/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>Tecnologias</span>
          </button>

          <button
            onClick={() => setActiveTab('indev')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === 'indev'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-purple-600/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Em desenvolvimento</span>
          </button>
        </div>
      </div>

      {/* ABA 1: PROJETOS */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="group relative w-full"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 flex flex-col justify-between h-full p-5 z-10 space-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

                <div className="space-y-4 relative z-10">
                  {/* Image with zoom on hover */}
                  <div className="relative overflow-hidden rounded-xl h-52 bg-[#030014] border border-white/10">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-white/10">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed line-clamp-2">
                      {proj.shortDesc}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techs.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-white/5 text-purple-300 px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 border border-white/10 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-purple-400" />
                    <span>Detalhes</span>
                  </button>

                  <Link
                    href={proj.link}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5457cd] hover:to-[#9333ea] text-white font-medium text-xs shadow-md transition-all hover:scale-105 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Ver projeto</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ABA 2: TECNOLOGIAS */}
      {activeTab === 'techs' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
          {TECHNOLOGIES_LIST.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col items-center text-center space-y-3 group shadow-xl hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              <div>
                <h4 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-normal">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ABA 3: EM DESENVOLVIMENTO */}
      {activeTab === 'indev' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-xs sm:text-sm text-gray-300 font-mono">
              ⚡ Tópicos e habilidades em desenvolvimento contínuo para implementação nos próximos lançamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IN_DEV_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between space-y-3 group shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-purple-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Em Desenvolvimento Ativo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detalhes Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-[#0b0424] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-60 rounded-2xl overflow-hidden bg-[#030014] border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-1">
                  Sobre o Projeto
                </h4>
                <p>{selectedProject.fullDesc}</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-1">
                  Objetivo
                </h4>
                <p>{selectedProject.objective}</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-1">
                  Problema que procura resolver
                </h4>
                <p className="bg-[#030014] p-3.5 rounded-xl border border-white/10 text-gray-200">
                  {selectedProject.problemSolved}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-2">
                  Principais Funcionalidades
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono text-purple-400 mb-2">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techs.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#030014] text-purple-300 border border-white/10 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium cursor-pointer"
              >
                Voltar
              </button>

              <Link
                href={selectedProject.link}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5457cd] hover:to-[#9333ea] text-white font-medium text-xs shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Acessar Projeto</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
