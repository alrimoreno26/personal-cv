import { motion } from "motion/react";
import { Monitor, Building2, Cloud, Database } from "lucide-react";
import type { TranslationKeys } from "@/shared/i18n";

interface SkillsSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

interface SkillCategory {
  id: string;
  icon: typeof Monitor;
  titleKey: TranslationKeys;
  color: string;
  skills: { name: string; level: number }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    icon: Monitor,
    titleKey: "skills.frontend",
    color: "#1E3A8A",
    skills: [
      { name: "Angular", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    id: "architecture",
    icon: Building2,
    titleKey: "skills.architecture",
    color: "#14B8A6",
    skills: [
      { name: "Micro-frontends", level: 90 },
      { name: "Design Systems", level: 90 },
      { name: "BFF Architecture", level: 85 },
      { name: "API Integration", level: 90 },
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    titleKey: "skills.cloud",
    color: "#6366f1",
    skills: [
      { name: "AWS (Lambda, S3, CloudFront)", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Gitflow", level: 90 },
    ],
  },
  {
    id: "backend",
    icon: Database,
    titleKey: "skills.backend",
    color: "#f59e0b",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 60 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
];

export function SkillsSection({ dark, tr }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className={`py-24 ${dark ? "bg-[#0b1120]" : "bg-[#f8fafc]"}`}
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
            {tr("skills.title")}
          </motion.h2>
          <motion.div
            className="h-1 bg-[#14B8A6] rounded-full mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: dark
                  ? "0 16px 40px rgba(20,184,166,0.08)"
                  : "0 16px 40px rgba(0,0,0,0.08)",
              }}
              className={`rounded-xl p-6 border transition-colors ${
                dark
                  ? "bg-[#111b30] border-[#1e293b]"
                  : "bg-white border-[#e2e8f0]"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: category.color + "15" }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon
                    className="w-5 h-5"
                    style={{ color: category.color }}
                  />
                </motion.div>
                <h3
                  className={`text-lg font-semibold ${dark ? "text-white" : "text-[#0f172a]"}`}
                >
                  {tr(category.titleKey)}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span
                        className={`text-sm ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}
                      >
                        {skill.name}
                      </span>
                      <motion.span
                        className={`text-sm ${dark ? "text-[#475569]" : "text-[#94a3b8]"}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + skillIdx * 0.08 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${dark ? "bg-[#1e293b]" : "bg-[#f1f5f9]"}`}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + skillIdx * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
