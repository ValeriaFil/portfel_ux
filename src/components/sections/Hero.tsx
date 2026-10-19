import React from "react";

const EXPERIENCE = [
  { year: "2022 →", company: "N1 Partners", role: "UI Designer" },
  { year: "2021", company: "iFactory3D", role: "Web & Visual Designer" },
  { year: "2019", company: "Unisail", role: "Graphic Designer" },
];

/**
 * Hero — editorial split: a large Rubik statement with an italic green accent
 * word and a pink period, beside a monospace experience timeline.
 */
export function Hero() {
  return (
    <section id="top" className="section" style={{ paddingTop: 88 }}>
      <div
        className="wrap hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 72,
          alignItems: "end",
        }}
      >
        {/* Statement */}
        <div>
          <h1
            className="statement"
            style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: 600 }}
          >
            <span className="hero-role" style={{ fontSize: "clamp(26px, 5vw, 48px)", lineHeight: 1.05, fontWeight: 600, whiteSpace: "nowrap" }}>
              UI &amp; Visual Designer
            </span>
            <span
              className="hero-making"
              style={{
                fontSize: "clamp(28px, 6vw, 56px)",
                lineHeight: 1.02,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "clamp(18px, 3vw, 34px)",
                flexWrap: "wrap",
                marginTop: 18,
              }}
            >
              <span
                className="hero-polaroid"
                style={{
                  display: "inline-block",
                  background: "#fff",
                  padding: "12px 12px 0",
                  border: "1px solid var(--hair)",
                  boxShadow: "0 12px 30px rgba(10,10,10,.12)",
                  borderRadius: 2,
                  transform: "rotate(-3deg)",
                  flexShrink: 0,
                }}
              >
                <span className="hero-ph" style={{ display: "block", width: "clamp(150px, 18vw, 184px)", height: "clamp(150px, 18vw, 184px)", overflow: "hidden" }}>
                  <img
                    src="/assets/img/valeria-hero.png"
                    alt="Valeria Filipchyk"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </span>
                <span
                  className="hero-cap"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    textAlign: "center",
                    color: "var(--color-ink)",
                    padding: "14px 0 16px",
                  }}
                >
                  It&rsquo;s me, Valeria :)
                </span>
              </span>
              <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.02 }}>
                <span style={{ color: "var(--color-green)" }}>making</span>
                <span style={{ color: "var(--color-green)" }}>products</span>
                <span>
                  <span style={{ color: "var(--color-green)" }}>intuitive</span>
                  <span style={{ color: "var(--color-ink)" }}>.</span>
                </span>
              </span>
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-ink-muted)",
              maxWidth: 520,
              marginTop: 32,
            }}
          >
            With 7+ years of total design experience, including 5+ years crafting
            intuitive web, mobile, and game interfaces.
          </p>
        </div>

        {/* Experience timeline */}
        <div>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Experience
          </p>
          <div>
            {EXPERIENCE.map((x, i) => (
              <div
                key={x.company}
                className="tl-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "96px 1fr auto",
                  gap: 20,
                  alignItems: "baseline",
                  padding: "18px 0",
                  borderTop: i === 0 ? "1px solid var(--hair)" : undefined,
                  borderBottom: "1px solid var(--hair)",
                }}
              >
                <span className="mono" style={{ color: "var(--color-ink-muted)" }}>
                  {x.year}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "var(--color-green)",
                  }}
                >
                  {x.company}
                </span>
                <span
                  className="tl-row__role"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--color-ink-muted)",
                    textAlign: "right",
                  }}
                >
                  {x.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
