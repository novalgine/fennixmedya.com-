"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/**
 * Setten kareler — kontakt föy duvarı.
 * Küçük thumbnail'lar (next/image ile boyutlandırılır), tıklayınca büyür.
 */
export default function PhotoWall({ count }: { count: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const photos = Array.from({ length: count }, (_, i) => `set-${String(i + 1).padStart(2, "0")}`);

  return (
    <>
      <div className="flex items-center gap-3 container-page mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
          Medya Havuzu
        </span>
        <span className="h-px flex-1 bg-border/50" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50">
          {count} kare · setten
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-1 px-1">
        {photos.map((p, i) => (
          <button
            key={p}
            onClick={() => setOpen(i)}
            className="group relative aspect-square overflow-hidden border border-white/5 hover:border-primary/50 hover:z-10 transition-all cursor-zoom-in"
            aria-label={`Set fotoğrafı ${i + 1} — büyüt`}
          >
            <Image
              src={`/foto/${p}.jpg`}
              alt=""
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 20vw, (max-width: 1024px) 14vw, 11vw"
              className="object-cover grayscale-[0.35] brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl w-auto bg-transparent border-0 shadow-none p-0">
          <DialogTitle className="sr-only">Setten bir kare</DialogTitle>
          {open !== null && (
            <Image
              src={`/foto/${photos[open]}.jpg`}
              alt="Fennix Medya çekim setinden bir kare"
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 92vw, 720px"
              className="w-auto h-auto max-h-[85dvh] max-w-full rounded-xl border border-white/10 object-contain mx-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
