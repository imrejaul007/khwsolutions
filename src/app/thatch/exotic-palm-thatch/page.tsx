"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InstallationGuide } from "@/components/InstallationGuide";

export default function PalmThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "exotic-palm-thatch");
  if (!product) return null;

  const relatedProducts = thatch?.subProducts.filter((p) => p.id !== "exotic-palm-thatch") ?? [];

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
            Designed to replicate the rich, tropical appearance of natural dried palm that mimics
            traditional island-style roofing. Perfect for resort applications.
          </p>

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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "center" }}>

            {/* Left: Image */}
            <div>
              <img
                src="/images/thatch/palm-thatch-hero.png"
                alt="Palm Thatch Without Rails"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(26,21,16,0.12)",
                }}
              />
              {/* Feature badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
                {["No Waterproof Membrane Required", "20-Year Warranty", "50 Years Life Expectancy", "Zero Maintenance"].map((badge) => (
                  <div key={badge} style={{
                    background: "var(--forest)",
                    color: "var(--white)",
                    padding: "0.5rem 1rem",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}>
                Variant 01
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--ink)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}>
                WITHOUT RAILS
              </h2>
              <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: "1.5rem" }} />
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--ink-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}>
                This variant of KHW's Exotic Nipa palm thatch leaves is installed directly on surfaces
                such as fiber cement board, OSB board, corrugated metal sheet, puffed sheet, marine
                plywood, and concrete. Once installed, it provides a traditional Island-like palm
                thatch appearance.
              </p>

              {/* Suitable Surfaces */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: "0.75rem",
                }}>
                  Suitable Surfaces
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Fiber Cement Board", "OSB Board", "Corrugated Metal", "Marine Plywood", "Concrete", "Puffed Sheet"].map((surface) => (
                    <div key={surface} style={{
                      background: "var(--cream)",
                      padding: "0.5rem 1rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}>
                      {surface}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div style={{
                background: "var(--cream)",
                padding: "1.5rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: "1rem",
                }}>
                  Key Specifications
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  {[
                    ["Panel Size", "1100 × 900mm"],
                    ["Material", "HDPE (Recyclable)"],
                    ["Warranty", "20 Years"],
                    ["Fire Rating", "Class A"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>{k}</div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)", marginTop: "0.25rem" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WITH RAILS SECTION ────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "center" }}>

            {/* Left: Content (order swapped on desktop) */}
            <div>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}>
                Variant 02
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--ink)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}>
                WITH RAILS
              </h2>
              <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: "1.5rem" }} />
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--ink-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}>
                This variant of KHW's Exotic Nipa palm thatch leaves comes along with special Aluminium
                rail accessories and is installed directly on any roofing frame, either made of metal,
                wood or bamboo, having vertical rafters that go along the direction of the slope at
                every 50cms spacing from one vertical rafter to the next vertical rafter. Once installed
                it not only gives the exterior thatch appearance but also provides an exposed underside
                balinese symmetrical view.
              </p>

              {/* Popular For */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: "0.75rem",
                }}>
                  Popular For
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Gazebos", "Pavilions", "Umbrellas", "Projection Areas", "Open Spaces", "Non-A/C Rooms"].map((item) => (
                    <div key={item} style={{
                      background: "var(--white)",
                      padding: "0.5rem 1rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div style={{
                background: "var(--white)",
                padding: "1.5rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: "1rem",
                }}>
                  Key Specifications
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  {[
                    ["Rafter Spacing", "50cm"],
                    ["Material", "HDPE + Aluminium Rails"],
                    ["Warranty", "20 Years"],
                    ["View", "Balinese Underside"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>{k}</div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)", marginTop: "0.25rem" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src="/images/thatch/palm-thatch-hero.png"
                alt="Palm Thatch With Rails"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(26,21,16,0.12)",
                }}
              />
              {/* Feature badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
                {["No Waterproof Membrane Required", "20-Year Warranty", "50 Years Life Expectancy", "Zero Maintenance"].map((badge) => (
                  <div key={badge} style={{
                    background: "var(--gold)",
                    color: "var(--white)",
                    padding: "0.5rem 1rem",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}>
                    {badge}
                  </div>
                ))}
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

      {/* ─── INSTALLATION ───────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <InstallationGuide installations={product.installations} productName={product.name} />
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
