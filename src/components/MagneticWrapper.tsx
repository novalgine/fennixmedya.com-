"use client";
import { useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticWrapperProps {
    children: ReactNode;
    className?: string;
    strength?: number; // How strong the pull is (e.g., 0.2)
}

export default function MagneticWrapper({ children, className = "", strength = 0.2 }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const element = ref.current;
        if (!element) return;

        const boundingRect = element.getBoundingClientRect();
        const x = clientX - (boundingRect.left + boundingRect.width / 2);
        const y = clientY - (boundingRect.top + boundingRect.height / 2);

        // Using gsap for a smooth interpolation
        gsap.to(element, {
            x: x * strength,
            y: y * strength,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        const element = ref.current;
        if (!element) return;

        // Snap back with an elastic bounce
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block ${className}`}
        >
            {children}
        </div>
    );
}
