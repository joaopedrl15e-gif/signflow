'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  Laptop,
  ExternalLink,
  Cpu,
  Globe,
  Instagram,
  Mail,
  Github,
  Zap,
  Flame
} from 'lucide-react';

const TYPED_TITLES = [
  'Front-End Web Developer',
  'React Developer',
  'UI/UX Interface Creator',
  'Next.js & Supabase Builder',
];

const MARQUEE_TECHS = [
  { name: 'Next.js 15', color: '#ffffff' },
  { name: 'React 19', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind CSS', color: '#38bdf8' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Supabase', color: '#3ecf8e' },
  { name: 'HTML5 / CSS3', color: '#e34f26' },
  { name: 'Git & GitHub', color: '#f05032' },
  { name: 'Vercel', color: '#ffffff' },
  { name: 'UI / UX Design', color: '#ec4899' },
  { name: 'REST APIs', color: '#a855f7' },
  { name: 'Performance Opt', color: '#10b981' },
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPED_TITLES[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullText) {
      typingSpeed = 2200;
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
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Ekizr Ready to Innovate Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#110729]/80 border border-purple-500/30 text-purple-300 text-xs font-semibold shadow-lg shadow-purple-950/60">
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
            <span>Ready to Innovate</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">João Pedro</span> 👋
            </h2>

            <div className="min-h-[75px] sm:min-h-[95px] flex items-center justify-center lg:justify-start">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 leading-[1.15]">
                {displayText}
                <span className="animate-pulse text-purple-400">|</span>
              </h1>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            I am a Front-End Developer who focuses on creating engaging digital experiences and always strives to provide the best solutions in every project I work on.
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
            <a
              href="https://instagram.com/_jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#110729] hover:bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white transition-all hover:scale-110 shadow-md shadow-purple-950/50"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:pimentarp153@icloud.com"
              className="w-10 h-10 rounded-full bg-[#110729] hover:bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-cyan-300 hover:text-white transition-all hover:scale-110 shadow-md shadow-purple-950/50"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/jaopimentel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#110729] hover:bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-pink-300 hover:text-white transition-all hover:scale-110 shadow-md shadow-purple-950/50"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0e0624]/80 hover:bg-[#1a0c42] text-zinc-200 font-semibold text-sm border border-purple-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column: 3D Floating Astronaut / Cyber Space Orb */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Orbiting Rings */}
          <div className="absolute w-72 h-72 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-pink-500/15 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />

          {/* Floating Hero Card */}
          <div className="relative animate-float-hero w-full max-w-sm">
            <div className="rounded-3xl p-6 sm:p-7 bg-[#0b0424]/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl space-y-6 relative overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-purple-300">jp.portfolio.v5</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Holographic Avatar Showcase */}
              <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-purple-950/80 via-[#030014] to-indigo-950/80 border border-purple-500/30 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 shadow-xl shadow-purple-500/30 mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-[#030014] rounded-[14px] flex items-center justify-center text-cyan-400">
                    <Code2 className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-cyan-400" />
                  </div>
                </div>
                <h3 className="font-bold text-base text-white">João Pedro (JP)</h3>
                <p className="text-xs font-mono text-purple-300">Front-End Developer & UI Creator</p>
              </div>

              {/* Status Badge Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-[#030014] border border-purple-500/20 text-center">
                  <span className="text-purple-400 font-bold block text-sm">5+</span>
                  <span className="text-zinc-400 text-[10px] font-mono">Projects Built</span>
                </div>
                <div className="p-3 rounded-xl bg-[#030014] border border-purple-500/20 text-center">
                  <span className="text-cyan-400 font-bold block text-sm">100%</span>
                  <span className="text-zinc-400 text-[10px] font-mono">Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌟 INFINITE TECH STACK MARQUEE (EKIZR STYLE) 🌟 */}
      <div className="mt-20 pt-10 border-t border-purple-500/15 overflow-hidden relative">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">
            Tech Stack & Technologies
          </span>
        </div>

        {/* Marquee Loop */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex items-center gap-3 shrink-0">
            {MARQUEE_TECHS.concat(MARQUEE_TECHS).map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0b0424]/90 border border-purple-500/20 shadow-md whitespace-nowrap hover:border-purple-400/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-xs font-mono font-bold text-zinc-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
