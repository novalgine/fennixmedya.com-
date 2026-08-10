"use client";
import MagneticWrapper from "@/components/MagneticWrapper";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

import { useWizard } from "@/components/WizardContext";

const FinalCTASection = () => {
  const { openWizard } = useWizard();
  return (
    <section id="basvuru" className="section-spacing bg-background overflow-hidden relative">
      {/* Emerald Spotlight behind CTA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
      <Reveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-center text-primary font-bold text-sm md:text-base uppercase tracking-widest mb-6">
          Sürdürülebilir kalite için ayda sınırlı sayıda marka ile çalışıyorum
        </p>
        
        <h2 className="text-poster text-poster-sub text-center mb-8">
          <span className="block text-foreground">Hazırsanız</span>
          <span className="block text-gradient-gold">Sahne Sizin.</span>
        </h2>

        <p className="text-foreground/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
          15 dakika konuşalım. Markanıza ne çekeceğimizi, kaç videoyla başlayacağımızı ve bütçeyi netleştirelim. Bağlayıcı değil.
        </p>

        <MagneticWrapper>
          <CtaButton onClick={() => openWizard()}>Ücretsiz Strateji Görüşmesi Al →</CtaButton>
        </MagneticWrapper>
      </Reveal>
    </section>
  );
};

export default FinalCTASection;
