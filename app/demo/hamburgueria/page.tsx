'use client';

import React, { useState, useEffect } from 'react';
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
  Heart,
  Search,
  Percent,
  X,
  Check,
  Share2,
  Copy,
  Info,
  Gift,
  HelpCircle,
  Instagram,
  ChevronRight,
  SlidersHorizontal,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

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
  calories?: string;
  customizable?: boolean;
}

const MENU_DATA: MenuItem[] = [
  {
    id: 'combo-1',
    name: 'Combo Casal Smash Supreme + 2 Fritas + 2 Bebidas',
    category: 'combos',
    categoryLabel: 'Combos & Ofertas',
    description: '2 Burgers Smash Bacon Duplo (carne angus 100g smashada, cheddar inglês derretido, bacon artesanal crocante no pão brioche), 2 porções de batatas rústicas douradas e 2 refrigerantes lata gelados.',
    ingredients: ['2x Smash Bacon Duplo', '2x Batatas Rústicas', '2x Bebidas Lata'],
    price: 79.90,
    originalPrice: 104.90,
    image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=800&q=80',
    badge: 'SUPER OFERTA (ECONOMIZE R$ 25) ⚡',
    rating: 5.0,
    reviewCount: 612,
    prepTime: '25-35 min',
    calories: '1450 kcal',
    customizable: true,
  },
  {
    id: 'combo-2',
    name: 'Combo Família Monster (4 Burgers + Fritas Giga + Refri 2L)',
    category: 'combos',
    categoryLabel: 'Combos & Ofertas',
    description: '4 Burgers Artesanais Clássicos de 150g, 1 Mega Porção de Batata Rústica com Cheddar e Bacon de 800g e 1 Refrigerante 2 Litros.',
    ingredients: ['4x Classic Burgers', '1x Mega Batata 800g', '1x Refrigerante 2L'],
    price: 139.90,
    originalPrice: 178.00,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    badge: 'SERVE ATÉ 4 PESSOAS 👨‍👩‍👧‍👦',
    rating: 4.9,
    reviewCount: 380,
    prepTime: '30-40 min',
    calories: '2800 kcal',
    customizable: true,
  },
  {
    id: 'smash-1',
    name: 'Smash Bacon Supremo Duplo',
    category: 'smash',
    categoryLabel: 'Smash Burgers',
    description: 'Dois burgers smash 100g de angus certificados com crostinha crocante na chapa ultra quente, queijo cheddar fundido, fatias generosas de bacon defumado na lenha e maionese secreta de alho negro no pão brioche dourado na manteiga.',
    ingredients: ['2x Smash Angus 100g', 'Cheddar Inglês', 'Bacon Defumado', 'Maionese Alho Negro', 'Pão Brioche'],
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'O MAIS PEDIDO 🔥',
    rating: 5.0,
    reviewCount: 890,
    prepTime: '20-30 min',
    calories: '780 kcal',
    customizable: true,
  },
  {
    id: 'smash-2',
    name: 'Triple Smash Melted Cheddar',
    category: 'smash',
    categoryLabel: 'Smash Burgers',
    description: 'Três carnes smash de 90g ultra prensadas, piscina de queijo cheddar artesanal derretido, cebola brunoise e picles artesanal agridoce.',
    ingredients: ['3x Smash 90g', 'Cheddar Cremoso', 'Cebola Roxa', 'Picles Agridoce'],
    price: 38.90,
    image: 'https://images.unsplash.com/photo-1583032015879-c63e26127b14?auto=format&fit=crop&w=800&q=80',
    badge: 'MUITO QUEIJO 🧀',
    rating: 4.9,
    reviewCount: 415,
    prepTime: '20-30 min',
    calories: '920 kcal',
    customizable: true,
  },
  {
    id: 'art-1',
    name: 'Truffled Master Gourmet 180g',
    category: 'artesanais',
    categoryLabel: 'Burgers Gourmet na Brasa',
    description: 'Blend nobre de costela e picanha 180g assado no fogo a carvão, queijo gouda maçaricado, cogumelos shimeji salteados na manteiga trufada e cebola caramelizada no pão australiano.',
    ingredients: ['Blend Nobre 180g', 'Queijo Gouda', 'Shimeji na Manteiga', 'Azeite Trufado', 'Pão Australiano'],
    price: 42.90,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: 'CHEF CHOICE ⭐',
    rating: 5.0,
    reviewCount: 520,
    prepTime: '25-35 min',
    calories: '860 kcal',
    customizable: true,
  },
  {
    id: 'art-2',
    name: 'Gorgonzola & Crispy Onion 180g',
    category: 'artesanais',
    categoryLabel: 'Burgers Gourmet na Brasa',
    description: 'Hambúrguer de 180g grelhado no ponto perfeito, generoso creme de queijo gorgonzola dolce, montanha de cebola crispy crocante e mel picante no pão com gergelim.',
    ingredients: ['Carne 180g', 'Creme Gorgonzola', 'Cebola Crispy', 'Mel com Pimenta'],
    price: 41.50,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 310,
    prepTime: '25-35 min',
    calories: '890 kcal',
    customizable: true,
  },
  {
    id: 'porcao-1',
    name: 'Batata Rústica Supreme com Fondue de Cheddar & Bacon',
    category: 'porcoes',
    categoryLabel: 'Porções & Entradas',
    description: '500g de batatas rústicas cortadas à mão, temperadas com sal de alecrim e páprica defumada, cobertas com fondue artesanal de queijo cheddar e cubos de bacon crocantes.',
    ingredients: ['500g Batata Rústica', 'Fondue Cheddar', 'Bacon Crispy', 'Alecrim'],
    price: 28.90,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    badge: 'MAIS VENDIDA 🍟',
    rating: 4.9,
    reviewCount: 740,
    prepTime: '15-25 min',
  },
  {
    id: 'porcao-2',
    name: 'Coxinha Artesanal sem Massa de Costela Desfiada (6 un)',
    category: 'porcoes',
    categoryLabel: 'Porções & Entradas',
    description: '6 unidades feitas 100% com recheio de costela bovina marinada 12h na cerveja preta e desfiada, empanadas na farinha panko japonesa com maionese da casa.',
    ingredients: ['Costela Desfiada', 'Farinha Panko', 'Molho Barbecue'],
    price: 32.90,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewCount: 410,
    prepTime: '15-20 min',
  },
  {
    id: 'porcao-3',
    name: 'Onion Rings Crocantes com Geléia de Pimenta',
    category: 'porcoes',
    categoryLabel: 'Porções & Entradas',
    description: 'Anéis de cebola selecionados super crocantes, acompanhados de pote de geléia de pimenta defumada da casa.',
    ingredients: ['Anéis de Cebola 350g', 'Geléia de Pimenta'],
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1639024471287-032f66e054ec?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 220,
    prepTime: '15-20 min',
  },
  {
    id: 'sob-1',
    name: 'Milkshake de Nutella Pura com Leite Ninho & Brownie',
    category: 'sobremesas',
    categoryLabel: 'Sobremesas & Shakes',
    description: '500ml de sorvete cremoso de baunilha batido com bastante Nutella original, pedaços generosos de brownie caseiro recheado e borda farta de Ninho.',
    ingredients: ['Sorvete Baunilha', 'Nutella Original', 'Brownie', 'Leite Ninho'],
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    badge: 'SOBREMESA TOP 🍦',
    rating: 5.0,
    reviewCount: 680,
    prepTime: '10 min',
  },
  {
    id: 'sob-2',
    name: 'Grand Brownie Belga com Sorvete e Calda Quente',
    category: 'sobremesas',
    categoryLabel: 'Sobremesas & Shakes',
    description: 'Fatia alta de brownie de chocolate belga 70% servido aquecido com bola de sorvete de creme e calda quente de chocolate meio amargo.',
    ingredients: ['Brownie Belga 70%', 'Sorvete Creme', 'Calda de Chocolate'],
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 290,
    prepTime: '10 min',
  },
  {
    id: 'beb-1',
    name: 'Refrigerante Lata 350ml (Coca-Cola, Guaraná, Zero)',
    category: 'bebidas',
    categoryLabel: 'Bebidas Geladas',
    description: 'Lata 350ml trincando de gelada.',
    ingredients: ['Lata 350ml'],
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewCount: 950,
    prepTime: '5 min',
  },
  {
    id: 'beb-2',
    name: 'Cerveja Artesanal IPA da Casa 500ml',
    category: 'bebidas',
    categoryLabel: 'Bebidas Geladas',
    description: 'Cerveja artesanal estilo American IPA com notas cítricas e amargor equilibrado. Servida em garrafa de 500ml.',
    ingredients: ['Garrafa 500ml IPA'],
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1608270199120-f4728d116fa0?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 320,
    prepTime: '5 min',
  },
];

const EXTRA_OPTIONS: CustomizationOption[] = [
  { id: 'extra-bacon', name: 'Bacon Extra Crocante (+4 fatias)', price: 6.00 },
  { id: 'extra-queijo', name: 'Queijo Cheddar Inglês Duplo', price: 5.00 },
  { id: 'extra-carne', name: 'Hambúrguer Extra de 100g', price: 9.00 },
  { id: 'extra-cebola', name: 'Cebola Caramelizada Artesanal', price: 4.00 },
  { id: 'extra-molho', name: 'Pote Extra de Maionese de Alho Negro', price: 4.50 },
];

const DONENESS_OPTIONS = ['Ao Ponto para Bem Passado', 'Ao Ponto (Rosadinho e Suculento)', 'Bem Passado'];

const REVIEWS = [
  {
    name: 'Guilherme Siqueira',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    date: 'Ontem às 21:30',
    comment: 'Melhor hambúrguer artesanal da cidade com folga! O pão brioche é uma nuvem, o bacon é super crocante e o pedido chegou em 28 minutos pelo WhatsApp. Já virei cliente fixo!',
    badge: 'Compra Verificada 🛵',
  },
  {
    name: 'Juliana Portela',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    date: 'Há 2 dias',
    comment: 'O milkshake de Nutella com Ninho e Brownie é uma covardia de tão gostoso. A batata rústica com cheddar derretido veio quentinha e crocante. Atendimento nota 10!',
    badge: 'Compra Verificada 🛵',
  },
  {
    name: 'Ricardo Vasconcelos',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    date: 'Há 4 dias',
    comment: 'Pedi o Truffled Master Gourmet e superou todas as expectativas. Carne no ponto perfeito na brasa e molho de trufas surreal. Parabéns a toda a equipe!',
    badge: 'Compra Verificada 🛵',
  },
];

const FAQ_ITEMS = [
  { q: 'Qual é o tempo médio de entrega?', a: 'Nosso tempo médio é de 30 a 45 minutos dependendo da sua localização. Você recebe atualizações em tempo real pelo WhatsApp!' },
  { q: 'Quais são as formas de pagamento aceitas?', a: 'Aceitamos PIX instantâneo com desconto, Cartão de Crédito e Débito na entrega (levamos a maquininha) e Dinheiro.' },
  { q: 'Vocês têm cupom para primeira compra?', a: 'Sim! Utilize o cupom PRIMEIRAENTREGA no WhatsApp para ganhar entrega grátis no seu primeiro pedido acima de R$ 50!' },
  { q: 'Como funciona o pedido pelo WhatsApp?', a: 'Você escolhe seus lanches no cardápio, clica em "Finalizar Pedido" e nosso sistema gera a mensagem completinha com seus itens e endereço para envio em 1 clique.' },
];

export default function HamburgueriaUltraDemoPage() {
  // State management
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<{ [key: string]: { qty: number; extras?: string[]; doneness?: string; obs?: string } }>({});
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  // Customizer modal state
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedDoneness, setSelectedDoneness] = useState<string>(DONENESS_OPTIONS[1]);
  const [itemObservation, setItemObservation] = useState<string>('');

  // Delivery state
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'retirada'>('delivery');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'dinheiro'>('pix');
  const [appliedCoupon, setAppliedCoupon] = useState<string>('');
  const [couponInput, setCouponInput] = useState<string>('');
  const [couponError, setCouponError] = useState<string>('');

  // Flash Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ minutes: 38, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 45, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter items
  const categoriesList = [
    { id: 'todos', label: 'Todos os Pratos' },
    { id: 'combos', label: '🔥 Combos em Oferta' },
    { id: 'smash', label: '🍔 Smash Burgers' },
    { id: 'artesanais', label: '🥩 Artesanais na Brasa' },
    { id: 'porcoes', label: '🍟 Porções & Entradas' },
    { id: 'sobremesas', label: '🍦 Sobremesas & Shakes' },
    { id: 'bebidas', label: '🥤 Bebidas' },
  ];

  const filteredItems = MENU_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Open customizer
  const handleOpenCustomizer = (item: MenuItem) => {
    setCustomizingItem(item);
    setSelectedExtras([]);
    setSelectedDoneness(DONENESS_OPTIONS[1]);
    setItemObservation('');
  };

  // Add customized item to cart
  const handleConfirmCustomization = () => {
    if (!customizingItem) return;
    const key = `${customizingItem.id}_${selectedExtras.sort().join('_')}_${selectedDoneness}_${itemObservation}`;
    setCart((prev) => ({
      ...prev,
      [key]: {
        qty: (prev[key]?.qty || 0) + 1,
        extras: selectedExtras,
        doneness: selectedDoneness,
        obs: itemObservation,
      },
    }));
    setCustomizingItem(null);
  };

  // Direct simple add
  const handleQuickAdd = (item: MenuItem) => {
    if (item.customizable) {
      handleOpenCustomizer(item);
    } else {
      const key = item.id;
      setCart((prev) => ({
        ...prev,
        [key]: {
          qty: (prev[key]?.qty || 0) + 1,
        },
      }));
    }
  };

  const handleUpdateCartQty = (key: string, delta: number) => {
    setCart((prev) => {
      const current = prev[key];
      if (!current) return prev;
      const newQty = current.qty + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return { ...prev, [key]: { ...current, qty: newQty } };
    });
  };

  // Calculate totals
  const cartItemCount = Object.values(cart).reduce((total, item) => total + item.qty, 0);

  const calculateSubtotal = () => {
    return Object.entries(cart).reduce((total, [key, item]) => {
      const baseId = key.split('_')[0];
      const menuItem = MENU_DATA.find((m) => m.id === baseId);
      if (!menuItem) return total;

      let itemPrice = menuItem.price;
      if (item.extras) {
        item.extras.forEach((extId) => {
          const opt = EXTRA_OPTIONS.find((o) => o.id === extId);
          if (opt) itemPrice += opt.price;
        });
      }
      return total + (itemPrice * item.qty);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = deliveryMethod === 'delivery' ? (subtotal >= 60 ? 0 : 7.00) : 0;
  const discountAmount = appliedCoupon === 'PRIMEIRAENTREGA' ? (deliveryMethod === 'delivery' ? Math.min(deliveryFee, 7.00) : 0) : 0;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discountAmount);

  // Apply coupon
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (couponInput.toUpperCase() === 'PRIMEIRAENTREGA') {
      setAppliedCoupon('PRIMEIRAENTREGA');
    } else {
      setCouponError('Cupom inválido ou expirado.');
    }
  };

  // Final WhatsApp Checkout
  const handleSendOrderToWhatsApp = () => {
    let msg = `🍔 *NOVO PEDIDO BURGER HOUSE GOURMET* 🍔%0A%0A`;
    msg += `👤 *Cliente:* ${customerName || 'Cliente'}%0A`;
    msg += `📱 *WhatsApp:* ${customerPhone || 'Informado no WhatsApp'}%0A`;
    msg += `🛵 *Tipo de Entrega:* ${deliveryMethod === 'delivery' ? 'Entrega em Domicílio' : 'Retirada no Balcão'}%0A`;
    if (deliveryMethod === 'delivery' && deliveryAddress) {
      msg += `📍 *Endereço Completo:* ${deliveryAddress}%0A`;
    }
    msg += `💳 *Forma de Pagamento:* ${paymentMethod.toUpperCase()}%0A%0A`;
    msg += `*ITENS DO PEDIDO:*%0A`;

    Object.entries(cart).forEach(([key, item]) => {
      const baseId = key.split('_')[0];
      const menuItem = MENU_DATA.find((m) => m.id === baseId);
      if (menuItem) {
        msg += `▪️ *${item.qty}x ${menuItem.name}*%0A`;
        if (item.doneness) msg += `   - Ponto: ${item.doneness}%0A`;
        if (item.extras && item.extras.length > 0) {
          const extraNames = item.extras.map(eId => EXTRA_OPTIONS.find(o => o.id === eId)?.name).filter(Boolean);
          msg += `   - Adicionais: ${extraNames.join(', ')}%0A`;
        }
        if (item.obs) msg += `   - Obs: ${item.obs}%0A`;
      }
    });

    msg += `%0A--------------------------------%0A`;
    msg += `*Subtotal:* R$ ${subtotal.toFixed(2)}%0A`;
    if (deliveryMethod === 'delivery') {
      msg += `*Taxa de Entrega:* ${deliveryFee === 0 ? 'GRÁTIS' : `R$ ${deliveryFee.toFixed(2)}`}%0A`;
    }
    if (discountAmount > 0) {
      msg += `*Desconto (Cupom):* -R$ ${discountAmount.toFixed(2)}%0A`;
    }
    msg += `*💰 VALOR TOTAL: R$ ${grandTotal.toFixed(2)}*%0A`;
    msg += `--------------------------------%0A%0A`;
    msg += `Por favor, confirmem o recebimento do pedido e o tempo estimado de entrega! 🙏`;

    window.open(`https://wa.me/5517992537024?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500 selection:text-black pb-32">
      {/* 🚀 1. STICKY TOP SELLER CONVERSION BAR (Para quem quer comprar o site) 🚀 */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-xl transition-all">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
          <span className="hidden lg:inline text-amber-100 font-mono">• Modelo Completo de Sistema para Hamburgueria & Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-amber-100 text-[11px]">Gostou deste modelo para sua empresa?</span>
          <a
            href="https://wa.me/5517992537024?text=Olá!%20Vi%20a%20demonstração%20completa%20da%20Hamburgueria%20e%20gostaria%20de%20um%20site%20nesse%20nível%20para%20meu%20restaurante!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-neutral-950 px-4 py-1.5 rounded-xl font-black hover:bg-amber-100 transition-all hover:scale-105 flex items-center gap-1.5 shadow-md text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Quero um Site Assim (R$ 350)</span>
          </a>
        </div>
      </div>

      {/* 🍔 2. RESTAURANT HEADER NAVBAR 🍔 */}
      <nav className="border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md sticky top-10 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-black flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/20">
              <Flame className="w-6 h-6 fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight text-white">BURGER HOUSE</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black tracking-wider uppercase border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ABERTO AGORA
                </span>
              </div>
              <span className="text-[11px] text-neutral-400">Gourmet & Delivery Express</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Ver Carrinho</span>
              {cartItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-black text-amber-400 text-[10px] flex items-center justify-center font-black">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ⏰ 3. FLASH PROMO COUNTDOWN BANNER ⏰ */}
      <div className="bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 text-white py-2 px-4 text-center text-xs font-bold shadow-inner">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Flame className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span>OFERTA RELÂMPAGO DO DIA: Combo Casal Smash com <strong>R$ 25 de Desconto</strong>!</span>
          <span className="bg-black/40 px-2 py-0.5 rounded-md font-mono text-yellow-300">
            Termina em {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* 🌟 4. HERO RESTAURANT SECTION 🌟 */}
      <header className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 py-12 sm:py-16 px-4 sm:px-6 text-center border-b border-neutral-800 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Eleito o Melhor Hambúrguer Artesanal da Região 🏆</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white">
            HAMBÚRGUERES NA BRASA & <span className="text-amber-500">DELIVERY RÁPIDO</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Carnes nobres 100% Angus assadas no fogo a carvão, queijos especiais fundidos, pães artesanais selados na manteiga e molhos autorais inconfundíveis.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto text-xs text-neutral-300">
            <div className="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">4.9 ★ (1.200+ avaliações)</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Entrega em 30-45 min</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-amber-500" />
              <span>Frete Grátis &gt; R$ 60</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Angus Certificado</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🔍 5. SEARCH & CATEGORY FILTER BAR 🔍 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-4 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto sm:mx-0">
          <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nome, bacon, queijo, shimeji..."
            className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-xs text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 🍔 6. PRODUCT CARDS GRID 🍔 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/50 rounded-3xl border border-neutral-800 space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">Nenhum prato encontrado com esse termo</h3>
            <p className="text-xs text-neutral-400">Tente buscar por "Smash", "Bacon", "Combo" ou limpe a busca.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('todos'); }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
            >
              Ver Todo o Cardápio
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-neutral-900/90 rounded-3xl p-5 border border-neutral-800 flex flex-col justify-between hover:border-amber-500/50 transition-all group shadow-xl hover:shadow-amber-500/5"
                >
                  <div className="space-y-4">
                    {/* Item Image with Badges */}
                    <div className="w-full h-48 rounded-2xl overflow-hidden relative bg-neutral-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.badge && (
                        <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-lg bg-amber-500 text-black text-[9px] font-black uppercase shadow-lg">
                          {item.badge}
                        </span>
                      )}
                      {item.prepTime && (
                        <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{item.prepTime}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Reviews */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.categoryLabel}</span>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-300 font-bold">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{item.rating.toFixed(1)}</span>
                          <span className="text-neutral-500">({item.reviewCount})</span>
                        </div>
                      </div>

                      <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-xs text-neutral-400 line-clamp-3 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Ingredient tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.ingredients.slice(0, 3).map((ing, idx) => (
                        <span key={idx} className="text-[10px] bg-neutral-800/80 text-neutral-300 px-2 py-0.5 rounded-md">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <div>
                      {item.originalPrice && (
                        <span className="text-[11px] text-neutral-500 line-through block leading-none mb-0.5">
                          R$ {item.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-xl font-black text-amber-400">
                        R$ {item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(item)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs transition-all hover:scale-105 shadow-md shadow-amber-500/20"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{item.customizable ? 'Montar / Pedir' : 'Adicionar'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 🌟 7. REVIEWS & SOCIAL PROOF SECTION 🌟 */}
        <section className="pt-12 border-t border-neutral-800 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">Clientes Satisfeitos</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Avaliações 5 Estrelas no Google</h2>
            <p className="text-xs text-neutral-400">Mais de 1.200 clientes atendidos e aprovados todos os meses.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800 space-y-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-amber-500/40" />
                  <div>
                    <h4 className="font-bold text-white text-xs">{rev.name}</h4>
                    <span className="text-[10px] text-neutral-500">{rev.date}</span>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(rev.stars)}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed italic">"{rev.comment}"</p>
                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-emerald-400 font-bold">
                  <span>{rev.badge}</span>
                  <ThumbsUp className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ❓ 8. FAQ ACCORDION SECTION ❓ */}
        <section className="pt-8 border-t border-neutral-800 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">Dúvidas Frequentes</span>
            <h2 className="text-2xl font-black text-white">Como Funciona o Delivery?</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="bg-neutral-900 rounded-2xl p-5 border border-neutral-800 space-y-1.5">
                <h4 className="font-bold text-white text-xs flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 🛠️ 9. BURGER CUSTOMIZATION MODAL 🛠️ */}
      {customizingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-neutral-900 rounded-3xl max-w-lg w-full p-6 border border-neutral-700 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-black text-white">Personalizar {customizingItem.name}</h3>
              </div>
              <button
                onClick={() => setCustomizingItem(null)}
                className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Ponto da Carne */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-300 block">1. Escolha o Ponto da Carne:</label>
              <div className="space-y-1.5">
                {DONENESS_OPTIONS.map((doneness, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDoneness(doneness)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all ${
                      selectedDoneness === doneness
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-300'
                    }`}
                  >
                    <span>{doneness}</span>
                    {selectedDoneness === doneness && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Adicionais Extras */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-300 block">2. Turbinar com Adicionais Extras:</label>
              <div className="space-y-1.5">
                {EXTRA_OPTIONS.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => {
                        setSelectedExtras(prev =>
                          isSelected ? prev.filter(id => id !== extra.id) : [...prev, extra.id]
                        );
                      }}
                      className={`w-full p-3 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-300'
                      }`}
                    >
                      <span>{extra.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400">+R$ {extra.price.toFixed(2)}</span>
                        {isSelected ? <CheckCircle2 className="w-4 h-4 text-amber-400" /> : <div className="w-4 h-4 rounded-full border border-neutral-700" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Observações */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-300 block">3. Alguma Observação? (Opcional)</label>
              <input
                type="text"
                value={itemObservation}
                onChange={(e) => setItemObservation(e.target.value)}
                placeholder="Ex: Tirar a cebola, maionese à parte..."
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white outline-none focus:border-amber-500"
              />
            </div>

            {/* Modal Bottom Buttons */}
            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-neutral-400 block">Preço Final:</span>
                <span className="text-lg font-black text-amber-400">
                  R$ {(customizingItem.price + selectedExtras.reduce((tot, eId) => tot + (EXTRA_OPTIONS.find(o => o.id === eId)?.price || 0), 0)).toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleConfirmCustomization}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs transition-all hover:scale-105 flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Check className="w-4 h-4" />
                <span>Adicionar ao Pedido</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🛒 10. COMPLETE CHECKOUT DRAWER / MODAL 🛒 */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-md p-0 sm:p-4 animate-in fade-in">
          <div className="bg-neutral-900 w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl p-6 border border-neutral-700 shadow-2xl max-h-[92vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-black text-white">Seu Pedido ({cartItemCount} itens)</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            {cartItemCount === 0 ? (
              <div className="text-center py-10 space-y-3">
                <ShoppingBag className="w-12 h-12 text-neutral-600 mx-auto" />
                <p className="text-xs text-neutral-400 font-bold">Seu carrinho ainda está vazio</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-black"
                >
                  Ver Cardápio
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3 divide-y divide-neutral-800 max-h-56 overflow-y-auto pr-1">
                  {Object.entries(cart).map(([key, item]) => {
                    const baseId = key.split('_')[0];
                    const menuItem = MENU_DATA.find((m) => m.id === baseId);
                    if (!menuItem) return null;

                    let singlePrice = menuItem.price;
                    if (item.extras) {
                      item.extras.forEach((eId) => {
                        const opt = EXTRA_OPTIONS.find((o) => o.id === eId);
                        if (opt) singlePrice += opt.price;
                      });
                    }

                    return (
                      <div key={key} className="pt-3 first:pt-0 flex items-start justify-between gap-3">
                        <div className="space-y-0.5 flex-1">
                          <h4 className="font-black text-white text-xs">{menuItem.name}</h4>
                          {item.doneness && <p className="text-[10px] text-amber-400">Ponto: {item.doneness}</p>}
                          {item.extras && item.extras.length > 0 && (
                            <p className="text-[10px] text-neutral-400">
                              + {item.extras.map(eId => EXTRA_OPTIONS.find(o => o.id === eId)?.name).join(', ')}
                            </p>
                          )}
                          {item.obs && <p className="text-[10px] text-neutral-500 italic">Obs: "{item.obs}"</p>}
                          <span className="text-xs font-black text-amber-400 block pt-0.5">
                            R$ {(singlePrice * item.qty).toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 bg-neutral-800 px-2.5 py-1 rounded-xl border border-neutral-700 shrink-0">
                          <button
                            onClick={() => handleUpdateCartQty(key, -1)}
                            className="text-neutral-400 hover:text-white p-0.5"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-black text-amber-400">{item.qty}</span>
                          <button
                            onClick={() => handleUpdateCartQty(key, 1)}
                            className="text-neutral-400 hover:text-white p-0.5"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cupom de Desconto */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Cupom: PRIMEIRAENTREGA"
                    className="flex-1 px-3.5 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-xs uppercase font-bold text-white outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs rounded-xl"
                  >
                    Aplicar
                  </button>
                </form>
                {couponError && <p className="text-[10px] text-red-400 font-bold -mt-4">{couponError}</p>}
                {appliedCoupon && (
                  <p className="text-[10px] text-emerald-400 font-bold -mt-4 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Cupom {appliedCoupon} aplicado com sucesso!</span>
                  </p>
                )}

                {/* Tipo de Entrega & Endereço */}
                <div className="space-y-3 pt-3 border-t border-neutral-800">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                        deliveryMethod === 'delivery'
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Entrega Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('retirada')}
                      className={`p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                        deliveryMethod === 'retirada'
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Retirar no Balcão</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Seu Nome Completo *"
                      className="px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white outline-none focus:border-amber-500"
                    />
                    <input
                      type="text"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Seu WhatsApp *"
                      className="px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white outline-none focus:border-amber-500"
                    />
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <input
                      type="text"
                      required
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Endereço: Rua, número, complemento e bairro *"
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white outline-none focus:border-amber-500"
                    />
                  )}
                </div>

                {/* Forma de Pagamento */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-[11px] font-bold text-neutral-400 block">Forma de Pagamento:</label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-2 rounded-xl font-bold border transition-all ${
                        paymentMethod === 'pix' ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      ⚡ PIX
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cartao')}
                      className={`p-2 rounded-xl font-bold border transition-all ${
                        paymentMethod === 'cartao' ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      💳 Cartão
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('dinheiro')}
                      className={`p-2 rounded-xl font-bold border transition-all ${
                        paymentMethod === 'dinheiro' ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      💵 Dinheiro
                    </button>
                  </div>
                </div>

                {/* Totals Summary */}
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal:</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  {deliveryMethod === 'delivery' && (
                    <div className="flex justify-between text-neutral-400">
                      <span>Taxa de Entrega:</span>
                      <span>{deliveryFee === 0 ? 'GRÁTIS (Acima de R$ 60)' : `R$ ${deliveryFee.toFixed(2)}`}</span>
                    </div>
                  )}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Desconto Cupom:</span>
                      <span>-R$ {discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-neutral-800">
                    <span>Total a Pagar:</span>
                    <span className="text-amber-400">R$ {grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Final Button */}
                <button
                  type="button"
                  onClick={handleSendOrderToWhatsApp}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-slate-950" />
                  <span>Enviar Pedido no WhatsApp ({grandTotal.toFixed(2)})</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* 📱 11. FLOATING BOTTOM BAR (Quando houver itens no carrinho) 📱 */}
      {cartItemCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-4 right-4 max-w-lg mx-auto z-40 animate-in slide-in-from-bottom-5">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 font-black transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black text-amber-400 flex items-center justify-center text-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs text-neutral-900 block leading-tight">
                  {cartItemCount} {cartItemCount === 1 ? 'item no pedido' : 'itens no pedido'}
                </span>
                <span className="text-lg font-black">R$ {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs bg-black text-white px-4 py-2.5 rounded-xl">
              <span>Finalizar Pedido</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
