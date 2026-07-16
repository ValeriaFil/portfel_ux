import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Visual Design for «Medi» — Valeria Filipchyk",
  description:
    "Marketing and print design for Mediort, the official online store of medi orthopedic salons in Belarus — posters, signage, certificates, and print collateral.",
};

const IMG = "https://framerusercontent.com/images/";
const POSTERS = IMG + "SCCHccSiJsvd8RLJUAB91ATR0.png";
const EXTERIOR = IMG + "F6DjRmEkzpCNAhsFhJqMEe6wZ4.png";
const CERTS = [
  "EmfHk2hMHEPQvIuHT7Dof1KJQ.png",
  "NhNYcrkPh10Dok3zMYNzS7Tqg.png",
  "ruyTBT0dR7JRm7VY5xrDvXucHBk.png",
];
const CARD = IMG + "B4pww454RA7UoMJpsTC4biEM.png";
const STICKER = IMG + "eMnnVPb4LflVTHqDlSXgYgIzvd8.png";

const TAGS = ["MarketingDesign", "SocialMedia", "Printing"];

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

export default function MediPage() {
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
              Mediort
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>Visual design</p>

            {/* Hero cover — two-up spread on medi-pink gradient */}
            <div
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background: "radial-gradient(130% 150% at 80% 8%, #FBDCEA 0%, #F1F6F4 50%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>
                Orthopedic retail brand
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>
                Print · Social · In-store
              </span>
              <div style={{ position: "absolute", left: 40, bottom: 34, width: 100, height: 100, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 28, padding: 48, zIndex: 2 }}>
                <div style={{ width: "42%", background: "#fff", border: "1px solid var(--hair)", borderRadius: 10, padding: 12, boxShadow: "0 24px 54px rgba(3,76,59,.18)" }}>
                  <img src={POSTERS} alt="medi posters" style={{ width: "100%", borderRadius: 4, display: "block" }} />
                </div>
                <div style={{ width: "46%", background: "#fff", border: "1px solid var(--hair)", borderRadius: 10, padding: 12, boxShadow: "0 30px 64px rgba(3,76,59,.22)" }}>
                  <img src={EXTERIOR} alt="medi salon exterior" style={{ width: "100%", borderRadius: 4, display: "block" }} />
                </div>
              </div>
            </div>

            {/* Meta + about */}
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}>
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>Graphic &amp; Marketing Designer</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>Deliverables</p>
                  <p style={body}>Posters · Signage · Certificates · Print</p>
                </div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  Mediort — the official online store of medi orthopedic salons in Belarus, offering a wide range of
                  health and rehabilitation products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Posters */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Posters</p>
            <div style={frame}>
              <img src={POSTERS} alt="medi posters" style={{ width: "100%", borderRadius: 6, display: "block" }} />
            </div>
          </div>
        </section>

        {/* Exterior design */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Exterior design</p>
            <div style={frame}>
              <img src={EXTERIOR} alt="medi salon exterior" style={{ width: "100%", borderRadius: 6, display: "block" }} />
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Certificates</p>
            <div className="cs-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, maxWidth: 1080 }}>
              {CERTS.map((c) => (
                <div key={c} style={{ ...frame, padding: 0 }}>
                  <img src={IMG + c} alt="medi gift certificate" style={{ width: "100%", borderRadius: 6, display: "block" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business card + Sticker */}
        <section className="section">
          <div className="wrap">
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ ...kicker, marginBottom: 24 }}>Business card</p>
                <div style={{ ...frame, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={CARD} alt="medi business card" style={{ width: "100%", borderRadius: 6, display: "block" }} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ ...kicker, marginBottom: 24 }}>Sticker</p>
                <div style={{ ...frame, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={STICKER} alt="CEP sticker" style={{ width: "100%", maxWidth: 440, borderRadius: 6, display: "block" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="section">
          <div className="wrap">
            <p style={{ ...kicker, marginBottom: 24 }}>Next project</p>
            <Link
              href="/portfolio/visual-design-ifactory3d"
              className="np-card"
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, background: "var(--color-white)", border: "1px solid var(--hair)", padding: 48, textDecoration: "none" }}
            >
              <div>
                <span className="mono" style={{ color: "var(--color-green)" }}>Visual design</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, color: "var(--color-ink)", marginTop: 10 }}>
                  iFactory3D
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
