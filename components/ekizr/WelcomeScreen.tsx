'use client';

import React, { useState, useEffect } from 'react';
import { CodeXml, User, Globe } from 'lucide-react';

interface WelcomeScreenProps {
  onLoadingComplete?: () => void;
}

// Typewriter effect for the URL pill (e.g. ekizr.com / jaopimentel.dev)
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 180);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Glowing Icon Pill Component
const GlowingIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-3 sm:p-4 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
      <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

// Ambient Blur Background
const BackgroundGlow: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-pulse" />
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px]" />
  </div>
);

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 900);
    }, 3200);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center transition-all duration-1000 ${
        isExiting ? 'opacity-0 scale-110 blur-md pointer-events-none' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Background Ambience */}
      <BackgroundGlow />

      <div className="relative min-h-screen flex items-center justify-center px-4 w-full">
        <div className="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Top Icons Row */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <GlowingIcon Icon={CodeXml} />
            <GlowingIcon Icon={User} />
            <GlowingIcon Icon={Globe} />
          </div>

          {/* Heading */}
          <div className="text-center space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              <div className="mb-2 sm:mb-4 space-x-2">
                <span className="inline-block px-1.5 sm:px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Welcome
                </span>
                <span className="inline-block px-1.5 sm:px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  To
                </span>
                <span className="inline-block px-1.5 sm:px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  My
                </span>
              </div>
              <div className="space-x-2">
                <span className="inline-block px-1.5 sm:px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
                  Portfolio
                </span>
                <span className="inline-block px-1.5 sm:px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
                  Website
                </span>
              </div>
            </h1>
          </div>

          {/* Bottom URL pill with typing animation */}
          <div className="text-center pt-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full relative group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300 border border-purple-500/30" />
              <div className="relative flex items-center gap-2.5 text-base sm:text-xl md:text-2xl font-mono">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 animate-spin" />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent font-bold">
                  <TypewriterText text="jaopimentel.dev" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
