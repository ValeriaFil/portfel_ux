import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Visual Design for «iFactory 3D» — Valeria Filipchyk",
  description:
    "Flyers, exhibition banners, and websites designed for iFactory3D, a company producing 3D printers and software.",
};

const IMG = "https://framerusercontent.com/images/";
const FLYER = IMG + "tgyvngGDdSVSP0lytSTz20ZYfoA.png";
const BANNERS = IMG + "iJdDuldfSm1EJZe7DZEgSERc.png";

const TAGS = ["UI", "Mobile", "AppConcept"];

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

export default function IFactory3DPage() {
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
              iFactory3D
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>Visual design</p>

            {/* Hero cover — two-up spread on warm gradient */}
            <div
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background: "radial-gradient(130% 150% at 80% 8%, #FBE7D6 0%, #F1F6F4 50%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>
                Print &amp; exhibition design
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>
                Flyers · Banners · Web
              </span>
              <div style={{ position: "absolute", left: 40, bottom: 34, width: 100, height: 100, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 28, padding: 48, zIndex: 2 }}>
                <div style={{ height: "80%", background: "#fff", border: "1px solid var(--hair)", borderRadius: 10, padding: 12, boxShadow: "0 24px 54px rgba(3,76,59,.18)", display: "flex" }}>
                  <img src={FLYER} alt="iFactory3D flyer" style={{ height: "100%", width: "auto", objectFit: "contain", borderRadius: 4, display: "block" }} />
                </div>
                <div style={{ height: "88%", background: "#fff", border: "1px solid var(--hair)", borderRadius: 10, padding: 12, boxShadow: "0 30px 64px rgba(3,76,59,.22)", display: "flex" }}>
                  <img src={BANNERS} alt="iFactory3D banners" style={{ height: "100%", width: "auto", objectFit: "contain", borderRadius: 4, display: "block" }} />
                </div>
              </div>
            </div>

            {/* Meta + about */}
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}>
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>Web &amp; Visual Designer</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>Deliverables</p>
                  <p style={body}>Flyers · Banners · Websites</p>
                </div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  iFactory3D — a company specializing in the production of 3D printers and software for them. I designed
                  flyers, banners for exhibition presentations, and websites for the company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flyer */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Flyer</p>
            <div style={frame}>
              <img src={FLYER} alt="iFactory3D flyer" style={{ width: "100%", borderRadius: 6, display: "block" }} />
            </div>
          </div>
        </section>

        {/* Banners */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Banners</p>
            <div style={frame}>
              <img src={BANNERS} alt="iFactory3D banners" style={{ width: "100%", borderRadius: 6, display: "block" }} />
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="section">
          <div className="wrap">
            <p style={{ ...kicker, marginBottom: 24 }}>Next project</p>
            <Link
              href="/portfolio/lumocontrol"
              className="np-card"
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, background: "var(--color-white)", border: "1px solid var(--hair)", padding: 48, textDecoration: "none" }}
            >
              <div>
                <span className="mono" style={{ color: "var(--color-green)" }}>App concept</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, color: "var(--color-ink)", marginTop: 10 }}>
                  LumoControl
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
