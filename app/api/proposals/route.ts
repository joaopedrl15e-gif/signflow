import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';
import { getSessionUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      // If unauthenticated or no session, return clean empty list
      return NextResponse.json([]);
    }

    const proposals = db.getProposals(user.id);
    return NextResponse.json(proposals);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar propostas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Você precisa estar logado para criar propostas.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const settings = db.getSettings(user.id);
    
    // Check subscription plan limits for this specific user
    const currentProposals = db.getProposals(user.id);
    const userPlan = user.plan || settings.plan || 'free';
    if (userPlan === 'free' && currentProposals.length >= 3) {
      return NextResponse.json(
        { error: 'Limite de 3 propostas gratuitas atingido. Faça upgrade para o Plano Pro.' },
        { status: 403 }
      );
    }

    const proposalData = {
      ...body,
      company: body.company || settings,
      status: body.status || 'draft',
    };

    const created = db.createProposal(proposalData, user.id);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar proposta' }, { status: 500 });
  }
}
