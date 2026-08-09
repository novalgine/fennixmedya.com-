"use client";
import { useCallback, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronsLeftRight, Smartphone, Clapperboard } from "lucide-react";

/**
 * Önce/sonra kaydırmalı karşılaştırma.
 * Pointer sürüklemesi + görünmez range input (klavye/ekran okuyucu erişimi).
 */
export default function ImageComparison({
  before,
  after,
  beforeLabel = "Telefon — Amatör",
  afterLabel = "Sinematik",
  alt,
}: {
  before: StaticImageData;
  after: StaticImageData;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10 has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-primary select-none touch-pan-y cursor-ew-resize"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Alt katman: sinematik (sonuç) */}
      <Image
        src={after}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 720px"
        className="object-cover"
        placeholder="blur"
        draggable={false}
      />
      {/* Üst katman: amatör — clip ile soldan pos% görünür */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={before}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover"
          placeholder="blur"
          draggable={false}
        />
      </div>

      {/* Etiketler */}
      <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-danger/95 text-white font-bold px-3 py-1.5 rounded-lg text-xs md:text-sm shadow-lg border border-danger/50 pointer-events-none">
        <Smartphone className="w-3.5 h-3.5" aria-hidden /> {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 bg-emerald-600/95 text-white font-bold px-3 py-1.5 rounded-lg text-xs md:text-sm shadow-lg border border-emerald-500/50 pointer-events-none">
        <Clapperboard className="w-3.5 h-3.5" aria-hidden /> {afterLabel}
      </span>

      {/* Ayırıcı çizgi + tutamaç */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-gradient-gold pointer-events-none"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-gold shadow-lg border border-white/30 flex items-center justify-center">
          <ChevronsLeftRight className="w-5 h-5 text-black" />
        </span>
      </div>

      {/* Erişilebilir kontrol: görünmez range tüm alanı kaplar */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={alt}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}
