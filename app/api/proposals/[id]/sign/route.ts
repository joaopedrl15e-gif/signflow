import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const { signerName, signerEmail, signerDocument, signatureImage } = body;

    if (!signerName || !signerDocument || !signatureImage) {
      return NextResponse.json(
        { error: 'Nome, documento e assinatura são obrigatórios.' },
        { status: 400 }
      );
    }

    // Capture IP and User Agent headers for audit trail
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Browser Client';

    const signatureData = {
      signerName,
      signerEmail: signerEmail || '',
      signerDocument,
      signatureImage,
      signedAt: new Date().toISOString(),
      ipAddress,
      userAgent,
    };

    const signedProposal = db.signProposal(id, signatureData);

    if (!signedProposal) {
      return NextResponse.json({ error: 'Proposta não encontrada' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Proposta aceita e assinada com sucesso!',
      proposal: signedProposal,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar assinatura' }, { status: 500 });
  }
}
