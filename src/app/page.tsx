import HeroSection from "@/components/HeroSection";
import ScrollProgress from "@/components/ScrollProgress";
import TrustCounterBand from "@/components/TrustCounterBand";
import Reveal from "@/components/Reveal";
import SocialProofSection from "@/components/SocialProofSection";
import dynamic from "next/dynamic";

const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const GuaranteesSection = dynamic(() => import("@/components/GuaranteesSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const FinalCTASection = dynamic(() => import("@/components/FinalCTASection"));
const StickyCTA = dynamic(() => import("@/components/StickyCTA"));
const TestimonialsStrip = dynamic(() => import("@/components/TestimonialsStrip"));
const MidPageCTA = dynamic(() => import("@/components/MidPageCTA"));

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="film-grain" />
      <ScrollProgress />

      {/* Hero loads immediately — above the fold */}
      <HeroSection />

      {/* Page sections */}
      <TrustCounterBand />
      <Reveal><SocialProofSection /></Reveal>

      <ProblemSection />

      {/* Cinematic Divider */}
      <div className="w-full bg-background py-6 flex flex-col items-center justify-center">
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <ProcessSection />

      {/* Mid-page CTA */}
      <MidPageCTA />

      {/* Testimonials */}
      <Reveal><TestimonialsStrip /></Reveal>

      {/* Final CTA with Wizard Trigger */}
      <FinalCTASection />

      {/* Cinematic Divider */}
      <div className="w-full bg-surface py-8 flex flex-col items-center justify-center relative">
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent relative z-10" />
      </div>

      <GuaranteesSection />
      <FAQSection />

      {/* Cinematic Divider */}
      <div className="w-full bg-background py-8 flex flex-col items-center justify-center relative">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent relative z-10" />
      </div>
      <StickyCTA />
    </div>
  );
}
