import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { WorkTile } from "@/components/sections/WorkTile";

export const metadata: Metadata = {
  title: "Portfolio — Valeria Filipchyk",
  description:
    "All projects by Valeria Filipchyk — UX/UI product work and visual design.",
};

const IMG = "https://framerusercontent.com/images/";

const UXUI = [
  {
    title: "Intentional Matching",
    meta: "Dating app feature",
    image: IMG + "nTniTV6JMlZy1Pbhsuy0v2SAP0.png",
    href: "/portfolio/intentional-matching",
  },
  {
    title: "Woodland Cards",
    meta: "Mobile card game",
    image: "/assets/img/wc-thumb.png",
    href: "/portfolio/woodland-cards",
  },
  {
    title: "Web platform «ABBA»",
    meta: "Web platform",
    image: IMG + "MnI3hWwR83gz6wTwCbGGC1ts1U.png",
    href: "/portfolio/web-platform-abba",
  },
  {
    title: "Booking app «MovieNest»",
    meta: "Booking app",
    image: IMG + "Ow0oXr1dIR90PsZzEPtl5YWOhQ.png",
    href: "/portfolio/booking-app-movienest",
  },
];

const OTHER = [
  {
    title: "Website «Izobistar»",
    meta: "Website",
    image: IMG + "Z4qjHaQzdy0eANqw9GHgse5IzCI.png",
    href: "/portfolio/website-izobistar",
  },
  {
    title: "LumoControl",
    meta: "App concept",
    image: IMG + "GfBC5JXqsszHuEpInrsZh3f5eTk.png",
    images: [
      IMG + "GfBC5JXqsszHuEpInrsZh3f5eTk.png",
      IMG + "peQ3yIi5LPyZmYJ7wYkFLk7zdM.png",
      IMG + "o5cQbpkwwd6QStX4QhCYKIDMfVY.png",
      IMG + "Sd0EMkJvJIFs0cpK2K9Tjt6SYM.png",
    ],
    href: "/portfolio/lumocontrol",
  },
  {
    title: "Visual Design for «iFactory 3D»",
    meta: "Visual design",
    image: IMG + "QOvGBvO9WwCRNEaDlnLBNaRLuY.png",
    href: "/portfolio/visual-design-ifactory3d",
  },
  {
    title: "Visual Design for «Medi»",
    meta: "Visual design",
    image: IMG + "iFnBQkalNaz2NANrnyu9XyuvJs.png",
    href: "/portfolio/visual-design-medi",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* UX/UI Projects */}
        <section className="section" style={{ paddingTop: 72 }}>
          <div className="wrap">
            <p className="eyebrow" style={{ fontSize: 15, marginBottom: 40 }}>
              UX/UI Projects
            </p>
            <div
              className="work-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
            >
              {UXUI.map((p) => (
                <WorkTile
                  key={p.title}
                  title={p.title}
                  meta={p.meta}
                  image={p.image}
                  tint="#fff"
                  href={p.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow" style={{ fontSize: 15, marginBottom: 40 }}>
              Other Projects
            </p>
            <div
              className="work-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
            >
              {OTHER.map((p) => (
                <WorkTile
                  key={p.title}
                  title={p.title}
                  meta={p.meta}
                  image={p.image}
                  images={"images" in p ? (p as { images: string[] }).images : undefined}
                  tint="#fff"
                  href={"href" in p ? (p as { href: string }).href : "#"}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
