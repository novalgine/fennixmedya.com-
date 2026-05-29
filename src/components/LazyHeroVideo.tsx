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
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // trigger right before it comes into viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [inView]);

  return (
    <video
      ref={videoRef}
      src={inView ? src : ""}
      className={className}
      controls
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      title={title}
    />
  );
}
