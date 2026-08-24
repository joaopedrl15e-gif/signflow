export type ProposalStatus = 'draft' | 'sent' | 'viewed' | 'accepted' | 'declined' | 'expired';

export type PlanTier = 'free' | 'pro' | 'agency';

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // Plain/SHA for demo or bcrypt
  companyName: string;
  phone?: string;
  document?: string;
  plan: PlanTier;
  planCycle?: 'monthly' | 'annual';
  createdAt: string;
}

export interface ProposalItem {
  id: string;
  title: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface ProposalMilestone {
  id: string;
  title: string;
  duration: string;
  description?: string;
}

export interface ProposalSignature {
  signerName: string;
  signerEmail: string;
  signerDocument: string;
  signatureImage: string;
  signedAt: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface ClientInfo {
  name: string;
  companyName?: string;
  email: string;
  phone: string;
  document?: string;
  address?: string;
}

export interface CompanySettings {
  userId?: string;
  name: string;
  tagline?: string;
  email: string;
  phone: string;
  document: string;
  logoUrl?: string;
  website?: string;
  primaryColor?: string;
  pixKey?: string;
  bankDetails?: string;
  plan?: PlanTier;
  planCycle?: 'monthly' | 'annual';
}

export interface Proposal {
  id: string;
  userId?: string; // Multi-tenant ownership
  code: string;
  title: string;
  introduction?: string;
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
  validUntil: string;
  
  // Parties
  company: CompanySettings;
  client: ClientInfo;

  // Scope & Content
  category?: string;
  deliverables: string[];
  milestones: ProposalMilestone[];
  items: ProposalItem[];
  
  // Financials
  discountPercentage?: number;
  discountAmount?: number;
  subtotal: number;
  total: number;
  
  // Terms & Payment
  paymentTerms: string;
  notesAndConditions?: string;
  
  // Signature info
  signature?: ProposalSignature;
  
  // Tracking
  viewCount: number;
  lastViewedAt?: string;
}

export interface ProposalTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  deliverables: string[];
  milestones: ProposalMilestone[];
  items: Omit<ProposalItem, 'id' | 'total'>[];
  paymentTerms: string;
  notesAndConditions: string;
}
