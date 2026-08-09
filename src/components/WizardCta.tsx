"use client";

import { ArrowRight } from "lucide-react";
import { useWizard } from "@/components/WizardContext";

interface WizardCtaProps {
  text?: string;
  className?: string;
}

export default function WizardCta({ text = "Ücretsiz Strateji Görüşmesi Al", className }: WizardCtaProps) {
  const { openWizard } = useWizard();

  return (
    <button
      onClick={() => openWizard("funnel")}
      className={className || "inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"}
    >
      {text} <ArrowRight className="w-5 h-5" />
    </button>
  );
}
