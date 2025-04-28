import { env } from '@src/lib/env';

const host = env.HOST;

async function fetchData(url: string, options?: RequestInit) {
  let data = null;
  let error = null;
  let isLoading = true;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (err) {
    error = err;
  } finally {
    isLoading = false;
  }

  return { data, isLoading, error };
}

export const RPC = {
  registerDocument: async ({ document, url, token }: { document: string; url: string; token: string }) => {
    return fetchData(`${host}/api/register-document`, {
      method: 'POST',
      body: JSON.stringify({ document, url }),
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
