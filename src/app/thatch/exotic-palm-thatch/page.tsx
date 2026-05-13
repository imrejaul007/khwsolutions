"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InstallationGuide } from "@/components/InstallationGuide";
import { InteractiveColorSwatch } from "@/components/InteractiveElements";

export default function PalmThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "exotic-palm-thatch");
  if (!product) return null;

  const relatedProducts = thatch?.subProducts.filter((p) => p.id !== "exotic-palm-thatch") ?? [];

  // Variant state (Without Rails / With Rails)
  const [selectedVariant, setSelectedVariant] = useState<"without" | "with">("without");

  // Color state
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const selectedColor = product.colors[selectedColorIdx];

  // Get image based on variant and color
  const getImageSrc = () => {
    return `/images/thatch/palm-thatch-main.jpeg`;
  };

  return (
    <>
      {/* ─── PRODUCT HERO ──────────────────────────────────────────── */}
      <section
        className="product-hero"
        style={{ background: "var(--forest)" }}
      >
        {/* Left: Image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={getImageSrc()}
            alt={`Exotic Palm Thatch - ${selectedVariant === "with" ? "With Rails" : "Without Rails"} - ${selectedColor.name}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Color tint overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: selectedColor.hex,
              opacity: 0.15,
              mixBlendMode: "multiply",
              transition: "background 0.5s ease",
              pointerEvents: "none",
            }}
          />
          {/* Vertical label */}
          <div
            style={{
              position: "absolute",
              top: "5rem",
              left: "2rem",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5625rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.4)",
              transform: "rotate(180deg)",
            }}
          >
            Chapter 01 &mdash; Synthetic Thatch
          </div>
        </div>

        {/* Right: Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(3rem, 6vw, 8rem)",
            background: "var(--cream)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5625rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: "2rem",
            }}
          >
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span>/</span>
            <Link href="/thatch" style={{ color: "inherit" }}>Thatch</Link>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>Palm Thatch</span>
          </div>

          {product.badge && (
            <div
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "var(--white)",
                padding: "0.375rem 1rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                alignSelf: "flex-start",
              }}
            >
              {product.badge}
            </div>
          )}

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            EXOTIC<br />PALM<br />THATCH
          </h1>

          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }} />

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
              fontWeight: 400,
              color: "var(--ink-muted)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Designed to replicate the rich, tropical appearance of natural dried palm that mimics traditional island-style roofing.
          </p>

          {/* Variant selector */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Choose Installation Type
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedVariant("without")}
                style={{
                  flex: "1 1 250px",
                  padding: "1rem 1.25rem",
                  background: selectedVariant === "without" ? "var(--forest-pale)" : "var(--white)",
                  border: `2px solid ${selectedVariant === "without" ? "var(--forest-mid)" : "var(--cream-dark)"}`,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                  Without Rails
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Installed on fiber cement board, OSB, corrugated metal, marine plywood, concrete
                </div>
              </button>
              <button
                onClick={() => setSelectedVariant("with")}
                style={{
                  flex: "1 1 250px",
                  padding: "1rem 1.25rem",
                  background: selectedVariant === "with" ? "var(--forest-pale)" : "var(--white)",
                  border: `2px solid ${selectedVariant === "with" ? "var(--forest-mid)" : "var(--cream-dark)"}`,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                  With Rails
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Installed on vertical rafters at 50cm spacing — exposed underside balinese view
                </div>
              </button>
            </div>
          </div>

          {/* Color swatches — interactive */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Available Colors
            </div>
            {/* Color swatch selector */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {product.colors.map((color, idx) => (
                <InteractiveColorSwatch
                  key={color.name}
                  hex={color.hex}
                  name={color.name}
                  description={color.description}
                  size="md"
                  onClick={() => setSelectedColorIdx(idx)}
                />
              ))}
            </div>
            {/* Selected color preview card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: `${selectedColor.hex}15`,
                border: `2px solid ${selectedColor.hex}30`,
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: selectedColor.hex,
                  border: "2px solid var(--white)",
                  boxShadow: "0 0 0 1px rgba(26,21,16,0.1), 0 4px 12px rgba(26,21,16,0.12)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                  {selectedColor.name}
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, color: "var(--ink-muted)", letterSpacing: "0.05em" }}>
                  {selectedColor.hex.toUpperCase()} &mdash; {selectedColor.description}
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="split-2--stats"
            style={{ marginBottom: "2rem" }}
          >
            {[
              { value: product.warranty, label: "Warranty" },
              { value: "50+", label: "Year Lifespan" },
              { value: "260", label: "km/h Wind" },
              { value: "Class A", label: "Fire Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--white)",
                  padding: "1.25rem 1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--forest-mid)",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                background: "var(--forest)",
                color: "var(--cream)",
                textDecoration: "none",
              }}
            >
              Get a Quote
            </a>
            <a
              href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Exotic%20Palm%20Thatch.%20Please%20share%20pricing%20and%20samples."
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── COLOR COLLECTION ──────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 10vw, 10rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              Color Collection
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}
            >
              THREE NATURAL-INSPIRED<br />TONES
            </h2>
          </div>

          <div className="split-2--3">
            {product.colors.map((color) => (
              <div key={color.name}>
                <div
                  style={{
                    aspectRatio: "1",
                    background: color.hex,
                    marginBottom: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      color: "rgba(255,255,255,0.7)",
                      background: "rgba(0,0,0,0.3)",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    {color.hex}
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {color.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--ink-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {color.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTALLATION ─────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 10vw, 10rem) 0" }} id="installation">
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              Installation Guide
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
              }}
            >
              FIVE METHODS OF<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Installation</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "var(--ink-muted)",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Palm Thatch is{" "}
              <strong style={{ color: "var(--forest-mid)" }}>100% waterproof on its own</strong>{" "}
              &mdash; no waterproof membrane is required for any installation method.
            </p>
          </div>

          <InstallationGuide installations={product.installations} productName={product.name} />
        </div>
      </section>

      {/* ─── SPECIFICATIONS ─────────────────────────────────────────── */}
      <section style={{ background: "var(--cream-mid)", padding: "clamp(4rem, 10vw, 10rem) 0" }} id="specs">
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              Technical Data
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}
            >
              COMPLETE<br />SPECIFICATIONS
            </h2>
          </div>

          
            <div className="split-2" style={{ gap: "clamp(2rem, 4vw, 4rem)" }}>
              {/* Specs list */}
              <div style={{ background: "var(--white)", padding: "clamp(2rem, 4vw, 3rem)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "1.5rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  Technical Specifications
                </h3>
                <ul className="spec-list">
                  {product.specs.map((spec) => (
                    <li key={spec.label}>
                      <span className="spec-list__label">{spec.label}</span>
                      <span className="spec-list__value">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel dimensions */}
              <div style={{ background: "var(--white)", padding: "clamp(2rem, 4vw, 3rem)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "1.5rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  Panel Dimensions
                </h3>
                <div
                  style={{
                    background: "var(--cream)",
                    padding: "2rem",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="100%" height="200" viewBox="0 0 400 200" aria-label="Palm thatch panel dimensions">
                    <rect x="40" y="20" width="320" height="160" fill="none" stroke="var(--cream-dark)" strokeWidth="2" strokeDasharray="6,4"/>
                    <rect x="50" y="30" width="300" height="140" fill="var(--gold-pale)" stroke="var(--gold)" strokeWidth="1"/>
                    {[0, 1, 2, 3, 4, 5].map((j) => (
                      <path
                        key={j}
                        d={`M50 ${50 + j * 22} Q200 ${40 + j * 22} 350 ${50 + j * 22}`}
                        fill="none"
                        stroke={j % 2 === 0 ? "var(--gold)" : "var(--bark-light)"}
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    ))}
                    <line x1="40" y1="195" x2="360" y2="195" stroke="var(--ink-muted)" strokeWidth="1"/>
                    <line x1="40" y1="190" x2="40" y2="200" stroke="var(--ink-muted)" strokeWidth="1"/>
                    <line x1="360" y1="190" x2="360" y2="200" stroke="var(--ink-muted)" strokeWidth="1"/>
                    <text x="200" y="192" textAnchor="middle" style={{ fontFamily: "var(--font-heading)", fontSize: "10", fill: "var(--ink-muted)", fontWeight: 600 }}>
                      1160mm (45.7")
                    </text>
                    <line x1="20" y1="20" x2="30" y2="20" stroke="var(--ink-muted)" strokeWidth="1"/>
                    <line x1="20" y1="180" x2="30" y2="180" stroke="var(--ink-muted)" strokeWidth="1"/>
                    <line x1="20" y1="20" x2="20" y2="180" stroke="var(--ink-muted)" strokeWidth="1"/>
                    <text x="18" y="105" textAnchor="middle" transform="rotate(-90,18,105)" style={{ fontFamily: "var(--font-heading)", fontSize: "10", fill: "var(--ink-muted)", fontWeight: 600 }}>
                      900mm (35.4")
                    </text>
                  </svg>
                </div>
                <div className="palm-coverage">
                  {[
                    { label: "Panel Size", value: "1160 × 900mm" },
                    { label: "Coverage / pc", value: "2.3 sq ft" },
                    { label: "Pieces / sqm", value: "4.4 pcs" },
                    { label: "Box Contents", value: "60 pcs / 138 sq ft" },
                  ].map((item) => (
                    <div key={item.label} style={{ background: "var(--cream)", padding: "1rem" }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.25rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)" }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          
        </div>
      </section>

      {/* ─── FEATURES & APPLICATIONS ──────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 10vw, 10rem) 0" }}>
        <div className="container">
          <div className="split-2">
            {/* Features */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                Product Features
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "2rem",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                KEY<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Features</span>
              </h2>
              <div>
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1rem 0",
                      borderBottom: "1px solid var(--cream-dark)",
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "var(--forest-pale)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "0.125rem",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--forest-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--ink-light)",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                Where to Use
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "2rem",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                IDEAL<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Applications</span>
              </h2>
              <div className="split-2--apps-2">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    style={{
                      padding: "1rem 1.25rem",
                      background: "var(--cream)",
                      borderLeft: "3px solid var(--forest-mid)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--forest-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink)" }}>
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 10vw, 10rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              More Thatch
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}
            >
              EXPLORE OTHER<br />THATCH PRODUCTS
            </h2>
          </div>

          <div className="split-2--3">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/thatch/${p.id}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                <div style={{ background: "var(--white)", overflow: "hidden" }}>
                  <div
                    style={{
                      aspectRatio: "16/10",
                      overflow: "hidden",
                      background: "var(--cream-mid)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={`/images/thatch/${p.id.replace("exotic-", "").replace("folding-", "")}-splash.png`}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.375rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.name}
                    </h3>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.5625rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                      }}
                    >
                      View Product
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "inline", marginLeft: "0.375rem" }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--forest)", padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  color: "var(--cream)",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                Get a Free Quote for Palm Thatch
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "rgba(248,243,236,0.6)",
                }}
              >
                Contact us for pricing, samples, and installation guidance.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Exotic%20Palm%20Thatch.%20Please%20share%20pricing%20and%20samples."
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.875rem 2rem",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919148584281"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: "var(--cream)",
                  border: "1.5px solid rgba(248,243,236,0.4)",
                  textDecoration: "none",
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
