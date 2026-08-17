"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[100dvh] bg-background pt-header flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 45% 65% / 0.06) 0%, transparent 50%)" }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Bir şeyler <span className="text-primary">ters gitti</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Beklenmedik bir hata oluştu. Sayfayı yeniden yüklemeyi deneyin — sorun devam
          ederse ana sayfadan devam edebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20 cursor-pointer"
          >
            <RefreshCw className="w-5 h-5" /> Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 text-foreground font-heading font-bold px-8 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all"
          >
            <Home className="w-4 h-4" /> Ana Sayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
