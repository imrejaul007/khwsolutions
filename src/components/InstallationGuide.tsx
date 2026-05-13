"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { InstallationMethod } from "@/data/products";

// ─── Real product images per product type ───────────────────────────────────────
const PRODUCT_IMAGES: Record<string, string[]> = {
  "exotic-palm-thatch": [
    "/images/thatch/palm-thatch-splash.png",
    "/images/thatch/palm-thatch-detail.png",
    "/images/thatch/palm-thatch-hero.png",
    "/images/thatch/palm-thatch-splash.png",
  ],
  "exotic-reed-thatch": [
    "/images/thatch/KHW Exotic Reed Thatch.jpeg",
    "/images/thatch/KHW Exotic Reed Thatch.jpeg",
    "/images/thatch/KHW Exotic Reed Thatch.jpeg",
  ],
  "exotic-straw-thatch": [
    "/images/thatch/straw-thatch-splash.png",
    "/images/thatch/straw-thatch-detail.png",
    "/images/thatch/palm-thatch-hero.png",
  ],
  "folding-reed-shingles": [
    "/images/thatch/shingles-splash.png",
    "/images/thatch/shingles-detail.png",
    "/images/thatch/palm-thatch-hero.png",
  ],
  "bamboo-rolls": [
    "/images/bamboo/bamboo-rolls-hero.png",
    "/images/bamboo/bamboo-rolls-splash2.png",
    "/images/bamboo/bamboo-rolls-detail.png",
  ],
  "bamboo-poles": [
    "/images/bamboo/bamboo-poles-hero.png",
    "/images/bamboo/bamboo-poles-detail2.png",
    "/images/bamboo/bamboo-poles-detail.png",
  ],
  "bamboo-mats": [
    "/images/bamboo/bamboo-mats-hero.png",
    "/images/bamboo/bamboo-mats-detail2.png",
    "/images/bamboo/bamboo-mats-detail.png",
  ],
  "bamboo-panels": [
    "/images/bamboo/bamboo-panels-hero.png",
    "/images/bamboo/bamboo-panels-splash2.png",
    "/images/bamboo/bamboo-panels-detail.png",
  ],
  "bamboo-fences": [
    "/images/bamboo/bamboo-fences-hero.png",
    "/images/bamboo/bamboo-fences-detail.png",
    "/images/bamboo/bamboo-panels-hero.png",
  ],
  "bamboo-upsidedown-mat": [
    "/images/bamboo/bamboo-upsidedown-hero.png",
    "/images/bamboo/bamboo-upsidedown-detail.png",
    "/images/bamboo/bamboo-panels-hero.png",
  ],
};

// ─── Image hotspot (pulsing dot with callout) ──────────────────────────────────
function ImageHotspot({
  x,
  y,
  label,
  value,
  active,
  onClick,
}: {
  x: number;
  y: number;
  label: string;
  value: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: active ? 20 : 10,
      }}
      onClick={onClick}
    >
      <motion.div
        animate={{
          scale: active ? 1.3 : 1,
          boxShadow: active ? "0 0 0 8px rgba(196,147,63,0.3)" : "0 0 0 0px rgba(196,147,63,0)",
        }}
        transition={{ duration: 0.2 }}
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: active ? "var(--gold)" : "var(--bark)",
          border: "2px solid var(--cream)",
          boxShadow: "0 2px 8px rgba(26,21,16,0.25)",
        }}
      />
      {!active && (
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "2px solid var(--gold)",
          }}
        />
      )}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: 8,
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "0.625rem 0.875rem",
              borderRadius: 4,
              whiteSpace: "nowrap",
              textAlign: "center",
              minWidth: 140,
              zIndex: 30,
              boxShadow: "0 8px 24px rgba(26,21,16,0.25)",
            }}
          >
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.4375rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>
              {label}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 500 }}>
              {value}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Expandable detail row ─────────────────────────────────────────────────────
function DetailRow({
  label,
  value,
  subValue,
  active,
  onClick,
  highlight,
}: {
  label: string;
  value: string;
  subValue?: string;
  active: boolean;
  onClick: () => void;
  highlight?: boolean;
}) {
  return (
    <motion.div
      onClick={onClick}
      animate={{
        backgroundColor: active ? "rgba(196,147,63,0.05)" : "transparent",
        borderLeftColor: active ? "var(--gold)" : "transparent",
      }}
      transition={{ duration: 0.2 }}
      style={{
        padding: "0.875rem 1rem",
        borderLeft: "3px solid transparent",
        cursor: "pointer",
        borderBottom: "1px solid var(--cream-dark)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: highlight ? "var(--gold)" : "var(--bark-mid)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            {label}
          </span>
        </div>
        <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </div>
      {!active && (
        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--ink)", marginTop: "0.25rem", marginLeft: "1.25rem" }}>
          {value}
        </div>
      )}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingTop: "0.75rem", paddingLeft: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 500, color: "var(--ink)", lineHeight: 1.2, marginBottom: subValue ? "0.375rem" : 0 }}>
                {value}
              </div>
              {subValue && (
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  {subValue}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Waterproof badge ──────────────────────────────────────────────────────────
function WaterproofBadge({ required }: { required: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        borderRadius: "100px",
        background: required ? "rgba(196,147,63,0.08)" : "rgba(107,142,35,0.08)",
        border: `1px solid ${required ? "rgba(196,147,63,0.25)" : "rgba(107,142,35,0.25)"}`,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={required ? "#C4933F" : "#6B8E23"} strokeWidth="2" strokeLinecap="round">
        {required ? (
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        ) : (
          <polyline points="20 6 9 17 4 12" />
        )}
      </svg>
      <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: required ? "#C4933F" : "#6B8E23" }}>
        {required ? "Waterproofing Required" : "100% Waterproof — No Membrane Needed"}
      </span>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function InstallationGuide({
  installations,
  productName,
}: {
  installations: InstallationMethod[];
  productName: string;
}) {
  const [activeInstall, setActiveInstall] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const currentInstall = installations[activeInstall];

  const productKey = (() => {
    const p = productName.toLowerCase();
    if (p.includes("palm")) return "exotic-palm-thatch";
    if (p.includes("reed") && p.includes("thatch")) return "exotic-reed-thatch";
    if (p.includes("straw")) return "exotic-straw-thatch";
    if (p.includes("folding") || p.includes("shingle")) return "folding-reed-shingles";
    if (p.includes("roll")) return "bamboo-rolls";
    if (p.includes("pole")) return "bamboo-poles";
    if (p.includes("mat") && !p.includes("panel")) return "bamboo-mats";
    if (p.includes("panel") && !p.includes("fence")) return "bamboo-panels";
    if (p.includes("fence")) return "bamboo-fences";
    if (p.includes("upside") || p.includes("thatch mat")) return "bamboo-upsidedown-mat";
    return "";
  })();

  const images = PRODUCT_IMAGES[productKey] || ["/images/thatch/palm-thatch-splash.png"];
  const currentImage = images[activeInstall % images.length];

  // Hotspots per installation type (positioned on the image as %)
  const hotspots = (() => {
    if (currentInstall.type.includes("Horizontal")) {
      return [
        { id: "beam", x: 25, y: 30, label: "Beam", value: currentInstall.beam || "Min. 100×100mm (4\"×4\")" },
        { id: "batten", x: 55, y: 48, label: "Batten", value: currentInstall.batten || "Min. 50×50mm (2\"×2\")" },
        { id: "spacing", x: 72, y: 60, label: "Spacing", value: currentInstall.battenSpacing || "20cm" },
        { id: "pillar", x: 25, y: 82, label: "Pillar", value: currentInstall.pillar || "Min. 100×100mm (4\"×4\")" },
      ];
    }
    if (currentInstall.type.includes("Vertical") || currentInstall.type.includes("Rafter") || currentInstall.type.includes("Roof")) {
      return [
        { id: "beam", x: 50, y: 15, label: "Beam", value: currentInstall.beam || "Min. 100×100mm (4\"×4\")" },
        { id: "rafter", x: 28, y: 38, label: "Rafter", value: currentInstall.rafter || "50×50mm or 38×38mm" },
        { id: "spacing", x: 68, y: 50, label: "Spacing", value: currentInstall.battenSpacing || "50cm" },
        { id: "pillar", x: 50, y: 86, label: "Pillar", value: currentInstall.pillar || "Min. 100×100mm (4\"×4\")" },
      ];
    }
    if (currentInstall.type.includes("Single Layer") || currentInstall.type.includes("Stacked") || currentInstall.type.includes("Roll") || currentInstall.type.includes("Reed + Indoor")) {
      return [
        { id: "panel", x: 50, y: 28, label: "Panel", value: currentInstall.panelSize || "333 × 1800mm (1.1' × 6')" },
        { id: "height", x: 35, y: 52, label: "Height", value: currentInstall.height || "15–20mm" },
        { id: "wire", x: 68, y: 72, label: "Binding", value: "Stainless Steel Wire" },
        { id: "layer", x: 50, y: 88, label: "Type", value: currentInstall.type.includes("Single") ? "Single Layer" : currentInstall.type.includes("Reed") ? "Compact Reed" : "Stacked Double" },
      ];
    }
    if (currentInstall.type.includes("Pole")) {
      const poles = currentInstall.poles || [];
      return [
        { id: "od", x: 30, y: 38, label: "Outer Diameter", value: "25mm – 95mm" },
        { id: "length", x: 55, y: 55, label: "Length", value: poles[0] ? `${poles[0].length}mm` : "1000mm" },
        { id: "wall", x: 75, y: 40, label: "Thickness", value: poles[0] ? `${poles[0].thickness}mm` : "3–10mm varies" },
        { id: "node", x: 40, y: 80, label: "Nodes", value: "Raised — like real bamboo" },
      ];
    }
    if (currentInstall.type.includes("Mat") || currentInstall.type.includes("Wall") || currentInstall.type.includes("Ceiling") || currentInstall.type.includes("Fence")) {
      return [
        { id: "size", x: 50, y: 28, label: "Panel", value: currentInstall.panelSize || "8ft × 4ft (1.2m × 2.4m)" },
        { id: "pattern", x: 35, y: 58, label: currentInstall.patterns ? "Patterns" : "Application", value: currentInstall.patterns?.[0] || currentInstall.type.split(" ")[0] },
        { id: "coverage", x: 68, y: 75, label: "Coverage", value: "30 sq ft per roll" },
      ];
    }
    if (currentInstall.type.includes("Panel") || currentInstall.type.includes("Cladding") || currentInstall.type.includes("Soffit")) {
      return [
        { id: "panel", x: 50, y: 28, label: "Panel", value: currentInstall.panelSize || "333 × 1800mm (1.1' × 6')" },
        { id: "profile", x: 35, y: 58, label: "Profile", value: currentInstall.profiles?.[0] || "Slat / Round" },
        { id: "mat", x: 65, y: 72, label: "Material", value: "ASA Premium Outdoor" },
      ];
    }
    if (currentInstall.type.includes("Fence") || currentInstall.type.includes("Screen")) {
      return [
        { id: "style", x: 28, y: 35, label: "Styles", value: currentInstall.styles ? `${currentInstall.styles.length} Japanese designs` : "4 styles" },
        { id: "privacy", x: 55, y: 55, label: "Privacy", value: "Full — No gaps" },
        { id: "weather", x: 72, y: 75, label: "Testing", value: "10,000hr UV tested" },
      ];
    }
    if (currentInstall.type.includes("Upside") || currentInstall.type.includes("Feature Wall")) {
      return [
        { id: "panel", x: 50, y: 28, label: "Panel", value: currentInstall.panelSize || "333 × 1800mm" },
        { id: "effect", x: 35, y: 62, label: "Effect", value: "Exposed pole ends" },
        { id: "mat", x: 65, y: 75, label: "Material", value: "ASA Premium" },
      ];
    }
    return [
      { id: "panel", x: 50, y: 40, label: "Panel", value: currentInstall.panelSize || "—" },
    ];
  })();

  const allDetails = [
    ...(currentInstall.beam ? [{ id: "beam", label: "Beam", value: currentInstall.beam, sub: "Structural horizontal member" }] : []),
    ...(currentInstall.batten ? [{ id: "batten", label: "Batten / Reaper", value: currentInstall.batten, sub: "Horizontal board holding shingles" }] : []),
    ...(currentInstall.rafter ? [{ id: "rafter", label: "Rafter", value: currentInstall.rafter, sub: "Vertical structural member" }] : []),
    ...(currentInstall.battenSpacing ? [{ id: "spacing", label: "Batten Spacing", value: currentInstall.battenSpacing, sub: "Center-to-center spacing" }] : []),
    ...(currentInstall.pillar ? [{ id: "pillar", label: "Pillar", value: currentInstall.pillar, sub: "Vertical support column" }] : []),
    ...(currentInstall.panelSize ? [{ id: "panel", label: "Panel Size", value: currentInstall.panelSize, sub: "Standard product dimensions" }] : []),
    ...(currentInstall.height ? [{ id: "height", label: "Strand Height", value: currentInstall.height, sub: "Individual pole / shingle strand height" }] : []),
    ...(currentInstall.railType ? [{ id: "rail", label: "Rail System", value: currentInstall.railType, sub: "Concealed aluminum rail system" }] : []),
    ...(currentInstall.fasteners ? [{ id: "fasteners", label: "Fastening", value: currentInstall.fasteners, sub: "Stainless steel wire binding" }] : []),
    ...(currentInstall.poles ? [{ id: "poles", label: "Diameter Range", value: `${currentInstall.poles![0].od} – ${currentInstall.poles![currentInstall.poles!.length - 1].od} OD`, sub: `${currentInstall.poles!.length} sizes available` }] : []),
    ...(currentInstall.patterns ? [{ id: "pattern", label: "Weave Patterns", value: currentInstall.patterns.join(", "), sub: "Hand-woven by skilled artisans" }] : []),
    ...(currentInstall.styles ? [{ id: "style", label: "Fence Styles", value: currentInstall.styles.join(", "), sub: "4 Japanese-inspired designs" }] : []),
    ...(currentInstall.profiles ? [{ id: "profile", label: "Profiles", value: currentInstall.profiles.join(", "), sub: "Multiple visual options" }] : []),
  ];

  return (
    <div ref={ref}>
      {/* Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        {installations.map((inst, i) => (
          <motion.button
            key={inst.type}
            onClick={() => { setActiveInstall(i); setActiveHotspot(null); setActiveDetail(null); }}
            animate={{
              backgroundColor: i === activeInstall ? "var(--bark)" : "var(--white)",
              color: i === activeInstall ? "var(--cream)" : "var(--ink)",
              boxShadow: i === activeInstall ? "0 4px 16px rgba(26,21,16,0.15)" : "none",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "100px",
              border: `1px solid ${i === activeInstall ? "var(--bark)" : "var(--cream-dark)"}`,
              cursor: "pointer",
              fontFamily: "var(--font-heading)",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            <span style={{ opacity: 0.6, marginRight: "0.375rem" }}>{String(i + 1).padStart(2, "0")}</span>
            {inst.type.split("(")[0].trim().split(" / ")[0].trim()}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeInstall}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 2-column grid: image + data panel */}
          <div className="guide-grid">

            {/* ── Left: Product image with hotspots ── */}
            <div>
              <div style={{
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                background: "var(--cream)",
                aspectRatio: "4/3",
              }}>
                {/* Image — cross-fades on tab change */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${productKey}-${activeInstall}`}
                    src={currentImage}
                    alt={currentInstall.type}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = "#F5F0E8";
                      }
                    }}
                  />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(26,21,16,0.55) 0%, transparent 40%, transparent 70%, rgba(26,21,16,0.3) 100%)",
                  pointerEvents: "none",
                }} />

                {/* Installation type badge */}
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(26,21,16,0.8)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  color: "var(--cream)",
                  padding: "0.5rem 0.875rem",
                  borderRadius: 4,
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  zIndex: 10,
                }}>
                  {currentInstall.type}
                </div>

                {/* Bottom hint */}
                <div style={{
                  position: "absolute",
                  bottom: "0.75rem",
                  right: "0.75rem",
                  background: "rgba(26,21,16,0.55)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  color: "var(--cream)",
                  padding: "0.25rem 0.625rem",
                  borderRadius: 3,
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.4375rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  zIndex: 10,
                }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  Click hotspots for measurements
                </div>

                {/* Hotspot callouts */}
                {hotspots.map((spot) => (
                  <ImageHotspot
                    key={spot.id}
                    x={spot.x}
                    y={spot.y}
                    label={spot.label}
                    value={spot.value}
                    active={activeHotspot === spot.id}
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  />
                ))}
              </div>

              {/* Waterproof badge */}
              {currentInstall.waterMembrane && (
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                  <WaterproofBadge required={!currentInstall.waterMembrane.includes("Not required")} />
                </div>
              )}

              {/* Key specs */}
              {currentInstall.keySpecs && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "1rem" }}>
                  {currentInstall.keySpecs.map((spec) => (
                    <div
                      key={spec}
                      style={{
                        padding: "0.375rem 0.75rem",
                        background: "var(--cream)",
                        border: "1px solid var(--cream-dark)",
                        borderRadius: "100px",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.5625rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase" as const,
                        color: "var(--ink)",
                      }}
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-deck / water membrane status */}
              <div className="guide-grid--subdeck" style={{ marginTop: "1rem" }}>
                {currentInstall.subDeck && (
                  <div style={{
                    padding: "1rem",
                    background: "var(--cream)",
                    borderRadius: 4,
                    borderLeft: `3px solid ${currentInstall.subDeck.includes("Not required") ? "#6B8E23" : "var(--cream-dark)"}`,
                  }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.375rem" }}>Sub-Deck</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, color: "var(--ink)" }}>
                      {currentInstall.subDeck.includes("Not required") ? "Not Required" : "Required"}
                    </div>
                  </div>
                )}
                {currentInstall.waterMembrane && (
                  <div style={{
                    padding: "1rem",
                    background: "var(--cream)",
                    borderRadius: 4,
                    borderLeft: `3px solid ${currentInstall.waterMembrane.includes("Not required") ? "#6B8E23" : "#C4933F"}`,
                  }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.375rem" }}>Waterproofing</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600, color: "var(--ink)" }}>
                      {currentInstall.waterMembrane.includes("Not required") ? "Not Required" : "Required"}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Right: Interactive data panel ── */}
            <div>
              {/* Description */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                  {currentInstall.type}
                </h3>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.8 }}>
                  {currentInstall.description}
                </p>
              </div>

              {/* Pro tip note */}
              {currentInstall.notes && (
                <div style={{
                  padding: "1rem 1.25rem",
                  background: "rgba(196,147,63,0.06)",
                  borderLeft: "3px solid var(--gold)",
                  borderRadius: "0 4px 4px 0",
                  marginBottom: "1.5rem",
                }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.375rem" }}>
                    Pro Tip
                  </div>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.7, fontStyle: "italic" }}>
                    {currentInstall.notes}
                  </p>
                </div>
              )}

              {/* Expandable measurement rows */}
              {allDetails.length > 0 && (
                <div style={{ background: "var(--cream)", borderRadius: 4, overflow: "hidden", marginBottom: "1.5rem" }}>
                  <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--cream-dark)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                      Measurements & Data
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "var(--ink-muted)" }}>
                      {allDetails.length} items
                    </span>
                  </div>
                  {allDetails.map((detail) => (
                    <DetailRow
                      key={detail.id}
                      label={detail.label}
                      value={detail.value}
                      subValue={detail.sub}
                      active={activeDetail === detail.id}
                      onClick={() => setActiveDetail(activeDetail === detail.id ? null : detail.id)}
                      highlight={activeHotspot === detail.id}
                    />
                  ))}
                </div>
              )}

              {/* Pole diameter table */}
              {currentInstall.poles && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.75rem" }}>
                    All Diameter Options
                  </div>
                  <div style={{ background: "var(--cream)", borderRadius: 4, overflow: "hidden" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--cream-dark)" }}>
                          {["OD", "ID", "Thickness", "Length"].map((h, i) => (
                            <th key={h} style={{ fontFamily: "var(--font-heading)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--cream)", padding: "0.625rem 0.5rem", textAlign: i === 0 ? "left" : "right", background: "var(--bark)" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentInstall.poles!.map((p, i) => (
                          <tr key={p.od} style={{ borderBottom: i < currentInstall.poles!.length - 1 ? "1px solid var(--cream-dark)" : "none", background: i % 2 === 0 ? "var(--white)" : "transparent" }}>
                            {[
                              <span key="od" style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", color: "var(--ink)", fontWeight: 500 }}>{p.od}</span>,
                              <span key="id" style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)" }}>{p.id}</span>,
                              <span key="th" style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)" }}>{p.thickness}</span>,
                              <span key="ln" style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)" }}>{p.length}mm</span>,
                            ].map((cell, j) => (
                              <td key={j} style={{ padding: "0.625rem 0.5rem", textAlign: j === 0 ? "left" : "right" }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Patterns / Styles / Profiles */}
              {(currentInstall.patterns || currentInstall.styles || currentInstall.profiles) && (
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: "0.75rem" }}>
                    {currentInstall.patterns ? "Weave Patterns" : currentInstall.styles ? "Fence Styles" : "Available Profiles"}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {(currentInstall.patterns || currentInstall.styles || currentInstall.profiles)!.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "var(--cream)", borderRadius: 4 }}>
                        <div style={{ width: 8, height: 8, background: "var(--gold)", borderRadius: "50%", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", fontWeight: 600, color: "var(--ink)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
