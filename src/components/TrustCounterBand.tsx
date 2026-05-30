"use client";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Film, Users, Eye, Award } from "lucide-react";

const stats = [
    { icon: Users, value: 15, suffix: "+", label: "Marka", duration: 1500 },
    { icon: Film, value: 500, suffix: "+", label: "Üretilen Video", duration: 2000 },
    { icon: Eye, value: 10, suffix: "M+", label: "Toplam Erişim", duration: 1800 },
    { icon: Award, value: 100, suffix: "%", label: "Memnuniyet", duration: 1600 },
];

// Extracted to avoid calling hooks inside a .map loop (React Rules of Hooks)
const StatItem = ({ stat, index, isVisible }: { stat: { icon: React.ElementType, value: number, suffix: string, label: string, duration: number }, index: number, isVisible: boolean }) => {
    const countRef = useCountUp(stat.value, stat.duration, isVisible);

    return (
        <div
            className="text-center transition-all duration-700 ease-out"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 120}ms`,
                contain: "layout style paint" // Hint constraint to GPU
            }}
        >
            <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 opacity-60" />
            <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1">
                <span ref={countRef}>0</span>
                <span className="text-gradient-gold">{stat.suffix}</span>
            </p>
            <p className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-widest">
                {stat.label}
            </p>
        </div>
    );
};

const TrustCounterBand = () => {
    const { ref, isVisible } = useScrollFadeIn(0.15);

    return (
        <section
            ref={ref}
            className="py-10 md:py-16 bg-background border-y border-border/30 relative z-10"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8 md:gap-4">
                    {stats.map((stat, i) => (
                        <StatItem key={i} stat={stat} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustCounterBand;
