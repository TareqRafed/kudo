import { z } from 'zod';

const envSchema = z.object({
  HOST: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

function getEnv(): Env {
  const clientEnv = {
    HOST: process.env.HOST,
  };

  const parsed = envSchema.safeParse(clientEnv);
  if (!parsed.success) {
    console.error('❌ Invalid client environment variables:', JSON.stringify(parsed.error.format(), null, 2));
    throw new Error('Invalid client environment variables');
  }
  return parsed.data;
}

export const env = getEnv();
