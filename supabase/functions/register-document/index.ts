/* eslint-disable @typescript-eslint/consistent-type-imports */
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'jsr:@supabase/supabase-js';
import { z, ZodError } from 'https://deno.land/x/zod@v3.24.0/mod.ts';
import { Database } from './database.types.ts';
import { corsHeaders } from '../_shared/cors.ts';

const simhashEndpoint = 'https://aehpmfv04b.execute-api.eu-central-1.amazonaws.com/default/simHash';

const requestSchema = z.object({
  document: z.string().min(1, 'Document cannot be empty'),
  url: z.string().min(1, 'URL cannot be empty'),
});

type RemoteFnHashRequest = {
  operation: 'hash';
  document: string;
};
type RemoteFnDistanceRequest = {
  operation: 'distance';
  input1: string;
  input2: string;
};

type RemoteFnRequest = RemoteFnHashRequest | RemoteFnDistanceRequest;

const remoteFnResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    Hash: z.object({
      hash: z.number(),
    }),
  }),
});

type Data = Database['public']['Functions']['create_new_or_get_website']['Returns'][0];

type Response = {
  success: boolean;
  data?: Data;
  error?: string;
};

const headers = { ...corsHeaders, 'Content-Type': 'application/json' };
const createErrorResponse = ({ status, message }: { status: number; message: string }) => {
  const body: Response = {
    success: false,
    error: message,
  };
  return new Response(JSON.stringify(body), { headers, status });
};

const createResponse = ({ status, success, data }: { status: number; success: boolean; data: Data }) => {
  const body: Response = {
    success,
    data,
  };
  return new Response(JSON.stringify(body), { headers, status });
};

function parseWithValidation<T>(schema: z.ZodType<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw createErrorResponse({ status: 400, message: message || 'Validation Error' });
    }
    throw createErrorResponse({ status: 500, message: 'Something wrong happend' });
  }
}

/**
 * RPC simhash aws lambda function
 */
const remoteSimhash = async (document: string) => {
  const body: RemoteFnRequest = {
    operation: 'hash',
    document,
  };
  const response = await fetch(simhashEndpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const { data } = parseWithValidation(remoteFnResponseSchema, await response.json());
  return data;
};

Deno.serve(async req => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers }); // allow browsers
  }
  const authHeader = req.headers.get('Authorization')!;
  const supabaseClient = createClient<Database>(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    {
      global: { headers: { Authorization: authHeader } },
    },
  );

  try {
    const { user } = await supabaseClient.auth.getUser();

    if (!user) {
      return createErrorResponse({ status: 500, message: 'Something went wrong, try again later' });
    }
    const { document, url } = parseWithValidation(requestSchema, await req.json());
    const { Hash } = await remoteSimhash(document);

    const res = await supabaseClient.rpc('create_new_or_get_website', {
      hash_id: Hash.hash.toString(),
      domain: url, // strip it later to domain
    });

    if (res.error) {
      console.warn(res);
      return createErrorResponse({ status: 500, message: 'Something went wrong, try again later' });
    }

    return createResponse({ status: 200, success: true, data: res.data?.[0] || res.data });
  } catch (e) {
    if (e instanceof Response) return e;
    return createErrorResponse({ status: 500, message: 'Internal Error' });
  }
});
