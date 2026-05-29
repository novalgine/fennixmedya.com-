"use client";
import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? window.scrollY / total : 0;
      barRef.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-[100%] z-[60] h-[2px] w-full origin-left" ref={barRef} style={{ transform: "scaleX(0)", willChange: "transform" }}>
      <div className="h-full w-full bg-gradient-gold" />
    </div>
  );
};

export default ScrollProgress;
