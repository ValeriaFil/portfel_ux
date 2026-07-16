"use client";

import React from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: 16,
  color: "var(--color-ink)",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--hair)",
  borderRadius: 0,
  padding: "12px 0",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-ink-muted)",
  marginBottom: 6,
};

/**
 * Contact — editorial closer: a large statement and email/socials beside a
 * minimal underline form. Focus turns the field underline pink.
 */
export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/valeriafildesign@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottom = "1px solid var(--color-pink-rose)");
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottom = "1px solid var(--hair)");

  return (
    <section id="contact" className="section">
      <div
        className="wrap contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
      >
        {/* Left: invitation */}
        <div>
          <p className="eyebrow" style={{ marginBottom: 28, fontSize: 15 }}>Contact</p>
          <p className="statement" style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}>
            Let&rsquo;s build something{" "}
            <span style={{ color: "var(--color-green)" }}>clear</span> together
            <span style={{ color: "var(--color-ink)" }}>.</span>
          </p>

          <a
            href="mailto:valeriafildesign@gmail.com"
            style={{
              display: "inline-block",
              marginTop: 36,
              fontFamily: "var(--font-body)",
              fontSize: 20,
              color: "var(--color-ink)",
              borderBottom: "1px solid var(--color-pink-rose)",
              paddingBottom: 3,
              textDecoration: "none",
            }}
          >
            valeriafildesign@gmail.com
          </a>

          <div style={{ display: "flex", gap: 28, marginTop: 28 }}>
            <a className="mono" href="https://www.linkedin.com/in/valeriafildesign/" style={{ color: "var(--color-ink)" }}>
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle} htmlFor="c-name">Name</label>
            <input id="c-name" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
              onFocus={onFocus} onBlur={onBlur} style={inputStyle} placeholder="Your name" />
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle} htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              onFocus={onFocus} onBlur={onBlur} style={inputStyle} placeholder="you@example.com" />
          </div>
          <div style={{ marginBottom: 36 }}>
            <label style={labelStyle} htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows={3} required value={message} onChange={(e) => setMessage(e.target.value)}
              onFocus={onFocus} onBlur={onBlur} style={{ ...inputStyle, resize: "vertical" }}
              placeholder="Tell me about your project" />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mono"
            style={{
              border: "none",
              cursor: status === "sending" ? "default" : "pointer",
              background: "var(--color-pink-rose)",
              color: "var(--color-white)",
              padding: "16px 28px",
              letterSpacing: "0.1em",
              opacity: status === "sending" ? 0.7 : 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = status === "sending" ? "0.7" : "1")}
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>

          {status === "sent" && (
            <p className="mono" style={{ marginTop: 18, color: "var(--color-green)" }}>
              Thanks — your message has been sent. I&rsquo;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mono" style={{ marginTop: 18, color: "var(--color-pink-rose)" }}>
              Something went wrong. Please email me directly at valeriafildesign@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
