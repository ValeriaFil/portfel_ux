import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valeria Filipchyk — UX/UI Designer",
  description:
    "Portfolio of Valeria Filipchyk, UX/UI Designer focused on clarity and structure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
