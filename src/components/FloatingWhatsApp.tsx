"use client";

import { useState } from "react";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const [pulsing, setPulsing] = useState(true);

  return (
    <a
      href="https://api.whatsapp.com/send?phone=919148584281&text=Hi%20KHW%20Solutions!%20I%27m%20interested%20in%20your%20synthetic%20thatch%20and%20bamboo%20products.%20Please%20share%20a%20quote."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onAnimationEnd={() => setPulsing(false)}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "#25D366",
        color: "#ffffff",
        padding: hovered ? "0.875rem 1.5rem" : "0.875rem",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: hovered ? "280px" : "56px",
      }}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          style={{ animation: pulsing ? "pulse-green 1.5s ease-out forwards" : "none" }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </div>
      {/* Text */}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: hovered ? "auto" : 0,
          overflow: "hidden",
        }}
      >
        Chat with Us
      </span>
      <style>{`
        @keyframes pulse-green {
          0% { transform: scale(1); }
          30% { transform: scale(1.15); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          right: 1rem;
          bottom: 1.5rem;
        }
      `}</style>
    </a>
  );
}
