"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const letters = "RAJA M".split("");

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{ zIndex: 100000, position: "fixed", inset: 0 }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div style={{ position: "relative", textAlign: "center" }}>
        {/* Animated name */}
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                fontSize: "clamp(40px, 8vw, 72px)",
                fontWeight: 800,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-2px",
                background: letter === " " ? "none" : "linear-gradient(135deg, #ffffff 0%, #4F46E5 50%, #00E5FF 100%)",
                WebkitBackgroundClip: letter === " " ? "none" : "text",
                WebkitTextFillColor: letter === " " ? "transparent" : "transparent",
                display: "inline-block",
                minWidth: letter === " " ? 20 : "auto",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Role tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            fontSize: 14, fontWeight: 600, letterSpacing: 4,
            color: "rgba(255,255,255,0.5)", textTransform: "uppercase",
            marginBottom: 48, fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          AI Engineer · Full Stack Developer
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ width: 240, margin: "0 auto" }}
        >
          <div style={{
            height: 1, background: "rgba(255,255,255,0.08)",
            borderRadius: 1, overflow: "hidden", marginBottom: 12,
          }}>
            <motion.div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #4F46E5, #00E5FF)",
                borderRadius: 1,
                width: `${Math.min(progress, 100)}%`,
                transition: "width 0.15s ease",
              }}
            />
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
