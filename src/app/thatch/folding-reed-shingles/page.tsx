"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InstallationGuide } from "@/components/InstallationGuide";
import { InteractiveColorSwatch, ExpandablePanel } from "@/components/InteractiveElements";

export default function FoldingShinglesPage() {
  const thatch = products.find((p) => p.id === "synthetic-thatch");
  const product = thatch?.subProducts.find((p) => p.id === "folding-reed-shingles");
  if (!product) return null;

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const selectedColor = product.colors[selectedColorIdx];

  const benefits = [
    { title: "Seamless Edges", desc: "The folding line wraps around roof edges, eliminating gaps and creating a continuous thatch surface with no exposed fasteners." },
    { title: "No Separate Ridge Pieces", desc: "One shingle covers both edges AND field area — simplifies ordering and reduces installation steps dramatically." },
    { title: "Enhanced Waterproofing", desc: "The folding design minimizes gaps between shingles, providing superior weather protection at all roof intersections." },
  ];

  const relatedProducts = thatch?.subProducts.filter((p) => p.id !== "folding-reed-shingles") ?? [];

  return (
    <>
      {/* Hero */}
      <section className="product-hero" style={{ background: "var(--bark)" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="/images/thatch/shingles-splash.png" alt="Folding Reed Shingles"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; (e.target as HTMLImageElement).parentElement!.style.background = "#8b6342"; }}
          />
          <div style={{ position: "absolute", top: "5rem", left: "2rem", writingMode: "vertical-rl", textOrientation: "mixed", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,243,236,0.4)", transform: "rotate(180deg)" }}>Chapter 01 &mdash; Synthetic Thatch</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(3rem, 6vw, 8rem)", background: "var(--cream)", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link><span>/</span><Link href="/thatch" style={{ color: "inherit" }}>Thatch</Link><span>/</span><span style={{ color: "var(--ink)" }}>Folding Shingles</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 0.9, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            FOLDING<br />REED<br />SHINGLES
          </h1>
          <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }}/>
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", fontWeight: 400, color: "var(--ink-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>{product.description}</p>
          {/* Folding visual */}
          <div style={{ background: "var(--cream-mid)", padding: "1.5rem", marginBottom: "2rem", borderLeft: "3px solid var(--gold)" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Key Innovation</div>
            <p className="body-sm" style={{ color: "var(--ink-light)", lineHeight: 1.7 }}>Pre-scored folding line allows each shingle to fold around roof edges, ridges, and corners seamlessly &mdash; eliminating the need for separate hip/ridge pieces.</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/#contact" className="btn btn--primary">Get a Quote</Link>
            <a href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Folding%20Reed%20Shingles." target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "#fff", padding: "0.875rem 2rem", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-cream">
        <div className="container">
          <div>
            <div className="section-label">The Innovation</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
              Why Folding<br /><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Shingles?</span>
            </h2>
            <p className="body-lg" style={{ color: "var(--ink-muted)", maxWidth: 560, marginBottom: "3rem" }}>
              The pre-scored folding line is the key innovation that makes this product unique &mdash; allowing for seamless coverage of complex roof angles.
            </p>
          </div>
          <div>
            <div className="split-2--3">
              {benefits.map((b, i) => (
                <div key={b.title} style={{ background: "var(--white)", padding: "2rem", height: "100%", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: i === 0 ? "var(--gold)" : i === 1 ? "var(--bark-light)" : "var(--bark-mid)" }}/>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700, color: "var(--cream-dark)", lineHeight: 1, marginBottom: "1rem" }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="heading-md" style={{ marginBottom: "0.75rem", color: "var(--ink)" }}>{b.title}</h3>
                  <p className="body-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Color & Specs */}
      <section className="section bg-white" id="specs">
        <div className="container">
          <div className="split-2">
            <div>
              <div className="section-label">Color</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
                Natural Reed<br /><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tone</span>
              </h2>
              <div style={{ background: selectedColor.hex, aspectRatio: "16/9", marginBottom: "1.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: "1rem", right: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.4)", padding: "0.25rem 0.5rem" }}>{selectedColor.hex}</div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
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
              <h3 className="heading-md" style={{ marginBottom: "0.5rem", color: "var(--ink)" }}>{selectedColor.name}</h3>
              <p className="body-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.6 }}>{selectedColor.description}</p>
            </div>
            <div>
              <div className="section-label">Technical Data</div>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
                Complete<br /><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Specifications</span>
              </h2>
              <ExpandablePanel title="View Full Specifications" defaultOpen={true}>
                <div style={{ background: "var(--cream)", padding: "clamp(1.5rem, 3vw, 2rem)" }}>
                  <ul className="spec-list">
                    {product.specs.map((spec) => (<li key={spec.label}><span className="spec-list__label">{spec.label}</span><span className="spec-list__value">{spec.value}</span></li>))}
                  </ul>
                </div>
              </ExpandablePanel>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="section bg-cream-mid" id="installation">
        <div className="container">
          <div>
            <div className="section-label">Installation Guide</div>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Modular Folding System</h2>
          </div>
          <ExpandablePanel title="View Installation Methods" defaultOpen={false}>
            <InstallationGuide installations={product.installations} productName={product.name} />
          </ExpandablePanel>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="section bg-cream">
        <div className="container">
          <div className="split-2">
            <div>
              <div className="section-label">Product Features</div><h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Key Features</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {product.features.map((f) => (<div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--cream-dark)" }}><div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--bark-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.125rem" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bark-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></div><span className="body-sm" style={{ color: "var(--ink-light)", lineHeight: 1.6 }}>{f}</span></div>))}
              </div>
            </div>
            <div>
              <div className="section-label">Where to Use</div><h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Ideal Applications</h2>
              <div className="split-2--apps-2">
                {product.applications.map((app) => (<div key={app} style={{ padding: "1rem 1.25rem", background: "var(--white)", borderLeft: "3px solid var(--bark-mid)", display: "flex", alignItems: "center", gap: "0.75rem" }}><span className="body-sm" style={{ color: "var(--ink)" }}>{app}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-cream-mid">
        <div className="container">
          <div><div className="section-label">More Thatch</div><h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Explore Other Products</h2></div>
          <div className="split-2--3">
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

      {/* CTA */}
      <section style={{ background: "var(--bark)", padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <div><h2 className="heading-xl" style={{ color: "var(--cream)", marginBottom: "0.5rem" }}>Get a Free Quote for Folding Shingles</h2><p className="body-sm" style={{ color: "rgba(248,243,236,0.6)" }}>Contact us for pricing, samples, and installation guidance.</p></div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20interested%20in%20Folding%20Reed%20Shingles.%20Please%20share%20pricing%20and%20samples." target="_blank" rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", padding: "0.875rem 2rem", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp Us
              </a>
              <a href="tel:+919148584281"
                style={{ background: "transparent", color: "var(--cream)", border: "1.5px solid rgba(248,243,236,0.4)", padding: "0.875rem 2rem", fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
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
