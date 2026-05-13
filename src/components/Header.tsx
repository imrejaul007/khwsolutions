"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Thatch", href: "/thatch" },
    { label: "Bamboo", href: "/bamboo" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className={`catalogue-nav${scrolled ? " catalogue-nav--scrolled" : ""}`}>
      <div className="catalogue-nav__inner">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="KHW Solutions Home">
          <div
            className="flex items-center justify-center"
            style={{
              width: 42,
              height: 42,
              background: "var(--forest-mid)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--cream)",
                lineHeight: 1,
              }}
            >
              K
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.1,
              }}
            >
              KHW Solutions
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.5625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginTop: "1px",
              }}
            >
              Synthetic Thatch &amp; Bamboo
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="catalogue-nav__links" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("/")[1] ? "/" + link.href.split("/")[1] : link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`catalogue-nav__link${isActive ? " catalogue-nav__link--active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/919148584281"
            className="btn btn--gold"
            style={{ fontSize: "0.625rem", padding: "0.625rem 1.25rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Get Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="catalogue-nav__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "var(--ink)",
              transition: "all 0.3s ease",
              transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "var(--ink)",
              transition: "all 0.3s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "var(--ink)",
              transition: "all 0.3s ease",
              transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="catalogue-nav__links catalogue-nav__links--open" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="catalogue-nav__link">
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919148584281"
            className="btn btn--whatsapp"
            style={{ marginTop: "0.5rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Get a Free Quote
          </a>
        </nav>
      )}
    </header>
  );
}
