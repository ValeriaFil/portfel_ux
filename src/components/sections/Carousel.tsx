"use client";

import React from "react";

/**
 * Carousel — a simple image slider: one image at a time on a #F0F6F4 stage,
 * with prev/next controls, dots, and a monospace counter. Matches the brand.
 */
export function Carousel({ images, alt = "Slide" }: { images: string[]; alt?: string }) {
  const [i, setI] = React.useState(0);
  const n = images.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  const arrow: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: "9999px",
    border: "1px solid var(--hair)",
    background: "var(--color-white)",
    color: "var(--color-pink-rose)",
    fontFamily: "var(--font-mono)",
    fontSize: 22,
    lineHeight: 1,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "var(--shadow-soft)",
    zIndex: 2,
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        {images.map((src, k) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${k + 1}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: k === i ? 1 : 0,
              transition: "opacity 320ms var(--ease-out)",
            }}
          />
        ))}
        <button aria-label="Previous" onClick={() => go(-1)} style={{ ...arrow, left: 16 }}>‹</button>
        <button aria-label="Next" onClick={() => go(1)} style={{ ...arrow, right: 16 }}>›</button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 18,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          {images.map((_, k) => (
            <button
              key={k}
              aria-label={`Go to slide ${k + 1}`}
              onClick={() => setI(k)}
              style={{
                width: k === i ? 22 : 8,
                height: 8,
                borderRadius: 9999,
                border: "none",
                cursor: "pointer",
                padding: 0,
                background: k === i ? "var(--color-pink-rose)" : "var(--hair)",
                transition: "width 220ms var(--ease-out), background 220ms var(--ease-out)",
              }}
            />
          ))}
        </div>
        <span className="mono">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
