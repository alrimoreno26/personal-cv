import { create } from "zustand";
import type { AppStore } from "./types";
import type { Lang } from "@/shared/i18n";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "es" || stored === "pt") return stored;
  const nav = navigator.language.slice(0, 2);
  if (nav === "es" || nav === "pt") return nav;
  return "en";
}

function applyThemeClass(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

const initialTheme = getInitialTheme();
applyThemeClass(initialTheme);

export const useAppStore = create<AppStore>((set) => ({
  theme: initialTheme,
  lang: getInitialLang(),

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyThemeClass(next);
      return { theme: next };
    }),

  setLang: (lang: Lang) =>
    set(() => {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
      return { lang };
    }),
}));
