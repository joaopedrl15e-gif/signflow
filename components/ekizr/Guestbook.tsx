'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, Heart, User, CheckCircle2 } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
  avatarColor: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    name: 'Gabriel Silva',
    message: 'Portfólio sensacional! A fluidez e os efeitos de espaço ficaram em outro patamar.',
    date: 'Hoje às 11:20',
    avatarColor: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'c2',
    name: 'Lucas Martins',
    message: 'Design muito limpo e moderno. O projeto SignFlow ficou impressionante!',
    date: 'Ontem às 18:45',
    avatarColor: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'c3',
    name: 'Mariana Costa',
    message: 'Parabéns João! As demonstrações estão com um nível de acabamento absurdo.',
    date: '24 Ago às 14:10',
    avatarColor: 'from-pink-500 to-rose-500',
  },
];

export const Guestbook: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const colors = [
      'from-purple-500 to-indigo-500',
      'from-cyan-500 to-blue-500',
      'from-emerald-500 to-teal-500',
      'from-amber-500 to-orange-500',
    ];

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: 'Agora mesmo',
      avatarColor: colors[Math.floor(Math.random() * colors.length)],
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="guestbook" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Community Guestbook</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Leave a Message
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed">
          Deixe um comentário, feedback ou mensagem sobre o portfólio e projetos.
        </p>
      </div>

      <div className="rounded-3xl p-6 sm:p-8 bg-[#07031e]/90 border border-purple-500/20 shadow-2xl space-y-8">
        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Seu Nome *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Matheus Oliveira"
                className="w-full px-3.5 py-2.5 bg-[#030014] border border-purple-500/20 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Sua Mensagem *</label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
              className="w-full px-3.5 py-2.5 bg-[#030014] border border-purple-500/20 rounded-xl text-white text-xs outline-none focus:border-cyan-400 transition-colors resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            {submitted && (
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mensagem publicada com sucesso!</span>
              </span>
            )}
            <div className="ml-auto">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all hover:scale-105 flex items-center gap-1.5"
              >
                <span>Post Comment</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </form>

        {/* Comments Feed */}
        <div className="space-y-3 pt-6 border-t border-purple-500/15">
          <h4 className="text-xs font-mono text-purple-300 uppercase font-bold">
            Recent Comments ({comments.length})
          </h4>

          <div className="space-y-3">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-[#030014]/90 border border-purple-500/20 flex items-start gap-3.5"
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${c.avatarColor} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md`}
                >
                  {c.name.charAt(0).toUpperCase()}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-white">{c.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500">{c.date}</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{c.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
