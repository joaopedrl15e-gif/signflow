'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Building2, Search, LogOut, User as UserIcon } from 'lucide-react';
import { CompanySettings, User } from '@/lib/types';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [settings, setSettings] = useState<CompanySettings | null>(null);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setUser(data.user);
        }
      })
      .catch(() => {});

    fetch('/api/settings')
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      window.location.href = '/login';
    } catch {
      router.push('/login');
    }
  };

  const displayName = user?.companyName || settings?.name || user?.name || 'Meu Espaço';
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <header className="h-16 bg-white/90 border-b border-slate-200 px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
          <Building2 className="w-4 h-4" />
        </div>
        <div>
          <h1 className="text-xs font-bold text-slate-900 flex items-center gap-2">
            <span>{displayName}</span>
          </h1>
          <p className="text-[10px] text-slate-400">
            {user ? `Conectado como ${user.name}` : 'Painel de Gestão'}
          </p>
        </div>
        <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Online
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Live Search */}
        <Link
          href="/dashboard/propostas"
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 text-xs transition-colors"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Buscar proposta...</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-400 font-mono shadow-xs">⌘K</kbd>
        </Link>

        {/* Quick Create CTA */}
        <Link
          href="/dashboard/propostas/nova"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-sm transition-all hover:scale-105"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Criar Proposta</span>
        </Link>

        <div className="h-4 w-px bg-slate-200" />

        {/* User Profile Avatar & Logout */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white flex items-center justify-center font-black text-xs shadow-sm" title={user?.email || 'Usuário'}>
            {initials}
          </div>

          <button
            onClick={handleLogout}
            title="Sair da conta"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
