"use client";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
    { value: 500, suffix: "+", label: "Üretilen Video", duration: 2000 },
    { value: 10, suffix: "M+", label: "Toplam Erişim", duration: 1800 },
    { value: 8, suffix: "", label: "Sektör", duration: 1400 },
];

// Extracted to avoid calling hooks inside a .map loop (React Rules of Hooks)
const StatItem = ({ stat, index, phase }: { stat: { value: number, suffix: string, label: string, duration: number }, index: number, phase: "idle" | "armed" | "shown" }) => {
    const countRef = useCountUp(stat.value, stat.duration, phase === "shown");

    return (
        <div
            className={`text-center ${phase === "armed" ? "reveal-hidden" : ""} ${phase === "shown" ? "reveal-hidden reveal-visible" : ""}`}
            style={{ transitionDelay: `${index * 80}ms`, contain: "layout style paint" }}
        >
            <p className="text-display-num text-foreground">
                <span ref={countRef}>0</span>
                <span className="text-primary">{stat.suffix}</span>
            </p>
            <p className="text-muted-foreground text-xs md:text-sm font-medium uppercase tracking-widest mt-2">
                {stat.label}
            </p>
        </div>
    );
};

const TrustCounterBand = () => {
    const ref = useRef<HTMLElement>(null);
    // idle: SSR/JS'siz — görünür · armed: paint sonrası gizlendi · shown: animasyonla geldi
    const [phase, setPhase] = useState<"idle" | "armed" | "shown">("idle");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setPhase("shown");
            return;
        }
        // Fold üstündeyse hiç gizleme, sayaçları direkt başlat
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) {
            setPhase("shown");
            return;
        }
        setPhase("armed");
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPhase("shown");
                    io.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="py-12 md:py-16 bg-surface border-y border-border/30 relative z-10"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-3 md:divide-x md:divide-border/40">
                    {stats.map((stat, i) => (
                        <StatItem key={i} stat={stat} index={i} phase={phase} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustCounterBand;
