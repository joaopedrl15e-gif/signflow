import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';

export async function GET() {
  try {
    const proposals = db.getProposals();
    return NextResponse.json(proposals);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar propostas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const settings = db.getSettings();
    
    // Ensure company info is filled if not provided
    const proposalData = {
      ...body,
      company: body.company || settings,
      status: body.status || 'draft',
    };

    const created = db.createProposal(proposalData);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar proposta' }, { status: 500 });
  }
}
