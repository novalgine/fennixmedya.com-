"use client";
import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Sitedeki TEK scroll-reveal.
 * Spec: 24px yukarı kayma · 600ms · cubic-bezier(.22,1,.36,1) · %88 viewport tetiği.
 *
 * SSR HTML'de içerik GÖRÜNÜR gelir (SEO/LCP/JS'siz tarayıcı). Gizleme yalnızca
 * paint öncesi useLayoutEffect'te, fold-altındaki elemanlara uygulanır — böylece
 * ne flaş olur ne de içerik hydration'a rehin kalır.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** ms — kardeş Reveal'larla kademelendirme için */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Fold üstündeki içerik hiç gizlenmez
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) return;

    el.classList.add("reveal-hidden");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
