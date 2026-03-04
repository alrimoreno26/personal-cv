import { useTranslation } from "@/shared/hooks";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { EducationSection } from "./components/EducationSection";
import { FooterSection } from "./components/FooterSection";

/**
 * Container component: orchestrates store data → presentational children.
 */
export function HomePage() {
  const { dark, tr } = useTranslation();

  return (
    <>
      <HeroSection dark={dark} tr={tr} />
      <AboutSection dark={dark} tr={tr} />
      <SkillsSection dark={dark} tr={tr} />
      <ExperienceSection dark={dark} tr={tr} />
      <CertificationsSection dark={dark} tr={tr} />
      <EducationSection dark={dark} tr={tr} />
      <FooterSection dark={dark} tr={tr} />
    </>
  );
}
