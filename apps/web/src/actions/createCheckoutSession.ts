'use server';

import { env } from '@/lib/env';
import { createResponse } from '@/util/forms/forms';
import type { FormResponse } from '@/util/forms/types';
import { createClient } from '@/util/supabase/server';
import type { Provider } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { z, type ZodType } from 'zod';
import { stripe } from '@/lib/stripe';

const schema = z.object({
  teamId: z.string().min(1),
});

export async function createCheckoutSession(_: null, formData: FormData) {
  // stripe.customers.create
  const supabase = await createClient();
  const { data: userInstance, error: authError } = await supabase.auth.getUser();
  const user = userInstance.user;
  if (!user) return; // TODO
  const { data: team } = await supabase.from('teams').select('id, customer_id').maybeSingle();
  if (!team) return; // TODO

  let customerId = team.customer_id;
  if (!customerId) {
    const newCustomer = await stripe.customers.create({
      email: user.email,
      metadata: {
        userId: user.id,
        teamId: team.id,
      },
    });
    const { error } = await supabase.from('customers').upsert({ customer_id: newCustomer.id, team_id: team.id });
    customerId = newCustomer.id;
  }

  const data = await stripe.checkout.sessions.create({
    customer: customerId,
    success_url: 'https://trykudo.com/success',
  });

  return null;
}
