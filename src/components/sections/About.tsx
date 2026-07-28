"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, GraduationCap, Target, Link2, Calendar, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { personalInfo, education } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] },
  });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <motion.div {...fadeUp(0)} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 50, marginBottom: 16,
            background: "rgba(79,70,229,0.1)", border: "1px solid rgba(79,70,229,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#4F46E5", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>About Me</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Building the future,{" "}
            <span style={{ background: "linear-gradient(135deg, #4F46E5, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              one line at a time
            </span>
          </motion.h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, alignItems: "start" }} className="about-grid">
          {/* Left — Profile Card */}
          <motion.div {...fadeUp(0.2)}>
            <motion.div
              whileHover={{ rotateY: 3, rotateX: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{
                background: "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(0,229,255,0.06) 100%)",
                border: "1px solid rgba(79,70,229,0.25)",
                borderRadius: 24, padding: "36px 28px",
                transformStyle: "preserve-3d",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Background pattern */}
              <div style={{
                position: "absolute", top: 0, right: 0, width: 200, height: 200,
                background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
              }} />

              {/* Avatar */}
              <div style={{ marginBottom: 24, position: "relative" }}>
                <motion.div
                  animate={{ boxShadow: ["0 0 20px rgba(79,70,229,0.4)", "0 0 50px rgba(79,70,229,0.7)", "0 0 20px rgba(79,70,229,0.4)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    width: 90, height: 90, borderRadius: 24,
                    background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 36, fontWeight: 800, color: "white",
                    fontFamily: "'Space Grotesk', sans-serif",
                    border: "3px solid rgba(79,70,229,0.4)",
                  }}
                >
                  R
                </motion.div>
                <div style={{
                  position: "absolute", bottom: 0, left: 70,
                  width: 22, height: 22, borderRadius: "50%",
                  background: "#22C55E", border: "3px solid #050816",
                  boxShadow: "0 0 12px #22C55E",
                }} />
              </div>

              <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{personalInfo.name}</h3>
                <p style={{ fontSize: 14, color: "#00E5FF", fontWeight: 600, marginBottom: 20 }}>
                  AI Engineer · Full Stack Developer
                </p>

                {[
                  { icon: MapPin, text: personalInfo.location },
                  { icon: Mail, text: personalInfo.email },
                  { icon: Phone, text: personalInfo.phone },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <Icon size={14} color="rgba(255,255,255,0.4)" />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{text}</span>
                  </div>
                ))}

                <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                  {[
                    { icon: GithubIcon, href: personalInfo.github },
                    { icon: Link2, href: personalInfo.linkedin },
                    { icon: Mail, href: `mailto:${personalInfo.email}` },
                  ].map(({ icon: Icon, href }) => (
                    <motion.a
                      key={href} href={href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      <Icon size={15} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Bio + Education + Goal */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Bio */}
            <motion.div {...fadeUp(0.3)} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: "28px",
            }}>
              <p style={{
                fontSize: 16, lineHeight: 1.85,
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'Inter', sans-serif",
              }}>
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Education */}
            <motion.div {...fadeUp(0.4)} style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(0,229,255,0.04) 100%)",
              border: "1px solid rgba(79,70,229,0.2)",
              borderRadius: 20, padding: "28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(79,70,229,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <GraduationCap size={18} color="#4F46E5" />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "'Space Grotesk', sans-serif" }}>Education</span>
              </div>
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>{edu.institution}</div>
                  <div style={{ fontSize: 14, color: "#00E5FF", fontWeight: 600, marginBottom: 8 }}>{edu.degree}</div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                      <Calendar size={11} /> {edu.period}
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Career Goal */}
            <motion.div {...fadeUp(0.5)} style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(34,197,94,0.04) 100%)",
              border: "1px solid rgba(0,229,255,0.2)",
              borderRadius: 20, padding: "28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(0,229,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Target size={18} color="#00E5FF" />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "'Space Grotesk', sans-serif" }}>Career Goal</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                Become a top-tier <span style={{ color: "#00E5FF", fontWeight: 600 }}>AI Engineer</span> at a world-class company — building intelligent products that reach millions of users and solve real-world problems at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
