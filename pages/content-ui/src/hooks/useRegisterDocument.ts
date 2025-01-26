import { useEffect } from 'react';
import { useSendMessage } from './useSendMessage';
import useWebsiteStore from '@src/store/website';
import { GlobalStateStorage } from '@extension/storage';

// const responseSchema = z.object({
//   success: z.boolean(),
//   data: z.object({
//     id: z.number(),
//     created_at: z.string().datetime(),
//     hash_id: z.string(),
//     domain: z.string().url(),
//     board_id: z.number(),
//   }),
// });

function cleanHTMLClone(currentElement: HTMLElement): HTMLElement {
  const clonedElement = currentElement.cloneNode(true) as HTMLElement;

  const elementsToRemove = ['meta', 'script', 'style'];
  elementsToRemove.forEach(tag => {
    const elements = clonedElement.querySelectorAll(tag);
    elements.forEach(element => {
      element.remove();
    });
  });

  const allElements = clonedElement.querySelectorAll('*');
  allElements.forEach(element => {
    Array.from(element.attributes).forEach(attr => {
      element.removeAttribute(attr.name);
    });
  });

  return clonedElement;
}

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const TASK_ID = 'register_document';

const edgeFunc = 'https://pfwrdyygogowjxyqcene.supabase.co/functions/v1/register-document';
export const useRegisterDocument = () => {
  const { data: res } = useSendMessage({ action: 'GET_AUTH', payload: '' });
  const { setWebsiteData } = useWebsiteStore();

  useEffect(() => {
    const registerDocument = async () => {
      if (!res?.data?.access_token) return;
      console.log(cleanHTMLClone(document.body).innerHTML);
      await GlobalStateStorage.appendTask({ name: TASK_ID });
      const body = {
        document: JSON.stringify(cleanHTMLClone(document.body).innerHTML),
        url: document.URL,
      };

      fetch(edgeFunc, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { Authorization: `Bearer ${res.data.access_token}` },
      })
        .then(data => data.json())
        .then(data => {
          console.log(data, 'website post edge function response');
          setWebsiteData(data?.data?.id, data?.data?.hash_id);
          GlobalStateStorage.deleteTask({ name: TASK_ID });
        });
    };
    registerDocument();
  }, [res?.data?.access_token, setWebsiteData]);
};
