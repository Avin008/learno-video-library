import create from "zustand";

interface SidebarInitialState {
  sidebar: boolean;
  expandSidebar: () => void;
}

export const useSidebarStore = create<SidebarInitialState>()((set) => ({
  sidebar: false,
  expandSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));
