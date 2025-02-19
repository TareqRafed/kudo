import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

interface TeamInviteEmail {
  options: {
    from: 'Acme <onboarding@resend.dev>';
    invite_from: string | null;
    team_id: number | string;
  };
}

export const sendTeamInviteEmail = (emails: string[], options: TeamInviteEmail) => {
  const validatedEmails = emails
    .map((email) => z.string().email().safeParse(email).data ?? null)
    .filter((data): data is string => !!data);

  return resend.batch.send(
    validatedEmails.map((email) => ({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'world hello',
      html: '<p>it works!</p>',
    })),
  );
};
