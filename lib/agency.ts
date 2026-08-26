export interface AgencyConfig {
  name: string;
  tagline: string;
  phone: string; // WhatsApp number
  formattedPhone: string;
  pixKey: string;
  deliveryTime: string;
}

export const AGENCY_CONFIG: AgencyConfig = {
  name: 'Apex Web Studio',
  tagline: 'Sites & Landing Pages de Alta Conversão em 24h',
  phone: '5517992537024', // WhatsApp Oficial do Usuário
  formattedPhone: '(17) 99253-7024',
  pixKey: 'contato@apexweb.com.br',
  deliveryTime: '24 a 48 horas',
};

export interface ServicePackage {
  id: string;
  title: string;
  badge?: string;
  popular?: boolean;
  price: number;
  installments?: string;
  description: string;
  features: string[];
  deliveryTime: string;
}

export const AGENCY_PACKAGES: ServicePackage[] = [
  {
    id: 'landing-page',
    title: 'Landing Page Express',
    badge: 'MAIS VENDIDO ⚡',
    popular: true,
    price: 350,
    installments: 'ou 2x de R$ 185 no Cartão',
    description: 'Página única focada 100% em vendas e atração de clientes no WhatsApp.',
    deliveryTime: 'Entregue em 24 horas',
    features: [
      'Design moderno exclusivo mobile-first',
      'Botão flutuante direto pro seu WhatsApp',
      'Seção de serviços/produtos e fotos',
      'Depoimentos de clientes e mapa de localização',
      'Otimização ultra-rápida no celular (Google)',
      'Hospedagem inclusa + Domínio configurado',
    ],
  },
  {
    id: 'cardapio-digital',
    title: 'Cardápio / Catálogo Digital',
    badge: 'PARA RESTAURANTES 🍔',
    price: 450,
    installments: 'ou 2x de R$ 235 no Cartão',
    description: 'Catálogo interativo com fotos e botão de enviar pedido pronto no WhatsApp.',
    deliveryTime: 'Entregue em 48 horas',
    features: [
      'Cardápio completo dividido por categorias',
      'Fotos apetitosas dos pratos e combos',
      'Carrinho de pedidos direto pro WhatsApp',
      'Calculadora automática de taxa de entrega',
      'Sem taxas mensais por pedido (100% seu)',
      'QR Code para colocar nas mesas e balcão',
    ],
  },
  {
    id: 'site-institucional',
    title: 'Site Institucional Completo',
    badge: 'AUTORIDADE MÁXIMA 🏢',
    price: 650,
    installments: 'ou 3x de R$ 230 no Cartão',
    description: 'Site corporativo multipáginas para empresas, clínicas e escritórios consolidados.',
    deliveryTime: 'Entregue em 3 a 4 dias',
    features: [
      'Até 5 páginas completas (Início, Sobre, Serviços, Galeria, Contato)',
      'Formulário inteligente com aviso no WhatsApp',
      'Integração com Google Maps e Google Meu Negócio',
      'Blog ou seção de notícias/artigos',
      'Painel para editar textos e fotos quando quiser',
      'Certificado de Segurança SSL Gratuito',
    ],
  },
];

export interface DemoShowcase {
  id: string;
  category: string;
  title: string;
  niche: string;
  description: string;
  href: string;
  badge: string;
  accentColor: string;
  icon: string;
}

export const DEMO_SHOWCASES: DemoShowcase[] = [
  {
    id: 'hamburgueria',
    category: 'Alimentação & Delivery',
    title: 'Burger House Gourmet',
    niche: 'Hamburguerias, Pizzarias & Restaurantes',
    description: 'Cardápio interativo com fotos em alta resolução e botão de pedir no WhatsApp.',
    href: '/demo/hamburgueria',
    badge: 'Cardápio Interativo 🍔',
    accentColor: 'from-amber-500 to-orange-600',
    icon: 'Flame',
  },
  {
    id: 'clinica',
    category: 'Saúde & Estética',
    title: 'Clínica Odonto & Estética VIP',
    niche: 'Dentistas, Clínicas Médicas & Harmonização',
    description: 'Página de alta autoridade com tratamentos, equipe médica e agendamento.',
    href: '/demo/clinica',
    badge: 'Agendamento Fácil 🦷',
    accentColor: 'from-cyan-500 to-blue-600',
    icon: 'ShieldCheck',
  },
  {
    id: 'barbearia',
    category: 'Beleza & Estilo',
    title: 'Barbearia Vintage Club',
    niche: 'Barbearias, Salões de Beleza & Tatuagem',
    description: 'Layout moderno com tabela de preços, fotos do espaço e horários de corte.',
    href: '/demo/barbearia',
    badge: 'Horários & Serviços 💈',
    accentColor: 'from-amber-600 to-yellow-500',
    icon: 'Scissors',
  },
  {
    id: 'advocacia',
    category: 'Direito & Consultoria',
    title: 'Silva & Associados Advocacia',
    niche: 'Advogados, Consultores & Contabilidades',
    description: 'Página executiva sóbria com áreas de atuação e botão de atendimento urgente.',
    href: '/demo/advocacia',
    badge: 'Autoridade & Contato ⚖️',
    accentColor: 'from-emerald-600 to-teal-600',
    icon: 'Briefcase',
  },
];
