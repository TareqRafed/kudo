import { NextResponse } from 'next/server';
import { createClient } from '@/util/supabase/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import type { Stripe } from 'stripe';
import { env } from '@/lib/env';

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

// The contents of this function should probably be wrapped in a try/catch
export async function syncStripeDataToKV(customerId: string) {
  // Fetch latest subscription data from Stripe
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
    status: 'all',
    expand: ['data.default_payment_method'],
  });

  if (subscriptions.data.length === 0) {
    const subData = { status: 'none' };
    await kv.set(`stripe:customer:${customerId}`, subData);
    return subData;
  }

  // If a user can have multiple subscriptions, that's your problem
  const subscription = subscriptions.data[0];

  // Store complete subscription state
  const subData = {
    customerId: customerId,
    subscriptionId: subscription.id,
    status: subscription.status,
    priceId: subscription.items.data[0].price.id,
    currentPeriodEnd: subscription.current_period_end,
    currentPeriodStart: subscription.current_period_start,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
    paymentMethod:
      subscription.default_payment_method && typeof subscription.default_payment_method !== 'string'
        ? {
            brand: subscription.default_payment_method.card?.brand ?? null,
            last4: subscription.default_payment_method.card?.last4 ?? null,
          }
        : null,
  };

  // Store the data in your KV
  await kv.set(`stripe:customer:${customerId}`, subData);
  return subData;
}

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

  const { error } = await syncStripeDataToKV(customerId);

  if (error) {
    console.error('[STRIPE HOOK] Error processing event', error);
  }

  return NextResponse.json({ received: true });
}
