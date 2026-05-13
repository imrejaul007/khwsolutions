"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InstallationGuide } from "@/components/InstallationGuide";
import { InteractiveColorSwatch, ExpandablePanel } from "@/components/InteractiveElements";

export default function ReedThatchPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "exotic-reed-thatch");
  if (!product) return null;

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const selectedColor = product.colors[selectedColorIdx];

  // Get image based on color
  const getImageSrc = () => {
    const colorName = selectedColor.name.toLowerCase().replace(" ", "-");
    return `/images/thatch/KHW Exotic Reed Thatch.jpeg`;
  };

  const panelTypes = [
    {
      name: "Eave Panel",
      desc: "The starting row installed at the bottom edge of the roof, creating the finished lower edge.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      ),
    },
    {
      name: "Starter Panel",
      desc: "Transition panel between eave and main field, bridging the gap for proper water runoff.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
          <polyline points="7 16 12 21 17 16"/>
        </svg>
      ),
    },
    {
      name: "Field / Hip / Ridge Panel",
      desc: "The main panel covering the bulk of the roof surface, including hip and ridge areas.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
        </svg>
      ),
    },
  ];

  const relatedProducts = thatch?.subProducts.filter((p) => p.id !== "exotic-reed-thatch") ?? [];

  return (
    <>
      {/* ─── PRODUCT HERO ─────────────────────────────────────────── */}
      <section className="product-hero" style={{ background: "var(--bark)" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={getImageSrc()}
            alt={`Exotic Reed Thatch - ${selectedColor.name}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; (e.target as HTMLImageElement).parentElement!.style.background = "#8b6342"; }}
          />
          <div style={{ position: "absolute", top: "5rem", left: "2rem", writingMode: "vertical-rl", textOrientation: "mixed", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,243,236,0.4)", transform: "rotate(180deg)" }}>
            Chapter 01 &mdash; Synthetic Thatch
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(3rem, 6vw, 8rem)", background: "var(--cream)", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link><span>/</span>
            <Link href="/thatch" style={{ color: "inherit" }}>Thatch</Link><span>/</span>
            <span style={{ color: "var(--ink)" }}>Reed Thatch</span>
          </div>

          {product.badge && (
            <div style={{ display: "inline-block", background: "var(--gold)", color: "var(--white)", padding: "0.375rem 1rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem", alignSelf: "flex-start" }}>
              {product.badge}
            </div>
          )}

          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.9, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            EXOTIC<br />REED<br />THATCH
          </h1>

          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }}/>

          <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", fontWeight: 400, color: "var(--ink-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Luxurious synthetic reed thatch that reproduces the charm of natural water reed thatching. Reed strands at varied colors and lengths create a layered, voluminous appearance.
          </p>

          {/* Color selector — interactive */}
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

          {/* Stats */}
          <div className="split-2--stats" style={{ marginBottom: "2rem" }}>
            {[
              { value: product.warranty, label: "Warranty" },
              { value: "50+", label: "Year Lifespan" },
              { value: "260", label: "km/h Wind" },
              { value: "3", label: "Panel Types" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "var(--white)", padding: "1.25rem 1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "var(--bark-mid)", lineHeight: 1, marginBottom: "0.375rem" }}>{stat.value}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2rem", background: "var(--bark)", color: "var(--cream)", textDecoration: "none" }}>
              Get a Quote
            </a>
            <a href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Exotic%20Reed%20Thatch." style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2rem", background: "#25D366", color: "#fff", textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── THREE-PANEL SYSTEM ──────────────────────────────────── */}
      <section className="section bg-cream">
        <div className="container">
          <div>
            <div className="section-label">The System</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
              The Complete<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>3-Panel System</span>
            </h2>
            <p className="body-lg" style={{ color: "var(--ink-muted)", maxWidth: 600, marginBottom: "3rem" }}>
              Reed Thatch uses a comprehensive panel system &mdash; each type serves a specific part of the roof for complete coverage.
            </p>
          </div>

          <div className="split-2--3">
            {panelTypes.map((panel, i) => (
              <div
                key={panel.name}
                style={{
                  background: "var(--white)",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: i === 0 ? "var(--gold)" : i === 1 ? "var(--bark-light)" : "var(--bark-mid)" }}/>
                <div style={{ width: 48, height: 48, background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--bark-mid)", marginBottom: "1.25rem" }}>
                  {panel.icon}
                </div>
                <h3 className="heading-md" style={{ marginBottom: "0.75rem", color: "var(--ink)" }}>{panel.name}</h3>
                <p className="body-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>{panel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLOR OPTIONS ──────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div>
            <div className="section-label">Color Collection</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>
              Two Distinct<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Reed Tones</span>
            </h2>
          </div>
          <div className="split-2--2" style={{ maxWidth: 800 }}>
            {product.colors.map((color) => (
              <div key={color.name}>
                <div style={{ aspectRatio: "16/9", background: color.hex, marginBottom: "1.5rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: "1rem", right: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.4)", padding: "0.25rem 0.5rem" }}>{color.hex}</div>
                </div>
                <h3 className="heading-md" style={{ marginBottom: "0.5rem", color: "var(--ink)" }}>{color.name}</h3>
                <p className="body-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.6 }}>{color.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTALLATION ───────────────────────────────────────── */}
      <section className="section bg-cream-mid" id="installation">
        <div className="container">
          <div>
            <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
              <div className="section-label">Installation Guide</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
                Installation<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Methods</span>
              </h2>
              <p className="body-lg" style={{ color: "var(--ink-muted)", maxWidth: 640 }}>
                Reed Thatch is typically installed over a <strong style={{ color: "var(--bark-mid)" }}>solid substrate with a waterproof membrane</strong> for best results &mdash; unlike Palm Thatch which is independently waterproof.
              </p>
            </div>
          </div>

          <InstallationGuide installations={product.installations} productName={product.name} />
          {/* Important note */}
          <div style={{ marginTop: "2rem", background: "var(--gold-pale)", borderLeft: "3px solid var(--gold)", padding: "1.5rem 2rem" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
              Key Difference from Palm Thatch
            </div>
            <p className="body-sm" style={{ color: "var(--ink-light)", lineHeight: 1.7 }}>
              Unlike <Link href="/thatch/exotic-palm-thatch" style={{ color: "var(--forest-mid)", fontWeight: 600, textDecoration: "underline" }}>Exotic Palm Thatch</Link> which is independently waterproof, Reed Thatch requires a <strong>solid substrate</strong> (fiber cement board, corrugated metal, or plywood) with a <strong>waterproof membrane</strong> underneath.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="section bg-white" id="specs">
        <div className="container">
          <div>
            <div className="section-label">Technical Data</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>
              Complete<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Specifications</span>
            </h2>
          </div>
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

      {/* ─── FEATURES & APPLICATIONS ───────────────────────────── */}
      <section className="section bg-cream">
        <div className="container">
          <div className="split-2">
            <div>
              <div className="section-label">Product Features</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Key<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Features</span>
              </h2>
              {product.features.map((f) => (
                <div
                  key={f}
                  style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--cream-dark)" }}
                >
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--bark-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.125rem" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bark-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="body-sm" style={{ color: "var(--ink-light)", lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="section-label">Where to Use</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Ideal<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Applications</span>
              </h2>
              {product.applications.map((app) => (
                <div
                  key={app}
                  style={{ padding: "1rem 1.25rem", background: "var(--white)", borderLeft: "3px solid var(--bark-mid)", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}
                >
                  <span className="body-sm" style={{ color: "var(--ink)" }}>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ────────────────────────────────────── */}
      <section className="section bg-cream-mid">
        <div className="container">
          <div>
            <div className="section-label">More Thatch</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>
              Explore Other<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Thatch Products</span>
            </h2>
          </div>
          <div className="split-2--3-narrow">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/thatch/${p.id}`} style={{ display: "block", textDecoration: "none" }}>
                <div style={{ background: "var(--white)", overflow: "hidden" }}>
                  <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "var(--cream)" }}>
                    <img src={`/images/thatch/${p.id.replace("exotic-", "")}-splash.png`} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}/>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.375rem" }}>{p.name}</h3>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>View Product</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--bark)", padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h2 className="heading-xl" style={{ color: "var(--cream)", marginBottom: "0.5rem" }}>Get a Free Quote for Reed Thatch</h2>
              <p className="body-sm" style={{ color: "rgba(248,243,236,0.6)" }}>Contact us for pricing, samples, and installation guidance.</p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Exotic%20Reed%20Thatch.%20Please%20share%20pricing%20and%20samples." style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2rem", background: "#25D366", color: "#fff", textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp Us
              </a>
              <a href="tel:+919148584281" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2rem", background: "transparent", color: "var(--cream)", border: "1.5px solid rgba(248,243,236,0.4)", textDecoration: "none" }}>
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
