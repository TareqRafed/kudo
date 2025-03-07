import { env } from '@/lib/env';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const apiKey = env.BEEHIIV_API_KEY;
    const publicationId = env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      return NextResponse.json({ error: 'Missing API key or publication ID' }, { status: 500 });
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        send_welcome_email: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
