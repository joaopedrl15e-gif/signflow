'use client';

import React, { useState } from 'react';
import { Mail, Instagram, Send, CheckCircle2, ArrowRight, MessageSquare, Sparkles, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject ? `[Portfólio] ${subject}` : `Novo Contato de ${name}`);
    const mailtoBody = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:pimentarp153@icloud.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Let&apos;s Connect & Build
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Tem um projeto em mente ou quer bater um papo sobre desenvolvimento web? Envie uma mensagem!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Social Cards (Left) */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://instagram.com/_jaopimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl bg-[#07031e]/90 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-between group shadow-xl hover:shadow-purple-950/40"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">
                  Instagram
                </h4>
                <p className="text-xs font-mono text-zinc-400">@_jaopimentel</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="mailto:pimentarp153@icloud.com"
            className="p-5 rounded-3xl bg-[#07031e]/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-between group shadow-xl hover:shadow-purple-950/40"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                  Email Direto
                </h4>
                <p className="text-xs font-mono text-zinc-400">pimentarp153@icloud.com</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
          </a>

          <div className="p-6 rounded-3xl bg-[#07031e]/60 border border-purple-500/15 space-y-2 text-xs text-zinc-300">
            <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block">Disponibilidade</span>
            <p className="leading-relaxed">
              Atualmente disponível para novos projetos freelance, desenvolvimento de landing pages e sistemas sob medida.
            </p>
          </div>
        </div>

        {/* Message Form (Right) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl p-6 sm:p-8 bg-[#07031e]/90 border border-purple-500/20 shadow-2xl space-y-5">
            {submitted ? (
              <div className="py-12 text-center space-y-3 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Mensagem Encaminhada!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Seu cliente de email foi aberto com as informações prontas para envio a <strong>pimentarp153@icloud.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-purple-950/60 text-purple-200 text-xs font-semibold"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Seu Nome *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João da Silva"
                      className="w-full px-3.5 py-2.5 bg-[#030014] border border-purple-500/20 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Seu Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@exemplo.com"
                      className="w-full px-3.5 py-2.5 bg-[#030014] border border-purple-500/20 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Assunto</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ex: Criação de Landing Page"
                    className="w-full px-3.5 py-2.5 bg-[#030014] border border-purple-500/20 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Mensagem *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte sobre o seu projeto ou ideia..."
                    className="w-full px-3.5 py-2.5 bg-[#030014] border border-purple-500/20 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
