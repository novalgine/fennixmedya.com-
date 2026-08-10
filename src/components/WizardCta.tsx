"use client";

import CtaButton from "@/components/CtaButton";
import { useWizard } from "@/components/WizardContext";

interface WizardCtaProps {
  text?: string;
  className?: string;
}

export default function WizardCta({ text = "Görüşme Ayarlayalım →", className }: WizardCtaProps) {
  const { openWizard } = useWizard();
  return (
    <CtaButton onClick={() => openWizard("funnel")} className={className}>
      {text}
    </CtaButton>
  );
}
