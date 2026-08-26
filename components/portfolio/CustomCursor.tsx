'use client';

import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsDesktop(true);
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive-hover'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Smooth Spring trailing
  useEffect(() => {
    if (!isDesktop) return;
    let animationFrameId: number;
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.16,
        y: prev.y + (mousePos.y - prev.y) * 0.16,
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };
    animationFrameId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* 🔦 DYNAMIC SPOTLIGHT ON TECH BACKGROUND 🔦 */}
      <div
        className="pointer-events-none fixed -inset-px opacity-35 transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.12), rgba(99, 102, 241, 0.08), transparent 70%)`,
        }}
      />

      {/* Trailing Outer Glow Ring */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full transition-transform duration-75 border ${
          isHovered
            ? 'w-12 h-12 border-cyan-400 bg-cyan-400/10 scale-110'
            : isClicking
            ? 'w-7 h-7 border-indigo-400 bg-indigo-500/20 scale-90'
            : 'w-8 h-8 border-cyan-500/50 bg-cyan-500/5'
        }`}
        style={{
          transform: `translate(${trailingPos.x - (isHovered ? 24 : 16)}px, ${
            trailingPos.y - (isHovered ? 24 : 16)
          }px)`,
          boxShadow: isHovered
            ? '0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 10px rgba(6, 182, 212, 0.3)'
            : '0 0 12px rgba(6, 182, 212, 0.25)',
          backdropFilter: 'blur(0.5px)',
        }}
      />

      {/* Center Precise Dot */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full bg-cyan-400 transition-all duration-75 ${
          isHovered ? 'w-2.5 h-2.5 bg-cyan-300' : 'w-1.5 h-1.5'
        }`}
        style={{
          transform: `translate(${mousePos.x - (isHovered ? 5 : 3)}px, ${
            mousePos.y - (isHovered ? 5 : 3)
          }px)`,
          boxShadow: '0 0 8px #22d3ee',
        }}
      />
    </>
  );
};
