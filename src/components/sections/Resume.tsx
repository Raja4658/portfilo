"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const highlights = [
    "AI Engineer & Full Stack Developer",
    "B.Tech AI & Data Science (2023–2027)",
    "4+ Production AI Projects",
    "Next.js · React · Python · Firebase",
    "Machine Learning · OpenAI · Gemini",
    "500+ GitHub Commits",
  ];

  return (
    <section id="resume" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 50, marginBottom: 16,
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Resume</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            My{" "}
            <span style={{ background: "linear-gradient(135deg, #22C55E, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Resume
            </span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="resume-grid">
          {/* Preview card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(0,229,255,0.05) 100%)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            {/* Resume preview */}
            <div style={{
              height: 400, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg, rgba(5,8,22,0.8) 0%, rgba(10,15,30,0.8) 100%)",
              position: "relative",
            }}>
              {/* Paper mockup */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 220, height: 300,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 12,
                  padding: "20px 16px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(34,197,94,0.2)",
                  position: "relative",
                }}
              >
                {/* Resume content lines */}
                <div style={{ width: 80, height: 80, borderRadius: 12, background: "linear-gradient(135deg, #4F46E5, #00E5FF)", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "white" }}>R</div>
                <div style={{ height: 8, borderRadius: 4, background: "#1e293b", marginBottom: 6 }} />
                <div style={{ height: 6, borderRadius: 4, background: "#94a3b8", width: "80%", marginBottom: 16 }} />
                {[...Array(8)].map((_, i) => (
                  <div key={i} style={{ height: 5, borderRadius: 3, background: i % 3 === 0 ? "#e2e8f0" : "#f1f5f9", width: `${60 + Math.random() * 35}%`, marginBottom: 6 }} />
                ))}
              </motion.div>
            </div>

            {/* Download */}
            <div style={{ padding: "24px 28px", display: "flex", gap: 12 }}>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "13px 20px", borderRadius: 50,
                  background: "linear-gradient(135deg, #22C55E, #16a34a)",
                  color: "white", fontSize: 14, fontWeight: 700,
                  textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: "0 0 30px rgba(34,197,94,0.4)",
                }}
              >
                <Download size={16} /> Download PDF
              </motion.a>
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* ATS Score */}
            <div style={{
              padding: "24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                ATS Score
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ position: "relative", width: 80, height: 80 }}>
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#22C55E" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 34 * 0.92} ${2 * Math.PI * 34}`}
                      strokeLinecap="round"
                      transform="rotate(-90 40 40)"
                    />
                  </svg>
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, color: "#22C55E",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    92
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#22C55E", fontFamily: "'Space Grotesk', sans-serif" }}>Excellent</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>Optimized for applicant tracking systems</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div style={{
              padding: "24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                Highlights
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <CheckCircle size={15} color="#22C55E" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontFamily: "'Space Grotesk', sans-serif" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .resume-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
