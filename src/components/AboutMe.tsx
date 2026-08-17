import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutMe() {
  return (
    <section id="ben" className="section-spacing bg-surface">
      <div className="container-page">
        <Reveal>
          {/* Başlık ızgaranın ÜSTÜNDE değil, sol sütunun İÇİNDE — hakkımda sayfasındaki gibi.
              Dışarıda kaldığında başlıkla metin arasında fotoğraf boyu kadar boşluk açılıyordu. */}
          <div className="grid lg:grid-cols-[2.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
                Kim çekiyor
              </p>
              <h2 className="text-display-2 text-foreground mb-8">Ben Semih</h2>

              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Sinema-TV mezunuyum. İçerik stratejisinden metin yazımına, çekimden kurguya kadar
                  video üretiminin tüm süreçlerini üstleniyorum. Bunun yanında dört yıl tiyatro
                  oyunculuğu yaptım ve yaratıcı drama lideriyim.
                </p>
                <p>
                  Oyunculuk ve drama geçmişim, çekim anında doğrudan işe yarıyor: Kamera
                  karşısındakilere rol yaptırmak değil, kendi doğal enerjileriyle konuşmalarını
                  sağlamak ana odağım.
                </p>
                <p className="text-foreground font-medium">
                  Projeleri arada temsilciler veya ajans katmanları olmadan, doğrudan birebir
                  yürütüyorum.
                </p>
              </div>
            </div>

            <figure className="w-full max-w-sm mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/foto/semih-portre-4x5.jpg"
                  alt="Semih Hasanoğlu, İstanbul'da gün batımında Boğaz manzarası önünde"
                  fill
                  sizes="(max-width: 1024px) 92vw, 380px"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
                  Semih Hasanoğlu
                </span>
                <span className="h-px flex-1 bg-border/50" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash/60">
                  İstanbul
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
