import { Resend } from 'resend';
import { type NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_jVzaDjEb_9CAoJFH9EbEbDdqtW7wRjamA');

type SendMailParams = {
  message: string;
  subject: string;
  to: string;
  from: string;
};

const sendMail = async ({ message, subject, to, from }: SendMailParams) => {
  const { error } = await resend.emails.send({
    from,
    to,
    subject: subject,
    html: JSON.stringify(message),
  });

  return error;
};

export async function POST(req: NextRequest) {
  try {
    const { email, name, message } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const resp = await sendMail({
      from: 'tariq@usemersal.com',
      message,
      to: 'tariq@usemersal.com',
      subject: `Mersal contact form from: ${email} ${name}`,
    });

    if (!resp) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
      return NextResponse.json({ success: false, data: 'Failed to send E-mail' }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
