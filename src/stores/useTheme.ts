import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  dark: boolean;
  toggle: () => void;
}

const prefersDark = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      dark: prefersDark(), // default: preferencia del sistema
      toggle: () => set((s) => ({ dark: !s.dark })),
    }),
    { name: "portfolio-theme" }
  )
);
