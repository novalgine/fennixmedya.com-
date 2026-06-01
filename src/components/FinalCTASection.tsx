"use client";
import { useEffect, useRef, useState } from "react";
import MagneticWrapper from "@/components/MagneticWrapper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CAPACITY_CONFIG } from "@/config/capacity";

gsap.registerPlugin(ScrollTrigger);

import { useWizard } from "@/components/WizardContext";

const FinalCTASection = () => {
  const { openWizard } = useWizard();
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { TOTAL_SLOTS, OCCUPIED_SLOTS } = CAPACITY_CONFIG;
  const remainingSlots = Math.max(0, TOTAL_SLOTS - OCCUPIED_SLOTS);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { scale: 0.9, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="basvuru" ref={containerRef} className="section-spacing bg-emerald-surface overflow-hidden py-24">
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 will-change-transform text-center">
        <p className="text-center text-primary font-bold text-sm md:text-base uppercase tracking-widest mb-6">
          Sürdürülebilir Kalite İçin Ayda En Fazla {TOTAL_SLOTS} Marka: <span className="font-bold text-gradient-gold">(Bu Ay İçin Son {remainingSlots} Yer)</span>
        </p>
        
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 tracking-tight leading-[1.1]">
          Rakipleriniz Sıradan İçerik Havuzunda Boğulurken,<br/>
          <span className="text-gradient-gold">Siz Sinematik  İçeriklerle Fark Yaratın</span>
        </h2>

        <p className="text-foreground/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
          Zaman kaybetmeyin. Markanızı pazarın en çok aranan yüzü yapacak stratejik görsel iletişim planını tasarlayalım.
        </p>

        <MagneticWrapper strength={0.3}>
          <button
            onClick={openWizard}
            className="bg-gradient-gold text-primary-foreground font-heading font-bold text-2xl md:text-3xl px-12 py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(212,164,74,0.3)] cursor-pointer relative overflow-hidden group inline-flex"
          >
            <span className="relative z-10 transition-transform group-hover:translate-x-2 inline-block">
              Hemen Planlamaya Başlayın →
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </button>
        </MagneticWrapper>
      </div>
    </section>
  );
};

export default FinalCTASection;
