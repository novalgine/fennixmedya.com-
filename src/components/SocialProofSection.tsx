"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Trophy, Zap, LayoutList, ChevronLeft, ChevronRight, Play, ExternalLink, Users, Star, X } from "lucide-react";

const VideoModal = ({
    isOpen,
    onClose,
    videoSrc,
    name,
}: {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    name: string;
}) => {
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-[fadeSlideIn_0.3s_ease-out]"
            onClick={onClose}
        >
            <div
                className="relative w-[95vw] max-w-[480px] rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-black"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-lg flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                    aria-label="Kapat"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="w-full aspect-[9/16] bg-black flex items-center justify-center relative">
                    <video
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        title={`${name} referans videosu`}
                    >
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                </div>
            </div>
        </div>
    );
};

/* ── Animasyonlu İstatistik Bileşeni ── */
const AnimatedStat = ({ value }: { value: string }) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    // Rakam ve harfleri/sembolleri ayır (örn: "1.5M+" -> num: 1.5, suffix: "M+")
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isFloat = match[1].includes(".");
    const duration = 1000; // 1 saniyede say
    const frames = 30;
    const step = target / frames;
    const intervalTime = duration / frames;
    let current = 0;
    let frameCount = 0;

    const interval = setInterval(() => {
      frameCount++;
      current += step;
      if (frameCount >= frames || current >= target) {
        clearInterval(interval);
        setDisplay(value);
      } else {
        setDisplay((isFloat ? current.toFixed(1) : Math.round(current).toString()) + suffix);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{display}</span>;
};

/* ── Müşteri Verileri ── */
const caseStudies = [
  {
    name: "BOOGOLD Kuyumculuk",
    sector: "Kişiye Özel Altın Takı",
    videoSrc: "/videos/portfolyo/boogold.mp4",
    before: "Bütçesi kısıtlı bir marka algısı yaratan sıradan içerikler.",
    after: "Premium müşteri kitlesinde %40 artış ve marka otoritesinde anında dönüşüm.",
    stat1: { value: "1.5M+", label: "Aylık Organik Erişim" },
    stat2: { value: "3x", label: "DM Satışlarında Artış" },
  },
  {
    name: "Mukaddes Gün",
    sector: "Storytelling Uzmanı",
    videoSrc: "/videos/referans/mukaddes.mp4",
    before: "Düzensiz ve amatör hissettiren kişisel marka içerikleri.",
    after: "Sinematik içerik kalitesi ve hikâye anlatımıyla güçlü bir kişisel marka konumlandırması.",
    stat1: { value: "320K+", label: "Aylık Organik Erişim" },
    stat2: { value: "2.5x", label: "Takipçi Artışı" },
  },
  {
    name: "Melis Ulaş",
    sector: "Duygusal Beslenme Uzmanı · Wellness",
    videoSrc: "/videos/portfolyo/melis.mp4",
    before: "Telefonla çekilmiş amatör içerikler.",
    after: "Görsel hikaye anlatıcılığı ve otoriteyi birleştiren otantik içerikler.",
    stat1: { value: "180K+", label: "Aylık Organik Erişim" },
    stat2: { value: "2x", label: "Danışan Artışı" },
  },
  {
    name: "Ayzıt Umay",
    sector: "Diş Hekimi ve Ressam",
    videoSrc: "/videos/portfolyo/umay.mp4",
    before: "Sıradan klinik görselleri ve düşük etkileşim.",
    after: "Sanatsal ve güvenilir bir kişisel marka oluşumu.",
    stat1: { value: "250K+", label: "Aylık Organik Erişim" },
    stat2: { value: "1.8x", label: "Hasta Artışı" },
  },
  {
    name: "Afife",
    sector: "Tiyatro Oyunu",
    videoSrc: "/videos/portfolyo/afife.mp4",
    before: "Standart afiş ve düz tanıtım paylaşımları.",
    after: "Sinematik ve otantik içeriklerle yüksek bilet dönüşümü.",
    stat1: { value: "420K+", label: "Aylık Organik Erişim" },
    stat2: { value: "2x", label: "Bilet Satışı Artışı" },
  },
  {
    name: "Vaveyla Home",
    sector: "Ev Tekstili",
    videoSrc: "/videos/portfolyo/vaveyla.mp4",
    before: "Sıradan ürün çekimleri ve amatör içerikler.",
    after: "Kaliteli reklam içerikleriyle artan satışlar ve premium marka algısı.",
    stat1: { value: "500K+", label: "Aylık Organik Erişim" },
    stat2: { value: "3x", label: "Satış Artışı" },
  },
  {
    name: "Vet House",
    sector: "Veteriner Kliniği",
    videoSrc: "/videos/portfolyo/vethouse.mp4",
    before: "Klasik klinik paylaşımları.",
    after: "Güven veren uzman videolarıyla yüksek hasta dönüşümü.",
    stat1: { value: "200K+", label: "Aylık Organik Erişim" },
    stat2: { value: "2.5x", label: "Randevu Artışı" },
  },
];

const profiles = [
  "Müşteri başına yüksek hizmet bedeli (high-ticket) alan profesyoneller",
  "Kişisel markasını büyütmek ve güven inşa etmek isteyen uzmanlar",
  "Sosyal medyada 'ucuz' görünmekten kaçınıp otorite algısı yaratmak isteyen işletme sahipleri",
  "İçerik üretiminin operasyonel yükünden kurtulup sadece işine odaklanmak isteyenler",
];

const SocialProofSection = () => {
  const [active, setActive] = useState(0);
  const [activeVideo, setActiveVideo] = useState<{ src: string; name: string } | null>(null);
  const [videoPaused, setVideoPaused] = useState(false);
  const touchStartX = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = caseStudies.length;

  /* ── D5: goTo refactor ── */
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

  /* ── D4: Akıllı autoplay — video izlenirken durdur ── */
  useEffect(() => {
    if (videoPaused) {
      if (autoRef.current) clearInterval(autoRef.current);
      return;
    }
    autoRef.current = setInterval(() => setActive((p) => (p + 1) % total), 8000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [total, videoPaused]);

  /* ── Modal Açma ── */
  const activateEmbed = useCallback((index: number) => {
    const study = caseStudies[index];
    setActiveVideo({ src: study.videoSrc, name: study.name });
    setVideoPaused(true); 
  }, []);

  const closeModal = useCallback(() => {
    setActiveVideo(null);
    setVideoPaused(false);
  }, []);

  /* ── Swipe (mobil) ── */
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      go(diff > 0 ? 1 : -1);
      setVideoPaused(false); // Swipe ile geçince autoplay devam
    }
  };

  const study = caseStudies[active];

  return (
    <section className="section-spacing bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-6xl font-black text-center mb-16 tracking-tight">
          Fennix Medya ile <span className="text-gradient-gold">Otoritesini İnşa Eden Markalar</span>
        </h2>

        {/* ── D6: ARIA Carousel Container ── */}
        <div
          className="relative mb-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Müşteri vaka analizleri"
        >
          {/* Vaka Analizi Badge */}
          <div className="absolute top-0 right-0 bg-gradient-gold text-black font-black text-xs px-4 py-1 rounded-bl-xl z-20 shadow-lg">
            VAKA ANALİZİ · {active + 1}/{total}
          </div>

          {/* ── Animasyonlu Card Wrapper ── */}
          <div
            className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-700 hover:bg-card/70 hover:shadow-[0_0_60px_rgba(232,106,31,0.15)] hover:border-primary/30 group/card min-h-[500px] md:h-[500px] lg:h-[600px]"
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
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  preload="metadata"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-0" />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full h-full">
                  {/* Müşteri ismi overlay */}
                  <div className="relative z-10 flex flex-col items-center gap-5">
                    <button
                      onClick={() => activateEmbed(active)}
                      className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/50 shadow-[0_0_30px_rgba(232,106,31,0.5)] hover:scale-110 hover:bg-primary/30 transition-all duration-300 cursor-pointer group"
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <div className="relative z-10">
                  <Star className="w-8 h-8 text-primary mb-3 fill-primary/20" />
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-gradient-gold mb-1">
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

                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 shadow-[0_0_15px_rgba(16,185,129,0.02)] transition-colors group-hover/card:bg-emerald-500/10 group-hover/card:border-emerald-500/30">
                      <p className="text-emerald-400 text-sm font-bold uppercase mb-1 flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-emerald-400" />
                        Sonuç (Fennix Medya İle)
                      </p>
                      <p className="text-foreground font-bold text-lg leading-tight mt-1">{study.after}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-border/50 relative">
                    <div>
                      <p className="text-4xl font-heading font-black text-white mb-1"><AnimatedStat value={study.stat1.value} /></p>
                      <p className="text-muted-foreground text-sm font-medium">{study.stat1.label}</p>
                    </div>
                    <div>
                      <p className="text-4xl font-heading font-black text-primary mb-1"><AnimatedStat value={study.stat2.value} /></p>
                      <p className="text-muted-foreground text-sm font-medium">{study.stat2.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── D7: Navigation — Masaüstünde yanlarda, mobilde altta ── */}
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
            {/* Mobil sol ok */}
            <button
              onClick={() => { go(-1); setVideoPaused(false); }}
              aria-label="Önceki müşteri"
              className="md:hidden w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 dark:border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-foreground dark:text-white" />
            </button>

            {/* Dot Indicators */}
            {caseStudies.map((cs, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setVideoPaused(false); }}
                aria-label={`${cs.name} (${i + 1}/${total})`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${i === active ? "w-10 bg-primary" : "w-3 bg-border hover:bg-primary/40"}`}
              />
            ))}

            {/* Mobil sağ ok */}
            <button
              onClick={() => { go(1); setVideoPaused(false); }}
              aria-label="Sonraki müşteri"
              className="md:hidden w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 dark:border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-foreground dark:text-white" />
            </button>
          </div>
        </div>

        {/* Target Audience Profiles */}
        <div className="bg-card/40 border border-border/50 rounded-2xl p-10">
          <h3 className="font-heading text-2xl font-black mb-8 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" />
            Kimlerle Çalışıyoruz?
          </h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {profiles.map((p, i) => (
              <li key={i} className="flex items-start gap-4 text-foreground/80 text-lg md:text-xl font-medium bg-background/50 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-gold mt-2 shrink-0 shadow-[0_0_10px_rgba(232,106,31,0.5)]" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center mt-12 text-primary font-black text-xl flex items-center justify-center gap-2 text-balance">
          <Zap className="w-6 h-6 fill-primary shrink-0" />
          Ortak Nokta: Tüm referanslarımız pazarında fiyatla değil, otoritesiyle rekabet eden liderlerdir.
        </p>
      </div>

      <VideoModal
          isOpen={activeVideo !== null}
          onClose={closeModal}
          videoSrc={activeVideo?.src ?? ""}
          name={activeVideo?.name ?? ""}
      />
    </section>
  );
};

export default SocialProofSection;
