'use client';

import React from 'react';
import { Background } from '@/components/studio/Background';
import { Navbar } from '@/components/studio/Navbar';
import { Hero } from '@/components/studio/Hero';
import { About } from '@/components/studio/About';
import { WhyWebsite } from '@/components/studio/WhyWebsite';
import { Projects } from '@/components/studio/Projects';
import { Skills } from '@/components/studio/Skills';
import { Process } from '@/components/studio/Process';
import { Contact } from '@/components/studio/Contact';
import { Footer } from '@/components/studio/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06040e] text-zinc-100 selection:bg-purple-600 selection:text-white overflow-x-hidden relative font-sans">
      {/* 🌌 1. FUNDO ATMOSFÉRICO DE ALTO LUXO (OBSIDIAN VOID + NEBULA + STARDUST) */}
      <Background />

      {/* 🛸 2. NAVBAR FLUTUANTE EM CÁPSULA COM VIDRO ESCURO */}
      <Navbar />

      {/* 🌟 3. HERO COM DIGITAÇÃO E STUDIO IDE 3D INTERATIVO */}
      <Hero />

      {/* 🌟 4. SOBRE MIM & CAPACIDADES TÉCNICAS REAIS */}
      <About />

      {/* 🌟 5. POR QUE SEU NEGÓCIO PRECISA DE UM SITE? (BENEFÍCIOS) */}
      <WhyWebsite />

      {/* 🌟 6. SHOWCASE DE PROJETOS & DEMONSTRAÇÕES (SIGNFLOW + 4 DEMOS) */}
      <Projects />

      {/* 🌟 7. STACK TECNOLÓGICA & HABILIDADES */}
      <Skills />

      {/* 🌟 8. PROCESSO DE CRIAÇÃO DO CONCEITO AO AR */}
      <Process />

      {/* 🌟 9. CONTATO & FORMULÁRIO VALIDADO */}
      <Contact />

      {/* 🌟 10. RODAPÉ MINIMALISTA */}
      <Footer />
    </div>
  );
}
