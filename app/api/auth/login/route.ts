import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/lib/storage';
import { sanitizeUser } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Informe seu e-mail e senha.' },
        { status: 400 }
      );
    }

    const user = db.findUserByEmail(email);
    if (!user || user.passwordHash !== password) {
      return NextResponse.json(
        { error: 'E-mail ou senha incorretos.' },
        { status: 401 }
      );
    }

    // Set auth cookie
    const cookieStore = await cookies();
    cookieStore.set('signflow_session', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return NextResponse.json({
      success: true,
      message: 'Login realizado com sucesso!',
      user: sanitizeUser(user),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao realizar login' }, { status: 500 });
  }
}
