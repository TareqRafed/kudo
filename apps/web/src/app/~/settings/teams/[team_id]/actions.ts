'use server';

import { createClient } from '@/util/supabase/server';
import { z } from 'zod';
import { createResponse, validateFormData } from '@/util/forms/forms';
import { sendTeamInviteEmail } from '@/lib/email';
import { FormResponse } from '@/util/forms/types';

type EmailKey =
  `email${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50}`;

const EmailKeySchema = z.custom<EmailKey>((val) => /^email([1-9]|[1-4][0-9]|50)$/.test(val as string));

const emailSchema = z
  .record(EmailKeySchema, z.union([z.string().email(), z.literal('')]))
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one email must be provided',
  });

export async function sendInvitations(team_id: number, _: FormResponse<typeof emailSchema> | null, formData: FormData) {
  const supabase = await createClient();
  const authRes = await supabase.auth.getUser();
  const user = authRes.data.user;

  if (!user) return createResponse<typeof emailSchema>([], 'User not found', false);

  const data = validateFormData(formData, emailSchema);
  if (!data.success) return data;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { success: __, message: ___, ...emails } = data;

  const filteredEmails = Object.fromEntries(
    Object.entries(emails).filter(([, value]) => value !== '' && value != null),
  );
  const invitations = [];
  const invitationErrors = [];
  for (const emailNum in filteredEmails) {
    const invitation = await supabase
      .from('teams_invitations')
      .insert({ email: emails[emailNum]! as string, team_id })
      .select('email, ...teams(name)')
      .maybeSingle();
    if (invitation.data) invitations.push(invitation.data);
    // TODO: clean this
    if (invitation.error?.code == '23505')
      invitationErrors.push({
        field: emailNum as EmailKey,
        error: 'User already invited',
      });
    if (invitation.status == 403)
      invitationErrors.push({
        field: emailNum as EmailKey,
        error: 'User already invited',
      });
    if (!invitation.data || invitation.error)
      invitationErrors.push({
        field: emailNum as EmailKey,
        error: invitation.error?.message ?? 'Something went wrong',
      });
  }

  console.log(invitations, invitationErrors);
  if (invitations.length)
    await sendTeamInviteEmail(
      invitations.map((em) => em.email),
      {
        options: {
          from: 'Acme <onboarding@resend.dev>',
          team_id,
          invite_from: invitations[0].name,
        },
      },
    );

  let feedbackMessage;
  let resSuccess = false;
  if (invitations.length === 0) {
    feedbackMessage = 'Failed to send invitations';
    resSuccess = false;
  } else if (invitationErrors.length > 0) {
    feedbackMessage = 'Some invitations failed to send';
    resSuccess = false;
  } else {
    feedbackMessage = 'Invitations were sent';
    resSuccess = true;
  }
  return createResponse<typeof emailSchema>(
    invitationErrors.map((em) => ({ field: em.field, messages: [em.error] })),
    feedbackMessage,
    resSuccess,
  );
}
