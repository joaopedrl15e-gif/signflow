'use client';

import React, { useState } from 'react';
import { Award, ExternalLink, Sparkles, CheckCircle2, X } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  skills: string[];
}

const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'c-1',
    title: 'Next.js & React Fullstack Development',
    issuer: 'Frontend Architecture Specialization',
    date: '2025',
    credentialId: 'CERT-NEXT-2025-JP',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&auto=format&fit=crop&q=80',
    skills: ['Next.js App Router', 'React Server Components', 'SSR / SSG', 'Performance Optimization'],
  },
  {
    id: 'c-2',
    title: 'TypeScript Professional Mastery',
    issuer: 'Software Engineering Certification',
    date: '2025',
    credentialId: 'CERT-TS-2025-JP',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop&q=80',
    skills: ['Generics', 'Type Guards', 'Utility Types', 'Strict Null Checks'],
  },
  {
    id: 'c-3',
    title: 'UI/UX & Modern Web Interface Design',
    issuer: 'Design System & Responsive Web',
    date: '2024',
    credentialId: 'CERT-UIUX-2024-JP',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&auto=format&fit=crop&q=80',
    skills: ['Tailwind CSS', 'Mobile First', 'Micro-interactions', 'Design Tokens'],
  },
  {
    id: 'c-4',
    title: 'Supabase & Cloud Data Architecture',
    issuer: 'Backend as a Service & Auth',
    date: '2024',
    credentialId: 'CERT-SUPA-2024-JP',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&auto=format&fit=crop&q=80',
    skills: ['PostgreSQL', 'Row Level Security', 'Auth', 'Edge Functions'],
  },
];

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>Certifications & Knowledge</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Certificates & Achievements
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Estudo contínuo e aprimoramento nas melhores práticas da indústria web.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATES_DATA.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="rounded-3xl p-5 bg-[#07031e]/80 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl hover:shadow-purple-950/30"
          >
            <div className="space-y-3">
              <div className="w-full h-36 rounded-2xl overflow-hidden relative bg-[#030014] border border-purple-500/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#030014]/90 backdrop-blur-sm text-[10px] font-mono text-cyan-300 border border-purple-500/30 font-bold">
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-1 font-mono">{cert.issuer}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-300">
              <span>View Certificate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-[#07031e] rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-purple-500/30 shadow-2xl space-y-5">
            <div className="flex justify-between items-start pb-3 border-b border-purple-500/20">
              <div>
                <h3 className="font-bold text-base text-white">{selectedCert.title}</h3>
                <p className="text-xs font-mono text-purple-300">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button onClick={() => setSelectedCert(null)} className="text-zinc-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-48 rounded-2xl overflow-hidden bg-[#030014] border border-purple-500/20">
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-cyan-400 uppercase font-bold">Skills Validated</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((s, idx) => (
                  <span key={idx} className="text-[11px] font-mono bg-[#030014] text-zinc-200 px-2.5 py-1 rounded-md border border-purple-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-purple-500/20 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/70 text-zinc-200 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
