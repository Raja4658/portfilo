"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Code2, Briefcase, Clock, Award, Mail, FileText, X, Command } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

const commands = [
  { id: "home", label: "Go to Home", icon: Home, section: "hero", shortcut: "H" },
  { id: "about", label: "About Raja", icon: User, section: "about", shortcut: "A" },
  { id: "skills", label: "Skills & Tech Stack", icon: Code2, section: "skills", shortcut: "S" },
  { id: "projects", label: "View Projects", icon: Briefcase, section: "projects", shortcut: "P" },
  { id: "timeline", label: "Career Timeline", icon: Clock, section: "timeline", shortcut: "T" },
  { id: "certs", label: "Certificates", icon: Award, section: "certificates", shortcut: "C" },
  { id: "github", label: "GitHub Stats", icon: GithubIcon, section: "github", shortcut: "G" },
  { id: "resume", label: "View Resume", icon: FileText, section: "resume", shortcut: "R" },
  { id: "contact", label: "Contact Me", icon: Mail, section: "contact", shortcut: "M" },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
      if (e.key === "Enter" && filtered[selected]) {
        execute(filtered[selected]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, selected, filtered]);

  const execute = (cmd: typeof commands[0]) => {
    const el = document.getElementById(cmd.section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(5,8,22,0.85)",
            backdropFilter: "blur(10px)",
            zIndex: 99995,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "18vh",
            padding: "18vh 24px 0",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%", maxWidth: 580,
              background: "rgba(8,12,28,0.98)",
              border: "1px solid rgba(79,70,229,0.4)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 80px rgba(79,70,229,0.15)",
            }}
          >
            {/* Search input */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <Search size={18} color="rgba(255,255,255,0.4)" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => { setQuery(e.target.value); setSelected(0); }}
                placeholder="Search sections, actions..."
                style={{
                  flex: 1, background: "none", border: "none", outline: "none",
                  color: "white", fontSize: 16,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              />
              <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)" }}>
                <X size={18} />
              </button>
            </div>

            {/* Commands list */}
            <div style={{ padding: "8px", maxHeight: 360, overflowY: "auto" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "24px", textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
                  No results found
                </div>
              ) : (
                filtered.map((cmd, i) => (
                  <motion.button
                    key={cmd.id}
                    onClick={() => execute(cmd)}
                    whileHover={{ scale: 1.01 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      width: "100%", padding: "12px 14px",
                      background: i === selected ? "rgba(79,70,229,0.15)" : "transparent",
                      border: i === selected ? "1px solid rgba(79,70,229,0.3)" : "1px solid transparent",
                      borderRadius: 12,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      marginBottom: 2,
                    }}
                    onMouseEnter={() => setSelected(i)}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 8,
                      background: i === selected ? "rgba(79,70,229,0.2)" : "rgba(255,255,255,0.05)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <cmd.icon size={16} color={i === selected ? "#4F46E5" : "rgba(255,255,255,0.5)"} />
                    </div>
                    <span style={{
                      flex: 1, textAlign: "left", fontSize: 14, fontWeight: 500,
                      color: i === selected ? "white" : "rgba(255,255,255,0.7)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}>
                      {cmd.label}
                    </span>
                    <kbd style={{
                      fontSize: 11, padding: "3px 8px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 6, color: "rgba(255,255,255,0.3)",
                      fontFamily: "monospace",
                    }}>
                      {cmd.shortcut}
                    </kbd>
                  </motion.button>
                ))
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: "10px 20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex", gap: 16,
              fontSize: 12, color: "rgba(255,255,255,0.3)",
            }}>
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
