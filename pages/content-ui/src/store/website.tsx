import { create } from 'zustand';

type WebsiteState = {
  id: number | null;
  hash: string | null;
};

type WebsiteStore = {
  website: WebsiteState;
  setWebsiteData: (id: number, hash: string) => void;
};

const useWebsiteStore = create<WebsiteStore>(set => ({
  website: {
    id: null,
    hash: null,
  },

  setWebsiteData: (id, hash) =>
    set(prevState => ({
      ...prevState,
      website: {
        hash,
        id,
      },
    })),
}));

export default useWebsiteStore;
