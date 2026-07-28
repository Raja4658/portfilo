"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techOrbit } from "@/lib/data";

export default function TechOrbit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const innerItems = techOrbit.slice(0, 6);
  const outerItems = techOrbit.slice(6);

  return (
    <section id="orbit" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 50, marginBottom: 16,
            background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#A855F7", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Orbit</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Tech{" "}
            <span style={{ background: "linear-gradient(135deg, #A855F7, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Universe
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
            The technologies orbiting my development workflow
          </p>
        </motion.div>

        {/* Orbit System */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: "relative", width: 500, height: 500 }}
          >
            {/* Outer orbit ring */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: "1px solid rgba(79,70,229,0.15)",
            }} />

            {/* Inner orbit ring */}
            <div style={{
              position: "absolute", inset: 80, borderRadius: "50%",
              border: "1px solid rgba(0,229,255,0.12)",
            }} />

            {/* Center */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 90, height: 90, borderRadius: "50%",
                background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 30, fontWeight: 800, color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: "0 0 40px rgba(79,70,229,0.5), 0 0 80px rgba(79,70,229,0.2)",
                zIndex: 2,
              }}
            >
              R
            </motion.div>

            {/* Inner orbit items — spin clockwise */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: 0 }}
            >
              {innerItems.map((tech, i) => {
                const angle = (i / innerItems.length) * 360;
                const radius = 160;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <motion.div
                    key={tech.name}
                    style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: `translate(${x - 26}px, ${y - 26}px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                      title={tech.name}
                      style={{
                        width: 52, height: 52, borderRadius: 14,
                        background: "rgba(10,15,30,0.95)",
                        border: `1px solid ${tech.color}40`,
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        fontSize: 22, cursor: "default",
                        boxShadow: `0 0 20px ${tech.color}20`,
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s",
                      }}
                    >
                      <span>{tech.emoji}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Outer orbit items — spin counter-clockwise */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: 0 }}
            >
              {outerItems.map((tech, i) => {
                const angle = (i / outerItems.length) * 360 + 30;
                const radius = 230;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <motion.div
                    key={tech.name}
                    style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: `translate(${x - 26}px, ${y - 26}px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.3 }}
                      title={tech.name}
                      style={{
                        width: 52, height: 52, borderRadius: 14,
                        background: "rgba(10,15,30,0.95)",
                        border: `1px solid ${tech.color}35`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 22, cursor: "default",
                        boxShadow: `0 0 15px ${tech.color}15`,
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s",
                      }}
                    >
                      {tech.emoji}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Glow center */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          </motion.div>

          {/* Tech list — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: "absolute", right: 0,
              display: "flex", flexDirection: "column", gap: 8, width: 200,
            }}
            className="orbit-list"
          >
            {techOrbit.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.05 }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "8px 12px", borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span style={{ fontSize: 16 }}>{tech.emoji}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .orbit-list { display: none !important; } }
        @media (max-width: 600px) {
          [style*="width: 500px"] { width: 320px !important; height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
