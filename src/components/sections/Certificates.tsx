"use client";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useInView } from "framer-motion";
import { Award, Download, ExternalLink, Brain, Cpu, Monitor, Code2, Cloud, X } from "lucide-react";
import { certificates } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Brain, Cpu, Monitor, Code2, Cloud, Award,
};

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="certificates" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
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
            background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Credentials</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Certificates &{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #EF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Certificate Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {certificates.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: `linear-gradient(135deg, ${cert.color}12 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid ${cert.color}30`,
                  borderRadius: 20, padding: "28px",
                  position: "relative", overflow: "hidden",
                  cursor: "default",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${cert.color}18`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {/* Decorative corner */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 80, height: 80,
                  background: `radial-gradient(circle at top right, ${cert.color}18 0%, transparent 70%)`,
                }} />

                {/* Award badge */}
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  width: 32, height: 32, borderRadius: "50%",
                  background: `${cert.color}20`,
                  border: `1px solid ${cert.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Award size={14} color={cert.color} />
                </div>

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={24} color={cert.color} />
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, lineHeight: 1.3, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: 13, color: cert.color, fontWeight: 600, marginBottom: 4 }}>{cert.issuer}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 20, fontFamily: "'JetBrains Mono', monospace" }}>
                  {cert.date}
                </p>

                {/* Actions */}
                <div style={{ display: "flex", gap: 8 }}>
                  <motion.button
                    onClick={() => setSelectedCert(cert)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      padding: "9px 16px", borderRadius: 50,
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}35`,
                      color: cert.color, fontSize: 12, fontWeight: 600,
                      cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    <ExternalLink size={12} /> View
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      padding: "9px 16px", borderRadius: 50,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 600,
                      cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    <Download size={12} /> Save
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && mounted && createPortal(
        <div 
          onClick={() => setSelectedCert(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 999999,
            background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, overflow: "hidden"
          }}
        >
          {/* Overlay Close Button */}
          <button
            onClick={() => setSelectedCert(null)}
            style={{
              position: "absolute", top: 24, right: 24,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
              width: 48, height: 48, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", zIndex: 9999999,
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          >
            <X size={24} />
          </button>

          {/* Inject Fonts for Certificate */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cinzel:wght@400;700;900&family=Great+Vibes&family=Montserrat:wght@400;500;600&display=swap');
            
            .cert-bg {
              container-type: inline-size;
              background-color: #f9f9f9;
              background-image: 
                linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5), 
                linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5);
              background-size: 2cqi 2cqi;
              background-position: 0 0, 1cqi 1cqi;
            }
            .cert-border {
              position: absolute;
              inset: 1.5cqi;
              border: 0.2cqi solid #b79b5c;
              padding: 0.6cqi;
            }
            .cert-inner-border {
              position: absolute;
              inset: 0;
              border: 0.1cqi solid #b79b5c;
              box-shadow: inset 0 0 0 0.4cqi #fff, inset 0 0 0 0.5cqi #b79b5c;
              padding: 4cqi;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: rgba(255, 255, 255, 0.95);
            }
            .cert-watermark {
              position: absolute;
              top: 50%; left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.03;
              color: #000;
              pointer-events: none;
              width: 50cqi; height: 50cqi;
              display: flex; align-items: center; justify-content: center;
            }
          `}</style>
          
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: "relative",
              width: "min(90vw, calc(85vh * 1.414), 1000px)",
              aspectRatio: "1.414 / 1",
              background: "#fff",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 10px #fff, 0 0 0 11px #ccc",
              overflow: "hidden",
            }}
            className="cert-bg"
          >
            {/* Certificate Border Design */}
            <div className="cert-border">
              <div className="cert-inner-border">
                
                <div className="cert-watermark">
                  <Award size="100%" />
                </div>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "2.5cqi", zIndex: 10 }}>
                  <h1 style={{ 
                    fontFamily: "'Cinzel', serif", 
                    fontSize: "4.8cqi", color: "#1a1a1a", margin: 0,
                    textTransform: "uppercase", letterSpacing: "0.6cqi",
                    fontWeight: 900
                  }}>
                    Certificate of Achievement
                  </h1>
                  <div style={{ height: "0.2cqi", background: "linear-gradient(90deg, transparent, #b79b5c, transparent)", margin: "1.5cqi 0", width: "100%" }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6cqi", color: "#666", letterSpacing: "0.2cqi", textTransform: "uppercase" }}>
                    Officially Recognized & Verified
                  </p>
                </div>

                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.8cqi", color: "#444", marginBottom: "1.5cqi", zIndex: 10 }}>
                  This acknowledges that
                </p>

                {/* Name */}
                <h2 style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "7.2cqi", color: selectedCert.color,
                  margin: "1cqi 0 2cqi 0",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  zIndex: 10
                }}>
                  RAJA M
                </h2>

                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6cqi", color: "#444", marginBottom: "2cqi", maxWidth: "60cqi", textAlign: "center", lineHeight: 1.6, zIndex: 10 }}>
                  has successfully met the academic requirements and completed the rigorous curriculum for the certification of
                </p>

                {/* Course Title */}
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "2.6cqi", color: "#1a1a1a", margin: "0 0 4cqi 0",
                  fontWeight: 700, textAlign: "center", maxWidth: "70cqi",
                  zIndex: 10
                }}>
                  {selectedCert.title}
                </h3>

                {/* Footer / Signatures */}
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%",
                  padding: "0 4cqi", marginTop: "auto", zIndex: 10
                }}>
                  {/* Date & Signature 1 */}
                  <div style={{ textAlign: "center", width: "22cqi" }}>
                    <div style={{ marginBottom: "0.5cqi" }}>
                      <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: "3.8cqi", color: "#2c3e50", transform: "rotate(-3deg)", display: "inline-block", position: "relative", top: "1cqi" }}>
                        {selectedCert.date}
                      </span>
                    </div>
                    <div style={{ borderTop: "1px solid #7f8c8d", paddingTop: "0.8cqi" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2cqi", color: "#7f8c8d", textTransform: "uppercase", letterSpacing: 1 }}>Date of Issuance</span>
                    </div>
                  </div>
                  
                  {/* Seal */}
                  <div style={{
                    width: "14cqi", height: "14cqi", borderRadius: "50%",
                    background: "linear-gradient(135deg, #d4af37, #f3e5ab, #d4af37, #8a6327)",
                    boxShadow: "0 1cqi 2cqi rgba(0,0,0,0.2), inset 0 0 1.5cqi rgba(0,0,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative",
                  }}>
                    <div style={{
                      width: "12cqi", height: "12cqi", borderRadius: "50%",
                      border: "0.2cqi dashed rgba(255,255,255,0.5)",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    }}>
                       <div style={{width: "4cqi", height: "4cqi", opacity: 0.9, marginBottom: "0.5cqi", display: "flex", alignItems: "center", justifyContent: "center"}}>
                         <Award size="100%" color="white" />
                       </div>
                       <span style={{ fontFamily: "'Cinzel', serif", fontSize: "1cqi", color: "white", textAlign: "center", letterSpacing: 1 }}>
                         OFFICIAL<br/>SEAL
                       </span>
                    </div>
                  </div>

                  {/* Issuer Signature */}
                  <div style={{ textAlign: "center", width: "22cqi" }}>
                    <div style={{ marginBottom: "0.5cqi" }}>
                       <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: "3.8cqi", color: "#000080", transform: "rotate(-5deg)", display: "inline-block", position: "relative", top: "1cqi" }}>
                        {selectedCert.issuer.split(' ')[0]} Sign
                      </span>
                    </div>
                    <div style={{ borderTop: "1px solid #7f8c8d", paddingTop: "0.8cqi" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3cqi", color: "#1a1a1a", fontWeight: 600, display: "block", marginBottom: "0.2cqi" }}>
                        {selectedCert.issuer}
                      </span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1cqi", color: "#7f8c8d", textTransform: "uppercase", letterSpacing: 1 }}>Authorized Signatory</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
}
