import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { BackToTop } from "./BackToTop";
import { useAppStore } from "@/stores";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const theme = useAppStore((s) => s.theme);
  const dark = theme === "dark";

  return (
    <div
      className={`min-h-screen w-full ${
        dark ? "bg-[#0f172a] text-white" : "bg-white text-[#0f172a]"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar />
      {children}
      <BackToTop />
    </div>
  );
}
