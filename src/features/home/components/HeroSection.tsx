import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/shared/components/ImageWithFallback";
import type { TranslationKeys } from "@/shared/i18n";

interface HeroSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

const PROFILE_IMG = `${import.meta.env.BASE_URL}Alejandro_perfil.png`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function HeroSection({ dark, tr }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = (factor: number) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  return (
    <section
      className={`min-h-screen flex items-center relative overflow-hidden ${
        dark
          ? "bg-gradient-to-br from-[#0b1120] to-[#111b30]"
          : "bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]"
      }`}
    >
      {/* Parallax background blobs */}
      <motion.div
        className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/3 ${
          dark ? "bg-[#1E3A8A]/10" : "bg-[#1E3A8A]/5"
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={parallax(-0.15)}
      />
      <motion.div
        className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/2 -translate-x-1/3 ${
          dark ? "bg-[#14B8A6]/10" : "bg-[#14B8A6]/5"
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={parallax(-0.1)}
      />
      {/* Extra floating element */}
      <motion.div
        className={`absolute top-1/3 right-1/4 w-48 h-48 rounded-full hidden lg:block ${
          dark ? "bg-[#6366f1]/5" : "bg-[#6366f1]/[0.03]"
        }`}
        style={parallax(-0.2)}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: text content ── */}
          <div>
            <motion.div
              {...fadeUp(0.1)}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 ${
                dark
                  ? "bg-[#14B8A6]/15 text-[#14B8A6]"
                  : "bg-[#1E3A8A]/10 text-[#1E3A8A]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="text-sm">{tr("hero.badge")}</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 leading-tight ${
                dark ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Alejandro Ricardo
              <br />
              <span className="text-[#1E3A8A]">Moreno</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className={`text-xl md:text-2xl mt-4 mb-6 font-medium ${
                dark ? "text-[#14B8A6]" : "text-[#1E3A8A]"
              }`}
            >
              {tr("hero.title")}
            </motion.p>

            <motion.p
              {...fadeUp(0.45)}
              className={`max-w-lg mb-8 leading-relaxed ${
                dark ? "text-[#94a3b8]" : "text-[#64748b]"
              }`}
            >
              {tr("hero.desc")}
            </motion.p>

            {/* Contact info chips */}
            <motion.div
              {...fadeUp(0.55)}
              className={`flex flex-wrap gap-4 mb-8 text-sm ${
                dark ? "text-[#94a3b8]" : "text-[#475569]"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Florianópolis, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <a
                  href="mailto:alrimoreno2606@gmail.com"
                  className="hover:text-[#1E3A8A] transition-colors break-all"
                >
                  alrimoreno2606@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>+55 48 99135-2738</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/alrimoreno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#1e3a8a]/90 hover:scale-105 active:scale-95 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:alrimoreno2606@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border hover:scale-105 active:scale-95 transition-all ${
                  dark
                    ? "border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6]/10"
                    : "border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A]/5"
                }`}
              >
                <Mail className="w-4 h-4" />
                {tr("hero.contact")}
              </a>
            </motion.div>
          </div>

          {/* ── Right: profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
            style={parallax(-0.05)}
          >
            <div className="relative">
              <motion.div
                className={`w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 shadow-2xl relative z-10 ${
                  dark
                    ? "border-[#1e293b] shadow-[#14B8A6]/10 bg-gradient-to-br from-[#1E3A8A]/30 to-[#14B8A6]/20"
                    : "border-white shadow-[#1E3A8A]/10 bg-gradient-to-br from-[#1E3A8A]/20 to-[#14B8A6]/20"
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src={PROFILE_IMG}
                  alt="Alejandro Ricardo Moreno"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-[#14B8A6]/20 z-0"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-[#1E3A8A]/10 z-0"
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to about section"
      >
        <ChevronDown
          className={`w-6 h-6 ${dark ? "text-[#14B8A6]/50" : "text-[#1E3A8A]/50"}`}
        />
      </motion.button>
    </section>
  );
}
