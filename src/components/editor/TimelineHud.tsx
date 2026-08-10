"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Kurgu masası HUD'u: sayfanın altında sabit bir NLE timeline'ı.
 *
 * Tasarım notları:
 * - Klip genişlikleri bölümlerin GERÇEK yüksekliğiyle orantılı → çubuk sayfanın haritası
 * - Aktif klibin içi, o bölümde ne kadar ilerlediğine göre dolar
 * - Scroll sırasında React state GÜNCELLENMEZ; timecode/playhead/dolgu doğrudan DOM'a
 *   yazılır. (Kare başına yeniden render, kaydırmayı tökezletiyordu.)
 */
export type TimelineClip = { id: string; label: string; track: "V1" | "A1" };

const FPS = 25;
const TOTAL_SECONDS = 100;

function toTimecode(progress: number): string {
  const total = Math.round(progress * TOTAL_SECONDS * FPS);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(Math.floor(total / (FPS * 3600)))}:${p(Math.floor(total / (FPS * 60)) % 60)}:${p(
    Math.floor(total / FPS) % 60
  )}:${p(total % FPS)}`;
}

export default function TimelineHud({ clips }: { clips: TimelineClip[] }) {
  const tcRef = useRef<HTMLSpanElement>(null);
  const tcMobileRef = useRef<HTMLSpanElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);
  const clipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const fillMobileRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rangesRef = useRef<{ start: number; end: number }[]>([]);
  const rafRef = useRef(0);
  const activeRef = useRef(-1);

  // Bölüm yükseklikleriyle orantılı klip genişlikleri
  const [widths, setWidths] = useState<number[]>(() => clips.map(() => 100 / clips.length));

  useLayoutEffect(() => {
    const measure = () => {
      const docH = document.documentElement.scrollHeight;
      const tops = clips.map((c) => {
        const el = document.getElementById(c.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });
      const ranges = tops.map((t, i) => ({
        start: t,
        end: i < tops.length - 1 ? tops[i + 1] : docH,
      }));
      rangesRef.current = ranges;
      const span = ranges[ranges.length - 1].end - ranges[0].start || 1;
      setWidths(ranges.map((r) => ((r.end - r.start) / span) * 100));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 800); // görseller/videolar yerleşince tekrar ölç
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [clips]);

  useEffect(() => {
    const update = () => {
      rafRef.current = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

      const tc = toTimecode(progress);
      if (tcRef.current) tcRef.current.textContent = tc;
      if (tcMobileRef.current) tcMobileRef.current.textContent = tc;
      if (playheadRef.current) playheadRef.current.style.left = `${progress * 100}%`;

      // Aktif klip + içindeki ilerleme
      const mid = y + window.innerHeight * 0.45;
      const ranges = rangesRef.current;
      let next = -1;
      for (let i = 0; i < ranges.length; i++) {
        if (mid >= ranges[i].start && mid < ranges[i].end) {
          next = i;
          break;
        }
      }
      if (next === -1) next = mid < (ranges[0]?.start ?? 0) ? 0 : ranges.length - 1;

      if (next !== activeRef.current) {
        clipRefs.current.forEach((el, i) => {
          if (!el) return;
          el.dataset.active = i === next ? "true" : "false";
          if (i !== next) {
            const w = i < next ? "100%" : "0%";
            if (fillRefs.current[i]) fillRefs.current[i]!.style.width = w;
            if (fillMobileRefs.current[i]) fillMobileRefs.current[i]!.style.width = w;
          }
        });
        activeRef.current = next;
      }
      const r = ranges[next];
      if (r) {
        const local = Math.min(1, Math.max(0, (mid - r.start) / (r.end - r.start || 1)));
        const w = `${local * 100}%`;
        if (fillRefs.current[next]) fillRefs.current[next]!.style.width = w;
        if (fillMobileRefs.current[next]) fillMobileRefs.current[next]!.style.width = w;
      }
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [clips, widths]);

  const jump = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] border-t border-border/60 bg-background/92 backdrop-blur-md">
      {/* Mobil: timecode + mini klip çubuğu */}
      <div className="md:hidden px-4 py-2">
        <div className="flex items-center justify-between mb-1.5">
          <span ref={tcMobileRef} className="font-mono text-[10px] tracking-widest text-primary tabular-nums">
            00:00:00:00
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-danger" aria-hidden /> KURGU
          </span>
        </div>
        <div className="flex gap-px h-1.5" aria-hidden>
          {clips.map((c, i) => (
            <span
              key={c.id}
              style={{ width: `${widths[i]}%` }}
              className={`relative overflow-hidden rounded-sm ${c.track === "A1" ? "bg-emerald-900/60" : "bg-border/70"}`}
            >
              <span
                ref={(el) => { fillMobileRefs.current[i] = el; }}
                className="absolute inset-y-0 left-0 w-0 bg-primary"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Masaüstü: tam timeline */}
      <div className="hidden md:flex items-stretch h-14">
        <div className="flex items-center px-5 border-r border-border/60 shrink-0">
          <span ref={tcRef} className="font-mono text-sm tracking-widest text-primary tabular-nums">
            00:00:00:00
          </span>
        </div>

        <div className="relative flex-1 flex items-stretch gap-px px-px py-2">
          {clips.map((clip, i) => (
            <button
              key={clip.id}
              ref={(el) => { clipRefs.current[i] = el; }}
              data-active="false"
              onClick={() => jump(clip.id)}
              style={{ width: `${widths[i]}%` }}
              className={`group relative min-w-0 rounded-sm border px-2 text-left overflow-hidden transition-colors cursor-pointer
                data-[active=true]:border-primary/70
                ${clip.track === "A1"
                  ? "bg-emerald-950/40 border-emerald-800/40 hover:border-emerald-600/50"
                  : "bg-card border-border/60 hover:border-primary/40"}`}
              aria-label={`${clip.label} bölümüne git`}
            >
              {/* Bölüm içi ilerleme dolgusu */}
              <span
                ref={(el) => { fillRefs.current[i] = el; }}
                className="absolute inset-y-0 left-0 w-0 bg-primary/12 pointer-events-none"
                aria-hidden
              />
              <span
                className={`relative block font-mono text-[9px] leading-none mt-1 ${
                  clip.track === "A1" ? "text-emerald-500/80" : "text-muted-foreground/70"
                }`}
              >
                {clip.track}
              </span>
              <span className="relative block font-heading font-semibold text-[11px] uppercase tracking-wider truncate mt-0.5 text-foreground/70 group-data-[active=true]:text-primary">
                {clip.label}
              </span>
            </button>
          ))}

          <div
            ref={playheadRef}
            className="absolute top-0 bottom-0 w-0.5 bg-danger pointer-events-none"
            style={{ left: "0%" }}
            aria-hidden
          >
            <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-danger" />
          </div>
        </div>

        <div className="flex items-center gap-2 px-5 border-l border-border/60 shrink-0">
          <span className="w-2 h-2 rounded-full bg-danger" aria-hidden />
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
            KURGU · FENNIX MEDYA
          </span>
        </div>
      </div>
    </div>
  );
}
