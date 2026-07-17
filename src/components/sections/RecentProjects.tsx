import React from "react";
import Link from "next/link";
import { WorkTile } from "./WorkTile";

const PROJECTS = [
  {
    title: "Intentional Matching",
    meta: "Dating app feature",
    image: "https://framerusercontent.com/images/nTniTV6JMlZy1Pbhsuy0v2SAP0.png",
    tint: "#fff",
    href: "/portfolio/intentional-matching",
  },
  {
    title: "Woodland Cards",
    meta: "Mobile card game",
    image: "/assets/img/wc-thumb.png",
    tint: "#fff",
    href: "/portfolio/woodland-cards",
  },
  {
    title: "Web platform «ABBA»",
    meta: "Web platform",
    image: "https://framerusercontent.com/images/MnI3hWwR83gz6wTwCbGGC1ts1U.png",
    tint: "#fff",
    href: "/portfolio/web-platform-abba",
  },
  {
    title: "Booking app «MovieNest»",
    meta: "Booking app",
    image: "https://framerusercontent.com/images/Ow0oXr1dIR90PsZzEPtl5YWOhQ.png",
    tint: "#fff",
    href: "/portfolio/booking-app-movienest",
  },
];

/**
 * Work — "Selected work" eyebrow + a two-column grid of large tinted project
 * tiles; the third runs full-width as a feature block.
 */
export function RecentProjects() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <p className="eyebrow" style={{ fontSize: 15 }}>Recent Projects</p>
          <Link
            href="/portfolio"
            className="mono"
            style={{ color: "var(--color-ink)" }}
          >
            View all projects ↗
          </Link>
        </div>

        <div
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {PROJECTS.map((p) => (
            <WorkTile
              key={p.title}
              title={p.title}
              meta={p.meta}
              image={p.image}
              tint={p.tint}
              href={"href" in p ? (p as { href: string }).href : "#"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
