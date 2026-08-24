import { NextResponse } from 'next/server';
import { db } from '@/lib/storage';
import { getSessionUser } from '@/lib/auth';
import { SAAS_PLANS, LIFETIME_PLAN } from '@/lib/plans';

export async function GET() {
  try {
    const user = await getSessionUser();
    const userId = user ? user.id : '';
    const settings = userId ? db.getSettings(userId) : null;
    const proposals = userId ? db.getProposals(userId) : [];
    
    const currentPlanId = user?.plan || settings?.plan || 'free';
    
    let currentPlan: any = SAAS_PLANS.find(p => p.id === currentPlanId);
    if (!currentPlan && currentPlanId === 'lifetime') {
      currentPlan = LIFETIME_PLAN;
    }
    if (!currentPlan) {
      currentPlan = SAAS_PLANS[0];
    }

    const isUnlimited = currentPlanId === 'lifetime' || currentPlan.maxProposals === 'unlimited';
    const maxProposals = isUnlimited ? 999999 : Number(currentPlan.maxProposals || 3);
    const usageCount = proposals.length;
    const canCreateMore = isUnlimited || usageCount < maxProposals;

    return NextResponse.json({
      plan: currentPlanId,
      planDetails: currentPlan,
      cycle: settings?.planCycle || user?.planCycle || 'monthly',
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
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const { plan, cycle } = body;

    const allowedPlans = ['free', 'starter', 'pro', 'agency', 'lifetime'];
    if (!plan || !allowedPlans.includes(plan)) {
      return NextResponse.json({ error: 'Plano inválido' }, { status: 400 });
    }

    const updated = db.setPlan(user.id, plan, cycle || 'monthly');
    return NextResponse.json({
      success: true,
      message: `Plano atualizado para ${plan.toUpperCase()} com sucesso!`,
      settings: updated,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar assinatura' }, { status: 500 });
  }
}
