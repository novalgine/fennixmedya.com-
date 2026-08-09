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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-10 fade-in duration-500 pointer-events-none">
      <div className="max-w-5xl mx-auto bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-5 md:p-6 pointer-events-auto flex flex-col md:flex-row items-center gap-6">
        
        {/* Icon & Text */}
        <div className="flex-1 flex items-start md:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Çerez Tercihleri</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Size daha iyi bir deneyim sunmak ve site trafiğimizi analiz etmek için çerezleri kullanıyoruz. 
              Detaylı bilgi için <Link href="/cerez-politikasi" className="text-primary hover:underline">Çerez Politikamızı</Link> inceleyebilirsiniz.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
          <button 
            onClick={declineCookies}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-white/5 border border-transparent transition-colors"
          >
            Reddet
          </button>
          <button 
            onClick={acceptCookies}
            className="px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Kabul Et
          </button>
          <button 
            onClick={declineCookies}
            className="p-2 ml-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
