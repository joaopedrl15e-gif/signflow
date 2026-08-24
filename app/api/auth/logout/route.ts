import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('signflow_session');
    return NextResponse.json({ success: true, message: 'Logout realizado com sucesso' });
  } catch {
    return NextResponse.json({ error: 'Erro ao fazer logout' }, { status: 500 });
  }
}
