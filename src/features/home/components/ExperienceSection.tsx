import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import type { TranslationKeys } from "@/shared/i18n";

interface ExperienceSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

interface Experience {
  company: string;
  roleKey: TranslationKeys;
  period: string;
  pointKeys: TranslationKeys[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "Zup Innovation",
    roleKey: "exp.zup.role",
    period: "2025 – 2026",
    pointKeys: ["exp.zup.1", "exp.zup.2", "exp.zup.3", "exp.zup.4"],
  },
  {
    company: "Linkapital",
    roleKey: "exp.link.role",
    period: "2022 – 2024",
    pointKeys: ["exp.link.1", "exp.link.2", "exp.link.3", "exp.link.4"],
  },
  {
    company: "Solinftec",
    roleKey: "exp.sol.role",
    period: "2019 – 2020",
    pointKeys: ["exp.sol.1", "exp.sol.2", "exp.sol.3"],
  },
  {
    company: "Freelancer",
    roleKey: "exp.free.role",
    period: "2018 – 2019",
    pointKeys: ["exp.free.1", "exp.free.2"],
  },
  {
    company: "DATYS",
    roleKey: "exp.datys.role",
    period: "2014 – 2016",
    pointKeys: ["exp.datys.1", "exp.datys.2", "exp.datys.3"],
  },
];

export function ExperienceSection({ dark, tr }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className={`py-24 ${dark ? "bg-[#0f172a]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className={`text-3xl font-bold mb-2 ${dark ? "text-white" : "text-[#0f172a]"}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {tr("exp.title")}
          </motion.h2>
          <motion.div
            className="h-1 bg-[#14B8A6] rounded-full mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className={`absolute left-6 md:left-8 top-0 w-0.5 origin-top ${dark ? "bg-[#1e293b]" : "bg-[#e2e8f0]"}`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ bottom: 0 }}
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-3.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-[#1E3A8A] border-4 shadow-md z-10"
                  style={{ borderColor: dark ? "#0f172a" : "#ffffff" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: idx * 0.1 + 0.15,
                  }}
                />

                <motion.div
                  className={`rounded-xl p-6 border transition-colors ${
                    dark
                      ? "bg-[#111b30] border-[#1e293b] hover:border-[#14B8A6]/20"
                      : "bg-[#f8fafc] border-[#e2e8f0] hover:border-[#1E3A8A]/20"
                  }`}
                  whileHover={{
                    y: -3,
                    boxShadow: dark
                      ? "0 10px 30px rgba(20,184,166,0.06)"
                      : "0 10px 30px rgba(30,58,138,0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3
                        className={`text-lg font-semibold ${dark ? "text-white" : "text-[#0f172a]"}`}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className={`font-medium ${dark ? "text-[#14B8A6]" : "text-[#1E3A8A]"}`}
                      >
                        {tr(exp.roleKey)}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0 w-fit ${
                        dark
                          ? "bg-[#14B8A6]/15 text-[#14B8A6]"
                          : "bg-[#1E3A8A]/10 text-[#1E3A8A]"
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.pointKeys.map((key, pIdx) => (
                      <motion.li
                        key={key}
                        className={`flex items-start gap-2 text-sm ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.1 + pIdx * 0.06 + 0.25,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                        {tr(key)}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
