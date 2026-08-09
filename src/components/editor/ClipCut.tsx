/**
 * Bölümler arası "kesme" işareti — timeline'daki bir cut noktası.
 * Sol tarafta track etiketi + klip adı + dekoratif in/out timecode.
 */
export default function ClipCut({
  track = "V1",
  name,
  tc,
}: {
  track?: "V1" | "A1";
  name: string;
  tc: string;
}) {
  return (
    <div className="relative w-full border-t border-dashed border-border/60" aria-hidden>
      <div className="container-page">
        <div className="flex items-center gap-3 py-2">
          <span
            className={`font-mono text-[10px] px-1.5 py-0.5 rounded-sm border leading-none ${
              track === "A1"
                ? "text-emerald-500 border-emerald-800/60 bg-emerald-950/40"
                : "text-primary border-primary/40 bg-primary/10"
            }`}
          >
            {track}
          </span>
          <span className="font-heading font-semibold text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {name}
          </span>
          <span className="ml-auto font-mono text-[10px] tracking-widest text-muted-foreground/50 tabular-nums hidden sm:block">
            {tc}
          </span>
        </div>
      </div>
    </div>
  );
}
