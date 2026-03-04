import { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/shared/hooks";
import type { Lang } from "@/shared/i18n";

const LANG_OPTIONS: Lang[] = ["en", "es", "pt"];
const LANG_LABELS: Record<Lang, string> = { en: "EN", es: "ES", pt: "PT" };
const LANG_FULL: Record<Lang, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

const NAV_SECTIONS = [
  "about",
  "skills",
  "experience",
  "certifications",
  "education",
  "contact",
] as const;

type NavKey = `nav.${(typeof NAV_SECTIONS)[number]}`;

export function Navbar() {
  const { lang, setLang, tr, dark, toggleDark } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = NAV_SECTIONS.map((id) => ({
    label: tr(`nav.${id}` as NavKey),
    href: `#${id}`,
  }));

  /* ── scroll spy ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── smooth scroll ── */
  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    [],
  );

  /* ── close lang dropdown on outside click ── */
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? "bg-[#0f172a]/90 backdrop-blur-md shadow-sm border-b border-[#1e293b]"
            : "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-[#1E3A8A] text-xl font-bold"
        >
          AM<span className="text-[#14B8A6]">.</span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? "text-[#1E3A8A]"
                    : dark
                      ? "text-[#94a3b8] hover:text-[#14B8A6]"
                      : "text-[#475569] hover:text-[#1E3A8A]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#14B8A6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Divider */}
          <div
            className={`w-px h-5 ${dark ? "bg-[#334155]" : "bg-[#e2e8f0]"}`}
          />

          {/* Language selector */}
          <LanguageDropdown
            lang={lang}
            setLang={setLang}
            langOpen={langOpen}
            setLangOpen={setLangOpen}
            dark={dark}
          />

          {/* Dark mode toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className={`p-2 rounded-lg transition-colors ${
              dark
                ? "text-[#fbbf24] hover:bg-[#1e293b]"
                : "text-[#475569] hover:bg-[#f1f5f9]"
            }`}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun className="w-[1.125rem] h-[1.125rem]" />
            ) : (
              <Moon className="w-[1.125rem] h-[1.125rem]" />
            )}
          </motion.button>
        </div>

        {/* ── Mobile right controls ── */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageDropdown
            lang={lang}
            setLang={setLang}
            langOpen={langOpen}
            setLangOpen={setLangOpen}
            dark={dark}
            compact
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className={`p-2 rounded-lg ${dark ? "text-[#fbbf24]" : "text-[#475569]"}`}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>

          <button
            className={`p-1 ${dark ? "text-white" : "text-[#0f172a]"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t shadow-lg overflow-hidden ${
              dark
                ? "bg-[#0f172a] border-[#1e293b]"
                : "bg-white border-[#e2e8f0]"
            }`}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={`font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#1E3A8A]"
                      : dark
                        ? "text-[#94a3b8] hover:text-white"
                        : "text-[#475569] hover:text-[#1E3A8A]"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────────
   LanguageDropdown — extracted presentational
   ───────────────────────────────────────────── */

interface LanguageDropdownProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  langOpen: boolean;
  setLangOpen: (v: boolean) => void;
  dark: boolean;
  compact?: boolean;
}

function LanguageDropdown({
  lang,
  setLang,
  langOpen,
  setLangOpen,
  dark,
  compact = false,
}: LanguageDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLangOpen(!langOpen);
        }}
        className={`flex items-center gap-1.5 text-sm font-medium rounded-lg transition-colors ${
          compact
            ? `px-2 py-1.5 ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`
            : `px-2.5 py-1.5 ${
                dark
                  ? "text-[#94a3b8] hover:text-white hover:bg-[#1e293b]"
                  : "text-[#475569] hover:text-[#1E3A8A] hover:bg-[#f1f5f9]"
              }`
        }`}
        aria-label="Select language"
        aria-expanded={langOpen}
      >
        <Globe className="w-4 h-4" />
        {LANG_LABELS[lang]}
      </button>

      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 top-full mt-1.5 rounded-lg shadow-xl border overflow-hidden z-50 ${
              dark
                ? "bg-[#1e293b] border-[#334155]"
                : "bg-white border-[#e2e8f0]"
            }`}
          >
            {LANG_OPTIONS.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setLangOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors ${
                  lang === l
                    ? "text-[#1E3A8A] bg-[#1E3A8A]/10 font-semibold"
                    : dark
                      ? "text-[#94a3b8] hover:bg-[#334155]"
                      : "text-[#475569] hover:bg-[#f8fafc]"
                }`}
              >
                <span className="w-6">{LANG_LABELS[l]}</span>
                <span>{LANG_FULL[l]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
