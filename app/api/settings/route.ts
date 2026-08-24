import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';
import { getSessionUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({
        name: 'Minha Empresa',
        tagline: 'Propostas Comerciais',
        email: '',
        phone: '',
        document: '',
        plan: 'free',
      });
    }

    const settings = db.getSettings(user.id);
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar configurações' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const updated = db.updateSettings(user.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao salvar configurações' }, { status: 500 });
  }
}
