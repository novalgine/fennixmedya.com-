"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const PdfLeadModal = dynamic(() => import("@/components/PdfLeadModal"), {
  ssr: false,
});
import { BookOpen } from "lucide-react";

interface PdfDownloadCtaProps {
  text?: string;
  className?: string;
}

export default function PdfDownloadCta({ text = "Ücretsiz Kurulum Rehberini İndir", className = "" }: PdfDownloadCtaProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-foreground font-heading font-bold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer ${className}`}
      >
        <BookOpen className="w-5 h-5 text-primary" />
        {text}
      </button>
      {isOpen && <PdfLeadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
