# 🚀 SignFlow SaaS - Propostas Comerciais & Assinatura Digital

**SignFlow** é um Micro-SaaS completo construído com **Next.js 15, TypeScript e Tailwind CSS**, projetado para permitir que freelancers, agências e prestadores de serviços criem propostas comerciais atraentes, enviem links pelo WhatsApp e coletem assinaturas eletrônicas com validade em segundos.

---

## 🌟 Principais Recursos

- 📊 **Dashboard Executivo:** Métricas em tempo real de faturamento total, propostas aceitas, em negociação e taxa de conversão.
- ⚡ **Modelos Prontos por Nicho:**
  - Criação de Websites & Landing Pages (Dev Web)
  - Gestão de Tráfego Pago & Performance (Marketing)
  - Identidade Visual & Branding (Design)
  - Consultoria Empresarial & Processos
- ✍️ **Assinatura Eletrônica Interativa:**
  - Desenho manual em canvas (toque no celular ou mouse no PC)
  - Assinatura manuscrita digital com tipografia cursiva
  - Coleta de CPF/CNPJ, e-mail e carimbo de data/hora/IP
  - Animação de confetes ao assinar! 🎉
- 💬 **Compartilhamento 1-Clique no WhatsApp:** Mensagem pré-formatada pronta para envio direto ao cliente.
- 📄 **Exportação em PDF:** Layout limpo e otimizado para impressão e download de contratos assinados.
- 👥 **Diretório de Clientes:** Acompanhamento automático de clientes e receita gerada por conta.
- ⚙️ **Configuração White-Label:** Dados da sua empresa, slogan, CNPJ, WhatsApp e chave Pix.

---

## 🛠️ Como Rodar o Projeto Localmente

### 1. Instalar as dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Acessar no navegador
Abra [http://localhost:3000](http://localhost:3000) para ver a Landing Page ou [http://localhost:3000/dashboard](http://localhost:3000/dashboard) para acessar o Painel Executivo.

---

## 📂 Estrutura do Projeto

```
signflow/
├── app/
│   ├── api/
│   │   ├── proposals/          # Endpoints de CRUD de propostas
│   │   │   └── [id]/sign/      # Registro de assinatura digital
│   │   │   └── [id]/view/      # Tracking de visualizações
│   │   └── settings/           # Configurações do emissor
│   ├── dashboard/
│   │   ├── page.tsx            # Dashboard com métricas e lista
│   │   ├── propostas/          # Gestão e criador de propostas
│   │   ├── templates/          # Catálogo de modelos
│   │   ├── clientes/           # Diretório de clientes
│   │   └── configuracoes/      # Dados da empresa e Pix
│   ├── proposta/[id]/          # Página pública do cliente (Assinatura)
│   ├── layout.tsx
│   ├── page.tsx                # Landing page de apresentação
│   └── globals.css
├── components/
│   ├── Sidebar.tsx             # Menu lateral
│   ├── Navbar.tsx              # Barra superior
│   ├── SignatureModal.tsx      # Modal de assinatura em canvas
│   ├── ShareModal.tsx          # Modal de envio no WhatsApp
│   ├── StatusBadge.tsx         # Indicador de status
│   └── PdfExportButton.tsx     # Botão de exportação PDF
├── data/
│   └── db.json                 # Banco de dados local (auto-criado)
├── lib/
│   ├── types.ts                # Definições TypeScript
│   ├── storage.ts              # Camada de persistência JSON
│   ├── templates.ts            # Modelos pré-definidos
│   └── utils.ts                # Formatadores de moeda (BRL) e datas
└── package.json
```

---

## 🚀 Como Subir para Produção (Vercel)

1. Suba este projeto para um repositório no **GitHub**.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. O Next.js será detectado automaticamente. Clique em **Deploy**!
