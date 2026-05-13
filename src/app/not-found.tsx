import Link from "next/link";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--gutter)",
          textAlign: "center",
          background: "var(--cream)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(6rem, 20vw, 12rem)",
            fontWeight: 700,
            color: "var(--forest-pale)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          404
        </div>
        <div
          style={{
            width: 48,
            height: 3,
            background: "var(--gold)",
            margin: "0 auto 2rem",
          }}
        />
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--ink)",
            marginBottom: "1rem",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1rem",
            color: "var(--ink-muted)",
            maxWidth: "40ch",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          The page you&apos;re looking for may have moved or doesn&apos;t exist. Browse our catalogue below.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              background: "var(--forest)",
              color: "#ffffff",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Back to Catalogue
          </Link>
          <Link
            href="/thatch"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              background: "transparent",
              color: "var(--ink)",
              border: "1.5px solid var(--ink)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Synthetic Thatch
          </Link>
          <Link
            href="/bamboo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              background: "transparent",
              color: "var(--ink)",
              border: "1.5px solid var(--ink)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Synthetic Bamboo
          </Link>
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
