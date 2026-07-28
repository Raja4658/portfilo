"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, User, Mail, MessageSquare, FileText, Link2, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/data";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        toast.success("Message sent! Raja will reply soon 🚀");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please email directly: rajam4658m@gmail.com");
    }
    setLoading(false);
  };

  const socials = [
    { icon: GithubIcon, label: "GitHub", href: personalInfo.github, color: "#ffffff" },
    { icon: Link2, label: "LinkedIn", href: personalInfo.linkedin, color: "#0A66C2" },
    { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}`, color: "#00E5FF" },
    { icon: Phone, label: "Phone", href: `tel:${personalInfo.phone}`, color: "#22C55E" },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 24px 80px", position: "relative" }}>
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
            background: "rgba(79,70,229,0.1)", border: "1px solid rgba(79,70,229,0.3)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#4F46E5", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Hire Me</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Let&apos;s Build Something{" "}
            <span style={{ background: "linear-gradient(135deg, #4F46E5, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Amazing
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, maxWidth: 500, margin: "12px auto 0", fontFamily: "'Inter', sans-serif" }}>
            I&apos;m open to AI engineering roles, full-stack projects, and product collaborations. Let&apos;s talk!
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "start" }} className="contact-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{
              padding: "36px",
              background: "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(0,229,255,0.04) 100%)",
              border: "1px solid rgba(79,70,229,0.25)",
              borderRadius: 28,
            }}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "48px 0" }}
                >
                  <CheckCircle size={64} color="#22C55E" style={{ margin: "0 auto 20px" }} />
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>Message Sent! 🚀</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>Raja will get back to you soon!</p>
                  <button onClick={() => setSent(false)} style={{
                    marginTop: 24, padding: "10px 24px", borderRadius: 50,
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                    color: "white", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      { key: "name", label: "Name", icon: User, placeholder: "Your name" },
                      { key: "email", label: "Email", icon: Mail, placeholder: "your@email.com" },
                    ].map(({ key, label, icon: Icon, placeholder }) => (
                      <div key={key}>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                          {label}
                        </label>
                        <div style={{ position: "relative" }}>
                          <Icon size={15} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                          <input
                            type={key === "email" ? "email" : "text"}
                            value={form[key as keyof typeof form]}
                            onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                            placeholder={placeholder}
                            required={key !== "subject"}
                            style={{
                              width: "100%", padding: "12px 14px 12px 40px",
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              borderRadius: 12, color: "white", fontSize: 14,
                              fontFamily: "'Space Grotesk', sans-serif", outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={e => { e.target.style.borderColor = "rgba(79,70,229,0.6)"; }}
                            onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                      Subject
                    </label>
                    <div style={{ position: "relative" }}>
                      <FileText size={15} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                      <input
                        type="text"
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        placeholder="What's this about?"
                        style={{
                          width: "100%", padding: "12px 14px 12px 40px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 12, color: "white", fontSize: 14,
                          fontFamily: "'Space Grotesk', sans-serif", outline: "none",
                        }}
                        onFocus={e => { e.target.style.borderColor = "rgba(79,70,229,0.6)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                      Message
                    </label>
                    <div style={{ position: "relative" }}>
                      <MessageSquare size={15} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: 14 }} />
                      <textarea
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={5}
                        style={{
                          width: "100%", padding: "12px 14px 12px 40px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 12, color: "white", fontSize: 14,
                          fontFamily: "'Space Grotesk', sans-serif", outline: "none",
                          resize: "vertical",
                        }}
                        onFocus={e => { e.target.style.borderColor = "rgba(79,70,229,0.6)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02, boxShadow: "0 20px 50px rgba(79,70,229,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      padding: "16px 32px", borderRadius: 50,
                      background: loading ? "rgba(79,70,229,0.4)" : "linear-gradient(135deg, #4F46E5, #7C3AED)",
                      border: "none", color: "white", fontSize: 15, fontWeight: 700,
                      cursor: loading ? "default" : "pointer",
                      fontFamily: "'Space Grotesk', sans-serif",
                      boxShadow: "0 0 30px rgba(79,70,229,0.4)",
                      marginTop: 8,
                    }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send size={17} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Info cards */}
            {[
              { icon: Mail, label: "Email", value: personalInfo.email, color: "#4F46E5", href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: "Phone", value: personalInfo.phone, color: "#22C55E", href: `tel:${personalInfo.phone}` },
              { icon: MapPin, label: "Location", value: personalInfo.location, color: "#00E5FF", href: "#" },
            ].map(({ icon: Icon, label, value, color, href }) => (
              <motion.a
                key={label} href={href}
                whileHover={{ scale: 1.02, x: 4 }}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "18px 20px", borderRadius: 16,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: `${color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={17} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 2, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontFamily: "'Space Grotesk', sans-serif" }}>{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div style={{
              padding: "20px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                Social
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    title={label}
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.7)", transition: "all 0.3s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}60`; (e.currentTarget as HTMLElement).style.color = color; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{
              padding: "20px",
              background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)",
              border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: 16,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%", background: "#22C55E", flexShrink: 0,
                boxShadow: "0 0 12px #22C55E",
                animation: "pulse 2s infinite",
              }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#22C55E", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Available for Opportunities
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                  Open to AI engineering roles & collaborations
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </section>
  );
}
