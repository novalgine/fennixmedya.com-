"use client";
import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const WHATSAPP_NUMBER = "905467407084";
const WHATSAPP_MESSAGE = encodeURIComponent("Merhaba, web sitenizden ulaşıyorum. Ücretsiz strateji görüşmesi hakkında bilgi almak istiyorum.");
const PHONE_NUMBER = "+905467407084";

interface StickyCTAProps {
  onOpenWizard: () => void;
}

const StickyCTA = ({ onOpenWizard }: StickyCTAProps) => {
  const [visible, setVisible] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

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
      window.removeEventListener("resize", checkMobile);
      if (formElement) observer.unobserve(formElement);
    };
  }, []);

  const handleMainCTA = () => {
    onOpenWizard();
    if (typeof window.trackEvent === "function") {
      window.trackEvent("sticky_cta_click", { section: "sticky" });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window.trackEvent === "function") {
      window.trackEvent("whatsapp_click", { source: "sticky_cta" });
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  const handleCall = () => {
    if (typeof window.trackEvent === "function") {
      window.trackEvent("phone_call_click", { source: "sticky_cta" });
    }
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  if (!visible || formInView) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-50 animate-fade-in-up flex items-center gap-2.5">
      {/* Mobile: Phone Call Button */}
      {isMobile && (
        <button
          onClick={handleCall}
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all active:scale-90 border border-blue-400/30"
          aria-label="Hemen Ara"
        >
          <Phone className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl transition-all active:scale-90 border border-green-400/30"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Main CTA Button */}
      {isMobile ? (
        <button
          onClick={handleMainCTA}
          className="bg-gradient-gold text-primary-foreground font-heading font-black px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all animate-pulse-gold text-sm sm:text-base cursor-pointer border border-white/10"
        >
          <span className="sm:hidden">Ücretsiz Görüşme Al →</span>
        </button>
      ) : (
        <MagneticWrapper strength={0.3}>
          <button
            onClick={handleMainCTA}
            className="bg-gradient-gold text-primary-foreground font-heading font-black px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all animate-pulse-gold text-sm sm:text-base cursor-pointer border border-white/10"
          >
            <span className="hidden sm:inline">Ücretsiz Strateji Görüşmesi Al →</span>
          </button>
        </MagneticWrapper>
      )}
    </div>
  );
};

export default StickyCTA;
