"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/features/CustomCursor";
import CommandPalette from "@/components/features/CommandPalette";
import Chatbot from "@/components/features/Chatbot";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import TechOrbit from "@/components/sections/TechOrbit";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Certificates from "@/components/sections/Certificates";
import GitHubSection from "@/components/sections/GitHubSection";
import Blog from "@/components/sections/Blog";
import Testimonials from "@/components/sections/Testimonials";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
      if (e.key === "Escape") setCommandOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <>
          {/* Aurora Background */}
          <div className="aurora-bg">
            <div className="aurora-1" />
            <div className="aurora-2" />
            <div className="aurora-3" />
          </div>

          {/* Scroll Progress */}
          <motion.div
            className="scroll-progress"
            style={{ scaleX, width: "100%" }}
          />

          <CustomCursor />
          <Navbar onCommandOpen={() => setCommandOpen(true)} />

          <main style={{ position: "relative", zIndex: 1 }}>
            <Hero />
            <Stats />
            <About />
            <Skills />
            <TechOrbit />
            <Projects />
            <Timeline />
            <Certificates />
            <GitHubSection />
            <Blog />
            <Testimonials />
            <Resume />
            <Contact />
          </main>

          <Footer />

          <CommandPalette
            isOpen={commandOpen}
            onClose={() => setCommandOpen(false)}
          />
          <Chatbot />

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "rgba(10,15,30,0.95)",
                color: "#fff",
                border: "1px solid rgba(79,70,229,0.3)",
                borderRadius: "12px",
                backdropFilter: "blur(20px)",
              },
            }}
          />
        </>
      )}
    </>
  );
}
