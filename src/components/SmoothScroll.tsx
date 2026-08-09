"use client";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

/** ReactLenis ağacının içinden ScrollTrigger'ı Lenis scroll'una bağlar */
function ScrollTriggerBridge() {
  useLenis(() => ScrollTrigger.update());
  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // Tek saat: GSAP ticker'ı hem tween'leri hem Lenis'i sürer
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.09,
        anchors: true,
        stopInertiaOnNavigate: true,
        prevent: (node) => !!node.closest("[data-lenis-prevent]"),
      }}
    >
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
