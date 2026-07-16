"use client";

import React from "react";
import { Icon } from "./Icon";

export interface SocialIconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name?: string;
  href?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * SocialIcon — circular social link (LinkedIn / Mail) in the brand link-blue,
 * as seen under the name card on the landing page.
 */
export function SocialIcon({
  name = "linkedin",
  href = "#",
  size = 32,
  style = {},
  ...rest
}: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        background: "var(--color-blue-link)",
        color: "var(--color-white)",
        textDecoration: "none",
        transition:
          "transform var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "var(--motion-lift)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
      }}
      {...rest}
    >
      <Icon name={name} size={Math.round(size * 0.5)} color="var(--color-white)" />
    </a>
  );
}
