import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Booking app «MovieNest» — Valeria Filipchyk",
  description:
    "A focused UX redesign of the room-selection and booking flow for MovieNest, an app for booking private movie rooms.",
};

const IMG = "https://framerusercontent.com/images/";

const TAGS = ["UIDesign", "UXDesign", "DesignThinking", "VisualDesign", "Collaboration"];

const FLOW = ["Browse rooms", "Check details", "Understand pricing & services", "Start booking"];

const OBSERVATIONS = [
  "Visual overload leads to scanning, not reading.",
  "People want fast answers to: «What do I get?»",
  "Text alone doesn’t build trust — icons, structure, and visual clarity matter.",
  "The absence of a «no-call» booking path is a blocker for younger users.",
];

const COMPARE_KEYS = ["Price per session", "Maximum capacity", "Features included in the booking"];

const STEPS = [
  { img: "SMFYD501cgKnVnVhi1cGvFKTp94.png", label: "Step 1", desc: "Select room, date, and time — including any available discounts." },
  { img: "E78xzywaSx5is9pvKQTTiivgZVk.png", label: "Step 2", desc: "Enter personal details and choose a payment method." },
  { img: "8oDe5Xjd2o9IHQs7itXgEZmzk7c.png", label: "Step 3", desc: "Review all entered information for accuracy." },
  { img: "Jf9HF81Mpw1usw59BZa0c7S26oQ.png", label: "Step 4", desc: "Final confirmation screen with a full booking summary." },
];

const HERO = [
  { s: "SMFYD501cgKnVnVhi1cGvFKTp94.png", h: "74%", r: 30, rot: "rotate(-7deg)", mr: -26, ml: 0, sh: "0 22px 50px rgba(3,76,59,.18)", z: 1 },
  { s: "E78xzywaSx5is9pvKQTTiivgZVk.png", h: "90%", r: 34, rot: "none", mr: 0, ml: 0, sh: "0 30px 66px rgba(3,76,59,.24)", z: 3 },
  { s: "Jf9HF81Mpw1usw59BZa0c7S26oQ.png", h: "74%", r: 30, rot: "rotate(7deg)", mr: 0, ml: -26, sh: "0 22px 50px rgba(3,76,59,.18)", z: 1 },
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
const subhead: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 22,
  lineHeight: 1.15,
  color: "var(--color-ink)",
  margin: 0,
};
const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 16,
  lineHeight: 1.6,
  color: "#3C3B3B",
};
const card: React.CSSProperties = {
  background: "var(--color-white)",
  border: "1px solid var(--hair)",
  padding: 36,
};

export default function MovieNestPage() {
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
              Mini-Case Task «MovieNest»
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>Booking app</p>

            {/* Hero cover — phone trio on brand gradient */}
            <div
              className="chero"
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background: "radial-gradient(130% 150% at 80% 8%, #EAF0EE 0%, #F1F6F4 46%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>
                Private movie-room booking
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>
                Compare · Book · Confirm
              </span>
              <div style={{ position: "absolute", right: 44, top: 34, width: 110, height: 110, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div className="pmwrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                {HERO.map((p) => (
                  <div
                    key={p.s}
                    style={{ height: p.h, aspectRatio: "436 / 944", borderRadius: p.r, overflow: "hidden", background: "#fff", border: "1px solid var(--hair)", boxShadow: p.sh, transform: p.rot, marginRight: p.mr, marginLeft: p.ml, zIndex: p.z }}
                  >
                    <img src={IMG + p.s} alt="MovieNest screen" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Meta + about */}
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}>
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>UX/UI Designer</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>Timeline</p>
                  <p style={body}>Mini-case task · focused UX flow</p>
                </div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  MovieNest is an app for booking private movie rooms. While the overall concept is
                  simple, one specific flow creates confusion and drop-off: users browsing room
                  options struggle to understand what’s included, how to compare offers, and how to
                  confidently start the booking — especially without calling the venue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>The Problem</p>
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
              <p className="statement" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.25 }}>
                Booking private movie rooms is inconvenient due to unclear availability, pricing, and services
                <span style={{ color: "var(--color-pink-rose)" }}>.</span>
              </p>
              <div>
                <p style={body}>
                  Users struggle to find promotions and venue details, while younger users hesitate to book via phone.
                </p>
                <p style={{ ...body, marginTop: 20 }}>
                  Instead of redesigning the full app, I focused on this exact moment where users hesitate. I wanted to
                  solve it through structure, clarity, and better visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focused UX Task */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Focused UX Task</p>
            <p style={{ ...body, maxWidth: 680, marginBottom: 40 }}>
              The flow I concentrated on — from discovery to a confident, no-call booking:
            </p>
            <div className="cs-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {FLOW.map((f, i) => (
                <div key={f} style={{ ...card, padding: "26px 24px" }}>
                  <span className="mono" style={{ color: "var(--color-pink-rose)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--color-ink)", marginTop: 10 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Approach</p>
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
              <p style={body}>
                To better understand the problem, I briefly reviewed user feedback in app stores and looked at how
                similar services present room or experience details. I also reflected on my own hesitation moments when
                booking unfamiliar venues.
              </p>
              <p style={body}>
                Based on this, I focused on making room cards clearer and easier to compare at a glance. I introduced
                visual tags for key features, streamlined the content structure, and designed a layout that supports
                fast scanning.
              </p>
            </div>
          </div>
        </section>

        {/* Key Observations */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Key Observations</p>
            <div style={card}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 48px" }}>
                {OBSERVATIONS.map((o) => (
                  <div key={o} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 12, ...body, fontSize: 15 }}>
                    <span style={{ color: "var(--color-pink-rose)" }}>&bull;</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Solution</p>

            <h3 style={{ ...subhead, fontSize: 26 }}>Room Comparison View (Standard vs VIP)</h3>
            <p style={{ ...body, maxWidth: 720, marginTop: 16 }}>
              To improve clarity during room selection, I redesigned the layout to show key details upfront:
            </p>
            <div className="cs-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 32 }}>
              {COMPARE_KEYS.map((k, i) => (
                <div key={k} style={{ borderTop: "1px solid var(--hair)", paddingTop: 18 }}>
                  <span className="mono" style={{ color: "var(--color-pink-rose)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ ...subhead, fontSize: 20, marginTop: 10 }}>{k}</p>
                </div>
              ))}
            </div>
            <p style={{ ...body, maxWidth: 720, marginTop: 32 }}>
              To support quick scanning, I introduced visual icons and a cleaner structure, making it easier to compare
              rooms without reading long descriptions.
            </p>
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 36 }}>
              {[
                { img: "guj49xABxICeVLo2ALJaDM0ayC8.png", cap: "Standard room" },
                { img: "z08QctK6qCen59gTxeiGMQZkVLk.png", cap: "VIP room" },
              ].map((c) => (
                <div key={c.img} style={{ ...card, padding: 28, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={IMG + c.img} alt={c.cap} style={{ maxHeight: 640, width: "auto", maxWidth: "100%", borderRadius: 14, boxShadow: "0 2px 12px rgba(0,0,0,.05)" }} />
                  <p className="mono" style={{ marginTop: 18 }}>{c.cap}</p>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--hair)", marginTop: 64, paddingTop: 56 }}>
              <h3 style={{ ...subhead, fontSize: 26 }}>Booking Flow — Step-by-Step Overview</h3>
              <p style={{ ...body, maxWidth: 720, marginTop: 16 }}>
                The redesigned booking flow now includes a clear step indicator at the top to help users understand
                where they are in the process.
              </p>
              <div className="cs-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40, alignItems: "start" }}>
                {STEPS.map((s) => (
                  <div key={s.img}>
                    <img src={IMG + s.img} alt={s.label} style={{ width: "100%", display: "block", borderRadius: 14 }} />
                    <div style={{ marginTop: 18 }}>
                      <span className="mono" style={{ color: "var(--color-pink-rose)" }}>{s.label}</span>
                      <p style={{ ...body, fontSize: 14, marginTop: 8 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prototype */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Prototype</p>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#F0F6F4" }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/XDvvTe43_oQ?start=1&rel=0"
                title="MovieNest — prototype walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
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
