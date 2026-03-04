interface SectionShellProps {
  id: string;
  title: string;
  subtitle: string;
  dark: boolean;
  children?: React.ReactNode;
}

export function SectionShell({
  id,
  title,
  subtitle,
  dark,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 ${
        dark ? "bg-[#0f172a] text-white" : "bg-white text-[#0f172a]"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p
            className={`text-base ${dark ? "text-[#94a3b8]" : "text-[#64748b]"}`}
          >
            {subtitle}
          </p>
          <div className="w-20 h-1 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}
