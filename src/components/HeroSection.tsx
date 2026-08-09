"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import MagneticWrapper from "@/components/MagneticWrapper";
import CtaButton from "@/components/CtaButton";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, ChevronDown, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import { useWizard } from "@/components/WizardContext";

const HeroSection = () => {
  const { openWizard } = useWizard();
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for Background only (content parallax causes cutoff on tall mobile screens)
      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lazy-load hero background video only when in viewport
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoEl = heroVideoRef.current;
    if (!videoEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.src = "/videos/hero-loop.mp4";
          videoEl.load();
          setVideoLoaded(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(videoEl);
    return () => obs.disconnect();
  }, []);

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
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden bg-background">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform scale-[1.15]"
        style={{ backgroundImage: `url(${heroBg.src})`, transformOrigin: "center top" }}
      />
      <div className="absolute inset-0 cinematic-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full my-auto pt-20 pb-24 will-change-transform flex flex-col items-center"
      >
        {/* SEO H2 & Dynamic Greeting */}
        <div className="flex flex-col items-center gap-3 mb-6 transition-all duration-1000 ease-out">
          <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-primary/80">Ayda Sadece 6 Saatinizi Ayırın. Gerisini Bize Bırakın.</h2>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-left md:text-center w-full">
          <span
            className="text-foreground inline-block transition-all duration-500 ease-out"
          >
            Sıradan Videoları Unutun.
          </span>
          <br />
          <span
            className="text-foreground inline-block transition-all duration-500 ease-out leading-[1.2] mt-2"
          >
            <span className="text-gradient-gold">Sektörünüzde Otorite İnşa Eden</span>
          </span>
          <br />
          <span className="text-foreground/90 text-3xl md:text-5xl lg:text-6xl font-bold mt-4 block transition-all duration-500 ease-out">
            Yüksek Kaliteli İçeriklere Sahip Olun.
          </span>
        </h1>

        <p
          className="text-muted-foreground text-left md:text-center text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-500 ease-out w-full"
        >
          Siz sadece kendi işinize odaklanın. Hedef kitlenize güven veren ve sizi pazarın en güçlü ismi yapacak tüm video prodüksiyon sürecini uçtan uca biz tasarlıyoruz.
        </p>

        {/* Video Sales Letter (VSL) Section - Premium Light Embed */}
        <div
          onClick={handleVideoClick}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-gold/20 border border-white/10 mb-10 transition-all duration-500 ease-out group cursor-pointer"
        >
          <div className="aspect-video bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
            {/* Background Loop maintains the premium motion aesthetic */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu ${videoLoaded ? 'opacity-60' : 'opacity-0'}`}
              style={{ contain: "strict" }}
              poster={heroBg.src}
              ref={heroVideoRef}
              title="Fennix Medya Tanıtım Videosu Arka Planı"
              aria-label="Fennix Medya Tanıtım Videosu Arka Planı"
            >
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-6 transition-all duration-500 group-hover:scale-110">
              {/* Animated Play Button */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/20 transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-110" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center border border-white/20 shadow-xl z-10">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-2xl">VİZYONUMUZU İZLEYİN</p>
                <p className="text-white/60 text-xs mt-2 font-medium tracking-wide">3 dakikada süreci keşfedin</p>
              </div>
            </div>
          </div>
        </div>
        {/* Zamansız kalite ifadesi */}
        <p className="mb-4 text-sm text-muted-foreground">
          Kaliteyi korumak için ayda sınırlı sayıda marka ile çalışıyoruz.
        </p>

        {/* Action Buttons & Micro-assurance */}
        <div className="flex flex-col items-center w-full transition-all duration-500 ease-out">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
          
          {/* Mikro Güvence Metni */}
          <div className="flex items-center gap-3 mt-4 text-xs font-medium text-muted-foreground/70">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 15 Dakika</span>
            <span className="w-1 h-1 rounded-full bg-primary/40"></span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Tamamen Ücretsiz</span>
            <span className="w-1 h-1 rounded-full bg-primary/40 hidden sm:block"></span>
            <span className="hidden sm:inline">Bağlayıcı Değildir</span>
          </div>
        </div>

        {/* Gerçek referans bandı */}
        <a href="#referanslar" className="mt-8 flex flex-col items-center gap-3 group/band">
          <div className="flex -space-x-3">
            {["esranur", "orhan", "mukaddes"].map((id) => (
              <span key={id} className="block w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                <Image src={`/videos/referans/${id}.jpg`} alt="" width={80} height={80} className="w-full h-full object-cover" />
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium group-hover/band:text-foreground transition-colors">
            <strong className="text-foreground">500&apos;den fazla video</strong> teslim ettik — gerçek müşteri deneyimlerini izleyin
          </p>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 inset-x-0 w-full flex flex-col items-center justify-center animate-scroll-cue hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1 md:mb-2 font-medium pl-[0.1em]">Aşağı Kaydırın</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
