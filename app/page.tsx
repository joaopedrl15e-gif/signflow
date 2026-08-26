'use client';

import React from 'react';
import { SpaceBackground } from '@/components/ekizr/SpaceBackground';
import { Navbar } from '@/components/ekizr/Navbar';
import { Hero } from '@/components/ekizr/Hero';
import { About } from '@/components/ekizr/About';
import { Skills } from '@/components/ekizr/Skills';
import { Projects } from '@/components/ekizr/Projects';
import { Certificates } from '@/components/ekizr/Certificates';
import { Guestbook } from '@/components/ekizr/Guestbook';
import { Contact } from '@/components/ekizr/Contact';
import { Footer } from '@/components/ekizr/Footer';

export default function EkizrPortfolioPage() {
  return (
    <div className="min-h-screen bg-[#030014] text-zinc-100 selection:bg-purple-600 selection:text-white overflow-x-hidden relative">
      {/* 🌌 DEEP SPACE CANVAS WITH FLOATING CONSTELLATIONS (EKIZR STYLE) 🌌 */}
      <SpaceBackground />

      {/* Ambient Cosmos Glow Nebulas */}
      <div className="fixed top-[-10%] left-[10%] w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[35%] right-[5%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[15%] left-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 🌟 1. FLOATING GLASS NAVBAR 🌟 */}
      <Navbar />

      {/* 🌟 2. HERO SECTION WITH TYPEWRITER & 3D CYBER CARD 🌟 */}
      <Hero />

      {/* 🌟 3. ABOUT ME & STATS 🌟 */}
      <About />

      {/* 🌟 4. SKILLS & TECH STACK 🌟 */}
      <Skills />

      {/* 🌟 5. PROJECTS & CASE STUDIES GALLERY 🌟 */}
      <Projects />

      {/* 🌟 6. CERTIFICATES & ACHIEVEMENTS 🌟 */}
      <Certificates />

      {/* 🌟 7. COMMUNITY GUESTBOOK (INTERACTIVE MESSAGES) 🌟 */}
      <Guestbook />

      {/* 🌟 8. CONTACT & SOCIALS 🌟 */}
      <Contact />

      {/* 🌟 9. FOOTER 🌟 */}
      <Footer />
    </div>
  );
}
