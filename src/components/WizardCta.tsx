"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const FunnelWizardModal = dynamic(() => import("@/components/FunnelWizardModal"), {
  ssr: false,
});
import { ArrowRight } from "lucide-react";

interface WizardCtaProps {
  text?: string;
  className?: string;
}

export default function WizardCta({ text = "Ücretsiz Strateji Görüşmesi Al", className }: WizardCtaProps) {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsWizardOpen(true)}
        className={className || "inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-black text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"}
      >
        {text} <ArrowRight className="w-5 h-5" />
      </button>
      {isWizardOpen && <FunnelWizardModal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />}
    </>
  );
}
