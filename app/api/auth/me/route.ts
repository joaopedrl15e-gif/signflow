import { NextResponse } from 'next/server';
import { getSessionUser, sanitizeUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ authenticated: false, user: null });
    }
    return NextResponse.json({ authenticated: true, user: sanitizeUser(user) });
  } catch {
    return NextResponse.json({ authenticated: false, user: null });
  }
}
