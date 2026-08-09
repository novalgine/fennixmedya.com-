"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Kelime kelime yükselen başlık. YALNIZCA fold-altı başlıklarda kullanılır —
 * hero h1'e asla (LCP). SSR'da kelimeler görünür; gizleme paint öncesi ve
 * yalnızca fold altındaysa.
 */
export default function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) return;

    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    gsap.set(words, { y: 14, opacity: 0 });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.045,
            ease: "power3.out",
          });
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span data-word className="inline-block">
            {word}
            {" "}
          </span>
        </span>
      ))}
    </span>
  );
}
