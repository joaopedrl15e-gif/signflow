'use client';

import React, { useState } from 'react';
import { LoadingScreen } from '@/components/portfolio/LoadingScreen';
import { CustomCursor } from '@/components/portfolio/CustomCursor';
import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { WhyWebsiteSection } from '@/components/portfolio/WhyWebsiteSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ProcessSection } from '@/components/portfolio/ProcessSection';
import { MiniSiteBuilder } from '@/components/portfolio/MiniSiteBuilder';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [prefilledContact, setPrefilledContact] = useState<{ projectType: string; style: string }>({
    projectType: 'Landing page',
    style: 'Tecnológico',
  });

  const handleSelectMiniSiteConfig = (config: { projectType: string; style: string }) => {
    setPrefilledContact(config);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      {/* 🚀 INITIAL LOADING SCREEN 🚀 */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* 🖱️ CUSTOM CURSOR & AMBIENT SPOTLIGHT 🖱️ */}
      <CustomCursor />

      {/* 🌌 AMBIENT BACKGROUND GLOW ORBS & TECH GRID 🌌 */}
      <div className="fixed inset-0 bg-tech-grid opacity-40 pointer-events-none z-0" />
      <div className="fixed top-[-5%] left-[8%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none animate-orb-1 z-0" />
      <div className="fixed top-[28%] right-[5%] w-[650px] h-[650px] bg-indigo-600/18 rounded-full blur-[180px] pointer-events-none animate-orb-2 z-0" />
      <div className="fixed top-[60%] left-[5%] w-[550px] h-[550px] bg-purple-600/12 rounded-full blur-[160px] pointer-events-none animate-orb-1 z-0" />
      <div className="fixed bottom-[5%] right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[170px] pointer-events-none animate-pulse-slow z-0" />

      {/* Floating Abstract Tech Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[12%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-particle-1" />
        <div className="absolute top-[50%] right-[15%] w-2 h-2 rounded-full bg-indigo-400/50 animate-particle-2" />
        <div className="absolute top-[75%] left-[22%] w-1.5 h-1.5 rounded-full bg-purple-400/50 animate-particle-3" />
      </div>

      {/* 🌟 1. NAVBAR FIXED 🌟 */}
      <Navbar />

      {/* 🌟 2. HERO SECTION 🌟 */}
      <HeroSection />

      {/* 🌟 3. SEÇÃO SOBRE MIM 🌟 */}
      <AboutSection />

      {/* 🌟 4. SEÇÃO POR QUE TER UM SITE? + COMPARATIVO 🌟 */}
      <WhyWebsiteSection />

      {/* 🌟 5. SEÇÃO MINHAS HABILIDADES 🌟 */}
      <SkillsSection />

      {/* 🌟 6. SEÇÃO PROJETOS + MODAL DE DETALHES 🌟 */}
      <ProjectsSection />

      {/* 🌟 7. PROCESSO DE CRIAÇÃO 🌟 */}
      <ProcessSection />

      {/* 🌟 8. MINI CRIADOR DE SITE INTERATIVO 🌟 */}
      <MiniSiteBuilder onSelectConfig={handleSelectMiniSiteConfig} />

      {/* 🌟 9. SEÇÃO CONTATO 🌟 */}
      <ContactSection
        prefilledType={prefilledContact.projectType}
        prefilledStyle={prefilledContact.style}
      />

      {/* 🌟 10. RODAPÉ 🌟 */}
      <Footer />
    </div>
  );
}
