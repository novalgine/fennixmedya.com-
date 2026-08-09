import HeroSection from "@/components/HeroSection";
import ScrollProgress from "@/components/ScrollProgress";
import TrustCounterBand from "@/components/TrustCounterBand";
import ClientMarquee from "@/components/ClientMarquee";
import Reveal from "@/components/Reveal";
import SocialProofSection from "@/components/SocialProofSection";
import dynamic from "next/dynamic";

const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const FilmStripWorkRow = dynamic(() => import("@/components/FilmStripWorkRow"));
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

      {/* 01 Açılış — mesaj + kanıt */}
      <HeroSection />
      <ClientMarquee />

      {/* Sahne 01 — Sorun */}
      <ProblemSection />

      {/* Sahne 02 — Kanıt */}
      <FilmStripWorkRow />
      <TrustCounterBand />
      <Reveal><SocialProofSection /></Reveal>

      {/* Sahne 03 — Süreç */}
      <ProcessSection />
      <MidPageCTA />

      {/* İnsan kanıtı + itirazlar */}
      <Reveal><TestimonialsStrip /></Reveal>
      <GuaranteesSection />
      <FAQSection />

      {/* Kapanış */}
      <FinalCTASection />
      <StickyCTA />
    </div>
  );
}
