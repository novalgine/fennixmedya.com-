import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";

const HONEST = [
  {
    t: "Bütçesi henüz oturmamış işler",
    d: "\"Şu işler bir açılsın, sonra ödeşiriz\" diyen markalarla çalışmıyorum. Bunu kimseyi küçümsemek için söylemiyorum — düzenli içerik üretimi, düzenli bir bütçe gerektiriyor. Zaten ayakta olan bir işi büyütmek benim en iyi yaptığım şey; bir işi kurtarmak değil.",
  },
  {
    t: "Bir ayda sonuç beklentisi",
    d: "\"Bir ayda patlarız\" diye bir söz veremem. Sosyal medyada kalıcı sonuç, düzenli üretimle birkaç ay içinde geliyor. Bunu baştan konuşalım ki ikimiz de doğru beklentiyle başlayalım.",
  },
  {
    t: "Ödeme belirsizliği",
    d: "Ödemeyi çekim gününün sonunda alıyorum. Sürekli ertelenen ödemeler üretim ritmini bozuyor, bu yüzden bu konuda baştan net olmayı tercih ediyorum.",
  },
  {
    t: "Grafik tasarım ve statik görsel",
    d: "Bu benim alanım değil, o yüzden kendim yapmıyorum. İhtiyacınız olursa güvendiğim isimlere yönlendirir, süreci sizin adınıza takip ederim.",
  },
];

const YES = [
  "İşini ciddiye alan, bütçesi belli işletmeler ve kişisel markalar",
  "Dijital medyayı gider değil yatırım olarak gören markalar",
  "Klinikler, doktorlar, koçlar, danışmanlar",
  "Tiyatrolar, butik ve kurumsal markalar",
];

export default function NotForYou() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Açık konuşalım
          </p>
          <h2 className="text-display-2 text-foreground mb-4">Doğru Eşleşme Önemli</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Her markayla çalışmıyorum — bu ikimizin de yararına. Beklentiler baştan netse iş
            keyifli gidiyor, sonuç da iyi çıkıyor.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-8">
            {HONEST.map((item, i) => (
              <Reveal key={item.t} delay={i * 60}>
                <h3 className="font-heading font-bold text-xl uppercase text-foreground/90 leading-tight mb-2">
                  {item.t}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">{item.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="card-surface p-8 lg:p-10 lg:sticky lg:top-24">
              <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-6">
                İyi Anlaştığım Markalar
              </h3>
              <ul className="space-y-4">
                {YES.map((y) => (
                  <li key={y} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                    {y}
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-border/40 text-muted-foreground leading-relaxed">
                Kısacası: birlikte kazanmaya niyetli, uzun soluklu çalışmak isteyen markalarla
                iyi anlaşıyorum.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
