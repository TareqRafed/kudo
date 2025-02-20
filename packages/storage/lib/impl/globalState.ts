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
  TabsOnScreen: number[];
  isLoggedIn: boolean;
  /**
   * Tasks that are pending between UI or Background.
   */
  tasks: Tasks;
};

type GlobalStateStorage = BaseStorage<GlobalState> & {
  toggleTabOnScreen: (id: number) => Promise<void>;
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

const storage = createStorage<GlobalState>(
  // duplicated keys causes
  'global-storage',
  { TabsOnScreen: [], isLoggedIn: false, tasks: { pool: {}, isFree: true } },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const GlobalStateStorage: GlobalStateStorage = {
  ...storage,
  async toggleTabOnScreen(id: number) {
    await storage.set((state) => {
      const newTabs = state.TabsOnScreen.includes(id)
        ? state.TabsOnScreen.filter((d) => d !== id)
        : [...state.TabsOnScreen, id];
      return { ...state, TabsOnScreen: newTabs };
    });
  },
  async toggleIsLoggedIn() {
    await storage.set((state) => {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    });
  },

  async appendTask({ name }) {
    console.log('new task name', name);
    await storage.set((state) => {
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
    await storage.set((state) => {
      delete state.tasks.pool[name];
      const tasksState = Object.values(state.tasks.pool);
      const newIsFree = tasksState.length === 0 || tasksState.every((val) => !val);
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
