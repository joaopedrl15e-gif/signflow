'use client';

import React from 'react';
import { User, Code2, Sparkles, FolderGit2, Award, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#110729] border border-purple-500/30 text-purple-300 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Transforming Concepts into Seamless User Experiences
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Profile Card with Spinning Glow Border */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Spinning Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur-md opacity-60 animate-spin-slow" />

            <div className="relative rounded-3xl p-6 bg-[#07031e] border border-purple-500/30 shadow-2xl space-y-5">
              <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-purple-950/80 via-[#030014] to-indigo-950/80 border border-purple-500/30 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-1 shadow-2xl shadow-purple-500/40 mb-3 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#030014] rounded-[14px] flex items-center justify-center font-mono font-black text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 to-cyan-300">
                    JP
                  </div>
                </div>

                <h3 className="font-bold text-lg text-white">João Pedro</h3>
                <p className="text-xs font-mono text-purple-300">Front-End Developer & Web Creator</p>

                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bio & 3 Highlight Stat Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              Hi there! I&apos;m <strong>João Pedro</strong>, a Front-End Web Developer dedicated to building responsive, high-performance web applications and landing pages that leave a lasting impression.
            </p>
            <p className="text-zinc-400 text-sm">
              My core focus is on delivering modern interfaces with clean code, intuitive UX, and rapid loading speeds. I combine modern technologies like Next.js, React, TypeScript, and Tailwind CSS to turn creative ideas into reality.
            </p>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-2xl bg-[#0b0424] border border-purple-500/20 text-center space-y-1.5 hover:border-purple-400/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mx-auto">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <span className="text-2xl font-black text-white block">5+</span>
              <span className="text-xs font-mono text-zinc-400">Projects Completed</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0424] border border-purple-500/20 text-center space-y-1.5 hover:border-pink-400/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-300 mx-auto">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-2xl font-black text-white block">4+</span>
              <span className="text-xs font-mono text-zinc-400">Certificates</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0424] border border-purple-500/20 text-center space-y-1.5 hover:border-cyan-400/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mx-auto">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-2xl font-black text-white block">100%</span>
              <span className="text-xs font-mono text-zinc-400">Clean Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
