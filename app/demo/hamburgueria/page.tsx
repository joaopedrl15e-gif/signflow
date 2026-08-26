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
  ArrowRight,
  Truck,
  ShieldCheck,
  Award,
  Heart
} from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  rating: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smash Bacon Supremo',
    category: 'Burgers Artesanais',
    description: 'Dois burgers smash 100g de angus, cheddar cremoso derretido na chapa, fatias crocantes de bacon defumado e maionese de alho negro no pão brioche amanteigado.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: 'O MAIS PEDIDO 🔥',
    rating: '5.0 (340+)',
  },
  {
    id: '2',
    name: 'Truffled Master Burger',
    category: 'Burgers Artesanais',
    description: 'Blend nobre 180g selado na brasa, queijo gouda maçaricado, cogumelos salteados na manteiga, maionese trufada e cebola caramelizada no pão australiano.',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    badge: 'CHEF CHOICE ⭐',
    rating: '4.9 (210+)',
  },
  {
    id: '3',
    name: 'Double Cheddar Monster',
    category: 'Burgers Artesanais',
    description: 'Duplo blend 160g recheado, quadruplo queijo cheddar inglês fundido, farofa de bacon crocante e molho barbecue rústico defumado.',
    price: 44.50,
    image: 'https://images.unsplash.com/photo-1583032015879-c63e26127b14?auto=format&fit=crop&w=600&q=80',
    badge: 'GIGANTE 🍔',
    rating: '4.9 (180+)',
  },
  {
    id: '4',
    name: 'Combo Casal Smash + Fritas + Refrigerante',
    category: 'Combos Especiais',
    description: '2 Burgers Smash Bacon + 1 Batata Rústica Grande com Cheddar e Bacon + 2 Refrigerantes lata à sua escolha.',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=600&q=80',
    badge: 'SUPER DESCONTO ⚡',
    rating: '5.0 (520+)',
  },
  {
    id: '5',
    name: 'Batata Rústica Supreme com Cheddar & Bacon',
    category: 'Porções & Acompanhamentos',
    description: '500g de batatas rústicas douradas temperadas com páprica e alecrim, cobertas com fondue de cheddar artesanal e bacon crispy.',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    rating: '4.8 (190+)',
  },
  {
    id: '6',
    name: 'Coxinhas Artesanais sem Massa de Costela (6 un)',
    category: 'Porções & Acompanhamentos',
    description: '6 deliciosas coxinhas recheadas 100% com costela bovina desfiada marinada por 12h na cerveja preta.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    rating: '4.9 (140+)',
  },
  {
    id: '7',
    name: 'Milkshake de Nutella com Ninho & Brownie',
    category: 'Sobremesas',
    description: 'Sorvete artesanal de baunilha batido com bastante Nutella original, pedaços de brownie caseiro e borda de leite Ninho.',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    badge: 'SOBREMESA TOP 🍦',
    rating: '5.0 (430+)',
  },
];

const REVIEWS = [
  { name: 'Lucas Silveira', comment: 'Melhor burger da cidade de longe! Chegou quentinho em 25 minutos e o pão é ultra macio.', stars: 5, time: 'Ontem' },
  { name: 'Camila Albuquerque', comment: 'O molho trufado é um espetáculo. Atendimento impecável pelo WhatsApp!', stars: 5, time: 'Há 2 dias' },
  { name: 'Matheus Prado', comment: 'Combo casal com preço super justo e carne no ponto perfeito na brasa.', stars: 5, time: 'Há 4 dias' },
];

export default function HamburgueriaDemoPage() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'retirada'>('delivery');
  const [address, setAddress] = useState('');

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

  const categories = ['Todos', 'Combos Especiais', 'Burgers Artesanais', 'Porções & Acompanhamentos', 'Sobremesas'];
  const filteredItems = activeCategory === 'Todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((i) => i.category === activeCategory);

  const handleCheckoutWhatsapp = () => {
    let orderText = '🍔 *NOVO PEDIDO PELO CARDÁPIO DIGITAL:*%0A%0A';
    Object.entries(cart).forEach(([id, qty]) => {
      const item = MENU_ITEMS.find((i) => i.id === id);
      if (item) {
        orderText += `▪️ ${qty}x ${item.name} - R$ ${(item.price * qty).toFixed(2)}%0A`;
      }
    });
    orderText += `%0A💰 *TOTAL DO PEDIDO: R$ ${cartTotalPrice.toFixed(2)}*%0A`;
    orderText += `🛵 *Tipo:* ${deliveryType === 'delivery' ? 'Entrega Delivery' : 'Retirada no Balcão'}%0A`;
    if (deliveryType === 'delivery' && address) {
      orderText += `📍 *Endereço:* ${address}%0A`;
    }
    orderText += `%0APor favor, confirmem o tempo estimado e a chave Pix!`;

    window.open(`https://wa.me/5517992537024?text=${orderText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500 selection:text-black pb-24">
      {/* 🚀 TOP STICKY BAR: CONVERSÃO & DEMONSTRAÇÃO 🚀 */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden md:inline font-mono">• Demonstração de Site para Hamburgueria</span>
        </div>
        <a
          href="https://wa.me/5517992537024?text=Olá!%20Vi%20o%20modelo%20da%20Hamburgueria%20e%20quero%20um%20site%20assim%20para%20meu%20restaurante!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-neutral-950 px-4 py-1.5 rounded-xl font-black hover:bg-amber-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Quero um Site Assim (R$ 350)</span>
        </a>
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 py-16 px-4 sm:px-6 text-center overflow-hidden border-b border-neutral-800">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Delivery Aberto • Tempo Médio: 35 a 45 min</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            BURGER HOUSE <span className="text-amber-500">GOURMET</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Hambúrgueres artesanais 100% Angus preparados na brasa, queijos especiais fundidos e pães artesanais de fermentação natural.
          </p>

          <div className="flex items-center justify-center gap-6 text-xs text-neutral-300 pt-2 flex-wrap font-medium">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">4.9 / 5.0</span> (780+ avaliações no Google)
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-amber-500" />
              <span>Entrega Grátis acima de R$ 60</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Terça a Domingo: 18h às 23h45</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Menu & Catalog */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Category Selector Filter */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all shrink-0 ${
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
                className="bg-neutral-900/90 rounded-3xl p-5 border border-neutral-800 flex flex-col sm:flex-row gap-5 hover:border-amber-500/40 transition-all group shadow-xl"
              >
                <div className="sm:w-36 h-36 rounded-2xl overflow-hidden shrink-0 relative bg-neutral-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-amber-500 text-black text-[9px] font-black uppercase shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-[10px] text-amber-400 font-bold flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                    </span>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                    <span className="text-lg font-black text-amber-400">
                      R$ {item.price.toFixed(2)}
                    </span>

                    {inCart > 0 ? (
                      <div className="flex items-center gap-2.5 bg-neutral-800 px-3 py-1.5 rounded-xl border border-neutral-700">
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
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs transition-all hover:scale-105 shadow-md shadow-amber-500/20"
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

        {/* Avaliações de Clientes no Google */}
        <div className="pt-12 border-t border-neutral-800 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Depoimentos Reais</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">O Que Nossos Clientes Dizem</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {REVIEWS.map((r, idx) => (
              <div key={idx} className="bg-neutral-900/90 rounded-2xl p-5 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{r.name}</span>
                  <span className="text-[10px] text-neutral-500">{r.time}</span>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(r.stars)}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed italic">"{r.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Bottom Cart Bar */}
      {cartTotalItems > 0 && (
        <div className="fixed bottom-6 left-4 right-4 max-w-lg mx-auto z-40 animate-in slide-in-from-bottom-5">
          <div className="bg-amber-500 text-black p-4 sm:p-5 rounded-2xl shadow-2xl space-y-3 font-black">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-amber-400 flex items-center justify-center text-sm">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-900 block leading-tight">
                    {cartTotalItems} {cartTotalItems === 1 ? 'item selecionado' : 'itens selecionados'}
                  </span>
                  <span className="text-xl font-black">R$ {cartTotalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex bg-black/20 p-1 rounded-xl text-xs">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`px-3 py-1 rounded-lg ${deliveryType === 'delivery' ? 'bg-black text-white' : 'text-black'}`}
                >
                  Entrega
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('retirada')}
                  className={`px-3 py-1 rounded-lg ${deliveryType === 'retirada' ? 'bg-black text-white' : 'text-black'}`}
                >
                  Retirar
                </button>
              </div>
            </div>

            {deliveryType === 'delivery' && (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Rua, número e bairro para entrega..."
                className="w-full px-3.5 py-2 text-xs bg-white text-black rounded-xl outline-none font-medium border border-amber-600"
              />
            )}

            <button
              onClick={handleCheckoutWhatsapp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black hover:bg-neutral-900 text-white text-xs font-black transition-all hover:scale-[1.01]"
            >
              <span>Finalizar Pedido no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
