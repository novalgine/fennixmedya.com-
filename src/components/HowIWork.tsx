import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    title: "Önce metin, sonra kamera",
    body: "Sete asla \"bugün ne çeksek\" diye gitmem. Çekilecek içerikler önceden nettir. Markanızı tanıyıp metinleri ben yazarım; siz kendi sektörünüzü benden iyi bildiğiniz için isterseniz siz yazarsınız, ya da ana konularınızdan yola çıkıp birlikte kurgularız.",
  },
  {
    title: "Ayda iki çekim günü",
    body: "Zamanlamayı birlikte planlarız, çekimler genelde öğleden sonra olur. Bir günde hedefim 4 Reels; günün akışına göre 3 ile 5 arasında değişir. Aylık 8 videoyu iki sete çıkarak tamamlarız.",
  },
  {
    title: "Kamera önünde yalnız değilsiniz",
    body: "Donduğunuz yerde devreye girerim. Oyunculuk ve yönetmenlik geçmişim tam da bunun için: kendi tonunuzu bulana kadar birlikte çalışırız. Konuşmalar bitince mekânın atmosferini toplayan detay çekimlerini yaparım.",
  },
  {
    title: "Akşam kurguya başlarım",
    body: "Eve döndüğüm akşam kurgu başlar. Videoları ay sonunu bekletip toplu atmam — bittikçe sırayla teslim ederim. İçeriğinizin ne zaman geleceğini bilirsiniz.",
  },
];

const GEAR = ["Sony FX30", "Tamron 17-70mm", "DJI RS4 Gimbal", "Tripod", "Rode Wireless GO II"];

export default function HowIWork() {
  return (
    <section id="surec" className="section-spacing bg-background">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Bir çekim günü"
            title="Nasıl Çalışıyorum"
            sub="Tek yapmanız gereken, belirlenen gün ve saatte sette olmak."
            align="left"
          />
        </Reveal>

        <div className="max-w-4xl">
          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="grid md:grid-cols-[minmax(90px,140px)_1fr] gap-3 md:gap-8 border-t border-border/40 py-8 md:py-10 items-start">
                <span className="text-display-num text-foreground/[0.13] select-none leading-none" aria-hidden>
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-prose">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border/40" />
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash mr-1">
              Sete getirdiklerim
            </span>
            {GEAR.map((g) => (
              <span
                key={g}
                className="font-mono text-[11px] px-2.5 py-1 rounded border border-ash/25 text-ash"
              >
                {g}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
