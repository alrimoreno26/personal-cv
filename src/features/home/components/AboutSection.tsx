import { motion } from "motion/react";
import { Code2, Users, Layers, Zap } from "lucide-react";
import type { TranslationKeys } from "@/shared/i18n";

interface AboutSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const HIGHLIGHTS = [
  { Icon: Code2, labelKey: "about.years" as const, descKey: "about.years.desc" as const },
  { Icon: Layers, labelKey: "about.expert" as const, descKey: "about.expert.desc" as const },
  { Icon: Users, labelKey: "about.leader" as const, descKey: "about.leader.desc" as const },
  { Icon: Zap, labelKey: "about.perf" as const, descKey: "about.perf.desc" as const },
];

const PARAGRAPH_KEYS = ["about.p1", "about.p2", "about.p3"] as const;

export function AboutSection({ dark, tr }: AboutSectionProps) {
  const highlights = HIGHLIGHTS.map((h) => ({
    Icon: h.Icon,
    label: tr(h.labelKey),
    desc: tr(h.descKey),
  }));

  const paragraphs = PARAGRAPH_KEYS.map((k) => tr(k));

  return (
    <section
      id="about"
      className={`py-24 ${dark ? "bg-[#0f172a]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className={`text-3xl font-bold mb-2 ${dark ? "text-white" : "text-[#0f172a]"}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {tr("about.title")}
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-[#14B8A6] rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Paragraphs */}
            <div className="lg:col-span-3 space-y-4">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  className={dark ? "text-[#94a3b8]" : "text-[#475569]"}
                  style={{ lineHeight: 1.8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Highlight cards */}
            <motion.div
              className="lg:col-span-2 grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: dark
                      ? "0 12px 30px rgba(20,184,166,0.1)"
                      : "0 12px 30px rgba(30,58,138,0.1)",
                  }}
                  className={`rounded-xl p-5 border transition-colors cursor-default ${
                    dark
                      ? "bg-[#111b30] border-[#1e293b] hover:border-[#14B8A6]/30"
                      : "bg-[#f8fafc] border-[#e2e8f0] hover:border-[#14B8A6]/30"
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.Icon className="w-8 h-8 text-[#1E3A8A] mb-3" />
                  </motion.div>
                  <p
                    className={`font-semibold ${dark ? "text-white" : "text-[#0f172a]"}`}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-[#64748b]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
