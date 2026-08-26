'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShoppingBag,
  Clock,
  MapPin,
  Star,
  ChevronLeft,
  Plus,
  Minus,
  Check,
  X,
  Search,
  ArrowRight,
  Sparkles,
  Phone,
  AlertCircle,
  Percent,
  SlidersHorizontal,
  Flame
} from 'lucide-react';

interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

const EXTRA_OPTIONS: ExtraOption[] = [
  { id: 'bacon', name: 'Bacon em tiras defumado na lenha', price: 6.00 },
  { id: 'cheddar', name: 'Queijo Cheddar inglês derretido', price: 5.00 },
  { id: 'cebola', name: 'Cebola caramelizada no açúcar mascavo', price: 4.00 },
  { id: 'shimeji', name: 'Cogumelos Shimeji na manteiga', price: 8.00 },
  { id: 'maionese', name: 'Pote extra de Maionese de Alho Negro', price: 4.50 },
];

interface MenuItem {
  id: string;
  name: string;
  category: 'combos' | 'smash' | 'artesanais' | 'porcoes' | 'bebidas' | 'sobremesas';
  categoryLabel: string;
  description: string;
  ingredients: string[];
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  prepTime: string;
  customizable?: boolean;
}

const MENU_DATA: MenuItem[] = [
  {
    id: 'combo-1',
    name: 'Combo Duo Smash + 2 Batatas + 2 Bebidas',
    category: 'combos',
    categoryLabel: 'Combos Especiais',
    description: '2 Burgers Smash Bacon Duplo (duplo smash 100g de angus, queijo cheddar fundido, fatias de bacon defumado e maionese da casa no pão brioche), 2 porções de batatas rústicas com sal de alecrim e 2 refrigerantes.',
    ingredients: ['2x Smash Bacon Duplo', '2x Batatas Rústicas', '2x Bebidas'],
    price: 79.90,
    originalPrice: 98.00,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=700&auto=format&fit=crop&q=80',
    badge: 'Mais Pedido',
    rating: 4.9,
    reviewCount: 412,
    prepTime: '25-35 min',
    customizable: true,
  },
  {
    id: 'smash-1',
    name: 'Smash Bacon Defumado 100g',
    category: 'smash',
    categoryLabel: 'Smash Burgers',
    description: 'Dois burgers smash 100g de blend angus prensados na chapa de ferro ultra quente com crosta crocante, queijo cheddar inglês, fatias de bacon crocante e maionese de alho negro no pão brioche artesanal.',
    ingredients: ['2x Smash Angus 100g', 'Cheddar Inglês', 'Bacon Artesanal', 'Maionese Alho Negro', 'Pão Brioche'],
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80',
    badge: 'Especialidade da Casa',
    rating: 5.0,
    reviewCount: 680,
    prepTime: '20-25 min',
    customizable: true,
  },
  {
    id: 'smash-2',
    name: 'Triple Cheddar Melted',
    category: 'smash',
    categoryLabel: 'Smash Burgers',
    description: 'Três carnes smash de 90g ultra prensadas, creme de queijo cheddar artesanal derretido, cebola brunoise e picles da casa no pão australiano tostado na manteiga.',
    ingredients: ['3x Smash 90g', 'Cheddar Artesanal', 'Cebola Roxa', 'Picles Caseiro', 'Pão Australiano'],
    price: 38.90,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=700&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 320,
    prepTime: '20-30 min',
    customizable: true,
  },
  {
    id: 'art-1',
    name: 'Costela Angus Trufada 180g',
    category: 'artesanais',
    categoryLabel: 'Gourmet na Brasa',
    description: 'Blend nobre de costela angus 180g grelhado no fogo a carvão, queijo gouda maçaricado, cogumelos shimeji salteados na manteiga trufada e cebola caramelizada no pão brioche.',
    ingredients: ['Blend Costela 180g', 'Queijo Gouda', 'Shimeji na Manteiga', 'Azeite Trufado', 'Pão Brioche'],
    price: 42.90,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=700&auto=format&fit=crop&q=80',
    badge: 'Sugestão do Chef',
    rating: 5.0,
    reviewCount: 510,
    prepTime: '25-35 min',
    customizable: true,
  },
  {
    id: 'porcao-1',
    name: 'Batata Rústica com Fondue de Cheddar & Bacon',
    category: 'porcoes',
    categoryLabel: 'Porções & Entradas',
    description: '500g de batatas rústicas cortadas à mão, temperadas com sal de alecrim e páprica defumada, cobertas com fondue artesanal de queijo cheddar e cubos crocantes de bacon.',
    ingredients: ['500g Batata Rústica', 'Fondue Cheddar', 'Bacon Crispy', 'Alecrim Fresco'],
    price: 28.90,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 490,
    prepTime: '15-20 min',
  },
  {
    id: 'sob-1',
    name: 'Milkshake de Brownie Belga & Ninho 500ml',
    category: 'sobremesas',
    categoryLabel: 'Sobremesas & Shakes',
    description: '500ml de sorvete cremoso de baunilha batido com cacau 70%, pedaços de brownie caseiro recheado e borda farta de leite ninho.',
    ingredients: ['Sorvete Baunilha', 'Cacau Belga 70%', 'Brownie Caseiro', 'Leite Ninho'],
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewCount: 380,
    prepTime: '10 min',
  },
];

export default function HamburgueriaArtisanPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ [key: string]: { qty: number; doneness?: string; extras?: string[]; obs?: string } }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Customization Modal State
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const [modalDoneness, setModalDoneness] = useState('Ao ponto (suculento)');
  const [modalExtras, setModalExtras] = useState<string[]>([]);
  const [modalObs, setModalObs] = useState('');

  // Checkout Fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'retirada'>('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'dinheiro'>('pix');
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const categoriesList = [
    { id: 'todos', label: 'Cardápio Completo' },
    { id: 'combos', label: 'Combos' },
    { id: 'smash', label: 'Smash Burgers' },
    { id: 'artesanais', label: 'Gourmet na Brasa' },
    { id: 'porcoes', label: 'Porções' },
    { id: 'sobremesas', label: 'Sobremesas' },
  ];

  const filteredItems = MENU_DATA.filter((item) => {
    const matchesCat = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleOpenCustomization = (item: MenuItem) => {
    setModalItem(item);
    setModalDoneness('Ao ponto (suculento)');
    setModalExtras([]);
    setModalObs('');
  };

  const handleConfirmCustomization = () => {
    if (!modalItem) return;
    const key = `${modalItem.id}_${modalDoneness}_${modalExtras.sort().join('-')}`;
    setCart((prev) => ({
      ...prev,
      [key]: {
        qty: (prev[key]?.qty || 0) + 1,
        doneness: modalDoneness,
        extras: modalExtras,
        obs: modalObs,
      },
    }));
    setModalItem(null);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (item: MenuItem) => {
    if (item.customizable) {
      handleOpenCustomization(item);
    } else {
      const key = `${item.id}_default`;
      setCart((prev) => ({
        ...prev,
        [key]: { qty: (prev[key]?.qty || 0) + 1 },
      }));
      setIsCartOpen(true);
    }
  };

  const updateCartQty = (key: string, delta: number) => {
    setCart((prev) => {
      const current = prev[key]?.qty || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return { ...prev, [key]: { ...prev[key], qty: next } };
    });
  };

  const calculateSubtotal = () => {
    return Object.entries(cart).reduce((total, [key, item]) => {
      const baseId = key.split('_')[0];
      const menuItem = MENU_DATA.find((m) => m.id === baseId);
      if (!menuItem) return total;
      let price = menuItem.price;
      if (item.extras) {
        item.extras.forEach((extId) => {
          const opt = EXTRA_OPTIONS.find((o) => o.id === extId);
          if (opt) price += opt.price;
        });
      }
      return total + price * item.qty;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = deliveryMethod === 'delivery' ? 8.00 : 0;
  const discount = appliedCoupon === 'PRIMEIRACOMPRA' ? 10.00 : 0;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discount);
  const totalCartCount = Object.values(cart).reduce((acc, curr) => acc + curr.qty, 0);

  const handleSendOrder = () => {
    let msg = `🍔 *NOVO PEDIDO • ARTISAN BURGER CO.* 🍔%0A%0A`;
    msg += `👤 *Cliente:* ${customerName || 'Cliente'}%0A`;
    msg += `📱 *Telefone:* ${customerPhone || 'Informado no WhatsApp'}%0A`;
    msg += `🛵 *Tipo:* ${deliveryMethod === 'delivery' ? 'Entrega em Domicílio' : 'Retirada no Balcão'}%0A`;
    if (deliveryMethod === 'delivery' && deliveryAddress) {
      msg += `📍 *Endereço:* ${deliveryAddress}%0A`;
    }
    msg += `💳 *Pagamento:* ${paymentMethod.toUpperCase()}%0A%0A`;
    msg += `*ITENS:*%0A`;

    Object.entries(cart).forEach(([key, item]) => {
      const baseId = key.split('_')[0];
      const prod = MENU_DATA.find((m) => m.id === baseId);
      if (!prod) return;
      msg += `• ${item.qty}x ${prod.name}`;
      if (item.doneness) msg += ` (${item.doneness})`;
      if (item.extras && item.extras.length > 0) {
        msg += ` [Extras: ${item.extras.join(', ')}]`;
      }
      if (item.obs) msg += ` [Obs: ${item.obs}]`;
      msg += `%0A`;
    });

    msg += `%0A💰 *Subtotal:* R$ ${subtotal.toFixed(2)}`;
    if (deliveryMethod === 'delivery') msg += `%0A🛵 *Entrega:* R$ ${deliveryFee.toFixed(2)}`;
    if (discount > 0) msg += `%0A🎟️ *Desconto:* -R$ ${discount.toFixed(2)}`;
    msg += `%0A*TOTAL: R$ ${grandTotal.toFixed(2)}*`;

    window.open(`https://wa.me/5517992537024?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 font-sans selection:bg-amber-500 selection:text-black pb-32">
      {/* Top Bar Return */}
      <div className="bg-stone-900 border-b border-stone-800 text-stone-300 px-4 py-2 text-xs flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar ao Portfólio de João Pedro</span>
        </Link>
        <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
          Demonstração de Cardápio Digital & Delivery
        </span>
      </div>

      {/* Restaurant Header */}
      <header className="border-b border-stone-800/80 bg-stone-950/80 backdrop-blur-md sticky top-8 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center font-bold text-stone-950 text-sm shadow-md">
              <Flame className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base tracking-tight text-white">Artisan Burger Co.</h1>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                  ABERTO
                </span>
              </div>
              <p className="text-[11px] text-stone-400">Burgers artesanais no fogo a carvão • 18h às 23h30</p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Carrinho ({totalCartCount})</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Search & Categories */}
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar no cardápio..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-xs text-white placeholder-stone-500 outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-stone-100 text-stone-950 font-bold'
                    : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/60 rounded-2xl p-5 border border-stone-800/80 hover:border-stone-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-full h-44 rounded-xl overflow-hidden relative bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-sm text-[10px] font-mono text-amber-400 border border-amber-500/20 font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-base text-white">{item.name}</h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-amber-400">
                    R$ {item.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleQuickAdd(item)}
                  className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{item.customizable ? 'Personalizar' : 'Adicionar'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Customization Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-stone-900 rounded-2xl max-w-lg w-full p-6 border border-stone-800 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-stone-800">
              <div>
                <h3 className="font-bold text-lg text-white">{modalItem.name}</h3>
                <span className="text-xs text-amber-400 font-semibold">R$ {modalItem.price.toFixed(2)}</span>
              </div>
              <button onClick={() => setModalItem(null)} className="p-1 rounded-lg text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Doneness */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-300 uppercase font-mono">Ponto da Carne</label>
              <div className="grid grid-cols-2 gap-2">
                {['Ao ponto (suculento)', 'Bem passado', 'Ao ponto para menos'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setModalDoneness(d)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                      modalDoneness === d
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-950 text-stone-400 border border-stone-800'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-300 uppercase font-mono">Adicionais Opcionais</label>
              <div className="space-y-1.5">
                {EXTRA_OPTIONS.map((ext) => {
                  const isChecked = modalExtras.includes(ext.name);
                  return (
                    <div
                      key={ext.id}
                      onClick={() => {
                        setModalExtras((prev) =>
                          isChecked ? prev.filter((e) => e !== ext.name) : [...prev, ext.name]
                        );
                      }}
                      className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between text-xs cursor-pointer"
                    >
                      <span className="text-stone-300">{ext.name}</span>
                      <span className="font-bold text-amber-400">+R$ {ext.price.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleConfirmCustomization}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
          <div className="bg-stone-900 w-full max-w-md h-full p-6 flex flex-col justify-between border-l border-stone-800 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <span>Seu Pedido</span>
                </h3>
                <button onClick={() => setIsCartOpen(false)} className="p-1 rounded-lg text-stone-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              {Object.keys(cart).length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-xs">
                  Seu carrinho está vazio.
                </div>
              ) : (
                <div className="space-y-3">
                  {Object.entries(cart).map(([key, item]) => {
                    const baseId = key.split('_')[0];
                    const prod = MENU_DATA.find((m) => m.id === baseId);
                    if (!prod) return null;

                    return (
                      <div key={key} className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-white">{prod.name}</h4>
                          {item.doneness && <p className="text-[11px] text-stone-400">{item.doneness}</p>}
                          <span className="font-bold text-amber-400">R$ {prod.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-stone-900 px-2 py-1 rounded-lg border border-stone-800">
                          <button onClick={() => updateCartQty(key, -1)} className="text-stone-400 hover:text-white">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-white font-mono">{item.qty}</span>
                          <button onClick={() => updateCartQty(key, 1)} className="text-stone-400 hover:text-white">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Checkout Form */}
              {Object.keys(cart).length > 0 && (
                <div className="space-y-3 pt-4 border-t border-stone-800 text-xs">
                  <div>
                    <label className="block text-stone-400 mb-1 font-mono text-[11px]">Seu Nome</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-400 mb-1 font-mono text-[11px]">Endereço Completo</label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Rua, número e bairro"
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Total & Submit */}
            {Object.keys(cart).length > 0 && (
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Total do Pedido</span>
                  <span className="text-amber-400 text-base">R$ {grandTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleSendOrder}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar Pedido pelo WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
