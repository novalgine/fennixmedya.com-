"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import VideoLightbox from "@/components/VideoLightbox";
import { caseStudies as caseItems } from "@/data/portfolio";
import { Trophy, Zap, LayoutList, ChevronLeft, ChevronRight, Play, ExternalLink, Users, Star } from "lucide-react";

const caseStudies = caseItems.map((item) => ({
  name: item.title,
  sector: item.caseStudy!.sector,
  videoSrc: item.videoSrc,
  poster: item.thumbnailSrc,
  before: item.caseStudy!.before,
  after: item.caseStudy!.after,
}));

export default function SocialProofCarousel() {
  const [active, setActive] = useState(0);
  const [activeVideo, setActiveVideo] = useState<{ src: string; name: string } | null>(null);
  const [videoPaused, setVideoPaused] = useState(false);
  const touchStartX = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = caseStudies.length;

  const resetAutoplay = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (!videoPaused) {
      autoRef.current = setInterval(() => setActive((p) => (p + 1) % total), 8000);
    }
  }, [total, videoPaused]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setActive((prev) => (prev + dir + total) % total);
      resetAutoplay();
    },
    [total, resetAutoplay],
  );

  const goTo = useCallback(
    (index: number) => {
      setActive(index);
      resetAutoplay();
    },
    [resetAutoplay],
  );

  useEffect(() => {
    if (videoPaused) {
      if (autoRef.current) clearInterval(autoRef.current);
      return;
    }
    autoRef.current = setInterval(() => setActive((p) => (p + 1) % total), 8000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [total, videoPaused]);

  const activateEmbed = useCallback((index: number) => {
    const study = caseStudies[index];
    setActiveVideo({ src: study.videoSrc, name: study.name });
    setVideoPaused(true); 
  }, []);

  const closeModal = useCallback(() => {
    setActiveVideo(null);
    setVideoPaused(false);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      go(diff > 0 ? 1 : -1);
      setVideoPaused(false);
    }
  };

  const study = caseStudies[active];

  return (
    <>
        <div
          className="relative mb-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Müşteri vaka analizleri"
        >
          <div className="absolute top-0 right-0 bg-gradient-gold text-black font-bold text-xs px-4 py-1 rounded-bl-xl z-20 shadow-lg">
            VAKA ANALİZİ · {active + 1}/{total}
          </div>

          {/* ── Animasyonlu Card Wrapper ── */}
          <div
            className="card-surface overflow-hidden shadow-2xl relative transition-all duration-700 hover:bg-card/70 hover:border-emerald-500/30 group/card min-h-[500px] md:h-[500px] lg:h-[600px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="group"
            aria-roledescription="slide"
            aria-label={`${active + 1} / ${total}: ${study.name}`}
          >
            <div
              key={active}
              className="grid md:grid-cols-2 gap-0 animate-[fadeSlideIn_0.6s_ease-out] h-full"
            >
              {/* Progress Bar (Autoplay Progress) */}
              <div
                className="absolute top-0 left-0 h-1 bg-gradient-gold origin-left z-30 animate-[progressBar_8s_linear]"
                style={{ width: "100%", animationPlayState: videoPaused ? "paused" : "running" }}
              />
              
              {/* Sol: Dikey Video Alanı (Sabit Alan) */}
              <div className="relative bg-[#0A0A0A] flex items-center justify-center overflow-hidden h-[450px] md:h-full">
                <video
                  src={study.videoSrc}
                  poster={study.poster}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  title={`${study.name} arka plan videosu`}
                  aria-label={`${study.name} arka plan videosu`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-0" />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full h-full">
                  {/* Müşteri ismi overlay */}
                  <div className="relative z-10 flex flex-col items-center gap-5">
                    <button
                      onClick={() => activateEmbed(active)}
                      className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/50 hover:scale-110 hover:bg-primary/30 transition-all duration-300 cursor-pointer group"
                      aria-label={`${study.name} videosunu oynat`}
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                    <p className="text-white font-bold text-sm tracking-wide uppercase drop-shadow-lg">
                      Videoyu İzleyin
                    </p>
                  </div>
                </div>
              </div>

              {/* Sağ: Bilgi Paneli */}
              <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-card to-background relative overflow-hidden h-full">
                {/* İnce arkaplan ışıltısı */}

                <div className="relative z-10">
                  <Star className="w-8 h-8 text-primary mb-3 fill-primary/20" />
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {study.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-5">
                    {study.sector}
                  </p>

                  <div className="space-y-4 mb-6 mt-1">
                    <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4 transition-colors group-hover/card:bg-red-500/10">
                      <p className="text-red-400 text-sm font-bold uppercase mb-1">Durum Öncesi (Telefon Çekimi)</p>
                      <p className="text-foreground/70 font-medium">{study.before}</p>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 transition-colors group-hover/card:bg-emerald-500/10 group-hover/card:border-emerald-500/30">
                      <p className="text-emerald-400 text-sm font-bold uppercase mb-1 flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-emerald-400" />
                        Sonuç (Fennix Medya İle)
                      </p>
                      <p className="text-foreground font-bold text-lg leading-tight mt-1">{study.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Navigation ── */}
          <button
            onClick={() => { go(-1); setVideoPaused(false); }}
            aria-label="Önceki müşteri"
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 dark:border-white/10 items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-foreground dark:text-white" />
          </button>
          <button
            onClick={() => { go(1); setVideoPaused(false); }}
            aria-label="Sonraki müşteri"
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 dark:border-white/10 items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-foreground dark:text-white" />
          </button>

          {/* Dot + Mobil Ok Navigasyonu */}
          <div className="flex justify-center items-center gap-3 mt-6" aria-live="polite">
            <button
              onClick={() => { go(-1); setVideoPaused(false); }}
              aria-label="Önceki müşteri"
              className="md:hidden w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 dark:border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-foreground dark:text-white" />
            </button>

            {caseStudies.map((cs, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setVideoPaused(false); }}
                aria-label={`${cs.name} (${i + 1}/${total})`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${i === active ? "w-10 bg-primary" : "w-3 bg-border hover:bg-primary/40"}`}
              />
            ))}

            <button
              onClick={() => { go(1); setVideoPaused(false); }}
              aria-label="Sonraki müşteri"
              className="md:hidden w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 dark:border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-foreground dark:text-white" />
            </button>
          </div>
        </div>

      <VideoLightbox
          open={activeVideo !== null}
          onOpenChange={(o) => !o && setActiveVideo(null)}
          src={activeVideo?.src ?? ""}
          title={`${activeVideo?.name ?? ""} referans videosu`}
      />
    </>
  );
}
