"use client";
import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const WHATSAPP_NUMBER = "905467407084";
const WHATSAPP_MESSAGE = encodeURIComponent("Merhaba, web sitenizden ulaşıyorum. Ücretsiz strateji görüşmesi hakkında bilgi almak istiyorum.");
const PHONE_NUMBER = "+905467407084";

import { useWizard } from "@/components/WizardContext";

const StickyCTA = () => {
  const { openWizard } = useWizard();
  const [visible, setVisible] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Breakpoint takibi: resize dinlemekten ucuz, yalnızca eşikte tetiklenir
    const mql = window.matchMedia("(max-width: 767px)");
    const onBreakpoint = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    onBreakpoint(mql);
    mql.addEventListener("change", onBreakpoint);

    // Watch for form section
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFormInView(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    const formElement = document.getElementById("basvuru");
    if (formElement) observer.observe(formElement);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mql.removeEventListener("change", onBreakpoint);
      if (formElement) observer.unobserve(formElement);
    };
  }, []);

  const handleMainCTA = () => {
    openWizard();
    if (typeof window.trackEvent === "function") {
      window.trackEvent("sticky_cta_click", { section: "sticky" });
    }
  };

  const trackWhatsApp = () => {
    if (typeof window.trackEvent === "function") {
      window.trackEvent("whatsapp_click", { source: "sticky_cta" });
    }
  };

  const trackCall = () => {
    if (typeof window.trackEvent === "function") {
      window.trackEvent("phone_call_click", { source: "sticky_cta" });
    }
  };

  if (!visible || formInView) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-50 animate-fade-in-up flex items-center gap-2.5">
      {/* Mobile: Phone Call Link */}
      {isMobile && (
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={trackCall}
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all active:scale-90 border border-blue-400/30"
          aria-label="Hemen arayın"
        >
          <Phone className="w-5 h-5" aria-hidden />
        </a>
      )}

      {/* WhatsApp Link */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsApp}
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl transition-all active:scale-90 border border-green-400/30"
        aria-label="WhatsApp ile yazın"
      >
        <MessageCircle className="w-5 h-5" aria-hidden />
      </a>

      {/* Main CTA Button — metin JS branch'inden gelir, CSS'le gizleme yok */}
      {isMobile ? (
        <button
          onClick={handleMainCTA}
          className="bg-gradient-gold text-primary-foreground font-heading font-bold px-6 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all animate-pulse-gold text-sm cursor-pointer border border-white/10"
        >
          Ücretsiz Görüşme Al →
        </button>
      ) : (
        <MagneticWrapper strength={0.3}>
          <button
            onClick={handleMainCTA}
            className="bg-gradient-gold text-primary-foreground font-heading font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all animate-pulse-gold text-base cursor-pointer border border-white/10"
          >
            Ücretsiz Strateji Görüşmesi Al →
          </button>
        </MagneticWrapper>
      )}
    </div>
  );
};

export default StickyCTA;
