'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Mail,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ContactSectionProps {
  prefilledType?: string;
  prefilledStyle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledType = '',
  prefilledStyle = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Landing page');
  const [style, setStyle] = useState('Tecnológico');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update when prefilled props change from MiniSiteBuilder
  useEffect(() => {
    if (prefilledType) setProjectType(prefilledType);
    if (prefilledStyle) setStyle(prefilledStyle);
  }, [prefilledType, prefilledStyle]);

  const maxMessageLength = 500;
  const isFormValid = name.trim().length >= 2 && email.includes('@') && message.trim().length >= 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setErrorMessage('');

    // Prepares mailto link or API payload
    setTimeout(() => {
      const mailtoSubject = encodeURIComponent(`Novo Projeto: ${projectType} (${style}) - ${name}`);
      const mailtoBody = encodeURIComponent(
        `Nome: ${name}\nE-mail: ${email}\nTipo de Projeto: ${projectType}\nEstilo Desejado: ${style}\n\nMensagem:\n${message}`
      );

      // Open email client safely
      window.location.href = `mailto:pimentarp153@icloud.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-xs">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Vamos Conversar</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Tem uma ideia? Vamos transformá-la em um projeto.
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Preencha o formulário abaixo ou entre em contato diretamente pelo Instagram e e-mail para tirar sua ideia do papel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Instagram Card */}
          <a
            href="https://instagram.com/_jaopimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl glass-card border border-slate-800 hover:border-purple-500/50 transition-all duration-200 block group shadow-xl hover:shadow-purple-500/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base group-hover:text-purple-400 transition-colors">
                    Instagram
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">@_jaopimentel</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:pimentarp153@icloud.com"
            className="p-6 rounded-3xl glass-card border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 block group shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base group-hover:text-cyan-400 transition-colors">
                    E-mail Direto
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">pimentarp153@icloud.com</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          {/* Commitment Note */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Clock className="w-4 h-4" />
              <span>Resposta Rápida</span>
            </div>
            <p className="leading-relaxed">
              Costumo responder todas as mensagens em poucas horas para alinhar detalhes e tirar dúvidas.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="glass-card-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/25 shadow-2xl space-y-6 bg-slate-950">
            {submitSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Mensagem Preparada!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Seu aplicativo de e-mail foi aberto com os dados preenchidos para envio direto a <strong>pimentarp153@icloud.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-bold transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 font-mono">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors placeholder-slate-600"
                  />
                </div>

                {/* E-mail */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 font-mono">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors placeholder-slate-600"
                  />
                </div>

                {/* Tipo e Estilo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300 font-mono">
                      Tipo de Projeto
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option>Landing page</option>
                      <option>Portfólio</option>
                      <option>Site empresarial</option>
                      <option>Outro tipo</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300 font-mono">
                      Estilo Desejado
                    </label>
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option>Tecnológico</option>
                      <option>Minimalista</option>
                      <option>Criativo</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300 font-mono">
                    <span>Mensagem *</span>
                    <span className="text-[10px] text-slate-500">
                      {message.length}/{maxMessageLength}
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    maxLength={maxMessageLength}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente sobre o seu projeto ou necessidade..."
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors placeholder-slate-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 mt-4 shadow-xl ${
                    isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-cyan-500/25 hover:scale-[1.01] cursor-pointer'
                      : 'bg-slate-900 text-slate-500 border border-slate-800 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Preparando envio...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
