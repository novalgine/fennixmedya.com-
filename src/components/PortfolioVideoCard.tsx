"use client";

import { useEffect, useRef, useState } from "react";
import VideoSchema from "./VideoSchema";

interface PortfolioProject {
  title: string;
  category: string;
  format: string;
  videoSrc: string;
  thumbnailSrc?: string;
}

export default function PortfolioVideoCard({ project, isVertical }: { project: PortfolioProject, isVertical: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const posterSrc = project.thumbnailSrc || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it comes into view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`group bg-card/60 backdrop-blur-sm border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl flex flex-col ${isVertical ? 'md:row-span-2' : 'md:col-span-2 lg:col-span-2'}`}>
      <VideoSchema 
        name={project.title}
        description={`Fennix Medya - ${project.title} (${project.category})`}
        thumbnailUrl={`https://fennixmedya.com${posterSrc}`}
        contentUrl={`https://fennixmedya.com${project.videoSrc}`}
        uploadDate="2026-05-15"
      />
      <div className={`relative bg-black flex-1 ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <video
          ref={videoRef}
          src={isVisible ? project.videoSrc : ""}
          title={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          controls
          autoPlay={isVisible}
          muted
          loop
          playsInline
          preload="none"
          poster={posterSrc}
        />
      </div>
      <div className="p-6 bg-card">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-bold uppercase tracking-wider">{project.category}</span>
          <span className="text-xs font-medium text-muted-foreground">{project.format}</span>
        </div>
        <h3 className="font-heading text-xl font-black text-foreground">{project.title}</h3>
      </div>
    </div>
  );
}
