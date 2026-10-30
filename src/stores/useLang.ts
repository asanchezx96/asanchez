import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "es" | "en";

interface LangStore {
  lang: Lang;
  toggle: () => void;
}

const browserLang = (): Lang =>
  typeof navigator !== "undefined" && !navigator.language.toLowerCase().startsWith("es") ? "en" : "es";

export const useLang = create<LangStore>()(
  persist(
    (set) => ({
      lang: browserLang(), // default: idioma del navegador
      toggle: () => set((s) => ({ lang: s.lang === "es" ? "en" : "es" })),
    }),
    { name: "portfolio-lang" }
  )
);
