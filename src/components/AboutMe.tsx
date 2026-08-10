import Reveal from "@/components/Reveal";
import PhotoWall from "@/components/PhotoWall";

const PHOTO_COUNT = 25;

export default function AboutMe() {
  return (
    <section id="ben" className="section-spacing bg-surface overflow-hidden">
      <div className="container-page">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Kim çekiyor
          </p>
          <h2 className="text-display-2 text-foreground mb-8">Ben Semih</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Radyo-TV-Sinema mezunuyum. Dört yıl oyunculuk ve yönetmenlik yaptım. Hâlâ Semaver
                Kumpanya&apos;da konservatuara hazırlanan çocuklara gönüllü eğitim veriyorum,
                sertifikalı yaratıcı drama liderliği yapıyorum.
              </p>
              <p className="text-foreground font-medium">
                Bu yüzden sette sadece kayıt tuşuna basmıyorum.
              </p>
            </div>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
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
          </div>
        </Reveal>
      </div>

      <Reveal delay={80} className="mt-12">
        <PhotoWall count={PHOTO_COUNT} />
      </Reveal>
    </section>
  );
}
