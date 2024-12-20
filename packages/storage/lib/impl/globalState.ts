import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type Task = 'register_document' | 'auth';

type Tasks = {
  /**
   * Map that holds <nameTask, isPending>
   */
  pool: Partial<Record<Task, boolean>>;

  /**
   * If all tasks are not pending it's set to true otherwise false
   */
  isFree: boolean;
};

export type GlobalState = {
  isOnScreen: boolean;
  isLoggedIn: boolean;
  /**
   * Tasks that are pending between UI or Background.
   */
  tasks: Tasks;
};

type GlobalStateStorage = BaseStorage<GlobalState> & {
  toggleIsOnScreen: () => Promise<void>;
  toggleIsLoggedIn: () => Promise<void>;
  /**
   * Add element as a pending task, it changes the {@link isFree} state
   */
  appendTask: ({ name }: { name: Task }) => Promise<void>;
  /**
   * Remove element as a pending task, it changes the {@link isFree} state
   */
  deleteTask: ({ name }: { name: Task }) => Promise<void>;
};

const storage = createStorage<GlobalState>( // duplicated keys causes
  'global-state-storage',
  { isOnScreen: false, isLoggedIn: false, tasks: { pool: {}, isFree: true } },
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

  async appendTask({ name }) {
    await storage.set(state => {
      return {
        ...state,
        tasks: {
          pool: { ...state.tasks.pool, [name]: true },
          isFree: false,
        },
      };
    });
  },

  async deleteTask({ name }) {
    await storage.set(state => {
      delete state.tasks.pool[name];
      const tasksState = Object.values(state.tasks.pool);
      const newIsFree = tasksState.length === 0 || tasksState.every(val => !val);
      return {
        ...state,
        tasks: {
          pool: { ...state.tasks.pool },
          isFree: newIsFree,
        },
      };
    });
  },
};
