"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CompareProduct {
  id: string;
  name: string;
  type: "thatch" | "bamboo";
  image: string;
  warranty: string;
  material: string;
}

interface CompareBarProps {
  products: CompareProduct[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function CompareBar({ products, onRemove, onClear }: CompareBarProps) {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setVisible(products.length >= 2);
  }, [products]);

  if (!visible) return null;

  return (
    <>
      {/* Floating compare bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          background: "var(--ink)",
          borderTop: "2px solid var(--gold)",
          padding: "1rem var(--gutter)",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.2)",
        }}
      >
        {/* Label */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>
            Compare ({products.length})
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, color: "var(--cream)", textTransform: "uppercase", letterSpacing: "0.02em" }}>
            Select 2+ products
          </div>
        </div>

        {/* Selected product thumbnails */}
        <div style={{ display: "flex", gap: "0.75rem", flex: 1, overflowX: "auto" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.05)",
                padding: "0.5rem 0.75rem",
                border: "1px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
              }}
            >
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--cream-dark)", overflow: "hidden" }}>
                <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 600, color: "var(--cream)", textTransform: "uppercase", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
                {p.name}
              </span>
              <button
                onClick={() => onRemove(p.id)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 0, lineHeight: 1, fontSize: "1rem" }}
                aria-label={`Remove ${p.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
          <button
            onClick={onClear}
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", background: "none", border: "1px solid rgba(255,255,255,0.15)", padding: "0.625rem 1rem", cursor: "pointer" }}
          >
            Clear
          </button>
          <button
            onClick={() => setShowModal(true)}
            disabled={products.length < 2}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--white)",
              background: products.length >= 2 ? "var(--gold)" : "rgba(184,132,58,0.3)",
              border: "none",
              padding: "0.75rem 1.5rem",
              cursor: products.length >= 2 ? "pointer" : "not-allowed",
            }}
          >
            Compare Now
          </button>
        </div>
      </div>

      {/* Compare Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(10,8,4,0.95)",
            overflow: "auto",
            padding: "2rem var(--gutter)",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Modal header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", paddingTop: "1rem" }}>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
                  Product Comparison
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--cream)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                  {products.length} Products Compared
                </h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "var(--cream)",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  lineHeight: 1,
                }}
                aria-label="Close comparison"
              >
                ×
              </button>
            </div>

            {/* Product columns */}
            <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${products.length}, 1fr)`, gap: 1, background: "rgba(255,255,255,0.05)" }}>
              {/* Header row */}
              <div />
              {products.map((p) => (
                <div key={p.id} style={{ background: "var(--forest)", padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ width: "100%", aspectRatio: "16/10", background: "var(--cream-dark)", marginBottom: "1rem", overflow: "hidden" }}>
                    <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "var(--cream)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
                    {p.name}
                  </div>
                  <Link
                    href={`/${p.type}/${p.id}`}
                    style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}
                    onClick={() => setShowModal(false)}
                  >
                    View Details →
                  </Link>
                </div>
              ))}

              {/* Spec rows */}
              {[
                { label: "Warranty", key: "warranty" },
                { label: "Material", key: "material" },
                { label: "Category", key: "type" },
              ].map((row) => (
                <div key={row.key} style={{ display: "contents" }}>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem 1.5rem", display: "flex", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {row.label}
                    </span>
                  </div>
                  {products.map((p) => (
                    <div key={`${p.id}-${row.key}`} style={{ background: "rgba(255,255,255,0.02)", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
                        {p[row.key as keyof CompareProduct]}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a
                href="https://wa.me/919148584281?text=Hi%20KHW!%20I%27d%20like%20to%20discuss%20the%20products%20I%20compared."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#25D366",
                  color: "#fff",
                  padding: "1rem 2.5rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Get a Quote for These Products
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
