'use server';

import { createClient, createServiceRoleClient } from '@/util/supabase/server';
import { z } from 'zod';
import { stripe } from '@/lib/stripe';
import type { FormResponse } from '@/util/forms/types';
import { createResponse, validateFormData } from '@/util/forms/forms';
import { redirect } from 'next/navigation';
import { env } from '@/lib/env';

const catalogue = {
  monthlyPro: env.NODE_ENV === 'production' ? 'price_1R2dSJIGjRTzW5c6lqie5s9M' : 'price_1R5KtvIGjRTzW5c6MEOG4yqK',
  annualPro: env.NODE_ENV === 'production' ? 'price_1R5mzJIGjRTzW5c6HXcb5EZW' : 'price_1R5mwOIGjRTzW5c6lLz9T4Li',
};

const schema = z.object({
  teamId: z.string().min(1),
  isMonthly: z.enum(['true', 'false']),
});

export async function createCheckoutSession(_: FormResponse<typeof schema> | null, formData: FormData) {
  const supabase = await createClient();

  const { data: userInstance, error: authError } = await supabase.auth.getUser();
  const user = userInstance.user;
  if (!user || authError) {
    console.error(`[CREATE CHECKOUT SESSION]: User: ${user?.email} Auth error: ${authError?.message}`);
    return createResponse<typeof schema>([], 'Not authenticated', false);
  }
  const data = validateFormData(formData, schema);
  if (!data.success) {
    console.error(`[CREATE CHECKOUT SESSION]: Validation Issue, this is not supposed not happen: ${data}}`);
    return data;
  }
  const { data: team } = await supabase
    .from('teams')
    .select('id, customer_id')
    .eq('id', Number(data.teamId))
    .maybeSingle();
  if (!team) return createResponse<typeof schema>([], `Team not found id: ${data.teamId}`, false);

  const { count: numberOfMembers, error } = await supabase
    .from('members_teams')
    .select('team_id', { count: 'exact', head: true })
    .eq('team_id', Number(data.teamId));

  if (error || !numberOfMembers) {
    console.error(
      `[CREATE CHECKOUT SESSION] Found ${numberOfMembers} members in team: ${data.teamId}. Error: ${error?.message}`,
    );
    return createResponse<typeof schema>([], 'Something went wrong, try again later', false);
  }

  let customerId = team.customer_id;
  if (!customerId) {
    try {
      const newCustomer = await stripe.customers.create({
        email: user.email,
        metadata: {
          userId: user.id,
          teamId: team.id,
        },
      });
      const supabase = await createServiceRoleClient();
      const { error } = await supabase.from('customers').upsert({ customer_id: newCustomer.id, team_id: team.id });
      if (error) {
        console.error('[CREATE CHECKOUT SESSION]: Supabase error: ', error);
        return createResponse<typeof schema>(
          [],
          'Something went wrong. it was reported, please try again later.',
          false,
        );
      }
      customerId = newCustomer.id;
    } catch (error) {
      console.error('[CREATE CHECKOUT SESSION]: Something went wrong with stripe: ', error);
      return createResponse<typeof schema>([], 'Something went wrong', false);
    }
  }

  const checkout = await stripe.checkout.sessions.create({
    customer: customerId,
    success_url: `${env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${env.NEXT_PUBLIC_BASE_URL}`,
    mode: 'subscription',
    line_items: [
      {
        quantity: numberOfMembers,
        price: data.isMonthly ? catalogue.monthlyPro : catalogue.annualPro,
      },
    ],
  });

  if (checkout.url) redirect(checkout.url);

  console.error('[CREATE CHECKOUT SESSION]: Session wasnt created: ', checkout);
  return createResponse<typeof schema>([], 'Something went wrong', false);
}
