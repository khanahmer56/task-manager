import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      login: (username) => set({ user: username }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
