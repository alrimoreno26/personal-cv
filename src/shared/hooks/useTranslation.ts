import { useCallback } from "react";
import { useAppStore } from "@/stores";
import { translate } from "@/shared/i18n";

/**
 * Hook that provides `lang`, `setLang`, `dark`, `toggleDark`, and `tr(key)`.
 * Uses minimal Zustand selectors to avoid unnecessary re-renders.
 */
export function useTranslation() {
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  const dark = theme === "dark";

  const tr = useCallback(
    (key: Parameters<typeof translate>[1]) => translate(lang, key),
    [lang],
  );

  return { lang, setLang, dark, toggleDark: toggleTheme, tr } as const;
}
