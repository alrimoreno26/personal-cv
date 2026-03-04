export type Lang = "en" | "es" | "pt";

export type TranslationKeys =
  // Nav
  | "nav.about"
  | "nav.skills"
  | "nav.experience"
  | "nav.certifications"
  | "nav.education"
  | "nav.contact"
  // Hero
  | "hero.badge"
  | "hero.title"
  | "hero.desc"
  | "hero.contact"
  // About
  | "about.title"
  | "about.p1"
  | "about.p2"
  | "about.p3"
  | "about.years"
  | "about.years.desc"
  | "about.expert"
  | "about.expert.desc"
  | "about.leader"
  | "about.leader.desc"
  | "about.perf"
  | "about.perf.desc"
  // Skills
  | "skills.title"
  | "skills.frontend"
  | "skills.architecture"
  | "skills.cloud"
  | "skills.backend"
  // Experience
  | "exp.title"
  | "exp.zup.role"
  | "exp.zup.1"
  | "exp.zup.2"
  | "exp.zup.3"
  | "exp.zup.4"
  | "exp.link.role"
  | "exp.link.1"
  | "exp.link.2"
  | "exp.link.3"
  | "exp.link.4"
  | "exp.sol.role"
  | "exp.sol.1"
  | "exp.sol.2"
  | "exp.sol.3"
  | "exp.free.role"
  | "exp.free.1"
  | "exp.free.2"
  | "exp.datys.role"
  | "exp.datys.1"
  | "exp.datys.2"
  | "exp.datys.3"
  // Certifications
  | "cert.title"
  | "cert.view"
  // Education
  | "edu.title"
  | "edu.cs"
  | "edu.it"
  // Languages
  | "lang.title"
  | "lang.spanish"
  | "lang.portuguese"
  | "lang.english"
  | "lang.native"
  | "lang.advanced"
  | "lang.intermediate"
  // Footer
  | "footer.quote"
  | "footer.cta"
  | "footer.call"
  | "footer.made"
  | "footer.by";

type Translations = Record<Lang, Record<TranslationKeys, string>>;

export const translations: Translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.education": "Education",
    "nav.contact": "Contact",
    // Hero
    "hero.badge": "Available for new opportunities",
    "hero.title": "Senior Frontend Developer",
    "hero.desc":
      "Frontend developer with 9+ years of experience building scalable, high-performance web applications using Angular, React and modern frontend architectures. Strong focus on UI quality, performance and scalable design systems.",
    "hero.contact": "Contact Me",
    // About
    "about.title": "About Me",
    "about.p1":
      "I'm a passionate Senior Frontend Developer with over 9 years of experience in software development, specializing in building enterprise-grade web applications. My expertise spans across Angular, React, and TypeScript, with deep knowledge of modern frontend architectures including micro-frontends and design systems.",
    "about.p2":
      "Throughout my career, I've worked in fintech and corporate environments, where I've led frontend teams, conducted code reviews, and made critical architecture decisions. I'm passionate about mentoring developers and building scalable solutions that deliver real business value.",
    "about.p3":
      "I have extensive experience integrating with REST APIs, building BFF architectures, and working within agile methodologies. My focus is always on delivering high-quality UI with exceptional performance and user experience.",
    "about.years": "9+ Years",
    "about.years.desc": "Software Development",
    "about.expert": "Frontend Expert",
    "about.expert.desc": "Angular, React, TypeScript",
    "about.leader": "Team Leader",
    "about.leader.desc": "Mentoring & Code Review",
    "about.perf": "Performance",
    "about.perf.desc": "Scalable Architectures",
    // Skills
    "skills.title": "Skills & Technologies",
    "skills.frontend": "Frontend",
    "skills.architecture": "Architecture",
    "skills.cloud": "Cloud & DevOps",
    "skills.backend": "Backend & Data",
    // Experience
    "exp.title": "Professional Experience",
    "exp.zup.role": "Senior Frontend Developer",
    "exp.zup.1": "Development of complex UI using design systems",
    "exp.zup.2": "Reusable component architecture",
    "exp.zup.3": "Cloud integrations & micro-frontend architecture",
    "exp.zup.4": "AWS services and CI/CD pipelines",
    "exp.link.role": "Frontend Lead",
    "exp.link.1": "Technical leadership of frontend team",
    "exp.link.2": "Code review and architecture decisions",
    "exp.link.3": "Integration with external APIs (Serasa, Receita Federal, BigDataCorp)",
    "exp.link.4": "Angular enterprise applications",
    "exp.sol.role": "Frontend Developer",
    "exp.sol.1": "Responsive UI development",
    "exp.sol.2": "Interactive components",
    "exp.sol.3": "UX optimization",
    "exp.free.role": "Developer",
    "exp.free.1": "Custom web applications",
    "exp.free.2": "SEO optimization",
    "exp.datys.role": "Developer / Project Lead",
    "exp.datys.1": "Software development",
    "exp.datys.2": "Technical leadership",
    "exp.datys.3": "Requirements analysis",
    // Certifications
    "cert.title": "Certifications",
    "cert.view": "View Certificate",
    // Education
    "edu.title": "Education",
    "edu.cs": "Computer Science Engineering",
    "edu.it": "IT Technical Degree",
    // Languages
    "lang.title": "Languages",
    "lang.spanish": "Spanish",
    "lang.portuguese": "Portuguese",
    "lang.english": "English",
    "lang.native": "Native",
    "lang.advanced": "Advanced",
    "lang.intermediate": "Intermediate",
    // Footer
    "footer.quote":
      "Building scalable and high-performance frontend applications that deliver real business value.",
    "footer.cta": "Get in Touch",
    "footer.call": "Call Me",
    "footer.made": "Made with",
    "footer.by": "by",
  },
  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.certifications": "Certificaciones",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    // Hero
    "hero.badge": "Disponible para nuevas oportunidades",
    "hero.title": "Desarrollador Frontend Senior",
    "hero.desc":
      "Desarrollador frontend con más de 9 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento utilizando Angular, React y arquitecturas frontend modernas. Fuerte enfoque en calidad de UI, rendimiento y sistemas de diseño escalables.",
    "hero.contact": "Contáctame",
    // About
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy un apasionado Desarrollador Frontend Senior con más de 9 años de experiencia en desarrollo de software, especializado en aplicaciones web de nivel empresarial. Mi experiencia abarca Angular, React y TypeScript, con conocimiento profundo de arquitecturas frontend modernas incluyendo micro-frontends y sistemas de diseño.",
    "about.p2":
      "A lo largo de mi carrera, he trabajado en entornos fintech y corporativos, donde he liderado equipos frontend, realizado revisiones de código y tomado decisiones críticas de arquitectura. Me apasiona mentorar desarrolladores y construir soluciones escalables que entreguen valor real de negocio.",
    "about.p3":
      "Tengo amplia experiencia integrando APIs REST, construyendo arquitecturas BFF y trabajando con metodologías ágiles. Mi enfoque siempre está en entregar UI de alta calidad con rendimiento excepcional y experiencia de usuario.",
    "about.years": "9+ Años",
    "about.years.desc": "Desarrollo de Software",
    "about.expert": "Experto Frontend",
    "about.expert.desc": "Angular, React, TypeScript",
    "about.leader": "Líder de Equipo",
    "about.leader.desc": "Mentoría & Code Review",
    "about.perf": "Rendimiento",
    "about.perf.desc": "Arquitecturas Escalables",
    // Skills
    "skills.title": "Habilidades & Tecnologías",
    "skills.frontend": "Frontend",
    "skills.architecture": "Arquitectura",
    "skills.cloud": "Cloud & DevOps",
    "skills.backend": "Backend & Datos",
    // Experience
    "exp.title": "Experiencia Profesional",
    "exp.zup.role": "Desarrollador Frontend Senior",
    "exp.zup.1": "Desarrollo de UI complejas utilizando sistemas de diseño",
    "exp.zup.2": "Arquitectura de componentes reutilizables",
    "exp.zup.3": "Integraciones cloud y arquitectura micro-frontend",
    "exp.zup.4": "Servicios AWS y pipelines CI/CD",
    "exp.link.role": "Líder Frontend",
    "exp.link.1": "Liderazgo técnico del equipo frontend",
    "exp.link.2": "Revisión de código y decisiones de arquitectura",
    "exp.link.3": "Integración con APIs externas (Serasa, Receita Federal, BigDataCorp)",
    "exp.link.4": "Aplicaciones empresariales Angular",
    "exp.sol.role": "Desarrollador Frontend",
    "exp.sol.1": "Desarrollo de UI responsiva",
    "exp.sol.2": "Componentes interactivos",
    "exp.sol.3": "Optimización UX",
    "exp.free.role": "Desarrollador",
    "exp.free.1": "Aplicaciones web personalizadas",
    "exp.free.2": "Optimización SEO",
    "exp.datys.role": "Desarrollador / Líder de Proyecto",
    "exp.datys.1": "Desarrollo de software",
    "exp.datys.2": "Liderazgo técnico",
    "exp.datys.3": "Análisis de requerimientos",
    // Certifications
    "cert.title": "Certificaciones",
    "cert.view": "Ver Certificado",
    // Education
    "edu.title": "Educación",
    "edu.cs": "Ingeniería en Ciencias Informáticas",
    "edu.it": "Técnico en Informática",
    // Languages
    "lang.title": "Idiomas",
    "lang.spanish": "Español",
    "lang.portuguese": "Portugués",
    "lang.english": "Inglés",
    "lang.native": "Nativo",
    "lang.advanced": "Avanzado",
    "lang.intermediate": "Intermedio",
    // Footer
    "footer.quote":
      "Construyendo aplicaciones frontend escalables y de alto rendimiento que entregan valor real de negocio.",
    "footer.cta": "Contáctame",
    "footer.call": "Llámame",
    "footer.made": "Hecho con",
    "footer.by": "por",
  },
  pt: {
    // Nav
    "nav.about": "Sobre mim",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiência",
    "nav.certifications": "Certificações",
    "nav.education": "Educação",
    "nav.contact": "Contato",
    // Hero
    "hero.badge": "Disponível para novas oportunidades",
    "hero.title": "Desenvolvedor Frontend Sênior",
    "hero.desc":
      "Desenvolvedor frontend com mais de 9 anos de experiência construindo aplicações web escaláveis e de alto desempenho utilizando Angular, React e arquiteturas frontend modernas. Forte foco em qualidade de UI, performance e design systems escaláveis.",
    "hero.contact": "Contato",
    // About
    "about.title": "Sobre Mim",
    "about.p1":
      "Sou um apaixonado Desenvolvedor Frontend Sênior com mais de 9 anos de experiência em desenvolvimento de software, especializado em aplicações web de nível empresarial. Minha experiência abrange Angular, React e TypeScript, com conhecimento profundo de arquiteturas frontend modernas incluindo micro-frontends e design systems.",
    "about.p2":
      "Ao longo da minha carreira, trabalhei em ambientes fintech e corporativos, onde liderei equipes frontend, realizei code reviews e tomei decisões críticas de arquitetura. Sou apaixonado por mentorar desenvolvedores e construir soluções escaláveis que entreguem valor real de negócio.",
    "about.p3":
      "Tenho ampla experiência integrando APIs REST, construindo arquiteturas BFF e trabalhando com metodologias ágeis. Meu foco é sempre entregar UI de alta qualidade com performance excepcional e experiência do usuário.",
    "about.years": "9+ Anos",
    "about.years.desc": "Desenvolvimento de Software",
    "about.expert": "Especialista Frontend",
    "about.expert.desc": "Angular, React, TypeScript",
    "about.leader": "Líder de Equipe",
    "about.leader.desc": "Mentoria & Code Review",
    "about.perf": "Performance",
    "about.perf.desc": "Arquiteturas Escaláveis",
    // Skills
    "skills.title": "Habilidades & Tecnologias",
    "skills.frontend": "Frontend",
    "skills.architecture": "Arquitetura",
    "skills.cloud": "Cloud & DevOps",
    "skills.backend": "Backend & Dados",
    // Experience
    "exp.title": "Experiência Profissional",
    "exp.zup.role": "Desenvolvedor Frontend Sênior",
    "exp.zup.1": "Desenvolvimento de UI complexas utilizando design systems",
    "exp.zup.2": "Arquitetura de componentes reutilizáveis",
    "exp.zup.3": "Integrações cloud e arquitetura micro-frontend",
    "exp.zup.4": "Serviços AWS e pipelines CI/CD",
    "exp.link.role": "Líder Frontend",
    "exp.link.1": "Liderança técnica da equipe frontend",
    "exp.link.2": "Code review e decisões de arquitetura",
    "exp.link.3": "Integração com APIs externas (Serasa, Receita Federal, BigDataCorp)",
    "exp.link.4": "Aplicações empresariais Angular",
    "exp.sol.role": "Desenvolvedor Frontend",
    "exp.sol.1": "Desenvolvimento de UI responsiva",
    "exp.sol.2": "Componentes interativos",
    "exp.sol.3": "Otimização de UX",
    "exp.free.role": "Desenvolvedor",
    "exp.free.1": "Aplicações web personalizadas",
    "exp.free.2": "Otimização SEO",
    "exp.datys.role": "Desenvolvedor / Líder de Projeto",
    "exp.datys.1": "Desenvolvimento de software",
    "exp.datys.2": "Liderança técnica",
    "exp.datys.3": "Análise de requisitos",
    // Certifications
    "cert.title": "Certificações",
    "cert.view": "Ver Certificado",
    // Education
    "edu.title": "Educação",
    "edu.cs": "Engenharia em Ciência da Computação",
    "edu.it": "Técnico em Informática",
    // Languages
    "lang.title": "Idiomas",
    "lang.spanish": "Espanhol",
    "lang.portuguese": "Português",
    "lang.english": "Inglês",
    "lang.native": "Nativo",
    "lang.advanced": "Avançado",
    "lang.intermediate": "Intermediário",
    // Footer
    "footer.quote":
      "Construindo aplicações frontend escaláveis e de alto desempenho que entregam valor real de negócio.",
    "footer.cta": "Entre em Contato",
    "footer.call": "Me Ligue",
    "footer.made": "Feito com",
    "footer.by": "por",
  },
};

export function translate(lang: Lang, key: TranslationKeys): string {
  return translations[lang][key];
}
