'use client';

import { env } from '@/lib/env';
import useSupabaseBrowser from '@/util/supabase/client';
import { sendToExtension } from '@kudo/shared';
import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';

const extensionId = env.NEXT_PUBLIC_EXTENSION_ID;
const checkExtensionInstalled = async () => {
  const res = await sendToExtension(extensionId, { action: 'PING' });
  if (res.success) return res.data.success;
  return false;
};

type Extension = {
  isInstalled: boolean;
};

const ExtensionContext = createContext<Extension>({ isInstalled: false });

export const ExtensionProvider = ({ children }: { children: ReactNode }) => {
  const supabase = useSupabaseBrowser();
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);

  useEffect(() => {
    // const notifyExtension = async () => {
    //   const browser = window.browser || window.chrome;
    //   await supabase.auth.getUser();
    //   const session = await supabase.auth.getSession();
    //   if (browser.runtime?.sendMessage && session.data)
    //     const response = await browser.runtime.sendMessage(extensionId, {
    //       action: 'NEW_SESSION',
    //       payload: session.data.session,
    //     } as ExternalMessage);
    // };
    const sendSessionToExtension = async () => {
      await supabase.auth.getUser();
      const sessionRes = await supabase.auth.getSession();
      if (!sessionRes.data.session) return false;
      const res = await sendToExtension(extensionId, { action: 'NEW_SESSION', payload: sessionRes.data.session });
      return !!res.data?.success;
    };

    sendSessionToExtension();
    checkExtensionInstalled().then((val) => setIsExtensionInstalled(val));
  }, [supabase]);

  return (
    <ExtensionContext.Provider value={{ isInstalled: isExtensionInstalled }}>{children}</ExtensionContext.Provider>
  );
};

const useExtension = () => {
  const ctx = useContext(ExtensionContext);
  if (ctx === undefined) {
    throw new Error('useExtension must be used within a ExtensionProvider');
  }

  return ctx;
};

export default useExtension;
