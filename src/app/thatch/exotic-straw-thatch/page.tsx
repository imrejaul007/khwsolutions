"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InstallationGuide } from "@/components/InstallationGuide";
import { InteractiveColorSwatch } from "@/components/InteractiveElements";

export default function StrawThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "exotic-straw-thatch");
  if (!product) return null;

  // Variant state (Indoor / Outdoor)
  const [selectedVariant, setSelectedVariant] = useState<"outdoor" | "indoor">("outdoor");

  // Color state
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const selectedColor = product.colors[selectedColorIdx];

  // Get image based on variant and color
  const getImageSrc = () => {
    return "/images/thatch/straw-thatch-main.jpeg";
  };

  return (
    <>
      {/* Hero */}
      <section className="product-hero" style={{ background: "var(--bark)" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={getImageSrc()}
            alt={`Exotic Straw Thatch - ${selectedVariant === "indoor" ? "Indoor" : "Outdoor"}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.style.background = "#a0673c";
            }}
          />
          <div style={{ position: "absolute", top: "5rem", left: "2rem", writingMode: "vertical-rl", textOrientation: "mixed", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,243,236,0.4)", transform: "rotate(180deg)" }}>
            Chapter 01 &mdash; Synthetic Thatch
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(3rem, 6vw, 8rem)", background: "var(--cream)", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span>/</span>
            <Link href="/thatch" style={{ color: "inherit" }}>Thatch</Link>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>Straw Thatch</span>
          </div>
          {product.badge && (
            <div style={{ display: "inline-block", background: "var(--gold)", color: "var(--white)", padding: "0.375rem 1rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem", alignSelf: "flex-start" }}>
              {product.badge}
            </div>
          )}
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.9, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            EXOTIC<br />STRAW<br />THATCH
          </h1>
          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }} />
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", fontWeight: 400, color: "var(--ink-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
            The right mix of traditional style and modern durability. It has a rustic-vernacular look.
          </p>

          {/* Variant selector */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.75rem" }}>
              Choose Application
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedVariant("outdoor")}
                style={{
                  flex: "1 1 250px",
                  padding: "1rem 1.25rem",
                  background: selectedVariant === "outdoor" ? "var(--gold-pale)" : "var(--white)",
                  border: `2px solid ${selectedVariant === "outdoor" ? "var(--gold)" : "var(--cream-dark)"}`,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                  Outdoor
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Installed on fiber cement board, OSB, corrugated metal, plywood, concrete
                </div>
              </button>
              <button
                onClick={() => setSelectedVariant("indoor")}
                style={{
                  flex: "1 1 250px",
                  padding: "1rem 1.25rem",
                  background: selectedVariant === "indoor" ? "var(--gold-pale)" : "var(--white)",
                  border: `2px solid ${selectedVariant === "indoor" ? "var(--gold)" : "var(--cream-dark)"}`,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                  Indoor
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Used as false ceiling, wall panel, and other decor purposes
                </div>
              </button>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.75rem" }}>
              Available Colors
            </div>
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
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: `${selectedColor.hex}15`, border: `2px solid ${selectedColor.hex}30`, borderRadius: "4px" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: selectedColor.hex, border: "2px solid var(--white)", boxShadow: "0 0 0 1px rgba(26,21,16,0.1), 0 4px 12px rgba(26,21,16,0.12)", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{selectedColor.name}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, color: "var(--ink-muted)", letterSpacing: "0.05em" }}>{selectedColor.hex.toUpperCase()} &mdash; {selectedColor.description}</div>
              </div>
            </div>
          </div>
          <div className="split-2--stats" style={{ marginBottom: "2rem" }}>
            {[
              { value: product.warranty, label: "Warranty" },
              { value: "50+", label: "Year Lifespan" },
              { value: "260", label: "km/h Wind" },
              { value: "30°", label: "Min. Pitch" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "var(--white)", padding: "1.25rem 1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "var(--bark-mid)", lineHeight: 1, marginBottom: "0.375rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/#contact" className="btn btn--primary">Get a Quote</Link>
            <a
              href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Exotic%20Straw%20Thatch.%20Please%20share%20pricing%20and%20samples."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6875rem 1.25rem",
                background: "#25D366",
                color: "#fff",
                borderRadius: "0.25rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Style Description */}
      <section className="section bg-cream">
        <div className="container">
          <div className="split-2" style={{ alignItems: "center" }}>
            <div>
              <div className="section-label">Mexican Palapas</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>
                Classic Mexican<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Palapas Style</span>
              </h2>
              <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: "1.5rem" }} />
              <p className="body-lg" style={{ color: "var(--ink-muted)", lineHeight: 1.8 }}>
                Inspired by traditional Mexican palapas and rain capes, the Straw Thatch brings centuries-old tropical aesthetics to modern spaces. Its rich tobacco brown coloring with golden highlights captures the authentic character of hand-crafted Mexican thatching.
              </p>
            </div>
            <div style={{ background: selectedColor.hex, aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{selectedColor.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>{selectedColor.hex}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison vs Palm */}
      <section className="section bg-white">
        <div className="container">
          <div>
            <div className="section-label">Choosing the Right Product</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>
              Palm Thatch vs.<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Straw Thatch</span>
            </h2>
          </div>
          <div className="split-2">
            <div style={{ background: "var(--forest-pale)", borderTop: "3px solid var(--forest-mid)", padding: "2rem" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--forest-mid)", marginBottom: "1rem" }}>
                Choose Palm Thatch if:
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { t: "No membrane required" },
                  { t: "Open rafter structures" },
                  { t: "3 color options available" },
                  { t: "Exposed ceiling texture desired" },
                  { t: "Independent waterproofing needed" },
                ].map((item) => (
                  <li key={item.t} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "var(--ink-light)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--forest-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "0.2rem", flexShrink: 0 }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item.t}
                  </li>
                ))}
              </ul>
              <Link href="/thatch/exotic-palm-thatch" className="btn btn--primary" style={{ marginTop: "1.5rem", fontSize: "0.6875rem", padding: "0.625rem 1.25rem" }}>
                View Palm Thatch
              </Link>
            </div>
            <div style={{ background: "var(--gold-pale)", borderTop: "3px solid var(--gold)", padding: "2rem" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                Choose Straw Thatch if:
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { t: "You have a solid roof deck" },
                  { t: "Mexican palapas aesthetic desired" },
                  { t: "Tobacco brown coloring preferred" },
                  { t: "Retrofitting over existing roof" },
                  { t: "Prefer traditional straw look" },
                ].map((item) => (
                  <li key={item.t} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "var(--ink-light)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "0.2rem", flexShrink: 0 }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item.t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="section bg-cream-mid" id="installation">
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <div className="section-label">Installation Guide</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1rem" }}>Installation Method</h2>
            <p className="body-lg" style={{ color: "var(--ink-muted)", maxWidth: 640 }}>
              Straw Thatch requires a <strong style={{ color: "var(--bark-mid)" }}>solid substrate and waterproof membrane</strong> &mdash; essential for proper weather protection.
            </p>
          </div>
          <InstallationGuide installations={product.installations} productName={product.name} />
        </div>
      </section>

      {/* Specs */}
      <section className="section bg-white" id="specs">
        <div className="container">
          <div className="section-label">Technical Data</div>
          <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Complete Specifications</h2>
          <ExpandablePanel title="View Full Specifications" defaultOpen={true}>
            <div style={{ background: "var(--cream)", padding: "clamp(2rem, 4vw, 3rem)" }}>
              <ul className="spec-list">
                {product.specs.map((spec) => (
                  <li key={spec.label}>
                    <span className="spec-list__label">{spec.label}</span>
                    <span className="spec-list__value">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ExpandablePanel>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="section bg-cream">
        <div className="container">
          <div className="split-2">
            <div>
              <div className="section-label">Product Features</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Key Features</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {product.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--cream-dark)" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--bark-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.125rem" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bark-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="body-sm" style={{ color: "var(--ink-light)", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label">Where to Use</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Ideal Applications</h2>
              <div className="split-2--apps-2">
                {product.applications.map((app) => (
                  <div key={app} style={{ padding: "1rem 1.25rem", background: "var(--white)", borderLeft: "3px solid var(--bark-mid)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span className="body-sm" style={{ color: "var(--ink)" }}>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-cream-mid">
        <div className="container">
          <div className="section-label">More Thatch</div>
          <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Explore Other Products</h2>
          <div className="split-2--3">
            {thatch?.subProducts.filter((p) => p.id !== "exotic-straw-thatch").map((p) => (
              <Link key={p.id} href={`/thatch/${p.id}`} style={{ display: "block", textDecoration: "none" }}>
                <div style={{ background: "var(--white)", overflow: "hidden" }}>
                  <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "var(--cream)" }}>
                    <img
                      src={`/images/thatch/${p.id.replace("exotic-", "")}-splash.png`}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.375rem" }}>
                      {p.name}
                    </h3>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>
                      View Product
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bark)", padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h2 className="heading-xl" style={{ color: "var(--cream)", marginBottom: "0.5rem" }}>
                Get a Free Quote for Straw Thatch
              </h2>
              <p className="body-sm" style={{ color: "rgba(248,243,236,0.6)" }}>
                Contact us for pricing, samples, and installation guidance.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Exotic%20Straw%20Thatch.%20Please%20share%20pricing%20and%20samples."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6875rem 1.25rem",
                  background: "#25D366",
                  color: "#fff",
                  borderRadius: "0.25rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919148584281"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6875rem 1.25rem",
                  background: "transparent",
                  color: "var(--cream)",
                  border: "1.5px solid rgba(248,243,236,0.4)",
                  borderRadius: "0.25rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  cursor: "pointer",
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
