"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import VideoLightbox from "@/components/VideoLightbox";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/**
 * SAHNE 02 — KANIT: gerçek işlerin yatay film şeridi.
 * Autoplay yok — posterler; tık VideoLightbox açar. Son kart /portfolyo.
 */
export default function FilmStripWorkRow() {
  const [active, setActive] = useState<{ src: string; title: string; format: string } | null>(null);

  return (
    <section id="portfolyo" className="section-spacing bg-background overflow-hidden">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Sahne 02 — Kanıt"
            title="Teslim Edilen İşler"
            sub="Konuşmuyoruz, gösteriyoruz. Her kare gerçek bir müşteri projesinden."
            align="left"
          />
        </Reveal>
      </div>

      <Reveal>
        <div className="film-strip-frame">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 px-5 md:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
            style={{ scrollbarWidth: "thin" }}
          >
            {portfolioData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive({ src: item.videoSrc, title: item.title, format: item.format })}
                className={`group relative shrink-0 snap-start h-[340px] md:h-[420px] ${
                  item.format === "Yatay" ? "aspect-video" : "aspect-[9/16]"
                } rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-black`}
                aria-label={`${item.title} videosunu izle`}
              >
                {item.thumbnailSrc && (
                  <Image
                    src={item.thumbnailSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 60vw, 260px"
                    className="object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" aria-hidden />
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <span className="block font-heading font-bold text-lg uppercase tracking-wide text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="block text-[11px] font-medium uppercase tracking-widest text-white/60 mt-1">
                    {item.category}
                  </span>
                </span>
              </button>
            ))}

            {/* Son kart: tüm portfolyo */}
            <Link
              href="/portfolyo"
              className="group relative shrink-0 snap-start h-[340px] md:h-[420px] aspect-[9/16] rounded-xl overflow-hidden border border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-center px-6"
            >
              <span className="font-heading font-bold text-2xl uppercase text-foreground">
                Tümünü
                <br />
                Gör
              </span>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>

      <VideoLightbox
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
        src={active?.src ?? ""}
        title={`${active?.title ?? ""} — portfolyo videosu`}
        aspect={active?.format === "Yatay" ? "video" : "vertical"}
      />
    </section>
  );
}
