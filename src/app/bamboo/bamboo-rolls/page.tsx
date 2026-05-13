"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InstallationGuide } from "@/components/InstallationGuide";
import { InteractiveColorSwatch, ExpandablePanel } from "@/components/InteractiveElements";

export default function BambooRollsPage() {
  const bamboo = products.find((p) => p.id === "bamboo-products");
  const product = bamboo?.subProducts.find((p) => p.id === "bamboo-rolls");
  if (!product) return null;

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const selectedColor = product.colors[selectedColorIdx];

  const rollTypes = [
    {
      name: "Single Layer",
      badge: "Standard",
      desc: "One row of bamboo poles bound with stainless steel wire at top and bottom. Lightweight and flexible, ideal for standard decorative applications.",
      specs: [
        { label: "Roll Size", value: "333 × 1800mm (1.1' × 6')" },
        { label: "Bamboo Height", value: "15mm avg (0.6\")" },
        { label: "Rolled Coverage", value: "Avg. 50mm (2.0\") when installed" },
        { label: "Best For", value: "Fence tops, pergola ceilings" },
      ],
    },
    {
      name: "Stacked / Double Layer",
      badge: "Premium",
      desc: "Two rows of bamboo poles stacked together, creating double the visual fullness and richness. For premium installations where depth matters.",
      specs: [
        { label: "Roll Size", value: "333 × 1800mm (1.1' × 6')" },
        { label: "Bamboo Height", value: "20mm (0.8\")" },
        { label: "Rolled Coverage", value: "Avg. 45mm (1.8\") when installed" },
        { label: "Best For", value: "Feature walls, pool fences, resorts" },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="product-hero" style={{ background: "var(--bark)" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/images/bamboo/bamboo-rolls-hero.png"
            alt="Bamboo Rolls"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.style.background = "#7a4f2e";
            }}
          />
          <div style={{ position: "absolute", top: "5rem", left: "2rem", writingMode: "vertical-rl", textOrientation: "mixed", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,243,236,0.4)", transform: "rotate(180deg)" }}>
            Chapter 02 &mdash; Synthetic Bamboo
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(3rem, 6vw, 8rem)", background: "var(--cream)", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link><span>/</span><Link href="/bamboo" style={{ color: "inherit" }}>Bamboo</Link><span>/</span><span style={{ color: "var(--ink)" }}>Rolls</span>
          </div>
          {product.badge && (
            <div style={{ display: "inline-block", background: "var(--gold)", color: "var(--white)", padding: "0.375rem 1rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem", alignSelf: "flex-start" }}>
              {product.badge}
            </div>
          )}
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.9, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            BAMBOO<br />ROLLS
          </h1>
          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }}/>
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", fontWeight: 400, color: "var(--ink-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>{product.description}</p>
          <div className="split-2--stats" style={{ marginBottom: "2rem" }}>
            {[
              { value: "ASA Premium", label: "Material" },
              { value: product.warranty, label: "Warranty" },
              { value: "38-89mm", label: "Pole OD" },
              { value: "6 Colors", label: "Color Options" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "var(--white)", padding: "1.25rem 1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--bark-mid)", lineHeight: 1, marginBottom: "0.375rem" }}>{stat.value}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Bamboo%20Rolls.%20Please%20share%20pricing%20and%20samples."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25D366", color: "#fff", padding: "0.75rem 1.5rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", cursor: "pointer" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
            <a
              href="tel:+919148584281"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "var(--cream)", border: "1.5px solid rgba(248,243,236,0.4)", padding: "0.75rem 1.5rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", cursor: "pointer" }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Roll Types */}
      <section className="section bg-cream">
        <div className="container">
          <div>
            <div className="section-label">Configurations</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
              Single vs Stacked<br /><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Double Layer</span>
            </h2>
            <p className="body-lg" style={{ color: "var(--ink-muted)", maxWidth: 560, marginBottom: "3rem" }}>
              Two configurations to match different project requirements — from lightweight standard use to premium resort installations.
            </p>
          </div>
          <div>
            {rollTypes.map((type, i) => (
              <div key={type.name}>
                <div style={{ background: "var(--white)", overflow: "hidden" }}>
                  <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--cream-dark)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.02em" }}>{type.name}</h3>
                    </div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: i === 0 ? "var(--bark-pale)" : "var(--gold)", color: i === 0 ? "var(--ink)" : "var(--white)", padding: "0.375rem 0.75rem" }}>{type.badge}</div>
                  </div>
                  <div style={{ padding: "1.5rem 2rem" }}>
                    <p className="body-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{type.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {type.specs.map((s) => (
                        <li key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid var(--cream-dark)", fontSize: "0.8125rem" }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", alignSelf: "center" }}>{s.label}</span>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--ink)", textAlign: "right" }}>{s.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="section bg-white">
        <div className="container">
          <div>
            <div className="section-label">Color Collection</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>
              {product.colors.length} Color<br /><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Options</span>
            </h2>
          </div>
          {/* Interactive swatch selector */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
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
          {/* Selected color preview */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: `${selectedColor.hex}15`, border: `2px solid ${selectedColor.hex}30`, borderRadius: "4px", marginBottom: "2rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: selectedColor.hex, border: "2px solid var(--white)", boxShadow: "0 0 0 1px rgba(26,21,16,0.1), 0 4px 12px rgba(26,21,16,0.12)", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{selectedColor.name}</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, color: "var(--ink-muted)", letterSpacing: "0.05em" }}>{selectedColor.hex.toUpperCase()} &mdash; {selectedColor.description}</div>
            </div>
          </div>
          {/* Color card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {product.colors.map((color, idx) => (
              <div
                key={color.name}
                style={{
                  background: "var(--cream)",
                  overflow: "hidden",
                  cursor: "pointer",
                  outline: idx === selectedColorIdx ? `3px solid ${color.hex}` : "none",
                  outlineOffset: "2px",
                  transition: "outline 0.2s ease",
                }}
                onClick={() => setSelectedColorIdx(idx)}
              >
                <div style={{ height: 100, background: color.hex, position: "relative" }}>
                  <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.5625rem", color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.35)", padding: "0.25rem 0.5rem" }}>{color.hex}</div>
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3 className="heading-md" style={{ fontSize: "0.875rem", marginBottom: "0.25rem", color: "var(--ink)" }}>{color.name}</h3>
                  <p className="body-xs" style={{ color: "var(--ink-muted)", lineHeight: 1.5 }}>{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="section bg-cream-mid" id="installation">
        <div className="container">
          <div className="section-label">Installation Guide</div>
          <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Installation Methods</h2>
          <ExpandablePanel title="View Installation Methods" defaultOpen={false}>
            <InstallationGuide installations={product.installations} productName={product.name} />
          </ExpandablePanel>
        </div>
      </section>

      {/* Specs */}
      <section className="section bg-white" id="specs">
        <div className="container">
          <div className="section-label">Technical Data</div>
          <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Specifications</h2>
          <ExpandablePanel title="View Full Specifications" defaultOpen={true}>
            <div style={{ background: "var(--cream)", padding: "clamp(2rem, 4vw, 3rem)" }}>
              <ul className="spec-list">
                {product.specs.map((spec) => (
                  <li key={spec.label}><span className="spec-list__label">{spec.label}</span><span className="spec-list__value">{spec.value}</span></li>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bark-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
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
          <div><div className="section-label">More Bamboo</div><h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Explore Other Products</h2></div>
          <div className="split-2--5">
            {bamboo?.subProducts.filter((p) => p.id !== "bamboo-rolls").map((p) => (
              <Link key={p.id} href={`/bamboo/${p.id}`} style={{ display: "block", textDecoration: "none" }}>
                <div style={{ background: "var(--white)", overflow: "hidden" }}>
                  <div style={{ aspectRatio: "1", overflow: "hidden", background: "var(--cream)" }}>
                    <img src={`/images/bamboo/${p.id.replace("bamboo-", "")}-splash.png`} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}/>
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)" }}>{p.name}</h3>
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
              <h2 className="heading-xl" style={{ color: "var(--cream)", marginBottom: "0.5rem" }}>Get a Free Quote for Bamboo Rolls</h2>
              <p className="body-sm" style={{ color: "rgba(248,243,236,0.6)" }}>Contact us for pricing on single or stacked rolls, samples, and expert guidance.</p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Bamboo%20Rolls.%20Please%20share%20pricing%20and%20samples."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25D366", color: "#fff", padding: "0.75rem 1.5rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", cursor: "pointer" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919148584281"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "var(--cream)", border: "1.5px solid rgba(248,243,236,0.4)", padding: "0.75rem 1.5rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", cursor: "pointer" }}
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
