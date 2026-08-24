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
    description: 'Ideal para testar a ferramenta e fechar suas primeiras propostas.',
    monthlyPrice: 0,
    annualPrice: 0,
    maxProposals: 3,
    features: [
      'Até 3 propostas comerciais ativas',
      'Assinatura digital na tela do cliente',
      'Acesso aos 4 modelos de propostas',
      'Compartilhamento via link seguro',
      'Download em PDF',
      'Marca d\'água SignFlow no rodapé',
    ],
    ctaText: 'Plano Gratuito',
  },
  {
    id: 'starter',
    name: 'Iniciante Starter',
    badge: 'ECONÔMICO ⚡',
    description: 'Para autônomos e freelancers com volume moderado de orçamentos.',
    monthlyPrice: 29,
    annualPrice: 23,
    maxProposals: 10,
    features: [
      'Até 10 propostas comerciais por mês',
      'Assinatura digital válida juridicamente',
      'Envio em 1-Clique no WhatsApp',
      'Exportação em PDF sem limites',
      'Sem marca d\'água nas propostas',
      'Suporte via e-mail',
    ],
    ctaText: 'Assinar Starter (R$ 29)',
    checkoutUrl: CHECKOUT_LINKS.starter,
  },
  {
    id: 'pro',
    name: 'Profissional Pro',
    badge: 'MAIS POPULAR ⭐',
    popular: true,
    description: 'Para quem quer fechar contratos semanais sem nenhum limite de propostas.',
    monthlyPrice: 49,
    annualPrice: 39,
    maxProposals: 'unlimited',
    features: [
      'Propostas e contratos ILIMITADOS',
      'Assinaturas digitais com validade jurídica',
      'Sem marca d\'água (100% sua marca)',
      'Envio 1-Clique no WhatsApp',
      'Tracking de visualizações em tempo real',
      'Relatórios e métricas de faturamento',
      'Suporte prioritário via WhatsApp',
    ],
    ctaText: 'Assinar Plano Pro (R$ 49)',
    checkoutUrl: CHECKOUT_LINKS.pro,
  },
  {
    id: 'agency',
    name: 'Agência & Equipe',
    badge: 'ESCALA RÁPIDA 🚀',
    description: 'Para agências e empresas com múltiplos vendedores e marcas.',
    monthlyPrice: 119,
    annualPrice: 99,
    maxProposals: 'unlimited',
    features: [
      'Tudo do Plano Pro incluído',
      'Múltiplos membros de equipe (até 5)',
      'Propostas simultâneas ilimitadas',
      'Domínio próprio personalizado',
      'Exportação de relatórios contábeis',
      'Onboarding VIP individual',
    ],
    ctaText: 'Assinar Agência (R$ 119)',
    checkoutUrl: CHECKOUT_LINKS.agency,
  }
];

export const LIFETIME_PLAN = {
  id: 'lifetime' as const,
  name: 'Plano Vitalício Founder',
  badge: 'OFERTA DE LANÇAMENTO 🔥',
  description: 'Pague UMA ÚNICA VEZ e tenha acesso eterno ao Plano Pro sem mensalidades.',
  oneTimePrice: 297,
  originalPrice: 588,
  installments: 'ou 12x de R$ 29,70',
  features: [
    'Acesso VITALÍCIO ao SignFlow Pro',
    'Zero mensalidades para sempre',
    'Propostas e contratos ilimitados',
    'Todas as atualizações futuras inclusas',
    'Selo exclusivo de Membro Fundador',
    'Suporte prioritário vitalício',
  ],
  ctaText: 'Garantir Acesso Vitalício (R$ 297)',
  checkoutUrl: CHECKOUT_LINKS.lifetime,
};
