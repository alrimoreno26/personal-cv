import { Mail, Linkedin, Phone, Heart } from "lucide-react";
import { motion } from "motion/react";
import type { TranslationKeys } from "@/shared/i18n";

interface FooterSectionProps {
  dark: boolean;
  tr: (key: TranslationKeys) => string;
}

const CTA_ITEMS = [
  { Icon: Mail, href: "mailto:alrimoreno2606@gmail.com", labelKey: "footer.cta" as const },
  { Icon: Linkedin, href: "https://linkedin.com/in/alrimoreno", labelKey: "footer.cta" as const },
  { Icon: Phone, href: "tel:+5548988044557", labelKey: "footer.call" as const },
] as const;

export function FooterSection({ tr }: FooterSectionProps) {
  return (
    <footer id="contact" className="bg-[#0f172a] text-white">
      {/* Quote */}
      <div className="py-16 px-6 border-b border-[#1e293b]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-xl md:text-2xl italic text-[#94a3b8]"
        >
          "{tr("footer.quote")}"
        </motion.p>
      </div>

      {/* CTA Buttons */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
          {CTA_ITEMS.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              target={item.Icon === Linkedin ? "_blank" : undefined}
              rel={item.Icon === Linkedin ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1e293b] hover:bg-[#1E3A8A] transition-colors text-sm font-medium"
            >
              <item.Icon className="w-4 h-4" />
              {tr(item.labelKey)}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 px-6 border-t border-[#1e293b]">
        <p className="text-center text-sm text-[#94a3b8]">
          {tr("footer.made")}{" "}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="inline-block text-red-500"
          >
            <Heart className="w-4 h-4 inline fill-current" />
          </motion.span>{" "}
          {tr("footer.by")} Alejandro Ricardo Moreno &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
