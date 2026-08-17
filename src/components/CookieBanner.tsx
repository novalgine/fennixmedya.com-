"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Sadece istemcide (client-side) çalışır
    const consent = localStorage.getItem("fennix-cookie-consent");
    if (!consent) {
      // Biraz gecikmeli gelsin ki kullanıcı sayfayı algılasın
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const setConsent = (value: "accepted" | "declined") => {
    localStorage.setItem("fennix-cookie-consent", value);
    // FacebookPixel bu event'i dinler — karar, sayfa yenilenmeden anında uygulanır
    window.dispatchEvent(new CustomEvent("fennix-consent-changed", { detail: value }));
    setShowBanner(false);
  };

  const acceptCookies = () => setConsent("accepted");
  const declineCookies = () => setConsent("declined");

  if (!showBanner) return null;

  // İnce şerit: hero'nun ve alt HUD'un üstüne kart gibi binmez; tek satır bilgi + iki seçenek.
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="border-t border-border/60 bg-background/95 backdrop-blur-md">
        <div className="container-page flex items-center gap-3 py-2.5 min-h-12">
          <Cookie className="w-4 h-4 text-primary shrink-0 hidden sm:block" aria-hidden />
          <p className="flex-1 text-muted-foreground text-xs sm:text-sm leading-snug">
            Trafiği ölçmek için çerez kullanıyorum.{" "}
            <Link href="/cerez-politikasi" className="text-primary hover:underline whitespace-nowrap">
              Çerez Politikası
            </Link>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={declineCookies}
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
            >
              Reddet
            </button>
            <button
              onClick={acceptCookies}
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Kabul Et
            </button>
            <button
              onClick={declineCookies}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
