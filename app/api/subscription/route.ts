import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';
import { SAAS_PLANS } from '@/lib/plans';

export async function GET() {
  try {
    const settings = db.getSettings();
    const proposals = db.getProposals();
    const currentPlanId = settings.plan || 'free';
    const currentPlan = SAAS_PLANS.find(p => p.id === currentPlanId) || SAAS_PLANS[0];

    const isUnlimited = currentPlan.maxProposals === 'unlimited';
    const maxProposals = isUnlimited ? 999999 : Number(currentPlan.maxProposals);
    const usageCount = proposals.length;
    const canCreateMore = isUnlimited || usageCount < maxProposals;

    return NextResponse.json({
      plan: currentPlanId,
      planDetails: currentPlan,
      cycle: settings.planCycle || 'monthly',
      usage: {
        current: usageCount,
        max: isUnlimited ? 'Ilimitado' : currentPlan.maxProposals,
        canCreateMore,
        percentage: isUnlimited ? 100 : Math.min(100, Math.round((usageCount / (Number(currentPlan.maxProposals) || 1)) * 100)),
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao verificar assinatura' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan, cycle } = body;

    if (!plan || !['free', 'pro', 'agency'].includes(plan)) {
      return NextResponse.json({ error: 'Plano inválido' }, { status: 400 });
    }

    const updated = db.setPlan(plan, cycle || 'monthly');
    return NextResponse.json({
      success: true,
      message: `Plano atualizado para ${plan.toUpperCase()} com sucesso!`,
      settings: updated,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar assinatura' }, { status: 500 });
  }
}
