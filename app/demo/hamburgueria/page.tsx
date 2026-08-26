'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  Star,
  Clock,
  MapPin,
  MessageSquare,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smash Bacon Supremo',
    category: 'Burgers Artesanais',
    description: 'Dois burgers smash 100g, cheddar cremoso derretido, fatias crocantes de bacon e molho especial da casa no pão brioche.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: 'O MAIS PEDIDO 🔥',
  },
  {
    id: '2',
    name: 'Truffled Master Burger',
    category: 'Burgers Artesanais',
    description: 'Blend nobre 180g na brasa, queijo gouda maçaricado, maionese trufada e cebola caramelizada no pão australiano.',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    badge: 'CHEF CHOICE ⭐',
  },
  {
    id: '3',
    name: 'Double Cheddar Monster',
    category: 'Burgers Artesanais',
    description: 'Duplo blend 150g recheado, quadruplo queijo cheddar inglês, farofa de bacon e molho barbecue rústico.',
    price: 42.50,
    image: 'https://images.unsplash.com/photo-1583032015879-c63e26127b14?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'Batata Rústica com Cheddar & Bacon',
    category: 'Porções & Acompanhamentos',
    description: '500g de batatas rústicas douradas e crocantes, cobertas com fondue de cheddar artesanal e bacon crispy.',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '5',
    name: 'Milkshake de Nutella com Ninho',
    category: 'Sobremesas',
    description: 'Sorvete artesanal de baunilha batido com bastante Nutella original, borda recheada e leite Ninho polvilhado.',
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
  },
];

export default function HamburgueriaDemoPage() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [activeCategory, setActiveCategory] = useState('Todos');

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const cartTotalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = MENU_ITEMS.find((i) => i.id === id);
    return total + (item ? item.price * qty : 0);
  }, 0);

  const categories = ['Todos', 'Burgers Artesanais', 'Porções & Acompanhamentos', 'Sobremesas'];
  const filteredItems = activeCategory === 'Todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((i) => i.category === activeCategory);

  const handleCheckoutWhatsapp = () => {
    let orderText = 'Olá! Gostaria de fazer um pedido pelo cardápio digital:%0A%0A';
    Object.entries(cart).forEach(([id, qty]) => {
      const item = MENU_ITEMS.find((i) => i.id === id);
      if (item) {
        orderText += `• ${qty}x ${item.name} - R$ ${(item.price * qty).toFixed(2)}%0A`;
      }
    });
    orderText += `%0A*Total: R$ ${cartTotalPrice.toFixed(2)}*%0A%0AEndereço para entrega:`;
    window.open(`https://wa.me/5511999999999?text=${orderText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* 🚀 TOP BAR: DEMONSTRATION NOTICE BANNER 🚀 */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/30 hover:bg-black/50 px-2.5 py-1 rounded-lg transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden sm:inline">• Modelo de Demonstração: Hamburgueria & Delivery</span>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20modelo%20da%20Hamburgueria%20e%20gostaria%20de%20criar%20um%20site%20assim%20para%20minha%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-neutral-950 px-3 py-1 rounded-lg font-black hover:bg-amber-100 transition-colors flex items-center gap-1 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 py-16 px-4 sm:px-6 text-center overflow-hidden border-b border-neutral-800">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Aberto Agora • Delivery Rápido (35-45 min)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            BURGER HOUSE <span className="text-amber-500">GOURMET</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Hambúrgueres artesanais na brasa, carnes nobres selecionadas, queijos especiais e molhos caseiros inconfundíveis.
          </p>

          <div className="flex items-center justify-center gap-6 text-xs text-neutral-300 pt-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">4.9 / 5.0</span> (680+ avaliações)
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Terça a Domingo: 18h às 23h30</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Av. Paulista, 1000 • SP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Menu & Catalog */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Category Selector Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const inCart = cart[item.id] || 0;

            return (
              <div
                key={item.id}
                className="bg-neutral-900/90 rounded-3xl p-5 border border-neutral-800 flex flex-col sm:flex-row gap-5 hover:border-amber-500/40 transition-all group"
              >
                <div className="sm:w-36 h-36 rounded-2xl overflow-hidden shrink-0 relative bg-neutral-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-amber-500 text-black text-[9px] font-black uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                    <span className="text-lg font-black text-amber-400">
                      R$ {item.price.toFixed(2)}
                    </span>

                    {inCart > 0 ? (
                      <div className="flex items-center gap-2 bg-neutral-800 px-2 py-1 rounded-xl border border-neutral-700">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-neutral-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-black text-amber-400">{inCart}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="p-1 text-neutral-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs transition-all hover:scale-105"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Adicionar</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Bottom Cart Bar */}
      {cartTotalItems > 0 && (
        <div className="fixed bottom-6 left-4 right-4 max-w-md mx-auto z-40 animate-in slide-in-from-bottom-5">
          <div className="bg-amber-500 text-black p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 font-black">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black text-amber-400 flex items-center justify-center text-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-neutral-900 block leading-tight">
                  {cartTotalItems} {cartTotalItems === 1 ? 'item selecionado' : 'itens selecionados'}
                </span>
                <span className="text-base font-black">R$ {cartTotalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsapp}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white text-xs font-black transition-all hover:scale-105"
            >
              <span>Enviar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
