import { cookies } from 'next/headers';
import { db } from './storage';
import { User } from './types';

const SESSION_COOKIE = 'signflow_session';

export async function getSessionUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const sessionUserId = cookieStore.get(SESSION_COOKIE)?.value;

    if (!sessionUserId) {
      return null;
    }

    const user = db.findUserById(sessionUserId);
    return user || null;
  } catch (error) {
    return null;
  }
}

export function sanitizeUser(user: User) {
  const { passwordHash, ...safe } = user;
  return safe;
}
