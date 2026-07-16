"use client";

import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number;
  hover?: boolean;
  style?: React.CSSProperties;
}

/**
 * Card — the white, gently-rounded surface with the soft diffuse shadow that
 * underpins nearly every block in the portfolio. Hover lifts it slightly.
 */
export function Card({
  children,
  padding = "var(--pad-card-lg)",
  hover = false,
  style = {},
  ...rest
}: CardProps) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-card)",
        padding,
        transition:
          "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              e.currentTarget.style.transform = "var(--motion-lift)";
              e.currentTarget.style.boxShadow = "var(--shadow-hover)";
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "var(--shadow-card)";
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
}
