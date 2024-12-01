import { create } from 'zustand';

type ToolbarItem = {
  inUse: boolean;
  enabled: boolean;
  visible: boolean;
};

type ToolbarState = {
  comment: ToolbarItem;
};

type ToolbarStore = {
  toolbar: ToolbarState;
  toggleToolbarItem: (id: keyof ToolbarState) => void;
};

const useToolbarStore = create<ToolbarStore>(set => ({
  toolbar: {
    comment: { inUse: false, enabled: true, visible: true },
  },

  /**
   * Disables sets all other item `inUse` to false
   */
  toggleToolbarItem: id =>
    set(state => ({
      toolbar: {
        ...state.toolbar,
        [id]: { ...state.toolbar[id], inUse: !state.toolbar[id].inUse },
      },
    })),
}));

export default useToolbarStore;
