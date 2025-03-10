import useSupabaseBrowser from '@/util/supabase/client';
import { useEffect } from 'react';

const useNotifyExtension = () => {
  const supabase = useSupabaseBrowser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Unnecessary
  useEffect(() => {
    const notifyExtension = async () => {
      await supabase.auth.getUser();
      const session = await supabase.auth.getSession();
      if (session.data)
        window.postMessage(
          {
            action: 'NEW_SESSION',
            payload: session.data.session,
          },
          '*',
        );
    };
    notifyExtension();
  }, []);
};

export default useNotifyExtension;
