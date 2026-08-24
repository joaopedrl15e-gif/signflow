import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignFlow - Propostas Comerciais & Assinatura Digital no WhatsApp",
  description: "Crie propostas comerciais interativas de alto luxo, envie direto no WhatsApp e colete assinaturas na tela com validade jurídica MP 2.200-2 em minutos.",
  keywords: ["gerador de propostas", "assinatura digital", "contratos online", "proposta comercial", "whatsapp", "saas brasil"],
  openGraph: {
    title: "SignFlow • Propostas Comerciais & Assinatura Digital",
    description: "Transforme orçamentos em contratos assinados no WhatsApp em minutos.",
    url: "https://signflow-mu-silk.vercel.app",
    siteName: "SignFlow SaaS",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SignFlow - Propostas Comerciais & Assinatura Digital",
    description: "Transforme orçamentos em contratos assinados no WhatsApp em minutos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
