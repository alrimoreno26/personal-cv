import type { Lang } from "@/shared/i18n";

export type Theme = "light" | "dark";

export interface AppState {
  theme: Theme;
  lang: Lang;
}

export interface AppActions {
  toggleTheme: () => void;
  setLang: (lang: Lang) => void;
}

export type AppStore = AppState & AppActions;
