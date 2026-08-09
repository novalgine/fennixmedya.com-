"use client";
import CtaButton from "@/components/CtaButton";
import { useWizard } from "@/components/WizardContext";

interface StudioWizardCtaProps {
  text?: string;
  className?: string;
}

export default function StudioWizardCta({ text = "Stüdyonuzu Tasarlayalım →", className = "" }: StudioWizardCtaProps) {
  const { openWizard } = useWizard();
  return (
    <CtaButton size="md" onClick={() => openWizard("studio")} className={className}>
      {text}
    </CtaButton>
  );
}
