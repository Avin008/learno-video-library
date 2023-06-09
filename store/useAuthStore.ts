import create from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";

export const useAuthStore = create<any>(
  persist(
    (set) => ({
      authStatus: false,
      token: null,
      addAuth: (token: string) =>
        set({ authStatus: true, token: token }),
      removeAuth: () => {
        set({ authStatus: false, token: null });
        toast.success("user loggedout successfully");
      },
    }),
    { name: "auth-storage" }
  )
);
