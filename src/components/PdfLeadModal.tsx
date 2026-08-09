"use client";

import { useState } from "react";
import { BookOpen, Download, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { submitLead } from "@/lib/web3forms";

interface PdfLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PdfLeadModal({ isOpen, onClose }: PdfLeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked;
    if (botcheck) return;

    setError("");
    setIsSubmitting(true);

    const result = await submitLead({
      subject: `PDF Rehber İndirme Talebi: ${name}`,
      name,
      email,
      message: `${name} kişisi PDF rehber indirmek istiyor. E-posta: ${email}`,
    });

    setIsSubmitting(false);
    if (result.ok) {
      setIsSuccess(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl rounded-3xl">
        <div data-lenis-prevent className="p-8 overflow-y-auto">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold mb-5">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <DialogTitle className="font-heading text-2xl font-bold text-foreground mb-2">
                  Ücretsiz Rehberinizi İndirin
                </DialogTitle>
                <p className="text-gradient-gold font-heading font-semibold text-base mb-3">
                  Sıfırdan Profesyonel Stüdyo Kurma Rehberi
                </p>
                <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                  Ekipman seçimi, ışık düzeni, ses kurulumu ve kamera
                  ayarlarını adım adım anlatan profesyonel rehberimizi
                  ücretsiz indirin.
                </DialogDescription>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label
                    htmlFor="pdf-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="pdf-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Adınız ve soyadınız"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pdf-email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    E-posta
                  </label>
                  <input
                    id="pdf-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>

                <div className="flex items-start gap-3 mt-4 mb-2">
                  <div className="flex items-center h-5">
                    <input
                      id="kvkk_pdf"
                      type="checkbox"
                      required
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-background"
                    />
                  </div>
                  <label
                    htmlFor="kvkk_pdf"
                    className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Kişisel verilerimin <Link href="/kvkk-aydinlatma-metni" className="text-primary hover:underline" target="_blank">KVKK Aydınlatma Metni</Link> kapsamında işlenmesini ve iletişim bilgilerim üzerinden benimle iletişime geçilmesini kabul ediyorum.
                  </label>
                </div>

                {error && (
                  <p role="alert" className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-black font-heading font-bold text-base px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Rehberi Gönder
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <DialogTitle className="font-heading text-2xl font-bold text-foreground mb-2">
                Teşekkürler!
              </DialogTitle>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Rehberiniz hazır. Aşağıdaki butona tıklayarak hemen
                indirebilirsiniz.
              </p>
              <a
                href="/studyo-kurulum-rehberi.pdf"
                download="Studyo_Kurulum_Rehberi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-black font-heading font-bold text-base px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Rehberi İndir
              </a>
              <button
                onClick={onClose}
                className="block w-full mt-4 text-muted-foreground hover:text-foreground text-sm transition-colors duration-300 cursor-pointer"
              >
                Kapat
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
