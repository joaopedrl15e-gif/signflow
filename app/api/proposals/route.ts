import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';
import { getSessionUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getSessionUser();
    const userId = user ? user.id : 'usr_demo_1';
    const proposals = db.getProposals(userId);
    return NextResponse.json(proposals);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar propostas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getSessionUser();
    const userId = user ? user.id : 'usr_demo_1';
    const body = await request.json();
    const settings = db.getSettings(userId);
    
    // Check subscription plan limits for this user
    const currentProposals = db.getProposals(userId);
    const userPlan = user?.plan || settings.plan || 'free';
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

    const created = db.createProposal(proposalData, userId);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar proposta' }, { status: 500 });
  }
}
