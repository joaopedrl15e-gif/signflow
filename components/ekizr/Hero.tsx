'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Code2, Terminal, Layers, Laptop, ExternalLink, Cpu, Globe } from 'lucide-react';

const TYPED_TITLES = [
  'Front-End Web Developer',
  'UI/UX Interface Creator',
  'Next.js & React Builder',
  'Digital Experience Designer',
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = TYPED_TITLES[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullText) {
      typingSpeed = 2200; // Pause at end
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Intro & Typewriter */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono shadow-lg shadow-purple-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Ready to Innovate • Available for Projects</span>
          </div>

          {/* Main Headings */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-300">
              Hello, I&apos;m <span className="text-white font-extrabold">João Pedro</span> 👋
            </h2>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight min-h-[70px] sm:min-h-[90px]">
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Transforming concepts into seamless, high-performance digital experiences with modern web technologies, pixel-perfect responsiveness, and clean code architecture.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#090426] hover:bg-[#130b42] text-zinc-200 font-semibold text-xs border border-purple-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </div>

          {/* Tech Strip */}
          <div className="pt-6 border-t border-purple-500/15 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span className="text-[11px] font-mono text-zinc-500 mr-2">Tech Stack:</span>
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Git'].map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-[#07031e]/80 border border-purple-500/20 text-[11px] font-mono text-purple-300 shadow-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Cyber 3D Floating Hologram Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl blur-xl opacity-40 animate-pulse" />

            {/* Hologram Card Body */}
            <div className="relative rounded-3xl p-6 sm:p-7 bg-[#07031e]/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl space-y-5">
              {/* Card Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-purple-400">developer.profile</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Holographic Avatar Graphic */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-purple-950/60 via-slate-950 to-indigo-950/60 border border-purple-500/30 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-purple-600/20 border border-purple-400/40 flex items-center justify-center text-cyan-300 shadow-xl shadow-purple-500/20 mb-2 group-hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-sm text-white">João Pedro (JP)</h3>
                <p className="text-[11px] font-mono text-purple-300">Front-End Developer & UI Creator</p>
              </div>

              {/* Mini Terminal Lines */}
              <div className="p-3.5 rounded-xl bg-[#030014] border border-purple-500/20 font-mono text-xs text-zinc-300 space-y-1">
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span>STATUS</span>
                  <span className="text-cyan-400 font-bold">ONLINE</span>
                </div>
                <p className="text-purple-300">&gt; Building modern web apps</p>
                <p className="text-emerald-400">&gt; 100% responsive interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
