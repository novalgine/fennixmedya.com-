"use client";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { useWizard } from "@/components/WizardContext";

const Footer = () => {
  const { openWizard } = useWizard();
  return (
    <footer className="py-14 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 items-start">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-[0.08em] mb-1">
              Fennix Medya
            </h3>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground/60 mb-3">
              Yapım — Fennix Medya · İstanbul · {new Date().getFullYear()}
            </p>
            <p className="text-base text-muted-foreground font-medium">
              İstanbul Video Prodüksiyon & Reels Ajansı
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 leading-relaxed max-w-xs">
              High-ticket profesyoneller ve markalar için sinematik içerik üretimi, sosyal medya stratejisi ve profesyonel video çekim hizmetleri.
            </p>
            <CtaButton variant="secondary" size="md" onClick={() => openWizard()} className="mt-5 text-sm">
              Ücretsiz Strateji Görüşmesi Al →
            </CtaButton>
          </div>

          {/* Menü & Hizmetler */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">Hizmetler</h4>
            <div className="flex flex-col gap-2">
              <Link href="/hizmetler" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Tüm Hizmetler</Link>
              <Link href="/hizmetler/sosyal-medya-video" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Sosyal Medya Videosu</Link>
              <Link href="/hizmetler/kurumsal-tanitim-filmi" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Kurumsal Tanıtım Filmi</Link>
              <Link href="/hizmetler/youtube-icerik-uretimi" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">YouTube İçerik Üretimi</Link>
              <Link href="/hizmetler/anahtar-teslim-studyo" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Anahtar Teslim Stüdyo</Link>
              <div className="h-px w-8 bg-border/50 my-1"></div>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Blog & Rehberler</Link>
              <Link href="/portfolyo" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Portfolyo</Link>
              <Link href="/hakkimizda" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Hakkımda</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">İletişim</h4>
            <a href="mailto:info@fennixmedya.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              info@fennixmedya.com
            </a>
            <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              İstanbul, Türkiye
            </span>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">Takip Edin</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/fennixmedya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sayfamızı ziyaret edin"
                className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@fennixmedya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube kanalımızı ziyaret edin"
                className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://x.com/semih3445"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) profilimizi ziyaret edin"
                className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/semih-hasanoğlu-abaa28137/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profilimizi ziyaret edin"
                className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Fennix Medya. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/kvkk-aydinlatma-metni"
              className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              KVKK Aydınlatma Metni
            </Link>
            <span className="text-muted-foreground/20">•</span>
            <Link
              href="/gizlilik-politikasi"
              className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <span className="text-muted-foreground/20">•</span>
            <Link
              href="/cerez-politikasi"
              className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
