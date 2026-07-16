import React from "react";

const POINTS = [
  {
    title: "UI-driven visual design",
    desc: "Strong visual execution based on UI principles and responsive systems.",
  },
  {
    title: "Clear UX & information structure",
    desc: "Designs intuitive layouts with logical, predictable navigation.",
  },
  {
    title: "Cross-functional collaboration",
    desc: "Aligns interface interactions with developers and product teams.",
  },
];

const POLAROIDS = [
  { cap: "Hiking", img: "/assets/img/side-hiking.jpg", rot: "-4deg" },
  { cap: "Burgers", img: "/assets/img/side-burgers.jpg", rot: "3deg" },
  { cap: "Dogs", img: "/assets/img/side-dogs.jpg", rot: "-2deg" },
  { cap: "Travel", img: "/assets/img/side-travel.jpg", rot: "4deg" },
  { cap: "Stitch", img: "/assets/img/side-stitch.jpg", rot: "-3deg" },
];

/**
 * About — an editorial statement paired with a numbered, hairline-separated
 * list of strengths. Monospace indices, green titles.
 */
export function About() {
  return (
    <section id="about" className="section">
      <div
        className="wrap contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: 28, fontSize: 15 }}>About</p>
          <p
            className="statement"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15 }}
          >
            Design isn&rsquo;t just visuals &mdash;<br />
            it&rsquo;s{" "}
            <span style={{ color: "var(--color-green)" }}>functionality, logic</span> and{" "}
            <span style={{ color: "var(--color-green)" }}>accessibility</span>
            <span style={{ color: "var(--color-ink)" }}>.</span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-ink-muted)",
              maxWidth: 460,
              marginTop: 28,
            }}
          >
            I enjoy turning complex ideas into intuitive interfaces that serve both
            user needs and business goals.
          </p>
        </div>

        <div>
          {POINTS.map((p, i) => (
            <div
              key={p.title}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: 20,
                padding: "26px 0",
                borderTop: "1px solid var(--hair)",
                borderBottom: i === POINTS.length - 1 ? "1px solid var(--hair)" : undefined,
              }}
            >
              <span className="mono" style={{ color: "var(--color-pink-rose)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 20,
                    color: "var(--color-green)",
                    margin: "0 0 8px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "var(--color-ink-muted)",
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Playful closer — "side projects" as Polaroids */}
      <div
        className="wrap"
        style={{ marginTop: 84, paddingTop: 56, borderTop: "1px solid var(--hair)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--color-ink-muted)",
            maxWidth: 460,
          }}
        >
          This portfolio is all about work&hellip; but here&rsquo;s the part of my life that
          doesn&rsquo;t come with deadlines:
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginTop: 44 }}>
          {POLAROIDS.map((p) => (
            <div
              key={p.cap}
              className="polaroid"
              style={{
                background: "#fff",
                padding: "12px 12px 0",
                border: "1px solid var(--hair)",
                boxShadow: "0 12px 30px rgba(10,10,10,.12)",
                borderRadius: 2,
                transform: `rotate(${p.rot})`,
              }}
            >
              <div style={{ width: 184, height: 184, overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.cap}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 600,
                  fontSize: 27,
                  lineHeight: 1,
                  textAlign: "center",
                  color: "var(--color-ink)",
                  padding: "14px 0 18px",
                }}
              >
                {p.cap}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
