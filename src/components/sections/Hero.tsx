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
            style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: 520 }}
          >
            <span style={{ fontSize: "clamp(28px, 6vw, 40px)", lineHeight: 1.05, marginBottom: 16 }}>
              I&rsquo;m Valeria
            </span>
            <span style={{ fontSize: "clamp(36px, 8vw, 68px)", lineHeight: 1.0, fontWeight: 600 }}>
              UX/UI designer
            </span>
            <span style={{ fontSize: "clamp(36px, 8vw, 68px)", lineHeight: 1.0, fontWeight: 600 }}>
              <span style={{ color: "var(--color-green)" }}>making products intuitive</span>
              <span style={{ color: "var(--color-ink)" }}>.</span>
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
            Focused on clarity and structure, with a background in Graphic Design
            and 6 years of experience &mdash; building product interfaces that value
            collaboration, design maturity and a user-centered approach.
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
