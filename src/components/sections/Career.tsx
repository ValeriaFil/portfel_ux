"use client";

import React, { useEffect, useRef, useState } from "react";

interface Role {
  year: string;
  company: string;
  role: string;
  tags: string[];
  bullets: string[];
}

const ROLES: Role[] = [
  {
    year: "2022 — Present",
    company: "N1 Partners",
    role: "UI Designer",
    tags: ["UI", "Prototyping", "GameDesign", "Collaboration"],
    bullets: [
      "Designed mobile application and game interfaces, including UI elements and visuals",
      "Collaborated with product managers and developers to translate requirements into functional interface solutions",
      "Worked on UI components and low-to-mid fidelity interface elements",
      "Optimized interfaces for different devices and screen sizes, ensuring visual consistency and usability",
    ],
  },
  {
    year: "2021 — 2022",
    company: "iFactory3D",
    role: "Web & Visual Designer",
    tags: ["UI", "WebDesign", "VisualDesign", "Management"],
    bullets: [
      "Designed and implemented responsive web interfaces for B2B and e-commerce products",
      "Led end-to-end design for social media campaigns and digital ads with performance goals",
      "Created print materials aligned with digital branding",
      "Took on project management tasks: coordinated timelines, gathered briefs, and ensured delivery",
    ],
  },
  {
    year: "2019 — 2020",
    company: "Unisail",
    role: "Graphic Designer",
    tags: ["GraphicDesign", "Printing", "DigitalDesign"],
    bullets: [
      "Delivered marketing and campaign visuals for both digital and print channels",
      "Developed digital ads, social posts, and outdoor signage in collaboration with vendors",
      "Participated in design ideation and production from brief to final file delivery",
      "Interaction with printing houses and contractors",
    ],
  },
];

/**
 * Career — an editorial two-column record. Left rail: monospace year, green
 * company, role. Right: hashtag tags and a hairline bullet list.
 */
export function Career() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallbacks: if IntersectionObserver is unavailable or the user prefers
    // reduced motion, reveal immediately so content is never stuck hidden.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (typeof IntersectionObserver === "undefined" || reduce) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="career"
      className="section"
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(24px)",
        transition:
          "opacity 500ms var(--ease-out), transform 500ms var(--ease-out)",
      }}
    >
      <div className="wrap">
        <p className="eyebrow" style={{ marginBottom: 40, fontSize: 15 }}>Career</p>

        <div>
          {ROLES.map((r, i) => (
            <div
              key={r.company}
              className="career-row"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: 64,
                alignItems: "start",
                padding: "40px 0",
                borderTop: "1px solid var(--hair)",
                borderBottom: i === ROLES.length - 1 ? "1px solid var(--hair)" : undefined,
              }}
            >
              {/* left rail */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="mono" style={{ marginBottom: 8 }}>{r.year}</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 22,
                    color: "var(--color-green)",
                  }}
                >
                  {r.company}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-ink)",
                    marginTop: 4,
                  }}
                >
                  {r.role}
                </span>
              </div>

              {/* right detail */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                  {r.tags.map((t) => (
                    <span key={t} className="mono" style={{ color: "var(--color-green)" }}>
                      #{t}
                    </span>
                  ))}
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {r.bullets.map((b, j) => (
                    <li
                      key={b}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "28px 1fr",
                        gap: 16,
                        alignItems: "baseline",
                        padding: "14px 0",
                        borderTop: j === 0 ? undefined : "1px solid var(--hair)",
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        lineHeight: 1.5,
                        color: "#3C3B3B",
                      }}
                    >
                      <span className="mono" style={{ color: "var(--color-ink-muted)" }}>
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
