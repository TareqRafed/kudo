import { NextResponse } from 'next/server';
import { createClient } from '@/util/supabase/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import type { Stripe } from 'stripe';
import { env } from '@/lib/env';

/**
 * License MIT
 * https://github.com/t3dotgg/stripe-recommendations?tab=readme-ov-file
 */

const allowedEvents: Stripe.Event.Type[] = [
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'customer.subscription.paused',
  'customer.subscription.resumed',
  'customer.subscription.pending_update_applied',
  'customer.subscription.pending_update_expired',
  'customer.subscription.trial_will_end',
  'invoice.paid',
  'invoice.payment_failed',
  'invoice.payment_action_required',
  'invoice.upcoming',
  'invoice.marked_uncollectible',
  'invoice.payment_succeeded',
  'payment_intent.succeeded',
  'payment_intent.payment_failed',
  'payment_intent.canceled',
];

const ProPlanId = (plan: string) => plan === 'prod_RwWVg1elNcyYBl' || plan === 'prod_RzJW0zcb376qcX';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('Stripe-Signature');

  if (!signature) return NextResponse.json({}, { status: 400 });

  if (typeof signature !== 'string') {
    throw new Error("[STRIPE HOOK] Header isn't a string???");
  }

  const event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET);

  if (!allowedEvents.includes(event.type)) return;

  const { customer: customerId } = event?.data?.object as {
    customer: string;
  };

  if (typeof customerId !== 'string') {
    throw new Error(`[STRIPE HOOK][CANCER] ID isn't string.\nEvent type: ${event.type}`);
  }

  async function processEvent(customerId: string) {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
      status: 'all',
      expand: ['data.default_payment_method'],
    });

    const supabase = await createClient();

    const subscription = subscriptions.data[0];

    const subData = {
      customer_id: customerId,
      subscription_id: subscription.id,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id,
      current_period_end: subscription.current_period_end?.toString(),
      current_period_start: subscription.current_period_start?.toString(),
      cancel_at_period_end: subscription.cancel_at_period_end ? 'true' : 'false',
      tier_id: ProPlanId(subscription.items.data[0].price.id) ? 3 : 2,
    };

    await supabase.from('subscriptions').upsert(subData);
  }

  try {
    await processEvent(customerId);
  } catch (error) {
    console.error('[STRIPE HOOK] Error processing event', error);
    throw new Error(`[STRIPE HOOK] Error processing event: ${event}, Error: ${error}`);
  }

  return NextResponse.json({ received: true });
}
