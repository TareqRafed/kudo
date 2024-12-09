import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

export type GlobalState = {
  isOnScreen: boolean;
  isLoggedIn: boolean;
};

type GlobalStateStorage = BaseStorage<GlobalState> & {
  toggleIsOnScreen: () => Promise<void>;
  toggleIsLoggedIn: () => Promise<void>;
};

const storage = createStorage<GlobalState>(
  'global-state-storage-key',
  { isOnScreen: false, isLoggedIn: false },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const GlobalStateStorage: GlobalStateStorage = {
  ...storage,
  async toggleIsOnScreen() {
    await storage.set(state => {
      return { ...state, isOnScreen: !state.isOnScreen };
    });
  },
  async toggleIsLoggedIn() {
    await storage.set(state => {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    });
  },
};
