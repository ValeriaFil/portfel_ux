"use client";

import React from "react";
import Link from "next/link";

/**
 * WorkTile — a large squared color-field tile holding a project screenshot with
 * a monospace label + serif title. Tinted with a brand DS surface; lifts gently
 * on hover. The screenshot sits flat on the tint (no frame or shadow behind it).
 */
export function WorkTile({
  image,
  images,
  title,
  meta,
  tint,
  href = "#work",
}: {
  image?: string;
  images?: string[];
  title: string;
  meta: string;
  tint: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="work-tile"
      style={{
        display: "flex",
        flexDirection: "column",
        background: tint,
        padding: 36,
        minHeight: 460,
        border: "1px solid var(--hair)",
        textDecoration: "none",
        transition:
          "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
        const img = e.currentTarget.querySelector<HTMLElement>(".work-tile__img");
        if (img) img.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
        const img = e.currentTarget.querySelector<HTMLElement>(".work-tile__img");
        if (img) img.style.transform = "none";
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {images && images.length ? (
          <div
            className="work-tile__img"
            style={{
              width: "100%",
              aspectRatio: "16 / 10",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          >
            {images.map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: "22%", height: "auto", borderRadius: 10, objectFit: "contain" }} />
            ))}
          </div>
        ) : (
          <div
            className="work-tile__img"
            style={{
              width: "100%",
              aspectRatio: "16 / 10",
              backgroundColor: "#FFFFFF",
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          marginTop: 32,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span className="mono" style={{ color: "var(--color-green)" }}>{meta}</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 24,
              lineHeight: 1.1,
              color: "var(--color-ink)",
            }}
          >
            {title}
          </span>
        </div>
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 22,
            color: "var(--color-pink-rose)",
            lineHeight: 1,
          }}
        >
          ↗
        </span>
      </div>
    </Link>
  );
}
