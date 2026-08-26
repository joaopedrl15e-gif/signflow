'use client';

import React, { useState } from 'react';
import {
  Mail,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  MessageSquareCode
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Landing Page');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Por favor, informe um e-mail válido.');
      return;
    }

    if (!message.trim()) {
      setErrorMsg('Por favor, escreva os detalhes da sua mensagem ou projeto.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const subject = encodeURIComponent(`[Contato Portfólio] Projeto: ${projectType} - ${name}`);
      const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\nTipo de Projeto: ${projectType}\n\nMensagem:\n${message}`);

      window.location.href = `mailto:pimentarp153@icloud.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16 px-[5%]">
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Vamos criar algo juntos?
          </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Tem uma ideia de site ou projeto? Envie uma mensagem e conte o que você precisa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Coluna 1: Formulário */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl space-y-6">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mensagem Pronta para Envio!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Seu aplicativo de e-mail foi aberto com os dados preenchidos para envio a <strong>pimentarp153@icloud.com</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium cursor-pointer transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-gray-400">Seu Nome *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Matheus Oliveira"
                      className="w-full px-4 py-3 bg-[#030014] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-gray-400">Seu E-mail *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@exemplo.com"
                      className="w-full px-4 py-3 bg-[#030014] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-400">Tipo de Projeto</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#030014] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-purple-500 transition-colors cursor-pointer"
                  >
                    <option value="Landing Page">Landing Page Profissional</option>
                    <option value="Sistema Web / SaaS">Sistema Web / SaaS</option>
                    <option value="Cardápio Digital / Delivery">Cardápio Digital / Delivery</option>
                    <option value="Site Institucional">Site Institucional / Empresa</option>
                    <option value="Outro">Outro projeto sob medida</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-400">Mensagem *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte sobre sua ideia, prazos ou objetivos..."
                    className="w-full px-4 py-3 bg-[#030014] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5457cd] hover:to-[#9333ea] text-white font-medium text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Preparando envio...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Coluna 2: Cards Sociais */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://instagram.com/_jaopimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-between group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                  Instagram
                </h4>
                <p className="text-xs sm:text-sm font-mono text-gray-400">@_jaopimentel</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="mailto:pimentarp153@icloud.com"
            className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-between group shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                  E-mail Direto
                </h4>
                <p className="text-xs sm:text-sm font-mono text-gray-400">pimentarp153@icloud.com</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
          </a>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm text-gray-300">
            <span className="text-xs font-mono text-[#a855f7] font-bold uppercase block">
              Disponibilidade
            </span>
            <p className="leading-relaxed">
              Atualmente disponível para novos projetos, criação de landing pages e desenvolvimento de soluções web sob medida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
