"use client";

import { useState, useEffect } from "react";
import { BookOpen, X, Download, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setName("");
        setEmail("");
        setIsSubmitting(false);
        setIsSuccess(false);
        setError("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b2890264-5337-4e27-9cba-7b64c7e6aa09",
          subject: `PDF Rehber İndirme Talebi: ${name}`,
          name,
          email,
          message: `${name} kişisi PDF rehber indirmek istiyor. E-posta: ${email}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setError("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-card/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-md w-full mx-auto animate-in zoom-in-95 fade-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer z-10"
          aria-label="Kapat"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div className="p-8">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold mb-5">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Ücretsiz Rehberinizi İndirin
                </h2>
                <p className="text-gradient-gold font-heading font-semibold text-base mb-3">
                  Sıfırdan Profesyonel Stüdyo Kurma Rehberi
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ekipman seçimi, ışık düzeni, ses kurulumu ve kamera
                  ayarlarını adım adım anlatan profesyonel rehberimizi
                  ücretsiz indirin.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Kişisel verilerimin <Link href="/kvkk-aydinlatma-metni" className="text-primary hover:underline" target="_blank">KVKK Aydınlatma Metni</Link> kapsamında işlenmesini ve iletişim bilgilerim üzerinden benimle iletişime geçilmesini kabul ediyorum.
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
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
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Teşekkürler!
              </h3>
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
      </div>
    </div>,
    document.body
  );
}
