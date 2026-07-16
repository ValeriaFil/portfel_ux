"use client";

import React from "react";

export interface ProjectCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  image?: string;
  title?: string;
  href?: string;
  style?: React.CSSProperties;
}

/**
 * ProjectCard — a thumbnail-in-a-white-card with a centered caption beneath,
 * exactly as the "Recent projects" row renders. Hover lifts the card.
 */
export function ProjectCard({
  image,
  title,
  href = "#",
  style = {},
  ...rest
}: ProjectCardProps) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 26,
        textDecoration: "none",
        ...style,
      }}
      {...rest}
    >
      <div
        className="vf-projectcard-media"
        style={{
          width: "100%",
          aspectRatio: "349 / 198",
          background: "var(--surface-card)",
          borderRadius: "var(--radius-sm)",
          boxShadow: "var(--shadow-card)",
          padding: 22,
          transition:
            "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "var(--motion-lift)";
          e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "var(--shadow-card)";
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            background: image
              ? `center / cover no-repeat url(${image})`
              : "var(--color-placeholder)",
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--fs-subtitle)",
          color: "var(--color-ink)",
          textAlign: "center",
        }}
      >
        {title}
      </span>
    </a>
  );
}
