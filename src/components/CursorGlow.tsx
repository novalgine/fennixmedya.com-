"use client";
import { useEffect, useRef, useCallback } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  const handleMove = useCallback((e: MouseEvent) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [handleMove]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-50 w-[300px] h-[300px] rounded-full opacity-15 mix-blend-screen will-change-transform hidden md:block"
      style={{
        background: "radial-gradient(circle, hsl(38 50% 70% / 0.4) 0%, transparent 70%)",
        transform: "translate(-150px, -150px)",
        contain: "layout style paint",
      }}
    />
  );
};

export default CursorGlow;
