import { env } from '@src/lib/env';

const host = env.HOST;

async function fetchData(url: string, options?: RequestInit) {
  let data = null;
  let error = null;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (err) {
    error = err;
  }

  return { data, error };
}

export const RPC = {
  registerDocument: async ({ document, domain, token }: { document: string; domain: string; token: string }) => {
    return fetchData(`${host}/api/register-document`, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({ document, domain }),
    });
  },
};
