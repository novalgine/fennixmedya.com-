"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import MagneticWrapper from "@/components/MagneticWrapper";
import heroBg from "@/assets/hero-bg.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { wpClient } from "@/lib/wp";
import { gql } from "graphql-request";
import { decodeHtmlEntities, cn } from "@/lib/utils";
import { CAPACITY_CONFIG } from "@/config/capacity";
import { X, Play, ChevronDown, Star, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  onOpenWizard: () => void;
}

const HeroSection = ({ onOpenWizard }: HeroSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoModalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const { displayed, done } = useTypewriter("Rakipleriniz Sıradan İçeriklerle Kaybolurken...", 55, 800);

  const { TOTAL_SLOTS, OCCUPIED_SLOTS, CAPACITY_TEXT } = CAPACITY_CONFIG;
  const remainingSlots = Math.max(0, TOTAL_SLOTS - OCCUPIED_SLOTS);

  const [wpData, setWpData] = useState({
    title: "Siz Hala Telefonla Mı Çekiyorsunuz?",
    content: `Aylık kontenjan: <span class="text-primary font-semibold">Maksimum ${TOTAL_SLOTS} marka</span> ile çalışıyoruz`
  });

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Gününüz aydın olsun. Bu sabahı rakiplerinizin önüne geçerek değerlendirin.");
    else if (hour >= 12 && hour < 17) setGreeting("İyi günler. Bugün, markanızın hikayesini değiştirecek o adımı atın.");
    else if (hour >= 17 && hour < 22) setGreeting("İyi akşamlar. Rakipleriniz günü bitirmişken, siz markanızı zirveye taşıyacak adımı atın.");
    else setGreeting("İyi geceler. Uyumadan önce markanızın kaderini değiştirecek o adımı atın.");

    const fetchHeroData = async () => {
      try {
        const query = gql`
                query GetHero {
                    page(id: "hero-section", idType: URI) {
                        title
                        content
                    }
                }
            `;
        const data = await wpClient.request<{
          page?: { title?: string; content?: string }
        }>(query);
        if (data?.page) {
          setWpData({
            title: decodeHtmlEntities(data.page.title || wpData.title),
            content: decodeHtmlEntities(data.page.content || wpData.content)
          });
        }
      } catch (err) {
        console.log("Using static Hero data (WordPress API not reachable yet).");
      }
    };
    fetchHeroData();

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

  // Handle Video Modal GSAP Animation
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(videoModalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showVideo]);

  // Lazy-load hero background video only when in viewport
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoEl = heroVideoRef.current;
    if (!videoEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.src = "https://cdn.pixabay.com/video/2019/09/04/26537-357886155_large.mp4";
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
    onOpenWizard();
    if (typeof window.trackEvent === "function") {
      window.trackEvent("hero_cta_click", { section: "hero" });
    }
  }, [onOpenWizard]);

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
        <div className="flex flex-col items-center gap-3 mb-6 transition-all duration-1000 ease-out"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(10px)" }}>
          <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-primary/80">Ayda Sadece 6 Saatinizi Ayırın. Gerisini Bize Bırakın.</h2>
          {greeting && (
            <div className="bg-muted/50 border border-border rounded-full px-4 py-1.5 backdrop-blur-md">
              <span className="text-sm font-medium text-foreground/80 tracking-wide">{greeting}</span>
            </div>
          )}
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-left md:text-center w-full">
          <span
            className="text-foreground inline-block transition-all duration-500 ease-out"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(15px)" }}
          >
            Sıradan Videoları Unutun.
          </span>
          <br />
          <span
            className="text-foreground inline-block transition-all duration-500 ease-out leading-[1.2] mt-2"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transitionDelay: "100ms",
            }}
          >
            <span className="text-gradient-gold">Sektörünüzde Otorite İnşa Eden</span>
          </span>
          <br />
          <span className="text-foreground/90 text-3xl md:text-5xl lg:text-6xl font-bold mt-4 block transition-all duration-500 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transitionDelay: "200ms",
            }}>
            Yüksek Kaliteli İçeriklere Sahip Olun.
          </span>
        </h1>

        <p
          className="text-muted-foreground text-left md:text-center text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-500 ease-out w-full"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(15px)", transitionDelay: "300ms" }}
        >
          Siz sadece kendi işinize odaklanın. Hedef kitlenize güven veren ve sizi pazarın en güçlü ismi yapacak tüm video prodüksiyon sürecini uçtan uca biz tasarlıyoruz.
        </p>

        {/* Video Sales Letter (VSL) Section - Premium Light Embed */}
        <div
          onClick={handleVideoClick}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-gold/20 border border-white/10 mb-10 transition-all duration-500 ease-out group cursor-pointer"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transitionDelay: "400ms" }}
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
            >
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-6 transition-all duration-500 group-hover:scale-110">
              {/* Animated Play Button */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping group-hover:bg-primary/50" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center border border-white/20 shadow-xl z-10">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-black tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-2xl">VİZYONUMUZU İZLEYİN</p>
                <p className="text-white/60 text-xs mt-2 font-medium tracking-wide">3 dakikada süreci keşfedin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity / Urgency Above CTAs */}
        <div className="mb-4 text-sm transition-all duration-500 ease-out content-rendered"
          style={{ opacity: mounted ? 1 : 0, transitionDelay: "450ms" }}
        >
          <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: wpData.content }} />
          {remainingSlots > 0 && remainingSlots <= 2 && (
            <p className="text-orange-500 font-bold mt-1 animate-pulse">
              ⚠️ Bu ay için son {remainingSlots} yer!
            </p>
          )}
        </div>

        {/* Action Buttons & Micro-assurance */}
        <div className="flex flex-col items-center w-full transition-all duration-500 ease-out" style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(15px)", transitionDelay: "500ms" }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <MagneticWrapper strength={0.25}>
              <button
                onClick={handleCTAClick}
                className="w-full sm:w-auto bg-gradient-gold text-primary-foreground font-heading font-black text-lg md:text-xl px-8 py-5 rounded-xl transition-all shadow-lg shadow-gold/20 cursor-pointer inline-flex justify-center items-center group relative overflow-hidden"
              >
                <span className="hidden sm:inline">Ücretsiz Strateji Görüşmesi Al →</span>
                <span className="sm:hidden">Ücretsiz Görüşme Al →</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </MagneticWrapper>
            
            <MagneticWrapper strength={0.15}>
              <Link
                href="/portfolyo"
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-foreground font-heading font-bold text-lg md:text-xl px-8 py-4 rounded-xl transition-all hover:bg-white/5 hover:border-white/40 cursor-pointer inline-flex justify-center items-center"
              >
                Portfolyomuzu İncele
              </Link>
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

        {/* Social Proof Trust Band */}
        <div className="mt-8 flex flex-col items-center gap-2 transition-all duration-500 ease-out" style={{ opacity: mounted ? 1 : 0, transitionDelay: "600ms" }}>
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                <Star className="w-4 h-4 text-gold fill-gold" />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            <strong className="text-foreground">+20 High-Ticket Uzman</strong> Tarafından Tercih Edildi
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 inset-x-0 w-full flex flex-col items-center justify-center animate-bounce opacity-70 hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1 md:mb-2 font-medium pl-[0.1em]">Aşağı Kaydırın</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Modern Video Modal Overlay */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/95"
          onClick={() => setShowVideo(false)}
        >
          <div
            ref={videoModalRef}
            className="relative w-full max-w-6xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(232,106,31,0.2)] border border-white/10 mb-6">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/t1edyqgT1UQ?autoplay=1&mute=0&rel=0&start=1&modestbranding=1"
                title="Fennix Medya - Vizyonumuz"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <button
              onClick={() => {
                setShowVideo(false);
                handleCTAClick();
              }}
              className="bg-gradient-gold text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/20 hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              Şimdi Randevu Al →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
