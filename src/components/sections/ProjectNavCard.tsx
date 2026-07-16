"use client";

import React from "react";
import { Icon } from "@/components/ds";

/**
 * ProjectNavCard — the two hero cards ("UX/UI PROJECTS" / "OTHER PROJECTS").
 * White card, two-line label (first line green accent, second line ink) with a
 * pink arrow affordance on the right. Lifts slightly on hover.
 */
export function ProjectNavCard({
  line1,
  line2,
  href = "#projects",
}: {
  line1: string;
  line2: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        background: "var(--surface-card)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-card)",
        padding: "34px 39px",
        textDecoration: "none",
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
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--fs-title)",
          lineHeight: 1.25,
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "var(--color-green)" }}>{line1}</span>
        <br />
        <span style={{ color: "var(--color-ink)" }}>{line2}</span>
      </span>
      <Icon name="arrow" size={32} color="var(--color-pink-rose)" />
    </a>
  );
}
