import Image from "next/image";
import Reveal from "@/components/Reveal";

const PHOTOS = Array.from({ length: 10 }, (_, i) => `set-${String(i + 1).padStart(2, "0")}`);

export default function AboutMe() {
  return (
    <section id="ben" className="section-spacing bg-surface">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Metin */}
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
              Kim çekiyor
            </p>
            <h2 className="text-display-2 text-foreground mb-6">Ben Semih</h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Radyo-TV-Sinema mezunuyum. Dört yıl oyunculuk ve yönetmenlik yaptım. Hâlâ Semaver
                Kumpanya&apos;da konservatuara hazırlanan çocuklara gönüllü eğitim veriyorum,
                sertifikalı yaratıcı drama liderliği yapıyorum.
              </p>
              <p className="text-foreground font-medium">
                Bu yüzden sette sadece kayıt tuşuna basmıyorum.
              </p>
              <p>
                Karşımdaki kişi kamera görünce donuyorsa, işim orada başlıyor: kendi ses tonunu ve
                jestlerini bulmasına yardım ediyorum. Çoğu insan &quot;ben kamera karşısında olamam&quot;
                diye başlıyor, iki saat sonra kendi kendine konuşuyor. Setlerim yüksek enerjili
                ve keyifli geçer — çünkü iyi görüntü, rahat insandan çıkar.
              </p>
              <p>
                Analizden teslimata kadar her şeyi tek başıma yürütüyorum. Siz bir ajansla değil,
                işi yapan kişiyle çalışıyorsunuz.
              </p>
            </div>
          </Reveal>

          {/* Set kareleri */}
          <Reveal delay={80}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {PHOTOS.map((p, i) => (
                <div
                  key={p}
                  className={`relative overflow-hidden rounded-lg border border-white/10 ${
                    i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={`/foto/${p}.jpg`}
                    alt="Fennix Medya çekim setinden bir kare"
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50">
              Setten kareler · İstanbul
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
