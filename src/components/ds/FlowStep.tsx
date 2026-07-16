import React from "react";

export interface FlowStepProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  style?: React.CSSProperties;
}

/**
 * FlowStep — a pink-outlined pill used in case-study flow diagrams
 * ("Browse rooms → Check details → …"). Pair with FlowArrow between steps.
 */
export function FlowStep({
  children,
  active = false,
  style = {},
  ...rest
}: FlowStepProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 22px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid var(--color-pink)",
        background: active ? "var(--color-surface-pink)" : "transparent",
        color: "var(--color-ink)",
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: "var(--fs-body)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

/** FlowArrow — the thin "→" connector between flow steps. */
export function FlowArrow({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <span style={{ color: "var(--color-ink)", fontSize: 18, lineHeight: 1, ...style }}>
      →
    </span>
  );
}
