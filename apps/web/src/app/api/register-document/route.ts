import { NextResponse } from 'next/server';
import { createClient } from '@/util/supabase/server';
import { env } from '@/lib/env';
import { simhash } from './simhash';

export async function POST(request: Request) {
  // const req = await request.json();
  //
  // const supabaseClient = await createClient();
  // simhash(req.document);
  // const hash = simhash(req.document);
  //
  // const { data, error } = await supabaseClient.rpc('create_new_or_get_website', {
  //   hash_id: hash,
  //   domain: req.domain,
  // });
  //
  // if (error)
  //   // return the user to an error page with instructions
  //   return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
