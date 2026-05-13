"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";

// ─── Scroll reveal wrapper ───────────────────────────────────────────────────
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 0.8,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  distance?: number;
  duration?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });

  const directions: Record<string, { x?: number; y?: number; scale?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.85 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Staggered children container ────────────────────────────────────────────
export function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Magnetic hover button ────────────────────────────────────────────────────
export function MagneticButton({
  children,
  href,
  className,
  onClick,
  strength = 0.3,
  target,
  rel,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  strength?: number;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const motionProps = href
    ? {}
    : { onClick, as: "button" };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-flex" }}
    >
      {href ? (
        <a href={href} className={className} target={target} rel={rel} {...motionProps}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={className} {...motionProps}>
          {children}
        </button>
      )}
    </motion.div>
  );
}

// ─── 3D tilt card ────────────────────────────────────────────────────────────
export function TiltCard({
  children,
  className,
  maxTilt = 8,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotate({ x: -y * maxTilt, y: x * maxTilt });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Expandable info panel (touch/click to expand) ─────────────────────────
export function ExpandablePanel({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const panelId = useRef(`panel-${Math.random().toString(36).slice(2, 9)}`);

  return (
    <div ref={ref}>
      <motion.button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId.current}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          borderBottom: "1px solid var(--cream-dark)",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "var(--font-heading)",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--ink)",
          gap: "1rem",
        }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: "var(--gold)", fontSize: "1.25rem", lineHeight: 1 }}
        >
          +
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId.current}
            role="region"
            aria-labelledby={`${panelId.current}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "1rem 0 1.5rem" }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────
export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number | string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numericTarget = typeof target === "string" ? parseFloat(target.replace(/[^0-9.]/g, "")) : target;

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      {typeof target === "string" ? target : target}
      {suffix}
    </motion.span>
  );
}

// ─── Interactive color swatch ────────────────────────────────────────────────
export function InteractiveColorSwatch({
  hex,
  name,
  description,
  size = "md",
  onClick,
}: {
  hex: string;
  name: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const sizes = { sm: 28, md: 40, lg: 56 };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.button
        onClick={() => { setShowTooltip(!showTooltip); onClick?.(); }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          width: sizes[size],
          height: sizes[size],
          borderRadius: "50%",
          background: hex,
          border: "3px solid var(--white)",
          boxShadow: "0 0 0 1px rgba(26,21,16,0.12), 0 4px 12px rgba(26,21,16,0.08)",
          cursor: "pointer",
          position: "relative",
        }}
        aria-label={`Select ${name} color`}
      />
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "0.5rem 0.875rem",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              zIndex: 100,
              minWidth: 140,
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 700, marginBottom: description ? "0.25rem" : 0 }}>
              {name}
            </div>
            {description && (
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.5625rem", color: "rgba(248,243,236,0.6)", letterSpacing: "0.05em" }}>
                {description}
              </div>
            )}
            <div style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0, height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid var(--ink)",
            }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

