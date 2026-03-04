# Alejandro Ricardo Moreno — Personal CV

A modern, responsive single-page portfolio built with **React 19**, **TypeScript**, and **Tailwind CSS 4**. Features smooth animations, dark/light theme switching, and multi-language support (EN / ES / PT).

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green)

---

## ✨ Features

- **Dark / Light Mode** — persistent theme with system preference detection
- **Internationalization (i18n)** — English, Spanish, and Portuguese translations powered by Zustand
- **Smooth Animations** — scroll-triggered entrance animations, parallax effects, and micro-interactions via Motion (Framer Motion)
- **Responsive Design** — mobile-first layout that adapts seamlessly to all screen sizes
- **Scroll Spy Navigation** — highlights the active section in the navbar as you scroll
- **Performance Focused** — lightweight bundle (~370 KB gzipped ~116 KB), no external CSS frameworks beyond Tailwind

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 19 |
| Language | TypeScript 5.9 (strict mode) |
| Styling | Tailwind CSS 4 |
| State Management | Zustand 5 |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| Build Tool | Vite 6 |
| Font | Inter (Google Fonts) |

## 📁 Project Structure

```
src/
├── features/
│   └── home/
│       ├── HomePage.tsx              # Container component (orchestrates store → sections)
│       └── components/
│           ├── HeroSection.tsx        # Parallax hero with profile photo & CTA
│           ├── AboutSection.tsx       # Bio with animated highlight cards
│           ├── SkillsSection.tsx      # 4-category skills with progress bars
│           ├── ExperienceSection.tsx   # Vertical timeline with 5 positions
│           ├── CertificationsSection.tsx  # Certification grid with external links
│           ├── EducationSection.tsx    # Education + languages with progress bars
│           └── FooterSection.tsx      # Quote, CTA buttons & animated heart
├── shared/
│   ├── components/
│   │   ├── Navbar.tsx                # Fixed navbar with scroll-spy & language dropdown
│   │   ├── BackToTop.tsx             # Animated back-to-top button
│   │   ├── Layout.tsx                # Root layout (Navbar + BackToTop + children)
│   │   ├── ImageWithFallback.tsx     # Image with initials fallback
│   │   └── ...
│   ├── hooks/
│   │   └── useTranslation.ts        # i18n hook (Zustand selectors)
│   └── i18n/
│       └── translations.ts          # Type-safe translation keys (EN/ES/PT)
├── stores/
│   ├── useAppStore.ts               # Global Zustand store (theme + lang)
│   └── types.ts                     # Store type definitions
├── App.tsx
├── main.tsx
└── index.css
```

### Architecture Principles

- **Feature-first organization** — domain sections live under `features/`
- **Presentational components** — all sections receive `dark` and `tr` as props (no internal store access)
- **Container pattern** — `HomePage` connects to the store and passes data down
- **No React Context** — global state managed exclusively through Zustand with localStorage persistence

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/alrimoreno26/personal-cv.git
cd personal-cv

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with hot reload
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Type-check + build
npm run build

# Preview the production build locally
npm run preview
```

## 🌐 Internationalization

The app supports three languages, switchable from the navbar dropdown:

| Code | Language |
|------|----------|
| `en` | English |
| `es` | Spanish |
| `pt` | Portuguese |

Language preference is persisted in `localStorage` and defaults to the browser's language.

## 🎨 Theming

Dark and light modes are toggled via the navbar button. The preference is:

1. Restored from `localStorage` on load
2. Falls back to the system's `prefers-color-scheme`
3. Persisted on every toggle

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

**Built with ❤️ by [Alejandro Ricardo Moreno](https://linkedin.com/in/alrimoreno)**
