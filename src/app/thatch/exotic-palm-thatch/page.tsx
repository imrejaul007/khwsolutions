"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";

export default function PalmThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "exotic-palm-thatch");
  if (!product) return null;

  const relatedProducts = thatch?.subProducts.filter((p) => p.id !== "exotic-palm-thatch") ?? [];

  // Variant state
  const [selectedVariant, setSelectedVariant] = useState<"without" | "with">("without");
  const [withoutSurface, setWithoutSurface] = useState("Fiber Cement Board");
  const [withSurface, setWithSurface] = useState("Metal");

  const withoutSurfaces = ["Fiber Cement Board", "OSB Board", "Corrugated Metal", "Marine Plywood", "Concrete", "Puffed Sheet"];
  const withSurfaces = ["Metal", "Bamboo", "Wood"];

  const featureBadges = [
    "No Waterproof Membrane Required",
    "20-Year Warranty",
    "50 Years Life Expectancy",
    "Zero Maintenance"
  ];

  return (
    <>
      {/* ─── PRODUCT HERO ──────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "70vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "var(--forest)",
        }}
      >
        {/* Left: Image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "70vh" }}>
          <img
            src="/images/thatch/palm-thatch-hero.png"
            alt="Exotic Palm Thatch"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/thatch" style={{ color: "inherit", textDecoration: "none" }}>Thatch</Link>
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
            KHW's Exotic Palm Thatch is designed to replicate the rich, tropical appearance of natural dried palm that mimics traditional island-style roofing.
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
                  Installed directly on flat surfaces
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
                  With Aluminium rail accessories
                </div>
              </button>
            </div>
          </div>

          {/* Color Options */}
          <div>
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
              Colors Available
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  title={color.name}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: color.hex,
                    border: "3px solid var(--cream-dark)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WITHOUT RAILS SECTION ─────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div style={{
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
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              Variant 01
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              WITHOUT RAILS
            </h2>
          </div>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            color: "var(--ink-muted)",
            lineHeight: 1.8,
            marginBottom: "2rem",
            maxWidth: 900,
          }}>
            This variant of KHW's Exotic Nipa palm thatch leaves is installed directly on surfaces such as fibre cement board, OSB board, corrugated metal sheet, puffed sheet, marine plywood, and concrete. Once installed, it provides a traditional Island-like palm thatch appearance.
          </p>

          {/* Feature badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
            {featureBadges.map((badge) => (
              <div key={badge} style={{
                background: "var(--forest)",
                color: "var(--white)",
                padding: "0.625rem 1.25rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}>
                {badge}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {/* Suitable Surfaces */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
              }}>
                Suitable Surfaces (Click to view)
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {withoutSurfaces.map((surface) => (
                  <button
                    key={surface}
                    onClick={() => setWithoutSurface(surface)}
                    style={{
                      background: withoutSurface === surface ? "var(--forest)" : "var(--cream)",
                      color: withoutSurface === surface ? "var(--white)" : "var(--ink)",
                      padding: "0.625rem 1rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {surface}
                  </button>
                ))}
              </div>

              {/* Surface Image */}
              <div style={{
                marginTop: "1.5rem",
                aspectRatio: "16/10",
                background: "var(--cream)",
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <img
                  src="/images/thatch/palm-thatch-hero.png"
                  alt={withoutSurface}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Key Specifications */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
              }}>
                Key Specifications
              </h3>
              <div style={{
                background: "var(--cream)",
                padding: "1.5rem",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                  {[
                    ["Panel Size", "93 CM × 67 CM"],
                    ["Leaf Coverage", "2 Sq ft"],
                    ["Material", "HDPE (Recyclable)"],
                    ["Leaf Weight", "500 gm"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>{k}</div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginTop: "0.25rem" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WITHOUT RAILS INSTALLATION ───────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div style={{
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
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              Without Rails
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}>
              INSTALLATION GUIDE
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {/* Plywood Deck / OSB */}
            <div style={{ background: "var(--white)", padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}>
                Plywood Deck / OSB
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--ink-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}>
                Installed directly over plywood or OSB sheathing. A waterproofing membrane is optional but recommended for added weather protection. This method provides a solid, continuous sub-surface for the thatch shingles.
              </p>
              <div style={{
                background: "var(--forest)",
                padding: "1rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}>
                  Pro Tip
                </div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--white)",
                  lineHeight: 1.6,
                }}>
                  Plywood: min. 16mm (5/8"). OSB: min. 12mm (15/32"). Apply a waterproofing membrane before batten installation for best weather resistance.
                </p>
              </div>
            </div>

            {/* Metal Sheeting */}
            <div style={{ background: "var(--white)", padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}>
                Metal Sheeting
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--ink-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}>
                Installed over metal roofing sheets with horizontal battens secured to the metal structure. Maintains the authentic tropical aesthetic while providing the durability of a metal roof underneath.
              </p>
              <div style={{
                background: "var(--forest)",
                padding: "1rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}>
                  Pro Tip
                </div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--white)",
                  lineHeight: 1.6,
                }}>
                  Batten spacing: 220mm (9"). Secure battens to metal roof structure with appropriate metal fasteners before installing thatch shingles.
                </p>
              </div>
            </div>

            {/* Concrete Roofing */}
            <div style={{ background: "var(--white)", padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}>
                Concrete Roofing
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--ink-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}>
                Installed over concrete or cement tile roofing surfaces with horizontal battens. Provides a tropical aesthetic over solid concrete construction.
              </p>
              <div style={{
                background: "var(--forest)",
                padding: "1rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}>
                  Pro Tip
                </div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--white)",
                  lineHeight: 1.6,
                }}>
                  Batten spacing: 220mm (9"). Use masonry anchors and appropriate concrete fasteners to secure battens to the concrete surface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WITH RAILS SECTION ───────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div style={{
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
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              Variant 02
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              WITH RAILS
            </h2>
          </div>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            color: "var(--ink-muted)",
            lineHeight: 1.8,
            marginBottom: "2rem",
            maxWidth: 900,
          }}>
            This variant of KHW's Exotic Nipa palm thatch leaves comes along with special Aluminium rail accessories and is installed directly on any roofing frame, either made of metal, wood or bamboo, having vertical rafters that go along the direction of the slope at every 50cms spacing from one vertical rafter to the next vertical rafter. Once installed it not only gives the exterior thatch appearance but also provides an exposed underside balinese symmetrical view.
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--ink)",
            lineHeight: 1.7,
            marginBottom: "2rem",
            maxWidth: 900,
          }}>
            This variant is popular for open spaces like Gazebos, Pavilions, umbrellas, various projection areas and all other non-air conditioned spaces and rooms.
          </p>

          {/* Feature badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
            {featureBadges.map((badge) => (
              <div key={badge} style={{
                background: "var(--gold)",
                color: "var(--white)",
                padding: "0.625rem 1.25rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}>
                {badge}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {/* Suitable Surfaces */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
              }}>
                Suitable Surfaces (Click to view)
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {withSurfaces.map((surface) => (
                  <button
                    key={surface}
                    onClick={() => setWithSurface(surface)}
                    style={{
                      background: withSurface === surface ? "var(--forest)" : "var(--cream)",
                      color: withSurface === surface ? "var(--white)" : "var(--ink)",
                      padding: "0.625rem 1rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {surface}
                  </button>
                ))}
              </div>

              {/* Surface Image */}
              <div style={{
                marginTop: "1.5rem",
                aspectRatio: "16/10",
                background: "var(--cream)",
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <img
                  src="/images/thatch/palm-thatch-hero.png"
                  alt={withSurface}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Key Specifications */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
              }}>
                Key Specifications
              </h3>
              <div style={{
                background: "var(--cream)",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                  {[
                    ["Panel Size", "93 CM × 67 CM"],
                    ["Leaf Coverage", "2 Sq ft"],
                    ["Material", "HDPE (Recyclable)"],
                    ["Leaf Weight", "500 gm"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>{k}</div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginTop: "0.25rem" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* With Rails Measurements */}
              <div style={{
                background: "var(--forest)",
                padding: "1.5rem",
              }}>
                <h4 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}>
                  With Rails - Measurements
                </h4>
                <div style={{ display: "grid", gap: "0.75rem" }}>
                  {[
                    ["Vertical Rafter Spacing", "500mm (19.7\")"],
                    ["Rafter Size", "Min. 50×50mm (2\"×2\")"],
                    ["Beam Size", "Min. 100×100mm (4\"×4\")"],
                    ["Pillar", "Min. 100×100mm (4\"×4\")"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "rgba(248,243,236,0.7)" }}>{k}</span>
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", fontWeight: 700, color: "var(--white)" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLORS ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.5625rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>
            Available Finishes
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--white)",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}>
            Color Options
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(1.5rem, 3vw, 2.5rem)", maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 4, marginBottom: "1rem" }}>
                <img
                  src="/images/thatch/Exotic Palm Thatch (Aged Colour).png"
                  alt="Aged Colour"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--white)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                Aged Colour
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 4, marginBottom: "1rem" }}>
                <img
                  src="/images/thatch/Exotic Palm Thatch (Sundried Colour).png"
                  alt="Sundried Colour"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--white)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                Sundried Colour
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ───────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.5625rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1rem",
            }}>
              Explore More
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--ink)",
              textTransform: "uppercase",
            }}>
              Other Thatch Options
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/thatch/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--white)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(26,21,16,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--cream-dark)" }}>
                    <img
                      src={p.id === "exotic-straw-thatch" ? "/images/thatch/Exotic Straw Thatch.jpeg" : "/images/thatch/KHW Exotic Reed Thatch.jpeg"}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}>
                      {p.name}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.5,
                    }}>
                      {p.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
