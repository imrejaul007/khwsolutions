"use client";

const useCases = [
  {
    id: "resort",
    label: "Beach Resort",
    desc: "Pool villas, thatched roofs, tropical charm",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>
      </svg>
    ),
    color: "var(--forest-mid)",
    href: "/thatch",
    badge: "Palm & Reed Thatch",
  },
  {
    id: "restaurant",
    label: "Restaurant & Bar",
    desc: "Tiki bars, outdoor dining, tropical theme",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 2h8l1 7H7l1-7zM5 9h14l-1 13H6L5 9zM10 9v13M14 9v13M8 2v7M16 2v7"/>
      </svg>
    ),
    color: "var(--bark-mid)",
    href: "/thatch",
    badge: "Reed & Straw Thatch",
  },
  {
    id: "home",
    label: "Tropical Home",
    desc: "Gazebo, pergola, poolside cabana",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12l9-9 9 9M5 10v10h14V10M9 21V12h6v9"/>
      </svg>
    ),
    color: "var(--gold)",
    href: "/thatch",
    badge: "All Thatch Types",
  },
  {
    id: "garden",
    label: "Garden & Pool",
    desc: "Privacy screens, decorative fencing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12M12 12C12 9 9 6 6 6c0 4 2 7 6 6M12 12c0-3 3-6 6-6 0 4-2 7-6 6M12 12V7M12 7C12 4 9 1 6 1c0 4 2 7 6 6M12 7c0-3 3-6 6-6 0 4-2 7-6 6"/>
      </svg>
    ),
    color: "var(--forest)",
    href: "/bamboo",
    badge: "Bamboo Mats & Fences",
  },
  {
    id: "commercial",
    label: "Commercial",
    desc: "Theme parks, resorts, hospitality projects",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="9" width="18" height="13" rx="1"/><path d="M7 9V5a2 2 0 012-2h6a2 2 0 012 2v4M9 22V12h6v10M9 15h.01M15 15h.01"/>
      </svg>
    ),
    color: "var(--ink)",
    href: "/bamboo",
    badge: "Bamboo Panels & Poles",
  },
  {
    id: "all",
    label: "Something Else",
    desc: "Not sure? Chat with us for guidance",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
      </svg>
    ),
    color: "var(--gold)",
    href: "https://wa.me/919148584281?text=Hi%20KHW!%20I%27m%20not%20sure%20which%20product%20I%20need.%20Can%20you%20help?",
    badge: "Get Expert Advice",
  },
];

export function UseCaseFinder() {
  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <section
      style={{
        padding: "clamp(5rem, 12vw, 10rem) var(--gutter)",
        background: "var(--cream)",
        borderTop: "3px solid var(--gold)",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)", textAlign: "center" }}>
          <div
            style={{
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
            }}
          >
            <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
            Find Your Product
            <span style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "1rem",
            }}
          >
            WHAT ARE YOU BUILDING?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              fontWeight: 400,
              color: "var(--ink-muted)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Click your project type below — we&apos;ll show you the right products instantly
          </p>
        </div>

        {/* Use case cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {useCases.map((uc) => (
            <a
              key={uc.id}
              href={uc.href}
              onClick={(e) => handleClick(uc.href, e)}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.5rem 2rem",
                background: "var(--white)",
                border: "2px solid var(--cream-dark)",
                borderTop: `3px solid ${uc.color}`,
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 12px 32px rgba(26,21,16,0.12)`;
                el.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--cream-dark)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: `${uc.color}15`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: uc.color,
                  flexShrink: 0,
                }}
              >
                {uc.icon}
              </div>
              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.5rem",
                }}
              >
                {uc.label}
              </div>
              {/* Desc */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 400,
                  color: "var(--ink-muted)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {uc.desc}
              </div>
              {/* Badge */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: uc.color,
                  padding: "0.375rem 0.875rem",
                  background: `${uc.color}10`,
                  border: `1px solid ${uc.color}30`,
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                {uc.badge}
              </div>
              {/* Arrow */}
              <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", color: "var(--cream-dark)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .use-case-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .use-case-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
