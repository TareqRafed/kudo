import { z } from 'zod';

/**
 * Schema for environment variables
 */
const envSchema = z.object({
  // Server-side variables (only available on the server)
  RESEND_API_KEY: z.string().min(1),
  BEEHIIV_API_KEY: z.string().min(1),
  BEEHIIV_PUBLICATION_ID: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production']),

  // Public variables (available in the browser)
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_EXTENSION_ID: z.string().min(1),
  NEXT_PUBLIC_BASE_URL: z.string().url(),
});

/**
 * Define a type based on the schema
 */
export type Env = z.infer<typeof envSchema>;

/**
 * Parse and validate the environment variables
 */
function getEnv(): Env {
  // For server-side environment variables
  if (typeof process.env !== 'undefined') {
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
      console.error('❌ Invalid environment variables:', JSON.stringify(parsed.error.format(), null, 2));
      throw new Error('Invalid environment variables');
    }

    return parsed.data;
  }

  // For client-side, only include NEXT_PUBLIC_ variables
  throw new Error('Unable to access environment variables');
}

/**
 * Export the validated environment variables
 */
export const env = getEnv();
