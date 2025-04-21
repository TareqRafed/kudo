import { useToast } from '@kudo/ui';
import useWebsiteStore from '@src/store/website';
import { useEffect } from 'react';
import { useSendMessage } from './useSendMessage';

/**
 * Move this function to the server
 */
function cleanHTMLClone(currentElement: HTMLElement): HTMLElement {
  const clonedElement = currentElement.cloneNode(true) as HTMLElement;

  const elementsToRemove = ['meta', 'script', 'style'];

  for (const tag of elementsToRemove) {
    const elements = clonedElement.querySelectorAll(tag);
    // biome-ignore lint/complexity/noForEach: List of nodes has no for..of
    elements.forEach((element) => {
      element.remove();
    });
  }

  const allElements = clonedElement.querySelectorAll('*');
  // biome-ignore lint/complexity/noForEach: List of nodes has no for..of
  allElements.forEach((element) => {
    for (const attr of Array.from(element.attributes)) {
      element.removeAttribute(attr.name);
    }
  });

  return clonedElement;
}

// This should be re-written, detecting documents should be triggered after
// layout shifts or reflows
// discard the usage of global state, did it like this cause there were other plans
const edgeFunc = 'https://pfwrdyygogowjxyqcene.supabase.co/functions/v1/register-document';
export const useRegisterDocument = () => {
  const { data: res } = useSendMessage({ action: 'GET_AUTH' });
  const { setWebsiteData } = useWebsiteStore();

  const { toast } = useToast();
  useEffect(() => {
    const registerDocument = async () => {
      if (!res?.success) return;
      if (!res?.data?.access_token) return;

      const body = {
        document: JSON.stringify(cleanHTMLClone(document.body).innerHTML),
        url: document.URL,
      };

      fetch(edgeFunc, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { Authorization: `Bearer ${res.data?.access_token}` },
      })
        .then((data) => data.json())
        .then((data) => {
          if (!data.success && data.error) {
            toast({
              variant: 'destructive',
              title: "Kudo couldn't retrive the project details",
              description: data.error,
            });
          }
          setWebsiteData(data?.data?.id, data?.data?.hash_id);
        })
        .catch(() => {
          toast({ description: "Network issue, Kudo couldn't connect to servers" });
        });
    };
    registerDocument();
  }, [res, toast, setWebsiteData]);
};
