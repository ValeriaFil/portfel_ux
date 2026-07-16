import React from "react";

/**
 * AboutIcon — the three pink capability glyphs used in the About section:
 * palette, compass and handshake. Rendered in the brand pink (#DA2255).
 */
export function AboutIcon({
  name,
  size = 32,
}: {
  name: "palette" | "compass" | "handshake";
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-pink-rose)",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "compass") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    );
  }

  if (name === "handshake") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    );
  }

  // palette
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="13.5" cy="6.5" r=".5" fill="var(--color-pink-rose)" />
      <circle cx="17.5" cy="10.5" r=".5" fill="var(--color-pink-rose)" />
      <circle cx="8.5" cy="7.5" r=".5" fill="var(--color-pink-rose)" />
      <circle cx="6.5" cy="12.5" r=".5" fill="var(--color-pink-rose)" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}
