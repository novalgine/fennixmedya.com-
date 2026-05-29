"use client";
import { useState, useCallback, useEffect } from "react";
import { Quote, Play, X } from "lucide-react";
import { testimonialsData, Testimonial } from "@/data/testimonials";

/* ── Video Modal ── */
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
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-lg flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                    aria-label="Kapat"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* HTML5 Native Video Player */}
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

/* ── Ana Bileşen ── */
const TestimonialsStrip = () => {
    const [activeVideo, setActiveVideo] = useState<{ src: string; name: string } | null>(null);

    const openModal = useCallback((src: string, name: string) => {
        setActiveVideo({ src, name });
    }, []);

    const closeModal = useCallback(() => setActiveVideo(null), []);

    return (
        <>
            <section className="section-spacing bg-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
                        Müşterilerimiz <span className="text-gradient-gold">Ne Diyor?</span>
                    </h2>
                    <p className="text-center text-muted-foreground text-base md:text-lg mb-12 max-w-2xl mx-auto">
                        Gerçek müşterilerimizden, kendi ağızlarından referans videoları.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonialsData.map((t, i) => (
                            <div
                                key={i}
                                className="group bg-card/60 backdrop-blur-sm border border-border/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-5 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(232,106,31,0.1)] transition-all duration-500"
                            >
                                {/* Quote */}
                                <div className="flex items-start gap-3">
                                    <Quote className="w-6 h-6 text-primary/40 shrink-0 mt-1 rotate-180" />
                                    <p className="text-foreground/80 text-sm md:text-base font-medium italic leading-relaxed">
                                        "{t.quote}"
                                    </p>
                                </div>

                                {/* Client Info + Play */}
                                <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-4">
                                    <div className="flex items-center gap-3">
                                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-border/50 object-cover shrink-0" />
                                        <div>
                                            <p className="font-heading font-black text-base text-foreground">{t.name}</p>
                                            <p className="text-muted-foreground text-xs font-medium italic mt-1">{t.title}</p>
                                        </div>
                                    </div>
                                    {t.videoSrc ? (
                                        <button
                                            onClick={() => openModal(t.videoSrc, t.name)}
                                            className="flex shrink-0 items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-all duration-300 border border-primary/20 hover:scale-110 shadow-lg cursor-pointer group-hover:bg-primary/20"
                                            aria-label={`${t.name} referans videosunu izle`}
                                            title="Videoyu İzle"
                                        >
                                            <Play className="w-4 h-4 ml-0.5 fill-current" />
                                        </button>
                                    ) : (
                                        <div className="w-10 h-10 shrink-0"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <VideoModal
                isOpen={activeVideo !== null}
                onClose={closeModal}
                videoSrc={activeVideo?.src ?? ""}
                name={activeVideo?.name ?? ""}
            />
        </>
    );
};

export default TestimonialsStrip;

