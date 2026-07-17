import React from "react";

/**
 * SiteFooter — quiet monospace strip: wordmark, credit and a back-to-top link.
 */
export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--hair)" }}>
      <div
        className="wrap"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <span className="mono" style={{ color: "var(--color-ink)" }}>
          Valeria Filipchyk
        </span>
        <span className="mono">© 2026 — UI/UX Designer</span>
        <a href="#top" className="mono" style={{ color: "var(--color-ink)" }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
