import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutMe() {
  return (
    <section id="ben" className="section-spacing bg-surface">
      <div className="container-page">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Kim çekiyor
          </p>
          <h2 className="text-display-2 text-foreground mb-8">Ben Semih</h2>

          <div className="grid lg:grid-cols-[1fr_minmax(0,340px)] gap-10 lg:gap-14 items-start max-w-5xl">
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
                jestlerini bulmasına yardım ediyorum. Çoğu insan &quot;ben kamera karşısında
                olamam&quot; diye başlıyor, iki saat sonra kendi kendine konuşuyor. Setlerim yüksek
                enerjili ve keyifli geçer — çünkü iyi görüntü, rahat insandan çıkar.
              </p>
              <p>
                Analizden teslimata kadar her şeyi tek başıma yürütüyorum. Siz bir ajansla değil,
                işi yapan kişiyle çalışıyorsunuz.
              </p>
            </div>

            <figure className="w-full max-w-sm mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/foto/semih-portre.jpg"
                  alt="Semih Hasanoğlu, İstanbul'da gün batımında Boğaz manzarası önünde"
                  fill
                  sizes="(max-width: 1024px) 90vw, 340px"
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
