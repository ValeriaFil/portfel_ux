import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "LumoControl — Valeria Filipchyk",
  description:
    "A mobile app concept for managing three light sources — a lamp, ambient lighting, and an electric candle — with modes, brightness, and custom colors.",
};

const IMG = "https://framerusercontent.com/images/";

const TAGS = ["UI", "Mobile", "AppConcept"];

const HERO = [
  { s: "Sd0EMkJvJIFs0cpK2K9Tjt6SYM.png", h: "70%", r: 28, rot: "rotate(-11deg)", mr: -34, ml: 0, sh: "0 20px 46px rgba(3,76,59,.16)", z: 1 },
  { s: "GfBC5JXqsszHuEpInrsZh3f5eTk.png", h: "82%", r: 28, rot: "rotate(-5deg)", mr: -20, ml: 0, sh: "0 26px 56px rgba(3,76,59,.20)", z: 2 },
  { s: "peQ3yIi5LPyZmYJ7wYkFLk7zdM.png", h: "90%", r: 32, rot: "none", mr: 0, ml: 0, sh: "0 30px 66px rgba(3,76,59,.24)", z: 4 },
  { s: "o5cQbpkwwd6QStX4QhCYKIDMfVY.png", h: "82%", r: 28, rot: "rotate(5deg)", mr: 0, ml: -20, sh: "0 26px 56px rgba(3,76,59,.20)", z: 2 },
];

const SCREENS = [
  { img: "GfBC5JXqsszHuEpInrsZh3f5eTk.png", cap: "Home — quick access to all three lights" },
  { img: "peQ3yIi5LPyZmYJ7wYkFLk7zdM.png", cap: "Smart Lamp — color, brightness, effects & timer" },
  { img: "o5cQbpkwwd6QStX4QhCYKIDMfVY.png", cap: "Scenarios — one-tap moods and routines" },
  { img: "Sd0EMkJvJIFs0cpK2K9Tjt6SYM.png", cap: "Profile — devices, support & app settings" },
];

const MOODS = [
  "08bpPZTt1id0vvdSB6jjdajxeU.png",
  "7EaU0RnB8ymjRJPWf72VFz11NI.png",
  "8XouDhByfdkCZFh4bx4smkdnoHQ.png",
  "Rpvc3JNvzNH9UzONCAphi1EscVc.png",
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

export default function LumoControlPage() {
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
              LumoControl
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>App concept</p>

            {/* Hero cover — phone trio on warm gradient */}
            <div
              className="chero chero--four"
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background: "radial-gradient(130% 150% at 80% 8%, #F7E6C9 0%, #F1F6F4 50%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>
                Three lights, one app
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>
                Set the mood with a tap
              </span>
              <div style={{ position: "absolute", right: 44, top: 34, width: 110, height: 110, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div className="pmwrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                {HERO.map((p) => (
                  <div
                    key={p.s}
                    style={{ height: p.h, aspectRatio: "750 / 1624", borderRadius: p.r, overflow: "hidden", background: "#fff", border: "1px solid var(--hair)", boxShadow: p.sh, transform: p.rot, marginRight: p.mr, marginLeft: p.ml, zIndex: p.z }}
                  >
                    <img src={IMG + p.s} alt="LumoControl screen" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Meta + about */}
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}>
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>UI Designer</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>Type</p>
                  <p style={body}>Mobile app concept</p>
                </div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  App for managing three light sources: a lamp, ambient lighting, and an electric candle. Easily switch
                  between modes, adjust brightness, and customize colors to create the perfect atmosphere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screens */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Screens</p>
            <div className="cs-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, alignItems: "start" }}>
              {SCREENS.map((s) => (
                <img key={s.img} src={IMG + s.img} alt="LumoControl screen" style={{ width: "100%", display: "block", borderRadius: 14 }} />
              ))}
            </div>
          </div>
        </section>

        {/* Prototype */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Prototype</p>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#F0F6F4" }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/fTHVHUB8UG8?rel=0"
                title="LumoControl — prototype"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </section>

        {/* Set the Mood */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Set the Mood</p>
            <div className="cs-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {MOODS.map((m) => (
                <img key={m} src={IMG + m} alt="LumoControl mood" style={{ width: "100%", display: "block", borderRadius: 14 }} />
              ))}
            </div>
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
