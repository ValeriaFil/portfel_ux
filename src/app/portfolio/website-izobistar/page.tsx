import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Website «Izobistar» — Valeria Filipchyk",
  description:
    "A video-first website for Izobistar, a small production studio — structure, visual style, and a responsive, trust-building layout.",
};

const IMG = "https://framerusercontent.com/images/";

const TAGS = ["UIDesign", "WebDesign", "Constructor"];

const SHOTS = [
  { img: "vqTQTT2vgRMcBbo2Lb28gdr87M.png", cap: "Homepage — video-first hero and clear service structure" },
  { img: "OnlxgW4VH80g8UqOf3IEORM2y4E.png", cap: "Services & contact — structured, scannable sections" },
  { img: "ReDp2JJR7aSlTMLy88UNxyEEILU.png", cap: "About — real photos of the creators build trust" },
  { img: "7qwtXrdwHd0yPnxVXWaDHc8SgQ.png", cap: "Portfolio — works presented as short video pieces" },
];

const kicker: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  fontSize: 15,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--color-pink-rose)",
  marginBottom: 32,
};
const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 16,
  lineHeight: 1.6,
  color: "#3C3B3B",
};
const frame: React.CSSProperties = {
  background: "var(--color-white)",
  border: "1px solid var(--hair)",
  padding: 24,
};

export default function IzobistarPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Intro */}
        <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
          <div className="wrap">
            <Link href="/portfolio" className="mono" style={{ color: "var(--color-ink)", display: "inline-block", marginBottom: 40 }}>
              ← Back to Projects
            </Link>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 22 }}>
              {TAGS.map((t) => (
                <span key={t} className="mono" style={{ color: "var(--color-green)" }}>#{t}</span>
              ))}
            </div>

            <h1 className="statement" style={{ fontSize: "clamp(40px, 5.2vw, 72px)", maxWidth: 900 }}>
              Website «Izobistar»
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>Website</p>

            {/* Hero cover — browser window on brand gradient */}
            <div
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background: "radial-gradient(130% 150% at 18% 10%, #FBE3EC 0%, #F1F6F4 46%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>
                Production-studio website
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>
                Video-first · Structure · Trust
              </span>
              <div style={{ position: "absolute", right: 44, top: 36, width: 110, height: 110, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "52px 48px", zIndex: 2 }}>
                <div style={{ width: "min(760px, 92%)", borderRadius: 12, overflow: "hidden", background: "#fff", border: "1px solid var(--hair)", boxShadow: "0 30px 68px rgba(3,76,59,.20)" }}>
                  <div style={{ height: 38, display: "flex", alignItems: "center", gap: 8, padding: "0 16px", background: "#F4F6F5", borderBottom: "1px solid var(--hair)" }}>
                    <span style={{ width: 11, height: 11, borderRadius: 9999, background: "#E4867F" }} />
                    <span style={{ width: 11, height: 11, borderRadius: 9999, background: "#E9C36B" }} />
                    <span style={{ width: 11, height: 11, borderRadius: 9999, background: "#8FC9A6" }} />
                    <span style={{ marginLeft: 14, height: 20, flex: 1, maxWidth: 320, borderRadius: 9999, background: "#fff", border: "1px solid var(--hair)" }} />
                  </div>
                  <div style={{ width: "100%", aspectRatio: "16 / 10", overflow: "hidden" }}>
                    <img src={IMG + "vqTQTT2vgRMcBbo2Lb28gdr87M.png"} alt="Izobistar homepage" style={{ width: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Meta + about */}
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}>
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>UX/UI &amp; Web Designer</p>
                </div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  A website for a small production studio specializing in video content creation, design, and promotion.
                  The project included developing the structure, selecting the visual style, and building a responsive
                  layout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concept */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Concept</p>
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
              <p className="statement" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.25 }}>
                Video works lead the homepage — the studio&rsquo;s craft is the first thing you see
                <span style={{ color: "var(--color-pink-rose)" }}>.</span>
              </p>
              <p style={body}>
                The studio focuses on video content, so video works were placed on the homepage as the main visual
                element. The portfolio was transformed into short video presentations, and real photos of the creators
                were used to increase user trust.
              </p>
            </div>
          </div>
        </section>

        {/* The Website */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>The Website</p>
            {SHOTS.map((s, i) => (
              <div key={s.img} style={{ marginTop: i === 0 ? 0 : 56 }}>
                <div style={frame}>
                  <img src={IMG + s.img} alt={s.cap} style={{ width: "100%", borderRadius: 6, display: "block" }} />
                </div>
                <p className="mono" style={{ marginTop: 16 }}>{s.cap}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next project */}
        <section className="section">
          <div className="wrap">
            <p style={{ ...kicker, marginBottom: 24 }}>Next project</p>
            <Link
              href="/portfolio/intentional-matching"
              className="np-card"
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, background: "var(--color-white)", border: "1px solid var(--hair)", padding: 48, textDecoration: "none" }}
            >
              <div>
                <span className="mono" style={{ color: "var(--color-green)" }}>Dating app feature</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, color: "var(--color-ink)", marginTop: 10 }}>
                  Intentional Matching
                </p>
              </div>
              <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: 26, color: "var(--color-pink-rose)", lineHeight: 1 }}>↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
