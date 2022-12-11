import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<any>(
  persist(
    (set) => ({
      authStatus: false,
      token: null,
      addAuth: (token: string) => set({ authStatus: true, token: token }),
      removeAuth: () => set({ authStatus: false, token: null }),
    }),
    { name: "auth-storage" }
  )
);
