"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import MagneticWrapper from "@/components/MagneticWrapper";
import CtaButton from "@/components/CtaButton";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, ChevronDown, Clock, CheckCircle } from "lucide-react";

import { useWizard } from "@/components/WizardContext";

/** Telefon çerçevesinde sessiz dönen dikey iş — mesajın kanıtı */
function PhoneFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // @ts-expect-error: saveData deneysel ama yaygın
    if (navigator.connection?.saveData) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.src = "/videos/hero-dikey.mp4";
          el.play().catch(() => {});
          io.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative w-[220px] sm:w-[250px] lg:w-[290px] mx-auto">
      <div className="relative aspect-[9/16] rounded-[2.5rem] border border-white/15 ring-1 ring-white/5 shadow-2xl shadow-black/60 overflow-hidden bg-black">
        <span className="absolute top-4 right-4 z-10 flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" aria-hidden /> REC
        </span>
        {/* Çentik */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10 border border-white/10" />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/portfolyo/vaveyla.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Fennix Medya örnek dikey video çalışması"
        />
      </div>
      <p className="mt-4 text-center text-[11px] font-heading font-semibold uppercase tracking-[0.25em] text-muted-foreground/60">
        Gerçek Müşteri İşi · Vavelya Home
      </p>
    </div>
  );
}

const HeroSection = () => {
  const { openWizard } = useWizard();
  const [showVideo, setShowVideo] = useState(false);

  const handleCTAClick = useCallback(() => {
    openWizard();
    if (typeof window.trackEvent === "function") {
      window.trackEvent("hero_cta_click", { section: "hero" });
    }
  }, [openWizard]);

  const handleVideoClick = () => {
    setShowVideo(true);
    if (typeof window.trackEvent === "function") {
      window.trackEvent("vsl_video_click", { section: "hero" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden bg-background">
      {/* Statik altın ışık — foto/parallax yerine */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 100%, hsl(43 45% 65% / 0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 90% 0%, hsl(43 45% 65% / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-page relative z-10 my-auto pt-24 pb-16 lg:pt-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          {/* Sol: mesaj */}
          <div className="text-left">
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-6">
              Semih Hasanoğlu · İstanbul
            </p>

            <h1 className="text-poster mb-8">
              <span className="block text-foreground">Kameradan Önce</span>
              <span className="block text-gradient-gold">Oyunculuk</span>
              <span className="block text-foreground">Öğrendim.</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Sahnede dört yıl oyunculuk yaptım, şimdi kameranın arkasındayım. İşim, markaların
              kamera karşısında kendileri gibi görünmesini sağlamak — senaryodan teslimata kadar
              hepsi tek elden.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
              <MagneticWrapper>
                <CtaButton onClick={handleCTAClick} aria-label="Ücretsiz Strateji Görüşmesi Al" className="w-full sm:w-auto">
                  <span className="hidden sm:inline">Ücretsiz Strateji Görüşmesi Al →</span>
                  <span className="sm:hidden">Ücretsiz Görüşme Al →</span>
                </CtaButton>
              </MagneticWrapper>
              <MagneticWrapper>
                <CtaButton variant="secondary" href="#portfolyo" className="w-full sm:w-auto">
                  Portfolyomuzu İncele
                </CtaButton>
              </MagneticWrapper>
            </div>

            <button
              onClick={handleVideoClick}
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light text-sm font-medium underline-offset-4 hover:underline transition-colors mb-6 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" aria-hidden />
              Vizyonumuzu izleyin — 3 dk
            </button>

            <p className="text-sm text-muted-foreground mb-4">
              Kaliteyi korumak için ayda sınırlı sayıda marka ile çalışıyorum.
            </p>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-medium text-muted-foreground/80 mb-8">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" aria-hidden /> 15 Dakika</span>
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" aria-hidden /> Tamamen Ücretsiz</span>
              <span className="w-1 h-1 rounded-full bg-primary/40 hidden sm:block" />
              <span className="hidden sm:inline">Bağlayıcı Değildir</span>
            </div>

            {/* Gerçek referans bandı */}
            <a href="#referanslar" className="inline-flex items-center gap-3 group/band">
              <span className="flex -space-x-3">
                {["esranur", "orhan", "mukaddes"].map((id) => (
                  <span key={id} className="block w-9 h-9 rounded-full border-2 border-background overflow-hidden">
                    <Image src={`/videos/referans/${id}.jpg`} alt="" width={72} height={72} className="w-full h-full object-cover" />
                  </span>
                ))}
              </span>
              <span className="text-sm text-muted-foreground font-medium group-hover/band:text-foreground transition-colors">
                <strong className="text-foreground">500&apos;den fazla video</strong> teslim ettim —
                müşterilerimi dinleyin
              </span>
            </a>
          </div>

          {/* Sağ: kanıt */}
          <PhoneFrame />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-6 inset-x-0 w-full flex-col items-center justify-center animate-scroll-cue hover:opacity-100 transition-opacity z-10 pointer-events-none hidden md:flex">
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium pl-[0.1em]">Aşağı Kaydırın</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" aria-hidden />
      </div>

      {/* VSL Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-6xl bg-transparent border-0 shadow-none p-0">
          <DialogTitle className="sr-only">Fennix Medya - Vizyonumuz</DialogTitle>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-6">
            <iframe
              src="https://www.youtube.com/embed/t1edyqgT1UQ?autoplay=1&mute=0&rel=0&start=1&modestbranding=1"
              title="Fennix Medya - Vizyonumuz"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <CtaButton
            className="mx-auto"
            onClick={() => {
              setShowVideo(false);
              handleCTAClick();
            }}
          >
            Ücretsiz Strateji Görüşmesi Al →
          </CtaButton>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
