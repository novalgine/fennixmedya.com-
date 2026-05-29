"use client";
import { useEffect, useRef, ReactNode, Children, isValidElement } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ children, className = "", stagger = false }: { children: ReactNode; className?: string; stagger?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stagger) {
        const elements = gsap.utils.toArray(".fade-child") as HTMLElement[];
        if (elements.length > 0) {
          gsap.fromTo(elements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              }
            }
          );
        }
      } else {
        gsap.fromTo(containerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [stagger]);

  if (stagger) {
    return (
      <div ref={containerRef} className={className}>
        {Children.map(children, (child) =>
          isValidElement(child) ? (
            <div className="fade-child opacity-0">
              {child}
            </div>
          ) : child
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
