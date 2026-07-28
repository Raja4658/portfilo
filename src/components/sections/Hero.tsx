"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Link2, Mail, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const ref = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 60px",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
      }} />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", width: 300, height: 300,
          background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)",
          top: "20%", left: "10%", borderRadius: "50%", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", width: 250, height: 250,
          background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          bottom: "20%", right: "10%", borderRadius: "50%", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 50, marginBottom: 32,
            background: "rgba(79,70,229,0.1)",
            border: "1px solid rgba(79,70,229,0.35)",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "inline-block", boxShadow: "0 0 10px #22C55E" }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
            Available for Work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            fontSize: "clamp(52px, 10vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 0.95,
            marginBottom: 8,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span style={{
            background: "linear-gradient(135deg, #ffffff 0%, #c7d2fe 50%, #e0f2fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontSize: "clamp(20px, 4vw, 36px)", fontWeight: 600, marginBottom: 24, minHeight: 50, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)" }}>I&apos;m a </span>
          <TypeAnimation
            sequence={[
              "AI Engineer", 2000,
              "Full Stack Developer", 2000,
              "AI Product Builder", 2000,
              "Problem Solver", 2000,
              "Innovator", 2000,
              "Builder", 2000,
              "Entrepreneur", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 48px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Building intelligent software powered by <span style={{ color: "#4F46E5", fontWeight: 600 }}>Artificial Intelligence</span>,{" "}
          <span style={{ color: "#00E5FF", fontWeight: 600 }}>Full Stack Development</span> and{" "}
          <span style={{ color: "#22C55E", fontWeight: 600 }}>Cloud Technologies</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}
        >
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(79,70,229,0.6)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 50,
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              color: "white", fontSize: 15, fontWeight: 600,
              textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 0 30px rgba(79,70,229,0.4)",
            }}
          >
            <Download size={17} />
            Download Resume
          </motion.a>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, borderColor: "rgba(0,229,255,0.6)", color: "#00E5FF" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 50,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontSize: 15, fontWeight: 600,
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.3s",
            }}
          >
            View Projects
            <ArrowRight size={17} />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, background: "rgba(0,229,255,0.1)", borderColor: "rgba(0,229,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 50,
              background: "transparent",
              border: "1px solid rgba(0,229,255,0.3)",
              color: "#00E5FF", fontSize: 15, fontWeight: 600,
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.3s",
            }}
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 80 }}
        >
          {[
            { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            { icon: Link2, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              title={label}
              style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.6)", transition: "all 0.3s",
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: "rgba(255,255,255,0.3)", cursor: "pointer" }}
            onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown size={24} />
          </motion.div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "monospace" }}>
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
