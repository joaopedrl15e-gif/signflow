'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Code2,
  Layers,
  Database,
  Globe,
  Layout,
  GitBranch,
  Cpu,
  Zap,
  Lock,
  CreditCard,
  Mail,
  BarChart3,
  Gauge,
  Film
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  usage: string;
}

const MAIN_SKILLS: SkillItem[] = [
  {
    name: 'Next.js & React',
    category: 'Framework & UI',
    icon: <Globe className="w-5 h-5" />,
    usage: 'Criação de páginas ultra-rápidas com renderização no servidor (SSR) e navegação fluida.',
  },
  {
    name: 'TypeScript',
    category: 'Linguagem',
    icon: <Code2 className="w-5 h-5" />,
    usage: 'Tipagem estática para código confiável, livre de bugs e de fácil manutenção futura.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Estilização',
    icon: <Layout className="w-5 h-5" />,
    usage: 'Design moderno e responsivo com microinterações, gradientes e classes utilitárias.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Linguagem',
    icon: <Zap className="w-5 h-5" />,
    usage: 'Lógica dinâmica, manipulação do DOM e interatividade interativa em tempo real.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Estrutura & Estilo',
    icon: <Layers className="w-5 h-5" />,
    usage: 'Estruturação semântica limpa, acessível e otimizada para os motores de busca (SEO).',
  },
  {
    name: 'Desenvolvimento Responsivo',
    category: 'Design Mobile-First',
    icon: <Layout className="w-5 h-5" />,
    usage: 'Adaptação perfeita para qualquer tamanho de tela: smartphones, tablets e desktops.',
  },
  {
    name: 'Criação de Landing Pages',
    category: 'Foco em Conversão',
    icon: <Sparkles className="w-5 h-5" />,
    usage: 'Páginas únicas planejadas para apresentar serviços e direcionar o cliente para o contato.',
  },
  {
    name: 'Interfaces Modernas (UI/UX)',
    category: 'Experiência do Usuário',
    icon: <Sparkles className="w-5 h-5" />,
    usage: 'Visual com glassmorphism, profundidade e harmonia entre tipografia e cores.',
  },
  {
    name: 'Supabase & Banco de Dados',
    category: 'Backend & Dados',
    icon: <Database className="w-5 h-5" />,
    usage: 'Armazenamento seguro de informações de usuários e dados de propostas.',
  },
  {
    name: 'Autenticação de Usuários',
    category: 'Segurança',
    icon: <Lock className="w-5 h-5" />,
    usage: 'Sistemas de login seguro, controle de contas e proteção de dados com cookies e tokens.',
  },
  {
    name: 'Deploy com Vercel',
    category: 'Infraestrutura',
    icon: <Globe className="w-5 h-5" />,
    usage: 'Publicação rápida na nuvem com certificado de segurança SSL e CDN global.',
  },
  {
    name: 'Git & GitHub',
    category: 'Controle de Versão',
    icon: <GitBranch className="w-5 h-5" />,
    usage: 'Organização de repositórios, versionamento e deploy contínuo em equipe ou individual.',
  },
];

const IN_DEVELOPMENT_KNOWLEDGE: SkillItem[] = [
  {
    name: 'APIs & Integrações Externas',
    category: 'Conexões',
    icon: <Cpu className="w-5 h-5" />,
    usage: 'Conexão com serviços de mensagens, automações e webhooks externos.',
  },
  {
    name: 'Sistemas de Pagamento',
    category: 'Monetização',
    icon: <CreditCard className="w-5 h-5" />,
    usage: 'Integração de checkouts com PIX e cartão de crédito para venda de serviços.',
  },
  {
    name: 'E-mails Automáticos',
    category: 'Comunicação',
    icon: <Mail className="w-5 h-5" />,
    usage: 'Envio de notificações de cadastro e confirmações de formulário por e-mail.',
  },
  {
    name: 'Analytics & Métricas',
    category: 'Dados de Uso',
    icon: <BarChart3 className="w-5 h-5" />,
    usage: 'Acompanhamento de visitas e cliques para entender o comportamento do público.',
  },
  {
    name: 'Otimização de Performance',
    category: 'Velocidade',
    icon: <Gauge className="w-5 h-5" />,
    usage: 'Estudo constante em técnicas para atingir notas máximas no Google PageSpeed.',
  },
  {
    name: 'Animações com Framer Motion',
    category: 'Interatividade Avançada',
    icon: <Film className="w-5 h-5" />,
    usage: 'Criação de transições fluidas e gestos táteis em interfaces dinâmicas.',
  },
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'principais' | 'estudo'>('principais');

  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-bold shadow-xs">
          <Code2 className="w-3.5 h-3.5" />
          <span>Ferramentas & Tecnologias</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Tecnologias que utilizo
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Combino ferramentas modernas do ecossistema JavaScript para construir interfaces rápidas, responsivas e visualmente marcantes.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            onClick={() => setActiveTab('principais')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'principais'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-lg shadow-cyan-500/20 scale-105'
                : 'glass-card text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Habilidades Principais ({MAIN_SKILLS.length})
          </button>
          <button
            onClick={() => setActiveTab('estudo')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'estudo'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black shadow-lg shadow-purple-500/20 scale-105'
                : 'glass-card text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Conhecimentos em Desenvolvimento ({IN_DEVELOPMENT_KNOWLEDGE.length})
          </button>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(activeTab === 'principais' ? MAIN_SKILLS : IN_DEVELOPMENT_KNOWLEDGE).map((skill, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between shadow-xl space-y-3 hover:bg-slate-900/60"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/15 to-indigo-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                  {skill.category}
                </span>
              </div>

              <div>
                <h4 className="text-base font-black text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {skill.usage}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Aplicado em projetos reais</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
