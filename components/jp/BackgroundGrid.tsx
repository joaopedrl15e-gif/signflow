'use client';

import React, { useEffect, useRef } from 'react';

export const BackgroundGrid: React.FC = () => {
  const blobRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let currentScroll = 0;
    let requestId: number;

    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      currentScroll = newScroll;

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        const xOffset = Math.sin(newScroll / 120 + index * 0.7) * 160;
        const yOffset = Math.cos(newScroll / 120 + index * 0.7) * 60;
        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Discrete 28px grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:28px_28px] opacity-70" />

      {/* Floating Blurred Blobs from Reference */}
      <div
        ref={(el) => { if (el) blobRefs.current[0] = el; }}
        className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#6366f1]/25 to-[#a855f7]/25 blur-[120px] transition-transform duration-700 ease-out animate-pulse-slow"
      />
      <div
        ref={(el) => { if (el) blobRefs.current[1] = el; }}
        className="absolute top-[35%] -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#6366f1]/20 via-transparent to-[#ec4899]/20 blur-[140px] transition-transform duration-700 ease-out animate-pulse-slow"
      />
      <div
        ref={(el) => { if (el) blobRefs.current[2] = el; }}
        className="absolute -bottom-20 left-[15%] w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 blur-[130px] transition-transform duration-700 ease-out"
      />
    </div>
  );
};
