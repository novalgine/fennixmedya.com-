"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import LiveCapacityHybrid from "@/components/LiveCapacityHybrid";
import dynamic from "next/dynamic";

const FunnelWizardModal = dynamic(() => import("@/components/FunnelWizardModal"), {
  ssr: false,
});

const navLinks = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Sosyal Medya Video", href: "/hizmetler/sosyal-medya-video" },
      { label: "Kurumsal Tanıtım Filmi", href: "/hizmetler/kurumsal-tanitim-filmi" },
      { label: "YouTube İçerik Üretimi", href: "/hizmetler/youtube-icerik-uretimi" },
      { label: "Anahtar Teslim Stüdyo", href: "/hizmetler/anahtar-teslim-studyo" },
    ],
  },
  { label: "Portfolyo", href: "/portfolyo" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

export default function SiteHeader() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {isWizardOpen && <FunnelWizardModal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />}

      <header className="fixed top-0 left-0 w-full z-[60] bg-background/80 backdrop-blur-md border-b border-primary/20 py-2 sm:py-3 px-3 sm:px-4 md:px-8 transition-colors duration-300 transform-gpu">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <Link href="/" className="font-heading text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase flex items-center gap-1.5 sm:gap-2 shrink-0">
            <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24V8H22V10H14V14H20V16H14V24H12Z" fill="url(#paint0_linear_header)" />
              <defs>
                <linearGradient id="paint0_linear_header" x1="12" y1="8" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4A44A" />
                  <stop offset="1" stopColor="#E86A1F" />
                </linearGradient>
              </defs>
            </svg>
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent hidden sm:inline">Fennix Medya</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl p-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LiveCapacityHybrid />
            </div>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 sm:p-2.5 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 transition-all shadow-sm"
              aria-label="Menüyü aç"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          >
                            {child.href === "/hizmetler/anahtar-teslim-studyo" ? "Stüdyo Kurulumu" : child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWizardOpen(true);
                }}
                className="mx-4 mt-2 bg-gradient-gold text-primary-foreground font-heading font-bold text-sm py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-gold/20"
              >
                Ücretsiz Strateji Görüşmesi Al →
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
