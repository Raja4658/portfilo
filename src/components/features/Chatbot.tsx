"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { aiSystemPrompt } from "@/lib/data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickQuestions = [
  "Who is Raja?",
  "What are his skills?",
  "Tell me about his projects",
  "How to contact Raja?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm Raja's AI assistant. Ask me anything about his skills, projects, experience, or how to hire him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply || "I couldn't process that. Please try again!" }]);
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Raja is an AI Engineer & Full Stack Developer from Coimbatore, India. He builds intelligent software with Next.js, React, Python, Firebase, and Gemini AI. Currently studying B.Tech AI & DS at Suguna College of Engineering. Contact: rajam4658m@gmail.com",
      }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: "fixed",
              bottom: 100, right: 24,
              width: 380, maxHeight: 560,
              zIndex: 9989,
              display: "flex", flexDirection: "column",
              background: "rgba(8,12,28,0.98)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(79,70,229,0.35)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(79,70,229,0.15)",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex", alignItems: "center", gap: 12,
              background: "linear-gradient(135deg, rgba(79,70,229,0.15), rgba(0,229,255,0.05))",
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12,
                background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Sparkles size={18} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Raja's AI Assistant
                </div>
                <div style={{ fontSize: 11, color: "rgba(0,229,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                  Online · Powered by Gemini
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4 }}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                    gap: 8, alignItems: "flex-start",
                  }}
                >
                  {msg.role === "assistant" && (
                    <div style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Bot size={14} color="white" />
                    </div>
                  )}
                  <div style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background: msg.role === "user"
                      ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                      : "rgba(255,255,255,0.06)",
                    border: msg.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                    fontSize: 13, lineHeight: 1.5,
                    color: "white",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: "linear-gradient(135deg, #4F46E5, #00E5FF)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Bot size={14} color="white" />
                  </div>
                  <div style={{
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px 18px 18px 4px",
                    display: "flex", gap: 4, alignItems: "center",
                  }}>
                    {[0, 1, 2].map(d => (
                      <motion.div key={d}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                        style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F46E5" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 1 && (
              <div style={{ padding: "0 16px 8px", display: "flex", flexWrap: "wrap", gap: 6 }}>
                {quickQuestions.map(q => (
                  <button key={q} onClick={() => send(q)} style={{
                    padding: "6px 12px", borderRadius: 20, fontSize: 12,
                    background: "rgba(79,70,229,0.1)",
                    border: "1px solid rgba(79,70,229,0.3)",
                    color: "rgba(255,255,255,0.7)", cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "all 0.2s",
                  }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex", gap: 8,
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Ask about Raja..."
                style={{
                  flex: 1, background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12, padding: "10px 14px",
                  color: "white", fontSize: 13,
                  fontFamily: "'Space Grotesk', sans-serif",
                  outline: "none",
                }}
              />
              <motion.button
                onClick={() => send()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading || !input.trim()}
                style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: input.trim() && !loading ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "rgba(255,255,255,0.05)",
                  border: "none", cursor: input.trim() && !loading ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                <Send size={16} color={input.trim() && !loading ? "white" : "rgba(255,255,255,0.3)"} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ boxShadow: open ? "0 0 30px rgba(79,70,229,0.6)" : ["0 0 20px rgba(79,70,229,0.3)", "0 0 40px rgba(79,70,229,0.6)", "0 0 20px rgba(79,70,229,0.3)"] }}
        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        style={{
          position: "fixed", bottom: 28, right: 28,
          width: 56, height: 56, borderRadius: 18,
          background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 9990, color: "white",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Sparkles size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
