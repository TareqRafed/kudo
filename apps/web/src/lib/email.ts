import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

interface TeamInviteEmail {
  from: 'Acme <onboarding@resend.dev>';
  invite_from: string | null;
  team: string;
}

export const sendTeamInviteEmail = (emails: string[], options: TeamInviteEmail) => {
  const validatedEmails = emails
    .map((email) => z.string().email().safeParse(email).data ?? null)
    .filter((data): data is string => !!data);

  return resend.batch.send(
    validatedEmails.map((email) => ({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: `You were invited to ${options.team} by ${options.invite_from}`,
      html: `<div>
<p>You were invited to ${options.team} by ${options.invite_from}!</p>
Use the following link to login <a>https://trykudo.com</a>
</div>`,
    })),
  );
};
