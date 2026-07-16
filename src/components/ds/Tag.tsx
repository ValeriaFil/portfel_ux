import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  chip?: boolean;
  style?: React.CSSProperties;
}

/**
 * Tag — a hashtag-style skill label. Plain accent-colored text (no chip),
 * matching the "#Prototyping #GameDesign" rows in the career section.
 * Set chip to render a soft pink pill instead.
 */
export function Tag({
  children,
  color = "var(--color-green)",
  chip = false,
  style = {},
  ...rest
}: TagProps) {
  const base: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "var(--fs-body)",
    lineHeight: 1.4,
    whiteSpace: "nowrap",
  };
  if (chip) {
    return (
      <span
        style={{
          ...base,
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 14px",
          borderRadius: "var(--radius-pill)",
          background: "var(--color-surface-pink)",
          color: "var(--color-pink-deep)",
          fontWeight: 500,
          ...style,
        }}
        {...rest}
      >
        {children}
      </span>
    );
  }
  return (
    <span style={{ ...base, color, ...style }} {...rest}>
      {children}
    </span>
  );
}
