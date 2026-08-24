export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: 'free' | 'pro' | 'agency';
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

export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_00wfZg3Pv1fh2Hw7eheEo00';

export const SAAS_PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Gratuito (Teste)',
    description: 'Ideal para você testar a ferramenta e fechar suas primeiras vendas.',
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
    ctaText: 'Plano Atual (Grátis)',
  },
  {
    id: 'pro',
    name: 'Profissional Pro',
    badge: 'MAIS POPULAR ⭐',
    popular: true,
    description: 'Para freelancers, consultores e autônomos que querem fechar contratos toda semana.',
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
    ctaText: 'Assinar Plano Pro',
    stripeUrl: STRIPE_CHECKOUT_URL,
  },
  {
    id: 'agency',
    name: 'Agência & Equipe',
    badge: 'ESCALA RÁPIDA 🚀',
    description: 'Para agências, produtoras e empresas com múltiplos vendedores.',
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
    ctaText: 'Assinar Plano Agência',
    stripeUrl: STRIPE_CHECKOUT_URL,
  }
];
