import fs from 'fs';
import path from 'path';
import { Proposal, CompanySettings } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

interface DatabaseSchema {
  settings: CompanySettings;
  proposals: Proposal[];
}

const DEFAULT_SETTINGS: CompanySettings = {
  name: 'Studio Nova Digital',
  tagline: 'Soluções Digitais & Estratégia de Alto Impacto',
  email: 'contato@studionova.com.br',
  phone: '(11) 99876-5432',
  document: '42.123.456/0001-89',
  website: 'https://studionova.com.br',
  primaryColor: '#4f46e5',
  pixKey: '42123456000189',
  bankDetails: 'Banco Inter (077) - Ag: 0001 - Conta: 1234567-8',
};

const SEED_PROPOSALS: Proposal[] = [
  {
    id: 'prop-1',
    code: 'PROP-2026-001',
    title: 'Redesign do E-commerce & Otimização Mobile',
    introduction: 'Apresentamos a proposta para renovação da experiência digital da sua loja, visando aumentar a taxa de conversão e velocidade no celular.',
    status: 'accepted',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    validUntil: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    company: DEFAULT_SETTINGS,
    client: {
      name: 'Carlos Eduardo Silveira',
      companyName: 'Silveira Modas & Calçados',
      email: 'carlos@silveiramodas.com.br',
      phone: '(11) 98765-4321',
      document: '28.910.112/0001-44',
      address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
    },
    category: 'Desenvolvimento Web',
    deliverables: [
      'Novo layout moderno e intuitivo no Figma',
      'Codificação da vitrine e página de produto 100% responsiva',
      'Otimização da velocidade de carregamento (PageSpeed 90+)',
      'Integração com Mercado Pago e cálculo de frete Melhor Envio',
    ],
    milestones: [
      { id: 'm1', title: 'Aprovação do Protótipo Visual', duration: '7 dias' },
      { id: 'm2', title: 'Desenvolvimento e Homologação', duration: '14 dias' },
      { id: 'm3', title: 'Lançamento e Testes Finais', duration: '3 dias' },
    ],
    items: [
      { id: 'i1', title: 'UI/UX Design do Novo E-commerce', quantity: 1, unitPrice: 2200, total: 2200 },
      { id: 'i2', title: 'Desenvolvimento Front-end & Responsividade', quantity: 1, unitPrice: 3800, total: 3800 },
      { id: 'i3', title: 'Otimização de Performance & SEO', quantity: 1, unitPrice: 800, total: 800 },
    ],
    discountPercentage: 5,
    discountAmount: 340,
    subtotal: 6800,
    total: 6460,
    paymentTerms: '50% no início e 50% na entrega final via Pix ou transferência.',
    notesAndConditions: 'Proposta com validade de 15 dias. Inclui suporte pós-lançamento por 30 dias.',
    signature: {
      signerName: 'Carlos Eduardo Silveira',
      signerEmail: 'carlos@silveiramodas.com.br',
      signerDocument: '28.910.112/0001-44',
      signatureImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100"><text x="20" y="60" font-family="Brush Script MT, cursive" font-size="32" fill="%231e3a8a">Carlos E. Silveira</text></svg>',
      signedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      ipAddress: '177.135.24.110',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X)',
    },
    viewCount: 6,
    lastViewedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prop-2',
    code: 'PROP-2026-002',
    title: 'Gestão de Tráfego Pago & Geração de Leads B2B',
    introduction: 'Estratégia focada na captação contínua de clientes qualificados através de anúncios no Meta Ads e Google Ads.',
    status: 'viewed',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    validUntil: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    company: DEFAULT_SETTINGS,
    client: {
      name: 'Dra. Mariana Albuquerque',
      companyName: 'Clínica OdontoPrime',
      email: 'mariana@odontoprime.med.br',
      phone: '(21) 97654-3210',
      document: '14.567.890/0001-22',
      address: 'Rua Visconde de Pirajá, 550 - Ipanema, Rio de Janeiro - RJ',
    },
    category: 'Marketing Digital',
    deliverables: [
      'Configuração do Gerenciador de Anúncios e API de Conversões',
      'Criação de criativos de alta conversão (imagens e vídeos)',
      'Gestão diária de campanhas e testes A/B',
      'Relatório semanal com custo por lead (CPL)',
    ],
    milestones: [
      { id: 'm1', title: 'Setup e Configurações de Rastreamento', duration: '3 dias' },
      { id: 'm2', title: 'Lançamento das Primeiras Campanhas', duration: '4 dias' },
      { id: 'm3', title: 'Otimização Contínua e Escala', duration: 'Mensal' },
    ],
    items: [
      { id: 'i1', title: 'Setup Inicial & Estruturação Técnica', quantity: 1, unitPrice: 750, total: 750 },
      { id: 'i2', title: 'Fee Mensal de Gestão & Otimização', quantity: 1, unitPrice: 2000, total: 2000 },
    ],
    subtotal: 2750,
    total: 2750,
    paymentTerms: 'Cobrança mensal todo dia 10 via boleto bancário ou Pix.',
    notesAndConditions: 'O valor do investimento em anúncios é pago diretamente pelo cliente às plataformas.',
    viewCount: 3,
    lastViewedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prop-3',
    code: 'PROP-2026-003',
    title: 'Consultoria de Automação de Processos & CRM',
    introduction: 'Mapeamento e automação de rotinas de atendimento e vendas utilizando integrações inteligentes.',
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    validUntil: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
    company: DEFAULT_SETTINGS,
    client: {
      name: 'Roberto Mendes',
      companyName: 'Mendes Contabilidade & Finanças',
      email: 'roberto@mendescontab.com.br',
      phone: '(31) 99123-4567',
      document: '09.876.543/0001-11',
    },
    category: 'Consultoria',
    deliverables: [
      'Mapeamento completo do funil de vendas e atendimento',
      'Configuração do CRM com etapas de qualificação de leads',
      'Integração com WhatsApp e envio automático de lembretes',
      'Treinamento da equipe de vendas',
    ],
    milestones: [
      { id: 'm1', title: 'Diagnóstico e Levantamento', duration: '5 dias' },
      { id: 'm2', title: 'Implementação do CRM e Automações', duration: '10 dias' },
      { id: 'm3', title: 'Treinamento e Entrega', duration: '3 dias' },
    ],
    items: [
      { id: 'i1', title: 'Consultoria Estratégica & Mapeamento', quantity: 1, unitPrice: 1800, total: 1800 },
      { id: 'i2', title: 'Desenvolvimento das Automações e CRM', quantity: 1, unitPrice: 2700, total: 2700 },
    ],
    subtotal: 4500,
    total: 4500,
    paymentTerms: '3x de R$ 1.500 no Pix ou cartão.',
    notesAndConditions: 'Válido por 10 dias.',
    viewCount: 0,
  }
];

function ensureDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initialData: DatabaseSchema = {
        settings: DEFAULT_SETTINGS,
        proposals: SEED_PROPOSALS,
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading DB:', error);
    return {
      settings: DEFAULT_SETTINGS,
      proposals: SEED_PROPOSALS,
    };
  }
}

function saveDb(data: DatabaseSchema) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving DB:', error);
  }
}

export const db = {
  getSettings(): CompanySettings {
    const data = ensureDb();
    return data.settings || DEFAULT_SETTINGS;
  },

  updateSettings(settings: Partial<CompanySettings>): CompanySettings {
    const data = ensureDb();
    data.settings = { ...data.settings, ...settings };
    saveDb(data);
    return data.settings;
  },

  getProposals(): Proposal[] {
    const data = ensureDb();
    return data.proposals || [];
  },

  getProposalById(id: string): Proposal | null {
    const data = ensureDb();
    return data.proposals.find(p => p.id === id || p.code === id) || null;
  },

  createProposal(proposal: Omit<Proposal, 'id' | 'code' | 'createdAt' | 'updatedAt' | 'viewCount'>): Proposal {
    const data = ensureDb();
    const count = data.proposals.length + 1;
    const year = new Date().getFullYear();
    const code = `PROP-${year}-${String(count).padStart(3, '0')}`;
    const id = `prop-${Date.now()}`;

    const newProposal: Proposal = {
      ...proposal,
      id,
      code,
      viewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.proposals.unshift(newProposal);
    saveDb(data);
    return newProposal;
  },

  updateProposal(id: string, updates: Partial<Proposal>): Proposal | null {
    const data = ensureDb();
    const index = data.proposals.findIndex(p => p.id === id);
    if (index === -1) return null;

    data.proposals[index] = {
      ...data.proposals[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    saveDb(data);
    return data.proposals[index];
  },

  deleteProposal(id: string): boolean {
    const data = ensureDb();
    const initialLen = data.proposals.length;
    data.proposals = data.proposals.filter(p => p.id !== id);
    if (data.proposals.length !== initialLen) {
      saveDb(data);
      return true;
    }
    return false;
  },

  registerView(id: string): Proposal | null {
    const data = ensureDb();
    const proposal = data.proposals.find(p => p.id === id || p.code === id);
    if (!proposal) return null;

    proposal.viewCount = (proposal.viewCount || 0) + 1;
    proposal.lastViewedAt = new Date().toISOString();
    
    // Automatically transition from 'draft' or 'sent' to 'viewed' if not yet accepted/declined
    if (proposal.status === 'draft' || proposal.status === 'sent') {
      proposal.status = 'viewed';
    }

    saveDb(data);
    return proposal;
  },

  signProposal(id: string, signature: Proposal['signature']): Proposal | null {
    const data = ensureDb();
    const proposal = data.proposals.find(p => p.id === id || p.code === id);
    if (!proposal) return null;

    proposal.status = 'accepted';
    proposal.signature = signature;
    proposal.updatedAt = new Date().toISOString();

    saveDb(data);
    return proposal;
  }
};
