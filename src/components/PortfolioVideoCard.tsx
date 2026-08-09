"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import VideoSchema from "./VideoSchema";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioVideoCard({ project, isVertical }: { project: PortfolioItem, isVertical: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const posterSrc = project.thumbnailSrc || "";

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    // iOS: src ataması ve play() aynı kullanıcı jesti içinde senkron olmalı,
    // yoksa Safari sesli oynatmayı engeller
    v.src = project.videoSrc;
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <div className={`group bg-card/60 backdrop-blur-sm border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl flex flex-col ${isVertical ? 'md:row-span-2' : 'md:col-span-2 lg:col-span-2'}`}>
      <VideoSchema
        name={project.title}
        description={project.description}
        thumbnailUrl={`https://fennixmedya.com${posterSrc}`}
        contentUrl={`https://fennixmedya.com${project.videoSrc}`}
        uploadDate={project.uploadDate}
      />
      <div className={`relative bg-black flex-1 ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <video
          ref={videoRef}
          title={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          controls={playing}
          playsInline
          preload="none"
          poster={posterSrc}
          aria-label={project.title}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`${project.title} videosunu oynat`}
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group/play"
          >
            <span className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center border border-white/20 shadow-xl transition-transform duration-300 group-hover/play:scale-110">
              <Play className="w-7 h-7 text-black fill-black ml-1" />
            </span>
          </button>
        )}
      </div>
      <div className="p-6 bg-card">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-bold uppercase tracking-wider">{project.category}</span>
          <span className="text-xs font-medium text-muted-foreground">{project.format}</span>
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
      </div>
    </div>
  );
}
