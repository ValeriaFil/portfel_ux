import React from "react";

type Size = "xl" | "l" | "m";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: string;
  size?: Size;
  align?: React.CSSProperties["textAlign"];
  weight?: number;
  style?: React.CSSProperties;
}

/**
 * SectionHeading — the big uppercase Rubik display heading that opens each
 * portfolio section. Color is the per-section accent (blue, green, purple…).
 */
export function SectionHeading({
  children,
  color = "var(--color-green)",
  size = "m",
  align = "center",
  weight = 700,
  style = {},
  ...rest
}: SectionHeadingProps) {
  const sizes: Record<Size, string> = {
    xl: "var(--fs-display-xl)",
    l: "var(--fs-display-l)",
    m: "var(--fs-display-m)",
  };
  return (
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: weight,
        fontSize: sizes[size] || sizes.m,
        lineHeight: 1.2,
        textTransform: "uppercase",
        textAlign: align,
        color,
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </h2>
  );
}
