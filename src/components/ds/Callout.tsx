import React from "react";
import { IconBadge } from "./IconBadge";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  style?: React.CSSProperties;
}

/**
 * Callout — a paperclip-badge + paragraph row, the recurring "note" pattern
 * in case-study intros. The pink gradient clip badge sits left of the text.
 */
export function Callout({
  children,
  name = "clip",
  style = {},
  ...rest
}: CalloutProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        ...style,
      }}
      {...rest}
    >
      <IconBadge name={name} size={32} style={{ marginTop: 2 }} />
      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-body)",
          lineHeight: 1.5,
          color: "var(--color-ink)",
          maxWidth: 380,
        }}
      >
        {children}
      </p>
    </div>
  );
}
