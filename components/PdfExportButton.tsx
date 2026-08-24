'use client';

import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface PdfExportButtonProps {
  proposalCode: string;
  className?: string;
}

export const PdfExportButton: React.FC<PdfExportButtonProps> = ({
  proposalCode,
  className = '',
}) => {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrintPdf = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 300);
  };

  return (
    <button
      onClick={handlePrintPdf}
      disabled={isExporting}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-sm ${className}`}
    >
      {isExporting ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-500" />
      ) : (
        <Download className="w-3.5 h-3.5 text-slate-500" />
      )}
      <span>Baixar PDF</span>
    </button>
  );
};
