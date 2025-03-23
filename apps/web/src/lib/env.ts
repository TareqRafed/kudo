import { z } from 'zod';

// Server-side schema
const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  STRIPE_API_KEY: z.string().min(1),
  BEEHIIV_API_KEY: z.string().min(1),
  SUPABASE_API_KEY: z.string().min(1),
  BEEHIIV_PUBLICATION_ID: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production']),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_EXTENSION_ID: z.string().min(1),
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_CHROME_WEBSTORE_URL: z.string().url(),
});

// Client-side schema (only NEXT_PUBLIC_ vars)
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_EXTENSION_ID: z.string().min(1),
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_CHROME_WEBSTORE_URL: z.string().url(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;

function getEnv(): ServerEnv {
  // Check if we're running on the server
  const isServer = typeof window === 'undefined';

  if (isServer) {
    // Server-side validation
    const parsed = serverEnvSchema.safeParse(process.env);
    if (!parsed.success) {
      console.error('❌ Invalid server environment variables:', JSON.stringify(parsed.error.format(), null, 2));
      throw new Error('Invalid server environment variables');
    }
    return parsed.data;
  }
  // Client-side validation (only NEXT_PUBLIC_ vars)
  const clientEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_EXTENSION_ID: process.env.NEXT_PUBLIC_EXTENSION_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_CHROME_WEBSTORE_URL: process.env.NEXT_PUBLIC_CHROME_WEBSTORE_URL,
  };

  const parsed = clientEnvSchema.safeParse(clientEnv);
  if (!parsed.success) {
    console.error('❌ Invalid client environment variables:', JSON.stringify(parsed.error.format(), null, 2));
    throw new Error('Invalid client environment variables');
  }
  return parsed.data as ServerEnv;
}

export const env = getEnv();
