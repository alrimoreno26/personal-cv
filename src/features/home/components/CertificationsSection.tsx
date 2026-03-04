import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import type { TranslationKeys } from "@/shared/i18n";

interface CertificationsSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

const CERTIFICATIONS = [
  {
    title: "AI for Leaders",
    issuer: "StartSe Tech Academy",
    url: "https://lms.startse.com/certificado/v2/68151fb72f3d6e31b1932a40?studentId=690dd95ff50441af03aa89ef",
    code: "StartSe",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/37533NTYSXPS",
    code: "37533NTYSXPS",
  },
   {
    title: "Project Initiation: Starting a Successful Project",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/AB6KLJ67MUUM",
    code: "AB6KLJ67MUUM",
  },  
  {
    title: "Project Execution: Running the Project",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/6HTZSF4HCV8P",
    code: "6HTZSF4HCV8P",
  },
  {
    title: "Project Planning: Putting It All Together",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/AU382F353HAN",
    code: "AU382F353HAN",
  }, 
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function CertificationsSection({
  dark,
  tr,
}: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className={`py-24 ${dark ? "bg-[#0c1222]" : "bg-white"}`}
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
            {tr("cert.title")}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.a
              key={cert.code}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: dark
                  ? "0 16px 40px rgba(20,184,166,0.12)"
                  : "0 16px 40px rgba(30,58,138,0.1)",
              }}
              className={`group rounded-xl p-6 border transition-colors block ${
                dark
                  ? "bg-[#111b30] border-[#1e293b] hover:border-[#14B8A6]/40"
                  : "bg-[#f8fafc] border-[#e2e8f0] hover:border-[#1E3A8A]/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    dark ? "bg-[#14B8A6]/15" : "bg-[#1E3A8A]/10"
                  }`}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Award
                    className={`w-6 h-6 ${dark ? "text-[#14B8A6]" : "text-[#1E3A8A]"}`}
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`mb-1 font-semibold text-[0.95rem] leading-snug ${dark ? "text-white" : "text-[#0f172a]"}`}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`text-sm ${dark ? "text-[#64748b]" : "text-[#94a3b8]"}`}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-[#1E3A8A] group-hover:text-[#14B8A6] transition-colors">
                <span>{tr("cert.view")}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
