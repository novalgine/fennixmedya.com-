"use client";

import { useEffect, useRef, useState } from "react";

interface LazyHeroVideoProps {
  src: string;
  poster: string;
  title: string;
  className?: string;
  /**
   * Görünür olunca sessizce oynamaya başlasın mı?
   * Kısa dikey işlerde açık; uzun filmlerde kapalı, çünkü otomatik oynatma
   * ekranın üstünde onlarca megabaytı kullanıcı istemeden indirtiyor.
   * Kapalıyken poster gösterilir ve dosya ancak oynat'a basılınca inmeye başlar.
   */
  autoPlay?: boolean;
}

export default function LazyHeroVideo({
  src,
  poster,
  title,
  className = "w-full h-full object-cover",
  autoPlay = true,
}: LazyHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // @ts-expect-error: saveData deneysel ama yaygın
    if (navigator.connection?.saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Görünürken oynat, ekrandan çıkınca durdur — arka planda decode maliyeti kalmasın
        if (entry.isIntersecting) {
          setShouldPlay(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "200px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      controls
      muted={autoPlay}
      loop={autoPlay}
      playsInline
      preload="none"
      poster={poster}
      title={title}
      aria-label={title}
    />
  );
}
