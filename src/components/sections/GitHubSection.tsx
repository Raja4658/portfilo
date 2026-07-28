"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/data";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
}

const langColors: Record<string, string> = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Java: "#ED8B00",
  default: "#6B7280",
};

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ stars: 0, forks: 0, repos: 0 });

  useEffect(() => {
    fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 6));
          setStats({
            stars: data.reduce((a: number, r: Repo) => a + r.stargazers_count, 0),
            forks: data.reduce((a: number, r: Repo) => a + r.forks_count, 0),
            repos: data.length,
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" ref={ref} style={{ padding: "120px 24px", position: "relative" }}>
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
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
          }}>
            <GithubIcon size={12} color="rgba(255,255,255,0.7)" />
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Open Source</span>
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            GitHub{" "}
            <span style={{ background: "linear-gradient(135deg, #ffffff, #94a3b8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Activity
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
            Live data from{" "}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "#4F46E5", textDecoration: "none" }}>
              @{personalInfo.githubUsername}
            </a>
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}
        >
          {[
            { label: "Repositories", value: "20+" },
            { label: "Total Stars", value: `${stats.stars}+` },
            { label: "Contributions", value: "500+" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              textAlign: "center", padding: "24px 16px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
            }}>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>{value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Repos grid */}
        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{
                height: 140, borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                animation: "pulse 2s ease-in-out infinite",
              }} />
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(79,70,229,0.4)" }}
                style={{
                  display: "block", padding: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <GithubIcon size={14} color="rgba(255,255,255,0.4)" />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#4F46E5", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={12} color="rgba(255,255,255,0.3)" />
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 16, fontFamily: "'Inter', sans-serif", minHeight: 40 }}>
                  {repo.description || "No description"}
                </p>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  {repo.language && (
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: "50%",
                        background: langColors[repo.language] || langColors.default,
                        display: "inline-block",
                      }} />
                      {repo.language}
                    </span>
                  )}
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                    <Star size={11} /> {repo.stargazers_count}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                    <GitFork size={11} /> {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          /* Fallback placeholder repos */
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {["ai-college-system", "ai-business-platform", "healthworker-bridge", "streamvault-ott", "ml-projects", "portfolio"].map((name, i) => (
              <motion.a
                key={name}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(79,70,229,0.4)" }}
                style={{
                  display: "block", padding: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <GithubIcon size={14} color="rgba(255,255,255,0.4)" />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#4F46E5", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {name}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ padding: "3px 8px", borderRadius: 4, background: "rgba(79,70,229,0.1)", fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>TypeScript</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 12, color: "rgba(255,255,255,0.4)" }}><Star size={10} /> 0</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 50,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600,
              textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.3s",
            }}
          >
            <GithubIcon size={16} /> View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
