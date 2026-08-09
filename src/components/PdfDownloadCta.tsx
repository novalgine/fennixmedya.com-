"use client";

import { BookOpen } from "lucide-react";
import { useWizard } from "@/components/WizardContext";

interface PdfDownloadCtaProps {
  text?: string;
  className?: string;
}

export default function PdfDownloadCta({ text = "Ücretsiz Kurulum Rehberini İndir", className = "" }: PdfDownloadCtaProps) {
  const { openWizard } = useWizard();
  return (
    <button
      onClick={() => openWizard("pdf")}
      className={`group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-foreground font-heading font-bold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer ${className}`}
    >
      <BookOpen className="w-5 h-5 text-primary" />
      {text}
    </button>
  );
}
