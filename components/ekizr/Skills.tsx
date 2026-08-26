'use client';

import React, { useState } from 'react';
import {
  Code2,
  Layers,
  Database,
  Globe,
  Layout,
  GitBranch,
  Cpu,
  Zap,
  Lock,
  Sparkles
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: string;
  icon: React.ReactNode;
  desc: string;
}

const SKILLS_DATA: Skill[] = [
  {
    name: 'Next.js 15',
    category: 'frontend',
    level: 'Advanced',
    icon: <Globe className="w-5 h-5" />,
    desc: 'App Router, Server Components (RSC), SSR e otimização avançada de SEO.',
  },
  {
    name: 'React 19',
    category: 'frontend',
    level: 'Advanced',
    icon: <Code2 className="w-5 h-5" />,
    desc: 'Hooks, estado reativo, componentização modular e renderização fluida.',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'Proficient',
    icon: <Code2 className="w-5 h-5" />,
    desc: 'Tipagem estática rigorosa para código escalável e livre de bugs.',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Expert',
    icon: <Layout className="w-5 h-5" />,
    desc: 'Design system responsivo, microinterações, glassmorphism e animações.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Advanced',
    icon: <Zap className="w-5 h-5" />,
    desc: 'Lógica assíncrona, manipulação dinâmica de DOM e APIs modernas.',
  },
  {
    name: 'Supabase & Database',
    category: 'backend',
    level: 'Intermediate',
    icon: <Database className="w-5 h-5" />,
    desc: 'Autenticação de usuários, PostgreSQL e persistência em nuvem.',
  },
  {
    name: 'REST APIs & Webhooks',
    category: 'backend',
    level: 'Intermediate',
    icon: <Cpu className="w-5 h-5" />,
    desc: 'Integrações com gateways de pagamento, WhatsApp e serviços externos.',
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Advanced',
    icon: <GitBranch className="w-5 h-5" />,
    desc: 'Versionamento de código, branching, pull requests e deploy contínuo.',
  },
  {
    name: 'Vercel Deployment',
    category: 'tools',
    level: 'Advanced',
    icon: <Globe className="w-5 h-5" />,
    desc: 'CI/CD automatizado, edge network mundial e certificados SSL.',
  },
];

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills = SKILLS_DATA.filter((s) => filter === 'all' || s.category === filter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>Skills & Tech Stack</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Technologies I Master
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Ferramentas e linguagens que utilizo no dia a dia para desenvolver soluções completas e escaláveis.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
          {[
            { id: 'all', label: 'All Techs' },
            { id: 'frontend', label: 'Front-End' },
            { id: 'backend', label: 'Back-End & DB' },
            { id: 'tools', label: 'Tools & DevOps' },
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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 bg-[#07031e]/80 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-xl hover:shadow-purple-950/40"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono text-purple-300 bg-[#030014] px-2.5 py-1 rounded-md border border-purple-500/30">
                  {skill.level}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-purple-500/15 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Production Ready</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
