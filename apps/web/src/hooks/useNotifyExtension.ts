'use client';

import { env } from '@/lib/env';
import useSupabaseBrowser from '@/util/supabase/client';
import { useEffect } from 'react';

const extensionId = env.NEXT_PUBLIC_EXTENSION_ID;

const useNotifyExtension = () => {
  if (!window) return;
  const browser = window.browser || window.chrome;
  const supabase = useSupabaseBrowser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Unnecessary
  useEffect(() => {
    const notifyExtension = async () => {
      await supabase.auth.getUser();
      const session = await supabase.auth.getSession();
      if (session.data)
        browser.runtime.sendMessage(extensionId, {
          action: 'NEW_SESSION',
          payload: session.data.session,
        });
    };
    notifyExtension();
  }, []);
};

export default useNotifyExtension;
