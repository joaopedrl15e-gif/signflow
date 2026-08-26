'use client';

import React from 'react';
import {
  Code,
  Layers,
  Terminal,
  Cpu,
  Zap,
  Globe,
  Layout,
  Database,
  GitBranch,
  FolderGit2,
  Sparkles,
  CreditCard,
  Mail,
  BarChart3,
  Timer
} from 'lucide-react';

const TECHNOLOGIES = [
  { name: 'Next.js 15', desc: 'App Router, Server Components e alta performance.', color: '#ffffff', icon: <Globe className="w-5 h-5" /> },
  { name: 'React 19', desc: 'Componentes modernos, hooks reativos e renderização ágil.', color: '#61dafb', icon: <Zap className="w-5 h-5" /> },
  { name: 'TypeScript', desc: 'Tipagem estática para código limpo e seguro.', color: '#3178c6', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Tailwind CSS', desc: 'Design system ágil, microinterações e glassmorphism.', color: '#38bdf8', icon: <Layout className="w-5 h-5" /> },
  { name: 'JavaScript (ES6+)', desc: 'Lógica dinâmica, manipulação do DOM e assincronicidade.', color: '#f7df1e', icon: <Terminal className="w-5 h-5" /> },
  { name: 'Supabase', desc: 'Banco de dados PostgreSQL, autenticação e APIs.', color: '#3ecf8e', icon: <Database className="w-5 h-5" /> },
  { name: 'Git & GitHub', desc: 'Controle de versões e versionamento seguro de código.', color: '#a855f7', icon: <GitBranch className="w-5 h-5" /> },
  { name: 'Vercel', desc: 'Deploy contínuo e infraestrutura Edge global ultra rápida.', color: '#06b6d4', icon: <Sparkles className="w-5 h-5" /> },
];

const IN_DEV_LIST = [
  {
    title: 'APIs e integrações externas',
    desc: 'Implementação de comunicação com serviços de terceiros e webhooks.',
    icon: <Globe className="w-5 h-5 text-purple-400" />,
  },
  {
    title: 'Sistemas de pagamento',
    desc: 'Pesquisa de gateways como Stripe, Mercado Pago e Pix automatizado.',
    icon: <CreditCard className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: 'E-mails automáticos',
    desc: 'Disparo de notificações transacionais e mensagens de boas-vindas.',
    icon: <Mail className="w-5 h-5 text-blue-400" />,
  },
  {
    title: 'Analytics & Performance',
    desc: 'Acompanhamento de conversão e foco em 100 no Lighthouse.',
    icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>Stack & Ferramentas</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Tecnologias & Habilidades
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          As ferramentas que utilizo no dia a dia para desenvolver interfaces de alto impacto visual e técnico.
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full mx-auto mt-2" />
      </div>

      {/* Grid de Tecnologias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {TECHNOLOGIES.map((tech, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#0a0526]/90 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between space-y-3 group shadow-xl hover:-translate-y-1"
          >
            <div
              className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>

            <div>
              <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Em desenvolvimento ativo */}
      <div className="rounded-3xl p-6 sm:p-8 bg-[#0a0526]/60 border border-purple-500/20 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Tópicos em Desenvolvimento Ativo</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {IN_DEV_LIST.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#04020f] border border-purple-500/20 space-y-2"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 flex items-center justify-center">
                {item.icon}
              </div>
              <h5 className="font-bold text-xs text-white">{item.title}</h5>
              <p className="text-[11px] text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
