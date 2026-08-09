"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useWizard } from "@/components/WizardContext";
import CtaButton from "@/components/CtaButton";

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
  const { openWizard } = useWizard();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);

  const closeDesktopServices = (restoreFocus = false) => {
    setIsDesktopServicesOpen(false);
    if (restoreFocus) servicesTriggerRef.current?.focus();
  };

  return (
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
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === "Escape" && isDesktopServicesOpen) {
                    e.stopPropagation();
                    closeDesktopServices(true);
                  }
                }}
                onBlur={(e) => {
                  // Focus panelin tamamen dışına çıktıysa kapat (Tab ile geçişte)
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setIsDesktopServicesOpen(false);
                  }
                }}
              >
                <button
                  ref={servicesTriggerRef}
                  aria-expanded={isDesktopServicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isDesktopServicesOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isDesktopServicesOpen && (
                  <div id="services-menu" className="absolute top-full left-0 pt-2">
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl p-2 min-w-[220px]">
                      <Link
                        href="/hizmetler"
                        onClick={() => closeDesktopServices()}
                        className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        Tüm Hizmetler
                      </Link>
                      <div className="my-1 h-px bg-border" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => closeDesktopServices()}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 sm:p-2.5 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 transition-all shadow-sm"
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav" className="lg:hidden mt-3 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    aria-controls="mobile-services"
                    className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                  {isServicesOpen && (
                    <div id="mobile-services" className="pl-4">
                      <Link
                        href="/hizmetler"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        Tüm Hizmetler
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.label}
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
            <CtaButton
              size="md"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openWizard("funnel");
              }}
              className="mx-4 mt-2 text-sm"
            >
              Ücretsiz Strateji Görüşmesi Al →
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  );
}
