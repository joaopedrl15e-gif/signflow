export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: 'free' | 'starter' | 'pro' | 'agency' | 'lifetime';
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  maxProposals: number | 'unlimited';
  features: string[];
  ctaText: string;
  checkoutUrl?: string;
}

export const CHECKOUT_LINKS = {
  starter: 'https://pay.cakto.com.br/3583yzs_1061311', // Cakto R$ 29
  pro: 'https://pay.cakto.com.br/z4fwano_1061322',     // Cakto R$ 49
  agency: 'https://pay.cakto.com.br/u4r4dc6_1061327',  // Cakto R$ 119
  lifetime: 'https://pay.cakto.com.br/5nzfpk7_1061333', // Cakto R$ 297
};

export const STRIPE_LINKS = CHECKOUT_LINKS;

export const SAAS_PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Gratuito (Teste)',
    description: 'Ideal para testar a ferramenta e fechar suas primeiras propostas com rapidez.',
    monthlyPrice: 0,
    annualPrice: 0,
    maxProposals: 3,
    features: [
      'Até 3 propostas comerciais ativas',
      'Assinatura digital na tela (dedo ou mouse)',
      'Validade jurídica MP 2.200-2 / Brasil',
      'Acesso aos 4 modelos de alto fechamento',
      'Envio de link seguro no WhatsApp',
      'Download de propostas em PDF',
      'Marca d\'água SignFlow no rodapé',
    ],
    ctaText: 'Plano Gratuito',
  },
  {
    id: 'starter',
    name: 'Iniciante Starter',
    badge: 'ECONÔMICO ⚡',
    description: 'Para freelancers e autônomos que querem acelerar vendas com baixo investimento.',
    monthlyPrice: 29,
    annualPrice: 29,
    maxProposals: 10,
    features: [
      'Até 10 propostas comerciais por mês',
      '100% Sem marca d\'água (Sua marca no topo)',
      'Assinatura digital válida com IP e Data/Hora',
      'Envio inteligente em 1-Clique no WhatsApp',
      'Download de PDFs ilimitados em alta resolução',
      'Calculadora de orçamentos e descontos',
      'Chave Pix na proposta para receber entrada',
      'Suporte via e-mail e WhatsApp',
    ],
    ctaText: 'Assinar Starter (R$ 29)',
    checkoutUrl: CHECKOUT_LINKS.starter,
  },
  {
    id: 'pro',
    name: 'Profissional Pro',
    badge: 'MAIS VENDIDO ⭐',
    popular: true,
    description: 'Para profissionais e empresas que querem fechar contratos semanais sem limites.',
    monthlyPrice: 49,
    annualPrice: 49,
    maxProposals: 'unlimited',
    features: [
      'Propostas e contratos ILIMITADOS',
      'Assinaturas digitais jurídicas ilimitadas',
      '100% Sem marca d\'água com branding próprio',
      'Rastreamento em tempo real (Avisos de abertura)',
      'Chave Pix integrada para sinal de pagamento',
      'Simulador de parcelamento no cartão',
      'Calculadora de ROI automática para o cliente',
      'Modelos prontos de tecnologia, tráfego e design',
      'Suporte prioritário VIP via WhatsApp',
    ],
    ctaText: 'Assinar Plano Pro (R$ 49)',
    checkoutUrl: CHECKOUT_LINKS.pro,
  },
  {
    id: 'agency',
    name: 'Agência & Equipe',
    badge: 'ESCALA RÁPIDA 🚀',
    description: 'Para agências, produtoras e empresas com múltiplos vendedores e marcas.',
    monthlyPrice: 119,
    annualPrice: 119,
    maxProposals: 'unlimited',
    features: [
      'Tudo do Plano Pro 100% ILIMITADO',
      'Até 5 Usuários / Vendedores na equipe',
      'White-label total (Logotipo, cores e identidade)',
      'Domínio personalizado (propostas.suaempresa.com)',
      'Gestão centralizada de propostas e equipe',
      'Exportação de relatórios financeiros em Excel/CSV',
      'Termos de aceite e contratos customizáveis',
      'Gerente de conta e suporte dedicado VIP',
    ],
    ctaText: 'Assinar Agência (R$ 119)',
    checkoutUrl: CHECKOUT_LINKS.agency,
  }
];

export const LIFETIME_PLAN = {
  id: 'lifetime' as const,
  name: 'Plano Vitalício Founder',
  badge: 'VAGAS LIMITADAS 👑',
  description: 'Pague UMA ÚNICA VEZ e tenha acesso eterno a todas as ferramentas do Plano Pro.',
  oneTimePrice: 297,
  originalPrice: 588,
  installments: 'ou 12x no cartão de crédito',
  features: [
    'Acesso VITALÍCIO e ETERNO ao SignFlow Pro',
    'ZERO MENSALIDADES para sempre',
    'Propostas comerciais e contratos ilimitados',
    'Todas as ferramentas presentes e futuras de IA',
    'Chave Pix e formas de pagamento ilimitadas',
    'Selo exclusivo Founder Badge no seu painel',
    'Suporte prioritário vitalício direto no WhatsApp',
    'Garantia incondicional de 7 dias com reembolso Pix',
  ],
  ctaText: 'Garantir Acesso Vitalício (R$ 297)',
  checkoutUrl: CHECKOUT_LINKS.lifetime,
};
