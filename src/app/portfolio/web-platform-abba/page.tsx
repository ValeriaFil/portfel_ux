import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Carousel } from "@/components/sections/Carousel";

export const metadata: Metadata = {
  title: "Web platform «ABBA» — Valeria Filipchyk",
  description:
    "A structured multi-page web platform for a business community — services, events and trust in one place.",
};

const IMG = "https://framerusercontent.com/images/";

const TAGS = ["UIDesign", "DesignThinking", "Structuring", "VisualDesign", "Collaboration"];

const CHALLENGES = [
  "No clear list or explanation of services.",
  "Event info was spread across social media.",
  "Lack of structure limited user understanding.",
  "Needed to build trust and show value.",
];
const GOALS = [
  "Create a structured website with clear service info.",
  "Bring event updates into one place.",
  "Attract more clients by improving communication.",
];

const WHAT_I_DID = [
  "Analyzed the old landing page.",
  "Met with the founders.",
  "Discussed clients and their needs.",
  "Reviewed social media content.",
  "Held 2 interviews with active clients.",
];
const KEY_INSIGHTS = [
  "Users didn’t understand the full list of services.",
  "Same questions were asked repeatedly.",
  "The company wanted to appear more professional.",
  "Social media content didn’t align with the website.",
  "Clients valued transparency and wanted more details.",
];

const PRIORITIES = [
  {
    title: "Switched to a multi-page site",
    desc: "The company needed to present diverse information (services, events, joining instructions, team, etc.) that couldn’t fit into a single scrollable layout without compromising clarity.",
  },
  {
    title: "Flexible structure",
    desc: "The structure and elements are designed with reusability and the ability to independently add new content, allowing for future expansions and ease of use.",
  },
  {
    title: "Focus on core functionality",
    desc: "The main user flows and important pages are developed first to ensure a successful launch. Additional ideas are considered during the structural planning, making it easy to add new sections in the future.",
  },
];

const JOURNEY = [
  {
    problem: "Focus shift",
    pdesc: "The team had many future-oriented ideas (“we might offer this”, “we’re planning to add that”), which constantly pulled attention away from building a clear MVP based on current needs.",
    res: "Focus on Core Content",
    rdesc: "I kept the focus on the core content and proposed two pages with optional extended functionality — giving space for future development without overloading the first release.",
  },
  {
    problem: "Conflicting opinions",
    pdesc: "Each team member suggested micro changes, while the founders had a different vision altogether. This made alignment difficult and slowed down decisions.",
    res: "Grounded Design Decisions",
    rdesc: "I based my design decisions on logic and examples, explaining the reasoning and impact. I reminded the team we’re designing for users, not internal preferences, which helped reframe discussions.",
  },
  {
    problem: "Slow feedback",
    pdesc: "Everyone joined the meetings, but when follow-ups were needed — text content, confirmations, or small decisions — there was often no clear owner, and I was passed from one person to another.",
    res: "Clear Communication",
    rdesc: "I wrote clear, detailed requests, tagged the team, and flagged urgent inputs with reasons. Since feedback delays persisted, I started planning ahead and clarifying more early on.",
  },
];

const SOLUTION_IMAGES = [
  "B5zLgDB8y80bcg45ImPu05oUMk.jpg",
  "NMQB3NibbV1QNEVL595rqHwo98.png",
  "GqLlZsO6Tk9itDkFdLep4GZk0dc.png",
  "yQC7XLFD7MOFpZueQd6qcnMxbw.png",
  "vElLfVBn8kpuzre9UjhW07NTY.png",
  "dCIRxzQPk3WObo4L1ztAOanlwZ4.png",
  "y4MDiWUXoxllHUhyQz6NU5dKX7o.png",
];

const OUTCOME = [
  "Although the approved design didn’t go live as-is, the stakeholders expressed gratitude for the clarity and depth of the proposed solution.",
  "Due to development challenges on their end, the team eventually decided to work with a full-cycle web agency.",
  "The final version of the website was implemented by another team, but the foundation was based on my design. It set the visual and content direction and helped the team define the focus for future iterations.",
];

const REFLECTION = [
  {
    title: "Design System",
    image: "HBANi1DY0bBkJCfG60uSnYwyI.png",
    desc: "A small design system was created to improve developers' understanding of the project and simplify future changes.",
  },
  {
    title: "Templates",
    image: "HgojRRDQbjGbUPRu3Oh8ownmcSw.png",
    desc: "Templates used in the project can be adapted for other projects within the company.",
  },
  {
    title: "Flexibility of Solutions",
    image: "OFAT8jdA1uQsU5UO1HRCZzyGI.png",
    desc: "The project highlighted the importance of incorporating flexibility into project solutions, enabling them to scale and adapt to changing requirements in the future.",
  },
];

/* ---- shared styles ---- */
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((b) => (
        <li key={b} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 12, ...body, fontSize: 15 }}>
          <span style={{ color: "var(--color-pink-rose)" }}>&bull;</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AbbaPage() {
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

            <h1 className="statement" style={{ fontSize: "clamp(40px, 5.2vw, 72px)", maxWidth: 900 }}>
              Web platform «ABBA»
            </h1>
            <p className="mono" style={{ marginTop: 16 }}>Web platform</p>

            <div
              style={{
                marginTop: 48,
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 6,
                overflow: "hidden",
                background:
                  "radial-gradient(130% 150% at 16% 12%, #E7F1ED 0%, #F1F6F4 46%, #FBFBF9 100%)",
              }}
            >
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 3 }}>
                Multi-page web platform
              </span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 3 }}>
                Structure · Clarity · Trust
              </span>
              <div style={{ position: "absolute", right: 44, top: 36, width: 110, height: 110, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "56px 48px", zIndex: 2 }}>
                <img
                  src={IMG + "B5zLgDB8y80bcg45ImPu05oUMk.jpg"}
                  alt="Web platform «ABBA» — cover"
                  style={{ maxWidth: "82%", maxHeight: "88%", objectFit: "contain", borderRadius: 10, filter: "drop-shadow(0 28px 58px rgba(3,76,59,.20))" }}
                />
              </div>
            </div>

            <div
              className="cs-2"
              style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}
            >
              <div>
                <div>
                  <p className="mono" style={{ marginBottom: 10 }}>Role</p>
                  <p style={body}>Independent Designer</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>Timeline</p>
                  <p style={body}>~5 weeks</p>
                </div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  I worked independently as the project’s designer — analyzed the old
                  landing page, discussed client needs, learned about their audience,
                  and proposed a new solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Goals */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Problem &amp; Goals</p>
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={card}>
                <h3 style={subhead}>Challenges</h3>
                <div style={{ marginTop: 20 }}><BulletList items={CHALLENGES} /></div>
              </div>
              <div style={card}>
                <h3 style={subhead}>Goals</h3>
                <div style={{ marginTop: 20 }}><BulletList items={GOALS} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Research &amp; Insights</p>
            <p style={{ ...body, maxWidth: 760, marginBottom: 48 }}>
              To better understand the company’s and users’ needs, I audited the
              existing website and discussed goals with the internal team.
            </p>
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={card}>
                <h3 style={subhead}>What I did</h3>
                <div style={{ marginTop: 20 }}><BulletList items={WHAT_I_DID} /></div>
              </div>
              <div style={card}>
                <h3 style={subhead}>Key insights</h3>
                <div style={{ marginTop: 20 }}><BulletList items={KEY_INSIGHTS} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach & Process */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Approach &amp; Process</p>
            <p style={{ ...body, maxWidth: 760, marginBottom: 48 }}>
              Below, I outline the project priorities that shaped the direction,
              followed by the co-creation journey of aligning the design with the
              team.
            </p>

            <div className="cs-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
              {PRIORITIES.map((p) => (
                <div key={p.title} style={card}>
                  <h3 style={subhead}>{p.title}</h3>
                  <p style={{ ...body, marginTop: 12 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 72 }}>
              {JOURNEY.map((j, i) => (
                <div
                  key={j.problem}
                  className="cs-2"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 48,
                    padding: i === 0 ? "0 0 32px" : "32px 0",
                    borderTop: i === 0 ? undefined : "1px solid var(--hair)",
                  }}
                >
                  <div>
                    <h3 style={subhead}>{j.problem}</h3>
                    <p style={{ ...body, marginTop: 12 }}>{j.pdesc}</p>
                  </div>
                  <div>
                    <h3 style={{ ...subhead, color: "var(--color-green)" }}>{j.res}</h3>
                    <p style={{ ...body, marginTop: 12 }}>{j.rdesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="section" style={{ borderTop: "none" }}>
          <div className="wrap">
            <p style={kicker}>Solution</p>
            <div style={{ marginBottom: 40 }}>
              <Carousel images={SOLUTION_IMAGES.map((s) => IMG + s)} alt="ABBA web platform design" />
            </div>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#F0F6F4" }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/WjB0n1UGxfE?rel=0"
                title="Web platform «ABBA» — walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Outcome &amp; Impact</p>
            <div className="cs-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              {OUTCOME.map((o) => (
                <div
                  key={o}
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--hair)",
                    padding: 32,
                  }}
                >
                  <p style={body}>{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Reflection</p>
            <div className="cs-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              {REFLECTION.map((r) => (
                <div
                  key={r.title}
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--hair)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      background: "#F5F5F5",
                      minHeight: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 24,
                    }}
                  >
                    <img
                      src={IMG + r.image}
                      alt={r.title}
                      style={{ maxWidth: "100%", maxHeight: 180, display: "block" }}
                    />
                  </div>
                  <div style={{ padding: 28 }}>
                    <h3 style={subhead}>{r.title}</h3>
                    <p style={{ ...body, marginTop: 12 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="section">
          <div className="wrap">
            <p style={{ ...kicker, marginBottom: 24 }}>Next project</p>
            <Link
              href="/portfolio/woodland-cards"
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
                <span className="mono" style={{ color: "var(--color-green)" }}>Mobile card game</span>
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
                  Woodland Cards
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
