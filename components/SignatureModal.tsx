'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Check, PenTool, Type, RotateCcw, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Proposal } from '@/lib/types';

interface SignatureModalProps {
  proposal: Proposal;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (updatedProposal: Proposal) => void;
}

export const SignatureModal: React.FC<SignatureModalProps> = ({
  proposal,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'draw' | 'type'>('draw');
  const [signerName, setSignerName] = useState(proposal.client.name || '');
  const [signerDocument, setSignerDocument] = useState(proposal.client.document || '');
  const [signerEmail, setSignerEmail] = useState(proposal.client.email || '');
  const [typedSignature, setTypedSignature] = useState(proposal.client.name || '');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (isOpen && mode === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#1e3a8a'; // Navy blue ink
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const generateSignatureImage = (): string => {
    if (mode === 'draw' && canvasRef.current) {
      return canvasRef.current.toDataURL('image/png');
    } else {
      // Create offscreen canvas for cursive typed signature
      const offCanvas = document.createElement('canvas');
      offCanvas.width = 400;
      offCanvas.height = 120;
      const ctx = offCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, offCanvas.width, offCanvas.height);
        ctx.font = 'bold 38px Caveat, cursive';
        ctx.fillStyle = '#1e3a8a';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(typedSignature || signerName, offCanvas.width / 2, offCanvas.height / 2);
        return offCanvas.toDataURL('image/png');
      }
      return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!signerName.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }
    if (!signerDocument.trim()) {
      setErrorMsg('Por favor, informe seu CPF ou CNPJ.');
      return;
    }
    if (!agreed) {
      setErrorMsg('Você precisa marcar a opção de concordância com os termos.');
      return;
    }
    if (mode === 'draw' && !hasDrawn) {
      setErrorMsg('Por favor, desenhe sua assinatura no campo indicado.');
      return;
    }

    try {
      setIsSubmitting(true);
      const signatureImage = generateSignatureImage();

      const res = await fetch(`/api/proposals/${proposal.id}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          signerName,
          signerEmail,
          signerDocument,
          signatureImage,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Erro ao processar assinatura');
      }

      // Trigger celebration confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}

      onSuccess(data.proposal);
    } catch (err: any) {
      setErrorMsg(err.message || 'Falha ao salvar assinatura. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Assinatura Eletrônica Segura</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Aceitar e Assinar Proposta</h2>
          <p className="text-xs text-slate-500 mt-1">
            Preencha seus dados e registre sua assinatura para formalizar o início do projeto.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nome Completo do Signatário *
              </label>
              <input
                type="text"
                required
                value={signerName}
                onChange={(e) => setSignerName(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CPF ou CNPJ *
              </label>
              <input
                type="text"
                required
                value={signerDocument}
                onChange={(e) => setSignerDocument(e.target.value)}
                placeholder="000.000.000-00"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              E-mail de Confirmação
            </label>
            <input
              type="email"
              value={signerEmail}
              onChange={(e) => setSignerEmail(e.target.value)}
              placeholder="cliente@email.com"
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Signature Mode Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Como deseja assinar?
              </label>
              <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setMode('draw')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                    mode === 'draw'
                      ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Desenhar</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('type')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                    mode === 'type'
                      ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>Digitar</span>
                </button>
              </div>
            </div>

            {mode === 'draw' ? (
              <div className="relative border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 p-2 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={460}
                  height={130}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-32 bg-white rounded-xl touch-none cursor-crosshair shadow-inner"
                />
                {!hasDrawn && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-slate-400 text-xs">
                    ✍️ Desenhe sua assinatura aqui com o dedo ou mouse
                  </div>
                )}
                {hasDrawn && (
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-[11px] font-medium flex items-center gap-1 shadow-sm transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Limpar</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="border border-slate-300 rounded-2xl bg-slate-50 p-4">
                <input
                  type="text"
                  value={typedSignature}
                  onChange={(e) => setTypedSignature(e.target.value)}
                  placeholder="Digite seu nome como assinatura"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-white mb-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <div className="h-20 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 shadow-inner">
                  <span className="font-signature text-3xl sm:text-4xl text-blue-900 select-none">
                    {typedSignature || signerName || 'Sua Assinatura'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Agreement Checkbox */}
          <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-[11px] text-slate-600 leading-relaxed">
              Confirmo que sou o titular ou representante autorizado e concordo integralmente com os itens, valores e condições estabelecidas nesta proposta comercial.
            </span>
          </label>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Registrando Assinatura...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Confirmar e Assinar Proposta</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
