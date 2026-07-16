import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Intentional Matching — Valeria Filipchyk",
  description:
    "A post-match interaction system that turns dating-app matches into meaningful conversations.",
};

const IMG = "https://framerusercontent.com/images/";

const TAGS = ["Product Thinking", "UX", "UI", "AI-Assisted Prototyping"];

const FRAME = [
  { label: "Challenges", text: "Helping dating app users turn matches into meaningful conversations." },
  { label: "Hypothesis", text: "Turn matches from passive events into a shared interaction between two users." },
  { label: "Outcome", text: "Designed a post-match interaction system to improve Match → Conversation rate." },
];

const INSIGHTS = [
  { t: "Users don’t know what to say", d: "Many users are interested but hesitate because they lack a starting point." },
  { t: "Matches feel low-value", d: "With many matches, each one feels less important." },
  { t: "First messages require effort", d: "Starting multiple conversations creates cognitive load and fatigue." },
  { t: "Matching does not always mean intent to talk", d: "Users often swipe for curiosity or validation, not conversation." },
];

const HMW =
  "How might we help two users take the first step together instead of one person breaking the ice?";

const SECONDARY = ["Time to first message", "Messages in first 24h", "Unused matches"];

const CONCEPTS = [
  {
    title: "Concept 1 · Match Expiration",
    bullets: ["24-hour limit after matching", "Creates urgency but does not solve the core problem"],
  },
  {
    title: "Concept 2 · AI Conversation Starter",
    bullets: ["AI generates opening messages", "Reduces effort but does not increase mutual engagement"],
  },
];
const CONCEPT_IMAGES = [
  "dWstdKiSK8ScCSjf7ipSuCMmWg.png",
  "kLjiKWo5qocqsGxyzd2ySKHBZOE.png",
  "ZW1pNY8LBC6RPTZxH7YT7rdNrOc.png",
  "ZdALxnkgKNcFXU6t3sMYHVdVKXM.png",
];
const CONCEPT3 =
  "Both users answer a short prompt before chatting. Answers are revealed after matching and become conversation starters. However, shared answers alone do not create momentum. Instead of optimizing for responses, the system focuses on creating a natural path into the first message.";

const DEEPER = [
  "The initial concept focused on reducing friction in the first message",
  "However, further research showed this only addressed a symptom",
  "Users are overwhelmed by the number of matches and invest little attention in each one",
  "As a result, matches feel disposable rather than meaningful",
  "Even good conversation starters are not enough without user investment",
];
const NEW_DIRECTION = [
  "The solution evolved into a system focused on intentional matching",
  "The core idea remains: add a small action after liking someone",
  "Instead of only helping start conversations, this action increases intentionality before matching",
  "Users complete a lightweight prompt (topic, question, or short story) before sending a like",
  "These responses become part of the match experience",
];
const WHY_WORKS = [
  "Increases user investment before matching with a lightweight action",
  "Creates shared context at the moment of match",
  "Encourages focus on active connections instead of passive matches",
];

const SCREENS = [
  "zG5Rnfh08n9c1aM44OV22friGE.png",
  "55f64hBnmss0mniRbOvSg17C6o.png",
  "FDYCKhiXQS8G40RCYXiOVrdDc.png",
  "0WsNXlbTsBL4OC0XGTvvynohsOs.png",
  "zG0TyKEOk6Bl5GgDWqF5SE3rBo.png",
  "Qf3XyQIs8LI3piHgfa4UmI1SIJI.png",
  "x1QcvWi1lYeYI5IiVeL0aTxV3L4.png",
  "PBB4JLoPOgOeZv2CQP2hghpWis.png",
];

const REFLECTION = [
  "This project started as an exploration of conversation starters.",
  "During the process, I realized the challenge was not only helping users send the first message, but creating more intention before matching.",
  "That shifted the solution from improving chat initiation to rethinking how connections begin.",
  "Designing for dating is not only about creating more matches — it is about creating more reasons to stay.",
];

/* ---- small presentational helpers ---- */
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
const muted: React.CSSProperties = { ...body, color: "#3C3B3B" };

function Panel({ children, pad = 40 }: { children: React.ReactNode; pad?: number }) {
  return (
    <div style={{ background: "#F0F6F4", padding: pad, borderRadius: 0 }}>{children}</div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((b, i) => (
        <li
          key={b}
          style={{
            display: "grid",
            gridTemplateColumns: "28px 1fr",
            gap: 16,
            alignItems: "baseline",
            padding: "12px 0",
            borderTop: i === 0 ? undefined : "1px solid var(--hair)",
            ...body,
            fontSize: 15,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--color-ink-muted)",
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function DotBullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((b) => (
        <li
          key={b}
          style={{
            display: "grid",
            gridTemplateColumns: "14px 1fr",
            gap: 12,
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "#3C3B3B",
          }}
        >
          <span style={{ color: "var(--color-pink-rose)" }}>&bull;</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IntentionalMatchingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Intro */}
        <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
          <div className="wrap">
            <Link
              href="/portfolio"
              className="mono"
              style={{ color: "var(--color-ink)", display: "inline-block", marginBottom: 40 }}
            >
              ← Back to Projects
            </Link>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 22 }}>
              {TAGS.map((t) => (
                <span key={t} className="mono" style={{ color: "var(--color-green)" }}>
                  #{t}
                </span>
              ))}
            </div>

            <h1
              className="statement"
              style={{ fontSize: "clamp(40px, 5.2vw, 72px)", maxWidth: 900 }}
            >
              Intentional Matching
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>Dating app feature</p>

            <div
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background:
                  "radial-gradient(130% 150% at 82% 8%, #FBE3EC 0%, #F1F6F4 46%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>
                Post-match interaction
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>
                Match → Conversation
              </span>
              <div style={{ position: "absolute", right: 44, top: 34, width: 110, height: 110, borderRadius: 9999, border: "1px solid rgba(218,34,85,.26)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                {[
                  { s: "zG5Rnfh08n9c1aM44OV22friGE.png", h: "74%", r: 30, rot: "rotate(-7deg)", mr: -26, ml: 0, sh: "0 22px 50px rgba(3,76,59,.16)", z: 1 },
                  { s: "FDYCKhiXQS8G40RCYXiOVrdDc.png", h: "90%", r: 34, rot: "none", mr: 0, ml: 0, sh: "0 30px 66px rgba(3,76,59,.22)", z: 3 },
                  { s: "55f64hBnmss0mniRbOvSg17C6o.png", h: "74%", r: 30, rot: "rotate(7deg)", mr: 0, ml: -26, sh: "0 22px 50px rgba(3,76,59,.16)", z: 1 },
                ].map((p) => (
                  <div
                    key={p.s}
                    style={{ height: p.h, aspectRatio: "410 / 864", borderRadius: p.r, overflow: "hidden", background: "#fff", border: "1px solid var(--hair)", boxShadow: p.sh, transform: p.rot, marginRight: p.mr, marginLeft: p.ml, zIndex: p.z }}
                  >
                    <img src={IMG + p.s} alt="Prototype screen" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Two-column: meta (left) + about the project (right) */}
            <div
              className="cs-2"
              style={{
                display: "grid",
                gridTemplateColumns: "300px 1fr",
                gap: 72,
                marginTop: 56,
                alignItems: "start",
              }}
            >
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>Product Designer</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>Timeline</p>
                  <p style={body}>Concept project · ~5 days (concept exploration &amp; design)</p>
                </div>
              </div>

              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  Dating apps are optimized for generating matches, but a match alone
                  does not create value. A good experience happens when a conversation
                  starts and develops into a meaningful connection. From user reviews
                  and community discussions, I noticed a clear pattern: users are
                  excited about matches but often do not start conversations. This
                  became the starting point of the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges · Hypothesis · Outcome */}
        <section className="section">
          <div className="wrap">
            <div
              className="cs-3"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}
            >
              {FRAME.map((f) => (
                <div key={f.label}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 20,
                      letterSpacing: "0.02em",
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    {f.label}
                  </h3>
                  <p style={{ ...body, marginTop: 16 }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I found */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>What I found</p>

            <div
              className="cs-2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }}
            >
              {["F2IW9fvigcmbEtK0sdb7a5sYYM.png", "STLfttWwys8SRzYjtEaoOVgw.png"].map((s) => (
                <Panel key={s} pad={28}>
                  <img src={IMG + s} alt="Research finding" style={{ width: "100%", display: "block" }} />
                </Panel>
              ))}
            </div>

            <div
              className="cs-2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
            >
              {INSIGHTS.map((it) => (
                <div key={it.t} style={{ borderTop: "1px solid var(--hair)", paddingTop: 22 }}>
                  <h3 style={subhead}>{it.t}</h3>
                  <p style={{ ...muted, marginTop: 10 }}>{it.d}</p>
                </div>
              ))}
            </div>

            {/* Concluding question — a natural close to the section and a lead into Exploring Solutions */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: 1.3,
                color: "var(--color-ink)",
                maxWidth: 525,
                marginTop: 56,
              }}
            >
              {HMW}
            </p>
          </div>
        </section>

        {/* Validation metrics */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Validation Metrics</p>
            <div
              className="cs-2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}
            >
              <div>
                <p className="mono" style={{ marginBottom: 14, color: "var(--color-green)" }}>Primary</p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    lineHeight: 1.15,
                    color: "var(--color-ink)",
                  }}
                >
                  Match → Conversation rate
                </p>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 6 }}>Secondary</p>
                <Bullets items={SECONDARY} />
              </div>
            </div>
          </div>
        </section>

        {/* Exploring solutions */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Exploring Solutions</p>
            <div
              className="cs-2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
            >
              {CONCEPTS.map((c) => (
                <div key={c.title}>
                  <h3 style={subhead}>{c.title}</h3>
                  <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {c.bullets.map((b) => (
                      <li key={b} style={{ ...muted, fontSize: 15 }}>&bull; {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, borderTop: "1px solid var(--hair)", paddingTop: 22, maxWidth: 820 }}>
              <span className="mono" style={{ color: "var(--color-green)" }}>Selected concept</span>
              <h3 style={{ ...subhead, color: "var(--color-green)", marginTop: 10 }}>
                Concept 3 · Shared Icebreaker
              </h3>
              <p style={{ ...body, marginTop: 12 }}>{CONCEPT3}</p>
            </div>

            {/* Screenshots — after all three concept descriptions, no background */}
            <div
              className="cs-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 24,
                alignItems: "center",
                marginTop: 48,
              }}
            >
              {CONCEPT_IMAGES.map((s) => (
                <img key={s} src={IMG + s} alt="Concept exploration" style={{ width: "100%", display: "block" }} />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Process</p>
            <div
              className="cs-2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56, alignItems: "stretch" }}
            >
              <div style={{ background: "var(--color-white)", border: "1px solid var(--hair)", padding: 36 }}>
                <h3 style={subhead}>Deeper Investigation</h3>
                <DotBullets items={DEEPER} />
              </div>
              <div style={{ background: "var(--color-white)", border: "1px solid var(--hair)", padding: 36 }}>
                <h3 style={subhead}>New Direction</h3>
                <DotBullets items={NEW_DIRECTION} />
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--hair)", paddingTop: 32 }}>
              <h3 style={{ ...subhead, marginBottom: 24 }}>Why this system works</h3>
              <div
                className="cs-3"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}
              >
                {WHY_WORKS.map((w, i) => (
                  <div key={w}>
                    <span className="mono" style={{ color: "var(--color-pink-rose)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ ...body, marginTop: 12 }}>{w}</p>
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
            <p style={{ ...body, maxWidth: 640, marginBottom: 32 }}>
              Created using AI-assisted tools to quickly explore and validate the interaction flow.
            </p>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#F0F6F4" }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/cgdT9r6LeRU?rel=0"
                title="Intentional Matching — prototype"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </section>

        {/* Screens */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Screens</p>
            <div
              className="cs-4"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
            >
              {SCREENS.map((s) => (
                <img key={s} src={IMG + s} alt="App screen" style={{ width: "100%", display: "block" }} />
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Reflection</p>
            <div style={{ maxWidth: 820 }}>
              <Bullets items={REFLECTION} />
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="section">
          <div className="wrap">
            <p style={{ ...kicker, marginBottom: 24 }}>Next project</p>
            <Link
              href="/portfolio/web-platform-abba"
              className="np-card"
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 24,
                background: "var(--color-white)",
                border: "1px solid var(--hair)",
                padding: 48,
                textDecoration: "none",
              }}
            >
              <div>
                <span className="mono" style={{ color: "var(--color-green)" }}>Web platform</span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "clamp(28px, 3.4vw, 44px)",
                    lineHeight: 1.05,
                    color: "var(--color-ink)",
                    marginTop: 10,
                  }}
                >
                  Web platform «ABBA»
                </p>
              </div>
              <span
                aria-hidden="true"
                style={{ fontFamily: "var(--font-mono)", fontSize: 26, color: "var(--color-pink-rose)", lineHeight: 1 }}
              >
                ↗
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
