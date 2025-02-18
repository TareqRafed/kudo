import useSupabaseBrowser from '@/util/supabase/client';
import { useEffect } from 'react';

const useNotifyExtension = () => {
  const supabase = useSupabaseBrowser();

  useEffect(() => {
    const notifyExtension = async () => {
      const editorExtensionId = 'hahbjmnjmbgijbfmeojncnkddjfeomec';
      await supabase.auth.getUser();
      const session = await supabase.auth.getSession();
      if (chrome?.runtime?.sendMessage && session.data)
        chrome.runtime.sendMessage(editorExtensionId, {
          action: 'NEW_SESSION',
          payload: session.data.session,
        });
    };
    notifyExtension();
  }, []);
};

export default useNotifyExtension;
