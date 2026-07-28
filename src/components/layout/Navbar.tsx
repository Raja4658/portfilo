"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Command } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onCommandOpen: () => void;
}

export default function Navbar({ onCommandOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9000,
          width: "calc(100% - 48px)",
          maxWidth: 900,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            background: scrolled ? "rgba(5,8,22,0.92)" : "rgba(5,8,22,0.6)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100,
            transition: "all 0.4s ease",
            boxShadow: scrolled ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              textDecoration: "none", cursor: "pointer",
            }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 800, color: "white",
            }}>R</div>
            <span style={{
              fontSize: 15, fontWeight: 700, color: "white",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>Raja M</span>
          </motion.a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}
            className="hidden-mobile">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "none", border: "none",
                  padding: "8px 16px", borderRadius: 50,
                  fontSize: 14, fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <motion.button
              onClick={onCommandOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Command Palette (Ctrl+K)"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 12px", borderRadius: 10,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)", cursor: "pointer",
                fontSize: 12, fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <Command size={12} />
              <span className="hidden-mobile">⌘K</span>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "9px 20px", borderRadius: 50,
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                color: "white", fontSize: 14, fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: "0 0 20px rgba(79,70,229,0.4)",
              }}
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{
                background: "none", border: "none",
                color: "white", cursor: "pointer", padding: 8,
              }}
            >
              <div style={{
                width: 20, height: 2, background: "white",
                marginBottom: 5, transition: "transform 0.3s",
                transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
              }} />
              <div style={{
                width: 20, height: 2, background: "white",
                transition: "opacity 0.3s",
                opacity: mobileOpen ? 0 : 1,
              }} />
              <div style={{
                width: 20, height: 2, background: "white",
                marginTop: 5, transition: "transform 0.3s",
                transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: 8, padding: 16,
                background: "rgba(5,8,22,0.97)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: "12px 16px", borderRadius: 12,
                    background: "none", border: "none",
                    color: "rgba(255,255,255,0.8)", fontSize: 15,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
