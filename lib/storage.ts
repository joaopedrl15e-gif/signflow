import fs from 'fs';
import path from 'path';
import os from 'os';
import { Proposal, CompanySettings, User, PlanTier } from './types';

// In serverless environments like Vercel, process.cwd() is read-only.
const IS_VERCEL = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';
const DATA_DIR = IS_VERCEL ? os.tmpdir() : path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'signflow_db.json');

interface DatabaseSchema {
  users: User[];
  settings: Record<string, CompanySettings>;
  proposals: Proposal[];
}

const DEMO_USER_ID = 'usr_demo_1';

const DEFAULT_DEMO_USER: User = {
  id: DEMO_USER_ID,
  name: 'Studio Nova (Demo)',
  email: 'demo@studionova.com.br',
  passwordHash: '123456',
  companyName: 'Studio Nova Digital',
  phone: '(11) 99876-5432',
  document: '42.123.456/0001-89',
  plan: 'free',
  planCycle: 'monthly',
  createdAt: new Date().toISOString(),
};

const DEFAULT_DEMO_SETTINGS: CompanySettings = {
  userId: DEMO_USER_ID,
  name: 'Studio Nova Digital',
  tagline: 'Soluções Digitais & Estratégia de Alto Impacto',
  email: 'contato@studionova.com.br',
  phone: '(11) 99876-5432',
  document: '42.123.456/0001-89',
  website: 'https://studionova.com.br',
  primaryColor: '#4f46e5',
  pixKey: '42123456000189',
  bankDetails: 'Banco Inter (077) - Ag: 0001 - Conta: 1234567-8',
  plan: 'free',
  planCycle: 'monthly',
};

const SEED_PROPOSALS: Proposal[] = [
  {
    id: 'prop-1',
    userId: DEMO_USER_ID,
    code: 'PROP-2026-001',
    title: 'Redesign do E-commerce & Otimização Mobile',
    introduction: 'Apresentamos a proposta para renovação da experiência digital da sua loja, visando aumentar a taxa de conversão e velocidade no celular.',
    status: 'accepted',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    validUntil: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    company: DEFAULT_DEMO_SETTINGS,
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
    userId: DEMO_USER_ID,
    code: 'PROP-2026-002',
    title: 'Gestão de Tráfego Pago & Geração de Leads B2B',
    introduction: 'Estratégia focada na captação contínua de clientes qualificados através de anúncios no Meta Ads e Google Ads.',
    status: 'viewed',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    validUntil: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    company: DEFAULT_DEMO_SETTINGS,
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
  }
];

let memoryDb: DatabaseSchema = {
  users: [DEFAULT_DEMO_USER],
  settings: {
    [DEMO_USER_ID]: DEFAULT_DEMO_SETTINGS,
  },
  proposals: SEED_PROPOSALS,
};

function ensureDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initialData: DatabaseSchema = {
        users: [DEFAULT_DEMO_USER],
        settings: {
          [DEMO_USER_ID]: DEFAULT_DEMO_SETTINGS,
        },
        proposals: SEED_PROPOSALS,
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
      memoryDb = initialData;
      return initialData;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed.users)) parsed.users = [DEFAULT_DEMO_USER];
    if (!parsed.settings || typeof parsed.settings !== 'object') {
      parsed.settings = { [DEMO_USER_ID]: DEFAULT_DEMO_SETTINGS };
    }
    memoryDb = parsed;
    return parsed;
  } catch (error) {
    return memoryDb;
  }
}

function saveDb(data: DatabaseSchema) {
  memoryDb = data;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {}
}

export const db = {
  findUserByEmail(email: string): User | null {
    const data = ensureDb();
    if (!email) return null;
    return data.users.find(u => u.email.toLowerCase() === email.toLowerCase().trim()) || null;
  },

  findUserById(id: string): User | null {
    const data = ensureDb();
    if (!id) return null;
    return data.users.find(u => u.id === id) || null;
  },

  createUser(userData: { name: string; email: string; passwordHash: string; companyName: string; phone?: string }): User {
    const data = ensureDb();
    const id = `usr_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const newUser: User = {
      id,
      name: userData.name,
      email: userData.email.toLowerCase().trim(),
      passwordHash: userData.passwordHash,
      companyName: userData.companyName || userData.name,
      phone: userData.phone || '',
      plan: 'free',
      planCycle: 'monthly',
      createdAt: new Date().toISOString(),
    };

    data.users.push(newUser);

    // Initial clean company settings for this new user
    data.settings[id] = {
      userId: id,
      name: userData.companyName || userData.name,
      email: userData.email,
      phone: userData.phone || '',
      document: '',
      tagline: 'Propostas Comerciais & Serviços',
      primaryColor: '#16a34a',
      plan: 'free',
      planCycle: 'monthly',
    };

    saveDb(data);
    return newUser;
  },

  getSettings(userId: string): CompanySettings {
    const data = ensureDb();
    if (data.settings && data.settings[userId]) {
      return data.settings[userId];
    }
    // Return empty default for new users (NEVER default demo user data)
    const user = data.users.find(u => u.id === userId);
    const newSettings: CompanySettings = {
      userId,
      name: user?.companyName || user?.name || 'Minha Empresa',
      email: user?.email || '',
      phone: user?.phone || '',
      document: '',
      tagline: 'Propostas Comerciais',
      primaryColor: '#16a34a',
      plan: user?.plan || 'free',
      planCycle: user?.planCycle || 'monthly',
    };
    return newSettings;
  },

  updateSettings(userId: string, updates: Partial<CompanySettings>): CompanySettings {
    const data = ensureDb();
    const current = this.getSettings(userId);
    data.settings[userId] = { ...current, ...updates, userId };
    saveDb(data);
    return data.settings[userId];
  },

  setPlan(userId: string, plan: PlanTier, cycle: 'monthly' | 'annual' = 'monthly'): CompanySettings {
    const data = ensureDb();
    const current = this.getSettings(userId);
    data.settings[userId] = { ...current, plan, planCycle: cycle, userId };

    const user = data.users.find(u => u.id === userId);
    if (user) {
      user.plan = plan;
      user.planCycle = cycle;
    }

    saveDb(data);
    return data.settings[userId];
  },

  // STRICT USER ISOLATION: Only returns proposals belonging to this userId!
  getProposals(userId: string): Proposal[] {
    const data = ensureDb();
    if (!userId) return [];
    // Strict match only:
    return (data.proposals || []).filter(p => p.userId === userId);
  },

  getProposalById(id: string): Proposal | null {
    const data = ensureDb();
    return data.proposals.find(p => p.id === id || p.code === id) || null;
  },

  createProposal(proposal: Omit<Proposal, 'id' | 'code' | 'createdAt' | 'updatedAt' | 'viewCount'>, userId: string): Proposal {
    const data = ensureDb();
    const userProposals = (data.proposals || []).filter(p => p.userId === userId);
    const count = userProposals.length + 1;
    const year = new Date().getFullYear();
    const code = `PROP-${year}-${String(count).padStart(3, '0')}`;
    const id = `prop-${Date.now()}`;

    const newProposal: Proposal = {
      ...proposal,
      id,
      userId,
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
