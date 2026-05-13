"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { products, sharedFeatures } from "@/data/products";
import { Footer } from "@/components/Footer";
import { CompareBar } from "@/components/CompareBar";
import { Reveal, StaggerContainer } from "@/components/InteractiveElements";

interface CompareProduct {
  id: string;
  name: string;
  type: "thatch" | "bamboo";
  image: string;
  warranty: string;
  material: string;
}

const projectImages = [
  { src: "/images/projects/thatch-project.png", label: "Beach Resort — Goa" },
  { src: "/images/projects/burhan-project.png", label: "Beach Villa — Andaman" },
  { src: "/images/projects/farmhouse-project.png", label: "Farmhouse — Karnataka" },
  { src: "/images/projects/project-01.png", label: "Coastal Restaurant" },
  { src: "/images/projects/project-02.png", label: "Tropical Resort" },
  { src: "/images/projects/project-03.png", label: "Hill Station Cottage" },
  { src: "/images/projects/project-04.png", label: "Poolside Bar — Kerala" },
  { src: "/images/projects/project-05.png", label: "Beachside Villa" },
];

export default function ThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  if (!thatch) return null;

  const [compareProducts, setCompareProducts] = useState<CompareProduct[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCompare = (product: any) => {
    setCompareProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      const img = `/images/thatch/${product.id.replace("exotic-", "").replace("folding-", "")}-splash.png`;
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          type: "thatch" as const,
          image: img,
          warranty: product.warranty || "—",
          material: product.material?.split("(")[0].trim() || "HDPE Synthetic",
        },
      ];
    });
  };

  const handleRemove = (id: string) => setCompareProducts((p) => p.filter((x) => x.id !== id));
  const handleClear = () => setCompareProducts([]);

  return (
    <>
      {/* ─── COVER HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: "var(--forest)",
        }}
      >
        {/* Full-bleed background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/images/thatch/thatch-hero-new.jpeg"
            alt="Synthetic thatch cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Centre content */}
        <div style={{ position: "relative", zIndex: 2, padding: "0 var(--gutter) clamp(4rem, 8vw, 8rem)" }}>
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
              SECTION 1 &mdash; CHAPTER 01
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }} />
          </Reveal>
          <Reveal delay={0.15}>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 10vw, 10rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 0.85,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              SYNTHETIC<br />THATCH
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ width: 32, height: 1, background: "rgba(248,243,236,0.2)", marginBottom: "2rem" }} />
          </Reveal>
          <Reveal delay={0.25}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                fontWeight: 400,
                color: "rgba(248,243,236,0.5)",
                maxWidth: 520,
                lineHeight: 1.7,
                marginBottom: "3rem",
              }}
            >
              {thatch.description}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", maxWidth: 640 }}>
              {thatch.features.map((f) => (
                <span
                  key={f}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5625rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(248,243,236,0.6)",
                    border: "1px solid rgba(248,243,236,0.2)",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "1.5rem var(--gutter)",
            borderTop: "1px solid rgba(248,243,236,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.3)",
            }}
          >
            KHW Solutions
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.3)",
            }}
          >
            TUV SUD &nbsp;&bull;&nbsp; SGS &nbsp;&bull;&nbsp; LEED
          </span>
        </div>
      </section>

      {/* ─── THREE MAIN THATCH TYPES ────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(5rem, 10vw, 8rem) 0" }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <Reveal>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}>
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                Product Range
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
              }}>
                THREE TYPES OF SYNTHETIC THATCH
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                color: "var(--ink-muted)",
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                Choose the perfect synthetic thatch for your project. Each type has unique characteristics suited for different applications.
              </p>
            </Reveal>
          </div>

          {/* Three Type Cards */}
          <StaggerContainer stagger={0.15}>
            <div className="split-2--3" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              {/* 1. PALM THATCH */}
              <Reveal>
                <div style={{
                  background: "var(--white)",
                  borderTop: "4px solid var(--forest-mid)",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(26,21,16,0.08)",
                }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--cream-dark)" }}>
                    <img
                      src="/images/thatch/palm-thatch-hero.png"
                      alt="Palm Thatch"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      left: "0.75rem",
                      background: "var(--forest-mid)",
                      color: "var(--white)",
                      padding: "0.375rem 0.875rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>
                      Best Seller
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.5rem",
                    }}>
                      01 / Palm Thatch
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                    }}>
                      KHW Exotic Palm Thatch
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}>
                      Designed to replicate the rich, tropical appearance of natural dried palm that mimics traditional island-style roofing.
                    </p>
                    {/* Sub-types: With / Without */}
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid var(--cream-dark)",
                    }}>
                      {[
                        { name: "Without Rails", desc: "Installed on fiber cement board, OSB, corrugated metal, marine plywood, concrete" },
                        { name: "With Rails", desc: "Installed on vertical rafters at 50cm spacing — gives exposed underside balinese view" },
                      ].map((sub) => (
                        <div key={sub.name} style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.75rem",
                          background: "var(--cream)",
                        }}>
                          <div style={{
                            width: 8,
                            height: 8,
                            background: sub.color,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }} />
                          <div>
                            <div style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                              color: "var(--ink)",
                              textTransform: "uppercase",
                            }}>
                              {sub.name}
                            </div>
                            <div style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.6875rem",
                              color: "var(--ink-muted)",
                            }}>
                              {sub.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#exotic-palm-thatch"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "1.25rem",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--forest-mid)",
                        textDecoration: "none",
                      }}
                    >
                      View Products
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* 2. STRAW */}
              <Reveal>
                <div style={{
                  background: "var(--white)",
                  borderTop: "4px solid var(--gold)",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(26,21,16,0.08)",
                }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--cream-dark)" }}>
                    <img
                      src="/images/thatch/straw-thatch-hero.png"
                      alt="Straw Thatch"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      left: "0.75rem",
                      background: "var(--gold)",
                      color: "var(--white)",
                      padding: "0.375rem 0.875rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>
                      Traditional Style
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.5rem",
                    }}>
                      02 / Straw
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                    }}>
                      Exotic Straw Thatch
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}>
                      The right mix of traditional style and modern durability. It has a rustic-vernacular look.
                    </p>
                    {/* Sub-types: Indoor / Outdoor */}
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid var(--cream-dark)",
                    }}>
                      {[
                        { name: "Outdoor", desc: "Installed on fiber cement board, OSB, corrugated metal, plywood, concrete" },
                        { name: "Indoor", desc: "Used as false ceiling, wall panel, and other decor purposes" },
                      ].map((sub) => (
                        <div key={sub.name} style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.75rem",
                          background: "var(--cream)",
                        }}>
                          <div style={{
                            width: 8,
                            height: 8,
                            background: sub.color,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }} />
                          <div>
                            <div style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                              color: "var(--ink)",
                              textTransform: "uppercase",
                            }}>
                              {sub.name}
                            </div>
                            <div style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.6875rem",
                              color: "var(--ink-muted)",
                            }}>
                              {sub.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#exotic-straw-thatch"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "1.25rem",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        textDecoration: "none",
                      }}
                    >
                      View Products
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* 3. REED */}
              <Reveal>
                <div style={{
                  background: "var(--white)",
                  borderTop: "4px solid var(--bark-mid)",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(26,21,16,0.08)",
                }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--cream-dark)" }}>
                    <img
                      src="/images/thatch/reed-thatch-hero.png"
                      alt="Reed Thatch"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      left: "0.75rem",
                      background: "var(--bark-mid)",
                      color: "var(--white)",
                      padding: "0.375rem 0.875rem",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>
                      Versatile
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.5rem",
                    }}>
                      03 / Reed
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                    }}>
                      KHW Exotic Reed Thatch
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}>
                      Luxurious layered reed strands. Perfect for gazebos, tiki huts & accent walls.
                    </p>
                    {/* No sub-types for Reed - just direct link */}
                    <a
                      href="#exotic-reed-thatch"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "1.25rem",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--bark-mid)",
                        textDecoration: "none",
                      }}
                    >
                      View Products
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── STICKY MINI NAV ─────────────────────────────────────────── */}
      <div className="sticky-nav" style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "var(--forest)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "background 0.3s, border-color 0.3s",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}>
        <div className="container" style={{ padding: "0 var(--gutter)" }}>
          <div style={{
            display: "flex",
            gap: "0",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}>
            <a href="#exotic-palm-thatch" style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.25rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.5)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>01</span> Palm Thatch
            </a>
            <a href="#exotic-reed-thatch" style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.25rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.5)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>02</span> Reed Thatch
            </a>
            <a href="#exotic-straw-thatch" style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.25rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.5)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>03</span> Straw Thatch
            </a>
            <a href="#folding-reed-shingles" style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.25rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.5)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>04</span> Folding Shingles
            </a>
            <a href="/#gallery" style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.25rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(248,243,236,0.5)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>→</span> See Projects
            </a>
          </div>
        </div>
      </div>

      {/* ─── PRODUCT SPREADS ─────────────────────────────────────────── */}
      <StaggerContainer stagger={0.12}>
        {thatch.subProducts.map((product, i) => {
          const selected = compareProducts.some((p) => p.id === product.id);
          return (
            <section
              key={product.id}
              id={product.id}
              style={{ background: i % 2 === 0 ? "var(--cream)" : "var(--cream-mid)" }}
            >
              <div className="container">
                <div className="category-split" style={{ padding: "clamp(4rem, 8vw, 8rem) 0" }}>
                  {/* Image */}
                  <div style={{ order: i % 2 === 0 ? 0 : 1, position: "relative" }}>
                    {/* Compare checkbox */}
                    <button
                      className={`product-card__compare ${selected ? "product-card__compare--selected" : ""}`}
                      onClick={() => toggleCompare(product)}
                      aria-label={selected ? "Remove from compare" : "Add to compare"}
                      title={selected ? "Remove from compare" : "Add to compare"}
                      style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 10 }}
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

                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4/3",
                        overflow: "hidden",
                        background: "var(--cream-dark)",
                        cursor: "pointer",
                      }}
                      onClick={() => {}}
                    >
                      <img
                        src={`/images/thatch/${product.id.replace("exotic-", "").replace("folding-", "")}-splash.png`}
                        alt={product.name}
                        className="product-card__image-wrap"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div className="product-card__overlay">
                        <div className="product-card__overlay-inner">
                          <Link href={`/thatch/${product.id}`} className="product-card__overlay-btn">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Inset detail image */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-1.5rem",
                        [i % 2 === 0 ? "right" : "left"]: "-1.5rem",
                        width: "45%",
                        aspectRatio: "1",
                        overflow: "hidden",
                        border: "4px solid var(--cream)",
                        boxShadow: "0 4px 20px rgba(26,21,16,0.1)",
                      }}
                    >
                      <img
                        src={`/images/thatch/${product.id.replace("exotic-", "").replace("folding-", "")}-detail.png`}
                        alt={`${product.name} detail`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    {product.badge && (
                      <div
                        style={{
                          position: "absolute",
                          top: "1rem",
                          [i % 2 === 0 ? "left" : "right"]: "1rem",
                          background: "var(--gold)",
                          color: "var(--white)",
                          padding: "0.375rem 1rem",
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.5625rem",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: "1rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} / {product.material.split("(")[0].trim()}
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1.5rem, 3vw, 3rem)",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "1.5rem",
                        lineHeight: 0.9,
                        textTransform: "uppercase",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {product.name}
                    </h2>
                    <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: "1.5rem" }} />
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        color: "var(--ink-muted)",
                        marginBottom: "2rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Color swatches */}
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
                        Color Options &mdash; {product.colors.length} Colors
                      </div>
                      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                        {product.colors.map((color) => (
                          <div key={color.name} style={{ textAlign: "center" }}>
                            <div
                              title={color.name}
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                background: color.hex,
                                border: "2px solid var(--white)",
                                boxShadow: "0 0 0 1px rgba(26,21,16,0.1)",
                                marginBottom: "0.375rem",
                              }}
                            />
                            <span
                              style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.5rem",
                                fontWeight: 600,
                                color: "var(--ink-muted)",
                                letterSpacing: "0.05em",
                                display: "block",
                                maxWidth: 48,
                              }}
                            >
                              {color.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key specs */}
                    <div style={{ marginBottom: "2rem" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--ink-muted)",
                          marginBottom: "1rem",
                        }}
                      >
                        Key Specifications
                      </div>
                      <ul className="spec-list">
                        {product.specs.slice(0, 6).map((spec) => (
                          <li key={spec.label}>
                            <span className="spec-list__label">{spec.label}</span>
                            <span className="spec-list__value">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <Link
                        href={`/thatch/${product.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "0.75rem 1.5rem",
                          background: "var(--forest)",
                          color: "var(--cream)",
                          textDecoration: "none",
                        }}
                      >
                        View Full Details
                      </Link>
                      <a
                        href={`https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20pricing.`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "0.75rem 1.5rem",
                          background: "#25D366",
                          color: "#fff",
                          textDecoration: "none",
                        }}
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </StaggerContainer>

      {/* ─── PROJECT GALLERY ───────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", padding: "clamp(4rem, 10vw, 10rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <Reveal>
              <div style={{
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
              }}>
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
                Installed Projects
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}>
                SEEN ACROSS<br />
                <span style={{ color: "var(--gold)", fontStyle: "italic" }}>INDIA</span>
              </h2>
            </Reveal>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.375rem",
          }}>
            {projectImages.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.06}>
                <div style={{
                  position: "relative",
                  aspectRatio: i < 2 ? "16/10" : "1",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "var(--cream-dark)",
                }}>
                  <img
                    src={img.src}
                    alt={img.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    left: "0.75rem",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.4375rem",
                    fontWeight: 600,
                    color: "var(--cream)",
                    letterSpacing: "0.05em",
                    background: "rgba(26,21,16,0.65)",
                    padding: "0.25rem 0.5rem",
                  }}>
                    {img.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
              <a href="/#gallery" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gold)",
                paddingBottom: "0.25rem",
              }}>
                View all installations on Homepage
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SHARED FEATURES ─────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 10vw, 10rem) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <Reveal>
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
                Shared Benefits
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 3vw, 3rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                EVERY THATCH PRODUCT SHARES<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>These Qualities</span>
              </h2>
            </Reveal>
          </div>

          <StaggerContainer stagger={0.07}>
            <div className="category-features">
              {sharedFeatures.slice(0, 8).map((feature) => (
                <div
                  key={feature.label}
                  style={{
                    padding: "1.5rem",
                    background: "var(--cream)",
                    borderTop: "3px solid var(--gold)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
          </StaggerContainer>

          {/* Certifications */}
          <Reveal delay={0.3}>
            <div
              style={{
                marginTop: "clamp(2rem, 4vw, 4rem)",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem 2rem",
                background: "var(--cream-mid)",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                Certified &amp; Tested:
              </div>
              {thatch.certifications.map((cert) => (
                <span
                  key={cert}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "var(--forest-mid)",
                    border: "1px solid var(--forest-pale)",
                    padding: "0.375rem 1rem",
                    background: "var(--white)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--forest)", padding: "clamp(4rem, 8vw, 6rem) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            {/* Left */}
            <div style={{ flex: "1 1 360px" }}>
              <Reveal>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", letterSpacing: "-0.01em", lineHeight: 0.9 }}>
                  Ready to start your project?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", color: "rgba(248,243,236,0.55)", marginBottom: "1.5rem" }}>
                  Free consultation, samples &amp; custom quotes. We serve all of India.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20synthetic%20thatch%20products.%20Please%20share%20a%20quote." style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 1.75rem", background: "#25D366", color: "#fff", textDecoration: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                    WhatsApp Us
                  </a>
                  <a href="tel:+919148584281" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 1.75rem", background: "transparent", color: "var(--cream)", border: "1.5px solid rgba(248,243,236,0.35)", textDecoration: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.16a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    Call Now
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right — trust badges */}
            <Reveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.4375rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,243,236,0.35)", marginBottom: "0.25rem" }}>
                  Trusted &amp; Certified
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {["TUV SUD", "SGS", "INTERTEK", "LEED", "ISO 9001"].map((c) => (
                    <span key={c} style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, color: "var(--gold)", border: "1px solid rgba(238,124,0,0.3)", padding: "0.375rem 0.875rem", letterSpacing: "0.05em" }}>
                      {c}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                  {[
                    { stat: "500+", label: "Projects Completed" },
                    { stat: "20+", label: "Year Warranty" },
                    { stat: "All India", label: "Delivery" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{s.stat}</div>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.4375rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,243,236,0.3)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />

      <CompareBar products={compareProducts} onRemove={handleRemove} onClear={handleClear} />
    </>
  );
}
