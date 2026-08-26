'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing animation loop
    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Background Soft Spotlight Follower */}
      <div
        className="fixed pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${trailingPos.x - 250}px, ${trailingPos.y - 250}px)`,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(59, 130, 246, 0.04) 45%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-150 ease-out rounded-full border border-purple-400/50 ${
          isPointer
            ? 'w-12 h-12 bg-purple-500/15 scale-125 border-cyan-400/70'
            : 'w-8 h-8 bg-transparent scale-100'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Center Precision Dot */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-md shadow-purple-500/80"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
