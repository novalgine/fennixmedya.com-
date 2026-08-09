"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Kurgu masası HUD'u: sayfanın altında sabit bir NLE timeline'ı.
 * - Scroll ilerledikçe SMPTE timecode akar (25fps sanal süre)
 * - Bölümler klip blokları olarak görünür; aktif klip vurgulanır, tık = atlama
 * - Playhead çizgisi scroll oranını izler
 * Masaüstünde görünür; mobilde yalnızca ince timecode şeridi.
 */
export type TimelineClip = { id: string; label: string; track: "V1" | "A1" };

const FPS = 25;
const TOTAL_SECONDS = 100; // sanal film süresi — 00:01:40:00

function toTimecode(progress: number): string {
  const totalFrames = Math.round(progress * TOTAL_SECONDS * FPS);
  const f = totalFrames % FPS;
  const s = Math.floor(totalFrames / FPS) % 60;
  const m = Math.floor(totalFrames / (FPS * 60)) % 60;
  const h = Math.floor(totalFrames / (FPS * 3600));
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

export default function TimelineHud({ clips }: { clips: TimelineClip[] }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(clips[0]?.id);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);

      // Aktif klip: viewport ortasını kapsayan bölüm
      const mid = window.innerHeight * 0.5;
      for (const clip of clips) {
        const el = document.getElementById(clip.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          setActiveId(clip.id);
          break;
        }
      }
      raf.current = 0;
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [clips]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] border-t border-border/60 bg-background/90 backdrop-blur-md">
      {/* Mobil: ince timecode şeridi */}
      <div className="flex md:hidden items-center justify-between px-4 py-1.5">
        <span className="font-mono text-[10px] tracking-widest text-primary tabular-nums">
          TC {toTimecode(progress)}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-danger" aria-hidden />
          KURGU · FENNIX
        </span>
      </div>

      {/* Masaüstü: tam timeline */}
      <div className="hidden md:flex items-stretch h-14">
        {/* Timecode */}
        <div className="flex items-center px-5 border-r border-border/60 shrink-0">
          <span className="font-mono text-sm tracking-widest text-primary tabular-nums">
            {toTimecode(progress)}
          </span>
        </div>

        {/* Klip rayı */}
        <div className="relative flex-1 flex items-stretch gap-px px-px py-2">
          {clips.map((clip) => (
            <button
              key={clip.id}
              onClick={() => jump(clip.id)}
              className={`relative flex-1 min-w-0 rounded-sm border px-2 text-left transition-colors cursor-pointer overflow-hidden ${
                activeId === clip.id
                  ? "bg-primary/15 border-primary/60"
                  : clip.track === "A1"
                    ? "bg-emerald-950/40 border-emerald-800/40 hover:border-emerald-600/50"
                    : "bg-card border-border/60 hover:border-primary/40"
              }`}
              aria-label={`${clip.label} bölümüne git`}
              aria-current={activeId === clip.id ? "true" : undefined}
            >
              <span className={`block font-mono text-[9px] leading-none mt-1 ${clip.track === "A1" ? "text-emerald-500/80" : "text-muted-foreground/70"}`}>
                {clip.track}
              </span>
              <span className={`block font-heading font-semibold text-[11px] uppercase tracking-wider truncate mt-0.5 ${
                activeId === clip.id ? "text-primary" : "text-foreground/70"
              }`}>
                {clip.label}
              </span>
            </button>
          ))}
          {/* Playhead */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-danger pointer-events-none transition-[left] duration-150 ease-linear"
            style={{ left: `${progress * 100}%` }}
            aria-hidden
          >
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-danger" />
          </div>
        </div>

        {/* Sağ etiket */}
        <div className="flex items-center gap-2 px-5 border-l border-border/60 shrink-0">
          <span className="w-2 h-2 rounded-full bg-danger animate-pulse" aria-hidden />
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
            KURGU · FENNIX MEDYA
          </span>
        </div>
      </div>
    </div>
  );
}
