"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Monitor, Brain, Rocket, Star } from "lucide-react";
import { timeline } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Code2, Server, Monitor, Brain, Rocket, Star,
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Journey</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Career{" "}
            <span style={{ background: "linear-gradient(135deg, #22C55E, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Timeline
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
            From first line of code to AI product builder
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              left: "50%", top: 0, bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, transparent, #4F46E5 15%, #00E5FF 85%, transparent)",
              transform: "translateX(-50%)",
              transformOrigin: "top",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{
                    display: "flex",
                    justifyContent: isLeft ? "flex-end" : "flex-start",
                    paddingRight: isLeft ? "calc(50% + 28px)" : 0,
                    paddingLeft: isLeft ? 0 : "calc(50% + 28px)",
                    position: "relative",
                    marginBottom: 32,
                  }}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                    style={{
                      position: "absolute",
                      left: "50%", top: 24,
                      transform: "translateX(-50%)",
                      width: 16, height: 16, borderRadius: "50%",
                      background: item.color,
                      border: "3px solid #050816",
                      boxShadow: `0 0 20px ${item.color}80`,
                      zIndex: 1,
                    }}
                  />

                  {/* Card */}
                  <div style={{
                    width: "100%",
                    padding: "20px 22px",
                    background: item.isFuture ? `linear-gradient(135deg, ${item.color}12, ${item.color}06)` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${item.isFuture ? item.color + "40" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 16,
                    position: "relative",
                    transition: "all 0.3s",
                  }}>
                    {item.isFuture && (
                      <div style={{
                        position: "absolute", top: -1, right: -1,
                        padding: "4px 10px", borderRadius: "0 14px 0 10px",
                        background: item.color, fontSize: 10, fontWeight: 700,
                        color: "#050816", letterSpacing: 1, textTransform: "uppercase",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        Goal
                      </div>
                    )}

                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: `${item.color}18`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        {Icon && <Icon size={15} color={item.color} />}
                      </div>
                      <div>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: item.color,
                          letterSpacing: 1.5, textTransform: "uppercase",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}>
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          [style*="paddingRight: calc(50% + 28px)"] { padding-right: 0 !important; padding-left: 40px !important; }
          [style*="paddingLeft: calc(50% + 28px)"] { padding-left: 40px !important; }
          [style*="left: 50%;"][style*="transform: translateX(-50%)"] { left: 8px !important; transform: none !important; }
          [style*="background: linear-gradient(to bottom"] { left: 8px !important; }
        }
      `}</style>
    </section>
  );
}
