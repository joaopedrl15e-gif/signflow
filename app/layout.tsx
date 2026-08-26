import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Web Studio - Sites & Landing Pages de Alta Conversão em 24h",
  description: "Desenvolvemos sites profissionais, cardápios digitais e landing pages de alta conversão para empresas e negócios locais. Entregue em 24 a 48 horas.",
  keywords: ["criacao de sites", "landing page", "web design", "cardapio digital", "desenvolvimento de sites", "negocios locais"],
  openGraph: {
    title: "Apex Web Studio • Criação de Sites Profissionais em 24h",
    description: "Transforme visitantes em clientes no WhatsApp com um site moderno e ultra-rápido para sua empresa.",
    url: "https://signflow-mu-silk.vercel.app",
    siteName: "Apex Web Studio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Web Studio - Sites Profissionais em 24h",
    description: "Transforme visitantes em clientes no WhatsApp com um site moderno.",
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
