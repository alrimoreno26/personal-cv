import { useAppStore } from "@/stores";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const theme = useAppStore((s) => s.theme);

  return (
    <header
      className={`sticky top-0 z-10 border-b px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "border-gray-700 bg-gray-900/80 text-white"
          : "border-gray-200 bg-white/80 text-gray-900"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight sm:text-xl">
          Personal CV
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
