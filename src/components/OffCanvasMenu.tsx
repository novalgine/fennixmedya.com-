"use client";
import { X, PlayCircle, User } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWizard: () => void;
}

const placeholderVideos = [
  { id: "1", title: "Premium Kurumsal Film", embedUrl: "https://www.youtube.com/embed/t1edyqgT1UQ?rel=0&modestbranding=1" },
  { id: "2", title: "E-Ticaret Reklam Kampanyası", embedUrl: "https://www.youtube.com/embed/t1edyqgT1UQ?rel=0&modestbranding=1" },
  { id: "3", title: "Klinik Marka Serüveni", embedUrl: "https://www.youtube.com/embed/t1edyqgT1UQ?rel=0&modestbranding=1" },
];

const OffCanvasMenu = ({ isOpen, onClose, onOpenWizard }: OffCanvasMenuProps) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Sliding Menu Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[600px] bg-background border-l border-border shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-500 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-background/95 backdrop-blur-md border-b border-border">
          <h2 className="font-heading text-xl font-bold tracking-widest text-foreground uppercase">Menü</h2>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors border border-border"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-12 flex-grow">
          
          {/* About Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Hakkımızda</h3>
            </div>
            <div className="bg-muted/50 border border-border rounded-2xl p-6 relative overflow-hidden group">
              {/* Subtle gold glow behind text */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors" />
              <p className="text-muted-foreground leading-relaxed relative z-10 text-sm md:text-base">
                Merhabalar, ben <span className="text-foreground font-medium">Semih Hasanoğlu</span>. Fennix Medya olarak, markaların dijital dünyadaki hikayelerini en estetik ve dönüşüm odaklı haliyle ekrana taşıyoruz.
                <br /><br />
                Kamera önü gerginliğinizi profesyonel set adabımızla sıfırlıyor, tüm yaratıcı yükü omuzlarınızdan alıyoruz. Amacımız sadece güzel görünen videolar değil, <span className="text-primary font-medium">otoritenizi inşa edecek kârlı içerikler</span> üretmek.
              </p>
            </div>
          </section>

          {/* Portfolio Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <PlayCircle className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Teslim Edilen İşler</h3>
            </div>
            <div className="space-y-6">
              {placeholderVideos.map((video) => (
                <div key={video.id} className="group">
                  <p className="text-foreground font-medium mb-2 text-sm tracking-wide">{video.title}</p>
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border relative">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full border-0 absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground/50 text-center italic mt-4">Daha fazla referans ve dikey formatlı (Reels) işlerimiz için sosyal medya hesaplarımızı inceleyebilirsiniz.</p>
            </div>
          </section>

        </div>

        {/* Footer CTA (Sticky at bottom) */}
        <div className="sticky bottom-0 z-20 p-6 bg-background border-t border-border shadow-[0_-20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
          <p className="text-sm text-muted-foreground text-center mb-4">Üretim sürecimizi beğendiniz mi?</p>
          <button
            onClick={() => {
              onClose();
              setTimeout(() => onOpenWizard(), 300); // Wait for menu to close before opening wizard
            }}
            className="w-full bg-gradient-gold text-primary-foreground font-heading font-bold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,164,74,0.2)]"
          >
            Ücretsiz Strateji Görüşmesi Al →
          </button>
        </div>

      </div>
    </div>
  );
};

export default OffCanvasMenu;
