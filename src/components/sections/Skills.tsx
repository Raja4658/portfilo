"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, Monitor, Server, Brain, Cloud } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Code2, Monitor, Server, Brain, Cloud,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 50, marginBottom: 16,
            background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#00E5FF", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Tech Stack</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Skills &{" "}
            <span style={{ background: "linear-gradient(135deg, #00E5FF, #4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Technologies
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, maxWidth: 520, lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
            A curated stack for building intelligent, scalable, and production-ready AI applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {skills.map((category, i) => {
            const Icon = iconMap[category.icon];
            const isActive = activeCategory === category.category;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveCategory(isActive ? null : category.category)}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${category.color}18 0%, ${category.color}08 100%)`
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? category.color + "50" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 20, padding: "28px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isActive ? `0 20px 60px ${category.color}18` : "none",
                  position: "relative", overflow: "hidden",
                }}
              >
                {isActive && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(ellipse at top left, ${category.color}10 0%, transparent 60%)`,
                    pointerEvents: "none",
                  }} />
                )}

                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${category.color}18`,
                    border: `1px solid ${category.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    {Icon && <Icon size={20} color={category.color} />}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {category.category}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                      {category.items.length} technologies
                    </div>
                  </div>
                </div>

                {/* Skill chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {category.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      style={{
                        display: "inline-flex", alignItems: "center",
                        padding: "6px 14px", borderRadius: 50,
                        background: `${category.color}12`,
                        border: `1px solid ${category.color}25`,
                        fontSize: 13, fontWeight: 500,
                        color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.65)",
                        cursor: "default",
                        transition: "all 0.2s",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All skills marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 48, overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
        >
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: 12, width: "max-content" }}
          >
            {[...skills.flatMap(s => s.items), ...skills.flatMap(s => s.items)].map((skill, i) => (
              <span key={i} style={{
                padding: "8px 18px", borderRadius: 50,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: 13, color: "rgba(255,255,255,0.4)",
                whiteSpace: "nowrap",
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
