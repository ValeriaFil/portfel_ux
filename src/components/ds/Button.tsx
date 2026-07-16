"use client";

import React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  style?: React.CSSProperties;
}

/**
 * Button — the portfolio's pill action. Signature variant is the magenta→pink
 * gradient with white Poppins label; outline is a pink-bordered ghost.
 */
export function Button({
  children = "Contact",
  variant = "primary",
  size = "md",
  as = "button",
  style = {},
  ...rest
}: ButtonProps) {
  const sizes: Record<Size, React.CSSProperties> = {
    sm: { padding: "12px 28px", fontSize: 15 },
    md: { padding: "16px 38px", fontSize: 17 },
    lg: { padding: "21px 42px", fontSize: 18 },
  };
  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      background: "var(--gradient-pink)",
      color: "var(--color-white)",
      border: "none",
    },
    outline: {
      background: "transparent",
      color: "var(--color-pink)",
      border: "1px solid var(--color-pink)",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-ink)",
      border: "1px solid var(--color-line)",
    },
  };
  const Tag = as as React.ElementType;
  return (
    <Tag
      className="vf-button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontFamily: "var(--font-button)",
        fontWeight: 600,
        lineHeight: 1.25,
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition:
          "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out)",
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.transform = "var(--motion-lift)";
        if (variant === "primary")
          e.currentTarget.style.boxShadow = "0 8px 22px 0 rgba(253,21,86,0.30)";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
