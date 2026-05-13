"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";

export default function PalmThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "exotic-palm-thatch");
  if (!product) return null;

  const relatedProducts = thatch?.subProducts.filter((p) => p.id !== "exotic-palm-thatch") ?? [];

  const withoutSurfaces = ["Fiber Cement Board", "OSB Board", "Corrugated Metal", "Marine Plywood", "Concrete", "Puffed Sheet"];
  const withSurfaces = ["Metal", "Bamboo", "Wood"];

  const features = [
    "No Waterproof Membrane Required",
    "20-Year Warranty",
    "50 Years Life Expectancy",
    "Zero Maintenance",
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section style={{ display: "grid", gridTemplateColumns: "55% 45%", minHeight: "90vh" }}>
        <div style={{ position: "relative", background: "var(--ink)" }}>
          <img
            src="/images/thatch/palm-thatch-hero.png"
            alt="Exotic Palm Thatch"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
          />
          {/* Cart label in top left */}
          <img
            src="/images/thatch/palm-thatch-splash.png"
            alt="Product Info"
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              width: "clamp(150px, 15vw, 200px)",
              height: "auto",
              zIndex: 10,
            }}
          />
          <div style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            fontFamily: "var(--font-heading)",
            fontSize: "0.5rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(248,243,236,0.5)",
          }}>
            Chapter 01 — Synthetic Thatch
          </div>
        </div>

        <div style={{ background: "var(--cream)", padding: "clamp(3rem, 5vw, 6rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <nav style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "2rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/thatch" style={{ color: "inherit", textDecoration: "none" }}>Thatch</Link>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>Palm Thatch</span>
          </nav>

          {product.badge && (
            <div style={{ display: "inline-block", background: "var(--gold)", color: "var(--white)", padding: "0.25rem 0.75rem", fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", alignSelf: "flex-start" }}>
              {product.badge}
            </div>
          )}

          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.85, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Exotic<br />Palm<br />Thatch
          </h1>

          <div style={{ width: 50, height: 3, background: "var(--gold)", marginBottom: "1.5rem" }} />

          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Designed to replicate the rich, tropical appearance of natural dried palm that mimics traditional island-style roofing.
          </p>

          {/* Features */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: "var(--forest)", color: "var(--white)", padding: "0.5rem 1rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {f}
              </div>
            ))}
          </div>

          {/* Colors */}
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.75rem" }}>
              Colors Available
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {product.colors.map((c, i) => (
                <div key={i} title={c.name} style={{ width: 40, height: 40, borderRadius: "50%", background: c.hex, border: "3px solid var(--cream-dark)", cursor: "pointer" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WITHOUT RAILS ─────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
            {/* Left */}
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                Variant 01
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.85, textTransform: "uppercase", marginBottom: "2rem" }}>
                Without<br />Rails
              </h2>
              <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: "2rem" }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                This variant of KHW's Exotic Nipa palm thatch leaves is installed directly on surfaces such as fibre cement board, OSB board, corrugated metal sheet, puffed sheet, marine plywood, and concrete. Once installed, it provides a traditional Island-like palm thatch appearance.
              </p>

              {/* Surfaces */}
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "1rem" }}>
                  Suitable Surfaces
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {withoutSurfaces.map((s) => (
                    <div key={s} style={{ background: "var(--cream)", padding: "0.5rem 1rem", fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 600, color: "var(--ink)" }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              {/* Image */}
              <div style={{ aspectRatio: "4/3", background: "var(--cream)", borderRadius: 4, overflow: "hidden", marginBottom: "2rem" }}>
                <img src="/images/thatch/palm-thatch-hero.png" alt="Without Rails" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Specs Table */}
              <div style={{ background: "var(--cream)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "1rem" }}>
                  Technical Specifications
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      ["Panel Size", "93 CM × 67 CM"],
                      ["Leaf Coverage", "2 Sq ft"],
                      ["Material", "HDPE (Recyclable)"],
                      ["Leaf Weight", "500 gm"],
                    ].map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid var(--cream-dark)" }}>
                        <td style={{ padding: "0.75rem 0", fontFamily: "var(--font-heading)", fontSize: "0.6875rem", color: "var(--ink-muted)", textTransform: "uppercase" }}>{k}</td>
                        <td style={{ padding: "0.75rem 0", fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)", textAlign: "right" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTALLATION - Without Rails ──────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Without Rails
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase" }}>
              Three Installation Methods
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              {
                title: "Plywood Deck / OSB",
                desc: "Installed directly over plywood or OSB sheathing. A waterproofing membrane is optional but recommended for added weather protection.",
                tip: "Plywood: min. 16mm (5/8\"). OSB: min. 12mm (15/32\"). Apply waterproofing membrane before batten installation.",
              },
              {
                title: "Metal Sheeting",
                desc: "Installed over metal roofing sheets with horizontal battens secured to the metal structure. Maintains the authentic tropical aesthetic.",
                tip: "Batten spacing: 220mm (9\"). Secure battens to metal roof structure with appropriate metal fasteners.",
              },
              {
                title: "Concrete Roofing",
                desc: "Installed over concrete or cement tile roofing surfaces with horizontal battens. Provides a tropical aesthetic over solid concrete.",
                tip: "Batten spacing: 220mm (9\"). Use masonry anchors and appropriate concrete fasteners.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
                  Method {i + 1}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {item.desc}
                </p>
                <div style={{ background: "var(--forest)", padding: "1rem" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
                    Pro Tip
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--white)", lineHeight: 1.6 }}>
                    {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WITH RAILS ───────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
            {/* Left */}
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                Variant 02
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.85, textTransform: "uppercase", marginBottom: "2rem" }}>
                With<br />Rails
              </h2>
              <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: "2rem" }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                This variant of KHW's Exotic Nipa palm thatch leaves comes along with special Aluminium rail accessories and is installed directly on any roofing frame, either made of metal, wood or bamboo, having vertical rafters that go along the direction of the slope at every 50cms spacing.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Once installed it not only gives the exterior thatch appearance but also provides an exposed underside balinese symmetrical view.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink)", lineHeight: 1.7, marginBottom: "2rem" }}>
                <strong>Popular for:</strong> Gazebos, Pavilions, Umbrellas, Projection Areas, Non-A/C Spaces
              </p>

              {/* Surfaces */}
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "1rem" }}>
                  Suitable Surfaces
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {withSurfaces.map((s) => (
                    <div key={s} style={{ background: "var(--cream)", padding: "0.5rem 1rem", fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 600, color: "var(--ink)" }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              {/* Image */}
              <div style={{ aspectRatio: "4/3", background: "var(--cream)", borderRadius: 4, overflow: "hidden", marginBottom: "2rem" }}>
                <img src="/images/thatch/palm-thatch-hero.png" alt="With Rails" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Specs Table */}
              <div style={{ background: "var(--cream)", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "1rem" }}>
                  Technical Specifications
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      ["Panel Size", "93 CM × 67 CM"],
                      ["Leaf Coverage", "2 Sq ft"],
                      ["Material", "HDPE (Recyclable)"],
                      ["Leaf Weight", "500 gm"],
                    ].map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid var(--cream-dark)" }}>
                        <td style={{ padding: "0.75rem 0", fontFamily: "var(--font-heading)", fontSize: "0.6875rem", color: "var(--ink-muted)", textTransform: "uppercase" }}>{k}</td>
                        <td style={{ padding: "0.75rem 0", fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)", textAlign: "right" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Measurements */}
              <div style={{ background: "var(--forest)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                  Frame Measurements
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      ["Vertical Rafter Spacing", "500mm (19.7\")"],
                      ["Rafter Size", "Min. 50×50mm (2\"×2\")"],
                      ["Beam Size", "Min. 100×100mm (4\"×4\")"],
                      ["Pillar", "Min. 100×100mm (4\"×4\")"],
                    ].map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid rgba(248,243,236,0.1)" }}>
                        <td style={{ padding: "0.5rem 0", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(248,243,236,0.7)" }}>{k}</td>
                        <td style={{ padding: "0.5rem 0", fontFamily: "var(--font-heading)", fontSize: "0.8125rem", fontWeight: 700, color: "var(--white)", textAlign: "right" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WITH RAILS - FEATURES ────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              With Rails
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase" }}>
              Key Features
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Aluminium Rails", desc: "Special aluminium rail accessories included for easy installation and lasting durability." },
              { title: "Balinese View", desc: "Provides an exposed underside balinese symmetrical view for aesthetic appeal." },
              { title: "Versatile Frame", desc: "Can be installed on metal, wood, or bamboo roofing frames." },
              { title: "50cm Spacing", desc: "Vertical rafters at 50cm spacing along the direction of the slope." },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--gold)", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "var(--white)", fontSize: "1.25rem", fontWeight: 700 }}>{i + 1}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLORS ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Available Finishes
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--white)", textTransform: "uppercase" }}>
              Color Options
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 4, overflow: "hidden", marginBottom: "1rem" }}>
                <img src="/images/thatch/Exotic Palm Thatch (Aged Colour).png" alt="Aged Colour" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--white)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Aged Colour
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 4, overflow: "hidden", marginBottom: "1rem" }}>
                <img src="/images/thatch/Exotic Palm Thatch (Sundried Colour).png" alt="Sundried Colour" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--white)", textTransform: "uppercase", letterSpacing: "0.1.1em" }}>
                Sundried Colour
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Explore More
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase" }}>
              Other Thatch Options
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/thatch/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--white)", overflow: "hidden", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"}
                >
                  <div style={{ aspectRatio: "4/3", background: "var(--cream-mid)", overflow: "hidden" }}>
                    <img
                      src={p.id === "exotic-straw-thatch" ? "/images/thatch/Exotic Straw Thatch.jpeg" : "/images/thatch/KHW Exotic Reed Thatch.jpeg"}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      {p.name}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                      {p.description.substring(0, 100)}...
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
