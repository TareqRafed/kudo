import { NextResponse } from 'next/server';
import { simhash } from './simhash';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { env } from '@/lib/env';

const schema = z.object({
  document: z.string(),
  domain: z.string().url(),
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(request: Request) {
  const req = await request.json();

  const { data: body, success } = schema.safeParse(req);
  if (!success) return NextResponse.json({ success: false }, { status: 401 });

  const token = request.headers.get('Authorization');
  if (!token) return NextResponse.json({ success: false }, { status: 401 });

  const supabaseClient = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const hash = await simhash(body.document);

  const { data: docData, error } = await supabaseClient
    .rpc('create_new_or_get_website', {
      hash_id: hash.toString(),
      domain: req.domain,
    })
    .maybeSingle();

  if (error) return NextResponse.json({ success: false, error }, { status: 401, headers: corsHeaders });

  return NextResponse.json({ success: true, data: docData }, { status: 201, headers: corsHeaders });
}

export async function OPTIONS(request: Request) {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}
