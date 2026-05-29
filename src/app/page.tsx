"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import TrustCounterBand from "@/components/TrustCounterBand";
import ProblemSection from "@/components/ProblemSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProcessSection from "@/components/ProcessSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import FadeInSection from "@/components/FadeInSection";
import TestimonialsStrip from "@/components/TestimonialsStrip";
import dynamic from "next/dynamic";

const FunnelWizardModal = dynamic(() => import("@/components/FunnelWizardModal"), {
  ssr: false,
});

export default function HomePage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background">
      {isWizardOpen && <FunnelWizardModal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />}
      <div className="film-grain" />
      <CursorGlow />
      <ScrollProgress />

      {/* Hero loads immediately — above the fold */}
      <HeroSection onOpenWizard={() => setIsWizardOpen(true)} />

      {/* Page sections */}
      <TrustCounterBand />
      <FadeInSection><SocialProofSection /></FadeInSection>

      <ProblemSection />

      {/* Cinematic Divider */}
      <div className="w-full bg-background py-6 flex flex-col items-center justify-center">
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <ProcessSection />

      {/* Mid-page CTA */}
      <div className="w-full bg-surface py-10 flex flex-col items-center justify-center px-6">
        <p className="text-foreground/80 text-lg md:text-xl font-medium text-center max-w-2xl mb-5">
          Hâlâ emin değil misiniz? <span className="text-primary font-black">15 dakikalık ücretsiz görüşmede</span> tüm sorularınızı yanıtlayalım.
        </p>
        <button
          onClick={() => setIsWizardOpen(true)}
          className="bg-gradient-gold text-primary-foreground font-heading font-black text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20 cursor-pointer"
        >
          Hemen Planlamaya Başlayın →
        </button>
      </div>

      {/* Testimonials */}
      <FadeInSection><TestimonialsStrip /></FadeInSection>

      {/* Final CTA with Wizard Trigger */}
      <FinalCTASection onOpenWizard={() => setIsWizardOpen(true)} />

      {/* Cinematic Divider */}
      <div className="w-full bg-surface py-8 flex flex-col items-center justify-center relative">
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent relative z-10" />
      </div>

      <FadeInSection><GuaranteesSection /></FadeInSection>
      <FadeInSection><FAQSection /></FadeInSection>

      {/* Cinematic Divider */}
      <div className="w-full bg-background py-8 flex flex-col items-center justify-center relative">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent relative z-10" />
      </div>
      <Footer />
      <StickyCTA onOpenWizard={() => setIsWizardOpen(true)} />
    </div>
  );
}
