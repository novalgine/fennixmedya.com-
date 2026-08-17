import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-background pt-header flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 45% 65% / 0.06) 0%, transparent 50%)" }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-heading text-8xl md:text-9xl font-black text-primary mb-6">404</p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Sayfa taşınmış veya hiç var olmamış olabilir. Sizi doğru yere yönlendirelim.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
          >
            <Home className="w-5 h-5" /> Ana Sayfa
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 text-foreground font-heading font-bold px-8 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Hizmetlerimiz <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 text-foreground font-heading font-bold px-8 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Blog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
