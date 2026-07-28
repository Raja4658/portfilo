"use client";
import { motion } from "framer-motion";
import { Link2, Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{
      padding: "60px 24px 32px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      position: "relative",
    }}>
      {/* Top gradient line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, #4F46E5, #00E5FF, transparent)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: "white",
              }}>R</div>
              <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>Raja M</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 280, lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
              AI Engineer · Full Stack Developer · Building intelligent software that solves real problems.
            </p>
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { icon: GithubIcon, href: personalInfo.github },
              { icon: Link2, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 18px", borderRadius: 50,
              background: "rgba(79,70,229,0.1)",
              border: "1px solid rgba(79,70,229,0.3)",
              color: "#4F46E5", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <ArrowUp size={14} /> Back to Top
          </motion.button>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}>
            © 2026 Raja M. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 6, fontFamily: "'Inter', sans-serif" }}>
            Built with <Heart size={13} color="#EF4444" /> using Next.js · Framer Motion · TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
