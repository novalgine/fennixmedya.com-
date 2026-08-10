import Reveal from "@/components/Reveal";
import { Check, X } from "lucide-react";

const NO = [
  {
    t: "\"Şu işten bir kurtulalım, sonra ödeşiriz\"",
    d: "Ben kurtarıcı değilim. Zaten ayakta olan işi büyütürüm.",
  },
  {
    t: "Ödemeyi esnetenler",
    d: "Bir kez olur. İkincisinde iş biter.",
  },
  {
    t: "\"Bir ayda patlarız\" bekleyenler",
    d: "Söz de vermem, çekim de yapmam.",
  },
  {
    t: "Statik görsel ve grafik tasarım",
    d: "Alanım değil, kendim yapmıyorum. İsterseniz güvendiğim birine yönlendirir, süreci yönetirim.",
  },
];

const YES = [
  "Bütçesi belli olan işletmeler ve kişisel markalar",
  "Dijital medyayı gider değil yatırım olarak gören markalar",
  "Klinikler, doktorlar, koçlar, danışmanlar",
  "Tiyatrolar, butik ve kurumsal markalar",
];

export default function NotForYou() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Çalışmadıklarım */}
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-danger/80 mb-3">
              Açık konuşalım
            </p>
            <h2 className="text-display-2 text-foreground mb-8">Kimlerle Çalışmıyorum</h2>
            <ul className="space-y-6">
              {NO.map((item) => (
                <li key={item.t} className="flex gap-4">
                  <X className="w-5 h-5 text-danger shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-heading font-bold text-lg uppercase text-foreground leading-tight">
                      {item.t}
                    </p>
                    <p className="text-muted-foreground mt-1.5 leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Çalıştıklarım */}
          <Reveal delay={80}>
            <div className="card-surface p-8 lg:p-10 h-full">
              <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
                Buradaysanız doğru yerdesiniz
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mb-6">
                Kimlerle Çalışıyorum
              </h3>
              <ul className="space-y-4">
                {YES.map((y) => (
                  <li key={y} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {y}
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-border/40 text-muted-foreground leading-relaxed">
                Kısacası: birlikte kazanmaya niyetli, işini ciddiye alan markalarla uzun soluklu
                çalışıyorum. En eski müşterimle Ocak 2026&apos;dan beri devam ediyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
