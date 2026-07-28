"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { stats } from "@/lib/data";
import { Rocket, Cpu, GitCommit, FolderGit2, Award } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Rocket, Cpu, GitCommit, FolderGit2, Award,
};

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" ref={ref} style={{ padding: "80px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span style={{
            fontSize: 12, fontWeight: 600, letterSpacing: 3,
            color: "rgba(255,255,255,0.35)", textTransform: "uppercase",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            By the numbers
          </span>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16,
        }}>
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -6, scale: 1.03 }}
                style={{
                  textAlign: "center", padding: "32px 20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  cursor: "default",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,70,229,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(79,70,229,0.1)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Background glow */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(ellipse at top, rgba(79,70,229,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />

                {Icon && (
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "rgba(79,70,229,0.12)",
                    border: "1px solid rgba(79,70,229,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon size={20} color="#4F46E5" />
                  </div>
                )}

                <div style={{
                  fontSize: 44, fontWeight: 800, lineHeight: 1,
                  marginBottom: 8,
                  background: "linear-gradient(135deg, #ffffff, #00E5FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} delay={i * 0.1} />
                  ) : "0"}
                  {stat.suffix}
                </div>
                <div style={{
                  fontSize: 13, color: "rgba(255,255,255,0.5)",
                  fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
