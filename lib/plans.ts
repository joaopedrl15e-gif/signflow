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
  stripeUrl?: string;
}

export const STRIPE_LINKS = {
  starter: 'https://buy.stripe.com/test_14A14m2Lr4rt1Ds7eheEo04',
  pro: 'https://buy.stripe.com/test_00wfZg3Pv1fh2Hw7eheEo00',
  agency: 'https://buy.stripe.com/test_dRm7sK85L6zB4PEaqteEo03',
  lifetime: 'https://buy.stripe.com/test_3cI5kC71HbTV5TIaqteEo01',
};

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
    stripeUrl: STRIPE_LINKS.starter,
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
    stripeUrl: STRIPE_LINKS.pro,
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
    stripeUrl: STRIPE_LINKS.agency,
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
  stripeUrl: STRIPE_LINKS.lifetime,
};
