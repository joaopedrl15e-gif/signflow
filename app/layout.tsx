import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Pedro (JP) • Desenvolvedor & Criador de Experiências Digitais",
  description: "Desenvolvo sites modernos, rápidos e responsivos para profissionais e negócios que querem se destacar na internet.",
  keywords: [
    "João Pedro",
    "desenvolvedor web",
    "criador de sites",
    "portfolio frontend",
    "landing pages",
    "next.js",
    "react",
    "typescript",
    "tailwind css"
  ],
  authors: [{ name: "João Pedro" }],
  openGraph: {
    title: "João Pedro (JP) • Desenvolvedor & Criador de Experiências Digitais",
    description: "Eu transformo ideias em experiências digitais modernas, rápidas e responsivas.",
    url: "https://signflow-mu-silk.vercel.app",
    siteName: "João Pedro Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Pedro • Desenvolvedor de Sites & Interfaces Digitais",
    description: "Transformo ideias em experiências digitais modernas, rápidas e responsivas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
