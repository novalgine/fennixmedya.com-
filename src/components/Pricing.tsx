"use client";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { packages, pricingNotes } from "@/data/pricing";
import { useWizard } from "@/components/WizardContext";

export default function Pricing() {
  const { openWizard } = useWizard();

  return (
    <section id="fiyat" className="section-spacing bg-background">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Şeffaf fiyat"
            title="Ne Kadar?"
            sub="Rakamı görüşmede öğrenmenizi sevmiyorum. Başlangıç fiyatlarım burada."
            align="left"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <div
                className={`h-full flex flex-col p-7 rounded-2xl border transition-colors ${
                  p.featured
                    ? "bg-card border-primary/50"
                    : "bg-card border-border/40 hover:border-primary/30"
                }`}
              >
                {p.featured && (
                  <span className="self-start mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/40 rounded px-2 py-0.5">
                    En çok tercih edilen
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-3">
                  {p.name}
                </h3>
                <p className="mb-6">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    {p.price}
                  </span>
                  {p.unit && (
                    <span className="block text-sm text-muted-foreground mt-1">{p.unit}</span>
                  )}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2.5 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
                      {inc}
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.note}</p>
                )}
                <div className="mt-auto">
                  <CtaButton
                    variant={p.featured ? "primary" : "secondary"}
                    size="md"
                    onClick={() => openWizard()}
                    className="w-full"
                  >
                    Görüşme ayarla
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <ul className="mt-8 space-y-1.5">
            {pricingNotes.map((n) => (
              <li key={n} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary" aria-hidden>·</span>
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
