'use client';

import React, { useState } from 'react';
import { WelcomeScreen } from '@/components/jp/WelcomeScreen';
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
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#030014] text-slate-100 selection:bg-[#6366f1] selection:text-white overflow-x-hidden relative font-sans">
      {/* 🚀 1. WELCOME SCREEN ANIMATION (IDÊNTICA À DA REFERÊNCIA) */}
      <WelcomeScreen onLoadingComplete={() => setHasEntered(true)} />

      {/* 🌌 2. BACKGROUND COM BLOBS EM MOVIMENTO NO SCROLL E GRADE 28px */}
      <BackgroundGrid />

      {/* 🛸 3. MENU SUPERIOR FIXO COM GLASSMORPHISM */}
      <Navbar />

      {/* 🌟 4. SEÇÃO INICIAL — HERO COM DIGITAÇÃO E COMPOSIÇÃO 3D */}
      <HeroSection />

      {/* 🌟 5. SOBRE MIM COM BORDAS GIRATÓRIAS E CARDS REAIS */}
      <AboutSection />

      {/* 🌟 6. POR QUE SEU NEGÓCIO PRECISA DE UM SITE? (BENEFÍCIOS) */}
      <WhyWebsiteSection />

      {/* 🌟 7. PORTFÓLIO COM 3 ABAS (PROJETOS, TECNOLOGIAS, EM DESENVOLVIMENTO) */}
      <PortfolioSection />

      {/* 🌟 8. PROCESSO DE CRIAÇÃO — COMO TRANSFORMO UMA IDEIA EM SITE */}
      <ProcessSection />

      {/* 🌟 9. CONTATO COM FORMULÁRIO VALIDADO E CARDS SOCIAIS */}
      <ContactSection />

      {/* 🌟 10. RODAPÉ */}
      <Footer />
    </div>
  );
}
