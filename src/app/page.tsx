import HeroSection from "@/components/HeroSection";
import TrustCounterBand from "@/components/TrustCounterBand";
import ClientMarquee from "@/components/ClientMarquee";
import Reveal from "@/components/Reveal";
import SocialProofSection from "@/components/SocialProofSection";
import TimelineHud from "@/components/editor/TimelineHud";
import ClipCut from "@/components/editor/ClipCut";
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

// Kurgu masası: alt timeline'daki klipler
const CLIPS = [
  { id: "acilis", label: "Açılış", track: "V1" as const },
  { id: "sorun", label: "Sorun", track: "V1" as const },
  { id: "portfolyo", label: "İşler", track: "V1" as const },
  { id: "surec", label: "Süreç", track: "V1" as const },
  { id: "referanslar", label: "Referanslar", track: "A1" as const },
  { id: "basvuru", label: "Teklif", track: "V1" as const },
];

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] bg-background pb-14">
      <div className="film-grain" />

      {/* AÇILIŞ — program monitörü */}
      <div id="acilis">
        <HeroSection />
      </div>
      <ClientMarquee />

      <ClipCut track="V1" name="Sahne 01 — Sorun" tc="00:00:08:00 — 00:00:24:00" />
      <div id="sorun">
        <ProblemSection />
      </div>

      <ClipCut track="V1" name="Sahne 02 — Kanıt" tc="00:00:24:00 — 00:00:52:00" />
      <FilmStripWorkRow />
      <TrustCounterBand />
      <Reveal><SocialProofSection /></Reveal>

      <ClipCut track="V1" name="Sahne 03 — Süreç" tc="00:00:52:00 — 00:01:10:00" />
      <div id="surec">
        <ProcessSection />
      </div>
      <MidPageCTA />

      <ClipCut track="A1" name="Ses Kaydı — Müşteriler" tc="00:01:10:00 — 00:01:26:00" />
      <Reveal><TestimonialsStrip /></Reveal>
      <GuaranteesSection />
      <FAQSection />

      <ClipCut track="V1" name="Kapanış" tc="00:01:26:00 — 00:01:40:00" />
      <FinalCTASection />

      <StickyCTA />
      <TimelineHud clips={CLIPS} />
    </div>
  );
}
