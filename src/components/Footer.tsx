import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand">KHW</div>
            <div className="footer__tagline">Solutions Pvt. Ltd.</div>
            <p className="footer__desc">
              Asia&apos;s most authentic synthetic thatch roofing and bamboo products.
              Handcrafted for permanence. Engineered for elegance.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {["TUV SUD", "SGS", "INTERTEK"].map((cert) => (
                <span
                  key={cert}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.5625rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "rgba(248,243,236,0.08)",
                    color: "var(--gold-light)",
                    padding: "0.375rem 0.75rem",
                    borderRadius: "2px",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Thatch Products */}
          <div>
            <h4 className="footer__heading">Synthetic Thatch</h4>
            <ul className="footer__links">
              {[
                { label: "Exotic Palm Thatch", href: "/thatch/exotic-palm-thatch" },
                { label: "Exotic Reed Thatch", href: "/thatch/exotic-reed-thatch" },
                { label: "Exotic Straw Thatch", href: "/thatch/exotic-straw-thatch" },
                { label: "Folding Reed Shingles", href: "/thatch/folding-reed-shingles" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/thatch">View All Thatch</Link></li>
            </ul>
          </div>

          {/* Bamboo Products */}
          <div>
            <h4 className="footer__heading">Synthetic Bamboo</h4>
            <ul className="footer__links">
              {[
                { label: "Bamboo Rolls", href: "/bamboo/bamboo-rolls" },
                { label: "Bamboo Poles", href: "/bamboo/bamboo-poles" },
                { label: "Bamboo Mats", href: "/bamboo/bamboo-mats" },
                { label: "Bamboo Panels", href: "/bamboo/bamboo-panels" },
                { label: "Bamboo Fences", href: "/bamboo/bamboo-fences" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/bamboo">View All Bamboo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Get in Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "0.25rem", flexShrink: 0, color: "var(--gold)" }} aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>401/A, 1st Floor, 5th A Main, 2nd Block, HRBR Layout, Kalyan Nagar, Bangalore KA 560043</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", flexShrink: 0 }} aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.16a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <a href="tel:+919148584281" className="footer__contact-link">+91-9148584281</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", paddingLeft: "1.375rem" }}>
                  <a href="tel:+917483460820" className="footer__contact-link">+91-7483460820</a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }} aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@khwsolutions.com" className="footer__contact-link">info@khwsolutions.com</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", flexShrink: 0 }} aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Mon - Sat: 09:00 AM &ndash; 06:00 PM</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", paddingLeft: "1.875rem" }}>
                <a href="https://khwsolutions.com" className="footer__contact-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem" }}>khwsolutions.com</a>
                <a href="https://syntheticthatch.in" className="footer__contact-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem" }}>syntheticthatch.in</a>
              </div>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=919148584281&text=Hi%20KHW%20Solutions!%20I%27m%20interested%20in%20your%20synthetic%20thatch%20and%20bamboo%20products."
              className="btn btn--whatsapp"
              style={{
                marginTop: "1.5rem",
                fontSize: "0.6875rem",
                padding: "0.75rem 1.5rem",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {currentYear} KHW Solutions Pvt. Ltd. All rights reserved.
          </span>
          <span style={{ color: "var(--gold)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.875rem" }}>
            Crafting tropical elegance since 2020
          </span>
        </div>
      </div>
    </footer>
  );
}
