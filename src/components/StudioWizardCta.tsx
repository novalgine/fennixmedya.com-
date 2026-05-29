"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const StudioWizardModal = dynamic(() => import("@/components/StudioWizardModal"), {
  ssr: false,
});
import { ArrowRight } from "lucide-react";

interface StudioWizardCtaProps {
  text?: string;
  className?: string;
}

export default function StudioWizardCta({ text = "Stüdyonuzu Tasarlayalım", className = "" }: StudioWizardCtaProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-black text-base px-8 py-4 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-gold/20 cursor-pointer ${className}`}
      >
        {text}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      {isOpen && <StudioWizardModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
