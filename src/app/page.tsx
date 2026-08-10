import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import Reveal from "@/components/Reveal";
import AboutMe from "@/components/AboutMe";
import TrustCounterBand from "@/components/TrustCounterBand";
import TimelineHud from "@/components/editor/TimelineHud";
import dynamic from "next/dynamic";

const FilmStripWorkRow = dynamic(() => import("@/components/FilmStripWorkRow"));
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const HowIWork = dynamic(() => import("@/components/HowIWork"));
const NotForYou = dynamic(() => import("@/components/NotForYou"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const TestimonialsStrip = dynamic(() => import("@/components/TestimonialsStrip"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const FinalCTASection = dynamic(() => import("@/components/FinalCTASection"));
const StickyCTA = dynamic(() => import("@/components/StickyCTA"));

// Kurgu masası: alt timeline'daki klipler
const CLIPS = [
  { id: "acilis", label: "Açılış", track: "V1" as const },
  { id: "portfolyo", label: "İşler", track: "V1" as const },
  { id: "ben", label: "Ben", track: "V1" as const },
  { id: "fark", label: "Fark", track: "V1" as const },
  { id: "surec", label: "Süreç", track: "V1" as const },
  { id: "referanslar", label: "Müşteriler", track: "A1" as const },
  { id: "fiyat", label: "Fiyat", track: "V1" as const },
  { id: "basvuru", label: "Randevu", track: "V1" as const },
];

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] bg-background pb-14">
      <div className="film-grain" />

      {/* Kim olduğum */}
      <div id="acilis">
        <HeroSection />
      </div>
      <ClientMarquee />

      {/* İşler — konuşmadan önce göster */}
      <FilmStripWorkRow />
      <TrustCounterBand />

      {/* Ben kimim */}
      <AboutMe />

      {/* Aradaki fark */}
      <div id="fark"><BeforeAfter /></div>

      {/* Nasıl çalışıyorum */}
      <HowIWork />

      {/* Kimlerle çalışıyorum / çalışmıyorum */}
      <NotForYou />

      {/* Müşteriler */}
      <Reveal><TestimonialsStrip /></Reveal>

      {/* Fiyat */}
      <Pricing />

      {/* Sorular ve kapanış */}
      <FAQSection />
      <FinalCTASection />

      <StickyCTA />
      <TimelineHud clips={CLIPS} />
    </div>
  );
}
