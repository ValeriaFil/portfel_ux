import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Woodland Cards — Valeria Filipchyk",
  description:
    "A commercial mobile card game designed from scratch — original mechanics, a resource-combination system, and a clean mobile UI built around a cozy woodland theme. Shown under NDA with modified visuals.",
};

const IMG = "/assets/img/";
const TAGS = ["GameDesign", "UX", "UI", "MobileDesign"];

const MARKET = [
  { n: "01", t: "Use it now", d: "Play the Market card straight into a combination." },
  { n: "02", t: "Take it", d: "Add it to your hand for a future turn." },
  { n: "03", t: "Leave it", d: "Wait for a potentially stronger combination later." },
];
const ACTIONS = [
  { t: "🌪 Strong Wind", d: "Discard all Market cards and reveal new ones." },
  { t: "🌧 Heavy Rain", d: "Every player discards 1 random card from their hand." },
  { t: "🦊 Fox Trick", d: "Look at a player's hand and steal 1 card of your choice." },
  { t: "🦅 Eagle Eye", d: "Look at the top 3 of the Main Deck; take 1, reorder the rest to the bottom." },
  { t: "🍂 Lost Path", d: "The chosen player loses 2 Victory Points." },
  { t: "🐾 Broken Tracks", d: "Cancel the points from one combination a player scored this round." },
];
const TURN = ["Play a combination", "Take a card from the Market", "Play an Action Card"];
const MOBILE = [
  "The Market shows only three cards at a time.",
  "The player's hand is limited to five cards.",
  "Every interaction is a simple tap — no drag-and-drop.",
  "Important information stays visible throughout the game.",
];
const RULES = [
  { t: "Objective", d: "Score the most Victory Points over 6 rounds by completing Animal combinations." },
  { t: "Setup", d: "Each player draws 3 cards. Place 3 face-up Market cards, plus the Main Deck and Action Deck. Max hand size: 5." },
  { t: "On your turn", d: "Choose one: play a combination, take a Market card, or play an Action Card. Then draw back up to 3." },
];
const DECISIONS = [
  "Built the game around combinations instead of single cards, to reward long-term planning.",
  "Designed overlapping resources so animals compete for the same cards.",
  "Replaced random draws with a shared Market for more control.",
  "Added Action Cards as an alternative reward — points now vs. advantage later.",
  "Reduced every turn to three core actions to keep rules easy to learn.",
  "Designed the mobile UI alongside the mechanics, so gameplay and interface grew together.",
];
const COMBO = [
  { img: "wc-fox.png", cap: "Fox" },
  { img: "wc-meat.png", cap: "Food" },
  { img: "wc-shelter.png", cap: "Shelter" },
  { img: "wc-forest.png", cap: "Environment" },
];

const kicker: React.CSSProperties = {
  fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 15, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "var(--color-pink-rose)", marginBottom: 32,
};
const sub: React.CSSProperties = {
  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, lineHeight: 1.15, color: "var(--color-ink)", margin: 0,
};
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "#3C3B3B" };
const card: React.CSSProperties = { background: "var(--color-white)", border: "1px solid var(--hair)", padding: 36 };
const frame: React.CSSProperties = { background: "var(--color-white)", border: "1px solid var(--hair)", padding: 24 };
const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 13, letterSpacing: "0.08em",
  textTransform: "uppercase", color: "var(--color-ink-muted)",
};
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 };
const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 };
const op: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, color: "var(--color-ink-muted)" };

export default function WoodlandCardsPage() {
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
            <h1 className="statement" style={{ fontSize: "clamp(40px, 5.2vw, 72px)", maxWidth: 900 }}>Woodland Cards</h1>
            <p className="mono" style={{ marginTop: 16 }}>Mobile card game — commercial project</p>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "7px 14px", border: "1px solid var(--hair)", borderRadius: 999, background: "var(--color-white)", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-ink-muted)" }}>
                🔒 NDA project — visuals &amp; some details changed for confidentiality
              </span>
            </div>

            {/* Hero — card spread on woodland-green gradient */}
            <div style={{ marginTop: 40, position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 6, overflow: "hidden", background: "radial-gradient(130% 150% at 50% 4%, #E3EEE6 0%, #F1F6F4 48%, #FBFBF9 100%)" }}>
              <span className="mono" style={{ position: "absolute", top: 30, left: 34, color: "var(--color-green)", zIndex: 5 }}>Designed from scratch</span>
              <span className="mono" style={{ position: "absolute", bottom: 30, right: 34, color: "var(--color-pink-rose)", zIndex: 5 }}>Learn in minutes · Play strategically</span>
              <div style={{ position: "absolute", right: 44, top: 34, width: 110, height: 110, borderRadius: 9999, border: "1px solid rgba(3,76,59,.20)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                <img src={IMG + "wc-bear.png"} alt="Bear card" style={{ height: "56%", width: "auto", transform: "rotate(-12deg)", marginRight: -40, filter: "drop-shadow(0 16px 34px rgba(3,76,59,.24))", zIndex: 1 }} />
                <img src={IMG + "wc-meat.png"} alt="Meat card" style={{ height: "64%", width: "auto", transform: "rotate(-6deg)", marginRight: -40, filter: "drop-shadow(0 18px 38px rgba(3,76,59,.26))", zIndex: 2 }} />
                <img src={IMG + "wc-fox.png"} alt="Fox card" style={{ height: "72%", width: "auto", filter: "drop-shadow(0 22px 48px rgba(3,76,59,.30))", zIndex: 3 }} />
                <img src={IMG + "wc-shelter.png"} alt="Shelter card" style={{ height: "64%", width: "auto", transform: "rotate(6deg)", marginLeft: -40, filter: "drop-shadow(0 18px 38px rgba(3,76,59,.26))", zIndex: 2 }} />
                <img src={IMG + "wc-forest.png"} alt="Forest card" style={{ height: "56%", width: "auto", transform: "rotate(12deg)", marginLeft: -40, filter: "drop-shadow(0 16px 34px rgba(3,76,59,.24))", zIndex: 1 }} />
              </div>
            </div>

            {/* Meta + about */}
            <div className="cs-2" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 72, marginTop: 56, alignItems: "start" }}>
              <div>
                <div><p className="mono" style={{ marginBottom: 10 }}>Role</p><p style={body}>Game &amp; UX/UI Designer</p></div>
                <div style={{ marginTop: 32 }}><p className="mono" style={{ marginBottom: 10 }}>Type</p><p style={body}>Mobile card game — commercial (under NDA)</p></div>
                <div style={{ marginTop: 32 }}><p className="mono" style={{ marginBottom: 10 }}>Scope</p><p style={body}>Mechanics · rules · UI · visual direction</p></div>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>About the project</p>
                <p style={{ ...body, maxWidth: 640 }}>
                  Woodland Cards is a real commercial mobile card game I designed end to end. Because the project is under
                  NDA, the visuals and some details shown here have been changed or recreated specifically for this
                  portfolio. It was built around an original gameplay system: the brief was to design a game from scratch
                  on a given woodland theme and adapt it for mobile — rules simple enough to learn in minutes, yet with
                  meaningful strategic decisions in every match.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>The Challenge</p>
            <div className="cs-2" style={{ ...grid2, marginTop: 8 }}>
              <div style={card}><h3 style={sub}>Design an original mechanic</h3><p style={{ ...body, marginTop: 12 }}>Invent a card game system from scratch around the woodland theme — no borrowed rules, no unnecessary mechanics.</p></div>
              <div style={card}><h3 style={sub}>Adapt it for mobile</h3><p style={{ ...body, marginTop: 12 }}>Translate the game to a single mobile screen while keeping the interface clear, calm and intuitive.</p></div>
            </div>
            <p style={{ ...body, maxWidth: 760, marginTop: 32 }}>From the beginning, I wanted to avoid overly complex rules. Every action needed to be easy to understand — while still encouraging players to think strategically.</p>
          </div>
        </section>

        {/* Core Mechanic */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>The Core Mechanic</p>
            <div className="cs-2" style={{ ...grid2, gap: 48, alignItems: "center" }}>
              <div>
                <p style={body}>The project began with one simple idea: a card game centered around collecting <strong>Victory Points</strong>. Since the theme is a forest ecosystem, animals naturally became the main characters.</p>
                <p style={{ ...body, marginTop: 18 }}>The real challenge was making <em>every</em> animal valuable — even those worth only a few points. Instead of animals scoring on their own, I designed them as the <strong>foundation of a combination</strong>. To score, players collect the resources each animal needs.</p>
                {/* Combination sequence — below the text, no background */}
                <div style={{ marginTop: 30, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  {COMBO.map((c, i) => (
                    <div key={c.cap} style={{ display: "contents" }}>
                      <figure style={{ margin: 0, textAlign: "center" }}>
                        <img src={IMG + c.img} alt={c.cap} style={{ height: 86, width: "auto", filter: "drop-shadow(0 8px 18px rgba(3,76,59,.18))" }} />
                        <figcaption className="mono" style={{ marginTop: 8, fontSize: 11 }}>{c.cap}</figcaption>
                      </figure>
                      {i < COMBO.length - 1 && <span style={{ ...op, fontSize: 20 }}>+</span>}
                    </div>
                  ))}
                  <span style={{ ...op, fontSize: 20, color: "var(--color-pink-rose)" }}>=</span>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, lineHeight: 1, color: "var(--color-green)" }}>12</span>
                    <div className="mono" style={{ fontSize: 11, marginTop: 4 }}>Victory&nbsp;Points</div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
                <img src={IMG + "wc-fox.png"} alt="Fox card" style={{ width: "100%", maxWidth: 220, filter: "drop-shadow(0 18px 40px rgba(3,76,59,.22))" }} />
                <img src={IMG + "wc-wolf.png"} alt="Wolf card" style={{ width: "100%", maxWidth: 220, filter: "drop-shadow(0 18px 40px rgba(3,76,59,.22))" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Resource System */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Building the Resource System</p>
            <p style={{ ...body, maxWidth: 760 }}>With the animals defined, I created the supporting resource cards, divided into three simple categories: <strong>Food</strong>, <strong>Shelter</strong> and <strong>Environment</strong>.</p>
            <p style={{ ...body, maxWidth: 760, marginTop: 16 }}>Rather than giving every animal unique resources, I deliberately designed <strong>overlapping requirements</strong>. This creates natural competition over valuable cards and forces players to constantly decide which combination is worth completing first.</p>
            <div className="cs-3" style={{ ...grid3, marginTop: 32 }}>
              <div style={{ ...frame, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={IMG + "wc-meat.png"} alt="Meat card" style={{ width: "auto", maxHeight: 360 }} />
                <p className="mono" style={{ marginTop: 16 }}>Food — Meat</p>
              </div>
              <div style={{ ...frame, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={IMG + "wc-shelter.png"} alt="Shelter card" style={{ width: "auto", maxHeight: 360 }} />
                <p className="mono" style={{ marginTop: 16 }}>Shelter</p>
              </div>
              <div style={{ ...frame, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={IMG + "wc-forest.png"} alt="Forest / Environment card" style={{ width: "auto", maxHeight: 360 }} />
                <p className="mono" style={{ marginTop: 16 }}>Environment — Forest</p>
              </div>
            </div>
            <div style={{ ...frame, marginTop: 44, padding: 18, overflow: "hidden" }}>
              <img src={IMG + "wc-meat-map.png"} alt="Meat is required by the Fox, Bear and Wolf" style={{ width: "100%", display: "block" }} />
            </div>
            <p className="mono" style={{ marginTop: 16, textAlign: "center" }}>One resource, three predators — Meat is required by the Fox, the Bear and the Wolf</p>
          </div>
        </section>

        {/* Market */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Introducing Strategic Decisions</p>
            <h3 style={{ ...sub, fontSize: 26 }}>A shared Market</h3>
            <p style={{ ...body, maxWidth: 760, marginTop: 14 }}>Relying entirely on random draws would make the game feel too luck-based. So I introduced a shared <strong>Market</strong>. Instead of drawing blindly, players can see the available cards and decide what to do with each one:</p>
            <div className="cs-3" style={{ ...grid3, marginTop: 28 }}>
              {MARKET.map((m) => (
                <div key={m.n} style={card}>
                  <span className="mono" style={{ color: "var(--color-pink-rose)" }}>{m.n}</span>
                  <p style={{ ...sub, fontSize: 19, marginTop: 10 }}>{m.t}</p>
                  <p style={{ ...body, marginTop: 8 }}>{m.d}</p>
                </div>
              ))}
            </div>
            <p style={{ ...body, maxWidth: 760, marginTop: 28 }}>This one mechanic significantly increased strategic depth — and naturally encouraged interaction between players.</p>
          </div>
        </section>

        {/* Action Deck */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Adding Player Interaction</p>
            <div className="cs-2" style={{ ...grid2, gap: 48, alignItems: "center" }}>
              <div>
                <h3 style={{ ...sub, fontSize: 26 }}>The Action Deck</h3>
                <p style={{ ...body, marginTop: 14 }}>To let players influence each other, I added a separate <strong>Action Deck</strong>. Instead of scoring, a player can exchange a small combination for an Action Card — a real decision: <em>score points now, or sacrifice them for a tactical advantage later.</em></p>
                <p style={{ ...body, marginTop: 18 }}>This made Action Cards an intentional strategic resource rather than a random bonus.</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
                <img src={IMG + "wc-strongwind.png"} alt="Strong Wind action card" style={{ width: "100%", maxWidth: 215, filter: "drop-shadow(0 18px 40px rgba(3,76,59,.22))" }} />
                <img src={IMG + "wc-heavyrain.png"} alt="Heavy Rain action card" style={{ width: "100%", maxWidth: 215, filter: "drop-shadow(0 18px 40px rgba(3,76,59,.22))" }} />
              </div>
            </div>
            <div className="cs-3" style={{ ...grid3, gap: 20, marginTop: 44 }}>
              {ACTIONS.map((a) => (
                <div key={a.t} style={frame}>
                  <p style={{ ...sub, fontSize: 18 }}>{a.t}</p>
                  <p style={{ ...body, fontSize: 14, marginTop: 8 }}>{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gameplay loop */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Shaping the Gameplay Loop</p>
            <p style={{ ...body, maxWidth: 760 }}>With the core mechanics in place, the game settled into a simple turn structure. On each turn, players choose <strong>one of three actions</strong>:</p>
            <div className="cs-3" style={{ ...grid3, marginTop: 28 }}>
              {TURN.map((t, i) => (
                <div key={t} style={card}>
                  <span className="mono" style={{ color: "var(--color-pink-rose)" }}>Action {i + 1}</span>
                  <p style={{ ...sub, fontSize: 19, marginTop: 10 }}>{t}</p>
                </div>
              ))}
            </div>
            <p style={{ ...body, maxWidth: 760, marginTop: 28 }}>A few constraints keep the pacing smooth: a <strong>maximum hand of 5</strong>, an <strong>automatic draw</strong> at the end of each turn, and a <strong>fixed 6 rounds</strong>. These keep the flow consistent while leaving room for tactical choices.</p>
          </div>
        </section>

        {/* Balancing */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Balancing the Game</p>
            <div className="cs-2" style={{ ...grid2, gap: 48, alignItems: "start" }}>
              <p style={body}>Animal values are determined by both their rarity and the difficulty of completing their combinations. Higher-value animals require less common resources but reward significantly more Victory Points.</p>
              <p style={body}>At the same time, lower-value animals stay useful — they're easier to complete and offer a faster route to earning Action Cards.</p>
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Designing for Mobile</p>
            <p style={{ ...body, maxWidth: 760 }}>The main challenge was fitting every essential element onto a single screen without overwhelming the player. A few decisions made that possible:</p>
            <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
              {MOBILE.map((m) => (
                <li key={m} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 12, ...body, fontSize: 15 }}>
                  <span style={{ color: "var(--color-pink-rose)" }}>•</span><span>{m}</span>
                </li>
              ))}
            </ul>
            <div style={{ ...frame, marginTop: 40, padding: 0, overflow: "hidden" }}>
              <img src={IMG + "wc-screen-main.png"} alt="Woodland Cards main screen" style={{ width: "100%", display: "block" }} />
            </div>
            <p className="mono" style={{ marginTop: 12 }}>Main screen — Market, hand, decks and scores on one view</p>
            <div style={{ ...frame, marginTop: 28, padding: 0, overflow: "hidden" }}>
              <img src={IMG + "wc-screen-points.png"} alt="Woodland Cards scoring screen" style={{ width: "100%", display: "block" }} />
            </div>
            <p className="mono" style={{ marginTop: 12 }}>Scoring — completing a combination awards Victory Points</p>
          </div>
        </section>

        {/* Quick Rules */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Quick Rules</p>
            <div className="cs-2" style={{ ...grid2, alignItems: "stretch" }}>
              {RULES.map((r) => (
                <div key={r.t} style={card}>
                  <h3 style={{ ...sub, fontSize: 20 }}>{r.t}</h3>
                  <p style={{ ...body, marginTop: 10 }}>{r.d}</p>
                </div>
              ))}
              <div style={card}>
                <h3 style={{ ...sub, fontSize: 20 }}>A combination</h3>
                <p style={{ ...body, marginTop: 10 }}>🐻 Bear = 🥩 Food + 🏠 Shelter + 🌲 Environment → 10 VP. For each one, gain points <em>or</em> draw an Action Card.</p>
                <div style={{ marginTop: 14, padding: "12px 14px", background: "#F1F6F4", borderRadius: 8 }}>
                  <p style={{ ...body, fontSize: 14, margin: 0 }}><strong>You don't need a full combination.</strong> The minimum is two cards — e.g. Fox&nbsp;+&nbsp;Food. A partial combination can be exchanged for an Action Card instead of scoring.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome + Key decisions */}
        <section className="section">
          <div className="wrap">
            <p style={kicker}>Final Outcome</p>
            <p style={{ ...body, maxWidth: 760 }}>The result is a complete mobile card game — mechanics, cards and combinations, resource balancing, rules, mobile UI, and card illustrations with a consistent visual direction.</p>
            <p style={{ ...body, maxWidth: 760, marginTop: 16 }}>The project shows how gameplay design and interface design can evolve together: many UI decisions were made <em>while</em> designing the mechanics, so both systems support one another.</p>
            <h3 style={{ ...sub, fontSize: 22, marginTop: 44 }}>Key design decisions</h3>
            <div className="cs-3" style={{ ...grid3, marginTop: 24 }}>
              {DECISIONS.map((d, i) => (
                <div key={d} style={{ ...card, padding: 28 }}>
                  <span className="mono" style={{ color: "var(--color-pink-rose)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ ...body, marginTop: 10 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="section">
          <div className="wrap">
            <p style={{ ...kicker, marginBottom: 24 }}>Next project</p>
            <Link href="/portfolio/booking-app-movienest" className="np-card"
              style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, background: "var(--color-white)", border: "1px solid var(--hair)", padding: 48, textDecoration: "none" }}>
              <div>
                <span className="mono" style={{ color: "var(--color-green)" }}>Booking app</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, color: "var(--color-ink)", marginTop: 10 }}>Booking app «MovieNest»</p>
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
