import { useAppStore } from "@/stores";

export function Footer() {
  const theme = useAppStore((s) => s.theme);

  return (
    <footer
      className={`border-t px-4 py-6 text-center text-sm sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "border-gray-700 bg-gray-900 text-gray-400"
          : "border-gray-200 bg-gray-50 text-gray-500"
      }`}
    >
      <p>&copy; {new Date().getFullYear()} Personal CV. All rights reserved.</p>
    </footer>
  );
}
