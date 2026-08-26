'use client';

import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
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

    // Particle Stars
    const numStars = Math.floor((width * height) / 10000);
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
      alphaChange: number;
    }> = [];

    const starColors = ['#ffffff', '#818cf8', '#a855f7', '#c084fc', '#38bdf8'];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.7 + 0.3,
        alphaChange: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw each star
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.x += s.speedX;
        s.y += s.speedY;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        s.alpha += s.alphaChange;
        if (s.alpha > 0.85 || s.alpha < 0.2) {
          s.alphaChange = -s.alphaChange;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
        ctx.shadowBlur = s.radius * 3;
        ctx.shadowColor = s.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Draw faint constellation links
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = '#6366f1';
            ctx.globalAlpha = (1 - dist / 80) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
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
      {/* 1. Ekizr Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:28px_28px] opacity-70" />

      {/* 2. Ekizr Deep Space Glowing Radial Nebulas */}
      <div className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] bg-gradient-to-r from-indigo-600/25 to-purple-600/25 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute top-[35%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/20 via-transparent to-pink-600/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-cyan-500/15 rounded-full blur-[150px]" />

      {/* 3. Starfield & Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-75" />
    </div>
  );
};
