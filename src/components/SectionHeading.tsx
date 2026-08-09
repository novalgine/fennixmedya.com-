import { cn } from "@/lib/utils";
import WordReveal from "@/components/WordReveal";

/**
 * Tek bölüm başlığı spec'i:
 * eyebrow (altın, uppercase) + h2 (solid foreground) + alt metin.
 * text-gradient-gold bölüm başlıklarında YASAK — vurguyu eyebrow taşır.
 */
export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
  animateTitle = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  /** Fold-altı bölümlerde kelime kelime giriş — title string olmalı */
  animateTitle?: boolean;
}) {
  return (
    <div className={cn("mb-14", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
        {animateTitle && typeof title === "string" ? <WordReveal text={title} /> : title}
      </h2>
      {sub && (
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
