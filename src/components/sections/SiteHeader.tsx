"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/#career", section: "career" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Contact", href: "/#contact", section: "contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
] as const;

/**
 * SiteHeader — editorial bar: monospace wordmark + uppercase monospace nav.
 * The active page/section is highlighted in pink: Portfolio on any /portfolio
 * route, and Career/About/Contact via a scroll-spy on the homepage.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  // Scroll-spy: on the homepage, highlight whichever section the reader has
  // scrolled into (its top has passed a point ~40% down the viewport).
  React.useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }
    const ids = ["career", "about", "contact"];
    const spy = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let active: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) active = id;
      }
      setActiveSection(active);
    };
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy, { passive: true });
    spy();
    return () => {
      window.removeEventListener("scroll", spy);
      window.removeEventListener("resize", spy);
    };
  }, [pathname]);

  const isActive = (item: (typeof NAV)[number]) => {
    if (item.href === "/portfolio") return pathname.startsWith("/portfolio");
    if ("section" in item) return pathname === "/" && activeSection === item.section;
    return false;
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--canvas)",
        borderBottom: "1px solid var(--hair)",
      }}
    >
      <div
        className="wrap"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span
            className="mono"
            style={{ color: "var(--color-ink)", fontWeight: 500, letterSpacing: "0.06em" }}
          >
            Valeria Filipchyk
          </span>
        </Link>

        <nav style={{ display: "flex", gap: 34 }}>
          {NAV.map((item) => {
            const active = isActive(item);
            const color = active ? "var(--color-pink-rose)" : "var(--color-ink)";
            return "external" in item && item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
                style={{ color }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="mono"
                style={{ color }}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
