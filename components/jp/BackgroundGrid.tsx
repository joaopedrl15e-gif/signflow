'use client';

import React, { useEffect, useRef } from 'react';

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle floating dust/stars
    const numParticles = Math.floor((width * height) / 14000);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
      alphaChange: number;
    }> = [];

    const colors = ['#ffffff', '#a855f7', '#38bdf8', '#818cf8'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,
        alpha: Math.random() * 0.6 + 0.2,
        alphaChange: (Math.random() * 0.006 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.alphaChange;
        if (p.alpha > 0.8 || p.alpha < 0.2) {
          p.alphaChange = -p.alphaChange;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.shadowBlur = p.radius * 2.5;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Discrete Technological Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:28px_28px] opacity-60" />

      {/* 2. Soft Glowing Purple & Blue Nebulas */}
      <div className="absolute -top-[10%] left-[15%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute top-[35%] -right-[5%] w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute -bottom-[10%] left-[5%] w-[550px] h-[550px] bg-cyan-600/12 rounded-full blur-[160px]" />

      {/* 3. Subtle floating particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};
