"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { UseCaseFinder } from "@/components/UseCaseFinder";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/InteractiveElements";
import { Lightbox } from "@/components/Lightbox";

interface CompareProduct {
  id: string;
  name: string;
  type: "thatch" | "bamboo";
  image: string;
  warranty: string;
  material: string;
}

// ─── Gallery images ────────────────────────────────────────────────────────
const galleryImages = [
  { src: "/images/projects/thatch-project.png", label: "Palm Thatch Resort — Goa" },
  { src: "/images/projects/burhan-project.png", label: "Beach Villa — Andaman" },
  { src: "/images/projects/farmhouse-project.png", label: "Farmhouse Roof — Karnataka" },
  { src: "/images/projects/project-01.png", label: "Beach Resort Installation" },
  { src: "/images/projects/project-02.png", label: "Tropical Restaurant" },
  { src: "/images/projects/project-03.png", label: "Hill Station Cottage" },
  { src: "/images/projects/project-04.png", label: "Poolside Bar — Kerala" },
  { src: "/images/projects/project-05.png", label: "Coastal Villa" },
];

// ─── Catalogue-style product grid ──────────────────────────────────────────────
function ProductEntry({
  product,
  index,
  type,
  selected,
  onToggleCompare,
}: {
  product: any;
  index: number;
  type: "thatch" | "bamboo";
  selected: boolean;
  onToggleCompare: () => void;
}) {
  return (
    <div className="product-card">
      {/* Compare checkbox */}
      <button
        className={`product-card__compare ${selected ? "product-card__compare--selected" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleCompare();
        }}
        aria-label={selected ? "Remove from compare" : "Add to compare"}
        title={selected ? "Remove from compare" : "Add to compare"}
      >
        {selected ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        )}
      </button>

      <Link
        href={`/${type}/${product.id}`}
        style={{ display: "block", textDecoration: "none", color: "inherit" }}
      >
        {/* Full-bleed image with hover overlay */}
        <div className="product-card__image-wrap">
          <img
            src={`/images/${type}/${product.id.replace("exotic-", "").replace("bamboo-", "")}-splash.png`}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Hover overlay */}
          <div className="product-card__overlay">
            <div className="product-card__overlay-inner">
              <span className="product-card__overlay-btn">View Product</span>
              <div style={{ height: "0.5rem" }} />
              <span className="product-card__overlay-btn product-card__overlay-btn--secondary">
                {product.warranty} Warranty
              </span>
            </div>
          </div>
        </div>

        {/* Material badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontFamily: "var(--font-heading)",
            fontSize: "0.5rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--cream)",
            background: "rgba(26,21,16,0.7)",
            padding: "0.375rem 0.875rem",
            zIndex: 5,
          }}
        >
          {product.material?.split("(")[0].trim() || "HDPE Synthetic"}
        </div>

        {/* Warranty badge */}
        {product.warranty && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: product.material ? `${product.material.split("(")[0].trim().length * 0.5 + 9}rem` : "auto",
              right: selected ? "4rem" : "1rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "var(--gold)",
              padding: "0.375rem 0.875rem",
              zIndex: 5,
            }}
          >
            {product.warranty} Warranty
          </div>
        )}
      </Link>

      {/* Caption block */}
      <div style={{ padding: "1.5rem 0 0 0" }}>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.5625rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.5rem",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {type === "thatch" ? "Synthetic Thatch" : "Synthetic Bamboo"}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: "0.75rem",
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}
        >
          {product.name}
        </h3>
        <p
          className="body-sm"
          style={{
            color: "var(--ink-muted)",
            marginBottom: "1rem",
            lineHeight: 1.6,
          }}
        >
          {product.description}
        </p>

        {/* Color swatches */}
        <div style={{ display: "flex", gap: "0.375rem", alignItems: "center" }}>
          {product.colors.slice(0, 8).map((color: any) => (
            <div
              key={color.name}
              title={color.name}
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: color.hex,
                border: "1px solid rgba(26,21,16,0.1)",
              }}
            />
          ))}
          {product.colors.length > 6 && (
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 600,
                color: "var(--ink-muted)",
                letterSpacing: "0.05em",
              }}
            >
              +{product.colors.length - 6}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function HomePage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const bamboo = products.find((p) => p.id === "bamboo-products");

  // Compare state
  const [compareProducts, setCompareProducts] = useState<CompareProduct[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Inquiry form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryProduct, setInquiryProduct] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productLabel = inquiryProduct || "Not specified";
    const message = [
      `Name: ${inquiryName}`,
      `Phone: ${inquiryPhone}`,
      inquiryEmail ? `Email: ${inquiryEmail}` : null,
      `Product Interest: ${productLabel}`,
      inquiryMessage ? `\nMessage:\n${inquiryMessage}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const whatsappText = encodeURIComponent(
      `Hi KHW Solutions!\n\nI'd like to get a quote. Here are my details:\n\n${message}`
    );
    window.open(`https://wa.me/919148584281?text=${whatsappText}`, "_blank");
  };

  const toggleCompare = (product: any, type: "thatch" | "bamboo") => {
    setCompareProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      const img = `/images/${type}/${product.id.replace("exotic-", "").replace("bamboo-", "")}-splash.png`;
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          type,
          image: img,
          warranty: product.warranty || "—",
          material: product.material?.split("(")[0].trim() || "HDPE Synthetic",
        },
      ];
    });
  };

  const handleRemove = (id: string) => {
    setCompareProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClear = () => {
    setCompareProducts([]);
  };

  return (
    <>
      {/* ─── COVER ───────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "var(--forest)",
        }}
      >
        {/* Full-bleed background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/images/projects/thatch-project.png"
            alt="Synthetic palm thatch installation"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(29,109,41,0.85) 0%, rgba(29,109,41,0.6) 50%, rgba(29,109,41,0.75) 100%)",
          }} />
        </div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", padding: "clamp(6rem, 12vw, 10rem) var(--gutter) clamp(4rem, 8vw, 8rem)" }}>
          {/* Top row: edition label + logo mark */}
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "clamp(3rem, 6vw, 6rem)" }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}>
                VOL. 01 &mdash; 2026 EDITION
              </div>
              {/* Brand mark */}
              <div style={{ textAlign: "right" }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.25rem",
                }}>
                  KHW
                </div>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.375rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}>
                  Solutions
                </div>
              </div>
            </div>
          </Reveal>

          {/* Center: headline + tagline + CTA */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "700px" }}>
            <Reveal delay={0.1}>
              <h1 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}>
                SYNTHETIC<br />THATCH<br />&amp; BAMBOO
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ width: 56, height: 3, background: "var(--gold)", marginBottom: "1.5rem" }} />
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: 480,
              }}>
                Asia's most authentic artificial thatch and bamboo &mdash; trusted by architects, resorts, and homeowners across India since 2020.
              </p>
            </Reveal>

            {/* Trust badges inline */}
            <Reveal delay={0.3}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                {["TUV SUD", "SGS", "INTERTEK", "LEED"].map((c) => (
                  <span key={c} style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "0.25rem 0.625rem",
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Chapter links */}
            <Reveal delay={0.35}>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {[
                  { num: "01", label: "Synthetic Thatch", href: "/thatch", color: "var(--forest)" },
                  { num: "02", label: "Synthetic Bamboo", href: "/bamboo", color: "var(--bark)" },
                ].map((ch) => (
                  <Link
                    key={ch.num}
                    href={ch.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      textDecoration: "none",
                      padding: "1rem 1.75rem",
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(238,124,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}>
                      {ch.num}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}>
                      {ch.label}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Stats row at bottom */}
          <Reveal delay={0.4}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "rgba(255,255,255,0.08)",
              marginTop: "clamp(3rem, 6vw, 5rem)",
            }}>
              {[
                { value: "20+", label: "Year Warranty" },
                { value: "50+", label: "Year Lifespan" },
                { value: "100%", label: "Recyclable" },
                { value: "260", label: "km/h Wind Rated" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: "rgba(29,109,41,0.5)",
                  padding: "1.25rem 1.5rem",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TABLE OF CONTENTS ─────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
          background: "var(--cream-mid)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <Reveal>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                In This Issue
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                }}
              >
                CONTENTS
              </h2>
            </Reveal>
          </div>

          {/* TOC entries */}
          <StaggerContainer stagger={0.08}>
            {[
              { href: "/thatch", num: "01", title: "Synthetic Thatch Collection", sub: "Palm &bull; Reed &bull; Straw &bull; Folding Shingles", page: "p. 03" },
              { href: "/bamboo", num: "02", title: "Synthetic Bamboo Range", sub: "Rolls &bull; Poles &bull; Mats &bull; Panels &bull; Fences", page: "p. 09" },
              { href: "/#why", num: "03", title: "Why Synthetic?", sub: "Performance, safety &amp; sustainability comparison", page: "p. 15" },
              { href: "/#gallery", num: "04", title: "Project Gallery", sub: "Installed across India &mdash; from coast to hills", page: "p. 17" },
              { href: "/#contact", num: "05", title: "Consultation &amp; Ordering", sub: "Free quotes, samples &amp; expert guidance", page: "p. 19" },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="toc-grid"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.25rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.sub }}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.6875rem",
                      color: "var(--ink-muted)",
                      letterSpacing: "0.03em",
                    }}
                  />
                </div>
                <span
                  className="toc-page"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--ink-faint)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.page}
                </span>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── USE CASE FINDER ───────────────────────────────────────────── */}
      <UseCaseFinder />

      {/* ─── BRAND STORY ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
          background: "var(--ink)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div className="split-2" style={{ alignItems: "center" }}>
            {/* Image collage */}
            <div className="brand-story-image">
              <Reveal direction="left">
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    overflow: "hidden",
                    background: "var(--cream-dark)",
                  }}
                >
                  <img
                    src="/images/thatch/palm-thatch-hero.png"
                    alt="Synthetic palm thatch"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.style.background = "var(--forest-mid)";
                    }}
                  />
                </div>
              </Reveal>
              {/* Inset image */}
              <div className="brand-story-inset">
                <Reveal delay={0.2} direction="right">
                  <img
                    src="/images/bamboo/bamboo-rolls-hero.png"
                    alt="Synthetic bamboo"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.style.background = "var(--bark)";
                    }}
                  />
                </Reveal>
              </div>
              {/* Est. badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "var(--gold)",
                  color: "var(--white)",
                  padding: "0.5rem 1rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Est. 2020
              </div>
            </div>

            {/* Story text */}
            <div>
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                  Our Story
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 700,
                    color: "var(--cream)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    marginBottom: "2rem",
                  }}
                >
                  CRAFTING<br />TROPICAL<br />PERMANENCE
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "2rem" }} />
              </Reveal>
              <Reveal delay={0.25}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    fontWeight: 400,
                    color: "rgba(248,243,236,0.5)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  Every KHW product begins as a careful study of nature. We take molds from authentic palm, reed, straw, and bamboo specimens &mdash; preserving every texture, node, and irregularity that makes natural materials so alive.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontWeight: 400,
                    color: "rgba(248,243,236,0.35)",
                    lineHeight: 1.8,
                    marginBottom: "2.5rem",
                  }}
                >
                  The result is a product that the most discerning architects specify with confidence.
                </p>
              </Reveal>

              {/* Stats */}
              <Reveal delay={0.35}>
                <div
                  className="split-2--3"
                  style={{
                    paddingTop: "2rem",
                    borderTop: "1px solid rgba(248,243,236,0.1)",
                  }}
                >
                  {[
                    { value: "20+", label: "Year Warranty" },
                    { value: "50+", label: "Year Lifespan" },
                    { value: "100%", label: "Recyclable" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "clamp(2rem, 3vw, 2.5rem)",
                          fontWeight: 700,
                          color: "var(--gold)",
                          lineHeight: 1,
                          marginBottom: "0.375rem",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.5625rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(248,243,236,0.35)",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THATCH CHAPTER ────────────────────────────────────────────── */}
      <section style={{ background: "var(--forest)", borderTop: "3px solid var(--gold)" }}>
        <div
          style={{
            padding: "clamp(5rem, 12vw, 10rem) var(--gutter) clamp(3rem, 6vw, 5rem)",
          }}
        >
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              SECTION 1 &mdash; CHAPTER ONE
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }} />
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              Synthetic<br />Thatch
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }} />
          </Reveal>
          <Reveal delay={0.25}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              HDPE-based products that capture every texture of natural palm, reed, and straw &mdash; with the performance of modern engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Thatch products */}
      <section style={{ background: "var(--cream)" }}>
        <div
          style={{
            padding: "clamp(4rem, 8vw, 8rem) var(--gutter)",
            maxWidth: "var(--container)",
            margin: "0 auto",
          }}
        >
          <div className="split-2" style={{ gap: "clamp(2rem, 4vw, 4rem)" }}>
            {thatch?.subProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.12}>
                <ProductEntry
                  product={product}
                  index={i}
                  type="thatch"
                  selected={compareProducts.some((p) => p.id === product.id)}
                  onToggleCompare={() => toggleCompare(product, "thatch")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BAMBOO CHAPTER ────────────────────────────────────────────── */}
      <section style={{ background: "var(--bark)", borderTop: "3px solid var(--gold)" }}>
        <div
          style={{
            padding: "clamp(5rem, 12vw, 10rem) var(--gutter) clamp(3rem, 6vw, 5rem)",
          }}
        >
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              SECTION 2 &mdash; CHAPTER TWO
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }} />
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              Synthetic<br />Bamboo
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }} />
          </Reveal>
          <Reveal delay={0.25}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              Hand-crafted from ASA premium outdoor material. 10,000-hour weather tested. Will not split, peel, or fade.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bamboo products */}
      <section style={{ background: "var(--cream-mid)" }}>
        <div
          style={{
            padding: "clamp(4rem, 8vw, 8rem) var(--gutter)",
            maxWidth: "var(--container)",
            margin: "0 auto",
          }}
        >
          <div className="split-2--3">
            {bamboo?.subProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <ProductEntry
                  product={product}
                  index={i}
                  type="bamboo"
                  selected={compareProducts.some((p) => p.id === product.id)}
                  onToggleCompare={() => toggleCompare(product, "bamboo")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SYNTHETIC ─────────────────────────────────────────────── */}
      <section
        id="why"
        style={{
          padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
          background: "var(--forest)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div
            className="split-1fr-2fr"
            style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
          >
            <Reveal>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                Performance
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                }}
              >
                WHY<br />CHOOSE<br />SYNTHETIC?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 560,
                  lineHeight: 1.7,
                }}
              >
                Natural materials carry natural problems. KHW synthetic products are engineered to eliminate every one of them &mdash; while preserving the authentic beauty.
              </p>
            </Reveal>
          </div>

          {/* Feature grid */}
          <StaggerContainer stagger={0.08}>
            {[
              { label: "Fire Safety", desc: "Class A fire-rated options available. Natural thatch is one of the most fire-hazardous roofing materials. KHW eliminates this risk entirely.", icon: "Flame" },
              { label: "Zero Maintenance", desc: "No annual inspections, no re-thatching, no repairs. Once installed, KHW products look pristine for decades with zero upkeep.", icon: "Wrench" },
              { label: "UV & Weather", desc: "2000–10000 hour TUV-tested UV stability. Extreme temperature tolerance from -40°C to +60°C. Hail, storm, and hurricane resistant.", icon: "Sun" },
              { label: "Waterproof", desc: "100% waterproof on Palm Thatch — no waterproofing membrane needed. Reed and Straw require standard underlayment.", icon: "CloudRain" },
              { label: "Pest Proof", desc: "No birds, insects, rot, or mildew. Unlike natural materials that attract pests and degrade over time.", icon: "Bug" },
              { label: "50+ Year Lifespan", desc: "Natural thatch lasts 3–5 years. KHW synthetic lasts 50+ years — backed by a 20-year warranty.", icon: "Shield" },
              { label: "Eco-Friendly", desc: "100% recyclable materials. No repeated harvesting of natural resources. LEED-compatible for green building projects.", icon: "Recycle" },
              { label: "Hurricane Rated", desc: "Wind tunnel tested to 260 km/h. Designed for cyclone-prone coastal and hill station construction.", icon: "Wind" },
            ].map((f) => (
              <div key={f.label} style={{ padding: "2rem", background: "rgba(255,255,255,0.05)", borderTop: "2px solid var(--gold)" }}>
                <div style={{ width: 48, height: 48, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: "var(--white)", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {f.icon === "Flame" && <><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></>}
                    {f.icon === "CloudRain" && <><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></>}
                    {f.icon === "Wind" && <><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></>}
                    {f.icon === "Sun" && <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>}
                    {f.icon === "Bug" && <><path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 116 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 014-4h4a4 4 0 014 4v3c0 3.3-2.7 6-6 6z"/></>}
                    {f.icon === "Wrench" && <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></>}
                    {f.icon === "Recycle" && <><polyline points="7 3 3 3 3 7"/><polyline points="21 17 17 17 17 21"/><polyline points="1 7 5 7 5 3"/><polyline points="23 21 19 21 19 17"/><line x1="11" y1="11" x2="21" y2="11"/></>}
                    {f.icon === "Shield" && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>}
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  {f.label}
                </h3>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 400, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── COMPARISON ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
          background: "var(--cream-mid)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <Reveal>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                Head-to-Head
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                }}
              >
                NATURAL VS. SYNTHETIC
              </h2>
            </Reveal>
          </div>

          {/* Table header */}
          <div className="comparison-table-header">
            {["Attribute", "Natural", "Synthetic"].map((h) => (
              <span
                key={h}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Table rows */}
          <StaggerContainer stagger={0.06}>
            {[
              { attr: "Lifespan", natural: "3–5 years before re-thatching needed", synthetic: "50+ years — lasts for generations" },
              { attr: "Maintenance", natural: "Annual inspections, re-thatching every few years", synthetic: "Zero maintenance — ever" },
              { attr: "Fire Safety", natural: "High fire hazard, attracts sparks", synthetic: "Class A fire-rated option available" },
              { attr: "Water Resistance", natural: "Absorbs water, prone to rot and mold", synthetic: "100% waterproof — no membrane needed (Palm)" },
              { attr: "Pest Resistance", natural: "Attracts insects, birds, and rot", synthetic: "100% pest-proof, rot-proof, mildew-proof" },
              { attr: "Wind Resistance", natural: "Can detach in storms", synthetic: "Tested to 260 km/h — hurricane rated" },
              { attr: "Style Consistency", natural: "Varies with each batch", synthetic: "Uniform color and texture across all pieces" },
              { attr: "UV & Color", natural: "Fades and greys unevenly within months", synthetic: "UV-stable for 2000–10000 hours (TUV tested)" },
              { attr: "Long-Term Cost", natural: "High — repeated replacements and labor", synthetic: "One-time installation, covered by 20-year warranty" },
              { attr: "Sustainability", natural: "Harvests natural resources repeatedly", synthetic: "100% recyclable, no repeated harvesting" },
            ].map((row, idx) => (
              <div
                key={row.attr}
                className="comparison-table-row"
                data-attr={row.attr}
                style={{
                  borderBottom: idx < 9 ? "1px solid var(--cream-dark)" : "none",
                  background: idx % 2 === 0 ? "var(--white)" : "var(--cream)",
                }}
              >
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "0.03em", textTransform: "uppercase" }}>
                  {row.attr}
                </span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 400, color: "var(--ink-muted)", paddingRight: "1rem" }}>
                  {row.natural}
                </span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--forest-mid)", paddingLeft: "1.5rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 6, height: 6, borderRadius: "50%", background: "var(--forest-mid)", display: "inline-block" }} />
                  {row.synthetic}
                </span>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────────────────── */}
      <section
        id="gallery"
        style={{
          padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
          background: "var(--ink)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(2rem, 4vw, 4rem)",
            }}
          >
            <div>
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                  Project Gallery
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 4rem)",
                    fontWeight: 700,
                    color: "var(--cream)",
                    lineHeight: 0.9,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                  }}
                >
                  INSTALLED<br />ACROSS<br />INDIA
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,243,236,0.3)" }}>
                {galleryImages.length} Projects
              </div>
            </Reveal>
          </div>

          {/* Gallery grid */}
          <div className="gallery-grid-home">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    aspectRatio: "4/3",
                  }}
                  onClick={() => setLightboxIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxIndex(i); }}
                  aria-label={`View ${img.label} full screen`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="gallery-item gallery-home-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.style.background = "var(--cream-dark)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5625rem",
                      fontWeight: 600,
                      color: "var(--cream)",
                      letterSpacing: "0.05em",
                      background: "rgba(26,21,16,0.6)",
                      padding: "0.25rem 0.625rem",
                    }}
                  >
                    {img.label}
                  </div>
                  {/* Zoom icon */}
                  <div className="gallery-zoom-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Location tags */}
          <Reveal delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
              {["Goa", "Lakshadweep", "Andaman Nicobar", "Kerala", "Maharashtra", "West Bengal", "Uttarakhand", "Andhra Pradesh", "Tamil Nadu", "Rajasthan"].map((place) => (
                <span
                  key={place}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(248,243,236,0.3)",
                    border: "1px solid rgba(248,243,236,0.1)",
                    padding: "0.375rem 0.875rem",
                  }}
                >
                  {place}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
          background: "var(--forest)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "start" }}>
            <div>
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                  Get Started
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.5rem, 5vw, 5rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 0.9,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    marginBottom: "2rem",
                  }}
                >
                  READY TO<br />TRANSFORM<br />YOUR SPACE?
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "2rem" }} />
              </Reveal>
              <Reveal delay={0.2}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    marginBottom: "2.5rem",
                  }}
                >
                  Get a free consultation, custom quote, and product samples. We serve all of India with expert guidance.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                {/* Contact actions */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a
                    href="https://wa.me/919148584281?text=Hi%20KHW%20Solutions!%20I%27m%20interested%20in%20your%20synthetic%20thatch%20and%20bamboo%20products.%20Please%20share%20a%20quote."
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
                      background: "#25D366",
                      color: "var(--white)",
                      textDecoration: "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    WhatsApp &mdash; Free Quote
                  </a>
                  <a
                    href="tel:+919148584281"
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
                      color: "#ffffff",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      textDecoration: "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.16a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    Call +91-9148584281
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Quick Inquiry Form */}
            <Reveal delay={0.15}>
              <form
                onSubmit={handleInquirySubmit}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "clamp(1.5rem, 3vw, 2.5rem)",
                  borderTop: "2px solid var(--gold)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Quick Inquiry
                </h3>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.375rem" }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Your full name"
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.375rem" }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="+91 XXXXXXXXXX"
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.375rem" }}>
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.375rem" }}>
                    Product Interest
                  </label>
                  <select
                    value={inquiryProduct}
                    onChange={(e) => setInquiryProduct(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      cursor: "pointer",
                      appearance: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  >
                    <option value="" style={{ background: "var(--ink)", color: "#ffffff" }}>Select a product</option>
                    <option value="Synthetic Thatch — Palm Thatch" style={{ background: "var(--ink)", color: "#ffffff" }}>Palm Thatch</option>
                    <option value="Synthetic Thatch — Reed Thatch" style={{ background: "var(--ink)", color: "#ffffff" }}>Reed Thatch</option>
                    <option value="Synthetic Thatch — Straw Thatch" style={{ background: "var(--ink)", color: "#ffffff" }}>Straw Thatch</option>
                    <option value="Synthetic Thatch — Folding Reed Shingles" style={{ background: "var(--ink)", color: "#ffffff" }}>Folding Reed Shingles</option>
                    <option value="Bamboo Products — Rolls, Poles, Mats" style={{ background: "var(--ink)", color: "#ffffff" }}>Bamboo Rolls, Poles, Mats</option>
                    <option value="Bamboo Products — Panels & Fences" style={{ background: "var(--ink)", color: "#ffffff" }}>Bamboo Panels &amp; Fences</option>
                    <option value="Both Thatch & Bamboo" style={{ background: "var(--ink)", color: "#ffffff" }}>Both Thatch &amp; Bamboo</option>
                    <option value="Not sure — need guidance" style={{ background: "var(--ink)", color: "#ffffff" }}>Not sure — need guidance</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.375rem" }}>
                    Message
                  </label>
                  <textarea
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                      minHeight: 80,
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "0.875rem 1.5rem",
                    background: "var(--gold)",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s, transform 0.1s",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--gold-light)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.625rem", color: "rgba(255,255,255,0.25)", textAlign: "center", margin: 0, lineHeight: 1.5 }}>
                  No account needed — your message goes directly to our team on WhatsApp
                </p>
              </form>
            </Reveal>

            {/* Contact details */}
            <Reveal delay={0.2} direction="left">
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "clamp(2rem, 4vw, 3rem)", borderTop: "2px solid var(--gold)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", marginBottom: "2rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Contact Details
                </h3>

                {[
                  { label: "Office", value: "401/A, 1st Floor, 5th A Main, 2nd Block, HRBR Layout, Kalyan Nagar, Bangalore KA 560043", icon: "location" },
                  { label: "Phone", value: "+91-9148584281 / +91-7483460820", icon: "phone" },
                  { label: "Email", value: "info@khwsolutions.com", icon: "mail" },
                  { label: "Hours", value: "Mon – Sat: 09:00 AM – 06:00 PM", icon: "clock" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      paddingBottom: "1.5rem",
                      marginBottom: "1.5rem",
                      borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    }}
                  >
                    <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {item.icon === "location" && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                        {item.icon === "phone" && <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.16a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></>}
                        {item.icon === "mail" && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                        {item.icon === "clock" && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.25rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 400, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── BACK COVER ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "clamp(5rem, 12vw, 8rem) var(--gutter)",
          textAlign: "center",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--cream)",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
            }}
          >
            BRING THE TROPICS HOME
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ width: 48, height: 2, background: "var(--gold)", margin: "0 auto 2rem" }} />
        </Reveal>
        <Reveal delay={0.15}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.5625rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.25)",
              marginBottom: "2rem",
            }}
          >
            khwsolutions.com &bull; syntheticthatch.in
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: "inline-flex", gap: "0.5rem" }}>
            {["TUV SUD", "SGS", "INTERTEK", "LEED"].map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(248,243,236,0.2)",
                  border: "1px solid rgba(248,243,236,0.08)",
                  padding: "0.25rem 0.625rem",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────── */}
      <Footer />

      {/* ─── COMPARE BAR ───────────────────────────────────────────────── */}
      <CompareBar
        products={compareProducts}
        onRemove={handleRemove}
        onClear={handleClear}
      />

      {/* ─── LIGHTBOX ─────────────────────────────────────────────────── */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : null)}
        onPrev={() => setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null)}
      />
    </>
  );
}
