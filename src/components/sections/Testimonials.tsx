"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
            background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#A855F7", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Social Proof</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            What People{" "}
            <span style={{ background: "linear-gradient(135deg, #A855F7, #4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Are Saying
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                style={{
                  padding: "44px",
                  background: "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(79,70,229,0.08) 100%)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  borderRadius: 28,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background glow */}
                <div style={{
                  position: "absolute", top: -50, right: -50,
                  width: 200, height: 200, borderRadius: "50%",
                  background: `radial-gradient(circle, ${testimonials[active].color}15 0%, transparent 70%)`,
                }} />

                {/* Quote icon */}
                <Quote size={48} color="rgba(168,85,247,0.15)" style={{ marginBottom: 24 }} />

                {/* Quote text */}
                <p style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: 36,
                  fontFamily: "'Inter', sans-serif",
                  position: "relative",
                }}>
                  "{testimonials[active].quote}"
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}80)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, color: "white",
                    fontFamily: "'Space Grotesk', sans-serif",
                    flexShrink: 0,
                  }}>
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {testimonials[active].name}
                    </div>
                    <div style={{ fontSize: 13, color: testimonials[active].color, fontWeight: 600 }}>
                      {testimonials[active].role}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                      {testimonials[active].institution}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 28 }}>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={prev}
                style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <ChevronLeft size={18} />
              </motion.button>

              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8, borderRadius: 4,
                    background: i === active ? "#A855F7" : "rgba(255,255,255,0.2)",
                    border: "none", cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: i === active ? "0 0 12px rgba(168,85,247,0.6)" : "none",
                  }}
                />
              ))}

              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={next}
                style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
