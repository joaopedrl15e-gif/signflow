import { ProposalTemplate } from './types';

export const PROPOSAL_TEMPLATES: ProposalTemplate[] = [
  {
    id: 'template-web-dev',
    title: 'Criação de Website & Landing Page de Alta Conversão',
    category: 'Desenvolvimento Web',
    description: 'Ideal para desenvolvedores e agências entregarem sites modernos, responsivos e otimizados para SEO e vendas.',
    icon: 'Globe',
    deliverables: [
      'Design moderno exclusivo alinhado à identidade visual da marca',
      'Desenvolvimento 100% responsivo (otimizado para smartphones e desktop)',
      'Otimização técnica para carregamento ultra-rápido (Core Web Vitals)',
      'Integração com formulários, botão flutuante de WhatsApp e Pixel de rastreamento',
      'Configuração básica de SEO (títulos, meta-descrições e OpenGraph)',
      'Treinamento gravado para gestão e edição de conteúdo'
    ],
    milestones: [
      { id: 'm1', title: 'Alinhamento & Wireframe', duration: '5 dias úteis', description: 'Definição de estrutura e cópia inicial.' },
      { id: 'm2', title: 'Design Visual & Aprovação', duration: '7 dias úteis', description: 'Apresentação do layout no Figma/protótipo.' },
      { id: 'm3', title: 'Programação & Integrações', duration: '10 dias úteis', description: 'Construção do código e testes.' },
      { id: 'm4', title: 'Publicação & Go-Live', duration: '3 dias úteis', description: 'Configuração de domínio, SSL e entrega final.' }
    ],
    items: [
      {
        title: 'Design UI/UX & Protótipo Interativo',
        description: 'Criação visual de todas as seções da página com foco em experiência do usuário.',
        quantity: 1,
        unitPrice: 1200
      },
      {
        title: 'Desenvolvimento Front-End & Responsividade',
        description: 'Codificação completa em Next.js / Tailwind CSS com animações suaves e performance máxima.',
        quantity: 1,
        unitPrice: 2000
      },
      {
        title: 'Configurações de Domínio, Hospedagem e Tags de Analytics',
        description: 'Instalação de Google Analytics 4, Meta Pixel e tags de conversão.',
        quantity: 1,
        unitPrice: 450
      }
    ],
    paymentTerms: '50% de entrada no início do projeto e 50% na entrega e publicação do site (Pix ou Boleto Bancário).',
    notesAndConditions: 'Esta proposta tem validade de 10 dias. Alterações que fujam do escopo inicial acordado serão orçadas à parte mediante aprovação prévia.'
  },
  {
    id: 'template-trafego',
    title: 'Gestão de Tráfego Pago & Performance (Meta + Google)',
    category: 'Marketing Digital',
    description: 'Proposta recorrente (mensal) para gestores de tráfego que buscam escalar vendas e captação de leads.',
    icon: 'TrendingUp',
    deliverables: [
      'Auditoria completa e configuração do Gerenciador de Anúncios e Google Ads',
      'Instalação e testes de Pixels, API de Conversões e Google Tag Manager',
      'Estruturação de campanhas de captação (Topo, Meio e Fundo de Funil)',
      'Otimização diária de orçamento, criativos e públicos',
      'Relatório mensal executivo com ROI, CPA e principais métricas',
      'Reunião mensal de alinhamento e planejamento estratégico'
    ],
    milestones: [
      { id: 'm1', title: 'Onboarding & Configuração Técnica', duration: '3 dias', description: 'Acessos, pixels e verificação de domínios.' },
      { id: 'm2', title: 'Planejamento de Campanhas & Cópias', duration: '4 dias', description: 'Roteiros de anúncios e públicos-alvo.' },
      { id: 'm3', title: 'Lançamento e Fase de Aprendizado', duration: '7 dias', description: 'Início dos disparos e validação de criativos.' },
      { id: 'm4', title: 'Otimização Contínua & Escala', duration: 'Mensal', description: 'Testes A/B e expansão de orçamento com lucro.' }
    ],
    items: [
      {
        title: 'Setup Inicial & Rastreamento Avançado',
        description: 'Configuração completa de contas de anúncios, tags e API de conversões.',
        quantity: 1,
        unitPrice: 600
      },
      {
        title: 'Gestão Mensal de Campanhas (Fee Mensal)',
        description: 'Acompanhamento, testes contínuos, otimização e relatórios semanais.',
        quantity: 1,
        unitPrice: 1800
      }
    ],
    paymentTerms: 'Mensalidade com vencimento todo dia 05 via Pix ou cobrança automática. Contrato mínimo inicial sugerido de 3 meses.',
    notesAndConditions: 'O valor da verba de mídia dos anúncios (paga diretamente às plataformas Meta/Google) é de responsabilidade do cliente.'
  },
  {
    id: 'template-branding',
    title: 'Identidade Visual & Branding Estratégico',
    category: 'Design & Branding',
    description: 'Pacote completo de marca para empresas que desejam transmitir autoridade e se destacar no mercado.',
    icon: 'Palette',
    deliverables: [
      'Estudo de posicionamento, arquétipos e público-alvo',
      'Logotipo principal, variações secundárias, ícones e monogramas',
      'Paleta de cores com códigos hexadecimais, RGB e CMYK para impressão',
      'Tipografia institucional e hierarquia de fontes',
      'Brandbook / Manual de Identidade Visual em PDF de alta qualidade',
      'Mockups de aplicação real (papelaria, uniformes, embalagens e redes sociais)'
    ],
    milestones: [
      { id: 'm1', title: 'Briefing & Pesquisa de Mercado', duration: '4 dias', description: 'Entrevista profunda e mapa conceitual.' },
      { id: 'm2', title: 'Apresentação de Rotas Criativas', duration: '8 dias', description: 'Apresentação de 2 caminhos conceituais.' },
      { id: 'm3', title: 'Refinamento do Conceito Escolhido', duration: '5 dias', description: 'Ajustes finos de detalhes e cores.' },
      { id: 'm4', title: 'Fechamento de Arquivos & Manual', duration: '4 dias', description: 'Exportação em vetor (.AI, .EPS, .SVG, .PNG).' }
    ],
    items: [
      {
        title: 'Diagnóstico de Marca & Estratégia Visual',
        description: 'Imersão nos valores do negócio e mapeamento visual dos concorrentes.',
        quantity: 1,
        unitPrice: 900
      },
      {
        title: 'Criação de Identidade Visual Completa + Manual',
        description: 'Desenvolvimento do logotipo, aplicações, tipografia e guia completo de uso.',
        quantity: 1,
        unitPrice: 2100
      },
      {
        title: 'Kit para Redes Sociais & Papelaria Digital',
        description: 'Modelos editáveis para posts de Instagram e cartão de visitas digital interativo.',
        quantity: 1,
        unitPrice: 500
      }
    ],
    paymentTerms: 'Entrada de 40% na contratação, 30% na apresentação das rotas visuais e 30% na entrega final dos arquivos.',
    notesAndConditions: 'O cliente tem direito a até 2 rodadas de revisões completas na rota selecionada sem nenhum custo adicional.'
  },
  {
    id: 'template-consultoria',
    title: 'Consultoria Empresarial & Otimização de Processos',
    category: 'Consultoria B2B',
    description: 'Estruturação de processos, organização de rotinas operacionais e diagnóstico estratégico.',
    icon: 'Briefcase',
    deliverables: [
      'Diagnóstico situacional dos gargalos operacionais e financeiros',
      'Mapeamento dos processos atuais (Fluxograma As-Is)',
      'Desenho do modelo otimizado (Fluxograma To-Be)',
      'Plano de ação detalhado com matriz de prioridades (5W2H)',
      '4 sessões online de mentoria e acompanhamento da implementação'
    ],
    milestones: [
      { id: 'm1', title: 'Imersão & Coleta de Dados', duration: '1 semana', description: 'Entrevistas com equipe e análise documental.' },
      { id: 'm2', title: 'Apresentação do Diagnóstico', duration: '1 semana', description: 'Relatório com os principais pontos críticos.' },
      { id: 'm3', title: 'Entrega do Plano de Ação', duration: '2 semanas', description: 'Guia de execução passo a passo.' },
      { id: 'm4', title: 'Acompanhamento & Ajustes', duration: '4 semanas', description: 'Sessões quinzenais de monitoramento.' }
    ],
    items: [
      {
        title: 'Diagnóstico Operacional & Mapeamento',
        description: 'Auditoria de processos internos e identificação de desperdícios de tempo e recursos.',
        quantity: 1,
        unitPrice: 2500
      },
      {
        title: 'Plano de Implementação & Suporte Executivo',
        description: 'Construção das metas e 4 sessões de alinhamento com a diretoria.',
        quantity: 1,
        unitPrice: 3500
      }
    ],
    paymentTerms: 'Parcelamento em até 3x no boleto bancário ou Pix, com a primeira parcela no ato da assinatura deste contrato.',
    notesAndConditions: 'Todas as informações compartilhadas durante o processo são protegidas por termo de sigilo e confidencialidade (NDA).'
  }
];
