import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const proposal = db.registerView(id);
    if (!proposal) {
      return NextResponse.json({ error: 'Proposta não encontrada' }, { status: 404 });
    }
    return NextResponse.json({ success: true, viewCount: proposal.viewCount });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao registrar visualização' }, { status: 500 });
  }
}
