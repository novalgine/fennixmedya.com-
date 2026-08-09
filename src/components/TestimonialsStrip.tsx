"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import VideoLightbox from "@/components/VideoLightbox";
import { Quote, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonialsData, Testimonial } from "@/data/testimonials";

/* ── Video Modal ── */

/* ── Ana Bileşen ── */
const TestimonialsStrip = () => {
    const [activeVideo, setActiveVideo] = useState<{ src: string; name: string } | null>(null);

    const openModal = useCallback((src: string, name: string) => {
        setActiveVideo({ src, name });
    }, []);

    const closeModal = useCallback(() => setActiveVideo(null), []);

    return (
        <>
            <section id="referanslar" className="section-spacing bg-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        eyebrow="Referanslar"
                        title="Müşterilerimiz Ne Diyor?"
                        sub="Gerçek müşterilerimizden, kendi ağızlarından referans videoları."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonialsData.map((t, i) => (
                            <div
                                key={i}
                                className="group card-surface p-6 sm:p-8 flex flex-col justify-between gap-5 hover:border-primary/30 transition-all duration-500"
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
                                        <Image src={t.poster} alt={t.name} width={80} height={80} className="w-10 h-10 rounded-full border border-border/50 object-cover shrink-0" />
                                        <div>
                                            <p className="font-heading font-bold text-base text-foreground">{t.name}</p>
                                            <p className="text-muted-foreground text-xs font-medium italic mt-1">{t.title}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => openModal(t.videoSrc, t.name)}
                                        className="flex shrink-0 items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-all duration-300 border border-primary/20 hover:scale-110 shadow-lg cursor-pointer group-hover:bg-primary/20"
                                        aria-label={`${t.name} referans videosunu izle`}
                                        title="Videoyu İzle"
                                    >
                                        <Play className="w-4 h-4 ml-0.5 fill-current" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <VideoLightbox
                open={activeVideo !== null}
                onOpenChange={(o) => !o && closeModal()}
                src={activeVideo?.src ?? ""}
                title={`${activeVideo?.name ?? ""} referans videosu`}
            />
        </>
    );
};

export default TestimonialsStrip;

