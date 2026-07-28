"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/lib/data";

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
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
            <span style={{ fontSize: 11, fontWeight: 700, color: "#00E5FF", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Writing</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Blog &{" "}
            <span style={{ background: "linear-gradient(135deg, #00E5FF, #4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Insights
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
            Thoughts on AI, engineering, and building products
          </p>
        </motion.div>

        {/* Blog cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {blogs.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -6 }}
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                cursor: "pointer",
                position: "relative", overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${post.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${post.color}10`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${post.color}, transparent)`,
              }} />

              {/* Tags */}
              <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "3px 10px", borderRadius: 50,
                    background: `${post.color}12`,
                    border: `1px solid ${post.color}25`,
                    fontSize: 11, color: post.color, fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 style={{
                fontSize: 17, fontWeight: 700, marginBottom: 12, lineHeight: 1.35,
                fontFamily: "'Space Grotesk', sans-serif", color: "white",
              }}>
                {post.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 20, fontFamily: "'Inter', sans-serif" }}>
                {post.excerpt}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 12, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  <span>{post.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: post.color, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
