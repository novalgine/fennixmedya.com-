"use client";

import { useEffect, useRef, useState } from "react";

interface LazyHeroVideoProps {
  src: string;
  poster: string;
  title: string;
  className?: string;
}

export default function LazyHeroVideo({ src, poster, title, className = "w-full h-full object-cover" }: LazyHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPlay(true);
          observer.disconnect();
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
  }, []);

  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [shouldPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      title={title}
    />
  );
}

