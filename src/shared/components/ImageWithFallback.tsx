import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1E3A8A]/20 to-[#14B8A6]/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-4xl font-bold text-[#1E3A8A]/60 select-none">
          AM
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
