'use client';

import React, { useState } from 'react';
import { WelcomeScreen } from '@/components/ekizr/WelcomeScreen';
import { SpaceBackground } from '@/components/ekizr/SpaceBackground';
import { AudioPlayer } from '@/components/ekizr/AudioPlayer';
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
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#030014] text-zinc-100 selection:bg-purple-600 selection:text-white overflow-x-hidden relative">
      {/* 🚀 1. EXACT EKIZR ENTRY WELCOME ANIMATION (3.2s DURATION) 🚀 */}
      <WelcomeScreen onLoadingComplete={() => setHasEntered(true)} />

      {/* 🌌 2. EXACT EKIZR BACKGROUND: 28px GRID + GLOWING NEBULAS + STARFIELD 🌌 */}
      <SpaceBackground />

      {/* 🎵 3. FLOATING MUSIC / SOUND TOGGLE (EKIZR STYLE) 🎵 */}
      <AudioPlayer />

      {/* 🛸 4. FLOATING GLASS CAPSULE NAVBAR 🛸 */}
      <Navbar />

      {/* 🌟 5. HERO SECTION WITH TYPEWRITER, 3D CYBER CARD & MARQUEE 🌟 */}
      <Hero />

      {/* 🌟 6. ABOUT ME WITH SPINNING RGB GLOW BORDER & STATS 🌟 */}
      <About />

      {/* 🌟 7. SKILLS & TECH STACK (CATEGORIZED TABS) 🌟 */}
      <Skills />

      {/* 🌟 8. PROJECTS & CASE STUDIES GALLERY WITH DETAILS MODAL 🌟 */}
      <Projects />

      {/* 🌟 9. CERTIFICATES & ACHIEVEMENTS WITH ZOOM 🌟 */}
      <Certificates />

      {/* 🌟 10. COMMUNITY GUESTBOOK (REAL-TIME COMMENTS) 🌟 */}
      <Guestbook />

      {/* 🌟 11. CONTACT & SOCIAL CHANNELS 🌟 */}
      <Contact />

      {/* 🌟 12. FOOTER & BACK TO TOP 🌟 */}
      <Footer />
    </div>
  );
}
