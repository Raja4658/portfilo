"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let animFrame: number;
    let fx = 0, fy = 0;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const cursor = el ? window.getComputedStyle(el).cursor : "default";
      setIsPointer(cursor === "pointer");
    };

    const animate = () => {
      setFollower(prev => {
        fx += (prev.x - fx) * 0.12;
        fy += (prev.y - fy) * 0.12;
        return prev;
      });
      animFrame = requestAnimationFrame(animate);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 6, y: pos.y - 6, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        style={{
          position: "fixed", top: 0, left: 0,
          width: isPointer ? 8 : 12,
          height: isPointer ? 8 : 12,
          background: "white",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        style={{
          position: "fixed", top: 0, left: 0,
          width: isPointer ? 50 : 40,
          height: isPointer ? 50 : 40,
          border: `1px solid rgba(79, 70, 229, ${isPointer ? 0.8 : 0.5})`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          boxShadow: isPointer ? "0 0 20px rgba(79,70,229,0.3)" : "none",
        }}
      />
    </>
  );
}
