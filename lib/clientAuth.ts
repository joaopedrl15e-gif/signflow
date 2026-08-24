'use client';

import { User } from './types';

const STORAGE_USERS_KEY = 'signflow_registered_users';
const STORAGE_SESSION_KEY = 'signflow_active_user';

export const clientAuth = {
  getUsers(): User[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_USERS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    try {
      const data = localStorage.getItem(STORAGE_SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  register(userData: {
    name: string;
    email: string;
    password: string;
    companyName: string;
    phone?: string;
  }): { success: boolean; error?: string; user?: User } {
    if (typeof window === 'undefined') return { success: false, error: 'Janela indisponível' };

    const emailClean = userData.email.toLowerCase().trim();
    const users = this.getUsers();

    if (users.some(u => u.email.toLowerCase() === emailClean)) {
      return { success: false, error: 'Já existe uma conta cadastrada com este e-mail.' };
    }

    const newUser: User = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: userData.name,
      email: emailClean,
      passwordHash: userData.password,
      companyName: userData.companyName || userData.name,
      phone: userData.phone || '',
      plan: 'free',
      planCycle: 'monthly',
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
      localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }

    return { success: true, user: newUser };
  },

  login(email: string, password: string): { success: boolean; error?: string; user?: User } {
    if (typeof window === 'undefined') return { success: false, error: 'Janela indisponível' };

    const emailClean = email.toLowerCase().trim();

    // Check if it's the demo account
    if (emailClean === 'demo@studionova.com.br' && password === '123456') {
      const demoUser: User = {
        id: 'usr_demo_1',
        name: 'Studio Nova (Demo)',
        email: 'demo@studionova.com.br',
        passwordHash: '123456',
        companyName: 'Studio Nova Digital',
        phone: '(11) 99876-5432',
        document: '42.123.456/0001-89',
        plan: 'free',
        planCycle: 'monthly',
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(demoUser));
      return { success: true, user: demoUser };
    }

    const users = this.getUsers();
    const found = users.find(u => u.email.toLowerCase() === emailClean);

    if (!found || found.passwordHash !== password) {
      return { success: false, error: 'E-mail ou senha incorretos.' };
    }

    localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(found));
    return { success: true, user: found };
  },

  logout() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_SESSION_KEY);
    } catch {}
  }
};
