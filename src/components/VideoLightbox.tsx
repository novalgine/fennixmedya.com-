"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type VideoLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Ekran okuyucular için erişilebilir başlık */
  title: string;
} & (
  | { src: string; youtubeId?: never }
  | { youtubeId: string; src?: never }
);

export default function VideoLightbox({
  open,
  onOpenChange,
  title,
  src,
  youtubeId,
}: VideoLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={
          youtubeId
            ? "max-w-5xl aspect-video p-0 overflow-hidden bg-black"
            : "max-w-sm aspect-[9/16] max-h-[85dvh] p-0 overflow-hidden bg-black"
        }
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {src ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
