"use client";
import React from "react";
import { useWizard } from "@/components/WizardContext";

export default function MidPageCTA() {
  const { openWizard } = useWizard();

  return (
    <div className="w-full bg-surface py-10 flex flex-col items-center justify-center px-6">
      <p className="text-foreground/80 text-lg md:text-xl font-medium text-center max-w-2xl mb-5">
        Hâlâ emin değil misiniz? <span className="text-primary font-black">15 dakikalık ücretsiz görüşmede</span> tüm sorularınızı yanıtlayalım.
      </p>
      <button
        onClick={openWizard}
        className="bg-gradient-gold text-primary-foreground font-heading font-black text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20 cursor-pointer"
      >
        Hemen Planlamaya Başlayın →
      </button>
    </div>
  );
}
