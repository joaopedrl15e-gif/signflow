'use client';

import React from 'react';
import { CustomCursor } from '@/components/jp/CustomCursor';
import { LoadingIntro } from '@/components/jp/LoadingIntro';
import { BackgroundGrid } from '@/components/jp/BackgroundGrid';
import { Navbar } from '@/components/jp/Navbar';
import { HeroSection } from '@/components/jp/HeroSection';
import { AboutSection } from '@/components/jp/AboutSection';
import { WhyWebsiteSection } from '@/components/jp/WhyWebsiteSection';
import { PortfolioSection } from '@/components/jp/PortfolioSection';
import { ProcessSection } from '@/components/jp/ProcessSection';
import { ContactSection } from '@/components/jp/ContactSection';
import { Footer } from '@/components/jp/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030014] text-zinc-100 selection:bg-purple-600 selection:text-white overflow-x-hidden relative">
      {/* 🖱️ CURSOR PERSONALIZADO & SPOTLIGHT (DESKTOP) */}
      <CustomCursor />

      {/* 🚀 INTRODUÇÃO CURTA DE CARREGAMENTO (0-100%) */}
      <LoadingIntro />

      {/* 🌌 FUNDO TECNOLÓGICO: GRADE DISCRETA + MANCHAS DE LUZ ROXA/AZUL */}
      <BackgroundGrid />

      {/* 🛸 MENU SUPERIOR FIXO & RESPONSIVO COM PROGRESSO */}
      <Navbar />

      {/* 🌟 1. SEÇÃO INICIAL — HERO COM DIGITAÇÃO E COMPOSIÇÃO 3D */}
      <HeroSection />

      {/* 🌟 2. SOBRE MIM & CARDS DE INFORMAÇÕES REAIS */}
      <AboutSection />

      {/* 🌟 3. POR QUE SEU NEGÓCIO PRECISA DE UM SITE? (BENEFÍCIOS) */}
      <WhyWebsiteSection />

      {/* 🌟 4. PORTFÓLIO COM 3 ABAS (PROJETOS, TECNOLOGIAS, EM DESENVOLVIMENTO) */}
      <PortfolioSection />

      {/* 🌟 5. PROCESSO DE CRIAÇÃO — COMO TRANSFORMO UMA IDEIA EM SITE */}
      <ProcessSection />

      {/* 🌟 6. CONTATO & FORMULÁRIO COM VALIDAÇÃO EM TEMPO REAL */}
      <ContactSection />

      {/* 🌟 7. RODAPÉ */}
      <Footer />
    </div>
  );
}
