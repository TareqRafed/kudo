import { create } from 'zustand';

type ToolbarItem = {
  inUse: boolean;
  enabled: boolean;
  visible: boolean;
};

type ToolbarItemsState = {
  comment: ToolbarItem;
  inbox: ToolbarItem;
};

type ToolbarState = {
  isDragging: boolean;
  position: { x: number; y: number };
};

type ToolbarStore = {
  toolbarItems: ToolbarItemsState;
  toolbar: ToolbarState;
  toggleToolbarItem: (id: keyof ToolbarItemsState) => void;
  setDragging: (isDragging: boolean) => void;
  reset: () => void;
};

const useToolbarStore = create<ToolbarStore>((set) => ({
  toolbarItems: {
    comment: { inUse: false, enabled: true, visible: true },
    inbox: { inUse: false, enabled: true, visible: true },
  },
  toolbar: {
    isDragging: false,
    position: { x: 10, y: 10 },
  },

  /**
   * Disables sets all other item `inUse` to false
   */
  toggleToolbarItem: (id) =>
    set((state) => ({
      toolbarItems: {
        ...state.toolbarItems,
        [id]: { ...state.toolbarItems[id], inUse: !state.toolbarItems[id].inUse },
      },
    })),

  setDragging: (isDragging: boolean) =>
    set((state) => ({
      toolbar: {
        ...state.toolbar,
        isDragging,
      },
    })),

  /**
   * Disables sets all other item `inUse` to false
   */
  reset: () =>
    set(() => ({
      toolbarItems: {
        comment: { inUse: false, enabled: true, visible: true },
        inbox: { inUse: false, enabled: true, visible: true },
      },
    })),
}));

export default useToolbarStore;
