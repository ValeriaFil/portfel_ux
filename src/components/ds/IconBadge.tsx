import React from "react";
import { Icon } from "./Icon";

export interface IconBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * IconBadge — the 32px magenta→pink gradient disc holding a white glyph.
 * Used beside callouts (clip), career rows (clock, user) and accents.
 */
export function IconBadge({
  name = "clip",
  size = 32,
  style = {},
  ...rest
}: IconBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        background: "var(--gradient-pink)",
        color: "var(--color-white)",
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      <Icon
        name={name}
        size={Math.round(size * 0.56)}
        color="var(--color-white)"
      />
    </span>
  );
}
