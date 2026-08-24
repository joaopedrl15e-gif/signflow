import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';
import { getSessionUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getSessionUser();
    const userId = user ? user.id : 'usr_demo_1';
    const settings = db.getSettings(userId);
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar configurações' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getSessionUser();
    const userId = user ? user.id : 'usr_demo_1';
    const body = await request.json();
    const updated = db.updateSettings(userId, body);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao salvar configurações' }, { status: 500 });
  }
}
