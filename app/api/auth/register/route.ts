import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/lib/storage';
import { sanitizeUser } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, companyName, phone } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Nome, e-mail e senha são obrigatórios.' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existing = db.findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: 'Já existe uma conta cadastrada com este e-mail.' },
        { status: 409 }
      );
    }

    const newUser = db.createUser({
      name,
      email,
      passwordHash: password, // In production you'd use bcrypt
      companyName: companyName || name,
      phone,
    });

    // Set auth cookie
    const cookieStore = await cookies();
    cookieStore.set('signflow_session', newUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return NextResponse.json({
      success: true,
      message: 'Conta criada com sucesso!',
      user: sanitizeUser(newUser),
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao cadastrar usuário' }, { status: 500 });
  }
}
