import { Users, Zap } from "lucide-react";
import SocialProofCarousel from "./SocialProofCarousel";

const profiles = [
  "Müşteri başına yüksek hizmet bedeli (high-ticket) alan profesyoneller",
  "Kişisel markasını büyütmek ve güven inşa etmek isteyen uzmanlar",
  "Sosyal medyada 'ucuz' görünmekten kaçınıp otorite algısı yaratmak isteyen işletme sahipleri",
  "İçerik üretiminin operasyonel yükünden kurtulup sadece işine odaklanmak isteyenler",
];

export default function SocialProofSection() {
  return (
    <section className="section-spacing bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-6xl font-black text-center mb-16 tracking-tight">
          Fennix Medya ile <span className="text-gradient-gold">Otoritesini İnşa Eden Markalar</span>
        </h2>

        {/* ── Client Component: Carousel ── */}
        <SocialProofCarousel />

        {/* Target Audience Profiles (Server-Rendered Static Content) */}
        <div className="bg-card/40 border border-border/50 rounded-2xl p-10">
          <h3 className="font-heading text-2xl font-black mb-8 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" />
            Kimlerle Çalışıyoruz?
          </h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {profiles.map((p, i) => (
              <li key={i} className="flex items-start gap-4 text-foreground/80 text-lg md:text-xl font-medium bg-background/50 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-gold mt-2 shrink-0 shadow-[0_0_10px_rgba(232,106,31,0.5)]" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center mt-12 text-primary font-black text-xl flex items-center justify-center gap-2 text-balance">
          <Zap className="w-6 h-6 fill-primary shrink-0" />
          Ortak Nokta: Tüm referanslarımız pazarında fiyatla değil, otoritesiyle rekabet eden liderlerdir.
        </p>
      </div>
    </section>
  );
}
