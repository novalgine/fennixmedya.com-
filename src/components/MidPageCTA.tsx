"use client";
import CtaButton from "@/components/CtaButton";
import { useWizard } from "@/components/WizardContext";

export default function MidPageCTA() {
  const { openWizard } = useWizard();

  return (
    <div className="w-full bg-surface py-10 flex flex-col items-center justify-center px-6">
      <p className="text-foreground/80 text-lg md:text-xl font-medium text-center max-w-2xl mb-5">
        Hâlâ emin değil misiniz? <span className="text-primary font-bold">15 dakikalık ücretsiz görüşmede</span> tüm sorularınızı yanıtlayalım.
      </p>
      <CtaButton onClick={() => openWizard()}>Ücretsiz Strateji Görüşmesi Al →</CtaButton>
    </div>
  );
}
