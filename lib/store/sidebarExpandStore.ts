import create from "zustand";

type InitialState = {
  sidebarExpand: boolean;
  toggleExpandSidebar: () => void;
};

const useSidebarStore = create<InitialState>((set) => ({
  sidebarExpand: false,
  toggleExpandSidebar: () =>
    set((state) => ({
      sidebarExpand: !state.sidebarExpand,
    })),
}));

export default useSidebarStore;
