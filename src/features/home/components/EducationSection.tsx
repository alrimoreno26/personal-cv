import { GraduationCap, Globe } from "lucide-react";
import { motion } from "motion/react";
import type { TranslationKeys } from "@/shared/i18n";

interface EducationSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

const EDUCATION = [
  { key: "edu.cs" as const, institution: "UCI — Universidad de las Ciencias Informáticas", period: "2008 — 2014" },
  { key: "edu.it" as const, institution: "IPI — Instituto Politécnico Informática", period: "2005 — 2007" },
] as const;

const LANGUAGES = [
  { key: "lang.spanish" as const, levelKey: "lang.native" as const, pct: 100, gradient: "from-[#1E3A8A] to-[#3B82F6]" },
  { key: "lang.portuguese" as const, levelKey: "lang.advanced" as const, pct: 90, gradient: "from-[#14B8A6] to-[#5EEAD4]" },
  { key: "lang.english" as const, levelKey: "lang.intermediate" as const, pct: 65, gradient: "from-[#8B5CF6] to-[#C4B5FD]" },
] as const;

export function EducationSection({ dark, tr }: EducationSectionProps) {
  return (
    <section id="education" className={`py-20 px-6 ${dark ? "bg-[#0f172a]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? "text-white" : "text-[#0f172a]"}`}>
            {tr("edu.title")}
          </h2>
        </motion.div>

        {/* Two-column: Education + Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-8 ${dark ? "bg-[#1e293b]" : "bg-[#f1f5f9]"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <h3 className={`text-xl font-semibold ${dark ? "text-white" : "text-[#0f172a]"}`}>
                {tr("edu.title")}
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.key} className="relative pl-6 border-l-2 border-[#1E3A8A]/20">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#1E3A8A]" />
                  <h4 className={`font-semibold ${dark ? "text-white" : "text-[#0f172a]"}`}>
                    {tr(edu.key)}
                  </h4>
                  <p className={`text-sm mt-1 ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>
                    {edu.institution}
                  </p>
                  <span className="text-xs text-[#1E3A8A] font-medium mt-1 inline-block">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-8 ${dark ? "bg-[#1e293b]" : "bg-[#f1f5f9]"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#14B8A6]" />
              </div>
              <h3 className={`text-xl font-semibold ${dark ? "text-white" : "text-[#0f172a]"}`}>
                {tr("lang.title")}
              </h3>
            </div>

            <div className="space-y-5">
              {LANGUAGES.map((lang) => (
                <div key={lang.key}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${dark ? "text-white" : "text-[#0f172a]"}`}>
                      {tr(lang.key)}
                    </span>
                    <span className={`text-sm ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>
                      {tr(lang.levelKey)}
                    </span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${dark ? "bg-[#334155]" : "bg-[#e2e8f0]"}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full rounded-full bg-gradient-to-r ${lang.gradient}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
