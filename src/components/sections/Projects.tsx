"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight, GraduationCap, Building2, Heart, Play } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  GraduationCap, Building2, Heart, Play,
};

const gradients = [
  "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0e7490 100%)",
  "linear-gradient(135deg, #0c4a6e 0%, #155e75 50%, #1e3a5f 100%)",
  "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0f3460 100%)",
  "linear-gradient(135deg, #451a03 0%, #78350f 50%, #7c2d12 100%)",
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            background: "rgba(79,70,229,0.1)", border: "1px solid rgba(79,70,229,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#4F46E5", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Work</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg, #4F46E5, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Projects
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, maxWidth: 520, lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
            Production-quality AI applications built from scratch — click any project to see the full case study.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
                style={{
                  background: gradients[i],
                  border: `1px solid ${project.color}30`,
                  borderRadius: 24, overflow: "hidden",
                  cursor: "pointer", position: "relative",
                  minHeight: 320,
                  transition: "box-shadow 0.4s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 40px 80px rgba(0,0,0,0.5), 0 0 60px ${project.color}20`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {/* Overlay pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />

                {/* Content */}
                <div style={{ position: "relative", padding: "32px", height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 24,
                  }}>
                    {Icon && <Icon size={24} color={project.color} />}
                  </div>

                  {/* Number */}
                  <div style={{
                    position: "absolute", top: 24, right: 28,
                    fontSize: 64, fontWeight: 900, lineHeight: 1,
                    color: "rgba(255,255,255,0.05)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    0{project.id}
                  </div>

                  <h3 style={{
                    fontSize: 20, fontWeight: 800, marginBottom: 8, lineHeight: 1.2,
                    fontFamily: "'Space Grotesk', sans-serif", color: "white",
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 13, color: project.color, fontWeight: 600, marginBottom: 16 }}>
                    {project.subtitle}
                  </p>
                  <p style={{
                    fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65,
                    flex: 1, fontFamily: "'Inter', sans-serif",
                  }}>
                    {project.description.slice(0, 120)}...
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20, marginBottom: 20 }}>
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} style={{
                        padding: "4px 10px", borderRadius: 50,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        fontSize: 11, color: "rgba(255,255,255,0.7)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span style={{
                        padding: "4px 10px", borderRadius: 50,
                        background: `${project.color}20`,
                        fontSize: 11, color: project.color,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 6,
                      padding: "8px 16px", borderRadius: 50,
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      fontSize: 13, fontWeight: 600, color: project.color,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}>
                      View Case Study <ChevronRight size={14} />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        width: 36, height: 36, borderRadius: 50,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      <GithubIcon size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(5,8,22,0.92)",
              backdropFilter: "blur(16px)",
              zIndex: 9980, display: "flex",
              alignItems: "center", justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 700,
                maxHeight: "88vh", overflowY: "auto",
                background: "rgba(8,12,28,0.99)",
                border: `1px solid ${selected.color}35`,
                borderRadius: 28,
                boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 80px ${selected.color}15`,
              }}
            >
              {/* Modal header */}
              <div style={{
                padding: "28px 28px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              }}>
                <div>
                  <div style={{ fontSize: 12, color: selected.color, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                    Case Study
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.2, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selected.title}
                  </h2>
                  <p style={{ fontSize: 14, color: selected.color, marginTop: 4, fontWeight: 600 }}>{selected.subtitle}</p>
                </div>
                <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4 }}>
                  <X size={22} />
                </button>
              </div>

              <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Description */}
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                  {selected.description}
                </p>

                {/* Problem & Solution */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "Problem", text: selected.problem, color: "#F59E0B" },
                    { label: "Solution", text: selected.solution, color: "#22C55E" },
                  ].map(({ label, text, color }) => (
                    <div key={label} style={{
                      padding: "16px", borderRadius: 14,
                      background: `${color}08`, border: `1px solid ${color}25`,
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>{label}</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{text}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>Features</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {selected.features.map(f => (
                      <span key={f} style={{
                        padding: "6px 14px", borderRadius: 50,
                        background: `${selected.color}12`,
                        border: `1px solid ${selected.color}25`,
                        fontSize: 13, color: "rgba(255,255,255,0.8)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div style={{
                  padding: "16px", borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13, color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.5 }}>Architecture</div>
                  {selected.architecture}
                </div>

                {/* Tech stack */}
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {selected.tech.map(t => (
                      <span key={t} style={{
                        padding: "6px 14px", borderRadius: 50,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        fontSize: 12, color: "rgba(255,255,255,0.7)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
                  <a href={selected.liveDemo} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "12px 24px", borderRadius: 50,
                    background: `linear-gradient(135deg, ${selected.color}, ${selected.color}99)`,
                    color: "white", fontSize: 14, fontWeight: 600,
                    textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "11px 24px", borderRadius: 50,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600,
                    textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    <GithubIcon size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
