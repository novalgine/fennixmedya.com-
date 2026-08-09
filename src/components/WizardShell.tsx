"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { submitLead } from "@/lib/web3forms";
import type { ChoiceOption, ContactFields, WizardConfig } from "./wizard/types";

const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false });

const CAL_BRAND = {
  styles: { branding: { brandColor: "#D4A44A" } },
  hideEventTypeDetails: false,
  layout: "month_view" as const,
};

function resolve<T, A>(v: T | ((a: A) => T), a: A): T {
  return typeof v === "function" ? (v as (a: A) => T)(a) : v;
}

export default function WizardShell<A extends ContactFields>({
  config,
  open,
  onOpenChange,
}: {
  config: WizardConfig<A>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const choiceCount = config.steps.length;
  const totalSteps = choiceCount + 1; // seçim adımları + iletişim (takvim sayaçta yok)
  const contactIdx = choiceCount;
  const calIdx = choiceCount + 1;

  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<A>(config.initialAnswers);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  // Cal markalaması — takvim adımına gelince
  useEffect(() => {
    if (stepIdx !== calIdx) return;
    import("@calcom/embed-react").then((mod) => {
      mod.getCalApi({}).then((cal) => {
        cal("ui", CAL_BRAND);
      });
    });
  }, [stepIdx, calIdx]);

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    advanceTimer.current = setTimeout(() => {
      setStepIdx((prev) => prev + 1);
    }, 300);
  };

  const handleBack = () => {
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot: botcheck işaretliyse sessizce yut
    const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked;
    if (botcheck) return;

    setIsSubmitting(true);
    setError("");

    const result = await submitLead({
      subject: config.submit.subject(answers),
      from_name: config.submit.fromName,
      ...config.submit.mapPayload(answers),
    });

    setIsSubmitting(false);
    if (result.ok) {
      setStepIdx(calIdx);
    } else {
      setError(result.error);
    }
  };

  const isCalStep = stepIdx === calIdx;
  const currentChoice = stepIdx < choiceCount ? config.steps[stepIdx] : null;
  const fieldId = (name: string) => `${config.id}-${name}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="p-0 overflow-hidden"
        onInteractOutside={(e) => {
          // Cal.com kendi portal/popover'larını dialog dışına açabilir — kapatma
          const t = e.target as HTMLElement | null;
          if (t?.closest?.("[data-cal-namespace], cal-modal-box, cal-inline")) {
            e.preventDefault();
          }
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-10 shrink-0">
          {stepIdx > 0 && !isCalStep ? (
            <button
              onClick={handleBack}
              className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Geri
            </button>
          ) : (
            <div className="w-16" />
          )}

          {!isCalStep && (
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/70">
                Adım {stepIdx + 1}/{totalSteps}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      stepIdx >= i ? "bg-gradient-gold w-6" : "bg-white/10 w-2"
                    }`}
                  />
                ))}
              </div>
              {config.stepLabels && (
                <span className="text-[10px] font-medium text-muted-foreground/60">
                  {config.stepLabels[stepIdx]}
                </span>
              )}
            </div>
          )}

          {/* Dialog'un sağ üst kapatma butonuna yer bırak */}
          <div className="w-16" />
        </div>

        {/* Content */}
        <div data-lenis-prevent className="p-6 md:p-8 flex-grow overflow-y-auto relative z-10">
          {currentChoice && (
            <div key={stepIdx} className="animate-in slide-in-from-right-4 fade-in duration-300">
              <DialogTitle className="text-2xl font-heading font-bold text-foreground mb-2">
                {resolve(currentChoice.title, answers)}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mb-6">
                {resolve(currentChoice.subtitle, answers)}
              </DialogDescription>

              <div className="space-y-3">
                {resolve<ChoiceOption[], A>(currentChoice.options, answers).map((option) => {
                  const selected = answers[currentChoice.key as keyof A] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(currentChoice.key, option.value)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden
                        ${selected ? "bg-white/10 border-primary" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                    >
                      {option.badge && (
                        <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                          {option.badge}
                        </div>
                      )}
                      <div>
                        <h3 className={`font-semibold text-foreground text-lg group-hover:text-primary transition-colors ${option.badge ? "mt-1" : ""}`}>
                          {option.title}
                        </h3>
                        {option.description && (
                          <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                        )}
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 flex-shrink-0 ${selected ? "text-primary" : "text-muted-foreground"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {stepIdx === contactIdx && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <DialogTitle className="text-2xl font-heading font-bold text-foreground mb-2">
                {config.contact.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mb-6">
                {config.contact.subtitle}
              </DialogDescription>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot — insanlar görmez, botlar doldurur */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label htmlFor={fieldId("name")} className="text-sm font-medium text-foreground/70 mb-1 block">
                    Ad Soyad
                  </label>
                  <input
                    id={fieldId("name")}
                    required
                    type="text"
                    autoComplete="name"
                    value={answers.name}
                    onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor={fieldId("email")} className="text-sm font-medium text-foreground/70 mb-1 block">
                    E-posta
                  </label>
                  <input
                    id={fieldId("email")}
                    required
                    type="email"
                    autoComplete="email"
                    value={answers.email}
                    onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="ornek@sirket.com"
                  />
                </div>
                <div>
                  <label htmlFor={fieldId("phone")} className="text-sm font-medium text-foreground/70 mb-1 block">
                    Telefon
                  </label>
                  <input
                    id={fieldId("phone")}
                    required
                    type="tel"
                    autoComplete="tel"
                    value={answers.phone}
                    onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div className="flex items-start gap-3 mt-4 mb-2">
                  <div className="flex items-center h-5">
                    <input
                      id={fieldId("kvkk")}
                      type="checkbox"
                      required
                      className="w-4 h-4 rounded border-white/20 bg-black/40 text-primary focus:ring-primary focus:ring-offset-background"
                    />
                  </div>
                  <label
                    htmlFor={fieldId("kvkk")}
                    className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Kişisel verilerimin{" "}
                    <Link
                      href="/kvkk-aydinlatma-metni"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      KVKK Aydınlatma Metni
                    </Link>{" "}
                    kapsamında işlenmesini ve iletişim bilgilerim üzerinden benimle iletişime
                    geçilmesini kabul ediyorum.
                  </label>
                </div>

                {error && (
                  <p role="alert" className="text-red-400 text-sm text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full bg-gradient-gold text-primary-foreground font-bold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Gönderiliyor..." : config.contact.submitLabel}
                </button>
              </form>
            </div>
          )}

          {isCalStep && (
            <div className="animate-in zoom-in-95 fade-in duration-500 flex flex-col items-center justify-center w-full h-[min(450px,60dvh)]">
              <DialogTitle className="sr-only">Randevu Takvimi</DialogTitle>
              <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                <Cal
                  calLink={config.cal.link}
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ name: answers.name, email: answers.email }}
                />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
