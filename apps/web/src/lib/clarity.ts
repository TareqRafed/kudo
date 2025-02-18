/**
 * Assuming script tag in layout for microsoft clarity
 */
declare global {
  interface Window {
    clarity: (s: string, k?: string | boolean, v?: string) => void;
  }
}

export const getClarity = () => {
  if (window.clarity! && typeof window.clarity! === 'function') {
    return window.clarity;
  }

  return () => {};
};

export const setClarity = ({ key, value }: { key: string; value: string }) => {
  if (window.clarity! && typeof window.clarity! === 'function') {
    window.clarity('set', key, value);
  }
};

export const consentClarity = ({ val }: { val: boolean }) => {
  if (window.clarity! && typeof window.clarity! === 'function') {
    if (val) window.clarity('consent');
    if (!val) window.clarity('consent', false);
  }
};
