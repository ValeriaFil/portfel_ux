"use client";

import React from "react";

/**
 * Template re-mounts on every route change, so this wrapper re-triggers a
 * subtle fade/rise animation — giving smooth transitions between pages.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
